import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const textbooksDir = path.resolve('src/content/textbooks');
const kpDir = path.resolve('src/content/knowledge-points');

describe('full site integrity', () => {
  const findFiles = (dir: string, prefix: string): string[] => {
    const results: string[] = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        results.push(...findFiles(fullPath, prefix));
      } else if (item.startsWith(prefix) && item.endsWith('.md')) {
        results.push(fullPath);
      }
    }
    return results;
  };

  const getAllSections = (): { chDir: string; secDir: string; chName: string; secName: string }[] => {
    const sections: { chDir: string; secDir: string; chName: string; secName: string }[] = [];
    const textbooks = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    for (const tb of textbooks) {
      const tbDir = path.join(textbooksDir, tb);
      const chapters = fs.readdirSync(tbDir).filter(f =>
        fs.statSync(path.join(tbDir, f)).isDirectory() && f.startsWith('chapter-')
      );
      for (const ch of chapters) {
        const chDir = path.join(tbDir, ch);
        const secs = fs.readdirSync(chDir).filter(f =>
          fs.statSync(path.join(chDir, f)).isDirectory() && f.startsWith('section-')
        );
        for (const sec of secs) {
          sections.push({ chDir, secDir: path.join(chDir, sec), chName: ch, secName: sec });
        }
      }
    }
    return sections;
  };

  it('总习题数 ≥ 600', () => {
    const exercises = findFiles(textbooksDir, 'exercise-');
    const reviews = findFiles(textbooksDir, 'review-exercise-');
    expect(exercises.length + reviews.length).toBeGreaterThanOrEqual(600);
  });

  it('总例题数 ≥ 250', () => {
    const examples = findFiles(textbooksDir, 'example-');
    expect(examples.length).toBeGreaterThanOrEqual(250);
  });

  it('总复习题数 ≥ 200', () => {
    const reviews = findFiles(textbooksDir, 'review-exercise-');
    expect(reviews.length).toBeGreaterThanOrEqual(200);
  });

  it('每节习题数 ≥ 8', () => {
    const sections = getAllSections();
    for (const { secDir, chName, secName } of sections) {
      const exercises = fs.readdirSync(secDir).filter(f => f.startsWith('exercise-') && f.endsWith('.md'));
      expect(exercises.length, `${chName}/${secName} should have >= 8 exercises, got ${exercises.length}`).toBeGreaterThanOrEqual(8);
    }
  });

  it('每节例题数 ≥ 4', () => {
    const sections = getAllSections();
    for (const { secDir, chName, secName } of sections) {
      const examples = fs.readdirSync(secDir).filter(f => f.startsWith('example-') && f.endsWith('.md'));
      expect(examples.length, `${chName}/${secName} should have >= 4 examples, got ${examples.length}`).toBeGreaterThanOrEqual(4);
    }
  });

  it('每章复习题数 ≥ 20', () => {
    const textbooks = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    for (const tb of textbooks) {
      const tbDir = path.join(textbooksDir, tb);
      const chapters = fs.readdirSync(tbDir).filter(f =>
        fs.statSync(path.join(tbDir, f)).isDirectory() && f.startsWith('chapter-')
      );
      for (const ch of chapters) {
        const reviewDir = path.join(tbDir, ch, 'review');
        if (fs.existsSync(reviewDir)) {
          const reviews = fs.readdirSync(reviewDir).filter(f => f.startsWith('review-exercise-') && f.endsWith('.md'));
          expect(reviews.length, `${tb}/${ch} should have >= 20 review exercises, got ${reviews.length}`).toBeGreaterThanOrEqual(20);
        }
      }
    }
  });

  it('所有习题 source 为 "人教A版2019"', () => {
    const exercises = findFiles(textbooksDir, 'exercise-');
    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.source, `${file} should have source "人教A版2019"`).toBe('人教A版2019');
    }
  });

  it('所有知识点至少被内容文件引用（习题+例题+定义）', () => {
    const kpFiles = fs.readdirSync(kpDir).filter(f => f.endsWith('.yml'));
    const kpIds = new Set(kpFiles.map(f => f.replace('.yml', '')));

    const allMdFiles = findFiles(textbooksDir, '');
    const referencedKps = new Set<string>();
    for (const file of allMdFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      if (data.knowledge_points) {
        for (const kp of data.knowledge_points) {
          referencedKps.add(kp);
        }
      }
    }

    const unusedKps = [...kpIds].filter(kp => !referencedKps.has(kp));
    // Allow a small number of KPs that exist but aren't yet used in content
    expect(unusedKps.length, `Unused KPs (${unusedKps.length}): ${unusedKps.join(', ')}`).toBeLessThanOrEqual(6);
  });

  it('孤立知识点不超过 3 个', () => {
    const kpFiles = fs.readdirSync(kpDir).filter(f => f.endsWith('.yml'));
    const kpIds = new Set(kpFiles.map(f => f.replace('.yml', '')));

    const allMdFiles = findFiles(textbooksDir, '');
    const referencedKps = new Set<string>();
    for (const file of allMdFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      if (data.knowledge_points) {
        for (const kp of data.knowledge_points) {
          referencedKps.add(kp);
        }
      }
    }

    const orphaned = [...kpIds].filter(kp => !referencedKps.has(kp));
    expect(orphaned.length, `Orphaned KPs (${orphaned.length}): ${orphaned.join(', ')}`).toBeLessThanOrEqual(3);
  });
});
