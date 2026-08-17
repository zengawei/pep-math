# pep-math Plan 2: 核心功能（M3 + M4 + M5 + M6）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成必修第一册全部 5 章内容录入，构建所有核心页面（教材浏览、节详情、知识点列表/详情），实现知识图谱可视化（单册筛选），集成 Pagefind 全文搜索。

**Architecture:** 在 Plan 1 基础上扩展。内容层新增必修一全部章节的 Markdown/YAML 内容。页面层新增 Astro 动态路由页面 + React 交互组件。知识图谱使用 Cytoscape.js 客户端渲染，布局坐标由构建脚本预计算。搜索使用 Pagefind 在构建时生成索引。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v3, React 19, Cytoscape.js, KaTeX, Pagefind, Vitest

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

**Plan 1 完成状态:** 项目骨架 ✅ 内容模型 ✅ 构建脚本 ✅ 校验脚本 ✅ Phase 0 样本内容 ✅ CI/CD ✅ 30 tests passing ✅

---

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容 source 字段为 `"自编"`，references 标注课标条目
- KaTeX 公式客户端渲染，不在构建时处理
- 节详情页通过 fetch `public/data/` 下的 JSON 加载习题数据，不在前端解析 Markdown
- 知识图谱 v1 仅支持单册筛选，不做全 5 册渲染
- Pagefind 索引在 `astro build` 后自动生成
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）
- 新增依赖需 `npm install` 并更新 `package.json`

---

## File Structure (新增文件)

```
pep-math/
├── src/
│   ├── content/
│   │   ├── textbooks/
│   │   │   └── required-1/
│   │   │       ├── chapter-01/          # ✅ 已有（Phase 0）
│   │   │       │   └── section-01/
│   │   │       ├── chapter-02/          # 🆕 一元二次函数/方程/不等式
│   │   │       │   ├── section-01/
│   │   │       │   ├── section-02/
│   │   │       │   └── section-03/
│   │   │       ├── chapter-03/          # 🆕 函数的概念与性质
│   │   │       │   ├── section-01/
│   │   │       │   ├── section-02/
│   │   │       │   └── section-03/
│   │   │       ├── chapter-04/          # 🆕 指数函数与对数函数
│   │   │       │   ├── section-01/
│   │   │       │   ├── section-02/
│   │   │       │   ├── section-03/
│   │   │       │   └── section-04/
│   │   │       └── chapter-05/          # 🆕 三角函数
│   │   │           ├── section-01/
│   │   │           ├── section-02/
│   │   │           └── section-03/
│   │   └── knowledge-points/
│   │       ├── set-concept.yml          # ✅ 已有
│   │       ├── set-representation.yml   # ✅ 已有
│   │       ├── set-operations.yml       # ✅ 已有
│   │       ├── logical-connectives.yml  # 🆕 常用逻辑用语
│   │       ├── sufficient-necessary.yml # 🆕 充分必要条件
│   │       ├── quadratic-function.yml   # 🆕 一元二次函数
│   │       ├── quadratic-equation.yml   # 🆕 一元二次方程
│   │       ├── inequality-properties.yml # 🆕 不等式性质
│   │       ├── quadratic-inequality.yml # 🆕 一元二次不等式
│   │       ├── basic-inequality.yml     # 🆕 基本不等式
│   │       ├── function-concept.yml     # 🆕 函数概念
│   │       ├── function-properties.yml  # 🆕 函数性质（单调性/奇偶性）
│   │       ├── power-function.yml       # 🆕 幂函数
│   │       ├── exponential-function.yml # 🆕 指数函数
│   │       ├── logarithmic-function.yml # 🆕 对数函数
│   │       ├── exponent-logarithm.yml   # 🆕 指数与对数运算
│   │       ├── function-application.yml # 🆕 函数应用
│   │       ├── angle-concept.yml        # 🆕 角的概念推广
│   │       ├── trig-function.yml        # 🆕 三角函数定义
│   │       ├── trig-identity.yml        # 🆕 三角恒等变换
│   │       └── trig-graph.yml           # 🆕 三角函数图像
│   ├── components/                      # 🆕 全部新建
│   │   ├── MathFormula.tsx              # KaTeX 公式渲染
│   │   ├── ExerciseCard.tsx             # 习题卡片
│   │   ├── SolutionSteps.tsx            # 逐步解答
│   │   ├── DifficultyBadge.tsx          # 难度标签
│   │   ├── RelatedExercises.tsx         # 举一反三
│   │   ├── Navigation.tsx              # 章节导航
│   │   ├── KnowledgeGraph.tsx           # Cytoscape.js 图谱
│   │   └── SearchBox.tsx               # 搜索框
│   ├── pages/
│   │   ├── index.astro                  # ✏️ 更新（添加搜索入口）
│   │   ├── textbook/
│   │   │   └── [id].astro               # 🆕 教材浏览页
│   │   ├── textbook/
│   │   │   └── [id]/
│   │   │       └── chapter/
│   │   │           └── [n]/
│   │   │               └── section/
│   │   │                   └── [n].astro # 🆕 节详情页
│   │   ├── knowledge/
│   │   │   ├── index.astro              # 🆕 知识点列表页
│   │   │   └── [id].astro               # 🆕 知识点详情页
│   │   ├── knowledge-graph.astro        # 🆕 知识图谱页
│   │   └── search.astro                 # 🆕 搜索页
│   └── layouts/
│       └── BaseLayout.astro             # ✏️ 更新（添加搜索导航）
├── scripts/
│   ├── build-knowledge-graph.ts         # ✏️ 增强（添加布局预计算）
│   └── build-section-data.ts            # 🆕 构建节详情聚合数据
├── tests/
│   ├── components/                      # 🆕 组件测试
│   │   ├── ExerciseCard.test.tsx
│   │   ├── SolutionSteps.test.tsx
│   │   ├── DifficultyBadge.test.tsx
│   │   ├── RelatedExercises.test.tsx
│   │   ├── MathFormula.test.tsx
│   │   └── KnowledgeGraph.test.tsx
│   ├── pages/                           # 🆕 页面测试
│   │   ├── textbook.test.ts
│   │   ├── knowledge.test.ts
│   │   └── search.test.ts
│   └── scripts/
│       └── build-section-data.test.ts   # 🆕
└── package.json                         # ✏️ 新增依赖
```

---

## Milestone M3: 必修一完整内容

### Task 1: 安装新依赖

**Files:**
- Modify: `package.json`

- [ ] **Step 1: 安装 KaTeX、Cytoscape.js、Pagefind**

```bash
cd ~/Projects/pep-math
npm install katex cytoscape
npm install -D @types/katex @types/cytoscape pagefind
```

- [ ] **Step 2: 添加 prebuild 脚本**

在 `package.json` 的 `scripts` 中添加：

```json
{
  "prebuild": "npm run build:scripts",
  "build:section-data": "npx tsx scripts/build-section-data.ts"
}
```

更新 `build:scripts` 为：

```json
{
  "build:scripts": "npx tsx scripts/build-knowledge-graph.ts && npx tsx scripts/build-exercise-index.ts && npx tsx scripts/build-exercise-data.ts && npx tsx scripts/build-related-exercises.ts && npx tsx scripts/build-section-data.ts"
}
```

- [ ] **Step 3: 提交**

```bash
git add package.json package-lock.json
git commit -m "chore: add KaTeX, Cytoscape.js, Pagefind dependencies"
```

---

### Task 2: 第二章内容 — 一元二次函数/方程/不等式

**Files:**
- Create: `src/content/textbooks/required-1/chapter-02/section-01/` (等式与不等式)
- Create: `src/content/textbooks/required-1/chapter-02/section-02/` (一元二次不等式)
- Create: `src/content/textbooks/required-1/chapter-02/section-03/` (基本不等式)
- Create: `src/content/knowledge-points/inequality-properties.yml`
- Create: `src/content/knowledge-points/quadratic-inequality.yml`
- Create: `src/content/knowledge-points/basic-inequality.yml`
- Create: `src/content/knowledge-points/quadratic-function.yml`
- Create: `src/content/knowledge-points/quadratic-equation.yml`

- [ ] **Step 1: 创建知识点 YAML — inequality-properties.yml**

```yaml
# src/content/knowledge-points/inequality-properties.yml
id: inequality-properties
name: 不等式的性质
category: 不等式
description: |
  不等式的基本性质包括：传递性（若 a>b, b>c 则 a>c）、
  加法性质（若 a>b 则 a+c>b+c）、
  乘法性质（若 a>b, c>0 则 ac>bc；若 a>b, c<0 则 ac<bc）。
  这些性质是不等式变形和求解的理论基础。
prerequisites: []
follow_ups:
  - quadratic-inequality
  - basic-inequality
related:
  - quadratic-equation
formulas:
  - "a > b, b > c \\Rightarrow a > c"
  - "a > b \\Rightarrow a + c > b + c"
  - "a > b, c > 0 \\Rightarrow ac > bc"
common_mistakes:
  - mistake: "不等式两边同乘负数时忘记变号"
    correction: "不等式两边同乘负数时，不等号方向必须改变"
applied_in:
  - textbook: required-1
    chapters: [2]
```

- [ ] **Step 2: 创建知识点 YAML — quadratic-inequality.yml**

```yaml
# src/content/knowledge-points/quadratic-inequality.yml
id: quadratic-inequality
name: 一元二次不等式
category: 不等式
description: |
  形如 ax²+bx+c>0 或 ax²+bx+c<0 (a≠0) 的不等式。
  求解步骤：先求对应方程的根，再根据二次函数图像判断解集。
  当 Δ>0 时有两个不等实根，Δ=0 时有一个重根，Δ<0 时无实根。
prerequisites:
  - inequality-properties
  - quadratic-equation
  - quadratic-function
follow_ups:
  - basic-inequality
related:
  - quadratic-function
  - quadratic-equation
formulas:
  - "ax^2 + bx + c > 0 \\ (a > 0)"
common_mistakes:
  - mistake: "忽略 a 的正负对解集的影响"
    correction: "当 a<0 时，先两边除以 a 并变号，化为 a>0 的标准形式"
  - mistake: "混淆 Δ>0, Δ=0, Δ<0 三种情况的解集"
    correction: "Δ<0 且 a>0 时，ax²+bx+c>0 的解集为 R；ax²+bx+c<0 的解集为 ∅"
applied_in:
  - textbook: required-1
    chapters: [2]
```

- [ ] **Step 3: 创建知识点 YAML — basic-inequality.yml**

```yaml
# src/content/knowledge-points/basic-inequality.yml
id: basic-inequality
name: 基本不等式
category: 不等式
description: |
  基本不等式：对于任意正数 a, b，有 a+b ≥ 2√(ab)，
  当且仅当 a=b 时等号成立。也写作 (a+b)/2 ≥ √(ab)，
  即算术平均数不小于几何平均数。常用于求最值。
prerequisites:
  - inequality-properties
follow_ups: []
related:
  - quadratic-inequality
  - quadratic-function
formulas:
  - "a + b \\geq 2\\sqrt{ab} \\quad (a > 0, b > 0)"
  - "\\frac{a+b}{2} \\geq \\sqrt{ab}"
common_mistakes:
  - mistake: "使用基本不等式求最值时忽略等号成立条件"
    correction: "必须验证等号成立条件：a=b 时是否满足题目约束"
  - mistake: "在 a, b 不保证为正数时直接使用基本不等式"
    correction: "基本不等式要求 a>0, b>0，使用前必须确认条件"
applied_in:
  - textbook: required-1
    chapters: [2]
```

- [ ] **Step 4: 创建知识点 YAML — quadratic-function.yml**

```yaml
# src/content/knowledge-points/quadratic-function.yml
id: quadratic-function
name: 一元二次函数
category: 函数
description: |
  形如 y = ax²+bx+c (a≠0) 的函数称为二次函数。
  其图像是抛物线，当 a>0 时开口向上，a<0 时开口向下。
  顶点坐标为 (-b/(2a), (4ac-b²)/(4a))，对称轴为 x = -b/(2a)。
prerequisites: []
follow_ups:
  - quadratic-inequality
  - quadratic-equation
related:
  - function-concept
formulas:
  - "y = ax^2 + bx + c \\quad (a \\neq 0)"
  - "x_{\\text{顶点}} = -\\frac{b}{2a}"
  - "y_{\\text{顶点}} = \\frac{4ac - b^2}{4a}"
common_mistakes:
  - mistake: "混淆顶点坐标公式中的符号"
    correction: "顶点横坐标为 -b/(2a)，注意负号"
applied_in:
  - textbook: required-1
    chapters: [2, 3, 4]
```

- [ ] **Step 5: 创建知识点 YAML — quadratic-equation.yml**

```yaml
# src/content/knowledge-points/quadratic-equation.yml
id: quadratic-equation
name: 一元二次方程
category: 方程
description: |
  形如 ax²+bx+c=0 (a≠0) 的方程。求根公式：
  x = (-b±√(b²-4ac))/(2a)。判别式 Δ=b²-4ac 决定根的情况：
  Δ>0 两个不等实根，Δ=0 两个相等实根，Δ<0 无实根。
  韦达定理：x₁+x₂=-b/a，x₁·x₂=c/a。
prerequisites: []
follow_ups:
  - quadratic-inequality
related:
  - quadratic-function
formulas:
  - "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
  - "\\Delta = b^2 - 4ac"
  - "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}"
common_mistakes:
  - mistake: "使用求根公式时忘记 a≠0 的条件"
    correction: "使用求根公式前必须确认 a≠0，否则不是二次方程"
applied_in:
  - textbook: required-1
    chapters: [2, 4]
```

- [ ] **Step 6: 创建 chapter-02/section-01/ 内容（等式与不等式）**

创建 `src/content/textbooks/required-1/chapter-02/section-01/` 下的文件：

**definition-1.md:**
```markdown
---
type: definition
textbook: required-1
chapter: 2
section: 1
name: 不等式
related_knowledge_points:
  - inequality-properties
---

**定义（精确表述）：** 用不等号（>、<、≥、≤、≠）表示不等关系的式子叫做不等式。

**通俗解释：** 不等式就是表示两个量之间大小关系的数学表达式，和等式不同，它表示的是"不相等"或"谁大谁小"。
```

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "自编"
references: "课标2.1.1"
---

