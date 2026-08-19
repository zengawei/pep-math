import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface NceeMeta {
  ncee_id: string;
  year: number;
  paper: string;
  paper_code: string;
  question_number: number;
  question_type: 'choice' | 'fill_blank' | 'solution';
  sub_type?: string;
  difficulty: 'basic' | 'medium' | 'hard';
  score?: number;
  knowledge_points: string[];
  textbook_refs: Array<{
    textbook: string;
    chapter: number;
    section?: number;
  }>;
  is_deprecated: boolean;
  source: string;
  region?: string;
}

export interface NceeIndexResult {
  all: NceeMeta[];
  byYear: Record<number, NceeMeta[]>;
  byPaper: Record<string, NceeMeta[]>;
  byKp: Record<string, NceeMeta[]>;
  byChapter: Record<string, NceeMeta[]>;
  summary: NceeSummary;
}

export interface NceeSummary {
  total_questions: number;
  total_papers: number;
  years: Record<number, { paper_count: number; question_count: number }>;
  by_kp_count: Record<string, number>;
}

export interface ValidationError {
  file: string;
  error: string;
}

const FILENAME_RE = /^q\d{2}\.md$/;

export function loadValidKpIds(kpDir: string): Set<string> {
  const files = fs.readdirSync(kpDir).filter(f => f.endsWith('.yml'));
  return new Set(files.map(f => f.replace(/\.yml$/, '')));
}

export function validateFilename(filename: string): boolean {
  return FILENAME_RE.test(filename);
}

