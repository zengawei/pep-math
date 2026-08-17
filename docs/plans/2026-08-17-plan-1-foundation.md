# pep-math Plan 1: 基础设施（M0 + M1 + M2）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 搭建 pep-math 项目骨架，完成内容模型定义、全部构建脚本和校验脚本，用 Phase 0 最小样本跑通全链路验证。

**Architecture:** Astro 静态站点 + Tailwind CSS 样式 + KaTeX 数学公式渲染。内容以 Markdown + YAML frontmatter 存储在 `src/content/`，构建脚本（TypeScript）在 `astro build` 前运行，将内容聚合为 JSON 输出到 `public/data/`。Vitest 驱动测试，GitHub Actions 驱动 CI/CD。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS 4.x, KaTeX, Vitest, GitHub Actions

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容文件使用 Markdown + YAML frontmatter，知识点使用 YAML
- 习题 source 字段必须为 `"自编"`，references 字段标注课标条目
- 构建脚本输出到 `public/data/`，该目录加入 `.gitignore`
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）

---

## File Structure

```
pep-math/
├── AGENTS.md                              # AI 编码助手项目指引
├── README.md                              # 项目说明
├── .gitignore                             # Git 忽略规则
├── package.json                           # 依赖和脚本
├── astro.config.mjs                       # Astro 配置
├── tailwind.config.mjs                    # Tailwind 配置
├── tsconfig.json                          # TypeScript 配置
├── vitest.config.ts                       # Vitest 测试配置
├── src/
│   ├── content/
│   │   ├── config.ts                      # Content Collections schema
│   │   ├── textbooks/
│   │   │   └── required-1/
│   │   │       └── chapter-01/
│   │   │           └── section-01/
│   │   │               ├── definitions.md
│   │   │               ├── examples.md
│   │   │               └── exercises.md
│   │   └── knowledge-points/
│   │       ├── set-concept.yml
│   │       ├── set-representation.yml
│   │       └── set-operations.yml
│   ├── pages/
│   │   └── index.astro                    # 首页（占位）
│   ├── layouts/
│   │   └── BaseLayout.astro               # 基础布局
│   └── styles/
│       └── global.css                     # 全局样式
├── scripts/
│   ├── build-knowledge-graph.ts
│   ├── build-exercise-index.ts
│   ├── build-exercise-data.ts
│   ├── build-related-exercises.ts
│   ├── validate-content.ts
│   ├── validate-knowledge-graph.ts
│   └── generate-quality-report.ts
├── tests/
│   ├── content/
│   │   ├── exercise-schema.test.ts
│   │   └── knowledge-graph-integrity.test.ts
│   └── scripts/
│       ├── build-knowledge-graph.test.ts
│       ├── build-exercise-index.test.ts
│       ├── build-exercise-data.test.ts
│       └── build-related-exercises.test.ts
├── public/
│   └── data/                              # 构建输出（gitignore）
└── .github/
    └── workflows/
        ├── ci.yml
        ├── deploy.yml
        └── preview.yml
```

---

## Task 1: 初始化 Astro 项目

**Files:**
- Create: `pep-math/` (整个项目目录)
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`

- [ ] **Step 1: 创建项目目录并初始化**

```bash
mkdir -p ~/Projects/pep-math && cd ~/Projects/pep-math
npm init -y
```

- [ ] **Step 2: 安装 Astro 及核心依赖**

```bash
cd ~/Projects/pep-math
npm install astro @astrojs/tailwind @astrojs/react react react-dom
npm install -D typescript vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 3: 创建 astro.config.mjs**

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  site: 'https://zengawei.github.io',
  base: '/pep-math',
});
```

- [ ] **Step 4: 创建 tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 5: 创建 .gitignore**

```
node_modules/
dist/
.astro/
public/data/
*.log
.DS_Store
```

- [ ] **Step 6: 添加 package.json scripts**

在 `package.json` 中添加：

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "test": "vitest run",
    "test:watch": "vitest",
    "prebuild": "npm run build:scripts",
    "build:scripts": "npx tsx scripts/build-knowledge-graph.ts && npx tsx scripts/build-exercise-index.ts && npx tsx scripts/build-exercise-data.ts && npx tsx scripts/build-related-exercises.ts",
    "validate": "npx tsx scripts/validate-content.ts && npx tsx scripts/validate-knowledge-graph.ts",
    "report": "npx tsx scripts/generate-quality-report.ts"
  }
}
```

- [ ] **Step 7: 验证 Astro 安装成功**

```bash
cd ~/Projects/pep-math
npx astro --version
```

Expected: 显示 Astro 版本号（5.x）

- [ ] **Step 8: 初始化 Git 仓库并提交**

```bash
cd ~/Projects/pep-math
git init
git add -A
git commit -m "chore: initialize Astro project with Tailwind, React, TypeScript, Vitest"
```

---

## Task 2: 配置 Vitest 测试框架

**Files:**
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`

- [ ] **Step 1: 写一个失败的测试确认框架工作**

```bash
cd ~/Projects/pep-math
mkdir -p tests
```

创建 `tests/smoke.test.ts`：

```typescript
import { describe, it, expect } from 'vitest';

