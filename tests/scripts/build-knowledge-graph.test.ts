import { describe, it, expect, beforeAll } from 'vitest';
import { buildKnowledgeGraph, computeLayout, filterByTextbook } from '../../scripts/build-knowledge-graph';
import path from 'path';

describe('buildKnowledgeGraph', () => {
  let graph: { nodes: Array<{id: string; name: string; category: string; textbooks: string[]; x?: number; y?: number}>; edges: Array<{source: string; target: string; type: string}> };

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/knowledge-points');
    graph = buildKnowledgeGraph(contentDir);
  });

  it('should extract all knowledge points as nodes', () => {
    expect(graph.nodes.length).toBeGreaterThanOrEqual(3);
    const ids = graph.nodes.map(n => n.id);
    expect(ids).toContain('set-concept');
    expect(ids).toContain('set-representation');
    expect(ids).toContain('set-operations');
  });

  it('should build edges from prerequisites/follow_ups relationships', () => {
    // set-concept → set-representation (prerequisite)
    const prereqEdge = graph.edges.find(
      e => e.source === 'set-concept' && e.target === 'set-representation' && e.type === 'prerequisite'
    );
    expect(prereqEdge).toBeDefined();
  });

  it('should include node metadata (name, category)', () => {
    const node = graph.nodes.find(n => n.id === 'set-concept');
    expect(node?.name).toBe('集合的概念');
    expect(node?.category).toBe('集合与逻辑');
  });

  it('should include textbooks field from applied_in', () => {
    const node = graph.nodes.find(n => n.id === 'set-concept');
    expect(node?.textbooks).toContain('required-1');
  });

  it('should include pre-computed layout coordinates (x, y)', () => {
    for (const node of graph.nodes) {
      expect(node.x).toBeDefined();
      expect(node.y).toBeDefined();
      expect(typeof node.x).toBe('number');
      expect(typeof node.y).toBe('number');
    }
  });

  it('should assign different coordinates to nodes in different categories', () => {
    const setNode = graph.nodes.find(n => n.id === 'set-concept');
    const funcNode = graph.nodes.find(n => n.id === 'function-concept');
    // Different categories should have different x regions
    expect(setNode?.x).not.toBe(funcNode?.x);
  });
});

describe('computeLayout', () => {
  it('should assign x, y to every node', () => {
    const nodes = [
      { id: 'a', name: 'A', category: 'cat1', textbooks: [] },
      { id: 'b', name: 'B', category: 'cat1', textbooks: [] },
      { id: 'c', name: 'C', category: 'cat2', textbooks: [] },
    ];
    computeLayout(nodes, []);
    for (const n of nodes) {
      expect(n.x).toBeDefined();
      expect(n.y).toBeDefined();
    }
  });
});

describe('filterByTextbook', () => {
  it('should return only nodes matching the textbook', () => {
    const graph = {
      nodes: [
        { id: 'a', name: 'A', category: 'cat1', textbooks: ['required-1'], x: 0, y: 0 },
        { id: 'b', name: 'B', category: 'cat1', textbooks: ['required-2'], x: 10, y: 10 },
      ],
      edges: [
        { source: 'a', target: 'b', type: 'prerequisite' as const },
      ],
    };
    const filtered = filterByTextbook(graph, 'required-1');
    expect(filtered.nodes.length).toBe(1);
    expect(filtered.nodes[0].id).toBe('a');
    // Edge should be excluded since target node is filtered out
    expect(filtered.edges.length).toBe(0);
  });

  it('should keep edges where both endpoints match the textbook', () => {
    const graph = {
      nodes: [
        { id: 'a', name: 'A', category: 'cat1', textbooks: ['required-1'], x: 0, y: 0 },
        { id: 'b', name: 'B', category: 'cat1', textbooks: ['required-1'], x: 10, y: 10 },
      ],
      edges: [
        { source: 'a', target: 'b', type: 'prerequisite' as const },
      ],
    };
    const filtered = filterByTextbook(graph, 'required-1');
    expect(filtered.nodes.length).toBe(2);
    expect(filtered.edges.length).toBe(1);
  });
});