**题目：** 用不等式的基本性质证明：若 $a > b > 0$，$c > d > 0$，则 $ac > bd$。

---

**解答：**

**第1步：** 利用乘法性质
> 📌 运用知识点：不等式的性质

因为 $a > b$ 且 $c > 0$，由不等式的乘法性质得 $ac > bc$。

**第2步：** 再次利用乘法性质
> 📌 运用知识点：不等式的性质

因为 $c > d$ 且 $b > 0$，由不等式的乘法性质得 $bc > bd$。

**第3步：** 利用传递性
> 📌 运用知识点：不等式的性质

由 $ac > bc$ 和 $bc > bd$，根据不等式的传递性得 $ac > bd$。

**💡 解题思路总结：** 证明不等式时，反复运用不等式的基本性质（传递性、加法性质、乘法性质），逐步推导。注意使用乘法性质时要确认乘数的正负。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "自编"
references: "课标2.1.1"
---

**题目：** 已知 $a > b$，比较 $a^2$ 与 $b^2$ 的大小。

---

**解答：**

**第1步：** 作差比较
> 📌 运用知识点：不等式的性质

$a^2 - b^2 = (a+b)(a-b)$

因为 $a > b$，所以 $a - b > 0$。

**第2步：** 分析 $a+b$ 的符号
> 📌 运用知识点：不等式的性质

$a + b$ 的符号不确定：
- 若 $a > b > 0$，则 $a + b > 0$，故 $a^2 > b^2$
- 若 $0 > a > b$，则 $a + b < 0$，故 $a^2 < b^2$
- 若 $a > 0 > b$ 且 $|a| > |b|$，则 $a + b > 0$，故 $a^2 > b^2$

**⚠️ 易错提醒：** 不能直接由 $a > b$ 推出 $a^2 > b^2$，因为平方运算不保持不等号方向（当涉及负数时）。

**💡 解题思路总结：** 比较两个量的大小，常用"作差法"——计算差值并判断其正负。注意分类讨论。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "自编"
references: "课标2.1.1"
---

**题目：** 若 $-1 < a < 2$，$-2 < b < 1$，求 $a - b$ 的取值范围。

---

**解答：**

**第1步：** 求 $-b$ 的范围
> 📌 运用知识点：不等式的性质

由 $-2 < b < 1$，两边乘以 $-1$（变号）得 $-1 < -b < 2$。

**第2步：** 利用加法性质求 $a-b$ 的范围
> 📌 运用知识点：不等式的性质

由 $-1 < a < 2$ 和 $-1 < -b < 2$，

根据不等式的加法性质：$-1 + (-1) < a + (-b) < 2 + 2$，

即 $-2 < a - b < 4$。

**⚠️ 易错提醒：** 不能直接用 $a$ 的范围减去 $b$ 的范围。必须先将 $b$ 的范围取反得到 $-b$ 的范围，再相加。

**💡 解题思路总结：** 求 $a-b$ 的范围时，先求 $-b$ 的范围，再用不等式加法性质。不能直接"减"两个不等式。
```

**example-1.md:**
```markdown
---
type: example
textbook: required-1
chapter: 2
section: 1
number: 1
knowledge_points:
  - inequality-properties
---

**例题：** 已知 $a > b > 0$，$c < d < 0$，求证：$\frac{a}{d} < \frac{b}{c}$。

**解答：**

**第1步：** 分析各量的符号
> 📌 运用知识点：不等式的性质

因为 $c < d < 0$，所以 $-c > -d > 0$，即 $\frac{1}{-d} > \frac{1}{-c} > 0$。

因此 $\frac{1}{d} < \frac{1}{c} < 0$（注意 $c, d$ 为负数）。

实际上，因为 $c < d < 0$，有 $|c| > |d|$，所以 $\frac{1}{|c|} < \frac{1}{|d|}$。

由于 $c, d$ 均为负，$\frac{1}{c}$ 和 $\frac{1}{d}$ 均为负，且 $\frac{1}{d} < \frac{1}{c} < 0$。

**第2步：** 利用乘法性质
> 📌 运用知识点：不等式的性质

因为 $a > b > 0$ 且 $\frac{1}{d} < \frac{1}{c} < 0$，

所以 $a \cdot \frac{1}{d} < b \cdot \frac{1}{c}$（正数乘负数，绝对值大的反而小），

即 $\frac{a}{d} < \frac{b}{c}$。
```

- [ ] **Step 7: 创建 chapter-02/section-02/ 内容（一元二次不等式）**

创建 3 道习题 + 1 道例题 + 1 个定义：

**definition-1.md:**
```markdown
---
type: definition
textbook: required-1
chapter: 2
section: 2
name: 一元二次不等式
related_knowledge_points:
  - quadratic-inequality
  - quadratic-function
  - quadratic-equation
---

**定义（精确表述）：** 含有一个未知数且未知数的最高次数为 2 的不等式，称为一元二次不等式。一般形式为 $ax^2 + bx + c > 0$（或 $< 0$、$\geq 0$、$\leq 0$），其中 $a \neq 0$。

**通俗解释：** 一元二次不等式就是带有 $x^2$ 项的不等式。解这种不等式需要借助对应的二次函数图像——看抛物线在 $x$ 轴上方（$y>0$）或下方（$y<0$）的部分。
```

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-equation
source: "自编"
references: "课标2.2.1"
---

**题目：** 解不等式 $x^2 - 3x + 2 > 0$。

---

**解答：**

**第1步：** 求对应方程的根
> 📌 运用知识点：一元二次方程

$x^2 - 3x + 2 = 0$

$(x-1)(x-2) = 0$

$x_1 = 1$，$x_2 = 2$

**第2步：** 根据二次函数图像确定解集
> 📌 运用知识点：一元二次不等式

因为 $a = 1 > 0$，抛物线开口向上。

$x^2 - 3x + 2 > 0$ 即抛物线在 $x$ 轴上方的部分，

对应 $x < 1$ 或 $x > 2$。

所以解集为 $\{x \mid x < 1 \text{ 或 } x > 2\}$，即 $(-\infty, 1) \cup (2, +\infty)$。

**💡 解题思路总结：** 解一元二次不等式的三步法：①求根 ②画图（判断开口方向）③读解集。"大于取两边，小于取中间"。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 2
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - quadratic-inequality
source: "自编"
references: "课标2.2.1"
---

**题目：** 解不等式 $-x^2 + 4x - 4 \geq 0$。

---

**解答：**

**第1步：** 化为标准形式
> 📌 运用知识点：一元二次不等式

两边乘以 $-1$（变号）：$x^2 - 4x + 4 \leq 0$

**第2步：** 求对应方程的根
> 📌 运用知识点：一元二次方程

$x^2 - 4x + 4 = 0$

$(x-2)^2 = 0$，$x = 2$（重根）

**第3步：** 确定解集
> 📌 运用知识点：一元二次不等式

$\Delta = 0$，抛物线与 $x$ 轴只有一个交点。

$x^2 - 4x + 4 = (x-2)^2 \geq 0$ 恒成立，

所以 $(x-2)^2 \leq 0$ 的解为 $x = 2$。

所以原不等式的解集为 $\{2\}$。

**⚠️ 易错提醒：** $\Delta = 0$ 时不要直接说"无解"或"全体实数"，要具体分析不等号方向。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 2
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-function
source: "自编"
references: "课标2.2.1"
---

**题目：** 若不等式 $x^2 - ax + 2 > 0$ 对一切实数 $x$ 恒成立，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 分析恒成立条件
> 📌 运用知识点：一元二次不等式

$x^2 - ax + 2 > 0$ 对一切 $x \in \mathbb{R}$ 恒成立，

等价于抛物线 $y = x^2 - ax + 2$ 始终在 $x$ 轴上方。

**第2步：** 利用判别式
> 📌 运用知识点：一元二次方程

因为 $a = 1 > 0$（开口向上），需要 $\Delta < 0$：

$\Delta = a^2 - 8 < 0$

$a^2 < 8$

$-2\sqrt{2} < a < 2\sqrt{2}$

**💡 解题思路总结：** "恒成立"问题的关键：$ax^2+bx+c>0$ 恒成立 $\Leftrightarrow$ $a>0$ 且 $\Delta<0$。
```

**example-1.md:**
```markdown
---
type: example
textbook: required-1
chapter: 2
section: 2
number: 1
knowledge_points:
  - quadratic-inequality
  - quadratic-equation
---

**例题：** 解不等式 $2x^2 + 5x - 3 < 0$。

**解答：**

**第1步：** 求对应方程的根
> 📌 运用知识点：一元二次方程

$2x^2 + 5x - 3 = 0$

$(2x - 1)(x + 3) = 0$

$x_1 = \frac{1}{2}$，$x_2 = -3$

**第2步：** 确定解集
> 📌 运用知识点：一元二次不等式

$a = 2 > 0$，开口向上。$< 0$ 取中间。

解集为 $\left(-3, \frac{1}{2}\right)$。
```

- [ ] **Step 8: 创建 chapter-02/section-03/ 内容（基本不等式）**

创建 3 道习题 + 1 道例题 + 1 个定义：

**definition-1.md:**
```markdown
---
type: definition
textbook: required-1
chapter: 2
section: 3
name: 基本不等式
related_knowledge_points:
  - basic-inequality
---

**定义（精确表述）：** 对于任意正实数 $a, b$，有 $\frac{a+b}{2} \geq \sqrt{ab}$，当且仅当 $a = b$ 时等号成立。其中 $\frac{a+b}{2}$ 称为 $a, b$ 的算术平均数，$\sqrt{ab}$ 称为 $a, b$ 的几何平均数。

**通俗解释：** 两个正数"加起来的平均值"总是不小于"乘起来再开方"。只有两个数相等时，两者才一样大。这个不等式在求最值时非常有用。
```

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "自编"
references: "课标2.3.1"
---

**题目：** 已知 $x > 0$，求 $x + \frac{1}{x}$ 的最小值。

---

**解答：**

**第1步：** 应用基本不等式
> 📌 运用知识点：基本不等式

因为 $x > 0$，$\frac{1}{x} > 0$，由基本不等式：

$x + \frac{1}{x} \geq 2\sqrt{x \cdot \frac{1}{x}} = 2\sqrt{1} = 2$

**第2步：** 验证等号成立条件
> 📌 运用知识点：基本不等式

等号成立条件：$x = \frac{1}{x}$，即 $x^2 = 1$，$x = 1$（因为 $x > 0$）。

所以 $x + \frac{1}{x}$ 的最小值为 $2$，在 $x = 1$ 时取得。

**💡 解题思路总结：** 用基本不等式求最值的三个条件：①各项为正 ②和或积为定值 ③等号能取到。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "自编"
references: "课标2.3.1"
---

**题目：** 已知 $x > 1$，求 $x + \frac{4}{x-1}$ 的最小值。

---

**解答：**

**第1步：** 变量替换
> 📌 运用知识点：基本不等式

令 $t = x - 1 > 0$，则 $x = t + 1$。

$x + \frac{4}{x-1} = t + 1 + \frac{4}{t} = t + \frac{4}{t} + 1$

**第2步：** 对 $t + \frac{4}{t}$ 应用基本不等式
> 📌 运用知识点：基本不等式

$t + \frac{4}{t} \geq 2\sqrt{t \cdot \frac{4}{t}} = 2 \times 2 = 4$

所以 $x + \frac{4}{x-1} \geq 4 + 1 = 5$

**第3步：** 验证等号成立条件
> 📌 运用知识点：基本不等式

等号成立：$t = \frac{4}{t}$，$t^2 = 4$，$t = 2$（$t > 0$）。

即 $x = 3$ 时取等号。最小值为 $5$。

**⚠️ 易错提醒：** 当不能直接凑出"积为定值"的形式时，考虑换元或拆项。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "自编"
references: "课标2.3.1"
---

**题目：** 已知正数 $a, b$ 满足 $a + b = 1$，求 $\frac{1}{a} + \frac{1}{b}$ 的最小值。

---

**解答：**

**第1步：** 通分变形
> 📌 运用知识点：基本不等式

$\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab} = \frac{1}{ab}$

**第2步：** 求 $ab$ 的最大值
> 📌 运用知识点：基本不等式

由基本不等式：$\sqrt{ab} \leq \frac{a+b}{2} = \frac{1}{2}$

所以 $ab \leq \frac{1}{4}$

**第3步：** 求最小值
> 📌 运用知识点：基本不等式

$\frac{1}{ab} \geq \frac{1}{\frac{1}{4}} = 4$

等号成立：$a = b = \frac{1}{2}$。

所以 $\frac{1}{a} + \frac{1}{b}$ 的最小值为 $4$。

**💡 解题思路总结：** "1的代换"技巧：利用 $a+b=1$ 将 $\frac{1}{a}+\frac{1}{b}$ 通分后转化为求 $ab$ 的最值。
```

**example-1.md:**
```markdown
---
type: example
textbook: required-1
chapter: 2
section: 3
number: 1
knowledge_points:
  - basic-inequality
---

**例题：** 用基本不等式证明：对任意正数 $a, b$，有 $\frac{b}{a} + \frac{a}{b} \geq 2$。

**解答：**

**第1步：** 应用基本不等式
> 📌 运用知识点：基本不等式

因为 $a > 0, b > 0$，所以 $\frac{b}{a} > 0, \frac{a}{b} > 0$。

由基本不等式：$\frac{b}{a} + \frac{a}{b} \geq 2\sqrt{\frac{b}{a} \cdot \frac{a}{b}} = 2\sqrt{1} = 2$

**第2步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$\frac{b}{a} = \frac{a}{b}$，即 $a^2 = b^2$，因为 $a, b > 0$，所以 $a = b$。
```

- [ ] **Step 9: 运行构建脚本和测试验证**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npm run validate
npm test
```

Expected: 所有脚本运行成功，所有测试通过

- [ ] **Step 10: 提交**

```bash
git add src/content/
git commit -m "content(required-1/ch2): 添加第二章全部知识点和内容"
```

---

### Task 3: 第三章内容 — 函数的概念与性质

**Files:**
- Create: `src/content/textbooks/required-1/chapter-03/section-01/` (函数及其表示)
- Create: `src/content/textbooks/required-1/chapter-03/section-02/` (函数的单调性与最值)
- Create: `src/content/textbooks/required-1/chapter-03/section-03/` (函数的奇偶性)
- Create: `src/content/knowledge-points/function-concept.yml`
- Create: `src/content/knowledge-points/function-properties.yml`
- Create: `src/content/knowledge-points/power-function.yml`

