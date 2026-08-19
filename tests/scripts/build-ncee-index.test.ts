import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  validateFilename,
  validateKatex,
  buildNceeIndex,
  writeNceeIndex,
  loadValidKpIds,
  extractNcee,
  type NceeMeta,
} from '../../scripts/build-ncee-index';

describe('validateFilename', () => {
  it('accepts valid qNN.md filenames', () => {
    expect(validateFilename('q01.md')).toBe(true);
    expect(validateFilename('q09.md')).toBe(true);
    expect(validateFilename('q18.md')).toBe(true);
    expect(validateFilename('q22.md')).toBe(true);
  });

  it('rejects invalid filenames', () => {
    expect(validateFilename('q1.md')).toBe(false);
    expect(validateFilename('q001.md')).toBe(false);
    expect(validateFilename('Q01.md')).toBe(false);
    expect(validateFilename('question-1.md')).toBe(false);
    expect(validateFilename('q00.md')).toBe(true); // q00 matches pattern (validation of number is separate)
    expect(validateFilename('exercise-1.md')).toBe(false);
    expect(validateFilename('q1a.md')).toBe(false);
  });
});

describe('validateKatex', () => {
  it('passes valid LaTeX', () => {
    const content = '已知 $f(x) = x^2 + 1$，求 $f(2)$ 的值。';
    expect(validateKatex(content)).toEqual([]);
  });

  it('passes valid block LaTeX', () => {
    const content = '$$\\frac{a}{b}$$ 和 $c$';
    expect(validateKatex(content)).toEqual([]);
  });

  it('detects unmatched inline $', () => {
    const content = '已知 $f(x) = x^2 + 1$，求 $f(2)';
    const errors = validateKatex(content);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some(e => e.includes('unmatched'))).toBe(true);
  });

  it('detects unmatched {} in LaTeX', () => {
    const content = '$\\frac{a}{b$';
    const errors = validateKatex(content);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('detects \\frac without {}', () => {
    const content = '$\\frac a{b}$';
    const errors = validateKatex(content);
    expect(errors.some(e => e.includes('\\frac missing'))).toBe(true);
  });

  it('detects \\sqrt without {} or []', () => {
    const content = '$\\sqrt x$';
    const errors = validateKatex(content);
    expect(errors.some(e => e.includes('\\sqrt missing'))).toBe(true);
  });

  it('passes \\frac and \\sqrt with correct syntax', () => {
    const content = '$\\frac{a}{b}$ and $\\sqrt{x}$ and $\\sqrt[3]{x}$';
    expect(validateKatex(content)).toEqual([]);
  });
});

describe('buildNceeIndex', () => {
  const tmpBase = path.resolve(__dirname, '../__tmp_ncee_test__');
  const nceeDir = path.join(tmpBase, 'src/content/textbooks/ncee');
  const kpDir = path.resolve(__dirname, '../../src/content/knowledge-points');
  let validKpIds: Set<string>;

  beforeAll(() => {
    validKpIds = loadValidKpIds(kpDir);
  });

  beforeEach(() => {
    if (fs.existsSync(tmpBase)) {
      fs.rmSync(tmpBase, { recursive: true });
    }
  });

  afterAll(() => {
    if (fs.existsSync(tmpBase)) {
      fs.rmSync(tmpBase, { recursive: true });
    }
  });

  function createPaper(year: string, paperCode: string, questions: Array<{
    num: string;
    ncee_id: string;
    question_type?: string;
    difficulty?: string;
    knowledge_points?: string[];
    textbook_refs?: any[];
    is_deprecated?: boolean;
    sub_type?: string;
    score?: number;
    region?: string;
  }>) {
    const paperDir = path.join(nceeDir, year, paperCode);
    fs.mkdirSync(paperDir, { recursive: true });

    // Write _index.yml
    fs.writeFileSync(path.join(paperDir, '_index.yml'), `year: ${year}\npaper: "${year} Test Paper"\npaper_code: "${paperCode}"\n`);

    for (const q of questions) {
      const fm = [
        '---',
        'type: ncee',
        `ncee_id: "${q.ncee_id}"`,
        `year: ${year}`,
        `paper: "${year} Test Paper"`,
        `paper_code: "${paperCode}"`,
        `question_number: ${q.num}`,
        `question_type: ${q.question_type || 'choice'}`,
        `difficulty: ${q.difficulty || 'basic'}`,
        `score: ${q.score || 5}`,
        `knowledge_points:`,
        ...(q.knowledge_points || ['set-concept']).map(kp => `  - ${kp}`),
        `textbook_refs:`,
        ...(q.textbook_refs || []).map(r => `  - textbook: ${r.textbook}\n    chapter: ${r.chapter}`),
        `is_deprecated: ${q.is_deprecated || false}`,
        `source: "高考真题"`,
        q.sub_type ? `sub_type: "${q.sub_type}"` : '',
        q.region ? `region: "${q.region}"` : '',
        '---',
        '',
        '**题目：** 测试题目内容 $x^2$。',
        '',
        '---',
        '',
        '**解答：**',
        '',
        '**第1步：** 解题步骤 $y = 1$。',
      ].filter(Boolean).join('\n');

      fs.writeFileSync(path.join(paperDir, `q${q.num.padStart(2, '0')}.md`), fm);
    }
  }

  it('returns empty result when ncee directory does not exist', () => {
    const { result, errors } = buildNceeIndex(path.join(tmpBase, 'nonexistent'), validKpIds);
    expect(errors).toEqual([]);
    expect(result.all).toEqual([]);
    expect(result.summary.total_questions).toBe(0);
  });

  it('extracts metadata from valid ncee files', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept'] },
      { num: '2', ncee_id: 'ncee-2024-test-1-2', question_type: 'fill_blank', knowledge_points: ['set-operations'] },
    ]);

    const { result, errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(errors.filter(e => !e.error.includes('source'))).toEqual([]);
    expect(result.all.length).toBe(2);
    expect(result.byYear[2024].length).toBe(2);
    expect(result.byPaper['test-paper-1'].length).toBe(2);
  });

  it('filters out deprecated questions', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept'] },
      { num: '2', ncee_id: 'ncee-2024-test-1-2', is_deprecated: true, knowledge_points: ['set-concept'] },
    ]);

    const { result } = buildNceeIndex(nceeDir, validKpIds);
    expect(result.all.length).toBe(1);
    expect(result.all[0].ncee_id).toBe('ncee-2024-test-1-1');
  });

  it('detects duplicate ncee_id', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept'] },
    ]);
    createPaper('2024', 'test-paper-2', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept'] },
    ]);

    const { errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(errors.some(e => e.error.includes('duplicate ncee_id'))).toBe(true);
  });

  it('detects duplicate question_number within paper', () => {
    const paperDir = path.join(nceeDir, '2024', 'test-paper-1');
    fs.mkdirSync(paperDir, { recursive: true });

    // Manually create two files with same question_number
    const makeFile = (filename: string, ncee_id: string) => {
      const fm = [
        '---',
        'type: ncee',
        `ncee_id: "${ncee_id}"`,
        'year: 2024',
        'paper: "Test"',
        'paper_code: "test-paper-1"',
        'question_number: 1',
        'question_type: choice',
        'difficulty: basic',
        'score: 5',
        'knowledge_points:',
        '  - set-concept',
        'source: "高考真题"',
        '---',
        '',
        'Test $x$.',
      ].join('\n');
      fs.writeFileSync(path.join(paperDir, filename), fm);
    };

    makeFile('q01.md', 'ncee-2024-test-1');
    makeFile('q02.md', 'ncee-2024-test-1b');

    const { errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(errors.some(e => e.error.includes('duplicate question_number'))).toBe(true);
  });

  it('detects invalid filenames', () => {
    const paperDir = path.join(nceeDir, '2024', 'test-paper-1');
    fs.mkdirSync(paperDir, { recursive: true });

    fs.writeFileSync(path.join(paperDir, 'question-1.md'), '---\ntype: ncee\nncee_id: "test"\nyear: 2024\npaper: "t"\npaper_code: "t"\nquestion_number: 1\nquestion_type: choice\ndifficulty: basic\nscore: 5\nknowledge_points:\n  - set-concept\nsource: "高考真题"\n---\nTest.');

    const { errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(errors.some(e => e.error.includes('does not match qNN.md'))).toBe(true);
  });

  it('detects unknown knowledge_points', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['nonexistent-kp'] },
    ]);

    const { errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(errors.some(e => e.error.includes('unknown knowledge_point'))).toBe(true);
  });

  it('builds by-kp index correctly', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept', 'set-operations'] },
      { num: '2', ncee_id: 'ncee-2024-test-1-2', knowledge_points: ['set-concept'] },
    ]);

    const { result } = buildNceeIndex(nceeDir, validKpIds);
    expect(result.byKp['set-concept'].length).toBe(2);
    expect(result.byKp['set-operations'].length).toBe(1);
  });

  it('builds by-chapter index from textbook_refs', () => {
    createPaper('2024', 'test-paper-1', [
      {
        num: '1', ncee_id: 'ncee-2024-test-1-1',
        knowledge_points: ['set-concept'],
        textbook_refs: [{ textbook: 'required-1', chapter: 1 }],
      },
    ]);

    const { result } = buildNceeIndex(nceeDir, validKpIds);
    expect(result.byChapter['required-1/ch1'].length).toBe(1);
  });

  it('handles empty textbook_refs', () => {
    createPaper('2024', 'test-paper-1', [
      {
        num: '1', ncee_id: 'ncee-2024-test-1-1',
        knowledge_points: ['set-concept'],
        textbook_refs: [],
      },
    ]);

    const { result, errors } = buildNceeIndex(nceeDir, validKpIds);
    expect(result.all.length).toBe(1);
    // No by-chapter entries for this question
    expect(Object.keys(result.byChapter).length).toBe(0);
  });

  it('generates correct summary', () => {
    createPaper('2024', 'test-paper-1', [
      { num: '1', ncee_id: 'ncee-2024-test-1-1', knowledge_points: ['set-concept'] },
      { num: '2', ncee_id: 'ncee-2024-test-1-2', knowledge_points: ['set-operations'] },
    ]);
    createPaper('2024', 'test-paper-2', [
      { num: '1', ncee_id: 'ncee-2024-test-2-1', knowledge_points: ['set-concept'] },
    ]);
    createPaper('2023', 'test-paper-3', [
      { num: '1', ncee_id: 'ncee-2023-test-3-1', knowledge_points: ['set-concept'] },
    ]);

    const { result } = buildNceeIndex(nceeDir, validKpIds);
    expect(result.summary.total_questions).toBe(4);
    expect(result.summary.total_papers).toBe(3);
    expect(result.summary.years[2024].paper_count).toBe(2);
    expect(result.summary.years[2024].question_count).toBe(3);
    expect(result.summary.years[2023].paper_count).toBe(1);
    expect(result.summary.by_kp_count['set-concept']).toBe(3);
  });
});

