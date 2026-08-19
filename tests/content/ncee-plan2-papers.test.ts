import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NCEE_DIR = path.resolve(__dirname, '../../src/content/textbooks/ncee');

const EXPECTED_PAPERS = [
  { year: '2025', code: 'new-gao-kao-1', paperCode: '2025-new-gao-kao-1', name: '2025新高考I卷', questions: 19 },
  { year: '2025', code: 'new-gao-kao-2', paperCode: '2025-new-gao-kao-2', name: '2025新高考II卷', questions: 19 },
  { year: '2024', code: 'new-gao-kao-1', paperCode: '2024-new-gao-kao-1', name: '2024新高考I卷', questions: 19 },
  { year: '2024', code: 'new-gao-kao-2', paperCode: '2024-new-gao-kao-2', name: '2024新高考II卷', questions: 19 },
  { year: '2023', code: 'new-gao-kao-1', paperCode: '2023-new-gao-kao-1', name: '2023新高考I卷', questions: 19 },
  { year: '2023', code: 'new-gao-kao-2', paperCode: '2023-new-gao-kao-2', name: '2023新高考II卷', questions: 19 },
];

describe('Plan 2: 2023-2025 新高考全国卷', () => {
  for (const paper of EXPECTED_PAPERS) {
    describe(`${paper.name}`, () => {
      const paperDir = path.join(NCEE_DIR, paper.year, paper.code);

      it(`has ${paper.questions} question files`, () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        expect(mdFiles.length).toBe(paper.questions);
      });

      it('all files match qNN.md format', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        for (const f of mdFiles) {
          expect(f).toMatch(/^q\d{2}\.md$/);
        }
      });

      it('all files have valid ncee frontmatter', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        for (const f of mdFiles) {
          const { data } = matter(fs.readFileSync(path.join(paperDir, f), 'utf-8'));
          expect(data.type).toBe('ncee');
          expect(data.ncee_id).toBeTruthy();
          expect(data.year).toBe(parseInt(paper.year));
          expect(data.paper_code).toBe(paper.paperCode);
          expect(data.source).toBe('高考真题');
          expect(['choice', 'fill_blank', 'solution']).toContain(data.question_type);
          expect(['basic', 'medium', 'hard']).toContain(data.difficulty);
          expect(Array.isArray(data.knowledge_points)).toBe(true);
          expect(data.knowledge_points.length).toBeGreaterThanOrEqual(1);
        }
      });

      it('ncee_id follows naming convention', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        for (const f of mdFiles) {
          const { data } = matter(fs.readFileSync(path.join(paperDir, f), 'utf-8'));
          expect(data.ncee_id).toMatch(new RegExp(`^ncee-${paper.paperCode}-\\d+$`));
        }
      });

      it('question numbers are sequential starting from 1', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        const nums = mdFiles.map(f => {
          const { data } = matter(fs.readFileSync(path.join(paperDir, f), 'utf-8'));
          return data.question_number;
        }).sort((a: number, b: number) => a - b);

        expect(nums[0]).toBe(1);
        expect(nums[nums.length - 1]).toBe(paper.questions);
      });

      it('has correct mix of question types', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        const types = mdFiles.map(f => {
          const { data } = matter(fs.readFileSync(path.join(paperDir, f), 'utf-8'));
          return data.question_type;
        });

        const choiceCount = types.filter(t => t === 'choice').length;
        const fillBlankCount = types.filter(t => t === 'fill_blank').length;
        const solutionCount = types.filter(t => t === 'solution').length;

        // New gaokao format: 8 single-choice + 3 multi-choice = 11 choice, 3 fill, 5 solution
        expect(choiceCount).toBeGreaterThanOrEqual(8);
        expect(fillBlankCount).toBeGreaterThanOrEqual(1);
        expect(solutionCount).toBeGreaterThanOrEqual(1);
      });

      it('all questions have step-by-step solutions', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        for (const f of mdFiles) {
          const content = fs.readFileSync(path.join(paperDir, f), 'utf-8');
          expect(content).toContain('**解答：**');
          expect(content).toContain('**第1步：**');
        }
      });

      it('solution questions have 易错提醒 and 解题思路总结', () => {
        const mdFiles = fs.readdirSync(paperDir).filter(f => f.endsWith('.md'));
        for (const f of mdFiles) {
          const { data } = matter(fs.readFileSync(path.join(paperDir, f), 'utf-8'));
          if (data.question_type === 'solution') {
            const content = fs.readFileSync(path.join(paperDir, f), 'utf-8');
            expect(content).toContain('⚠️ 易错提醒');
            expect(content).toContain('💡 解题思路总结');
          }
        }
      });
    });
  }

  it('total questions across all 6 papers >= 114', () => {
    let total = 0;
    for (const paper of EXPECTED_PAPERS) {
      const paperDir = path.join(NCEE_DIR, paper.year, paper.code);
      if (fs.existsSync(paperDir)) {
        total += fs.readdirSync(paperDir).filter(f => f.endsWith('.md')).length;
      }
    }
    expect(total).toBeGreaterThanOrEqual(114);
  });
});
