import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface AppliedIn {
  textbook: string;
  chapters: number[];
}

interface KnowledgePoint {
  id: string;
  name: string;
  category: string;
  description: string;
  prerequisites: string[];
  follow_ups: string[];
  related: string[];
  applied_in?: AppliedIn[];
}

interface GraphNode {
  id: string;
  name: string;
  category: string;
  textbooks: string[];
  ncee_count?: number;
  x?: number;
  y?: number;
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

/**
 * Compute layout coordinates for graph nodes.
 * Groups nodes by category, arranging each group in a grid within its own region.
 */
export function computeLayout(nodes: GraphNode[], edges: GraphEdge[]): void {
  const categories = [...new Set(nodes.map(n => n.category))];
  const catWidth = 200;
  const catHeight = 150;

  categories.forEach((cat, ci) => {
    const catNodes = nodes.filter(n => n.category === cat);
    const cols = Math.ceil(Math.sqrt(catNodes.length));
    catNodes.forEach((node, ni) => {
      const row = Math.floor(ni / cols);
      const col = ni % cols;
      node.x = ci * catWidth + col * 80 + 50;
      node.y = row * 80 + 50;
    });
  });
}

/**
 * Filter graph to only include nodes/edges for a specific textbook.
 */
export function filterByTextbook(graph: KnowledgeGraph, textbookId: string): KnowledgeGraph {
  const filteredNodes = graph.nodes.filter(n => n.textbooks.includes(textbookId));
  const nodeIds = new Set(filteredNodes.map(n => n.id));
  const filteredEdges = graph.edges.filter(
    e => nodeIds.has(e.source) && nodeIds.has(e.target)
  );
  return { nodes: filteredNodes, edges: filteredEdges };
}

export function buildKnowledgeGraph(contentDir: string): KnowledgeGraph {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const kp = yaml.load(raw) as KnowledgePoint;

    const textbooks = (kp.applied_in || []).map(a => a.textbook);
    nodes.push({ id: kp.id, name: kp.name, category: kp.category, textbooks });

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

  // Pre-compute layout coordinates
  computeLayout(nodes, edges);

  return { nodes, edges };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/knowledge-points');
  const graph = buildKnowledgeGraph(contentDir);

  // Add NCEE counts from by-kp index
  const nceeByKpDir = path.resolve('public/data/ncee/by-kp');
  if (fs.existsSync(nceeByKpDir)) {
    const kpFiles = fs.readdirSync(nceeByKpDir).filter(f => f.endsWith('.json'));
    for (const f of kpFiles) {
      const kpId = f.replace('.json', '');
      const questions = JSON.parse(fs.readFileSync(path.join(nceeByKpDir, f), 'utf-8'));
      const node = graph.nodes.find(n => n.id === kpId);
      if (node) {
        node.ncee_count = questions.length;
      }
    }
  }

  const outputDir = path.resolve('public/data');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(
    path.join(outputDir, 'knowledge-graph.json'),
    JSON.stringify(graph, null, 2)
  );
  const nodesWithNcee = graph.nodes.filter(n => (n.ncee_count || 0) > 0).length;
  console.log(`✅ Knowledge graph: ${graph.nodes.length} nodes, ${graph.edges.length} edges (${nodesWithNcee} with NCEE counts)`);
}
