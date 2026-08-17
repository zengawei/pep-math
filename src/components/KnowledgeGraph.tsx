import { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';

interface GraphNode {
  id: string;
  name: string;
  category: string;
  textbooks: string[];
  x?: number;
  y?: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

interface KnowledgeGraphProps {
  graph: GraphData;
  textbookFilter?: string;
}

const categoryColors: Record<string, string> = {
  '集合与逻辑': '#3B82F6',
  '函数': '#10B981',
  '不等式': '#F59E0B',
  '方程': '#8B5CF6',
  '三角函数': '#EF4444',
};

export default function KnowledgeGraph({ graph, textbookFilter }: KnowledgeGraphProps) {
  const cyRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [...new Set(graph.nodes.map(n => n.category))];

  useEffect(() => {
    if (!cyRef.current) return;

    const filteredNodes = selectedCategory === 'all'
      ? graph.nodes
      : graph.nodes.filter(n => n.category === selectedCategory);

    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredEdges = graph.edges.filter(
      e => filteredNodeIds.has(e.source) && filteredNodeIds.has(e.target)
    );

    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        ...filteredNodes.map(n => ({
          data: { id: n.id, label: n.name, category: n.category },
          position: { x: n.x || 0, y: n.y || 0 },
        })),
        ...filteredEdges.map(e => ({
          data: { source: e.source, target: e.target, type: e.type },
        })),
      ],
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'background-color': (ele: any) => categoryColors[ele.data('category')] || '#6B7280',
            'width': 40,
            'height': 40,
            'text-valign': 'bottom',
            'text-margin-y': 5,
            'font-size': '10px',
          } as any,
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#CBD5E1',
            'target-arrow-color': '#CBD5E1',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          } as any,
        },
      ],
      layout: { name: 'preset' },
      userZoomingEnabled: true,
      userPanningEnabled: true,
    });

    // Click handler: navigate to knowledge point page
    cy.on('tap', 'node', (evt: any) => {
      const nodeId = evt.target.id();
      window.location.href = `/pep-math/knowledge/${nodeId}`;
    });

    return () => { cy.destroy(); };
  }, [graph, selectedCategory]);

  return (
    <div>
      <div className="graph-filters flex flex-wrap gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded text-sm ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedCategory('all')}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-3 py-1 rounded text-sm ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        id="cy"
        ref={cyRef}
        className="border rounded-lg"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
}
