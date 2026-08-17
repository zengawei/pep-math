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
  knowledge_points: string[];
}

interface BuildResult {
  index: ExerciseMeta[];
  byKp: Record<string, ExerciseMeta[]>;
  byDifficulty: Record<string, ExerciseMeta[]>;
}

const DIFFICULTY_ORDER: Record<string, number> = { basic: 0, medium: 1, hard: 2 };

function extractExercises(contentDir: string): ExerciseMeta[] {
  const exercises: ExerciseMeta[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        if (data.type === 'exercise') {
          // Derive ID from path
          const rel = path.relative(contentDir, fullPath);
          const parts = rel.split(path.sep);
          // e.g. required-1/chapter-01/section-01/exercise-1.md
          const textbook = parts[0];
          const chapter = parseInt(parts[1].replace('chapter-', ''), 10);
          const section = parseInt(parts[2].replace('section-', ''), 10);
          const id = `${textbook}-ch${chapter}-s${section}-ex${data.number}`;

          exercises.push({
            id,
            textbook: data.textbook,
            chapter: data.chapter,
            section: data.section,
            number: data.number,
            difficulty: data.difficulty,
            knowledge_points: data.knowledge_points,
          });
        }
      }
    }
  }

  walk(contentDir);
  return exercises;
}

export function buildExerciseIndex(contentDir: string): BuildResult {
  const exercises = extractExercises(contentDir);

  // Aggregate by knowledge point
  const byKp: Record<string, ExerciseMeta[]> = {};
  for (const ex of exercises) {
    for (const kp of ex.knowledge_points) {
      if (!byKp[kp]) byKp[kp] = [];
      byKp[kp].push(ex);
    }
  }
  // Sort by difficulty within each knowledge point
  for (const kp of Object.keys(byKp)) {
    byKp[kp].sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
  }

  // Aggregate by difficulty
  const byDifficulty: Record<string, ExerciseMeta[]> = {};
  for (const ex of exercises) {
    if (!byDifficulty[ex.difficulty]) byDifficulty[ex.difficulty] = [];
    byDifficulty[ex.difficulty].push(ex);
  }

  return { index: exercises, byKp, byDifficulty };
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

  console.log(`✅ Exercise index: ${result.index.length} exercises, ${Object.keys(result.byKp).length} knowledge points`);
}
