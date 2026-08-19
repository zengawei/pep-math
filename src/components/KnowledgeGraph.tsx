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
  '向量': '#06B6D4',
  '空间向量': '#0EA5E9',
  '立体几何': '#6366F1',
  '解析几何': '#EC4899',
  '数与代数': '#14B8A6',
  '概率与统计': '#F97316',
  '复数': '#A855F7',
  '数列': '#8B5CF6',
  '导数': '#EC4899',
  '计数原理': '#F97316',
};

function scalePositions(nodes: GraphNode[], width: number, height: number) {
  if (nodes.length === 0) return nodes;
  const xs = nodes.map(n => n.x || 0);
  const ys = nodes.map(n => n.y || 0);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const dataW = maxX - minX || 1;
  const dataH = maxY - minY || 1;
  const pad = 60;
  const scaleX = (width - pad * 2) / dataW;
  const scaleY = (height - pad * 2) / dataH;
  const scale = Math.min(scaleX, scaleY);
  const offsetX = pad + ((width - pad * 2) - dataW * scale) / 2;
  const offsetY = pad + ((height - pad * 2) - dataH * scale) / 2;
  return nodes.map(n => ({
    ...n,
    x: (n.x || 0) * scale + offsetX - minX * scale,
    y: (n.y || 0) * scale + offsetY - minY * scale,
  }));
}

export default function KnowledgeGraph({ graph, textbookFilter }: KnowledgeGraphProps) {
  const cyRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTextbook, setActiveTextbook] = useState<string | undefined>(textbookFilter);

  const categories = [...new Set(graph.nodes.map(n => n.category))];

  // Listen for textbook-change events from the page's select dropdown
  useEffect(() => {
    const handler = (e: Event) => {
      const textbookId = (e as CustomEvent).detail as string;
      setActiveTextbook(textbookId);
    };
    window.addEventListener('textbook-change', handler);
    return () => window.removeEventListener('textbook-change', handler);
  }, []);

  // Sync prop changes
  useEffect(() => {
    setActiveTextbook(textbookFilter);
  }, [textbookFilter]);

  useEffect(() => {
    if (!cyRef.current) return;

    const filteredNodes = graph.nodes.filter(n => {
      const matchesTextbook = activeTextbook
        ? n.textbooks.includes(activeTextbook)
        : true;
      const matchesCategory = selectedCategory === 'all'
        ? true
        : n.category === selectedCategory;
      return matchesTextbook && matchesCategory;
    });

    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredEdges = graph.edges.filter(
      e => filteredNodeIds.has(e.source) && filteredNodeIds.has(e.target)
    );

    // Scale positions to fit container
    const containerWidth = cyRef.current.clientWidth || 800;
    const containerHeight = cyRef.current.clientHeight || 500;
    const scaledNodes = scalePositions(filteredNodes, containerWidth, containerHeight);

    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        ...scaledNodes.map(n => ({
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
            'cursor': 'pointer',
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
  }, [graph, selectedCategory, activeTextbook]);

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
