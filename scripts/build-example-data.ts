import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ExampleStep {
  title: string;
  knowledge_point: string;
  content: string;
}

interface ExampleData {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  knowledge_points: string[];
  question: string;
  steps: ExampleStep[];
  warning?: string;
  summary?: string;
}

function parseExampleMarkdown(raw: string, filePath: string): ExampleData {
  const { data, content } = matter(raw);

  // Extract question: between **例题：** and **解答：**
  const questionMatch = content.match(/\*\*例题[：:]\*\*\s*([\s\S]*?)(?=\*\*解答[：:]\*\*)/);
  const question = questionMatch ? questionMatch[1].trim() : '';

  // Extract solution steps
  const steps: ExampleStep[] = [];
  const stepRegex = /\*\*第(\d+)步[：:]\*\*\s*(.+?)(?:\n>\s*📌\s*运用知识点[：:]\s*(.+?))?\n([\s\S]*?)(?=\*\*第\d+步[：:]\*\*|\*\*⚠️|\*\*💡|>\s*⚠️|$)/g;
  let match;
  while ((match = stepRegex.exec(content)) !== null) {
    steps.push({
      title: match[2].trim(),
      knowledge_point: match[3]?.trim() || '',
      content: match[4].trim(),
    });
  }

  // Extract warning
  const warningMatch = content.match(/⚠️\s*\**注意[：:]?\**\s*([\s\S]*?)(?=\*\*第|\*\*💡|$)/);
  const warning = warningMatch ? warningMatch[1].trim().replace(/\*\*/g, '') : undefined;

  // Extract summary
  const summaryMatch = content.match(/\*\*💡\s*解题思路总结[：:]\*\*\s*(.+)/);
  const summary = summaryMatch ? summaryMatch[1].trim() : undefined;

  // Generate ID
  const rel = path.relative('src/content/textbooks', filePath);
  const parts = rel.split(path.sep);
  const textbook = parts[0];
  const chapter = parseInt(parts[1].replace('chapter-', ''), 10);
  const section = parseInt(parts[2].replace('section-', ''), 10);
  const id = `${textbook}-ch${chapter}-s${section}-eg${data.number}`;

  return {
    id,
    textbook: data.textbook,
    chapter: data.chapter,
    section: data.section,
    number: data.number,
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
  const outputDir = path.resolve('public/data/examples');
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
        if (data.type === 'example') {
          const exampleData = parseExampleMarkdown(raw, fullPath);
          fs.writeFileSync(
            path.join(outputDir, `${exampleData.id}.json`),
            JSON.stringify(exampleData, null, 2)
          );
          count++;
        }
      }
    }
  }

  walk(contentDir);
  console.log(`✅ Example data: ${count} examples exported to JSON`);
}
