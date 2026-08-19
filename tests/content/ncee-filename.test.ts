import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NCEE_DIR = path.resolve(__dirname, '../../src/content/textbooks/ncee');

function walkPapers(dir: string): Array<{ paperDir: string; files: string[] }> {
  const papers: Array<{ paperDir: string; files: string[] }> = [];
  if (!fs.existsSync(dir)) return papers;

  for (const yearEntry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!yearEntry.isDirectory() || !/^\d{4}$/.test(yearEntry.name)) continue;
    const yearPath = path.join(dir, yearEntry.name);

    for (const paperEntry of fs.readdirSync(yearPath, { withFileTypes: true })) {
      if (!paperEntry.isDirectory()) continue;
      const paperPath = path.join(yearPath, paperEntry.name);
      const mdFiles = fs.readdirSync(paperPath).filter(f => f.endsWith('.md'));
      papers.push({ paperDir: paperPath, files: mdFiles });
    }
  }
  return papers;
}

describe('NCEE filename validation', () => {
  let papers: Array<{ paperDir: string; files: string[] }>;

  beforeAll(() => {
    papers = walkPapers(NCEE_DIR);
  });

  it('all ncee md files match /^q\\d{2}\\.md$/ pattern', () => {
    for (const paper of papers) {
      for (const f of paper.files) {
        expect(f, `${paper.paperDir}/${f}: must match qNN.md`).toMatch(/^q\d{2}\.md$/);
      }
    }
  });

  it('no duplicate question_number within same paper directory', () => {
    for (const paper of papers) {
      const nums = new Set<number>();
      for (const f of paper.files) {
        const { data } = matter(fs.readFileSync(path.join(paper.paperDir, f), 'utf-8'));
        const qn = data.question_number;
        expect(nums.has(qn), `${paper.paperDir}: duplicate question_number ${qn}`).toBe(false);
        nums.add(qn);
      }
    }
  });

  it('_index.yml only contains manual fields (no auto-count fields)', () => {
    if (!fs.existsSync(NCEE_DIR)) return;

    const autoFields = ['question_count', 'choice_count', 'multi_choice_count', 'fill_blank_count', 'solution_count'];

    for (const yearEntry of fs.readdirSync(NCEE_DIR, { withFileTypes: true })) {
      if (!yearEntry.isDirectory() || !/^\d{4}$/.test(yearEntry.name)) continue;
      const yearPath = path.join(NCEE_DIR, yearEntry.name);

      for (const paperEntry of fs.readdirSync(yearPath, { withFileTypes: true })) {
        if (!paperEntry.isDirectory()) continue;
        const indexPath = path.join(yearPath, paperEntry.name, '_index.yml');
        if (!fs.existsSync(indexPath)) continue;

        const { data } = matter(fs.readFileSync(indexPath, 'utf-8'));
        for (const field of autoFields) {
          expect(data[field], `${indexPath}: should not contain auto-count field "${field}"`).toBeUndefined();
        }
      }
    }
  });
});
