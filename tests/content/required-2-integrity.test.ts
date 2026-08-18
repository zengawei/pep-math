// tests/content/required-2-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/required-2');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Required-2 content integrity', () => {
  it('has all 5 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(5);
    expect(chapters).toContain('chapter-06');
    expect(chapters).toContain('chapter-07');
    expect(chapters).toContain('chapter-08');
    expect(chapters).toContain('chapter-09');
    expect(chapters).toContain('chapter-10');
  });

  it('every exercise has required frontmatter fields', () => {
    const findFiles = (dir: string, pattern: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath, pattern));
        } else if (item.startsWith(pattern)) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const exercises = findFiles(textbooksDir, 'exercise-');
    expect(exercises.length).toBeGreaterThanOrEqual(25);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('required-2');
      expect(data.difficulty).toMatch(/^(basic|medium|hard)$/);
      expect(data.knowledge_points).toBeInstanceOf(Array);
      expect(data.knowledge_points.length).toBeGreaterThanOrEqual(1);
      expect(data.source).toBe('自编');
      expect(data.references).toBeTruthy();
    }
  });

  it('all referenced knowledge points exist', () => {
    const kpFiles = fs.readdirSync(kpDir).filter(f => f.endsWith('.yml'));
    const kpIds = new Set(kpFiles.map(f => f.replace('.yml', '')));

    const findFiles = (dir: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath));
        } else if (item.endsWith('.md')) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const allFiles = findFiles(textbooksDir);
    for (const file of allFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      if (data.knowledge_points) {
        for (const kp of data.knowledge_points) {
          expect(kpIds.has(kp), `Missing KP: ${kp} referenced in ${file}`).toBe(true);
        }
      }
      if (data.related_knowledge_points) {
        for (const kp of data.related_knowledge_points) {
          expect(kpIds.has(kp), `Missing KP: ${kp} referenced in ${file}`).toBe(true);
        }
      }
    }
  });

  it('required-2 knowledge points have correct applied_in', () => {
    const required2Kps = [
      'vector-concept', 'vector-addition-subtraction', 'vector-scalar-multiplication',
      'vector-coordinate', 'vector-dot-product',
      'complex-number-concept', 'complex-number-operations',
      'solid-geometry-basics', 'solid-geometry-drawing', 'solid-surface-area-volume',
      'spatial-position-relation', 'parallel-judgment', 'perpendicular-judgment', 'spatial-angle',
      'random-sampling', 'sample-estimate-population',
      'random-event-probability', 'event-independence', 'frequency-probability',
    ];

    for (const kpId of required2Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('required-2');
    }
  });
});
