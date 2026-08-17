import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

interface KnowledgePoint {
  id: string;
  name: string;
  prerequisites: string[];
  follow_ups: string[];
  related: string[];
}

export function validateKnowledgeGraph(kpDir: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Read all knowledge points
  const kps: KnowledgePoint[] = [];
  const kpMap = new Map<string, KnowledgePoint>();
  for (const file of fs.readdirSync(kpDir)) {
    if (file.endsWith('.yml') || file.endsWith('.yaml')) {
      const raw = fs.readFileSync(path.join(kpDir, file), 'utf-8');
      const kp = yaml.load(raw) as KnowledgePoint;
      kps.push(kp);
      kpMap.set(kp.id, kp);
    }
  }

  // Check 1: Bidirectional consistency (prerequisites ↔ follow_ups)
  for (const kp of kps) {
    for (const prereq of kp.prerequisites || []) {
      const target = kpMap.get(prereq);
      if (!target) {
        errors.push(`${kp.id}: prerequisites references unknown ID "${prereq}"`);
        continue;
      }
      if (!target.follow_ups?.includes(kp.id)) {
        errors.push(`${kp.id} → ${prereq}: A.prerequisites contains B, but B.follow_ups does not contain A`);
      }
    }
  }

  // Check 2: Related symmetry
  for (const kp of kps) {
    for (const rel of kp.related || []) {
      const target = kpMap.get(rel);
      if (!target) {
        errors.push(`${kp.id}: related references unknown ID "${rel}"`);
        continue;
      }
      if (!target.related?.includes(kp.id)) {
        warnings.push(`${kp.id} → ${rel}: A.related contains B, but B.related does not contain A`);
      }
    }
  }

  // Check 3: Orphan nodes
  const connectedIds = new Set<string>();
  for (const kp of kps) {
    if (kp.prerequisites?.length || kp.follow_ups?.length || kp.related?.length) {
      connectedIds.add(kp.id);
      for (const id of [...(kp.prerequisites || []), ...(kp.follow_ups || []), ...(kp.related || [])]) {
        connectedIds.add(id);
      }
    }
  }
  for (const kp of kps) {
    if (!connectedIds.has(kp.id)) {
      warnings.push(`${kp.id}: orphan node (no relationships)`);
    }
  }

  // Check 4: Circular dependencies
  const adj: Record<string, string[]> = {};
  for (const kp of kps) {
    adj[kp.id] = kp.prerequisites || [];
  }
  const visited = new Set<string>();
  const inStack = new Set<string>();
  function hasCycle(node: string): boolean {
    if (inStack.has(node)) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    inStack.add(node);
    for (const next of adj[node] || []) {
      if (hasCycle(next)) return true;
    }
    inStack.delete(node);
    return false;
  }
  for (const kp of kps) {
    if (hasCycle(kp.id)) {
      errors.push(`Circular dependency detected involving "${kp.id}"`);
    }
  }

  return { errors, warnings };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const kpDir = path.resolve('src/content/knowledge-points');
  const result = validateKnowledgeGraph(kpDir);

  if (result.warnings.length > 0) {
    console.log(`⚠️  ${result.warnings.length} warnings:`);
    result.warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (result.errors.length > 0) {
    console.error(`❌ ${result.errors.length} errors:`);
    result.errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log('✅ Knowledge graph validation passed');
}
