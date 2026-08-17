import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

interface QualityReport {
  exercises: {
    total: number;
    byTextbook: Record<string, number>;
    byDifficulty: Record<string, number>;
    knowledgePointCoverage: { covered: string[]; uncovered: string[] };
    avgKnowledgePointsPerExercise: number;
  };
  knowledgeGraph: {
    nodeCount: number;
    edgeCount: number;
    orphanNodes: number;
    circularDeps: number;
  };
  generatedAt: string;
}

export function generateReport(projectRoot: string): QualityReport {
  const contentDir = path.join(projectRoot, 'src/content/textbooks');
  const kpDir = path.join(projectRoot, 'src/content/knowledge-points');

  // 统计习题
  const exercises: Array<{ textbook: string; difficulty: string; kpCount: number; kpIds: string[] }> = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md')) {
        const { data } = matter(fs.readFileSync(full, 'utf-8'));
        if (data.type === 'exercise') {
          exercises.push({
            textbook: data.textbook,
            difficulty: data.difficulty,
            kpCount: data.knowledge_points?.length || 0,
            kpIds: data.knowledge_points || [],
          });
        }
      }
    }
  }
  walk(contentDir);

  // 统计知识点
  const allKpIds = new Set<string>();
  for (const file of fs.readdirSync(kpDir)) {
    if (file.endsWith('.yml')) {
      const kp = yaml.load(fs.readFileSync(path.join(kpDir, file), 'utf-8')) as { id: string };
      allKpIds.add(kp.id);
    }
  }

  const coveredKps = new Set(exercises.flatMap(e => e.kpIds));
  const uncovered = [...allKpIds].filter(id => !coveredKps.has(id));

  const byTextbook: Record<string, number> = {};
  const byDifficulty: Record<string, number> = {};
  let totalKp = 0;
  for (const ex of exercises) {
    byTextbook[ex.textbook] = (byTextbook[ex.textbook] || 0) + 1;
    byDifficulty[ex.difficulty] = (byDifficulty[ex.difficulty] || 0) + 1;
    totalKp += ex.kpCount;
  }

  // 知识图谱统计
  const graphPath = path.join(projectRoot, 'public/data/knowledge-graph.json');
  let nodeCount = 0, edgeCount = 0;
  if (fs.existsSync(graphPath)) {
    const graph = JSON.parse(fs.readFileSync(graphPath, 'utf-8'));
    nodeCount = graph.nodes?.length || 0;
    edgeCount = graph.edges?.length || 0;
  }

  return {
    exercises: {
      total: exercises.length,
      byTextbook,
      byDifficulty,
      knowledgePointCoverage: { covered: [...coveredKps], uncovered },
      avgKnowledgePointsPerExercise: exercises.length > 0 ? Math.round(totalKp / exercises.length * 10) / 10 : 0,
    },
    knowledgeGraph: {
      nodeCount,
      edgeCount,
      orphanNodes: 0,
      circularDeps: 0,
    },
    generatedAt: new Date().toISOString(),
  };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const report = generateReport(process.cwd());
  const outputDir = path.resolve('public/data');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'quality-report.json'), JSON.stringify(report, null, 2));

  // 输出摘要到控制台
  console.log('\n📊 内容质量报告');
  console.log('─'.repeat(30));
  console.log(`习题总数：${report.exercises.total}`);
  for (const [tb, count] of Object.entries(report.exercises.byTextbook)) {
    console.log(`  ├─ ${tb}：${count}`);
  }
  console.log(`  ├─ 难度分布：${JSON.stringify(report.exercises.byDifficulty)}`);
  console.log(`  └─ 知识点覆盖：${report.exercises.knowledgePointCoverage.covered.length} / ${report.exercises.knowledgePointCoverage.covered.length + report.exercises.knowledgePointCoverage.uncovered.length}`);
  console.log(`\n知识图谱：${report.knowledgeGraph.nodeCount} 节点，${report.knowledgeGraph.edgeCount} 条边`);
  console.log(`\n✅ 报告已生成：public/data/quality-report.json`);
}
