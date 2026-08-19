// tests/content/selective-3-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/selective-3');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Selective-3 content integrity', () => {
  it('has all 2 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(2);
    expect(chapters).toContain('chapter-17');
    expect(chapters).toContain('chapter-18');
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
    expect(exercises.length).toBeGreaterThanOrEqual(1);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('selective-3');
      expect(data.difficulty).toMatch(/^(basic|medium|hard)$/);
      expect(data.knowledge_points).toBeInstanceOf(Array);
      expect(data.knowledge_points.length).toBeGreaterThanOrEqual(1);
      expect(data.source).toBe('人教A版2019');
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

  it('has sufficient total exercises (>=75)', () => {
    const findFiles = (dir: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath));
        } else if (item.startsWith('exercise-') && item.endsWith('.md')) {
          results.push(fullPath);
        }
      }
      return results;
    };
    const exercises = findFiles(textbooksDir);
    expect(exercises.length).toBeGreaterThanOrEqual(75);
  });

  it('each section has sufficient exercises (>=8 per section)', () => {
    const chapters = ['chapter-17', 'chapter-18'];
    for (const ch of chapters) {
      const chDir = path.join(textbooksDir, ch);
      const sections = fs.readdirSync(chDir).filter(f =>
        fs.statSync(path.join(chDir, f)).isDirectory() && f.startsWith('section-')
      );
      for (const sec of sections) {
        const secDir = path.join(chDir, sec);
        const exercises = fs.readdirSync(secDir).filter(f => f.startsWith('exercise-') && f.endsWith('.md'));
        expect(exercises.length, `${ch}/${sec} should have >= 8 exercises, got ${exercises.length}`).toBeGreaterThanOrEqual(8);
      }
    }
  });

  it('each section has sufficient examples (>=4 per section)', () => {
    const chapters = ['chapter-17', 'chapter-18'];
    for (const ch of chapters) {
      const chDir = path.join(textbooksDir, ch);
      const sections = fs.readdirSync(chDir).filter(f =>
        fs.statSync(path.join(chDir, f)).isDirectory() && f.startsWith('section-')
      );
      for (const sec of sections) {
        const secDir = path.join(chDir, sec);
        const examples = fs.readdirSync(secDir).filter(f => f.startsWith('example-') && f.endsWith('.md'));
        expect(examples.length, `${ch}/${sec} should have >= 4 examples, got ${examples.length}`).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('each chapter has review exercises', () => {
    const chapters: Record<string, number> = { 'chapter-17': 30, 'chapter-18': 25 };
    for (const [ch, minCount] of Object.entries(chapters)) {
      const reviewDir = path.join(textbooksDir, ch, 'review');
      expect(fs.existsSync(reviewDir), `${ch}/review directory should exist`).toBe(true);
      const reviews = fs.readdirSync(reviewDir).filter(f => f.startsWith('review-exercise-') && f.endsWith('.md'));
      expect(reviews.length, `${ch} should have >= ${minCount} review exercises, got ${reviews.length}`).toBeGreaterThanOrEqual(minCount);

      for (const file of reviews) {
        const raw = fs.readFileSync(path.join(reviewDir, file), 'utf-8');
        const { data } = matter(raw);
        expect(data.type).toBe('exercise');
        expect(data.category).toBe('review');
        expect(data.source).toBe('人教A版2019');
        expect(data.chapter).toBe(parseInt(ch.replace('chapter-', '')));
        expect(data.section).toBe(0);
      }
    }
  });

  it('all exercises have category and group fields', () => {
    const findFiles = (dir: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath));
        } else if ((item.startsWith('exercise-') || item.startsWith('review-exercise-')) && item.endsWith('.md')) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const exercises = findFiles(textbooksDir);
    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.category, `${file} missing category`).toMatch(/^(practice|review|reference)$/);
      if (data.category === 'practice') {
        expect(data.group, `${file} missing group`).toMatch(/^(A|B|C)$/);
      }
    }
  });

  it('selective-3 knowledge points have correct applied_in', () => {
    const selective3Kps = [
      'conditional-probability', 'total-probability', 'discrete-random-variable',
      'expected-value-variance', 'binomial-distribution', 'hypergeometric-distribution',
      'normal-distribution', 'probability-addition-multiplication', 'bernoulli-trials',
      'distribution-table', 'regression-analysis', 'correlation-analysis',
      'independence-test', 'contingency-table', 'statistical-case',
    ];

    for (const kpId of selective3Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('selective-3');
    }
  });
});
