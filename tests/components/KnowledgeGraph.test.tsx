import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';

// Mock cytoscape before importing the component
const mockCyInstance = {
  on: vi.fn(),
  destroy: vi.fn(),
  elements: vi.fn(() => ({ remove: vi.fn() })),
  add: vi.fn(),
  layout: vi.fn(() => ({ run: vi.fn() })),
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

  it('initializes cytoscape on mount', async () => {
    const cytoscapeModule = await import('cytoscape');
    const cytoscape = vi.mocked(cytoscapeModule.default);
    render(<KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />);
    expect(cytoscape).toHaveBeenCalled();
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

  it('adds filtered nodes to cytoscape', () => {
    render(<KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />);
    expect(mockCyInstance.add).toHaveBeenCalled();
    const addedElements = mockCyInstance.add.mock.calls[0][0];
    const nodeIds = addedElements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['set-concept', 'set-operations', 'function-concept']);
  });

  it('filters nodes by textbook', () => {
    const multiTextbookGraph = {
      nodes: [
        { id: 'set-concept', name: '集合的概念', category: '集合与逻辑', textbooks: ['required-1'], x: 50, y: 50 },
        { id: 'vector-concept', name: '向量的概念', category: '向量', textbooks: ['required-2'], x: 150, y: 50 },
        { id: 'complex-num', name: '复数', category: '复数', textbooks: ['required-2'], x: 250, y: 50 },
      ],
      edges: [],
    };

    render(<KnowledgeGraph graph={multiTextbookGraph} textbookFilter="required-1" />);
    const addedElements = mockCyInstance.add.mock.calls[0][0];
    const nodeIds = addedElements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['set-concept']);
  });

  it('shows all nodes when no textbookFilter is set', () => {
    render(<KnowledgeGraph graph={mockGraph} />);
    const addedElements = mockCyInstance.add.mock.calls[0][0];
    const nodeIds = addedElements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toHaveLength(mockGraph.nodes.length);
  });

  it('filters nodes for selective-1', () => {
    const triTextbookGraph = {
      nodes: [
        { id: 'set-concept', name: '集合', category: '集合与逻辑', textbooks: ['required-1'], x: 0, y: 0 },
        { id: 'vector-concept', name: '向量', category: '向量', textbooks: ['required-2'], x: 100, y: 0 },
        { id: 'space-vector-concept', name: '空间向量', category: '空间向量', textbooks: ['selective-1'], x: 200, y: 0 },
      ],
      edges: [],
    };

    render(<KnowledgeGraph graph={triTextbookGraph} textbookFilter="selective-1" />);
    const addedElements = mockCyInstance.add.mock.calls[0][0];
    const nodeIds = addedElements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['space-vector-concept']);
  });

  it('filters nodes for selective-2', () => {
    const quadTextbookGraph = {
      nodes: [
        { id: 'set-concept', name: '集合', category: '集合与逻辑', textbooks: ['required-1'], x: 0, y: 0 },
        { id: 'sequence-concept', name: '数列概念', category: '数列', textbooks: ['selective-2'], x: 100, y: 0 },
        { id: 'derivative-concept', name: '导数概念', category: '微积分', textbooks: ['selective-2'], x: 200, y: 0 },
      ],
      edges: [],
    };

    render(<KnowledgeGraph graph={quadTextbookGraph} textbookFilter="selective-2" />);
    const addedElements = mockCyInstance.add.mock.calls[0][0];
    const nodeIds = addedElements
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['sequence-concept', 'derivative-concept']);
  });

  it('responds to textbook-change custom event', () => {
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

    // After event, cy.add should have been called again with filtered nodes
    const lastAddCall = mockCyInstance.add.mock.calls[mockCyInstance.add.mock.calls.length - 1][0];
    const nodeIds = lastAddCall
      .filter((el: any) => !el.data.source)
      .map((el: any) => el.data.id);
    expect(nodeIds).toEqual(['vector-concept']);
  });
});
