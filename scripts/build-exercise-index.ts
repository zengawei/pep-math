import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ExerciseMeta {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: 'basic' | 'medium' | 'hard';
  category: string;
  group?: string;
  knowledge_points: string[];
  source?: 'exercise' | 'ncee';
  ncee_id?: string;
}

interface BuildResult {
  index: ExerciseMeta[];
  byKp: Record<string, ExerciseMeta[]>;
  byDifficulty: Record<string, ExerciseMeta[]>;
  byChapter: Record<string, ExerciseMeta[]>;
}

const DIFFICULTY_ORDER: Record<string, number> = { basic: 0, medium: 1, hard: 2 };

function extractExercises(contentDir: string): ExerciseMeta[] {
  const exercises: ExerciseMeta[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'ncee') continue;
        walk(fullPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        if (data.type === 'exercise') {
          // Derive ID from path
          const rel = path.relative(contentDir, fullPath);
          const parts = rel.split(path.sep);
          // e.g. required-1/chapter-01/section-01/exercise-1.md
          // or   required-1/chapter-01/review/review-exercise-1.md
          const textbook = parts[0];
          const chapter = parseInt(parts[1].replace('chapter-', ''), 10);
          const isReview = parts[2] === 'review';
          const section = isReview ? 0 : parseInt(parts[2].replace('section-', ''), 10);
          const id = isReview
            ? `${textbook}-ch${chapter}-review-ex${data.number}`
            : `${textbook}-ch${chapter}-s${section}-ex${data.number}`;

          exercises.push({
            id,
            textbook: data.textbook,
            chapter: data.chapter,
            section: data.section ?? section,
            number: data.number,
            difficulty: data.difficulty,
            category: data.category || 'practice',
            group: data.group,
            knowledge_points: data.knowledge_points,
            source: 'exercise',
          });
        }
      }
    }
  }

  walk(contentDir);
  return exercises;
}

function extractNcee(contentDir: string): ExerciseMeta[] {
  const nceeDir = path.join(contentDir, 'ncee');
  const items: ExerciseMeta[] = [];
  if (!fs.existsSync(nceeDir)) return items;

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        if (data.type === 'ncee' && !data.is_deprecated) {
          items.push({
            id: data.ncee_id,
            textbook: '',
            chapter: 0,
            section: 0,
            number: data.question_number,
            difficulty: data.difficulty,
            category: data.question_type,
            knowledge_points: data.knowledge_points || [],
            source: 'ncee',
            ncee_id: data.ncee_id,
          });
        }
      }
    }
  }

  walk(nceeDir);
  return items;
}

export function buildExerciseIndex(contentDir: string): BuildResult {
  const exercises = extractExercises(contentDir);
  const nceeItems = extractNcee(contentDir);
  const allItems = [...exercises, ...nceeItems];

  // Aggregate by knowledge point
  const byKp: Record<string, ExerciseMeta[]> = {};
  for (const ex of allItems) {
    for (const kp of ex.knowledge_points) {
      if (!byKp[kp]) byKp[kp] = [];
      byKp[kp].push(ex);
    }
  }
  // Sort by difficulty within each knowledge point
  for (const kp of Object.keys(byKp)) {
    byKp[kp].sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
  }

  // Aggregate by difficulty (exercises only, not ncee)
  const byDifficulty: Record<string, ExerciseMeta[]> = {};
  for (const ex of exercises) {
    if (!byDifficulty[ex.difficulty]) byDifficulty[ex.difficulty] = [];
    byDifficulty[ex.difficulty].push(ex);
  }

  // Aggregate ncee by chapter (from textbook_refs in original data)
  const byChapter: Record<string, ExerciseMeta[]> = {};
  // Re-read ncee files to get textbook_refs (not in ExerciseMeta)
  const nceeDir = path.join(contentDir, 'ncee');
  if (fs.existsSync(nceeDir)) {
    function walkForChapter(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkForChapter(fullPath);
        } else if (entry.name.endsWith('.md')) {
          const raw = fs.readFileSync(fullPath, 'utf-8');
          const { data } = matter(raw);
          if (data.type === 'ncee' && !data.is_deprecated && Array.isArray(data.textbook_refs)) {
            const nceeMeta = nceeItems.find(n => n.ncee_id === data.ncee_id);
            if (!nceeMeta) continue;
            for (const ref of data.textbook_refs) {
              const key = `${ref.textbook}/ch${ref.chapter}`;
              if (!byChapter[key]) byChapter[key] = [];
              byChapter[key].push(nceeMeta);
            }
          }
        }
      }
    }
    walkForChapter(nceeDir);
  }

  return { index: exercises, byKp, byDifficulty, byChapter };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/textbooks');
  const result = buildExerciseIndex(contentDir);
  const outputDir = path.resolve('public/data');
  fs.mkdirSync(outputDir, { recursive: true });

  // exercises-index.json
  fs.writeFileSync(
    path.join(outputDir, 'exercises-index.json'),
    JSON.stringify(result.index, null, 2)
  );

  // exercises-by-kp/
  const kpDir = path.join(outputDir, 'exercises-by-kp');
  fs.mkdirSync(kpDir, { recursive: true });
  for (const [kp, exs] of Object.entries(result.byKp)) {
    fs.writeFileSync(path.join(kpDir, `${kp}.json`), JSON.stringify(exs, null, 2));
  }

  // exercises-by-difficulty/
  const diffDir = path.join(outputDir, 'exercises-by-difficulty');
  fs.mkdirSync(diffDir, { recursive: true });
  for (const [diff, exs] of Object.entries(result.byDifficulty)) {
    fs.writeFileSync(path.join(diffDir, `${diff}.json`), JSON.stringify(exs, null, 2));
  }

  // exercises-by-chapter/ (ncee questions linked to textbook chapters)
  const chDir = path.join(outputDir, 'exercises-by-chapter');
  fs.mkdirSync(chDir, { recursive: true });
  for (const [key, items] of Object.entries(result.byChapter)) {
    const [textbook, ch] = key.split('/');
    const textBookDir = path.join(chDir, textbook);
    fs.mkdirSync(textBookDir, { recursive: true });
    fs.writeFileSync(path.join(textBookDir, `${ch}.json`), JSON.stringify(items, null, 2));
  }

  console.log(`✅ Exercise index: ${result.index.length} exercises, ${Object.keys(result.byKp).length} knowledge points`);
}
