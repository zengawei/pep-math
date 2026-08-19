import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { buildNceeIndex, writeNceeIndex, loadValidKpIds } from '../../scripts/build-ncee-index';

const NCEE_DIR = path.resolve(__dirname, '../../src/content/textbooks/ncee');
const KP_DIR = path.resolve(__dirname, '../../src/content/knowledge-points');

describe('NCEE edge cases', () => {
  let validKpIds: Set<string>;

  beforeAll(() => {
    validKpIds = loadValidKpIds(KP_DIR);
  });

  it('0 道真题时，构建不报错，返回空结果', () => {
    const emptyDir = path.resolve(__dirname, '../__tmp_empty_ncee__');
    if (fs.existsSync(emptyDir)) fs.rmSync(emptyDir, { recursive: true });
    fs.mkdirSync(emptyDir, { recursive: true });

    const { result, errors } = buildNceeIndex(emptyDir, validKpIds);
    expect(errors).toEqual([]);
    expect(result.all).toEqual([]);
    expect(result.summary.total_questions).toBe(0);

    fs.rmSync(emptyDir, { recursive: true });
  });

  it('textbook_refs 为空的真题，正常出现在 byKp 但不出现在 byChapter', () => {
    const tmpDir = path.resolve(__dirname, '../__tmp_edge_ncee__');
    if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true });

    const paperDir = path.join(tmpDir, '2024', 'test-paper');
    fs.mkdirSync(paperDir, { recursive: true });

    const fm = [
      '---',
      'type: ncee',
      'ncee_id: "ncee-2024-edge-1"',
      'year: 2024',
      'paper: "Edge Test"',
      'paper_code: "edge-test"',
      'question_number: 1',
      'question_type: choice',
      'difficulty: basic',
      'score: 5',
      'knowledge_points:',
      '  - set-concept',
      'textbook_refs: []',
      'source: "高考真题"',
      '---',
      '',
      'Test $x$.',
    ].join('\n');
    fs.writeFileSync(path.join(paperDir, 'q01.md'), fm);

    const { result } = buildNceeIndex(tmpDir, validKpIds);
    expect(result.all.length).toBe(1);
    expect(result.byKp['set-concept'].length).toBe(1);
    expect(Object.keys(result.byChapter).length).toBe(0);

    fs.rmSync(tmpDir, { recursive: true });
  });

  it('多选题 sub_type 正确保留', () => {
    const tmpDir = path.resolve(__dirname, '../__tmp_multi_ncee__');
    if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true });

    const paperDir = path.join(tmpDir, '2024', 'test-paper');
    fs.mkdirSync(paperDir, { recursive: true });

    const fm = [
      '---',
      'type: ncee',
      'ncee_id: "ncee-2024-multi-1"',
      'year: 2024',
      'paper: "Multi Test"',
      'paper_code: "multi-test"',
      'question_number: 11',
      'question_type: choice',
      'sub_type: "多选"',
      'difficulty: medium',
      'score: 5',
      'knowledge_points:',
      '  - set-concept',
      'source: "高考真题"',
      '---',
      '',
      'Test.',
    ].join('\n');
    fs.writeFileSync(path.join(paperDir, 'q11.md'), fm);

    const { result } = buildNceeIndex(tmpDir, validKpIds);
    expect(result.all[0].sub_type).toBe('多选');
    expect(result.all[0].question_type).toBe('choice');

    fs.rmSync(tmpDir, { recursive: true });
  });
});
