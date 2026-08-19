import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { loadValidKpIds } from '../../scripts/build-ncee-index';

const NCEE_DIR = path.resolve(__dirname, '../../src/content/textbooks/ncee');
const KP_DIR = path.resolve(__dirname, '../../src/content/knowledge-points');

function walkNceeFiles(dir: string): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  function walk(d: string) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md')) files.push(full);
    }
  }
  walk(dir);
  return files;
}

describe('NCEE schema validation', () => {
  let files: string[];
  let validKpIds: Set<string>;

  beforeAll(() => {
    files = walkNceeFiles(NCEE_DIR);
    validKpIds = loadValidKpIds(KP_DIR);
  });

  it('all ncee files have valid frontmatter type', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(data.type, `${f}: type`).toBe('ncee');
    }
  });

  it('ncee_id is present and non-empty for all files', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(data.ncee_id, `${f}: ncee_id`).toBeTruthy();
      expect(typeof data.ncee_id).toBe('string');
    }
  });

  it('ncee_id is globally unique across all files', () => {
    const ids = new Map<string, string>();
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      if (ids.has(data.ncee_id)) {
        throw new Error(`Duplicate ncee_id "${data.ncee_id}" in ${f} and ${ids.get(data.ncee_id)}`);
      }
      ids.set(data.ncee_id, f);
    }
  });

  it('year is between 2016 and 2025', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(data.year, `${f}: year`).toBeGreaterThanOrEqual(2016);
      expect(data.year, `${f}: year`).toBeLessThanOrEqual(2025);
    }
  });

  it('knowledge_points all reference existing KP IDs (禁止新增)', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      if (!Array.isArray(data.knowledge_points)) continue;
      for (const kp of data.knowledge_points) {
        expect(validKpIds.has(kp), `${f}: unknown KP "${kp}"`).toBe(true);
      }
    }
  });

  it('knowledge_points has at least 1 entry', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(Array.isArray(data.knowledge_points), `${f}: knowledge_points should be array`).toBe(true);
      expect(data.knowledge_points.length, `${f}: need >= 1 KP`).toBeGreaterThanOrEqual(1);
    }
  });

  it('textbook_refs reference valid textbook and chapter', () => {
    const validTextbooks = ['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3'];
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      if (!Array.isArray(data.textbook_refs)) continue;
      for (const ref of data.textbook_refs) {
        expect(validTextbooks, `${f}: invalid textbook "${ref.textbook}"`).toContain(ref.textbook);
        expect(ref.chapter, `${f}: chapter must be >= 1`).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('question_type is one of: choice, fill_blank, solution', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(['choice', 'fill_blank', 'solution'], `${f}: question_type`).toContain(data.question_type);
    }
  });

  it('difficulty is one of: basic, medium, hard', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(['basic', 'medium', 'hard'], `${f}: difficulty`).toContain(data.difficulty);
    }
  });

  it('source is "高考真题"', () => {
    for (const f of files) {
      const { data } = matter(fs.readFileSync(f, 'utf-8'));
      expect(data.source, `${f}: source`).toBe('高考真题');
    }
  });
});
