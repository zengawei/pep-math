import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';

// Mock cytoscape before importing the component
const mockCyInstance = {
  on: vi.fn(),
  destroy: vi.fn(),
};

vi.mock('cytoscape', () => ({
  default: vi.fn(() => mockCyInstance),
}));

import KnowledgeGraph from '../../src/components/KnowledgeGraph';

const mockGraph = {
  nodes: [
    { id: 'set-concept', name: '集合的概念', category: '集合与逻辑', textbooks: ['required-1'], x: 50, y: 50 },
    { id: 'set-operations', name: '集合的运算', category: '集合与逻辑', textbooks: ['required-1'], x: 130, y: 50 },
    { id: 'function-concept', name: '函数的概念', category: '函数', textbooks: ['required-1'], x: 250, y: 50 },
  ],
  edges: [
    { source: 'set-concept', target: 'set-operations', type: 'prerequisite' },
    { source: 'set-concept', target: 'function-concept', type: 'follow_up' },
  ],
};

describe('KnowledgeGraph', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a cy container div', () => {
    const { container } = render(
      <KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />
    );
    expect(container.querySelector('#cy')).toBeTruthy();
  });

  it('renders filter buttons for categories', () => {
    const { container } = render(
      <KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />
    );
    const filters = container.querySelector('.graph-filters');
    expect(filters).toBeTruthy();
    // Should have "全部" button plus category buttons
    const buttons = filters!.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(3); // 全部 + 集合与逻辑 + 函数
  });

  it('initializes cytoscape with preset layout', async () => {
    const cytoscapeModule = await import('cytoscape');
    const cytoscape = vi.mocked(cytoscapeModule.default);
    render(<KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />);
    expect(cytoscape).toHaveBeenCalled();
    const callArgs = cytoscape.mock.calls[0][0] as any;
    expect(callArgs.layout.name).toBe('preset');
  });

  it('registers tap handler on nodes', () => {
    render(<KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />);
    expect(mockCyInstance.on).toHaveBeenCalledWith('tap', 'node', expect.any(Function));
  });

  it('cleans up cytoscape on unmount', () => {
    const { unmount } = render(
      <KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />
    );
    unmount();
    expect(mockCyInstance.destroy).toHaveBeenCalled();
  });

  it('filters nodes by textbook', async () => {
    const cytoscapeModule = await import('cytoscape');
    const cytoscape = vi.mocked(cytoscapeModule.default);

    const multiTextbookGraph = {
      nodes: [
        { id: 'set-concept', name: '集合的概念', category: '集合与逻辑', textbooks: ['required-1'], x: 50, y: 50 },
        { id: 'vector-concept', name: '向量的概念', category: '向量', textbooks: ['required-2'], x: 150, y: 50 },
        { id: 'complex-num', name: '复数', category: '复数', textbooks: ['required-2'], x: 250, y: 50 },
      ],
      edges: [],
    };

    render(<KnowledgeGraph graph={multiTextbookGraph} textbookFilter="required-1" />);

    expect(cytoscape).toHaveBeenCalled();
    const callArgs = cytoscape.mock.calls[cytoscape.mock.calls.length - 1][0] as any;
    const nodeIds = callArgs.elements
      .filter((el: any) => !el.data.source) // nodes only (no edges)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['set-concept']);
  });

  it('shows all nodes when no textbookFilter is set', async () => {
    const cytoscapeModule = await import('cytoscape');
    const cytoscape = vi.mocked(cytoscapeModule.default);

    render(<KnowledgeGraph graph={mockGraph} />);

    expect(cytoscape).toHaveBeenCalled();
    const callArgs = cytoscape.mock.calls[cytoscape.mock.calls.length - 1][0] as any;
    const nodeIds = callArgs.elements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toHaveLength(mockGraph.nodes.length);
  });

  it('responds to textbook-change custom event', async () => {
    const cytoscapeModule = await import('cytoscape');
    const cytoscape = vi.mocked(cytoscapeModule.default);

    const multiTextbookGraph = {
      nodes: [
        { id: 'set-concept', name: '集合的概念', category: '集合与逻辑', textbooks: ['required-1'], x: 50, y: 50 },
        { id: 'vector-concept', name: '向量的概念', category: '向量', textbooks: ['required-2'], x: 150, y: 50 },
      ],
      edges: [],
    };

    render(<KnowledgeGraph graph={multiTextbookGraph} textbookFilter="required-1" />);

    // Dispatch textbook-change event to switch to required-2
    act(() => {
      window.dispatchEvent(new CustomEvent('textbook-change', { detail: 'required-2' }));
    });

    const lastCallArgs = cytoscape.mock.calls[cytoscape.mock.calls.length - 1][0] as any;
    const nodeIds = lastCallArgs.elements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['vector-concept']);
  });
});
