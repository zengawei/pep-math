import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const textbooksDir = path.resolve('src/content/textbooks/required-2');

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

describe('Required-2 Plan 4 content expansion (ch6-ch10)', () => {
  describe('Chapter 6 — 平面向量 (4 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-06');

    for (const s of ['01', '02', '03', '04']) {
      it(`ch6-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch6-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch6 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch6 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.source).toBe('人教A版2019');
      }
    });

    it('ch6 所有习题有 category 字段', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.category).toBeDefined();
      }
    });
  });

  describe('Chapter 7 — 复数 (2 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-07');

    for (const s of ['01', '02']) {
      it(`ch7-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch7-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch7 章复习题应有 ≥ 20 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(20);
    });

    it('ch7 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.source).toBe('人教A版2019');
      }
    });
  });

  describe('Chapter 8 — 立体几何 (4 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-08');

    for (const s of ['01', '02', '03', '04']) {
      it(`ch8-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch8-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch8 章复习题应有 ≥ 30 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(30);
    });

    it('ch8 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.source).toBe('人教A版2019');
      }
    });
  });

  describe('Chapter 9 — 统计 (2 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-09');

    for (const s of ['01', '02']) {
      it(`ch9-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch9-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch9 章复习题应有 ≥ 25 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(25);
    });

    it('ch9 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.source).toBe('人教A版2019');
      }
    });
  });

  describe('Chapter 10 — 概率 (2 sections)', () => {
    const chDir = path.join(textbooksDir, 'chapter-10');

    for (const s of ['01', '02']) {
      it(`ch10-s${s} 应有 ≥ 10 道习题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'exercise')).toBeGreaterThanOrEqual(10);
      });

      it(`ch10-s${s} 应有 ≥ 5 道例题`, () => {
        const dir = path.join(chDir, `section-${s}`);
        expect(countFiles(dir, 'example')).toBeGreaterThanOrEqual(5);
      });
    }

    it('ch10 章复习题应有 ≥ 20 道', () => {
      expect(countReviewExercises(chDir)).toBeGreaterThanOrEqual(20);
    });

    it('ch10 所有习题 source 为 "人教A版2019"', () => {
      const exercises = getAllExercises(chDir);
      for (const ex of exercises) {
        const { data } = matter(fs.readFileSync(ex, 'utf-8'));
        expect(data.source).toBe('人教A版2019');
      }
    });
  });
});