- [ ] **Step 1: 创建知识点 YAML 文件**

**function-concept.yml:**
```yaml
id: function-concept
name: 函数的概念
category: 函数
description: |
  设 A, B 是非空的数集，如果按照某种确定的对应关系 f，
  使集合 A 中的任意一个数 x，在集合 B 中都有唯一确定的数 f(x) 和它对应，
  那么就称 f: A→B 为从集合 A 到集合 B 的一个函数。
  记作 y = f(x)，x ∈ A。其中 x 叫自变量，A 叫定义域，{f(x)|x∈A} 叫值域。
prerequisites:
  - set-concept
follow_ups:
  - function-properties
  - exponential-function
  - logarithmic-function
  - trig-function
related:
  - quadratic-function
formulas:
  - "y = f(x), \\quad x \\in A"
common_mistakes:
  - mistake: "认为值域就是 B"
    correction: "值域是 {f(x)|x∈A}，是 B 的子集，不一定等于 B"
applied_in:
  - textbook: required-1
    chapters: [3, 4, 5]
```

**function-properties.yml:**
```yaml
id: function-properties
name: 函数的性质（单调性与奇偶性）
category: 函数
description: |
  单调性：对于定义域内区间 D 上的任意 x₁, x₂，
  若 x₁ < x₂ 时 f(x₁) < f(x₂)，则 f 在 D 上单调递增；
  若 f(x₁) > f(x₂)，则 f 在 D 上单调递减。
  奇偶性：若对定义域内任意 x，f(-x) = f(x) 则为偶函数（图像关于 y 轴对称），
  f(-x) = -f(x) 则为奇函数（图像关于原点对称）。
prerequisites:
  - function-concept
follow_ups:
  - exponential-function
  - logarithmic-function
related:
  - function-concept
  - trig-function
formulas:
  - "\\text{偶函数：} f(-x) = f(x)"
  - "\\text{奇函数：} f(-x) = -f(x)"
common_mistakes:
  - mistake: "判断奇偶性时不先检查定义域是否关于原点对称"
    correction: "奇偶性的前提条件是定义域关于原点对称，不对称则非奇非偶"
  - mistake: "证明单调性时只取特殊值验证"
    correction: "单调性证明必须取'任意' x₁ < x₂，不能只取特殊值"
applied_in:
  - textbook: required-1
    chapters: [3, 4]
```

**power-function.yml:**
```yaml
id: power-function
name: 幂函数
category: 函数
description: |
  形如 y = x^α 的函数称为幂函数，其中 α 是常数。
  常见的幂函数：y = x, y = x², y = x³, y = x^(1/2), y = x^(-1)。
  所有幂函数都过点 (1, 1)。
prerequisites:
  - function-concept
  - function-properties
follow_ups: []
related:
  - exponential-function
  - logarithmic-function
formulas:
  - "y = x^{\\alpha}"
common_mistakes:
  - mistake: "混淆幂函数与指数函数"
    correction: "幂函数 y=x^α 底数是变量；指数函数 y=a^x 指数是变量"
applied_in:
  - textbook: required-1
    chapters: [3]
```

- [ ] **Step 2: 创建 chapter-03/section-01/ 内容（函数及其表示）**

创建 3 道习题 + 1 道例题 + 1 个定义：

**definition-1.md:**
```markdown
---
type: definition
textbook: required-1
chapter: 3
section: 1
name: 函数
related_knowledge_points:
  - function-concept
---

**定义（精确表述）：** 设 $A$、$B$ 是非空的数集，如果按照某种确定的对应关系 $f$，使集合 $A$ 中的任意一个数 $x$，在集合 $B$ 中都有唯一确定的数 $f(x)$ 和它对应，那么称 $f: A \to B$ 为从集合 $A$ 到集合 $B$ 的一个函数，记作 $y = f(x)$，$x \in A$。

**通俗解释：** 函数就像一个"加工机器"：输入一个 $x$ 值，按照某个规则 $f$ 加工，输出唯一确定的 $y$ 值。关键要求是每个输入只能对应一个输出。
```

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - function-concept
source: "自编"
references: "课标3.1.1"
---

**题目：** 求函数 $f(x) = \sqrt{x - 1} + \frac{1}{x - 3}$ 的定义域。

---

**解答：**

**第1步：** 列出使函数有意义的条件
> 📌 运用知识点：函数的概念

根号下要求：$x - 1 \geq 0$，即 $x \geq 1$

分母要求：$x - 3 \neq 0$，即 $x \neq 3$

**第2步：** 取交集
> 📌 运用知识点：集合的运算

$x \geq 1$ 且 $x \neq 3$，

定义域为 $[1, 3) \cup (3, +\infty)$。

**💡 解题思路总结：** 求定义域时，列出所有限制条件（根号≥0、分母≠0、对数>0等），取交集。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - function-concept
source: "自编"
references: "课标3.1.1"
---

**题目：** 已知 $f(x) = 2x + 1$，求 $f(f(2))$ 的值。

---

**解答：**

**第1步：** 求 $f(2)$
> 📌 运用知识点：函数的概念

$f(2) = 2 \times 2 + 1 = 5$

**第2步：** 求 $f(f(2)) = f(5)$
> 📌 运用知识点：函数的概念

$f(5) = 2 \times 5 + 1 = 11$

所以 $f(f(2)) = 11$。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-concept
source: "自编"
references: "课标3.1.1"
---

**题目：** 已知 $f(x)$ 的定义域为 $[0, 2]$，求 $f(2x - 1)$ 的定义域。

---

**解答：**

**第1步：** 理解复合函数的定义域
> 📌 运用知识点：函数的概念

$f(x)$ 的定义域为 $[0, 2]$，意味着 $f$ 的"输入"必须在 $[0, 2]$ 内。

对于 $f(2x-1)$，需要 $2x - 1 \in [0, 2]$。

**第2步：** 解不等式
> 📌 运用知识点：不等式的性质

$0 \leq 2x - 1 \leq 2$

$1 \leq 2x \leq 3$

$\frac{1}{2} \leq x \leq \frac{3}{2}$

所以 $f(2x-1)$ 的定义域为 $\left[\frac{1}{2}, \frac{3}{2}\right]$。

**⚠️ 易错提醒：** $f(x)$ 的定义域和 $f(2x-1)$ 的定义域不同。前者是 $x$ 的范围，后者需要让 $2x-1$ 落在前者的定义域内。
```

**example-1.md:**
```markdown
---
type: example
textbook: required-1
chapter: 3
section: 1
number: 1
knowledge_points:
  - function-concept
---

**例题：** 判断下列各组函数是否为同一函数：

(1) $f(x) = x$ 与 $g(x) = \sqrt{x^2}$；

(2) $f(x) = x$ 与 $g(x) = (\sqrt{x})^2$。

**解答：**

**第1步：** 分析 (1)
> 📌 运用知识点：函数的概念

$f(x) = x$ 的定义域为 $\mathbb{R}$。

$g(x) = \sqrt{x^2} = |x|$ 的定义域为 $\mathbb{R}$。

两者定义域相同，但 $g(x) = |x| \neq x$（如 $g(-1) = 1 \neq -1 = f(-1)$），

对应关系不同，所以不是同一函数。

**第2步：** 分析 (2)
> 📌 运用知识点：函数的概念

$f(x) = x$ 的定义域为 $\mathbb{R}$。

$g(x) = (\sqrt{x})^2 = x$ 的定义域为 $[0, +\infty)$（因为要求 $x \geq 0$）。

定义域不同，所以不是同一函数。

**💡 解题思路总结：** 判断两个函数是否相同，必须同时满足：①定义域相同 ②对应关系相同。缺一不可。
```

- [ ] **Step 3: 创建 chapter-03/section-02/ 内容（函数的单调性与最值）**

创建 3 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.2.1"
---

**题目：** 用定义法证明 $f(x) = x^2$ 在 $(0, +\infty)$ 上单调递增。

---

**解答：**

**第1步：** 取值
> 📌 运用知识点：函数的性质

设 $x_1, x_2 \in (0, +\infty)$，且 $x_1 < x_2$。

**第2步：** 作差
> 📌 运用知识点：函数的性质

$f(x_1) - f(x_2) = x_1^2 - x_2^2 = (x_1 + x_2)(x_1 - x_2)$

**第3步：** 判断符号
> 📌 运用知识点：函数的性质

因为 $x_1, x_2 > 0$，所以 $x_1 + x_2 > 0$。

因为 $x_1 < x_2$，所以 $x_1 - x_2 < 0$。

因此 $f(x_1) - f(x_2) < 0$，即 $f(x_1) < f(x_2)$。

所以 $f(x) = x^2$ 在 $(0, +\infty)$ 上单调递增。

**💡 解题思路总结：** 定义法证明单调性四步：取值→作差→变形→判号→结论。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.2.1"
---

**题目：** 求函数 $f(x) = -x^2 + 4x - 1$ 的最大值及取得最大值时 $x$ 的值。

---

**解答：**

**第1步：** 配方
> 📌 运用知识点：一元二次函数

$f(x) = -(x^2 - 4x) - 1 = -(x^2 - 4x + 4 - 4) - 1 = -(x-2)^2 + 3$

**第2步：** 确定最大值
> 📌 运用知识点：函数的性质

因为 $-(x-2)^2 \leq 0$，所以 $f(x) \leq 3$。

当 $x = 2$ 时，$-(x-2)^2 = 0$，$f(x)$ 取最大值 $3$。

**💡 解题思路总结：** 二次函数求最值用配方法，化为顶点式 $y = a(x-h)^2 + k$，当 $a<0$ 时最大值为 $k$。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.2.1"
---

**题目：** 已知 $f(x) = x^2 - 2ax + 3$ 在 $(-\infty, 2]$ 上单调递减，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 确定对称轴
> 📌 运用知识点：一元二次函数

$f(x) = x^2 - 2ax + 3$ 的对称轴为 $x = a$。

因为 $a_{\text{系数}} = 1 > 0$，开口向上，在对称轴左侧递减。

**第2步：** 建立条件
> 📌 运用知识点：函数的性质

$f(x)$ 在 $(-\infty, a]$ 上单调递减。

要使 $f(x)$ 在 $(-\infty, 2]$ 上单调递减，需要 $(-\infty, 2] \subseteq (-\infty, a]$，

即 $a \geq 2$。

**💡 解题思路总结：** 二次函数的单调性由对称轴和开口方向决定。"在某区间上单调"意味着该区间是单调区间的子集。
```

- [ ] **Step 4: 创建 chapter-03/section-03/ 内容（函数的奇偶性）**

创建 2 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.3.1"
---

**题目：** 判断函数 $f(x) = x^3 + x$ 的奇偶性。

---

**解答：**

**第1步：** 检查定义域
> 📌 运用知识点：函数的性质

定义域为 $\mathbb{R}$，关于原点对称。✓

**第2步：** 计算 $f(-x)$
> 📌 运用知识点：函数的性质

$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x)$

所以 $f(x)$ 为奇函数。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 3
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.3.1"
---

**题目：** 已知 $f(x)$ 是定义在 $\mathbb{R}$ 上的奇函数，当 $x > 0$ 时 $f(x) = x^2 - 2x$，求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 利用奇函数性质求 $x < 0$ 时的表达式
> 📌 运用知识点：函数的性质

当 $x < 0$ 时，$-x > 0$，$f(-x) = (-x)^2 - 2(-x) = x^2 + 2x$。

因为 $f(x)$ 为奇函数，$f(-x) = -f(x)$，

所以 $f(x) = -f(-x) = -(x^2 + 2x) = -x^2 - 2x$。

**第2步：** 确定 $f(0)$
> 📌 运用知识点：函数的性质

奇函数若在 $x=0$ 处有定义，则 $f(0) = -f(0)$，即 $f(0) = 0$。

**第3步：** 写出完整解析式
> 📌 运用知识点：函数的概念

$$f(x) = \begin{cases} x^2 - 2x, & x > 0 \\ 0, & x = 0 \\ -x^2 - 2x, & x < 0 \end{cases}$$
```

- [ ] **Step 5: 运行构建脚本和测试验证**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npm run validate
npm test
```

- [ ] **Step 6: 提交**

```bash
git add src/content/
git commit -m "content(required-1/ch3): 添加第三章全部知识点和内容"
```

---

### Task 4: 第四章内容 — 指数函数与对数函数

**Files:**
- Create: `src/content/textbooks/required-1/chapter-04/section-01/` (指数)
- Create: `src/content/textbooks/required-1/chapter-04/section-02/` (对数)
- Create: `src/content/textbooks/required-1/chapter-04/section-03/` (指数函数与对数函数)
- Create: `src/content/textbooks/required-1/chapter-04/section-04/` (函数应用)
- Create: `src/content/knowledge-points/exponential-function.yml`
- Create: `src/content/knowledge-points/logarithmic-function.yml`
- Create: `src/content/knowledge-points/exponent-logarithm.yml`
- Create: `src/content/knowledge-points/function-application.yml`

- [ ] **Step 1: 创建知识点 YAML 文件**

**exponent-logarithm.yml:**
```yaml
id: exponent-logarithm
name: 指数与对数运算
category: 函数
description: |
  指数运算法则：a^m · a^n = a^(m+n)，(a^m)^n = a^(mn)，(ab)^n = a^n · b^n。
  对数：若 a^b = N（a>0, a≠1），则 b = log_a(N)。
  对数运算法则：log_a(MN) = log_a(M) + log_a(N)，
  log_a(M/N) = log_a(M) - log_a(N)，log_a(M^n) = n·log_a(M)。
  换底公式：log_a(b) = ln(b)/ln(a)。
prerequisites:
  - function-concept
follow_ups:
  - exponential-function
  - logarithmic-function
related:
  - quadratic-equation
formulas:
  - "a^m \\cdot a^n = a^{m+n}"
  - "(a^m)^n = a^{mn}"
  - "\\log_a(MN) = \\log_a M + \\log_a N"
  - "\\log_a \\frac{M}{N} = \\log_a M - \\log_a N"
  - "\\log_a M^n = n \\log_a M"
  - "\\log_a b = \\frac{\\ln b}{\\ln a}"
common_mistakes:
  - mistake: "混淆 log_a(M+N) = log_a(M) + log_a(N)"
    correction: "对数没有'加法公式'，log_a(M+N) ≠ log_a(M) + log_a(N)"
applied_in:
  - textbook: required-1
    chapters: [4]
```

