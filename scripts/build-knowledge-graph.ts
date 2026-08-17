import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface KnowledgePoint {
  id: string;
  name: string;
  category: string;
  description: string;
  prerequisites: string[];
  follow_ups: string[];
  related: string[];
}

interface GraphNode {
  id: string;
  name: string;
  category: string;
}

interface GraphEdge {
  source: string;
  target: string;
  type: 'prerequisite' | 'follow_up' | 'related';
}

interface KnowledgeGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export function buildKnowledgeGraph(contentDir: string): KnowledgeGraph {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const kp = yaml.load(raw) as KnowledgePoint;

    nodes.push({ id: kp.id, name: kp.name, category: kp.category });

    for (const prereq of kp.prerequisites || []) {
      edges.push({ source: prereq, target: kp.id, type: 'prerequisite' });
    }
    for (const followUp of kp.follow_ups || []) {
      edges.push({ source: kp.id, target: followUp, type: 'follow_up' });
    }
    for (const rel of kp.related || []) {
      // 避免重复边（A related B 和 B related A 只保留一条）
      const exists = edges.some(
        e => e.type === 'related' &&
          ((e.source === kp.id && e.target === rel) || (e.source === rel && e.target === kp.id))
      );
      if (!exists) {
        edges.push({ source: kp.id, target: rel, type: 'related' });
      }
    }
  }

  return { nodes, edges };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/knowledge-points');
  const graph = buildKnowledgeGraph(contentDir);

  const outputDir = path.resolve('public/data');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(
    path.join(outputDir, 'knowledge-graph.json'),
    JSON.stringify(graph, null, 2)
  );
  console.log(`✅ Knowledge graph: ${graph.nodes.length} nodes, ${graph.edges.length} edges`);
}
