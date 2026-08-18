import fs from 'fs';
import path from 'path';

const contentDir = path.resolve('src/content/textbooks');
let exerciseCount = 0;
let exampleCount = 0;

function walk(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const original = content;

      // Check type from frontmatter
      if (content.includes('\ntype: exercise') || content.includes('\ntype: "exercise"')) {
        // Migrate exercise files
        // 1. Change source
        content = content.replace(
          /source:\s*"自编"/,
          'source: "人教A版2019"'
        );
        content = content.replace(
          /source:\s*'自编'/,
          'source: "人教A版2019"'
        );
        content = content.replace(
          /source:\s*自编/,
          'source: "人教A版2019"'
        );

        // 2. Add category: practice after difficulty line (if not already present)
        if (!content.includes('\ncategory:')) {
          content = content.replace(
            /(difficulty:\s*(?:basic|medium|hard)\n)/,
            '$1category: practice\n'
          );
        }

        if (content !== original) {
          fs.writeFileSync(fullPath, content);
          exerciseCount++;
        }
      } else if (content.includes('\ntype: example') || content.includes('\ntype: "example"')) {
        // Migrate example files - add source/references if missing
        if (!content.includes('\nsource:') && !content.includes('\nreferences:')) {
          // Add source and references before the closing --- of frontmatter
          // Find the second --- (end of frontmatter)
          const firstSep = content.indexOf('---');
          const secondSep = content.indexOf('---', firstSep + 3);
          if (secondSep > 0) {
            const before = content.substring(0, secondSep);
            const after = content.substring(secondSep);
            // Check if knowledge_points is the last field before ---
            content = before.trimEnd() + '\nsource: "人教A版2019"\nreferences: "待补充"\n' + after;
            if (content !== original) {
              fs.writeFileSync(fullPath, content);
              exampleCount++;
            }
          }
        }
      }
    }
  }
}

walk(contentDir);
console.log(`✅ Migrated ${exerciseCount} exercises, ${exampleCount} examples`);