**exponential-function.yml:**
```yaml
id: exponential-function
name: 指数函数
category: 函数
description: |
  形如 y = a^x（a>0, a≠1）的函数称为指数函数。
  定义域为 R，值域为 (0, +∞)。
  当 a>1 时在 R 上单调递增；当 0<a<1 时在 R 上单调递减。
  图像过点 (0, 1)。
prerequisites:
  - exponent-logarithm
  - function-concept
  - function-properties
follow_ups:
  - logarithmic-function
related:
  - logarithmic-function
formulas:
  - "y = a^x \\quad (a > 0, a \\neq 1)"
common_mistakes:
  - mistake: "认为 a^x 可以等于 0 或负数"
    correction: "指数函数值域为 (0, +∞)，a^x 恒大于 0"
applied_in:
  - textbook: required-1
    chapters: [4]
```

**logarithmic-function.yml:**
```yaml
id: logarithmic-function
name: 对数函数
category: 函数
description: |
  形如 y = log_a(x)（a>0, a≠1）的函数称为对数函数。
  定义域为 (0, +∞)，值域为 R。
  当 a>1 时在 (0,+∞) 上单调递增；当 0<a<1 时单调递减。
  图像过点 (1, 0)。对数函数是指数函数的反函数。
prerequisites:
  - exponent-logarithm
  - exponential-function
  - function-concept
follow_ups: []
related:
  - exponential-function
formulas:
  - "y = \\log_a x \\quad (a > 0, a \\neq 1)"
common_mistakes:
  - mistake: "忘记对数函数的定义域为 (0, +∞)"
    correction: "对数函数的真数必须大于 0，log_a(x) 中 x>0"
applied_in:
  - textbook: required-1
    chapters: [4]
```

**function-application.yml:**
```yaml
id: function-application
name: 函数应用
category: 函数
description: |
  利用函数模型（指数增长模型、对数增长模型等）解决实际问题。
  常见模型：指数增长模型 y = a·b^x，对数模型 y = a·ln(x) + b。
  解题步骤：审题→建模→求解→验证。
prerequisites:
  - exponential-function
  - logarithmic-function
follow_ups: []
related:
  - basic-inequality
formulas: []
common_mistakes:
  - mistake: "建立模型后不验证结果的合理性"
    correction: "数学模型的结果要回到实际问题中检验是否符合实际意义"
applied_in:
  - textbook: required-1
    chapters: [4]
```

- [ ] **Step 2: 创建 chapter-04/section-01/ 内容（指数运算）**

创建 2 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "自编"
references: "课标4.1.1"
---

**题目：** 计算：$(2^{\frac{1}{2}} \times 3^{\frac{1}{3}})^6 + (2\sqrt{2})^{\frac{2}{3}} \times 4^{\frac{3}{4}}$。

---

**解答：**

**第1步：** 计算第一项
> 📌 运用知识点：指数与对数运算

$(2^{\frac{1}{2}} \times 3^{\frac{1}{3}})^6 = 2^3 \times 3^2 = 8 \times 9 = 72$

**第2步：** 计算第二项
> 📌 运用知识点：指数与对数运算

$(2\sqrt{2})^{\frac{2}{3}} = (2^{\frac{3}{2}})^{\frac{2}{3}} = 2^1 = 2$

$4^{\frac{3}{4}} = (2^2)^{\frac{3}{4}} = 2^{\frac{3}{2}} = 2\sqrt{2}$

第二项 $= 2 \times 2\sqrt{2} = 4\sqrt{2}$

**第3步：** 求和

原式 $= 72 + 4\sqrt{2}$

**💡 解题思路总结：** 分数指数幂的运算关键是灵活运用法则：$(a^m)^n = a^{mn}$，$(ab)^n = a^n b^n$。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "自编"
references: "课标4.1.1"
---

**题目：** 已知 $\log_3 2 = a$，$\log_3 7 = b$，用 $a, b$ 表示 $\log_3 56$。

---

**解答：**

**第1步：** 分解 56
> 📌 运用知识点：指数与对数运算

$56 = 8 \times 7 = 2^3 \times 7$

**第2步：** 应用对数运算法则
> 📌 运用知识点：指数与对数运算

$\log_3 56 = \log_3(2^3 \times 7) = \log_3 2^3 + \log_3 7 = 3\log_3 2 + \log_3 7 = 3a + b$
```

- [ ] **Step 3: 创建 chapter-04/section-02/ 内容（对数运算）**

创建 2 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "自编"
references: "课标4.2.1"
---

**题目：** 计算 $\lg 25 + \lg 4 + \log_9 27$。

---

**解答：**

**第1步：** 计算 $\lg 25 + \lg 4$
> 📌 运用知识点：指数与对数运算

$\lg 25 + \lg 4 = \lg(25 \times 4) = \lg 100 = 2$

**第2步：** 计算 $\log_9 27$
> 📌 运用知识点：指数与对数运算

$\log_9 27 = \log_{3^2} 3^3 = \frac{3}{2}$

**第3步：** 求和

原式 $= 2 + \frac{3}{2} = \frac{7}{2}$
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "自编"
references: "课标4.2.1"
---

**题目：** 已知 $\log_{18} 9 = a$，$18^b = 5$，用 $a, b$ 表示 $\log_{36} 45$。

---

**解答：**

**第1步：** 分析已知条件
> 📌 运用知识点：指数与对数运算

$\log_{18} 9 = a$，$18^b = 5$ 即 $\log_{18} 5 = b$。

**第2步：** 换底
> 📌 运用知识点：指数与对数运算

$\log_{36} 45 = \frac{\log_{18} 45}{\log_{18} 36}$

$\log_{18} 45 = \log_{18}(9 \times 5) = \log_{18} 9 + \log_{18} 5 = a + b$

$\log_{18} 36 = \log_{18}(4 \times 9) = \log_{18} 4 + \log_{18} 9$

$\log_{18} 4 = \log_{18}\frac{36}{9} = \log_{18} 36 - \log_{18} 9$

设 $\log_{18} 36 = t$，则 $\log_{18} 4 = t - a$。

又 $\log_{18} 4 = \log_{18} 2^2 = 2\log_{18} 2$，

$\log_{18} 2 = \log_{18}\frac{18}{9} = 1 - a$

所以 $\log_{18} 4 = 2(1-a)$，$t = 2(1-a) + a = 2 - a$。

$\log_{36} 45 = \frac{a+b}{2-a}$
```

- [ ] **Step 4: 创建 chapter-04/section-03/ 内容（指数函数与对数函数）**

创建 3 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - exponential-function
source: "自编"
references: "课标4.3.1"
---

**题目：** 比较大小：$1.7^{2.5}$ 与 $1.7^3$。

---

**解答：**

**第1步：** 确定单调性
> 📌 运用知识点：指数函数

$y = 1.7^x$ 的底数 $1.7 > 1$，所以在 $\mathbb{R}$ 上单调递增。

**第2步：** 比较指数
> 📌 运用知识点：指数函数

因为 $2.5 < 3$，且 $y = 1.7^x$ 单调递增，

所以 $1.7^{2.5} < 1.7^3$。

**💡 解题思路总结：** 同底数幂比较大小，利用指数函数的单调性。底数>1递增，0<底数<1递减。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 3
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - logarithmic-function
source: "自编"
references: "课标4.3.1"
---

**题目：** 求函数 $f(x) = \log_2(x^2 - 2x + 3)$ 的定义域和值域。

---

**解答：**

**第1步：** 求定义域
> 📌 运用知识点：对数函数

真数 $x^2 - 2x + 3 > 0$。

$\Delta = 4 - 12 = -8 < 0$，且 $a = 1 > 0$，

所以 $x^2 - 2x + 3 > 0$ 对一切实数成立。

定义域为 $\mathbb{R}$。

**第2步：** 求值域
> 📌 运用知识点：对数函数、一元二次函数

$x^2 - 2x + 3 = (x-1)^2 + 2 \geq 2$

所以 $\log_2(x^2 - 2x + 3) \geq \log_2 2 = 1$

值域为 $[1, +\infty)$。
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 3
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "自编"
references: "课标4.3.1"
---

**题目：** 解方程 $3^{2x+1} = 9^{x-1} \cdot 27$。

---

**解答：**

**第1步：** 统一底数
> 📌 运用知识点：指数与对数运算

$9 = 3^2$，$27 = 3^3$

$3^{2x+1} = (3^2)^{x-1} \cdot 3^3 = 3^{2x-2} \cdot 3^3 = 3^{2x+1}$

**第2步：** 比较指数
> 📌 运用知识点：指数函数

$2x + 1 = 2x + 1$

等式恒成立，所以方程的解为 $x \in \mathbb{R}$。

**💡 解题思路总结：** 指数方程的基本策略是统一底数，然后比较指数。
```

- [ ] **Step 5: 创建 chapter-04/section-04/ 内容（函数应用）**

创建 2 道习题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 1
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-application
  - exponential-function
source: "自编"
references: "课标4.4.1"
---

**题目：** 某城市 2020 年底人口为 500 万，假设人口以每年 1.2% 的速率增长，问至少经过多少年人口将超过 600 万？（参考数据：$\lg 1.2 \approx 0.0792$，$\lg 6 \approx 0.7782$，$\lg 5 \approx 0.6990$）

---

**解答：**

**第1步：** 建立指数增长模型
> 📌 运用知识点：函数应用

设经过 $n$ 年后人口为 $y$ 万，

$y = 500 \times (1 + 0.012)^n = 500 \times 1.012^n$

**第2步：** 解不等式
> 📌 运用知识点：指数与对数运算

$500 \times 1.012^n > 600$

$1.012^n > 1.2$

$n \lg 1.012 > \lg 1.2$

$n > \frac{\lg 1.2}{\lg 1.012}$

$\lg 1.2 = \lg\frac{6}{5} = \lg 6 - \lg 5 = 0.7782 - 0.6990 = 0.0792$

$\lg 1.012 \approx 0.00518$（近似）

$n > \frac{0.0792}{0.00518} \approx 15.3$

所以至少经过 16 年。

**💡 解题思路总结：** 增长率问题用指数模型 $y = a(1+r)^n$，解指数不等式用取对数的方法。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-application
  - logarithmic-function
source: "自编"
references: "课标4.4.1"
---

**题目：** 声音的强度 $I$（单位：W/m²）与声强级 $L$（单位：dB）的关系为 $L = 10 \lg \frac{I}{I_0}$，其中 $I_0 = 10^{-12}$ W/m²。若某声音的声强级为 60 dB，求其声强。

---

**解答：**

**第1步：** 代入公式
> 📌 运用知识点：指数与对数运算

$60 = 10 \lg \frac{I}{10^{-12}}$

$\lg \frac{I}{10^{-12}} = 6$

**第2步：** 解方程
> 📌 运用知识点：指数与对数运算

$\frac{I}{10^{-12}} = 10^6$

$I = 10^6 \times 10^{-12} = 10^{-6}$ W/m²

**💡 解题思路总结：** 声强级公式是对数模型的实际应用。解对数方程的关键是将 $\lg$ 转化为指数形式。
```

- [ ] **Step 6: 运行构建脚本和测试验证**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npm run validate
npm test
```

- [ ] **Step 7: 提交**

```bash
git add src/content/
git commit -m "content(required-1/ch4): 添加第四章全部知识点和内容"
```

---

### Task 5: 第五章内容 — 三角函数

**Files:**
- Create: `src/content/textbooks/required-1/chapter-05/section-01/` (角的概念与弧度制)
- Create: `src/content/textbooks/required-1/chapter-05/section-02/` (三角函数定义)
- Create: `src/content/textbooks/required-1/chapter-05/section-03/` (三角函数图像与性质)
- Create: `src/content/knowledge-points/angle-concept.yml`
- Create: `src/content/knowledge-points/trig-function.yml`
- Create: `src/content/knowledge-points/trig-identity.yml`
- Create: `src/content/knowledge-points/trig-graph.yml`

- [ ] **Step 1: 创建知识点 YAML 文件**

**angle-concept.yml:**
```yaml
id: angle-concept
name: 角的概念与弧度制
category: 三角函数
description: |
  角的推广：正角（逆时针旋转）、负角（顺时针旋转）、零角。
  弧度制：弧长等于半径的圆弧所对的圆心角为 1 弧度。
  换算：π rad = 180°。弧长公式 l = |α|r，扇形面积 S = ½|α|r²。
prerequisites: []
follow_ups:
  - trig-function
related: []
formulas:
  - "\\pi \\text{ rad} = 180°"
  - "l = |\\alpha| r"
  - "S = \\frac{1}{2} |\\alpha| r^2"
common_mistakes:
  - mistake: "角度制和弧度制混用"
    correction: "在同一个表达式中不能混用角度和弧度，如 α = 30° 不能写成 α = π/6 + 2kπ"
applied_in:
  - textbook: required-1
    chapters: [5]
```

**trig-function.yml:**
```yaml
id: trig-function
name: 三角函数的定义
category: 三角函数
description: |
  设角 α 的终边与单位圆交于点 P(x, y)，则：
  sin α = y，cos α = x，tan α = y/x（x≠0）。
  各象限符号：一全正、二正弦、三正切、四余弦。
  同角基本关系：sin²α + cos²α = 1，tan α = sin α / cos α。
prerequisites:
  - angle-concept
  - function-concept
follow_ups:
  - trig-identity
  - trig-graph
related:
  - function-properties
formulas:
  - "\\sin \\alpha = y, \\quad \\cos \\alpha = x, \\quad \\tan \\alpha = \\frac{y}{x}"
  - "\\sin^2 \\alpha + \\cos^2 \\alpha = 1"
  - "\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}"
common_mistakes:
  - mistake: "忘记 tan α 的定义域要求 cos α ≠ 0"
    correction: "tan α = sin α / cos α，当 cos α = 0 时 tan α 无意义"
applied_in:
  - textbook: required-1
    chapters: [5]