export function validateKatex(content: string): string[] {
  const errors: string[] = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip frontmatter
    if (line.startsWith('---')) continue;

    // Check inline $ pairing (not $$)
    // Remove $$ blocks first to avoid double-counting
    const stripped = line.replace(/\$\$[^$]*\$\$/g, '');
    const singleDollarCount = (stripped.match(/(?<![\\])\$/g) || []).length;
    if (singleDollarCount % 2 !== 0) {
      errors.push(`Line ${i + 1}: unmatched inline $ (odd count)`);
    }

    // Check $$ pairing
    const doubleDollarCount = (line.match(/\$\$/g) || []).length;
    if (doubleDollarCount % 2 !== 0) {
      errors.push(`Line ${i + 1}: unmatched block $$ (odd count)`);
    }

    // Check {} matching in LaTeX segments
    const latexSegments = [
      ...line.matchAll(/\$\$([^$]+)\$\$/g),
      ...line.matchAll(/\$([^$]+)\$/g),
    ];
    for (const seg of latexSegments) {
      const tex = seg[1];
      let depth = 0;
      for (const ch of tex) {
        if (ch === '{') depth++;
        if (ch === '}') depth--;
        if (depth < 0) {
          errors.push(`Line ${i + 1}: unmatched } in LaTeX`);
          break;
        }
      }
      if (depth > 0) {
        errors.push(`Line ${i + 1}: unmatched { in LaTeX (${depth} unclosed)`);
      }

      // Check \frac and \sqrt require {}
      const fracMatches = tex.matchAll(/\\frac(?!\s*\{)/g);
      for (const m of fracMatches) {
        errors.push(`Line ${i + 1}: \\frac missing {} argument`);
      }
      const sqrtMatches = tex.matchAll(/\\sqrt(?!\s*[\{\[])/g);
      for (const m of sqrtMatches) {
        errors.push(`Line ${i + 1}: \\sqrt missing {} or [] argument`);
      }
    }
  }

  return errors;
}

export function extractNcee(
  filePath: string,
  validKpIds: Set<string>
): { meta: NceeMeta; errors: ValidationError[] } {
  const errors: ValidationError[] = [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);

  // Basic field validation
  if (data.type !== 'ncee') {
    errors.push({ file: filePath, error: 'type is not "ncee"' });
    return { meta: data as NceeMeta, errors };
  }

  if (!data.ncee_id || typeof data.ncee_id !== 'string') {
    errors.push({ file: filePath, error: 'missing or invalid ncee_id' });
  }

  if (!Number.isInteger(data.year) || data.year < 2016 || data.year > 2025) {
    errors.push({ file: filePath, error: `year ${data.year} out of range [2016, 2025]` });
  }

  if (!['choice', 'fill_blank', 'solution'].includes(data.question_type)) {
    errors.push({ file: filePath, error: `invalid question_type: ${data.question_type}` });
  }

  if (!['basic', 'medium', 'hard'].includes(data.difficulty)) {
    errors.push({ file: filePath, error: `invalid difficulty: ${data.difficulty}` });
  }

  if (!Array.isArray(data.knowledge_points) || data.knowledge_points.length < 1) {
    errors.push({ file: filePath, error: 'knowledge_points must have at least 1 entry' });
  } else {
    for (const kp of data.knowledge_points) {
      if (!validKpIds.has(kp)) {
        errors.push({ file: filePath, error: `unknown knowledge_point: ${kp}` });
      }
    }
  }

  if (data.source !== '高考真题') {
    errors.push({ file: filePath, error: `source must be "高考真题", got "${data.source}"` });
  }

  // KaTeX validation on body
  const body = raw.slice(raw.indexOf('---', 3) + 3);
  const katexErrors = validateKatex(body);
  for (const ke of katexErrors) {
    errors.push({ file: filePath, error: `KaTeX: ${ke}` });
  }

  const meta: NceeMeta = {
    ncee_id: data.ncee_id,
    year: data.year,
    paper: data.paper,
    paper_code: data.paper_code,
    question_number: data.question_number,
    question_type: data.question_type,
    sub_type: data.sub_type,
    difficulty: data.difficulty,
    score: data.score,
    knowledge_points: data.knowledge_points || [],
    textbook_refs: data.textbook_refs || [],
    is_deprecated: data.is_deprecated || false,
    source: data.source,
    region: data.region,
  };

  return { meta, errors };
}

export function buildNceeIndex(
  nceeDir: string,
  validKpIds: Set<string>
): { result: NceeIndexResult; errors: ValidationError[] } {
  const allErrors: ValidationError[] = [];
  const allMetas: NceeMeta[] = [];
  const seenIds = new Set<string>();

  if (!fs.existsSync(nceeDir)) {
    return {
      result: {
        all: [],
        byYear: {},
        byPaper: {},
        byKp: {},
        byChapter: {},
        summary: { total_questions: 0, total_papers: 0, years: {}, by_kp_count: {} },
      },
      errors: [],
    };
  }

  // Walk year directories
  const yearDirs = fs.readdirSync(nceeDir).filter(d => {
    const full = path.join(nceeDir, d);
    return fs.statSync(full).isDirectory() && /^\d{4}$/.test(d);
  });

  for (const yearDir of yearDirs) {
    const yearPath = path.join(nceeDir, yearDir);
    const paperDirs = fs.readdirSync(yearPath).filter(d => {
      return fs.statSync(path.join(yearPath, d)).isDirectory();
    });

    for (const paperDir of paperDirs) {
      const paperPath = path.join(yearPath, paperDir);
      const mdFiles = fs.readdirSync(paperPath).filter(f => f.endsWith('.md'));

      // Validate filenames
      for (const f of mdFiles) {
        if (!validateFilename(f)) {
          allErrors.push({
            file: path.join(paperPath, f),
            error: `filename "${f}" does not match qNN.md format`,
          });
        }
      }

      // Extract metadata
      const questionNumbers = new Set<number>();
      for (const f of mdFiles) {
        const filePath = path.join(paperPath, f);
        const { meta, errors } = extractNcee(filePath, validKpIds);
        allErrors.push(...errors);

        // Check duplicate question_number within paper
        if (questionNumbers.has(meta.question_number)) {
          allErrors.push({
            file: filePath,
            error: `duplicate question_number ${meta.question_number} in paper ${paperDir}`,
          });
        }
        questionNumbers.add(meta.question_number);

        // Check duplicate ncee_id globally
        if (seenIds.has(meta.ncee_id)) {
          allErrors.push({
            file: filePath,
            error: `duplicate ncee_id: ${meta.ncee_id}`,
          });
        }
        seenIds.add(meta.ncee_id);

        allMetas.push(meta);
      }
    }
  }

  // Filter out deprecated
  const active = allMetas.filter(m => !m.is_deprecated);

  // Build shards
  const byYear: Record<number, NceeMeta[]> = {};
  const byPaper: Record<string, NceeMeta[]> = {};
  const byKp: Record<string, NceeMeta[]> = {};
  const byChapter: Record<string, NceeMeta[]> = {};

  for (const m of active) {
    // by-year
    if (!byYear[m.year]) byYear[m.year] = [];
    byYear[m.year].push(m);

    // by-paper
    if (!byPaper[m.paper_code]) byPaper[m.paper_code] = [];
    byPaper[m.paper_code].push(m);

    // by-kp
    for (const kp of m.knowledge_points) {
      if (!byKp[kp]) byKp[kp] = [];
      byKp[kp].push(m);
    }

    // by-chapter
    for (const ref of m.textbook_refs) {
      const key = `${ref.textbook}/ch${ref.chapter}`;
      if (!byChapter[key]) byChapter[key] = [];
      byChapter[key].push(m);
    }
  }

  // Build summary
  const paperCodes = new Set(active.map(m => m.paper_code));
  const years: Record<number, { paper_count: number; question_count: number }> = {};
  for (const [y, items] of Object.entries(byYear)) {
    const yNum = Number(y);
    const papers = new Set(items.map(m => m.paper_code));
    years[yNum] = { paper_count: papers.size, question_count: items.length };
  }

  const by_kp_count: Record<string, number> = {};
  for (const [kp, items] of Object.entries(byKp)) {
    by_kp_count[kp] = items.length;
  }

  const summary: NceeSummary = {
    total_questions: active.length,
    total_papers: paperCodes.size,
    years,
    by_kp_count,
  };

  return {
    result: { all: active, byYear, byPaper, byKp, byChapter, summary },
    errors: allErrors,
  };
}

export function writeNceeIndex(result: NceeIndexResult, outputBase: string): void {
  const tmpDir = path.join(outputBase, 'ncee-tmp');
  const finalDir = path.join(outputBase, 'ncee');

  // Clean tmp
  if (fs.existsSync(tmpDir)) {
    fs.rmSync(tmpDir, { recursive: true });
  }
  fs.mkdirSync(tmpDir, { recursive: true });

  // by-year
  const byYearDir = path.join(tmpDir, 'by-year');
  fs.mkdirSync(byYearDir, { recursive: true });
  for (const [year, items] of Object.entries(result.byYear)) {
    fs.writeFileSync(
      path.join(byYearDir, `${year}.json`),
      JSON.stringify(items, null, 2)
    );
  }

  // by-paper
  const byPaperDir = path.join(tmpDir, 'by-paper');
  fs.mkdirSync(byPaperDir, { recursive: true });
  for (const [code, items] of Object.entries(result.byPaper)) {
    fs.writeFileSync(
      path.join(byPaperDir, `${code}.json`),
      JSON.stringify(items, null, 2)
    );
  }

  // by-kp
  const byKpDir = path.join(tmpDir, 'by-kp');
  fs.mkdirSync(byKpDir, { recursive: true });
  for (const [kp, items] of Object.entries(result.byKp)) {
    fs.writeFileSync(
      path.join(byKpDir, `${kp}.json`),
      JSON.stringify(items, null, 2)
    );
  }

  // by-chapter
  const byChapterDir = path.join(tmpDir, 'by-chapter');
  fs.mkdirSync(byChapterDir, { recursive: true });
  for (const [key, items] of Object.entries(result.byChapter)) {
    // key format: "required-1/ch1" → create subdirectory
    const [textbook, ch] = key.split('/');
    const chSubDir = path.join(byChapterDir, textbook);
    fs.mkdirSync(chSubDir, { recursive: true });
    fs.writeFileSync(
      path.join(chSubDir, `${ch}.json`),
      JSON.stringify(items, null, 2)
    );
  }

  // summary.json
  fs.writeFileSync(
    path.join(tmpDir, 'summary.json'),
    JSON.stringify(result.summary, null, 2)
  );

  // Validate all JSON files
  validateJsonDir(tmpDir);

  // Atomic move: remove old, rename tmp → final
  if (fs.existsSync(finalDir)) {
    fs.rmSync(finalDir, { recursive: true });
  }
  fs.renameSync(tmpDir, finalDir);
}

function validateJsonDir(dir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      validateJsonDir(full);
    } else if (entry.name.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf-8');
      try {
        JSON.parse(content);
      } catch (e) {
        throw new Error(`JSON validation failed for ${full}: ${(e as Error).message}`);
      }
    }
  }
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const nceeDir = path.resolve('src/content/textbooks/ncee');
  const kpDir = path.resolve('src/content/knowledge-points');
  const outputDir = path.resolve('public/data');

  const validKpIds = loadValidKpIds(kpDir);
  const { result, errors } = buildNceeIndex(nceeDir, validKpIds);

  if (errors.length > 0) {
    console.error(`\n❌ ${errors.length} validation error(s):`);
    for (const err of errors) {
      console.error(`  ${err.file}: ${err.error}`);
    }
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  writeNceeIndex(result, outputDir);

  console.log(`✅ NCEE index: ${result.summary.total_questions} questions, ${result.summary.total_papers} papers`);
  console.log(`   Years: ${Object.keys(result.byYear).sort().join(', ') || '(none)'}`);
  console.log(`   Knowledge points covered: ${Object.keys(result.byKp).length}`);
}
