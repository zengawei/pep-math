import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ExerciseStep {
  title: string;
  knowledge_point: string;
  content: string;
}

export interface ExerciseData {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: string;
  category: string;
  group?: string;
  knowledge_points: string[];
  question: string;
  steps: ExerciseStep[];
  warning?: string;
  summary?: string;
}

export function parseExerciseMarkdown(raw: string, filePath?: string): ExerciseData {
  const { data, content } = matter(raw);

  // Extract question: between **题目：** and --- or **解答：**
  const questionMatch = content.match(/\*\*题目[：:]\*\*\s*([\s\S]*?)(?=---|\*\*解答[：:]\*\*)/);
  const question = questionMatch ? questionMatch[1].trim() : '';

  // Extract solution steps
  const steps: ExerciseStep[] = [];
  const stepRegex = /\*\*第(\d+)步[：:]\*\*\s*(.+?)(?:\n>\s*📌\s*运用知识点[：:]\s*(.+?))?\n([\s\S]*?)(?=\*\*第\d+步[：:]\*\*|\*\*⚠️|\*\*💡|$)/g;
  let match;
  while ((match = stepRegex.exec(content)) !== null) {
    steps.push({
      title: match[2].trim(),
      knowledge_point: match[3]?.trim() || '',
      content: match[4].trim(),
    });
  }

  // Extract warning
  const warningMatch = content.match(/\*\*⚠️\s*易错提醒[：:]\*\*\s*(.+)/);
  const warning = warningMatch ? warningMatch[1].trim() : undefined;

  // Extract summary
  const summaryMatch = content.match(/\*\*💡\s*解题思路总结[：:]\*\*\s*(.+)/);
  const summary = summaryMatch ? summaryMatch[1].trim() : undefined;

  // Generate ID
  let id: string;
  if (filePath) {
    const rel = path.relative('src/content/textbooks', filePath);
    const parts = rel.split(path.sep);
    const textbook = parts[0];
    const chapter = parseInt(parts[1].replace('chapter-', ''), 10);
    if (parts[2] === 'review') {
      id = `${textbook}-ch${chapter}-review-ex${data.number}`;
    } else {
      const section = parseInt(parts[2].replace('section-', ''), 10);
      id = `${textbook}-ch${chapter}-s${section}-ex${data.number}`;
    }
  } else if (data.section === 0) {
    id = `${data.textbook}-ch${data.chapter}-review-ex${data.number}`;
  } else {
    id = `${data.textbook}-ch${data.chapter}-s${data.section}-ex${data.number}`;
  }

  return {
    id,
    textbook: data.textbook,
    chapter: data.chapter,
    section: data.section,
    number: data.number,
    difficulty: data.difficulty,
    category: data.category || 'practice',
    group: data.group,
    knowledge_points: data.knowledge_points,
    question,
    steps,
    warning,
    summary,
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/textbooks');
  const outputDir = path.resolve('public/data/exercises');
  fs.mkdirSync(outputDir, { recursive: true });

  let count = 0;
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
          const exerciseData = parseExerciseMarkdown(raw, fullPath);
          fs.writeFileSync(
            path.join(outputDir, `${exerciseData.id}.json`),
            JSON.stringify(exerciseData, null, 2)
          );
          count++;
        }
      }
    }
  }

  walk(contentDir);
  console.log(`✅ Exercise data: ${count} exercises exported to JSON`);
}