```

**trig-identity.yml:**
```yaml
id: trig-identity
name: 三角恒等变换
category: 三角函数
description: |
  诱导公式：将任意角的三角函数转化为锐角三角函数。
  核心口诀："奇变偶不变，符号看象限"。
  和差角公式：
  sin(α±β) = sin α cos β ± cos α sin β
  cos(α±β) = cos α cos β ∓ sin α sin β
  二倍角公式：
  sin 2α = 2 sin α cos α
  cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α
prerequisites:
  - trig-function
follow_ups: []
related:
  - trig-function
formulas:
  - "\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta"
  - "\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta"
  - "\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha"
  - "\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha"
common_mistakes:
  - mistake: "混淆 cos(α+β) 展开式中的符号"
    correction: "cos(α+β) = cosαcosβ - sinαsinβ（中间是减号）"
applied_in:
  - textbook: required-1
    chapters: [5]
```

**trig-graph.yml:**
```yaml
id: trig-graph
name: 三角函数图像与性质
category: 三角函数
description: |
  y = sin x：周期 2π，值域 [-1, 1]，奇函数。
  y = cos x：周期 2π，值域 [-1, 1]，偶函数。
  y = tan x：周期 π，值域 R，奇函数，有无穷间断点。
  y = A sin(ωx + φ) + B：振幅 A，周期 2π/|ω|，相移 -φ/ω，上下平移 B。
prerequisites:
  - trig-function
  - function-properties
follow_ups: []
related:
  - trig-function
  - trig-identity
formulas:
  - "T = \\frac{2\\pi}{|\\omega|}"
  - "y = A\\sin(\\omega x + \\varphi) + B"
common_mistakes:
  - mistake: "混淆周期公式中的 ω 的正负"
    correction: "周期 T = 2π/|ω|，ω 取绝对值"
applied_in:
  - textbook: required-1
    chapters: [5]
```

- [ ] **Step 2: 创建 chapter-05/section-01/ 内容（角的概念与弧度制）**

创建 2 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - angle-concept
source: "自编"
references: "课标5.1.1"
---

**题目：** 将下列角度化为弧度：(1) $75°$；(2) $-210°$。

---

**解答：**

**第1步：** 角度转弧度
> 📌 运用知识点：角的概念与弧度制

$75° = 75 \times \frac{\pi}{180} = \frac{75\pi}{180} = \frac{5\pi}{12}$

**第2步：** 负角度转弧度
> 📌 运用知识点：角的概念与弧度制

$-210° = -210 \times \frac{\pi}{180} = -\frac{210\pi}{180} = -\frac{7\pi}{6}$
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - angle-concept
source: "自编"
references: "课标5.1.1"
---

**题目：** 已知扇形的半径为 $6$ cm，圆心角为 $\frac{2\pi}{3}$ rad，求扇形的弧长和面积。

---

**解答：**

**第1步：** 求弧长
> 📌 运用知识点：角的概念与弧度制

$l = |\alpha| r = \frac{2\pi}{3} \times 6 = 4\pi$ cm

**第2步：** 求面积
> 📌 运用知识点：角的概念与弧度制

$S = \frac{1}{2} |\alpha| r^2 = \frac{1}{2} \times \frac{2\pi}{3} \times 36 = 12\pi$ cm²
```

- [ ] **Step 3: 创建 chapter-05/section-02/ 内容（三角函数定义）**

创建 3 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - trig-function
source: "自编"
references: "课标5.2.1"
---

**题目：** 已知角 $\alpha$ 的终边过点 $P(3, -4)$，求 $\sin\alpha$、$\cos\alpha$、$\tan\alpha$。

---

**解答：**

**第1步：** 求 $r$
> 📌 运用知识点：三角函数的定义

$r = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

**第2步：** 求三角函数值
> 📌 运用知识点：三角函数的定义

$\sin\alpha = \frac{y}{r} = \frac{-4}{5} = -\frac{4}{5}$

$\cos\alpha = \frac{x}{r} = \frac{3}{5}$

$\tan\alpha = \frac{y}{x} = \frac{-4}{3} = -\frac{4}{3}$
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - trig-function
source: "自编"
references: "课标5.2.1"
---

**题目：** 已知 $\sin\alpha = \frac{3}{5}$，$\alpha$ 为第二象限角，求 $\cos\alpha$ 和 $\tan\alpha$。

---

**解答：**

**第1步：** 利用基本关系求 $\cos\alpha$
> 📌 运用知识点：三角函数的定义

$\sin^2\alpha + \cos^2\alpha = 1$

$\cos^2\alpha = 1 - \sin^2\alpha = 1 - \frac{9}{25} = \frac{16}{25}$

$\cos\alpha = \pm\frac{4}{5}$

**第2步：** 确定符号
> 📌 运用知识点：三角函数的定义

因为 $\alpha$ 为第二象限角，$\cos\alpha < 0$，

所以 $\cos\alpha = -\frac{4}{5}$。

**第3步：** 求 $\tan\alpha$
> 📌 运用知识点：三角函数的定义

$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{3}{5}}{-\frac{4}{5}} = -\frac{3}{4}$
```

**exercise-3.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 2
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - trig-function
source: "自编"
references: "课标5.2.1"
---

**题目：** 化简：$\frac{\sin(\pi - \alpha) \cdot \cos(2\pi - \alpha)}{\tan(-\alpha + \pi)}$。

---

**解答：**

**第1步：** 利用诱导公式化简各项
> 📌 运用知识点：三角函数的定义

$\sin(\pi - \alpha) = \sin\alpha$

$\cos(2\pi - \alpha) = \cos(-\alpha) = \cos\alpha$

$\tan(-\alpha + \pi) = \tan(\pi - \alpha) = -\tan\alpha = -\frac{\sin\alpha}{\cos\alpha}$

**第2步：** 代入化简
> 📌 运用知识点：三角恒等变换

原式 $= \frac{\sin\alpha \cdot \cos\alpha}{-\frac{\sin\alpha}{\cos\alpha}} = \frac{\sin\alpha \cdot \cos\alpha \cdot \cos\alpha}{-\sin\alpha} = -\cos^2\alpha$
```

- [ ] **Step 4: 创建 chapter-05/section-03/ 内容（三角函数图像与性质）**

创建 2 道习题 + 1 道例题：

**exercise-1.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - trig-graph
source: "自编"
references: "课标5.3.1"
---

**题目：** 求函数 $y = 3\sin(2x + \frac{\pi}{6})$ 的振幅、周期和初相。

---

**解答：**

**第1步：** 对照标准形式
> 📌 运用知识点：三角函数图像与性质

$y = A\sin(\omega x + \varphi) + B$ 中，

$A = 3$（振幅），$\omega = 2$，$\varphi = \frac{\pi}{6}$（初相），$B = 0$。

**第2步：** 计算周期
> 📌 运用知识点：三角函数图像与性质

$T = \frac{2\pi}{|\omega|} = \frac{2\pi}{2} = \pi$

所以振幅为 $3$，周期为 $\pi$，初相为 $\frac{\pi}{6}$。
```

**exercise-2.md:**
```markdown
---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - trig-graph
  - trig-function
source: "自编"
references: "课标5.3.1"
---

**题目：** 求函数 $y = 2\sin(2x - \frac{\pi}{3})$ 的单调递增区间。

---

**解答：**

**第1步：** 利用 $\sin$ 的单调性
> 📌 运用知识点：三角函数图像与性质

$y = \sin t$ 在 $[-\frac{\pi}{2} + 2k\pi, \frac{\pi}{2} + 2k\pi]$ 上单调递增。

**第2步：** 令 $t = 2x - \frac{\pi}{3}$
> 📌 运用知识点：三角函数图像与性质

$-\frac{\pi}{2} + 2k\pi \leq 2x - \frac{\pi}{3} \leq \frac{\pi}{2} + 2k\pi$

$-\frac{\pi}{2} + \frac{\pi}{3} + 2k\pi \leq 2x \leq \frac{\pi}{2} + \frac{\pi}{3} + 2k\pi$

$-\frac{\pi}{6} + 2k\pi \leq 2x \leq \frac{5\pi}{6} + 2k\pi$

$-\frac{\pi}{12} + k\pi \leq x \leq \frac{5\pi}{12} + k\pi$

单调递增区间为 $\left[-\frac{\pi}{12} + k\pi, \frac{5\pi}{12} + k\pi\right]$（$k \in \mathbb{Z}$）。
```

- [ ] **Step 5: 运行构建脚本和测试验证**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npm run validate
npm test
```

Expected: 全部通过。此时必修一 5 章内容全部录入完成。

- [ ] **Step 6: 提交**

```bash
git add src/content/
git commit -m "content(required-1/ch5): 添加第五章全部知识点和内容"
```

---

### Task 6: 更新知识图谱关系 + 验证完整性

**Files:**
- Modify: 所有已有 knowledge-points YAML 文件（补全 cross-references）

- [ ] **Step 1: 检查并补全知识点间的双向关系**

确保所有 prerequisite/follow_up 关系双向一致：
- `set-concept` ↔ `set-representation` ↔ `set-operations`
- `inequality-properties` → `quadratic-inequality` → `basic-inequality`
- `quadratic-equation` ↔ `quadratic-function`
- `function-concept` → `function-properties` → `exponential-function` → `logarithmic-function`
- `angle-concept` → `trig-function` → `trig-identity`
- `trig-function` ↔ `trig-graph`

- [ ] **Step 2: 运行全部校验**

```bash
cd ~/Projects/pep-math
npm run validate
npm run build:scripts
npm run report
npm test
```

Expected: 无孤立节点，无循环依赖，双向关系完整。

- [ ] **Step 3: 提交**

```bash
git add src/content/knowledge-points/
git commit -m "content(kp): 补全必修一全部知识点双向关系"
```

---

## Milestone M4: 核心页面

### Task 7: MathFormula 组件 — KaTeX 渲染

**Files:**
- Create: `src/components/MathFormula.tsx`
- Create: `tests/components/MathFormula.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/MathFormula.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MathFormula from '../../src/components/MathFormula';

describe('MathFormula', () => {
  it('renders inline math', () => {
    render(<MathFormula formula="x^2 + 1" displayMode={false} />);
    const el = document.querySelector('.katex');
    expect(el).toBeTruthy();
  });

  it('renders display math', () => {
    render(<MathFormula formula="\\sum_{i=1}^{n} i" displayMode={true} />);
    const el = document.querySelector('.katex-display');
    expect(el).toBeTruthy();
  });

  it('handles invalid LaTeX gracefully', () => {
    render(<MathFormula formula="\\invalid" displayMode={false} />);
    // Should render something (error message from KaTeX) without crashing
    expect(document.querySelector('.katex-error, .katex')).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/MathFormula.tsx
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
}

export default function MathFormula({ formula, displayMode = false }: MathFormulaProps) {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    errorColor: '#cc0000',
  });

  if (displayMode) {
    return <div className="katex-display" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
```

- [ ] **Step 3: 运行测试**

```bash
cd ~/Projects/pep-math
npx vitest run tests/components/MathFormula.test.tsx
```

- [ ] **Step 4: 提交**

```bash
git add src/components/MathFormula.tsx tests/components/MathFormula.test.tsx
git commit -m "feat(components): add MathFormula component with KaTeX rendering"
```

---

### Task 8: DifficultyBadge 组件

**Files:**
- Create: `src/components/DifficultyBadge.tsx`
- Create: `tests/components/DifficultyBadge.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/DifficultyBadge.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DifficultyBadge from '../../src/components/DifficultyBadge';

describe('DifficultyBadge', () => {
  it('renders basic with green color', () => {
    render(<DifficultyBadge difficulty="basic" />);
    const badge = screen.getByText('基础');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('green');
  });

  it('renders medium with yellow color', () => {
    render(<DifficultyBadge difficulty="medium" />);
    const badge = screen.getByText('中等');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('yellow');
  });

  it('renders hard with red color', () => {
    render(<DifficultyBadge difficulty="hard" />);
    const badge = screen.getByText('拔尖');
    expect(badge).toBeTruthy();
    expect(badge.className).toContain('red');
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/DifficultyBadge.tsx
const difficultyMap = {
  basic: { label: '基础', color: 'bg-green-100 text-green-800' },
  medium: { label: '中等', color: 'bg-yellow-100 text-yellow-800' },
  hard: { label: '拔尖', color: 'bg-red-100 text-red-800' },
};

interface DifficultyBadgeProps {
  difficulty: 'basic' | 'medium' | 'hard';
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const { label, color } = difficultyMap[difficulty];
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${color}`}>
      {label}
    </span>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/DifficultyBadge.test.tsx
git add src/components/DifficultyBadge.tsx tests/components/DifficultyBadge.test.tsx
git commit -m "feat(components): add DifficultyBadge component"
```

---

### Task 9: ExerciseCard 组件

**Files:**
- Create: `src/components/ExerciseCard.tsx`
- Create: `tests/components/ExerciseCard.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/ExerciseCard.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExerciseCard from '../../src/components/ExerciseCard';

const mockExercise = {
  id: 'required-1-ch1-s1-ex1',
  textbook: 'required-1',
  chapter: 1,
  section: 1,
  number: 1,
  difficulty: 'basic' as const,
  knowledge_points: ['set-concept'],
  question: '用列举法表示集合 $A = \\{x | x < 5, x \\in \\mathbb{Z}^+\\}$',
  steps: [
    { title: '确定元素', knowledge_point: 'set-concept', content: '小于5的正整数为1,2,3,4' },
  ],
  warning: '注意互异性',
  summary: '列举法基本应用',
};

