import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface SectionExercise {
  id: string;
  number: number;
  difficulty: string;
  knowledge_points: string[];
}

interface SectionDefinition {
  name: string;
  related_knowledge_points: string[];
}

interface SectionExample {
  id: string;
  number: number;
  knowledge_points: string[];
}

interface SectionData {
  textbook: string;
  chapter: number;
  section: number;
  exercises: SectionExercise[];
  definitions: SectionDefinition[];
  examples: SectionExample[];
}

export function buildSectionData(textbooksDir: string): Record<string, SectionData> {
  const result: Record<string, SectionData> = {};

  const textbooks = fs.readdirSync(textbooksDir);
  for (const textbook of textbooks) {
    const textbookDir = path.join(textbooksDir, textbook);
    if (!fs.statSync(textbookDir).isDirectory()) continue;

    const chapters = fs.readdirSync(textbookDir);
    for (const chapterDir of chapters) {
      const chapterPath = path.join(textbookDir, chapterDir);
      if (!fs.statSync(chapterPath).isDirectory()) continue;
      const chapterNum = parseInt(chapterDir.replace('chapter-', ''), 10);

      const sections = fs.readdirSync(chapterPath);
      for (const sectionDir of sections) {
        const sectionPath = path.join(chapterPath, sectionDir);
        if (!fs.statSync(sectionPath).isDirectory()) continue;
        const sectionNum = parseInt(sectionDir.replace('section-', ''), 10);

        const key = `${textbook}/ch${chapterNum}/s${sectionNum}`;
        const sectionData: SectionData = {
          textbook,
          chapter: chapterNum,
          section: sectionNum,
          exercises: [],
          definitions: [],
          examples: [],
        };

        const files = fs.readdirSync(sectionPath);
        for (const file of files) {
          if (!file.endsWith('.md')) continue;
          const raw = fs.readFileSync(path.join(sectionPath, file), 'utf-8');
          const { data } = matter(raw);

          if (data.type === 'exercise') {
            sectionData.exercises.push({
              id: `${textbook}-ch${chapterNum}-s${sectionNum}-ex${data.number}`,
              number: data.number,
              difficulty: data.difficulty,
              knowledge_points: data.knowledge_points,
            });
          } else if (data.type === 'definition') {
            sectionData.definitions.push({
              name: data.name,
              related_knowledge_points: data.related_knowledge_points,
            });
          } else if (data.type === 'example') {
            sectionData.examples.push({
              id: `${textbook}-ch${chapterNum}-s${sectionNum}-eg${data.number}`,
              number: data.number,
              knowledge_points: data.knowledge_points,
            });
          }
        }

        // Sort exercises by number
        sectionData.exercises.sort((a, b) => a.number - b.number);
        result[key] = sectionData;
      }
    }
  }

  return result;
}

// CLI entry
if (import.meta.url === `file://${process.argv[1]}`) {
  const textbooksDir = path.resolve('src/content/textbooks');
  const outputDir = path.resolve('public/data/sections');
  fs.mkdirSync(outputDir, { recursive: true });

  const data = buildSectionData(textbooksDir);

  for (const [key, sectionData] of Object.entries(data)) {
    const filename = key.replace(/\//g, '-') + '.json';
    fs.writeFileSync(
      path.join(outputDir, filename),
      JSON.stringify(sectionData, null, 2)
    );
  }
  console.log(`✅ Section data: ${Object.keys(data).length} sections exported`);
}