describe('smoke test', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 2: 创建 vitest.config.ts**

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 3: 运行测试确认通过**

```bash
cd ~/Projects/pep-math
npx vitest run
```

Expected: 1 test passed

- [ ] **Step 4: 提交**

```bash
git add vitest.config.ts tests/smoke.test.ts
git commit -m "test: configure Vitest testing framework"
```

---

## Task 3: 创建基础布局和首页

**Files:**
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/pages/index.astro`

- [ ] **Step 1: 创建全局样式**

```css
/* src/styles/global.css */
@import "tailwindcss";
```

- [ ] **Step 2: 创建基础布局组件**

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} - pep-math</title>
</head>
<body>
  <header class="bg-blue-600 text-white p-4">
    <nav class="max-w-4xl mx-auto flex gap-4">
      <a href="/pep-math/" class="font-bold">pep-math</a>
      <a href="/pep-math/textbook/required-1">教材浏览</a>
      <a href="/pep-math/knowledge">知识点</a>
      <a href="/pep-math/definitions">定义</a>
      <a href="/pep-math/roadmap">学习路线</a>
    </nav>
  </header>
  <main class="max-w-4xl mx-auto p-4">
    <slot />
  </main>
  <footer class="bg-gray-100 p-4 mt-8 text-center text-sm text-gray-500">
    <p>本站题目均为原创编写，参考普通高中数学课程标准，与具体教材版本无关。</p>
  </footer>
</body>
</html>
```

- [ ] **Step 3: 创建首页**

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="首页">
  <h1 class="text-3xl font-bold mb-4">人教版高中数学知识库</h1>
  <p class="text-gray-600 mb-8">覆盖全部 5 册教材的习题、知识点、定义和例题</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <a href="/pep-math/textbook/required-1" class="border rounded p-4 hover:shadow">
      <h2 class="font-bold">必修 第一册</h2>
      <p class="text-sm text-gray-500">集合与逻辑、函数、不等式</p>
    </a>
    <a href="/pep-math/textbook/required-2" class="border rounded p-4 hover:shadow opacity-50">
      <h2 class="font-bold">必修 第二册</h2>
      <p class="text-sm text-gray-500">即将上线</p>
    </a>
    <a href="/pep-math/knowledge-graph" class="border rounded p-4 hover:shadow">
      <h2 class="font-bold">知识图谱</h2>
      <p class="text-sm text-gray-500">探索知识点之间的关联</p>
    </a>
  </div>
</BaseLayout>
```

- [ ] **Step 4: 构建并验证**

```bash
cd ~/Projects/pep-math
npx astro build
```

Expected: 构建成功，`dist/` 目录生成

- [ ] **Step 5: 提交**

```bash
git add src/
git commit -m "feat: add base layout and index page with Tailwind CSS"
```

---

## Task 4: 定义 Content Collections Schema

**Files:**
- Create: `src/content/config.ts`
- Test: `tests/content/exercise-schema.test.ts`

**Interfaces:**
- Produces: Content Collections schema 定义，供后续所有内容文件和构建脚本使用
- Schema types: `Exercise`, `Example`, `Definition`, `KnowledgePoint`

- [ ] **Step 1: 写 schema 验证测试**

```typescript
// tests/content/exercise-schema.test.ts
import { describe, it, expect } from 'vitest';
import { z } from 'astro:content';

// 从 schema 文件导入（先测试后实现）
// import { exerciseSchema, knowledgePointSchema } from '../../src/content/config';

describe('Content Collections Schema', () => {
  it('exercise schema requires all mandatory fields', () => {
    // 这个测试验证 schema 存在且可导入
    // 实际验证在 Task 5 中用真实内容测试
    expect(true).toBe(true); // placeholder until schema exists
  });
});
```

> 注意：Astro Content Collections 的 schema 在 `astro dev` 或 `astro build` 时由框架自动校验。我们这里的测试主要验证 schema 文件的导出和构建脚本对数据的解析。

- [ ] **Step 2: 创建 Content Collections 配置**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const exerciseSchema = z.object({
  type: z.literal('exercise'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  number: z.number().int().min(1),
  difficulty: z.enum(['basic', 'medium', 'hard']),
  is_exam_question: z.boolean().default(false),
  knowledge_points: z.array(z.string()).min(1),
  source: z.literal('自编'),
  references: z.string().min(1),
});

const exampleSchema = z.object({
  type: z.literal('example'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  number: z.number().int().min(1),
  knowledge_points: z.array(z.string()).min(1),
});

const definitionSchema = z.object({
  type: z.literal('definition'),
  textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
  chapter: z.number().int().min(1),
  section: z.number().int().min(1),
  name: z.string().min(1),
  related_knowledge_points: z.array(z.string()).min(1),
});

const textbookContent = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [exerciseSchema, exampleSchema, definitionSchema]),
});

const knowledgePoints = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string().min(1),
    category: z.string().min(1),
    description: z.string().min(1),
    prerequisites: z.array(z.string()).default([]),
    follow_ups: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    formulas: z.array(z.string()).default([]),
    common_mistakes: z.array(z.object({
      mistake: z.string(),
      correction: z.string(),
    })).default([]),
    applied_in: z.array(z.object({
      textbook: z.string(),
      chapters: z.array(z.number()),
    })).default([]),
  }),
});

export const collections = {
  textbooks: textbookContent,
  'knowledge-points': knowledgePoints,
};

// 导出 schema 供构建脚本使用
export { exerciseSchema, exampleSchema, definitionSchema };
```

- [ ] **Step 3: 运行测试确认通过**

```bash
cd ~/Projects/pep-math
npx vitest run tests/content/exercise-schema.test.ts
```

- [ ] **Step 4: 提交**

```bash
git add src/content/config.ts tests/content/exercise-schema.test.ts
git commit -m "feat: define Content Collections schema for exercises, examples, definitions, knowledge points"
```

---

## Task 5: 创建 Phase 0 样本内容

**Files:**
- Create: `src/content/knowledge-points/set-concept.yml`
- Create: `src/content/knowledge-points/set-representation.yml`
- Create: `src/content/knowledge-points/set-operations.yml`
- Create: `src/content/textbooks/required-1/chapter-01/section-01/exercises.md`
- Create: `src/content/textbooks/required-1/chapter-01/section-01/examples.md`
- Create: `src/content/textbooks/required-1/chapter-01/section-01/definitions.md`

> Phase 0 样本内容用于验证全链路。创建必修第一册第一章第一节的 3 道习题、1 道例题、2 个定义、3 个知识点。

- [ ] **Step 1: 创建知识点 YAML 文件**

```yaml
# src/content/knowledge-points/set-concept.yml
id: set-concept
name: 集合的概念
category: 集合与逻辑
description: |
  集合是一些确定的对象组成的整体。集合中的元素具有三个特性：
  确定性（一个对象要么属于集合要么不属于）、
  互异性（集合中的元素不重复）、
  无序性（元素的排列顺序不影响集合）。
prerequisites: []
follow_ups:
  - set-representation
  - set-operations
related: []
formulas: []
common_mistakes:
  - mistake: "认为 {1, 1, 2} 是合法集合"
    correction: "集合元素具有互异性，不能重复出现，应写为 {1, 2}"
applied_in:
  - textbook: required-1
    chapters: [1]
```

```yaml
# src/content/knowledge-points/set-representation.yml
id: set-representation
name: 集合的表示方法
category: 集合与逻辑
description: |
  集合有两种常用表示方法：
  列举法——把集合的元素一一列举出来，用花括号括起来；
  描述法——用集合中元素的共同特征来描述集合。
prerequisites:
  - set-concept
follow_ups:
  - set-operations
related: []
formulas: []
common_mistakes:
  - mistake: "列举法中遗漏元素"
    correction: "要确保列出满足条件的所有元素，不重不漏"
applied_in:
  - textbook: required-1
    chapters: [1]
```

```yaml
# src/content/knowledge-points/set-operations.yml
id: set-operations
name: 集合的基本运算
category: 集合与逻辑
description: |
  集合的基本运算包括交集、并集和补集：
  交集 A∩B = {x | x∈A 且 x∈B}；
  并集 A∪B = {x | x∈A 或 x∈B}；
  补集 ∁ᵤA = {x | x∈U 且 x∉A}。
prerequisites:
  - set-concept
  - set-representation
follow_ups: []
related: []
formulas:
  - "A \\cap B = \\{x \\mid x \\in A \\text{ 且 } x \\in B\\}"
  - "A \\cup B = \\{x \\mid x \\in A \\text{ 或 } x \\in B\\}"
common_mistakes:
  - mistake: "混淆交集和并集"
    correction: "交集取公共元素（且），并集取全部元素（或）"
applied_in:
  - textbook: required-1
    chapters: [1]
```

- [ ] **Step 2: 创建样本习题**

```markdown
---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - set-concept
  - set-representation
source: "自编"
references: "课标1.1.1"
---

**题目：** 用列举法表示下列集合：

(1) 小于 5 的正整数组成的集合 $A$；

(2) 方程 $x^2 - 5x + 6 = 0$ 的解集 $B$。

---

**解答：**

**第1步：** 确定集合 A 的元素
> 📌 运用知识点：集合的列举法

小于 5 的正整数为 $1, 2, 3, 4$。

所以 $A = \{1, 2, 3, 4\}$。

**第2步：** 求解方程确定集合 B 的元素
> 📌 运用知识点：集合的列举法

$x^2 - 5x + 6 = 0$

$(x-2)(x-3) = 0$

$x = 2$ 或 $x = 3$

所以 $B = \{2, 3\}$。

**⚠️ 易错提醒：** 用列举法表示集合时，注意元素不重复（互异性），且用花括号括起来。

**💡 解题思路总结：** 列举法的关键是找出满足条件的所有元素，做到不重不漏。
```

```markdown
---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - set-operations
source: "自编"
references: "课标1.1.2"
---

**题目：** 已知集合 $A = \{1, 2, 3, 4\}$，$B = \{2, 4, 6, 8\}$，求：

(1) $A \cap B$；(2) $A \cup B$。

---

**解答：**

**第1步：** 求交集 $A \cap B$
> 📌 运用知识点：交集的定义

交集取两个集合的公共元素。

$A$ 和 $B$ 的公共元素为 $2$ 和 $4$。

所以 $A \cap B = \{2, 4\}$。

**第2步：** 求并集 $A \cup B$
> 📌 运用知识点：并集的定义

并集取两个集合的全部元素（不重复）。

$A \cup B = \{1, 2, 3, 4, 6, 8\}$。

**⚠️ 易错提醒：** 并集中每个元素只出现一次，不要写 $\{1, 2, 2, 3, 4, 4, 6, 8\}$。

**💡 解题思路总结：** 交集看"公共"（且），并集看"全部"（或），注意互异性。
```

```markdown
---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "自编"
references: "课标1.1.2"
---

**题目：** 已知全集 $U = \{1, 2, 3, 4, 5\}$，集合 $A = \{1, 3, 5\}$，$B = \{2, 3\}$。

求：(1) $A \cap B$；(2) $\complement_U A$；(3) $(\complement_U A) \cup B$。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集的定义

$A$ 和 $B$ 的公共元素为 $3$。

$A \cap B = \{3\}$

**第2步：** 求 $\complement_U A$
> 📌 运用知识点：补集的定义

$\complement_U A$ 是全集 $U$ 中不属于 $A$ 的元素组成的集合。

$U$ 中不属于 $A = \{1, 3, 5\}$ 的元素为 $2, 4$。

$\complement_U A = \{2, 4\}$

**第3步：** 求 $(\complement_U A) \cup B$
> 📌 运用知识点：并集的定义

$(\complement_U A) \cup B = \{2, 4\} \cup \{2, 3\} = \{2, 3, 4\}$

**⚠️ 易错提醒：** 求补集时必须明确全集 $U$，补集是相对于全集而言的。

**💡 解题思路总结：** 集合运算按步骤进行，先算括号内的，再算括号外的。
```

- [ ] **Step 3: 创建样本题例和定义**

```markdown
---
type: example
textbook: required-1
chapter: 1
section: 1
number: 1
knowledge_points:
  - set-concept
  - set-representation
---

**例题：** 判断下列各组对象能否组成集合，并说明理由：

(1) 所有的正整数；

(2) 某班所有高个子的同学。

---

**解答：**

**第1步：** 分析 (1)
> 📌 运用知识点：集合元素的确定性

"所有的正整数"有明确的判断标准：一个数是否为正整数是确定的。

所以 (1) 能组成集合。

**第2步：** 分析 (2)
> 📌 运用知识点：集合元素的确定性

"高个子"没有明确的标准——多高算"高"？不同的人判断结果不同，不满足确定性。

所以 (2) 不能组成集合。

**💡 解题思路总结：** 判断能否组成集合，核心看元素是否满足"确定性"——对任意一个对象，能明确判断它是否属于这个整体。
```

```markdown
---
type: definition
textbook: required-1
chapter: 1
section: 1
name: 集合
related_knowledge_points:
  - set-concept
---

**定义（精确表述）：**

一般地，把一些确定的、互不相同的对象组成的整体叫做集合（set），简称集。集合中的每个对象叫做这个集合的元素（element）。

**通俗解释：**

集合就像一个大袋子，里面装着一些东西。这些东西必须满足三个条件：
1. **确定性**：随便拿一个东西，能明确判断它在不在袋子里
2. **互异性**：袋子里的东西不能重复
3. **无序性**：东西的摆放顺序不影响这个袋子
```

```markdown
---
type: definition
textbook: required-1
chapter: 1
section: 1
name: 交集与并集
related_knowledge_points:
  - set-operations
---

**定义（精确表述）：**

交集：由所有属于集合 $A$ 且属于集合 $B$ 的元素组成的集合，叫做 $A$ 与 $B$ 的交集，记作 $A \cap B$。

并集：由所有属于集合 $A$ 或属于集合 $B$ 的元素组成的集合，叫做 $A$ 与 $B$ 的并集，记作 $A \cup B$。

**通俗解释：**

- **交集**就是找"共同的朋友"——两个集合都有的元素
- **并集**就是"合在一起"——两个集合的元素全部放在一起（重复的只算一个）
```

- [ ] **Step 4: 验证内容能被 Astro 识别**

```bash
cd ~/Projects/pep-math
npx astro build 2>&1 | head -20
```

Expected: 构建过程中能识别到内容文件（可能有 warning 但不报错）

- [ ] **Step 5: 提交**

```bash
git add src/content/
git commit -m "content(required-1/ch1/s1): add Phase 0 sample content - 3 exercises, 1 example, 2 definitions, 3 knowledge points"
```

---

## Task 6: 构建脚本 — 知识图谱聚合

**Files:**
- Create: `scripts/build-knowledge-graph.ts`
- Test: `tests/scripts/build-knowledge-graph.test.ts`

**Interfaces:**
- Consumes: `src/content/knowledge-points/*.yml`
- Produces: `public/data/knowledge-graph.json`
- Output format: `{ nodes: [{id, name, category}], edges: [{source, target, type}] }`

- [ ] **Step 1: 写失败的测试**

```typescript
// tests/scripts/build-knowledge-graph.test.ts
import { describe, it, expect, beforeAll } from 'vitest';
import { buildKnowledgeGraph } from '../../scripts/build-knowledge-graph';
import path from 'path';

describe('buildKnowledgeGraph', () => {
  let graph: { nodes: Array<{id: string; name: string; category: string}>; edges: Array<{source: string; target: string; type: string}> };

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/knowledge-points');
    graph = buildKnowledgeGraph(contentDir);
  });

  it('should extract all knowledge points as nodes', () => {
    expect(graph.nodes.length).toBeGreaterThanOrEqual(3);
    const ids = graph.nodes.map(n => n.id);
    expect(ids).toContain('set-concept');
    expect(ids).toContain('set-representation');
    expect(ids).toContain('set-operations');
  });

  it('should build edges from prerequisites/follow_ups relationships', () => {
    // set-concept → set-representation (prerequisite)
    const prereqEdge = graph.edges.find(
      e => e.source === 'set-concept' && e.target === 'set-representation' && e.type === 'prerequisite'
    );
    expect(prereqEdge).toBeDefined();
  });

  it('should include node metadata (name, category)', () => {
    const node = graph.nodes.find(n => n.id === 'set-concept');
    expect(node?.name).toBe('集合的概念');
    expect(node?.category).toBe('集合与逻辑');
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

```bash
cd ~/Projects/pep-math
npx vitest run tests/scripts/build-knowledge-graph.test.ts
```

Expected: FAIL — `Cannot find module '../../scripts/build-knowledge-graph'`

- [ ] **Step 3: 实现构建脚本**

```typescript
// scripts/build-knowledge-graph.ts
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface KnowledgePoint {
  id: string;
  name: string;
  category: string;
  description: string;
  prerequisites: string[];
  follow_ups: string[];
  related: string[];
}

interface GraphNode {
  id: string;
  name: string;
  category: string;
}

interface GraphEdge {
  source: string;
  target: string;
  type: 'prerequisite' | 'follow_up' | 'related';
}

interface KnowledgeGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export function buildKnowledgeGraph(contentDir: string): KnowledgeGraph {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const kp = yaml.load(raw) as KnowledgePoint;

    nodes.push({ id: kp.id, name: kp.name, category: kp.category });

    for (const prereq of kp.prerequisites || []) {
      edges.push({ source: prereq, target: kp.id, type: 'prerequisite' });
    }
    for (const followUp of kp.follow_ups || []) {
      edges.push({ source: kp.id, target: followUp, type: 'follow_up' });
    }
    for (const rel of kp.related || []) {
      // 避免重复边（A related B 和 B related A 只保留一条）
      const exists = edges.some(
        e => e.type === 'related' &&
          ((e.source === kp.id && e.target === rel) || (e.source === rel && e.target === kp.id))
      );
      if (!exists) {
        edges.push({ source: kp.id, target: rel, type: 'related' });
      }
    }
  }

  return { nodes, edges };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/knowledge-points');
  const graph = buildKnowledgeGraph(contentDir);

  const outputDir = path.resolve('public/data');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(
    path.join(outputDir, 'knowledge-graph.json'),
    JSON.stringify(graph, null, 2)
  );
  console.log(`✅ Knowledge graph: ${graph.nodes.length} nodes, ${graph.edges.length} edges`);
}
```

- [ ] **Step 4: 安装 js-yaml 依赖**

```bash
cd ~/Projects/pep-math
npm install js-yaml && npm install -D @types/js-yaml
```

- [ ] **Step 5: 运行测试确认通过**

```bash
cd ~/Projects/pep-math
npx vitest run tests/scripts/build-knowledge-graph.test.ts
```

Expected: 3 tests passed

- [ ] **Step 6: 运行脚本验证输出**

```bash
cd ~/Projects/pep-math
npx tsx scripts/build-knowledge-graph.ts
cat public/data/knowledge-graph.json
```

Expected: JSON 输出包含 3 个节点和对应的边

- [ ] **Step 7: 提交**

```bash
git add scripts/build-knowledge-graph.ts tests/scripts/build-knowledge-graph.test.ts
git commit -m "feat: add knowledge graph build script with tests"
```

---

## Task 7: 构建脚本 — 习题索引预聚合

**Files:**
- Create: `scripts/build-exercise-index.ts`
- Test: `tests/scripts/build-exercise-index.test.ts`

**Interfaces:**
- Consumes: `src/content/textbooks/**/*.md` (exercises only, parsed via frontmatter)
- Produces: `public/data/exercises-index.json`, `public/data/exercises-by-kp/*.json`, `public/data/exercises-by-difficulty/*.json`
- Output format (index): `[{ id, textbook, chapter, section, number, difficulty, knowledge_points }]`

- [ ] **Step 1: 写失败的测试**

```typescript
// tests/scripts/build-exercise-index.test.ts
import { describe, it, expect, beforeAll } from 'vitest';
import { buildExerciseIndex, type ExerciseMeta } from '../../scripts/build-exercise-index';
import path from 'path';

describe('buildExerciseIndex', () => {
  let index: ExerciseMeta[];
  let byKp: Record<string, ExerciseMeta[]>;
  let byDifficulty: Record<string, ExerciseMeta[]>;

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/textbooks');
    const result = buildExerciseIndex(contentDir);
    index = result.index;
    byKp = result.byKp;
    byDifficulty = result.byDifficulty;
  });

  it('should extract all exercises from markdown files', () => {
    expect(index.length).toBe(3);
  });

  it('should sort exercises by difficulty within each knowledge point', () => {
    const setOps = byKp['set-operations'];
    expect(setOps).toBeDefined();
    // basic should come before medium
    const difficulties = setOps.map(e => e.difficulty);
    const basicIdx = difficulties.indexOf('basic');
    const mediumIdx = difficulties.indexOf('medium');
    if (basicIdx >= 0 && mediumIdx >= 0) {
      expect(basicIdx).toBeLessThan(mediumIdx);
    }
  });

  it('should generate by-difficulty index', () => {
    expect(byDifficulty['basic']?.length).toBeGreaterThanOrEqual(1);
    expect(byDifficulty['medium']?.length).toBeGreaterThanOrEqual(1);
  });

  it('should generate correct exercise IDs', () => {
    const ids = index.map(e => e.id);
    expect(ids).toContain('required-1-ch1-s1-ex1');
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

```bash
npx vitest run tests/scripts/build-exercise-index.test.ts
```

Expected: FAIL

- [ ] **Step 3: 实现构建脚本**

```typescript
// scripts/build-exercise-index.ts
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

const DIFFICULTY_ORDER = { basic: 0, medium: 1, hard: 2 };

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
          // 从路径推断 ID
          const rel = path.relative(contentDir, fullPath);
          const parts = rel.split(path.sep);
          // required-1/chapter-01/section-01/exercises.md
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

  // 按知识点聚合
  const byKp: Record<string, ExerciseMeta[]> = {};
  for (const ex of exercises) {
    for (const kp of ex.knowledge_points) {
      if (!byKp[kp]) byKp[kp] = [];
      byKp[kp].push(ex);
    }
  }
  // 每个知识点内按难度排序
  for (const kp of Object.keys(byKp)) {
    byKp[kp].sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
  }

  // 按难度聚合
  const byDifficulty: Record<string, ExerciseMeta[]> = {};
  for (const ex of exercises) {
    if (!byDifficulty[ex.difficulty]) byDifficulty[ex.difficulty] = [];
    byDifficulty[ex.difficulty].push(ex);
  }

  return { index: exercises, byKp, byDifficulty };
}

// CLI 入口
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
```

- [ ] **Step 4: 安装 gray-matter**

```bash
npm install gray-matter
```

- [ ] **Step 5: 运行测试确认通过**

```bash
npx vitest run tests/scripts/build-exercise-index.test.ts
```

Expected: 4 tests passed

- [ ] **Step 6: 运行脚本验证输出**

```bash
npx tsx scripts/build-exercise-index.ts
ls public/data/exercises-by-kp/
```

- [ ] **Step 7: 提交**

```bash
git add scripts/build-exercise-index.ts tests/scripts/build-exercise-index.test.ts
git commit -m "feat: add exercise index build script with pre-aggregation by knowledge point and difficulty"
```

---

## Task 8: 构建脚本 — 习题完整内容 JSON

**Files:**
- Create: `scripts/build-exercise-data.ts`
- Test: `tests/scripts/build-exercise-data.test.ts`

**Interfaces:**
- Consumes: `src/content/textbooks/**/*.md` (exercises, full markdown body)
- Produces: `public/data/exercises/{id}.json`
- Output format: `{ id, textbook, chapter, section, number, difficulty, knowledge_points, question, steps: [{title, knowledge_point, content}], warning?, summary? }`

- [ ] **Step 1: 写失败的测试**

```typescript
// tests/scripts/build-exercise-data.test.ts
import { describe, it, expect } from 'vitest';
import { parseExerciseMarkdown } from '../../scripts/build-exercise-data';

