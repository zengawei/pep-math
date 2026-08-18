import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const textbooksDir = path.resolve('src/content/textbooks/required-1');

function countFiles(dir: string, prefix: string): number {
  if (!fs.existsSync(dir)) return 0;
  return fs.readdirSync(dir).filter(f => f.startsWith(prefix) && f.endsWith('.md')).length;
}

function countReviewExercises(chapterDir: string): number {
  const reviewDir = path.join(chapterDir, 'review');
  return countFiles(reviewDir, 'review-exercise');
}

function getAllExercises(chapterDir: string): string[] {
  const exercises: string[] = [];
  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.name.startsWith('exercise-') && entry.name.endsWith('.md')) {
        exercises.push(fullPath);
      }
    }
  }
  walk(chapterDir);
  return exercises;
}

describe('Required-1 Plan 3 content expansion (ch4-ch5)', () => {
  describe('Chapter 4 — 指数与对数 (4 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-04');

    for (const s of ['01', '02', '03', '04']) {
      it(`ch4-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch4-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch4 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch4 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.source).toBe('人教A版2019');
      }
    });

    it('ch4 所有习题有 category 字段', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(['practice', 'review', 'reference']).toContain(data.category);
      }
    });
  });

  describe('Chapter 5 — 三角函数 (3 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-05');

    for (const s of ['01', '02', '03']) {
      it(`ch5-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch5-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch5 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch5 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.source).toBe('人教A版2019');
      }
    });
  });
});