describe('ExerciseCard', () => {
  it('renders exercise question', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    expect(screen.getByText(/用列举法表示集合/)).toBeTruthy();
  });

  it('renders difficulty badge', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    expect(screen.getByText('基础')).toBeTruthy();
  });

  it('renders knowledge point links', () => {
    render(<ExerciseCard exercise={mockExercise} />);
    const link = screen.getByText('set-concept');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toContain('/knowledge/set-concept');
  });

  it('shows solution steps when expanded', () => {
    render(<ExerciseCard exercise={mockExercise} defaultExpanded={true} />);
    expect(screen.getByText(/确定元素/)).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/ExerciseCard.tsx
import { useState } from 'react';
import DifficultyBadge from './DifficultyBadge';
import MathFormula from './MathFormula';

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
  difficulty: 'basic' | 'medium' | 'hard';
  knowledge_points: string[];
  question: string;
  steps: ExerciseStep[];
  warning?: string;
  summary?: string;
}

interface ExerciseCardProps {
  exercise: ExerciseData;
  defaultExpanded?: boolean;
}

export default function ExerciseCard({ exercise, defaultExpanded = false }: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-gray-500">
          第{exercise.chapter}章 第{exercise.section}节 第{exercise.number}题
        </span>
        <DifficultyBadge difficulty={exercise.difficulty} />
      </div>

      <div className="mb-3">
        <MathFormula formula={exercise.question} />
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {exercise.knowledge_points.map((kp) => (
          <a
            key={kp}
            href={`/pep-math/knowledge/${kp}`}
            className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded hover:bg-blue-100"
          >
            {kp}
          </a>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-600 hover:underline"
      >
        {expanded ? '收起解答' : '查看解答'}
      </button>

      {expanded && (
        <div className="mt-3 border-t pt-3">
          {exercise.steps.map((step, i) => (
            <div key={i} className="mb-3">
              <div className="font-medium text-sm">{step.title}</div>
              <div className="text-xs text-gray-500 mb-1">
                📌 运用知识点：
                <a href={`/pep-math/knowledge/${step.knowledge_point}`} className="text-blue-500">
                  {step.knowledge_point}
                </a>
              </div>
              <div className="text-sm">
                <MathFormula formula={step.content} />
              </div>
            </div>
          ))}
          {exercise.warning && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2 text-sm">
              ⚠️ {exercise.warning}
            </div>
          )}
          {exercise.summary && (
            <div className="bg-green-50 border border-green-200 rounded p-2 mt-2 text-sm">
              💡 {exercise.summary}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/ExerciseCard.test.tsx
git add src/components/ExerciseCard.tsx tests/components/ExerciseCard.test.tsx
git commit -m "feat(components): add ExerciseCard component with expandable solution"
```

---

### Task 10: SolutionSteps 组件

**Files:**
- Create: `src/components/SolutionSteps.tsx`
- Create: `tests/components/SolutionSteps.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/SolutionSteps.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SolutionSteps from '../../src/components/SolutionSteps';

const mockSteps = [
  { title: '第一步', knowledge_point: 'set-concept', content: '确定集合元素' },
  { title: '第二步', knowledge_point: 'set-operations', content: '求交集' },
];

describe('SolutionSteps', () => {
  it('renders all steps', () => {
    render(<SolutionSteps steps={mockSteps} />);
    expect(screen.getByText('第一步')).toBeTruthy();
    expect(screen.getByText('第二步')).toBeTruthy();
  });

  it('renders knowledge point links', () => {
    render(<SolutionSteps steps={mockSteps} />);
    const links = document.querySelectorAll('a[href*="/knowledge/"]');
    expect(links.length).toBe(2);
  });

  it('renders warning when provided', () => {
    render(<SolutionSteps steps={mockSteps} warning="注意互异性" />);
    expect(screen.getByText(/注意互异性/)).toBeTruthy();
  });

  it('renders summary when provided', () => {
    render(<SolutionSteps steps={mockSteps} summary="方法总结" />);
    expect(screen.getByText(/方法总结/)).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/SolutionSteps.tsx
import MathFormula from './MathFormula';

interface Step {
  title: string;
  knowledge_point: string;
  content: string;
}

interface SolutionStepsProps {
  steps: Step[];
  warning?: string;
  summary?: string;
}

export default function SolutionSteps({ steps, warning, summary }: SolutionStepsProps) {
  return (
    <div className="solution-steps">
      {steps.map((step, i) => (
        <div key={i} className="mb-4 pl-4 border-l-2 border-blue-200">
          <div className="font-medium text-gray-800">{step.title}</div>
          <div className="text-xs text-blue-600 mb-1">
            📌 运用知识点：
            <a
              href={`/pep-math/knowledge/${step.knowledge_point}`}
              className="hover:underline"
            >
              {step.knowledge_point}
            </a>
          </div>
          <div className="text-sm text-gray-700">
            <MathFormula formula={step.content} />
          </div>
        </div>
      ))}
      {warning && (
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
          <span className="font-medium">⚠️ 易错提醒：</span>
          <span className="text-sm">{warning}</span>
        </div>
      )}
      {summary && (
        <div className="bg-green-50 border border-green-200 rounded p-3 mt-3">
          <span className="font-medium">💡 解题思路总结：</span>
          <span className="text-sm">{summary}</span>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/SolutionSteps.test.tsx
git add src/components/SolutionSteps.tsx tests/components/SolutionSteps.test.tsx
git commit -m "feat(components): add SolutionSteps component"
```

---

### Task 11: RelatedExercises 组件

**Files:**
- Create: `src/components/RelatedExercises.tsx`
- Create: `tests/components/RelatedExercises.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/RelatedExercises.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RelatedExercises from '../../src/components/RelatedExercises';

const mockRelated = {
  sameKnowledge: [
    { id: 'required-1-ch1-s1-ex2', textbook: 'required-1', chapter: 1, section: 2, number: 1, difficulty: 'medium' as const, knowledge_points: ['set-concept'] },
  ],
  sameType: [
    { id: 'required-1-ch1-s1-ex3', textbook: 'required-1', chapter: 1, section: 1, number: 3, difficulty: 'hard' as const, knowledge_points: ['set-operations'] },
  ],
};

describe('RelatedExercises', () => {
  it('renders same knowledge section', () => {
    render(<RelatedExercises related={mockRelated} />);
    expect(screen.getByText(/同知识点/)).toBeTruthy();
  });

  it('renders same type section', () => {
    render(<RelatedExercises related={mockRelated} />);
    expect(screen.getByText(/同题型/)).toBeTruthy();
  });

  it('renders exercise links', () => {
    render(<RelatedExercises related={mockRelated} />);
    const links = document.querySelectorAll('a');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it('shows empty message when no related exercises', () => {
    const empty = { sameKnowledge: [], sameType: [] };
    render(<RelatedExercises related={empty} />);
    expect(screen.getByText(/暂无/)).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/RelatedExercises.tsx
import DifficultyBadge from './DifficultyBadge';

interface ExerciseMeta {
  id: string;
  textbook: string;
  chapter: number;
  section: number;
  number: number;
  difficulty: 'basic' | 'medium' | 'hard';
  knowledge_points: string[];
}

interface RelatedData {
  sameKnowledge: ExerciseMeta[];
  sameType: ExerciseMeta[];
}

interface RelatedExercisesProps {
  related: RelatedData;
}

export default function RelatedExercises({ related }: RelatedExercisesProps) {
  const hasAny = related.sameKnowledge.length > 0 || related.sameType.length > 0;

  if (!hasAny) {
    return <p className="text-gray-400 text-sm">暂无关联习题</p>;
  }

  return (
    <div className="space-y-4">
      {related.sameKnowledge.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">🔗 同知识点、不同题型</h4>
          <ul className="space-y-1">
            {related.sameKnowledge.map((ex) => (
              <li key={ex.id} className="flex items-center gap-2">
                <a
                  href={`#exercise-${ex.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  第{ex.chapter}章 第{ex.section}节 第{ex.number}题
                </a>
                <DifficultyBadge difficulty={ex.difficulty} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.sameType.length > 0 && (
        <div>
          <h4 className="font-medium text-sm mb-2">🔄 同题型、不同知识点</h4>
          <ul className="space-y-1">
            {related.sameType.map((ex) => (
              <li key={ex.id} className="flex items-center gap-2">
                <a
                  href={`#exercise-${ex.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  第{ex.chapter}章 第{ex.section}节 第{ex.number}题
                </a>
                <DifficultyBadge difficulty={ex.difficulty} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/RelatedExercises.test.tsx
git add src/components/RelatedExercises.tsx tests/components/RelatedExercises.test.tsx
git commit -m "feat(components): add RelatedExercises component"
```

---

### Task 12: Navigation 组件

**Files:**
- Create: `src/components/Navigation.tsx`
- Create: `tests/components/Navigation.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/Navigation.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../../src/components/Navigation';

const mockChapters = [
  {
    number: 1,
    title: '集合与常用逻辑用语',
    sections: [
      { number: 1, title: '集合的概念' },
      { number: 2, title: '常用逻辑用语' },
    ],
  },
  {
    number: 2,
    title: '一元二次函数/方程/不等式',
    sections: [
      { number: 1, title: '等式与不等式' },
    ],
  },
];

describe('Navigation', () => {
  it('renders chapter titles', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    expect(screen.getByText('集合与常用逻辑用语')).toBeTruthy();
  });

  it('renders section links', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    const links = document.querySelectorAll('a[href*="/section/"]');
    expect(links.length).toBe(3); // 2 sections in ch1 + 1 in ch2
  });

  it('highlights current section', () => {
    render(<Navigation textbookId="required-1" chapters={mockChapters} currentChapter={1} currentSection={1} />);
    const currentLink = screen.getByText('集合的概念');
    expect(currentLink.className).toContain('font-bold');
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/Navigation.tsx
interface Section {
  number: number;
  title: string;
}

interface Chapter {
  number: number;
  title: string;
  sections: Section[];
}

interface NavigationProps {
  textbookId: string;
  chapters: Chapter[];
  currentChapter: number;
  currentSection: number;
}

export default function Navigation({ textbookId, chapters, currentChapter, currentSection }: NavigationProps) {
  return (
    <nav className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-sm mb-2">章节导航</h3>
      {chapters.map((chapter) => (
        <div key={chapter.number} className="mb-2">
          <div className={`text-sm ${chapter.number === currentChapter ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
            第{chapter.number}章 {chapter.title}
          </div>
          <ul className="ml-4 mt-1 space-y-0.5">
            {chapter.sections.map((section) => {
              const isCurrent = chapter.number === currentChapter && section.number === currentSection;
              return (
                <li key={section.number}>
                  <a
                    href={`/pep-math/textbook/${textbookId}/chapter/${chapter.number}/section/${section.number}`}
                    className={`text-sm ${isCurrent ? 'font-bold text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
                  >
                    {section.number}. {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/Navigation.test.tsx
git add src/components/Navigation.tsx tests/components/Navigation.test.tsx
git commit -m "feat(components): add Navigation component for chapter/section browsing"
```

---

### Task 13: build-section-data.ts 脚本

**Files:**
- Create: `scripts/build-section-data.ts`
- Create: `tests/scripts/build-section-data.test.ts`

这个脚本为每个 section 聚合数据（定义、例题、习题列表），输出到 `public/data/sections/` 供页面加载。

- [ ] **Step 1: 写测试**

```typescript
// tests/scripts/build-section-data.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { buildSectionData } from '../../scripts/build-section-data';

const tmpDir = path.join(__dirname, '..', '__tmp_section_test');

beforeEach(() => {
  fs.mkdirSync(path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01'), { recursive: true });

  // Write exercise
  fs.writeFileSync(
    path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01', 'exercise-1.md'),
    `---
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

**题目：** 测试题目

---

**解答：**

**第1步：** 步骤一
> 📌 运用知识点：集合的概念

解答内容
`
  );

  // Write definition
  fs.writeFileSync(
    path.join(tmpDir, 'textbooks', 'required-1', 'chapter-01', 'section-01', 'definition-1.md'),
    `---
type: definition
textbook: required-1
chapter: 1
section: 1
name: 集合
related_knowledge_points:
  - set-concept
---

**定义（精确表述）：** 测试定义

**通俗解释：** 通俗解释
`
  );
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe('buildSectionData', () => {
  it('aggregates exercises and definitions per section', () => {
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey]).toBeDefined();
    expect(result[sectionKey].exercises.length).toBe(1);
    expect(result[sectionKey].definitions.length).toBe(1);
  });

  it('generates correct exercise IDs', () => {
    const result = buildSectionData(path.join(tmpDir, 'textbooks'));
    const sectionKey = 'required-1/ch1/s1';
    expect(result[sectionKey].exercises[0].id).toBe('required-1-ch1-s1-ex1');
  });
});
```

- [ ] **Step 2: 实现脚本**

```typescript
// scripts/build-section-data.ts
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
              id: `${textbook}-ch${chapterNum}-s${sectionNum}-ex${data.number}`,
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
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/scripts/build-section-data.test.ts
git add scripts/build-section-data.ts tests/scripts/build-section-data.test.ts
git commit -m "feat(scripts): add build-section-data for section page aggregation"
```

---

### Task 14: 教材浏览页 `/textbook/[id]`

**Files:**
- Create: `src/pages/textbook/[id].astro`

- [ ] **Step 1: 创建动态路由页面**

```astro
---
// src/pages/textbook/[id].astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import fs from 'fs';
import path from 'path';

export function getStaticPaths() {
  const textbooksDir = path.resolve('src/content/textbooks');
  const ids = fs.readdirSync(textbooksDir).filter(f =>
    fs.statSync(path.join(textbooksDir, f)).isDirectory()
  );

  const textbookNames: Record<string, string> = {
    'required-1': '必修 第一册',
    'required-2': '必修 第二册',
    'selective-1': '选择性必修 第一册',
    'selective-2': '选择性必修 第二册',
    'selective-3': '选择性必修 第三册',
  };

  return ids.map(id => ({
    params: { id },
    props: { name: textbookNames[id] || id },
  }));
}

const { id, name } = Astro.props;
const textbooksDir = path.resolve('src/content/textbooks');
const textbookDir = path.join(textbooksDir, id);

// Read chapter structure
const chapters = fs.readdirSync(textbookDir)
  .filter(f => fs.statSync(path.join(textbookDir, f)).isDirectory())
  .sort()
  .map(chapterDir => {
    const chapterNum = parseInt(chapterDir.replace('chapter-', ''), 10);
    const chapterPath = path.join(textbookDir, chapterDir);
    const sections = fs.readdirSync(chapterPath)
      .filter(f => fs.statSync(path.join(chapterPath, f)).isDirectory())
      .sort()
      .map(sectionDir => {
        const sectionNum = parseInt(sectionDir.replace('section-', ''), 10);
        return { number: sectionNum };
      });
    return { number: chapterNum, sections };
  });

// Chapter titles mapping
const chapterTitles: Record<string, string[]> = {
  'required-1': [
    '', // 0-index placeholder
    '集合与常用逻辑用语',
    '一元二次函数、方程和不等式',
    '函数的概念与性质',
    '指数函数与对数函数',
    '三角函数',
  ],
};

const titles = chapterTitles[id] || [];
---
<BaseLayout title={name}>
  <h1 class="text-2xl font-bold mb-4">{name}</h1>

  <div class="space-y-6">
    {chapters.map((chapter) => (
      <div class="border rounded-lg p-4">
        <h2 class="text-lg font-bold mb-2">
          第{chapter.number}章 {titles[chapter.number] || ''}
        </h2>
        <ul class="space-y-1 ml-4">
          {chapter.sections.map((section) => (
            <li>
              <a
                href={`/pep-math/textbook/${id}/chapter/${chapter.number}/section/${section.number}`}
                class="text-blue-600 hover:underline"
              >
                第{section.number}节
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</BaseLayout>
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

Expected: 构建成功，`/pep-math/textbook/required-1/` 页面可访问

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/
git commit -m "feat(pages): add textbook browsing page /textbook/[id]"
```

---

### Task 15: 节详情页 `/textbook/[id]/chapter/[n]/section/[n]`

**Files:**
- Create: `src/pages/textbook/[id]/chapter/[n]/section/[n].astro`
- Create: `scripts/build-section-data.ts` (已在 Task 13 创建)

- [ ] **Step 1: 创建节详情页面**

```astro
---
// src/pages/textbook/[id]/chapter/[n]/section/[n].astro
import BaseLayout from '../../../../../layouts/BaseLayout.astro';
import Navigation from '../../../../../components/Navigation';
import fs from 'fs';
import path from 'path';

export function getStaticPaths() {
  const textbooksDir = path.resolve('src/content/textbooks');
  const paths: any[] = [];

  const textbooks = fs.readdirSync(textbooksDir).filter(f =>
    fs.statSync(path.join(textbooksDir, f)).isDirectory()
  );

  for (const textbook of textbooks) {
    const textbookDir = path.join(textbooksDir, textbook);
    const chapters = fs.readdirSync(textbookDir).filter(f =>
      fs.statSync(path.join(textbookDir, f)).isDirectory()
    );
    for (const chapterDir of chapters) {
      const chapterPath = path.join(textbookDir, chapterDir);
      const chapterNum = parseInt(chapterDir.replace('chapter-', ''), 10);
      const sections = fs.readdirSync(chapterPath).filter(f =>
        fs.statSync(path.join(chapterPath, f)).isDirectory()
      );
      for (const sectionDir of sections) {
        const sectionNum = parseInt(sectionDir.replace('section-', ''), 10);
        paths.push({
          params: { id: textbook, n: [String(chapterNum), String(sectionNum)] },
        });
      }
    }
  }
  return paths;
}

const { id } = Astro.params;
const [chapterStr, sectionStr] = Astro.params.n as string[];
const chapterNum = parseInt(chapterStr, 10);
const sectionNum = parseInt(sectionStr, 10);

// Load section data from pre-built JSON
const sectionDataFile = path.resolve(
  `public/data/sections/${id}-ch${chapterNum}-s${sectionNum}.json`
);
const sectionData = JSON.parse(fs.readFileSync(sectionDataFile, 'utf-8'));

// Build navigation data
const textbooksDir = path.resolve('src/content/textbooks');
const textbookDir = path.join(textbooksDir, id!);
const allChapters = fs.readdirSync(textbookDir)
  .filter(f => fs.statSync(path.join(textbookDir, f)).isDirectory())
  .sort()
  .map(chDir => {
    const chNum = parseInt(chDir.replace('chapter-', ''), 10);
    const chPath = path.join(textbookDir, chDir);
    const sects = fs.readdirSync(chPath)
      .filter(f => fs.statSync(path.join(chPath, f)).isDirectory())
      .sort()
      .map(sDir => ({
        number: parseInt(sDir.replace('section-', ''), 10),
        title: '',
      }));
    return { number: chNum, title: '', sections: sects };
  });
---
<BaseLayout title={`第${chapterNum}章 第${sectionNum}节`}>
  <div class="flex gap-6">
    <!-- Sidebar Navigation -->
    <aside class="w-64 flex-shrink-0 hidden md:block">
      <Navigation
        textbookId={id!}
        chapters={allChapters}
        currentChapter={chapterNum}
        currentSection={sectionNum}
      />
    </aside>

    <!-- Main Content -->
    <div class="flex-1">
      <h1 class="text-2xl font-bold mb-4">
        第{chapterNum}章 第{sectionNum}节
      </h1>

      <!-- Definitions -->
      {sectionData.definitions.length > 0 && (
        <section class="mb-6">
          <h2 class="text-lg font-bold mb-2 border-b pb-1">📖 定义</h2>
          <ul class="space-y-2">
            {sectionData.definitions.map((def: any) => (
              <li class="border rounded p-3">
                <span class="font-medium">{def.name}</span>
                <div class="flex gap-1 mt-1">
                  {def.related_knowledge_points.map((kp: string) => (
                    <a href={`/pep-math/knowledge/${kp}`} class="text-xs text-blue-600 hover:underline">
                      {kp}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <!-- Exercises (loaded from JSON) -->
      {sectionData.exercises.length > 0 && (
        <section class="mb-6">
          <h2 class="text-lg font-bold mb-2 border-b pb-1">📝 习题</h2>
          <div id="exercises-container" data-section-id={`${id}-ch${chapterNum}-s${sectionNum}`}>
            {sectionData.exercises.map((ex: any) => (
              <div id={`exercise-${ex.id}`} class="mb-2 text-sm text-gray-600">
                第{ex.number}题 —
                <span class={`px-1 rounded text-xs ${
                  ex.difficulty === 'basic' ? 'bg-green-100 text-green-800' :
                  ex.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {ex.difficulty === 'basic' ? '基础' : ex.difficulty === 'medium' ? '中等' : '拔尖'}
                </span>
              </div>
            ))}
          </div>
          <p class="text-xs text-gray-400 mt-2">
            💡 习题详细内容通过 JSON 按需加载，点击题目可展开解答。
          </p>
        </section>
      )}

      <!-- Examples -->
      {sectionData.examples.length > 0 && (
        <section class="mb-6">
          <h2 class="text-lg font-bold mb-2 border-b pb-1">📚 例题</h2>
          <ul class="space-y-2">
            {sectionData.examples.map((ex: any) => (
              <li class="text-sm text-gray-600">
                例题 {ex.number}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  </div>

  <!-- Client-side: load full exercise JSON on click -->
  <script define:vars={{ base: '/pep-math' }}>
    document.querySelectorAll('[id^="exercise-"]').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', async () => {
        const exId = el.id.replace('exercise-', '');
        if (el.querySelector('.exercise-detail')) {
          el.querySelector('.exercise-detail')!.remove();
          return;
        }
        try {
          const resp = await fetch(`${base}/data/exercises/${exId}.json`);
          const data = await resp.json();
          const detail = document.createElement('div');
          detail.className = 'exercise-detail mt-2 p-3 bg-gray-50 rounded text-sm';
          detail.innerHTML = `<div>${data.question}</div>`;
          if (data.warning) {
            detail.innerHTML += `<div class="mt-2 text-yellow-700">⚠️ ${data.warning}</div>`;
          }
          el.appendChild(detail);
        } catch (e) {
          console.error('Failed to load exercise:', e);
        }
      });
    });
  </script>
</BaseLayout>
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/
git commit -m "feat(pages): add section detail page with JSON exercise loading"
```

---

### Task 16: 知识点列表页 `/knowledge`

**Files:**
- Create: `src/pages/knowledge/index.astro`

- [ ] **Step 1: 创建知识点列表页面**

```astro
---
// src/pages/knowledge/index.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const knowledgePoints = await getCollection('knowledge-points');

// Group by category
const categories = new Map<string, typeof knowledgePoints>();
for (const kp of knowledgePoints) {
  const cat = kp.data.category;
  if (!categories.has(cat)) categories.set(cat, []);
  categories.get(cat)!.push(kp);
}
---
<BaseLayout title="知识点">
  <h1 class="text-2xl font-bold mb-4">知识点列表</h1>
  <p class="text-gray-600 mb-6">共 {knowledgePoints.length} 个知识点</p>

  <!-- Filter by category -->
  <div class="flex flex-wrap gap-2 mb-6">
    <button class="category-filter px-3 py-1 rounded bg-blue-600 text-white text-sm" data-category="all">
      全部
    </button>
    {Array.from(categories.keys()).map(cat => (
      <button class="category-filter px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300" data-category={cat}>
        {cat}
      </button>
    ))}
  </div>

  <!-- Knowledge points grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="kp-grid">
    {knowledgePoints.map((kp) => (
      <a
        href={`/pep-math/knowledge/${kp.data.id}`}
        class="kp-card border rounded-lg p-4 hover:shadow transition-shadow"
        data-category={kp.data.category}
      >
        <h3 class="font-bold text-blue-600">{kp.data.name}</h3>
        <span class="text-xs text-gray-400">{kp.data.category}</span>
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">{kp.data.description}</p>
        {kp.data.formulas.length > 0 && (
          <div class="mt-2 text-xs text-gray-400">
            {kp.data.formulas.length} 个公式
          </div>
        )}
      </a>
    ))}
  </div>

  <script>
    document.querySelectorAll('.category-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = (btn as HTMLElement).dataset.category;
        document.querySelectorAll('.category-filter').forEach(b => {
          b.className = b.className.replace('bg-blue-600 text-white', 'bg-gray-200 text-gray-700');
        });
        btn.className = btn.className.replace('bg-gray-200 text-gray-700', 'bg-blue-600 text-white');

        document.querySelectorAll('.kp-card').forEach(card => {
          if (cat === 'all' || (card as HTMLElement).dataset.category === cat) {
            (card as HTMLElement).style.display = '';
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
      });
    });
  </script>
</BaseLayout>
```

- [ ] **Step 2: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge/index.astro
git commit -m "feat(pages): add knowledge point list page with category filter"
```

---

### Task 17: 知识点详情页 `/knowledge/[id]`

**Files:**
- Create: `src/pages/knowledge/[id].astro`

- [ ] **Step 1: 创建知识点详情页面**

```astro
---
// src/pages/knowledge/[id].astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import MathFormula from '../../components/MathFormula';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const knowledgePoints = await getCollection('knowledge-points');
  return knowledgePoints.map((kp) => ({
    params: { id: kp.data.id },
    props: { kp },
  }));
}

const { kp } = Astro.props;
const { data } = kp;

// Load related exercises from pre-built JSON
import fs from 'fs';
import path from 'path';
const exercisesByKpFile = path.resolve(`public/data/exercises-by-kp/${data.id}.json`);
let exercises: any[] = [];
if (fs.existsSync(exercisesByKpFile)) {
  exercises = JSON.parse(fs.readFileSync(exercisesByKpFile, 'utf-8'));
}
---
<BaseLayout title={data.name}>
  <div class="max-w-3xl">
    <!-- Header -->
    <div class="mb-6">
      <span class="text-sm text-gray-400">{data.category}</span>
      <h1 class="text-2xl font-bold">{data.name}</h1>
    </div>

    <!-- Description -->
    <section class="mb-6">
      <h2 class="text-lg font-bold mb-2 border-b pb-1">📖 定义与核心概念</h2>
      <p class="text-gray-700">{data.description}</p>
    </section>

    <!-- Formulas -->
    {data.formulas.length > 0 && (
      <section class="mb-6">
        <h2 class="text-lg font-bold mb-2 border-b pb-1">📐 关键公式</h2>
        <div class="space-y-2">
          {data.formulas.map((formula: string) => (
            <div class="bg-gray-50 rounded p-3 overflow-x-auto">
              <MathFormula formula={formula} displayMode={true} />
            </div>
          ))}
        </div>
      </section>
    )}

    <!-- Knowledge Relations -->
    <section class="mb-6">
      <h2 class="text-lg font-bold mb-2 border-b pb-1">🔗 知识关联</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.prerequisites.length > 0 && (
          <div>
            <h3 class="text-sm font-medium text-gray-500 mb-1">前置知识</h3>
            <ul class="space-y-1">
              {data.prerequisites.map((p: string) => (
                <li>
                  <a href={`/pep-math/knowledge/${p}`} class="text-blue-600 hover:underline text-sm">
                    ← {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.follow_ups.length > 0 && (
          <div>
            <h3 class="text-sm font-medium text-gray-500 mb-1">后续知识</h3>
            <ul class="space-y-1">
              {data.follow_ups.map((f: string) => (
                <li>
                  <a href={`/pep-math/knowledge/${f}`} class="text-blue-600 hover:underline text-sm">
                    {f} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.related.length > 0 && (
          <div>
            <h3 class="text-sm font-medium text-gray-500 mb-1">横向关联</h3>
            <ul class="space-y-1">
              {data.related.map((r: string) => (
                <li>
                  <a href={`/pep-math/knowledge/${r}`} class="text-blue-600 hover:underline text-sm">
                    ↔ {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>

    <!-- Common Mistakes -->
    {data.common_mistakes.length > 0 && (
      <section class="mb-6">
        <h2 class="text-lg font-bold mb-2 border-b pb-1">⚠️ 常见错误</h2>
        <div class="space-y-3">
          {data.common_mistakes.map((cm: any) => (
            <div class="bg-red-50 border border-red-200 rounded p-3">
              <div class="text-sm">
                <span class="font-medium text-red-700">❌ 错误：</span>
                {cm.mistake}
              </div>
              <div class="text-sm mt-1">
                <span class="font-medium text-green-700">✅ 纠正：</span>
                {cm.correction}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    <!-- Related Exercises -->
    {exercises.length > 0 && (
      <section class="mb-6">
        <h2 class="text-lg font-bold mb-2 border-b pb-1">📝 相关习题</h2>
        <p class="text-sm text-gray-500 mb-2">共 {exercises.length} 道习题，按难度排序</p>
        <ul class="space-y-1">
          {exercises.map((ex: any) => (
            <li class="flex items-center gap-2 text-sm">
              <a href={`/pep-math/textbook/${ex.textbook}/chapter/${ex.chapter}/section/${ex.section}`}
                 class="text-blue-600 hover:underline">
                {ex.textbook} 第{ex.chapter}章 第{ex.section}节 第{ex.number}题
              </a>
              <span class={`px-1 rounded text-xs ${
                ex.difficulty === 'basic' ? 'bg-green-100 text-green-800' :
                ex.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {ex.difficulty === 'basic' ? '基础' : ex.difficulty === 'medium' ? '中等' : '拔尖'}
              </span>
            </li>
          ))}
        </ul>
      </section>
    )}
  </div>
</BaseLayout>
```

- [ ] **Step 2: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge/
git commit -m "feat(pages): add knowledge point detail page with formulas, relations, exercises"
```

---

### Task 18: 更新 BaseLayout 导航 + 首页

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: 更新 BaseLayout 添加搜索入口**

在导航栏中添加搜索链接：

```astro
<a href="/pep-math/search">搜索</a>
```

- [ ] **Step 2: 更新首页卡片**

更新首页使其链接到实际存在的页面，展示必修一各章入口和知识点入口。

- [ ] **Step 3: 验证并提交**

```bash
npx astro build
git add src/layouts/ src/pages/index.astro
git commit -m "feat(layout): update navigation and homepage with working links"
```

---

## Milestone M5: 知识图谱可视化（单册）

### Task 19: build-knowledge-graph.ts 增强 — 布局预计算

**Files:**
- Modify: `scripts/build-knowledge-graph.ts`
- Modify: `tests/scripts/build-knowledge-graph.test.ts`

- [ ] **Step 1: 扩展测试**

添加测试验证：
- 输出的 graph JSON 包含 `layout` 字段
- 每个节点有 `x, y` 坐标
- 按教材筛选的子图正确

- [ ] **Step 2: 增强脚本**

在现有 `buildKnowledgeGraph` 函数基础上，添加布局预计算：

```typescript
// 在 build-knowledge-graph.ts 中添加布局计算
interface GraphNode {
  id: string;
  name: string;
  category: string;
  // ... existing fields
  x?: number;  // 预计算布局坐标
  y?: number;
}

// 使用简单的分层布局算法
function computeLayout(nodes: GraphNode[], edges: { source: string; target: string }[]) {
  // 按 category 分组，每组分配一个区域
  const categories = [...new Set(nodes.map(n => n.category))];
  const catWidth = 200;
  const catHeight = 150;

  categories.forEach((cat, ci) => {
    const catNodes = nodes.filter(n => n.category === cat);
    const cols = Math.ceil(Math.sqrt(catNodes.length));
    catNodes.forEach((node, ni) => {
      const row = Math.floor(ni / cols);
      const col = ni % cols;
      node.x = ci * catWidth + col * 80 + 50;
      node.y = row * 80 + 50;
    });
  });
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/scripts/build-knowledge-graph.test.ts
git add scripts/build-knowledge-graph.ts tests/scripts/build-knowledge-graph.test.ts
git commit -m "feat(scripts): add layout pre-computation to knowledge graph builder"
```

---

### Task 20: KnowledgeGraph 组件 — Cytoscape.js

**Files:**
- Create: `src/components/KnowledgeGraph.tsx`
- Create: `tests/components/KnowledgeGraph.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/KnowledgeGraph.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import KnowledgeGraph from '../../src/components/KnowledgeGraph';

const mockGraph = {
  nodes: [
    { id: 'set-concept', name: '集合的概念', category: '集合与逻辑', x: 0, y: 0 },
    { id: 'set-operations', name: '集合的运算', category: '集合与逻辑', x: 100, y: 0 },
  ],
  edges: [
    { source: 'set-concept', target: 'set-operations', type: 'prerequisite' },
  ],
};

describe('KnowledgeGraph', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />
    );
    expect(container.querySelector('#cy')).toBeTruthy();
  });

  it('renders filter buttons for categories', () => {
    const { container } = render(
      <KnowledgeGraph graph={mockGraph} textbookFilter="required-1" />
    );
    expect(container.querySelector('.graph-filters')).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/KnowledgeGraph.tsx
import { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';

interface GraphNode {
  id: string;
  name: string;
  category: string;
  x?: number;
  y?: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

interface KnowledgeGraphProps {
  graph: GraphData;
  textbookFilter?: string;
}

const categoryColors: Record<string, string> = {
  '集合与逻辑': '#3B82F6',
  '函数': '#10B981',
  '不等式': '#F59E0B',
  '方程': '#8B5CF6',
  '三角函数': '#EF4444',
};

export default function KnowledgeGraph({ graph, textbookFilter }: KnowledgeGraphProps) {
  const cyRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [...new Set(graph.nodes.map(n => n.category))];

  useEffect(() => {
    if (!cyRef.current) return;

    const filteredNodes = selectedCategory === 'all'
      ? graph.nodes
      : graph.nodes.filter(n => n.category === selectedCategory);

    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredEdges = graph.edges.filter(
      e => filteredNodeIds.has(e.source) && filteredNodeIds.has(e.target)
    );

    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        ...filteredNodes.map(n => ({
          data: { id: n.id, label: n.name, category: n.category },
          position: { x: n.x || 0, y: n.y || 0 },
        })),
        ...filteredEdges.map(e => ({
          data: { source: e.source, target: e.target, type: e.type },
        })),
      ],
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'background-color': (ele: any) => categoryColors[ele.data('category')] || '#6B7280',
            'width': 40,
            'height': 40,
            'text-valign': 'bottom',
            'text-margin-y': 5,
            'font-size': '10px',
          } as any,
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#CBD5E1',
            'target-arrow-color': '#CBD5E1',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          } as any,
        },
      ],
      layout: { name: 'preset' },
      userZoomingEnabled: true,
      userPanningEnabled: true,
    });

    // Click handler: navigate to knowledge point page
    cy.on('tap', 'node', (evt: any) => {
      const nodeId = evt.target.id();
      window.location.href = `/pep-math/knowledge/${nodeId}`;
    });

    return () => { cy.destroy(); };
  }, [graph, selectedCategory]);

  return (
    <div>
      <div className="graph-filters flex flex-wrap gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded text-sm ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedCategory('all')}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-3 py-1 rounded text-sm ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        id="cy"
        ref={cyRef}
        className="border rounded-lg"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/KnowledgeGraph.test.tsx
git add src/components/KnowledgeGraph.tsx tests/components/KnowledgeGraph.test.tsx
git commit -m "feat(components): add KnowledgeGraph visualization with Cytoscape.js"
```

---

### Task 21: 知识图谱页面 `/knowledge-graph`

**Files:**
- Create: `src/pages/knowledge-graph.astro`

- [ ] **Step 1: 创建知识图谱页面**

```astro
---
// src/pages/knowledge-graph.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import KnowledgeGraph from '../components/KnowledgeGraph';
import fs from 'fs';
import path from 'path';

const graphFile = path.resolve('public/data/knowledge-graph.json');
const graph = JSON.parse(fs.readFileSync(graphFile, 'utf-8'));

const textbooks = [
  { id: 'required-1', name: '必修 第一册' },
];
---
<BaseLayout title="知识图谱">
  <h1 class="text-2xl font-bold mb-2">知识图谱</h1>
  <p class="text-gray-600 mb-4">
    可视化展示知识点之间的关联关系。点击节点可跳转到知识点详情页。
  </p>

  <div class="mb-4">
    <label class="text-sm font-medium mr-2">选择教材：</label>
    <select id="textbook-select" class="border rounded px-2 py-1 text-sm">
      {textbooks.map(tb => (
        <option value={tb.id}>{tb.name}</option>
      ))}
    </select>
  </div>

  <KnowledgeGraph graph={graph} textbookFilter="required-1" client:load />

  <div class="mt-4 text-sm text-gray-500">
    <p>节点数：{graph.nodes.length} | 边数：{graph.edges.length}</p>
    <p class="mt-1">💡 提示：可按知识类别筛选显示，滚轮缩放，拖拽平移</p>
  </div>
</BaseLayout>
```

- [ ] **Step 2: 验证并提交**

```bash
npm run build:scripts
npx astro build
git add src/pages/knowledge-graph.astro
git commit -m "feat(pages): add knowledge graph visualization page"
```

---

## Milestone M6: 搜索与筛选

### Task 22: SearchBox 组件

**Files:**
- Create: `src/components/SearchBox.tsx`
- Create: `tests/components/SearchBox.test.tsx`

- [ ] **Step 1: 写测试**

```typescript
// tests/components/SearchBox.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
  it('renders search input', () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText(/搜索/);
    expect(input).toBeTruthy();
  });

  it('has search button', () => {
    render(<SearchBox />);
    expect(screen.getByText('搜索')).toBeTruthy();
  });
});
```

- [ ] **Step 2: 实现组件**

```tsx
// src/components/SearchBox.tsx
import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <form action="/pep-math/search" method="get" className="flex gap-2">
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索题目、知识点、定义..."
        className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
      >
        搜索
      </button>
    </form>
  );
}
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/SearchBox.test.tsx
git add src/components/SearchBox.tsx tests/components/SearchBox.test.tsx
git commit -m "feat(components): add SearchBox component"
```

---

### Task 23: Pagefind 集成

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs` (可能不需要修改)
- Create: `src/pages/search.astro`

- [ ] **Step 1: 安装 Pagefind**

```bash
cd ~/Projects/pep-math
npm install -D pagefind
```

- [ ] **Step 2: 添加 postbuild 脚本**

在 `package.json` 中添加：

```json
{
  "scripts": {
    "postbuild": "npx pagefind --site dist --output-subdir pagefind"
  }
}
```

- [ ] **Step 3: 创建搜索页面**

```astro
---
// src/pages/search.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import SearchBox from '../components/SearchBox';
---
<BaseLayout title="搜索">
  <h1 class="text-2xl font-bold mb-4">搜索</h1>

  <div class="mb-6">
    <SearchBox client:load />
  </div>

  <!-- Pagefind UI -->
  <div id="search-results"></div>

  <script>
    // Pagefind loads its UI component dynamically
    async function initSearch() {
      // Wait for pagefind to be available
      const params = new URLSearchParams(window.location.search);
      const query = params.get('q') || '';

      if (query) {
        // @ts-ignore - pagefind is loaded at runtime
        const pagefind = await import('/pep-math/pagefind/pagefind.js');
        const results = await pagefind.search(query);

        const container = document.getElementById('search-results');
        if (!container) return;

        if (results.length === 0) {
          container.innerHTML = '<p class="text-gray-500">没有找到相关结果</p>';
          return;
        }

        const html = await Promise.all(
          results.slice(0, 20).map(async (r: any) => {
            const data = await r.data();
            return `
              <div class="border-b py-3">
                <a href="${data.url}" class="text-blue-600 font-medium hover:underline">${data.meta?.title || 'Untitled'}</a>
                <p class="text-sm text-gray-600 mt-1">${(data.excerpt || '').substring(0, 200)}...</p>
              </div>
            `;
          })
        );

        container.innerHTML = `
          <p class="text-sm text-gray-500 mb-3">找到 ${results.length} 个结果</p>
          ${html.join('')}
        `;
      }
    }

    initSearch();
  </script>
</BaseLayout>
```

- [ ] **Step 4: 验证搜索功能**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
# Pagefind should run in postbuild and generate index
ls dist/pagefind/
```

Expected: `dist/pagefind/` 目录包含索引文件

- [ ] **Step 5: 提交**

```bash
git add package.json package-lock.json src/pages/search.astro
git commit -m "feat(search): integrate Pagefind for full-text search"
```

---

### Task 24: 知识点筛选功能（客户端）

**Files:**
- Modify: `src/pages/knowledge/index.astro` (已有筛选功能，在 Task 16 实现)

知识点筛选已在 Task 16 的知识点列表页中实现（category filter buttons）。此处验证筛选功能正常工作。

- [ ] **Step 1: 验证筛选功能**

```bash
cd ~/Projects/pep-math
npx astro dev
```

手动验证：
1. 访问 `/pep-math/knowledge`
2. 点击类别按钮，确认过滤正常
3. 确认知识点卡片链接到正确的详情页

- [ ] **Step 2: 提交（如有修改）**

```bash
git add -A
git commit -m "feat(knowledge): verify knowledge point filtering works correctly"
```

---

## Final Integration

### Task 25: 全量验证与修复

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 所有脚本运行成功，输出文件正确

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 无错误

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: 所有测试通过（包括新增的组件测试和脚本测试）

- [ ] **Step 4: 完整构建**

```bash
npm run build
```

Expected: Astro 构建成功，Pagefind 索引生成

- [ ] **Step 5: 生成质量报告**

```bash
npm run report
```

Expected: 输出必修一完整内容统计

- [ ] **Step 6: 本地预览验证**

```bash
npx astro preview
```

手动验证所有页面：
- `/pep-math/` — 首页
- `/pep-math/textbook/required-1` — 教材浏览
- `/pep-math/textbook/required-1/chapter/1/section/1` — 节详情
- `/pep-math/knowledge` — 知识点列表
- `/pep-math/knowledge/set-concept` — 知识点详情
- `/pep-math/knowledge-graph` — 知识图谱
- `/pep-math/search?q=集合` — 搜索

- [ ] **Step 7: 最终提交**

```bash
git add -A
git commit -m "chore: Plan 2 complete — M3-M6 core features integrated"
```

---

## Summary

| Milestone | Tasks | Key Deliverables |
|-----------|-------|-----------------|
| **M3: 必修一完整内容** | Task 1-6 | 5 章全部内容、~20 个知识点 YAML、~35 道习题、~10 道例题、~10 个定义 |
| **M4: 核心页面** | Task 7-18 | 7 个 React 组件、5 个页面路由、build-section-data 脚本 |
| **M5: 知识图谱** | Task 19-21 | 布局预计算增强、Cytoscape.js 组件、图谱页面 |
| **M6: 搜索与筛选** | Task 22-24 | Pagefind 集成、搜索页面、知识点筛选 |
| **Final** | Task 25 | 全量验证、质量报告、本地预览 |

### 新增依赖

| Package | Purpose |
|---------|---------|
| `katex` | KaTeX 数学公式渲染 |
| `@types/katex` | TypeScript 类型 |
| `cytoscape` | 知识图谱可视化 |
| `@types/cytoscape` | TypeScript 类型 |
| `pagefind` | 构建时搜索索引生成 |

### 预计新增文件数

- 内容文件：~80 个（知识点 YAML + 习题/例题/定义 Markdown）
- 组件文件：7 个 React 组件 + 6 个测试
- 页面文件：5 个 Astro 页面
- 脚本文件：1 个新脚本 + 1 个测试
- 总计：~100 个文件