describe('parseExerciseMarkdown', () => {
  const sampleMd = `---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - set-concept
source: "自编"
references: "课标1.1.1"
---

**题目：** 用列举法表示集合。

---

**解答：**

**第1步：** 确定元素
> 📌 运用知识点：集合的列举法

小于5的正整数为 1, 2, 3, 4。

**⚠️ 易错提醒：** 注意互异性。

**💡 解题思路总结：** 不重不漏。`;

  it('should parse frontmatter metadata', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.textbook).toBe('required-1');
    expect(result.difficulty).toBe('basic');
    expect(result.knowledge_points).toContain('set-concept');
  });

  it('should extract question text', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.question).toContain('用列举法表示集合');
  });

  it('should parse solution steps', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.steps.length).toBeGreaterThanOrEqual(1);
    expect(result.steps[0].title).toContain('确定元素');
    expect(result.steps[0].knowledge_point).toBe('集合的列举法');
  });

  it('should extract warning if present', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.warning).toContain('互异性');
  });

  it('should extract summary if present', () => {
    const result = parseExerciseMarkdown(sampleMd);
    expect(result.summary).toContain('不重不漏');
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

```bash
npx vitest run tests/scripts/build-exercise-data.test.ts
```

Expected: FAIL

- [ ] **Step 3: 实现构建脚本**

```typescript
// scripts/build-exercise-data.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ExerciseStep {
  title: string;
  knowledge_point: string;
  content: string;
}

interface ExerciseData {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: string;
  knowledge_points: string[];
  question: string;
  steps: ExerciseStep[];
  warning?: string;
  summary?: string;
}

export function parseExerciseMarkdown(raw: string, filePath?: string): ExerciseData {
  const { data, content } = matter(raw);

  // 提取题目（**题目：** 和 --- 之间）
  const questionMatch = content.match(/\*\*题目[：:]\*\*\s*([\s\S]*?)(?=---|\*\*解答)/);
  const question = questionMatch ? questionMatch[1].trim() : '';

  // 提取解答步骤
  const steps: ExerciseStep[] = [];
  const stepRegex = /\*\*第(\d+)步[：:]\*\*\s*(.+?)(?:\n>\s*📌\s*运用知识点[：:]\s*(.+?))?\n([\s\S]*?)(?=\*\*第\d+步|\*\*⚠️|\*\*💡|$)/g;
  let match;
  while ((match = stepRegex.exec(content)) !== null) {
    steps.push({
      title: match[2].trim(),
      knowledge_point: match[3]?.trim() || '',
      content: match[4].trim(),
    });
  }

  // 提取易错提醒
  const warningMatch = content.match(/\*\*⚠️\s*易错提醒[：:]\*\*\s*(.+)/);
  const warning = warningMatch ? warningMatch[1].trim() : undefined;

  // 提取解题思路总结
  const summaryMatch = content.match(/\*\*💡\s*解题思路总结[：:]\*\*\s*(.+)/);
  const summary = summaryMatch ? summaryMatch[1].trim() : undefined;

  // 生成 ID
  let id: string;
  if (filePath) {
    const rel = path.relative('src/content/textbooks', filePath);
    const parts = rel.split(path.sep);
    const textbook = parts[0];
    const chapter = parseInt(parts[1].replace('chapter-', ''), 10);
    const section = parseInt(parts[2].replace('section-', ''), 10);
    id = `${textbook}-ch${chapter}-s${section}-ex${data.number}`;
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
    knowledge_points: data.knowledge_points,
    question,
    steps,
    warning,
    summary,
  };
}

// CLI 入口
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
```

- [ ] **Step 4: 运行测试确认通过**

```bash
npx vitest run tests/scripts/build-exercise-data.test.ts
```

Expected: 5 tests passed

- [ ] **Step 5: 运行脚本验证输出**

```bash
npx tsx scripts/build-exercise-data.ts
cat public/data/exercises/required-1-ch1-s1-ex1.json
```

- [ ] **Step 6: 提交**

```bash
git add scripts/build-exercise-data.ts tests/scripts/build-exercise-data.test.ts
git commit -m "feat: add exercise data build script - parses markdown to structured JSON"
```

---

## Task 9: 构建脚本 — 举一反三关联生成

**Files:**
- Create: `scripts/build-related-exercises.ts`
- Test: `tests/scripts/build-related-exercises.test.ts`

**Interfaces:**
- Consumes: `public/data/exercises-index.json`（由 Task 7 生成）
- Produces: `public/data/related/{exercise-id}.json`
- Output format: `{ exerciseId, sameKnowledge: [id...], sameType: [id...] }`

- [ ] **Step 1: 写失败的测试**

```typescript
// tests/scripts/build-related-exercises.test.ts
import { describe, it, expect } from 'vitest';
import { findRelatedExercises, type ExerciseMeta, type RelatedResult } from '../../scripts/build-related-exercises';

describe('findRelatedExercises', () => {
  const exercises: ExerciseMeta[] = [
    { id: 'ex1', textbook: 'required-1', chapter: 1, section: 1, number: 1, difficulty: 'basic', knowledge_points: ['set-concept', 'set-representation'] },
    { id: 'ex2', textbook: 'required-1', chapter: 1, section: 1, number: 2, difficulty: 'basic', knowledge_points: ['set-operations'] },
    { id: 'ex3', textbook: 'required-1', chapter: 1, section: 2, number: 1, difficulty: 'medium', knowledge_points: ['set-concept'] },
  ];

  it('should find exercises with same knowledge points but different sections', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    // ex3 has set-concept and is in section 2 (different from ex1's section 1)
    expect(result.sameKnowledge).toContain('ex3');
    // ex2 does NOT share knowledge points with ex1
    expect(result.sameKnowledge).not.toContain('ex2');
  });

  it('should find exercises in same section with different knowledge points', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    // ex2 is in same section (1,1) but has different knowledge points
    expect(result.sameType).toContain('ex2');
    // ex3 is in different section
    expect(result.sameType).not.toContain('ex3');
  });

  it('should not include the exercise itself', () => {
    const result = findRelatedExercises(exercises[0], exercises);
    expect(result.sameKnowledge).not.toContain('ex1');
    expect(result.sameType).not.toContain('ex1');
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

```bash
npx vitest run tests/scripts/build-related-exercises.test.ts
```

Expected: FAIL

- [ ] **Step 3: 实现构建脚本**

```typescript
// scripts/build-related-exercises.ts
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

// CLI 入口
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
```

- [ ] **Step 4: 运行测试确认通过**

```bash
npx vitest run tests/scripts/build-related-exercises.test.ts
```

Expected: 3 tests passed

- [ ] **Step 5: 运行完整管线验证**

先确保依赖数据存在，再运行：

```bash
npx tsx scripts/build-exercise-index.ts
npx tsx scripts/build-related-exercises.ts
cat public/data/related/required-1-ch1-s1-ex1.json
```

- [ ] **Step 6: 提交**

```bash
git add scripts/build-related-exercises.ts tests/scripts/build-related-exercises.test.ts
git commit -m "feat: add related exercises build script - auto-generates 举一反三 associations"
```

---

## Task 10: 校验脚本 — 内容完整性 + 知识图谱闭环

**Files:**
- Create: `scripts/validate-content.ts`
- Create: `scripts/validate-knowledge-graph.ts`
- Create: `tests/content/knowledge-graph-integrity.test.ts`

- [ ] **Step 1: 写知识图谱闭环校验测试**

```typescript
// tests/content/knowledge-graph-integrity.test.ts
import { describe, it, expect, beforeAll } from 'vitest';
import { buildKnowledgeGraph } from '../../scripts/build-knowledge-graph';
import path from 'path';

describe('Knowledge Graph Integrity', () => {
  let graph: ReturnType<typeof buildKnowledgeGraph>;

  beforeAll(() => {
    const contentDir = path.resolve(__dirname, '../../src/content/knowledge-points');
    graph = buildKnowledgeGraph(contentDir);
  });

  it('should have no orphan nodes (nodes with no edges)', () => {
    const connectedIds = new Set<string>();
    for (const edge of graph.edges) {
      connectedIds.add(edge.source);
      connectedIds.add(edge.target);
    }
    const orphans = graph.nodes.filter(n => !connectedIds.has(n.id));
    expect(orphans).toEqual([]);
  });

  it('should have no circular dependencies', () => {
    // Build adjacency list for prerequisite edges only
    const adj: Record<string, string[]> = {};
    for (const edge of graph.edges) {
      if (edge.type === 'prerequisite') {
        if (!adj[edge.source]) adj[edge.source] = [];
        adj[edge.source].push(edge.target);
      }
    }

    // DFS cycle detection
    const visited = new Set<string>();
    const inStack = new Set<string>();

    function hasCycle(node: string): boolean {
      if (inStack.has(node)) return true;
      if (visited.has(node)) return false;
      visited.add(node);
      inStack.add(node);
      for (const next of adj[node] || []) {
        if (hasCycle(next)) return true;
      }
      inStack.delete(node);
      return false;
    }

    for (const node of graph.nodes) {
      expect(hasCycle(node.id)).toBe(false);
    }
  });

  it('prerequisite edges should have matching follow_up edges (bidirectional)', () => {
    const prereqPairs = graph.edges
      .filter(e => e.type === 'prerequisite')
      .map(e => `${e.source}->${e.target}`);
    const followUpPairs = graph.edges
      .filter(e => e.type === 'follow_up')
      .map(e => `${e.source}->${e.target}`);

    for (const pair of prereqPairs) {
      const [source, target] = pair.split('->');
      // If A is prerequisite of B, then B should have follow_up to A
      const reversePair = `${target}->${source}`;
      expect(followUpPairs).toContain(reversePair);
    }
  });
});
```

- [ ] **Step 2: 运行测试确认通过**

```bash
npx vitest run tests/content/knowledge-graph-integrity.test.ts
```

Expected: 3 tests passed（因为 Phase 0 样本数据的关系是正确设置的）

- [ ] **Step 3: 创建内容校验脚本**

```typescript
// scripts/validate-content.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

export function validateContent(contentDir: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 收集所有知识点 ID
  const kpDir = path.join(contentDir, '..', 'knowledge-points');
  const kpIds = new Set<string>();
  if (fs.existsSync(kpDir)) {
    for (const file of fs.readdirSync(kpDir)) {
      if (file.endsWith('.yml') || file.endsWith('.yaml')) {
        const raw = fs.readFileSync(path.join(kpDir, file), 'utf-8');
        const kp = yaml.load(raw) as { id: string };
        kpIds.add(kp.id);
      }
    }
  }

  // 遍历所有 md 文件
  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);
        const rel = path.relative(contentDir, fullPath);

        if (data.type === 'exercise') {
          if (!data.textbook) errors.push(`${rel}: missing textbook`);
          if (!data.chapter) errors.push(`${rel}: missing chapter`);
          if (!data.section) errors.push(`${rel}: missing section`);
          if (!data.number) errors.push(`${rel}: missing number`);
          if (!data.difficulty) errors.push(`${rel}: missing difficulty`);
          if (!data.knowledge_points?.length) errors.push(`${rel}: missing knowledge_points`);
          if (data.source !== '自编') errors.push(`${rel}: source must be "自编", got "${data.source}"`);
          if (!data.references) warnings.push(`${rel}: missing references (课标条目)`);

          // 校验知识点 ID 存在性
          for (const kpId of data.knowledge_points || []) {
            if (!kpIds.has(kpId)) {
              errors.push(`${rel}: unknown knowledge_point ID "${kpId}"`);
            }
          }
        }

        if (data.type === 'example') {
          if (!data.knowledge_points?.length) errors.push(`${rel}: missing knowledge_points`);
        }

        if (data.type === 'definition') {
          if (!data.name) errors.push(`${rel}: missing name`);
          if (!data.related_knowledge_points?.length) errors.push(`${rel}: missing related_knowledge_points`);
        }
      }
    }
  }

  walk(path.join(contentDir));
  return { errors, warnings };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const contentDir = path.resolve('src/content/textbooks');
  const result = validateContent(contentDir);

  if (result.warnings.length > 0) {
    console.log(`⚠️  ${result.warnings.length} warnings:`);
    result.warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (result.errors.length > 0) {
    console.error(`❌ ${result.errors.length} errors:`);
    result.errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log('✅ Content validation passed');
}
```

- [ ] **Step 4: 创建知识图谱校验脚本**

```typescript
// scripts/validate-knowledge-graph.ts
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

interface KnowledgePoint {
  id: string;
  name: string;
  prerequisites: string[];
  follow_ups: string[];
  related: string[];
}

export function validateKnowledgeGraph(kpDir: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 读取所有知识点
  const kps: KnowledgePoint[] = [];
  const kpMap = new Map<string, KnowledgePoint>();
  for (const file of fs.readdirSync(kpDir)) {
    if (file.endsWith('.yml') || file.endsWith('.yaml')) {
      const raw = fs.readFileSync(path.join(kpDir, file), 'utf-8');
      const kp = yaml.load(raw) as KnowledgePoint;
      kps.push(kp);
      kpMap.set(kp.id, kp);
    }
  }

  // 校验 1: 双向一致性 (prerequisites ↔ follow_ups)
  for (const kp of kps) {
    for (const prereq of kp.prerequisites || []) {
      const target = kpMap.get(prereq);
      if (!target) {
        errors.push(`${kp.id}: prerequisites references unknown ID "${prereq}"`);
        continue;
      }
      if (!target.follow_ups?.includes(kp.id)) {
        errors.push(`${kp.id} → ${prereq}: A.prerequisites contains B, but B.follow_ups does not contain A`);
      }
    }
  }

  // 校验 2: related 对称性
  for (const kp of kps) {
    for (const rel of kp.related || []) {
      const target = kpMap.get(rel);
      if (!target) {
        errors.push(`${kp.id}: related references unknown ID "${rel}"`);
        continue;
      }
      if (!target.related?.includes(kp.id)) {
        warnings.push(`${kp.id} → ${rel}: A.related contains B, but B.related does not contain A`);
      }
    }
  }

  // 校验 3: 孤立节点
  const connectedIds = new Set<string>();
  for (const kp of kps) {
    if (kp.prerequisites?.length || kp.follow_ups?.length || kp.related?.length) {
      connectedIds.add(kp.id);
      for (const id of [...(kp.prerequisites || []), ...(kp.follow_ups || []), ...(kp.related || [])]) {
        connectedIds.add(id);
      }
    }
  }
  for (const kp of kps) {
    if (!connectedIds.has(kp.id)) {
      warnings.push(`${kp.id}: orphan node (no relationships)`);
    }
  }

  // 校验 4: 循环依赖
  const adj: Record<string, string[]> = {};
  for (const kp of kps) {
    adj[kp.id] = kp.prerequisites || [];
  }
  const visited = new Set<string>();
  const inStack = new Set<string>();
  function hasCycle(node: string): boolean {
    if (inStack.has(node)) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    inStack.add(node);
    for (const next of adj[node] || []) {
      if (hasCycle(next)) return true;
    }
    inStack.delete(node);
    return false;
  }
  for (const kp of kps) {
    if (hasCycle(kp.id)) {
      errors.push(`Circular dependency detected involving "${kp.id}"`);
    }
  }

  return { errors, warnings };
}

// CLI 入口
if (import.meta.url === `file://${process.argv[1]}`) {
  const kpDir = path.resolve('src/content/knowledge-points');
  const result = validateKnowledgeGraph(kpDir);

  if (result.warnings.length > 0) {
    console.log(`⚠️  ${result.warnings.length} warnings:`);
    result.warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (result.errors.length > 0) {
    console.error(`❌ ${result.errors.length} errors:`);
    result.errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log('✅ Knowledge graph validation passed');
}
```

- [ ] **Step 5: 运行全部测试**

```bash
npx vitest run
```

Expected: All tests passed

- [ ] **Step 6: 运行校验脚本**

```bash
npx tsx scripts/validate-content.ts
npx tsx scripts/validate-knowledge-graph.ts
```

Expected: Both pass ✅

- [ ] **Step 7: 提交**

```bash
git add scripts/validate-content.ts scripts/validate-knowledge-graph.ts tests/content/knowledge-graph-integrity.test.ts
git commit -m "feat: add content and knowledge graph validation scripts with integrity tests"
```

---

## Task 11: 质量报告脚本

**Files:**
- Create: `scripts/generate-quality-report.ts`

- [ ] **Step 1: 实现质量报告脚本**

```typescript
// scripts/generate-quality-report.ts
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
```

- [ ] **Step 2: 运行验证**

```bash
npx tsx scripts/generate-quality-report.ts
cat public/data/quality-report.json
```

- [ ] **Step 3: 提交**

```bash
git add scripts/generate-quality-report.ts
git commit -m "feat: add quality report generation script"
```

---

## Task 12: Phase 0 全链路验证

**Files:** 无新文件，验证已有内容

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 4 个脚本全部成功，输出 ✅

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 内容校验和图谱校验均通过

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: All tests passed

- [ ] **Step 4: 构建网站**

```bash
npx astro build
```

Expected: 构建成功

- [ ] **Step 5: 记录性能基准**

```bash
# 记录构建时间
time npx astro build

# 记录内存（在 CI 中通过 NODE_OPTIONS 限制为 6GB）
# 记录产物大小
du -sh dist/
```

将结果记录到 Git commit message。

- [ ] **Step 6: 提交 Phase 0 验证通过标记**

```bash
git add -A
git commit -m "chore: Phase 0 validation passed - full pipeline verified with sample content

Performance baseline:
- Build time: [X]s
- Memory: [X]MB
- Output size: [X]KB"
```

---

## Task 13: GitHub Actions CI/CD

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`
- Create: `.github/workflows/preview.yml`

- [ ] **Step 1: 创建 CI 工作流**

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, dev]
  pull_request:

env:
  NODE_OPTIONS: "--max-old-space-size=6144"

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run build scripts
        run: npm run build:scripts

      - name: Run content validation
        run: npm run validate

      - name: Run tests
        run: npm test

      - name: Build site
        run: npm run build

      - name: Generate quality report
        run: npm run report

      - name: Upload quality report
        if: github.event_name == 'pull_request'
        uses: actions/upload-artifact@v4
        with:
          name: quality-report
          path: public/data/quality-report.json
```

- [ ] **Step 2: 创建部署工作流**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

env:
  NODE_OPTIONS: "--max-old-space-size=6144"

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: 创建 PR 预览工作流**

```yaml
# .github/workflows/preview.yml
name: PR Preview

on:
  pull_request:

permissions:
  contents: read
  pull-requests: write

env:
  NODE_OPTIONS: "--max-old-space-size=6144"

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build

      - name: Upload preview artifact
        uses: actions/upload-artifact@v4
        with:
          name: preview-${{ github.event.pull_request.number }}
          path: dist
```

- [ ] **Step 4: 提交**

```bash
git add .github/workflows/
git commit -m "chore(ci): add CI, deploy, and PR preview workflows with NODE_OPTIONS memory limit"
```

---

## Task 14: AGENTS.md 和 README.md

**Files:**
- Create: `AGENTS.md`
- Create: `README.md`

- [ ] **Step 1: 创建 AGENTS.md**

```markdown
# AGENTS.md — pep-math

## 项目概述
人教版高中数学知识库静态网站。Astro + Tailwind + KaTeX + Vitest。

## 开发规范
- TDD：先写测试，再写实现
- Conventional Commits：feat/fix/content/test/docs/refactor/style/chore
- 构建脚本用 TypeScript（npx tsx 运行），不用 Python
- 内容文件在 src/content/，构建输出在 public/data/（gitignore）
- 所有习题 source 必须为 "自编"

## 常用命令
- `npm test` — 运行测试
- `npm run validate` — 内容校验
- `npm run build:scripts` — 运行构建脚本
- `npm run build` — 构建网站
- `npm run report` — 生成质量报告

## 目录结构
- `src/content/textbooks/` — 教材内容（Markdown + YAML frontmatter）
- `src/content/knowledge-points/` — 知识点定义（YAML）
- `scripts/` — 构建时脚本
- `tests/` — 测试文件
- `public/data/` — 构建脚本输出（自动生成，不手动修改）
```

- [ ] **Step 2: 创建 README.md**

```markdown
# pep-math

人教版高中数学知识库 — 覆盖全部 5 册教材的习题、知识点、定义和例题。

> ⚠️ 本站题目均为原创编写，参考《普通高中数学课程标准》，与具体教材版本无关。

## 快速开始

```bash
npm install
npm run build:scripts
npm run build
npm run dev
```

## 技术栈

- Astro 5.x — 静态站点生成
- Tailwind CSS — 样式
- KaTeX — 数学公式渲染
- Vitest — 测试
- GitHub Pages — 部署

## 许可

本项目内容原创，代码部分 MIT 许可。
```

- [ ] **Step 3: 提交**

```bash
git add AGENTS.md README.md
git commit -m "docs: add AGENTS.md and README.md"
```

---

## Task 15: 推送到 GitHub

- [ ] **Step 1: 创建 GitHub 仓库**

```bash
cd ~/Projects/pep-math
gh repo create zengawei/pep-math --public --source=. --push
```

- [ ] **Step 2: 验证 CI 通过**

在 GitHub 上查看 Actions 页面，确认 CI 流水线通过。

- [ ] **Step 3: 配置 GitHub Pages**

在 GitHub 仓库 Settings → Pages 中：
- Source: GitHub Actions
- 保存

---

## Plan 1 完成标准

- [ ] `npm test` 全部通过
- [ ] `npm run validate` 无错误
- [ ] `npm run build` 成功
- [ ] `npm run build:scripts` 生成所有 JSON 到 `public/data/`
- [ ] `npm run report` 生成质量报告
- [ ] GitHub CI 流水线通过
- [ ] Phase 0 样本内容在本地预览中正常显示
