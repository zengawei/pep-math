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

describe('Required-1 Plan 2 content expansion (ch1-ch3)', () => {
  describe('Chapter 1 — 集合 (1 section)', () => {
    const chDir = path.join(textbooksDir, 'chapter-01');
    const s1Dir = path.join(chDir, 'section-01');

    it('ch1-s1 应有 ≥ 10 道习题', () => {
      expect(countFiles(s1Dir, 'exercise')).toBeGreaterThanOrEqual(10);
    });

    it('ch1-s1 应有 ≥ 5 道例题', () => {
      expect(countFiles(s1Dir, 'example')).toBeGreaterThanOrEqual(5);
    });

    it('ch1 章复习题应有 ≥ 25 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(25);
    });

    it('ch1 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.source).toBe('人教A版2019');
      }
    });

    it('ch1 所有习题有 category 字段', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.category).toBeDefined();
        expect(['practice', 'review', 'reference']).toContain(data.category);
      }
    });

    it('ch1 所有习题的 knowledge_points 存在于知识点库中', () => {
      const kpDir = path.resolve('src/content/knowledge-points');
      const kpIds = new Set(
        fs.readdirSync(kpDir)
          .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
          .map(f => f.replace(/\.(yml|yaml)$/, ''))
      );
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        for (const kp of data.knowledge_points) {
          expect(kpIds.has(kp), `Unknown KP: ${kp} in ${path.basename(exPath)}`).toBe(true);
        }
      }
    });
  });

  describe('Chapter 2 — 不等式 (3 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-02');

    for (const s of ['01', '02', '03']) {
      it(`ch2-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch2-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch2 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch2 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.source).toBe('人教A版2019');
      }
    });
  });

  describe('Chapter 3 — 函数 (3 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-03');

    for (const s of ['01', '02', '03']) {
      it(`ch3-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch3-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch3 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch3 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const exPath of exercises) {
        const raw = fs.readFileSync(exPath, 'utf-8');
        const { data } = matter(raw);
        expect(data.source).toBe('人教A版2019');
      }
    });
  });
});
