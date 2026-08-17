import { describe, it, expect, beforeAll } from 'vitest';
import { buildKnowledgeGraph } from '../../scripts/build-knowledge-graph';
import path from 'path';

describe('Knowledge Graph Integrity', () => {
  let graph: ReturnType<typeof buildKnowledgeGraph>;

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/knowledge-points');
    graph = buildKnowledgeGraph(contentDir);
  });

  it('should have no orphan nodes (nodes with no edges)', () => {
    const connectedIds = new Set<string>();
    for (const edge of graph.edges) {
      connectedIds.add(edge.source);
      connectedIds.add(edge.target);
    }
    const orphans = graph.nodes.filter(n => !connectedIds.has(n.id));
    expect(orphans).toEqual([]);
  });

  it('should have no circular dependencies', () => {
    // Build adjacency list for prerequisite edges only
    const adj: Record<string, string[]> = {};
    for (const edge of graph.edges) {
      if (edge.type === 'prerequisite') {
        if (!adj[edge.source]) adj[edge.source] = [];
        adj[edge.source].push(edge.target);
      }
    }

    // DFS cycle detection
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

    for (const node of graph.nodes) {
      expect(hasCycle(node.id)).toBe(false);
    }
  });

  it('prerequisite edges should have matching follow_up edges (bidirectional)', () => {
    // For each prerequisite edge A→B (A is prereq of B),
    // there should be a follow_up edge A→B (A lists B as follow_up).
    // This ensures YAML prerequisites and follow_ups are consistent.
    const prereqPairs = graph.edges
      .filter(e => e.type === 'prerequisite')
      .map(e => `${e.source}->${e.target}`);
    const followUpPairs = graph.edges
      .filter(e => e.type === 'follow_up')
      .map(e => `${e.source}->${e.target}`);

    for (const pair of prereqPairs) {
      expect(followUpPairs).toContain(pair);
    }
  });
});
