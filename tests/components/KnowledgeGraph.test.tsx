import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';

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
});
