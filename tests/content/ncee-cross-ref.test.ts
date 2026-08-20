import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve('public/data/ncee');
const NCEE_DIR = path.resolve('src/content/textbooks/ncee');

describe('NCEE cross-references', () => {
  it('knowledge graph ncee_count matches by-kp JSON actual count', () => {
    const graphFile = path.resolve('public/data/knowledge-graph.json');
    if (!fs.existsSync(graphFile)) return;
    const graph = JSON.parse(fs.readFileSync(graphFile, 'utf-8'));

    const byKpDir = path.join(DATA_DIR, 'by-kp');
    if (!fs.existsSync(byKpDir)) return;

    for (const node of graph.nodes) {
      const kpFile = path.join(byKpDir, `${node.id}.json`);
      const expectedCount = fs.existsSync(kpFile)
        ? JSON.parse(fs.readFileSync(kpFile, 'utf-8')).length
        : 0;

      if (expectedCount > 0) {
        expect(node.ncee_count, `KP ${node.id}: graph count mismatch`).toBe(expectedCount);
      } else {
        expect(node.ncee_count || 0, `KP ${node.id}: should be 0 or undefined`).toBe(0);
      }
    }
  });

  it('paper question counts match actual md file count in directory', () => {
    if (!fs.existsSync(NCEE_DIR)) return;

    const yearDirs = fs.readdirSync(NCEE_DIR).filter(d => /^\d{4}$/.test(d));
    for (const yearDir of yearDirs) {
      const yearPath = path.join(NCEE_DIR, yearDir);
      const paperDirs = fs.readdirSync(yearPath).filter(d =>
        fs.statSync(path.join(yearPath, d)).isDirectory()
      );

      for (const paperDir of paperDirs) {
        const paperPath = path.join(yearPath, paperDir);
        const mdCount = fs.readdirSync(paperPath).filter(f => /^q\d{2}\.md$/.test(f)).length;

        const paperCode = `${yearDir}-${paperDir}`;
        const byPaperFile = path.join(DATA_DIR, 'by-paper', `${paperCode}.json`);
        if (fs.existsSync(byPaperFile)) {
          const indexCount = JSON.parse(fs.readFileSync(byPaperFile, 'utf-8')).length;
          expect(indexCount, `${paperCode}: index count != file count`).toBe(mdCount);
        }
      }
    }
  });

  it('summary totals match actual data', () => {
    const summaryFile = path.join(DATA_DIR, 'summary.json');
    if (!fs.existsSync(summaryFile)) return;
    const summary = JSON.parse(fs.readFileSync(summaryFile, 'utf-8'));

    const byYearDir = path.join(DATA_DIR, 'by-year');
    if (!fs.existsSync(byYearDir)) return;

    let totalFromShards = 0;
    let papersFromShards = new Set<string>();
    const yearFiles = fs.readdirSync(byYearDir).filter(f => f.endsWith('.json'));

    for (const f of yearFiles) {
      const items = JSON.parse(fs.readFileSync(path.join(byYearDir, f), 'utf-8'));
      totalFromShards += items.length;
      for (const item of items) {
        papersFromShards.add(item.paper_code);
      }
    }

    expect(summary.total_questions).toBe(totalFromShards);
    expect(summary.total_papers).toBe(papersFromShards.size);
  });

  it('0 道真题的知识点，图谱 ncee_count 为 0 或 undefined', () => {
    const graphFile = path.resolve('public/data/knowledge-graph.json');
    if (!fs.existsSync(graphFile)) return;
    const graph = JSON.parse(fs.readFileSync(graphFile, 'utf-8'));

    const byKpDir = path.join(DATA_DIR, 'by-kp');
    const kpIdsWithFiles = fs.existsSync(byKpDir)
      ? fs.readdirSync(byKpDir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''))
      : [];

    for (const node of graph.nodes) {
      if (!kpIdsWithFiles.includes(node.id)) {
        expect(node.ncee_count || 0, `KP ${node.id} has no by-kp file, should be 0`).toBe(0);
      }
    }
  });
});
