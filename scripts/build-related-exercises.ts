import fs from 'fs';
import path from 'path';

export interface ExerciseMeta {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: string;
  knowledge_points: string[];
}

export interface RelatedResult {
  exerciseId: string;
  sameKnowledge: string[];
  sameType: string[];
}

export function findRelatedExercises(exercise: ExerciseMeta, all: ExerciseMeta[]): RelatedResult {
  const sameKnowledge = all
    .filter(e =>
      e.id !== exercise.id &&
      e.knowledge_points.some(kp => exercise.knowledge_points.includes(kp)) &&
      !(e.chapter === exercise.chapter && e.section === exercise.section)
    )
    .map(e => e.id);

  const sameType = all
    .filter(e =>
      e.id !== exercise.id &&
      e.chapter === exercise.chapter &&
      e.section === exercise.section &&
      e.knowledge_points.some(kp => !exercise.knowledge_points.includes(kp))
    )
    .map(e => e.id);

  return { exerciseId: exercise.id, sameKnowledge, sameType };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const indexPath = path.resolve('public/data/exercises-index.json');
  const exercises: ExerciseMeta[] = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  const outputDir = path.resolve('public/data/related');
  fs.mkdirSync(outputDir, { recursive: true });

  for (const ex of exercises) {
    const related = findRelatedExercises(ex, exercises);
    fs.writeFileSync(
      path.join(outputDir, `${ex.id}.json`),
      JSON.stringify(related, null, 2)
    );
  }
  console.log(`✅ Related exercises: generated for ${exercises.length} exercises`);
}