describe('writeNceeIndex', () => {
  const tmpBase = path.resolve(__dirname, '../__tmp_ncee_write_test__');
  const nceeDir = path.join(tmpBase, 'src/content/textbooks/ncee');
  const kpDir = path.resolve(__dirname, '../../src/content/knowledge-points');
  const outputDir = path.join(tmpBase, 'public/data');

  beforeAll(() => {
    // Create test data
    const paperDir = path.join(nceeDir, '2024', 'test-paper-1');
    fs.mkdirSync(paperDir, { recursive: true });

    const fm = [
      '---',
      'type: ncee',
      'ncee_id: "ncee-2024-test-1-1"',
      'year: 2024',
      'paper: "Test"',
      'paper_code: "test-paper-1"',
      'question_number: 1',
      'question_type: choice',
      'difficulty: basic',
      'score: 5',
      'knowledge_points:',
      '  - set-concept',
      'textbook_refs:',
      '  - textbook: required-1',
      '    chapter: 1',
      'source: "高考真题"',
      '---',
      '',
      'Test $x$.',
    ].join('\n');
    fs.writeFileSync(path.join(paperDir, 'q01.md'), fm);
  });

  afterAll(() => {
    if (fs.existsSync(tmpBase)) {
      fs.rmSync(tmpBase, { recursive: true });
    }
  });

  it('writes shard JSON files atomically', () => {
    const validKpIds = loadValidKpIds(kpDir);
    const { result } = buildNceeIndex(nceeDir, validKpIds);

    fs.mkdirSync(outputDir, { recursive: true });
    writeNceeIndex(result, outputDir);

    // Check files exist
    expect(fs.existsSync(path.join(outputDir, 'ncee/summary.json'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'ncee/by-year/2024.json'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'ncee/by-paper/test-paper-1.json'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'ncee/by-kp/set-concept.json'))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, 'ncee/by-chapter/required-1/ch1.json'))).toBe(true);

    // Check no tmp directory remains
    expect(fs.existsSync(path.join(outputDir, 'ncee-tmp'))).toBe(false);

    // Check JSON is valid
    const summary = JSON.parse(fs.readFileSync(path.join(outputDir, 'ncee/summary.json'), 'utf-8'));
    expect(summary.total_questions).toBe(1);
  });

  it('index JSON does not contain question body', () => {
    const validKpIds = loadValidKpIds(kpDir);
    const { result } = buildNceeIndex(nceeDir, validKpIds);

    fs.mkdirSync(outputDir, { recursive: true });
    writeNceeIndex(result, outputDir);

    const byYear = JSON.parse(
      fs.readFileSync(path.join(outputDir, 'ncee/by-year/2024.json'), 'utf-8')
    );
    const entry = byYear[0];
    // Should have metadata fields
    expect(entry.ncee_id).toBe('ncee-2024-test-1-1');
    expect(entry.year).toBe(2024);
    // Should NOT have body/content fields (they were never in the meta)
    expect(entry).not.toHaveProperty('body');
    expect(entry).not.toHaveProperty('content');
  });
});
