import { describe, it, expect, beforeAll } from 'vitest';
import { buildKnowledgeGraph } from '../../scripts/build-knowledge-graph';
import path from 'path';

describe('buildKnowledgeGraph', () => {
  let graph: { nodes: Array<{id: string; name: string; category: string}>; edges: Array<{source: string; target: string; type: string}> };

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
});
