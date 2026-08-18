import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

export function validateContent(contentDir: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Collect all knowledge point IDs
  const kpDir = path.join(contentDir, '..', 'knowledge-points');
  const kpIds = new Set<string>();
  if (fs.existsSync(kpDir)) {
    for (const file of fs.readdirSync(kpDir)) {
      if (file.endsWith('.yml') || file.endsWith('.yaml')) {
        const raw = fs.readFileSync(path.join(kpDir, file), 'utf-8');
        const kp = yaml.load(raw) as { id: string };
        kpIds.add(kp.id);
      }
    }
  }

  // Walk all md files
  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        const rel = path.relative(contentDir, fullPath);

        if (data.type === 'exercise') {
          if (!data.textbook) errors.push(`${rel}: missing textbook`);
          if (!data.chapter) errors.push(`${rel}: missing chapter`);
          if (data.section === undefined || data.section === null) errors.push(`${rel}: missing section`);
          if (!data.number) errors.push(`${rel}: missing number`);
          if (!data.difficulty) errors.push(`${rel}: missing difficulty`);
          if (!data.knowledge_points?.length) errors.push(`${rel}: missing knowledge_points`);
          if (data.source !== '人教A版2019') errors.push(`${rel}: source must be "人教A版2019", got "${data.source}"`);
          if (!data.references) warnings.push(`${rel}: missing references`);

          // Validate knowledge point IDs exist
          for (const kpId of data.knowledge_points || []) {
            if (!kpIds.has(kpId)) {
              errors.push(`${rel}: unknown knowledge_point ID "${kpId}"`);
            }
          }
        }

        if (data.type === 'example') {
          if (!data.knowledge_points?.length) errors.push(`${rel}: missing knowledge_points`);
        }

        if (data.type === 'definition') {
          if (!data.name) errors.push(`${rel}: missing name`);
          if (!data.related_knowledge_points?.length) errors.push(`${rel}: missing related_knowledge_points`);
        }
      }
    }
  }

  walk(contentDir);
  return { errors, warnings };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/textbooks');
  const result = validateContent(contentDir);

  if (result.warnings.length > 0) {
    console.log(`⚠️  ${result.warnings.length} warnings:`);
    result.warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (result.errors.length > 0) {
    console.error(`❌ ${result.errors.length} errors:`);
    result.errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log('✅ Content validation passed');
}
