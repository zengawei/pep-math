# pep-math Plan 3: 必修第二册完整内容（M7 partial）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成必修第二册全部 5 章内容录入（平面向量、复数、立体几何初步、统计、概率），新增 19 个知识点 YAML，~35 道习题、~10 道例题、~10 个定义。更新页面与构建脚本以支持多教材切换。

**Architecture:** 在 Plan 2 基础上扩展。内容层新增 `required-2/` 目录下全部 5 章 Markdown 内容 + 19 个知识点 YAML。构建脚本已支持多教材遍历（`build-section-data.ts`、`build-exercise-index.ts` 等自动扫描所有 textbook 子目录），无需大改。页面层需更新 `textbook/[id].astro` 的 `chapterTitles` 映射和 `knowledge-graph.astro` 的教材列表以支持必修二。知识图谱通过 `applied_in` 字段自动聚合新知识点。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v3, React 19, Cytoscape.js, KaTeX, Pagefind, Vitest

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

**Plan 2 完成状态:** 必修一 5 章内容 ✅ 19 知识点 ✅ 42 习题 ✅ 核心页面 ✅ 知识图谱 ✅ 搜索 ✅ 组件 ✅ 构建脚本 ✅

---

## 必修第二册教材内容概览

基于人教版 2019 新课标高中数学必修第二册：

| 章 | 标题 | 节数 | 新增知识点 |
|----|------|------|-----------|
| 第六章 | 平面向量及其应用 | 4 节 | 5 个 |
| 第七章 | 复数 | 2 节 | 2 个 |
| 第八章 | 立体几何初步 | 4 节 | 7 个 |
| 第九章 | 统计 | 2 节 | 2 个 |
| 第十章 | 概率 | 2 节 | 3 个 |
| **合计** | | **14 节** | **19 个** |

### 知识点清单

**平面向量（5 个）：**
1. `vector-concept` — 平面向量的概念
2. `vector-addition-subtraction` — 向量的加法与减法
3. `vector-scalar-multiplication` — 向量的数乘运算
4. `vector-coordinate` — 平面向量的基本定理及坐标表示
5. `vector-dot-product` — 向量的数量积

**复数（2 个）：**
6. `complex-number-concept` — 复数的概念
7. `complex-number-operations` — 复数的四则运算

**立体几何初步（7 个）：**
8. `solid-geometry-basics` — 基本立体图形
9. `solid-geometry-drawing` — 立体图形的直观图（三视图、直观图）
10. `solid-surface-area-volume` — 简单几何体的表面积与体积
11. `spatial-position-relation` — 空间点、直线、平面之间的位置关系
12. `parallel-judgment` — 平行（线线、线面、面面）的判定与性质
13. `perpendicular-judgment` — 垂直（线线、线面、面面）的判定与性质
14. `spatial-angle` — 空间角（异面直线所成角、线面角、二面角）

**统计（2 个）：**
15. `random-sampling` — 随机抽样
16. `sample-estimate-population` — 用样本估计总体

**概率（3 个）：**
17. `random-event-probability` — 随机事件与概率
18. `event-independence` — 事件的相互独立性
19. `frequency-probability` — 频率与概率

### 章节详细结构

```
required-2/
├── chapter-06/                    # 平面向量及其应用
│   ├── section-01/                # 6.1 平面向量的概念
│   ├── section-02/                # 6.2 向量的加法与减法
│   ├── section-03/                # 6.3 向量的数乘运算与基本定理
│   └── section-04/                # 6.4 向量的数量积
├── chapter-07/                    # 复数
│   ├── section-01/                # 7.1 复数的概念
│   └── section-02/                # 7.2 复数的四则运算
├── chapter-08/                    # 立体几何初步
│   ├── section-01/                # 8.1-8.2 基本立体图形与直观图
│   ├── section-02/                # 8.3 表面积与体积
│   ├── section-03/                # 8.4 空间位置关系与平行
│   └── section-04/                # 8.5 垂直的判定与性质 + 空间角
├── chapter-09/                    # 统计
│   ├── section-01/                # 9.1 随机抽样
│   └── section-02/                # 9.2 用样本估计总体
└── chapter-10/                    # 概率
    ├── section-01/                # 10.1 随机事件与概率
    └── section-02/                # 10.2 事件的独立性与频率
```

---

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容 source 字段为 `"自编"`，references 标注课标条目
- KaTeX 公式客户端渲染，不在构建时处理
- 节详情页通过 fetch `public/data/` 下的 JSON 加载习题数据
- 知识图谱 v1 支持单册筛选，Plan 3 扩展为支持 required-1 和 required-2
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）
- 新增知识点 YAML 的 `applied_in` 字段必须标注 `textbook: required-2`
- 跨册知识点关系（如必修一的 `trig-function` → 必修二的 `vector-dot-product`）需双向维护

---

## File Structure (新增文件)

```
pep-math/
├── src/
│   ├── content/
│   │   ├── textbooks/
│   │   │   ├── required-1/                    # ✅ 已有
│   │   │   └── required-2/                    # 🆕 全部新建
│   │   │       ├── chapter-06/                # 平面向量及其应用
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 向量的定义
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-03/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-04/
│   │   │       │       ├── definition-1.md
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       ├── exercise-3.md
│   │   │       │       └── example-1.md
│   │   │       ├── chapter-07/                # 复数
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-02/
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       └── example-1.md
│   │   │       ├── chapter-08/                # 立体几何初步
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── definition-2.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-03/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-04/
│   │   │       │       ├── definition-1.md
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       └── example-1.md
│   │   │       ├── chapter-09/                # 统计
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-02/
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       └── example-1.md
│   │   │       └── chapter-10/                # 概率
│   │   │           ├── section-01/
│   │   │           │   ├── definition-1.md
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   └── example-1.md
│   │   │           └── section-02/
│   │   │               ├── exercise-1.md
│   │   │               ├── exercise-2.md
│   │   │               └── example-1.md
│   │   └── knowledge-points/
│   │       ├── vector-concept.yml             # 🆕
│   │       ├── vector-addition-subtraction.yml # 🆕
│   │       ├── vector-scalar-multiplication.yml # 🆕
│   │       ├── vector-coordinate.yml          # 🆕
│   │       ├── vector-dot-product.yml         # 🆕
│   │       ├── complex-number-concept.yml     # 🆕
│   │       ├── complex-number-operations.yml  # 🆕
│   │       ├── solid-geometry-basics.yml      # 🆕
│   │       ├── solid-geometry-drawing.yml     # 🆕
│   │       ├── solid-surface-area-volume.yml  # 🆕
│   │       ├── spatial-position-relation.yml  # 🆕
│   │       ├── parallel-judgment.yml          # 🆕
│   │       ├── perpendicular-judgment.yml     # 🆕
│   │       ├── spatial-angle.yml              # 🆕
│   │       ├── random-sampling.yml            # 🆕
│   │       ├── sample-estimate-population.yml # 🆕
│   │       ├── random-event-probability.yml   # 🆕
│   │       ├── event-independence.yml         # 🆕
│   │       └── frequency-probability.yml      # 🆕
│   └── pages/
│       ├── textbook/
│       │   └── [id].astro                     # ✏️ 更新（添加 required-2 章标题）
│       └── knowledge-graph.astro              # ✏️ 更新（添加 required-2 到教材列表）
├── tests/
│   └── content/
│       └── required-2-integrity.test.ts       # 🆕 必修二内容完整性测试
└── docs/plans/
    └── 2026-08-18-plan-3-required-2.md        # 🆕 本文件
```

---

## Milestone: 知识点 YAML 文件

### Task 1: 平面向量知识点 YAML（5 个）

**Files:**
- Create: `src/content/knowledge-points/vector-concept.yml`
- Create: `src/content/knowledge-points/vector-addition-subtraction.yml`
- Create: `src/content/knowledge-points/vector-scalar-multiplication.yml`
- Create: `src/content/knowledge-points/vector-coordinate.yml`
- Create: `src/content/knowledge-points/vector-dot-product.yml`

- [ ] **Step 1: 创建 vector-concept.yml**

```yaml
id: vector-concept
name: 平面向量的概念
category: 向量
description: |
  既有大小又有方向的量叫做向量（也称矢量）。
  向量的大小叫做向量的模（长度），记作 |a|。
  零向量：长度为 0 的向量，记作 0。
  单位向量：模为 1 的向量。
  相等向量：大小相等且方向相同的向量。
  相反向量：大小相等但方向相反的向量。
  共线向量（平行向量）：方向相同或相反的向量，记作 a∥b。
prerequisites: []
follow_ups:
  - vector-addition-subtraction
  - vector-scalar-multiplication
related:
  - function-concept
formulas:
  - "|\\vec{a}| \\geq 0"
  - "\\vec{0}: |\\vec{0}| = 0"
common_mistakes:
  - mistake: "混淆向量与标量，认为向量可以比较大小"
    correction: "向量有方向，不能直接比较大小；只有向量的模（标量）才能比较大小"
  - mistake: "认为方向相同的向量就是相等向量"
    correction: "相等向量必须同时满足模相等且方向相同"
applied_in:
  - textbook: required-2
    chapters: [6]
```

- [ ] **Step 2: 创建 vector-addition-subtraction.yml**

```yaml
id: vector-addition-subtraction
name: 向量的加法与减法
category: 向量
description: |
  向量加法遵循三角形法则和平行四边形法则。
  三角形法则：将第二个向量的起点移到第一个向量的终点，和向量从第一个向量的起点指向第二个向量的终点。
  平行四边形法则：以两个向量为邻边作平行四边形，对角线即为和向量。
  向量减法：a - b = a + (-b)，即加上 b 的相反向量。
  向量加法满足交换律和结合律。
prerequisites:
  - vector-concept
follow_ups:
  - vector-scalar-multiplication
  - vector-coordinate
related: []
formulas:
  - "\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}"
  - "(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})"
  - "\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})"
common_mistakes:
  - mistake: "向量减法时方向搞错"
    correction: "a - b = a + (-b)，先画出 -b（与 b 方向相反），再用三角形法则"
applied_in:
  - textbook: required-2
    chapters: [6]
```

- [ ] **Step 3: 创建 vector-scalar-multiplication.yml**

```yaml
id: vector-scalar-multiplication
name: 向量的数乘运算
category: 向量
description: |
  实数 λ 与向量 a 的积是一个向量，记作 λa。
  |λa| = |λ| · |a|。
  当 λ > 0 时，λa 与 a 同向；当 λ < 0 时，λa 与 a 反向；当 λ = 0 时，λa = 0。
  数乘运算满足：λ(μa) = (λμ)a，(λ+μ)a = λa + μa，λ(a+b) = λa + λb。
prerequisites:
  - vector-concept
  - vector-addition-subtraction
follow_ups:
  - vector-coordinate
related: []
formulas:
  - "|\\lambda \\vec{a}| = |\\lambda| \\cdot |\\vec{a}|"
  - "\\lambda(\\mu \\vec{a}) = (\\lambda\\mu)\\vec{a}"
  - "\\lambda(\\vec{a} + \\vec{b}) = \\lambda\\vec{a} + \\lambda\\vec{b}"
common_mistakes:
  - mistake: "认为 |λa| = λ|a|"
    correction: "|λa| = |λ|·|a|，λ 为负数时需取绝对值"
applied_in:
  - textbook: required-2
    chapters: [6]
```

- [ ] **Step 4: 创建 vector-coordinate.yml**

```yaml
id: vector-coordinate
name: 平面向量的基本定理及坐标表示
category: 向量
description: |
  平面向量基本定理：如果 e₁, e₂ 是同一平面内的两个不共线向量，
  那么对该平面内的任一向量 a，存在唯一实数对 (λ₁, λ₂)，使 a = λ₁e₁ + λ₂e₂。
  基底：不共线的向量 e₁, e₂ 叫做表示这一平面内所有向量的一组基底。
  坐标表示：取与 x 轴、y 轴方向相同的单位向量 i, j 为基底，
  则 a = xi + yj，记作 a = (x, y)。
prerequisites:
  - vector-scalar-multiplication
  - vector-addition-subtraction
follow_ups:
  - vector-dot-product
related:
  - function-concept
formulas:
  - "\\vec{a} = \\lambda_1 \\vec{e_1} + \\lambda_2 \\vec{e_2}"
  - "\\vec{a} = (x, y)"
  - "|\\vec{a}| = \\sqrt{x^2 + y^2}"
common_mistakes:
  - mistake: "混淆向量的坐标与点的坐标"
    correction: "向量坐标表示方向和大小，点坐标表示位置；起点不在原点时，向量坐标 = 终点坐标 - 起点坐标"
applied_in:
  - textbook: required-2
    chapters: [6]
```

- [ ] **Step 5: 创建 vector-dot-product.yml**

```yaml
id: vector-dot-product
name: 向量的数量积
category: 向量
description: |
  两个向量 a 与 b 的数量积（内积、点积）：
  a·b = |a||b|cosθ，其中 θ 为 a 与 b 的夹角（0° ≤ θ ≤ 180°）。
  坐标形式：若 a = (x₁, y₁)，b = (x₂, y₂)，则 a·b = x₁x₂ + y₁y₂。
  性质：a·a = |a|²；a⊥b ⟺ a·b = 0（a, b 非零）。
  应用：求夹角、判断垂直、求投影。
prerequisites:
  - vector-coordinate
  - trig-function
follow_ups: []
related:
  - trig-function
  - trig-identity
formulas:
  - "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta"
  - "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2"
  - "\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0"
  - "\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}"
common_mistakes:
  - mistake: "混淆数量积与向量运算，认为 a·b 的结果是向量"
    correction: "数量积 a·b 的结果是标量（实数），不是向量"
  - mistake: "认为 a·b = 0 则 a = 0 或 b = 0"
    correction: "a·b = 0 也可能是 a⊥b（垂直），不一定有零向量"
applied_in:
  - textbook: required-2
    chapters: [6]
```

- [ ] **Step 6: 提交**

```bash
git add src/content/knowledge-points/vector-*.yml
git commit -m "content(kp): 添加平面向量 5 个知识点 YAML"
```

---

### Task 2: 复数知识点 YAML（2 个）

**Files:**
- Create: `src/content/knowledge-points/complex-number-concept.yml`
- Create: `src/content/knowledge-points/complex-number-operations.yml`

- [ ] **Step 1: 创建 complex-number-concept.yml**

```yaml
id: complex-number-concept
name: 复数的概念
category: 数与代数
description: |
  形如 z = a + bi（a, b ∈ R）的数叫做复数，其中 i 是虚数单位，i² = -1。
  a 叫做复数的实部，b 叫做复数的虚部。
  当 b = 0 时为实数；当 b ≠ 0 时为虚数；当 a = 0 且 b ≠ 0 时为纯虚数。
  复数集 C = {a + bi | a, b ∈ R}。R ⊂ C。
  两个复数相等：a + bi = c + di ⟺ a = c 且 b = d。
  共轭复数：z = a + bi 的共轭复数为 z̄ = a - bi。
prerequisites:
  - quadratic-equation
follow_ups:
  - complex-number-operations
related:
  - quadratic-equation
formulas:
  - "i^2 = -1"
  - "z = a + bi \\quad (a, b \\in \\mathbb{R})"
  - "z = \\bar{z} \\Leftrightarrow z \\in \\mathbb{R}"
common_mistakes:
  - mistake: "认为 i 是 -1 的平方根所以 i = -1"
    correction: "i² = -1，但 i ≠ -1。i 是一个新的数，不是实数"
  - mistake: "忽略复数为实数/纯虚数的条件"
    correction: "a+bi 为实数 ⟺ b=0；为纯虚数 ⟺ a=0 且 b≠0（两个条件缺一不可）"
applied_in:
  - textbook: required-2
    chapters: [7]
```

- [ ] **Step 2: 创建 complex-number-operations.yml**

```yaml
id: complex-number-operations
name: 复数的四则运算
category: 数与代数
description: |
  加减法：(a+bi) ± (c+di) = (a±c) + (b±d)i。
  乘法：(a+bi)(c+di) = (ac-bd) + (ad+bc)i。
  除法：(a+bi)/(c+di) = (a+bi)(c-di)/((c+di)(c-di)) = ((ac+bd)+(bc-ad)i)/(c²+d²)。
  关键技巧：除法中分子分母同乘分母的共轭复数实现"分母实数化"。
  模：|z| = |a+bi| = √(a²+b²)。性质：|z₁z₂| = |z₁||z₂|，|z₁/z₂| = |z₁|/|z₂|。
prerequisites:
  - complex-number-concept
follow_ups: []
related:
  - complex-number-concept
  - quadratic-equation
formulas:
  - "(a+bi)(c+di) = (ac-bd) + (ad+bc)i"
  - "\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{c^2+d^2}"
  - "|z| = \\sqrt{a^2 + b^2}"
  - "z \\cdot \\bar{z} = |z|^2"
common_mistakes:
  - mistake: "复数乘法中忘记 i² = -1"
    correction: "展开后所有 i² 都要替换为 -1，再合并实部和虚部"
  - mistake: "除法中不乘共轭复数而直接除"
    correction: "复数除法必须分子分母同乘分母的共轭复数，使分母变为实数"
applied_in:
  - textbook: required-2
    chapters: [7]
```

- [ ] **Step 3: 提交**

```bash
git add src/content/knowledge-points/complex-number-*.yml
git commit -m "content(kp): 添加复数 2 个知识点 YAML"
```

---

### Task 3: 立体几何初步知识点 YAML（7 个）

**Files:**
- Create: `src/content/knowledge-points/solid-geometry-basics.yml`
- Create: `src/content/knowledge-points/solid-geometry-drawing.yml`
- Create: `src/content/knowledge-points/solid-surface-area-volume.yml`
- Create: `src/content/knowledge-points/spatial-position-relation.yml`
- Create: `src/content/knowledge-points/parallel-judgment.yml`
- Create: `src/content/knowledge-points/perpendicular-judgment.yml`
- Create: `src/content/knowledge-points/spatial-angle.yml`

- [ ] **Step 1: 创建 solid-geometry-basics.yml**

```yaml
id: solid-geometry-basics
name: 基本立体图形
category: 立体几何
description: |
  常见基本立体图形：
  棱柱：两个底面平行且全等，侧面为平行四边形。
  棱锥：一个底面，侧面为共顶点的三角形。
  棱台：棱锥被平行于底面的平面截得。
  圆柱、圆锥、圆台：由矩形、直角三角形、直角梯形绕直角边旋转得到。
  球：到定点距离等于定长的点的集合。
prerequisites: []
follow_ups:
  - solid-geometry-drawing
  - solid-surface-area-volume
related: []
formulas: []
common_mistakes:
  - mistake: "混淆棱柱和棱锥的特征"
    correction: "棱柱有两个平行全等的底面；棱锥只有一个底面，侧面三角形共顶点"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 2: 创建 solid-geometry-drawing.yml**

```yaml
id: solid-geometry-drawing
name: 立体图形的直观图
category: 立体几何
description: |
  三视图：正视图（从前向后看）、侧视图（从左向右看）、俯视图（从上向下看）。
  三视图规则："长对正、高平齐、宽相等"。
  斜二测画法：画直观图的方法。
  x'轴与 y'轴夹角 45°（或 135°），平行于 x 轴的线段长度不变，
  平行于 y 轴的线段长度变为原来的一半。
prerequisites:
  - solid-geometry-basics
follow_ups:
  - solid-surface-area-volume
related: []
formulas: []
common_mistakes:
  - mistake: "三视图中混淆正视图和侧视图的方向"
    correction: "正视图从正面看，侧视图从左面看，注意观察方向"
  - mistake: "斜二测画法中忘记 y 方向长度减半"
    correction: "平行于 y 轴的线段在直观图中长度变为原来的一半"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 3: 创建 solid-surface-area-volume.yml**

```yaml
id: solid-surface-area-volume
name: 简单几何体的表面积与体积
category: 立体几何
description: |
  棱柱/圆柱体积：V = Sh（S 为底面积，h 为高）。
  棱锥/圆锥体积：V = ⅓Sh。
  棱台/圆台体积：V = ⅓(S₁ + S₂ + √(S₁S₂))h。
  球体积：V = ⁴⁄₃πr³。球表面积：S = 4πr²。
  侧面积：圆柱 S侧 = 2πrl，圆锥 S侧 = πrl。
prerequisites:
  - solid-geometry-basics
  - solid-geometry-drawing
follow_ups: []
related: []
formulas:
  - "V_{\\text{柱}} = Sh"
  - "V_{\\text{锥}} = \\frac{1}{3}Sh"
  - "V_{\\text{球}} = \\frac{4}{3}\\pi r^3"
  - "S_{\\text{球}} = 4\\pi r^2"
  - "S_{\\text{圆柱侧}} = 2\\pi rl"
  - "S_{\\text{圆锥侧}} = \\pi rl"
common_mistakes:
  - mistake: "混淆锥体体积公式，忘记乘以 1/3"
    correction: "锥体体积 = ⅓Sh，不是 Sh。可以理解为锥体是同底同高柱体的三分之一"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 4: 创建 spatial-position-relation.yml**

```yaml
id: spatial-position-relation
name: 空间点、直线、平面之间的位置关系
category: 立体几何
description: |
  平面的基本性质（公理）：
  公理1：如果一条直线上的两点在一个平面内，那么这条直线在此平面内。
  公理2：过不在一条直线上的三点，有且只有一个平面。
  公理3：如果两个不重合的平面有一个公共点，那么它们有且只有一条过该点的公共直线。
  空间两条直线的位置关系：平行、相交、异面。
  异面直线：不同在任何一个平面内的两条直线。
prerequisites:
  - solid-geometry-basics
follow_ups:
  - parallel-judgment
  - perpendicular-judgment
related: []
formulas: []
common_mistakes:
  - mistake: "认为不相交的两条直线一定平行"
    correction: "空间中不相交的两条直线可能平行也可能异面"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 5: 创建 parallel-judgment.yml**

```yaml
id: parallel-judgment
name: 平行的判定与性质
category: 立体几何
description: |
  线面平行判定定理：平面外一条直线与此平面内一条直线平行，则该直线与此平面平行。
  线面平行性质定理：一条直线与一个平面平行，经过该直线的平面与此平面的交线与该直线平行。
  面面平行判定定理：一个平面内有两条相交直线分别与另一个平面平行，则这两个平面平行。
  面面平行性质定理：两个平面平行，第三个平面与它们相交，则两条交线平行。
prerequisites:
  - spatial-position-relation
follow_ups:
  - perpendicular-judgment
  - spatial-angle
related: []
formulas: []
common_mistakes:
  - mistake: "线面平行判定中忘记强调'平面外'"
    correction: "判定定理的前提是直线在平面外，如果直线在平面内则不是平行关系"
  - mistake: "面面平行判定中只找一条平行线"
    correction: "需要两条'相交'直线分别平行于另一平面，缺一不可"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 6: 创建 perpendicular-judgment.yml**

```yaml
id: perpendicular-judgment
name: 垂直的判定与性质
category: 立体几何
description: |
  线面垂直判定定理：一条直线与一个平面内的两条相交直线都垂直，则该直线与此平面垂直。
  线面垂直性质定理：垂直于同一个平面的两条直线平行。
  面面垂直判定定理：一个平面过另一个平面的一条垂线，则这两个平面垂直。
  面面垂直性质定理：两个平面垂直，一个平面内垂直于交线的直线与另一个平面垂直。
prerequisites:
  - spatial-position-relation
  - parallel-judgment
follow_ups:
  - spatial-angle
related:
  - vector-dot-product
formulas: []
common_mistakes:
  - mistake: "线面垂直判定中两条直线不要求'相交'"
    correction: "必须是与平面内两条'相交'直线都垂直，如果两条平行线则不够"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 7: 创建 spatial-angle.yml**

```yaml
id: spatial-angle
name: 空间角
category: 立体几何
description: |
  异面直线所成的角：过空间一点分别作两条异面直线的平行线，
  所得两条相交直线所成的锐角（或直角）即为异面直线所成的角，范围 (0°, 90°]。
  直线与平面所成的角：直线与其在平面上的射影所成的角，范围 [0°, 90°]。
  二面角：从一条直线出发的两个半平面所组成的图形。
  二面角的平面角：在棱上取一点，在两个半平面内分别作垂直于棱的射线，所成的角。
prerequisites:
  - parallel-judgment
  - perpendicular-judgment
  - trig-function
follow_ups: []
related:
  - vector-dot-product
  - trig-function
formulas: []
common_mistakes:
  - mistake: "异面直线所成角取钝角"
    correction: "异面直线所成角的范围是 (0°, 90°]，如果算出钝角要取其补角"
  - mistake: "二面角的平面角不在两个半平面内作"
    correction: "平面角的两条边必须分别在两个半平面内，且都垂直于棱"
applied_in:
  - textbook: required-2
    chapters: [8]
```

- [ ] **Step 8: 提交**

```bash
git add src/content/knowledge-points/solid-geometry-*.yml \
       src/content/knowledge-points/spatial-*.yml \
       src/content/knowledge-points/parallel-judgment.yml \
       src/content/knowledge-points/perpendicular-judgment.yml
git commit -m "content(kp): 添加立体几何初步 7 个知识点 YAML"
```

---

### Task 4: 统计与概率知识点 YAML（5 个）

**Files:**
- Create: `src/content/knowledge-points/random-sampling.yml`
- Create: `src/content/knowledge-points/sample-estimate-population.yml`
- Create: `src/content/knowledge-points/random-event-probability.yml`
- Create: `src/content/knowledge-points/event-independence.yml`
- Create: `src/content/knowledge-points/frequency-probability.yml`

- [ ] **Step 1: 创建 random-sampling.yml**

```yaml
id: random-sampling
name: 随机抽样
category: 概率与统计
description: |
  简单随机抽样：从总体中逐个不放回地抽取，每个个体被抽到的概率相等。
  方法：抽签法、随机数法。
  系统抽样（等距抽样）：将总体均分成若干部分，按一定规则从每部分抽取。
  分层抽样：按总体中各类别所占比例，从各类别中分别抽取。
  适用场景：总体差异明显时用分层抽样。
prerequisites: []
follow_ups:
  - sample-estimate-population
related: []
formulas: []
common_mistakes:
  - mistake: "混淆系统抽样和分层抽样的适用场景"
    correction: "总体差异不大用系统抽样；总体由差异明显的几部分组成用分层抽样"
applied_in:
  - textbook: required-2
    chapters: [9]
```

- [ ] **Step 2: 创建 sample-estimate-population.yml**

```yaml
id: sample-estimate-population
name: 用样本估计总体
category: 概率与统计
description: |
  用样本的频率分布估计总体的分布：频率分布表、频率分布直方图、茎叶图。
  频率分布直方图：纵轴为频率/组距，各小矩形面积之和为 1。
  样本的数字特征：
  平均数 x̄ = (x₁+x₂+...+xₙ)/n
  中位数：将数据从小到大排列后位于中间位置的值。
  众数：出现次数最多的值。
  方差 s² = [(x₁-x̄)²+(x₂-x̄)²+...+(xₙ-x̄)²]/n
  标准差 s = √(s²)
prerequisites:
  - random-sampling
follow_ups: []
related:
  - frequency-probability
formulas:
  - "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i"
  - "s^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2"
  - "s = \\sqrt{s^2}"
common_mistakes:
  - mistake: "频率分布直方图中把纵轴当成频率"
    correction: "纵轴是频率/组距，每个小矩形的面积（而非高度）才是频率"
applied_in:
  - textbook: required-2
    chapters: [9]
```

- [ ] **Step 3: 创建 random-event-probability.yml**

```yaml
id: random-event-probability
name: 随机事件与概率
category: 概率与统计
description: |
  随机事件：在一定条件下可能发生也可能不发生的事件。
  必然事件：一定发生的事件，P = 1。
  不可能事件：一定不发生的事件，P = 0。
  概率的基本性质：0 ≤ P(A) ≤ 1。
  互斥事件：不可能同时发生的两个事件。
  对立事件：互斥事件中必有一个发生的两个事件。P(A) + P(Ā) = 1。
  概率加法公式：互斥事件 A, B：P(A∪B) = P(A) + P(B)。
prerequisites: []
follow_ups:
  - event-independence
  - frequency-probability
related: []
formulas:
  - "0 \\leq P(A) \\leq 1"
  - "P(A \\cup B) = P(A) + P(B) \\quad (\\text{A, B 互斥})"
  - "P(A) + P(\\bar{A}) = 1"
common_mistakes:
  - mistake: "混淆互斥事件和对立事件"
    correction: "对立事件一定是互斥事件，但互斥事件不一定对立。对立要求 A∪B 为必然事件"
applied_in:
  - textbook: required-2
    chapters: [10]
```

- [ ] **Step 4: 创建 event-independence.yml**

```yaml
id: event-independence
name: 事件的相互独立性
category: 概率与统计
description: |
  如果事件 A 的发生不影响事件 B 发生的概率，则称 A, B 相互独立。
  数学定义：P(AB) = P(A)·P(B)。
  独立事件的性质：若 A, B 独立，则 A, B̄ 也独立；Ā, B 也独立；Ā, B̄ 也独立。
  独立与互斥的区别：独立是指一个事件的发生不影响另一个，互斥是指两个事件不能同时发生。
prerequisites:
  - random-event-probability
follow_ups: []
related:
  - random-event-probability
formulas:
  - "P(AB) = P(A) \\cdot P(B) \\quad (\\text{A, B 独立})"
common_mistakes:
  - mistake: "混淆独立事件和互斥事件"
    correction: "独立：P(AB)=P(A)P(B)；互斥：P(AB)=0。两者完全不同"
applied_in:
  - textbook: required-2
    chapters: [10]
```

- [ ] **Step 5: 创建 frequency-probability.yml**

```yaml
id: frequency-probability
name: 频率与概率
category: 概率与统计
description: |
  频率：在 n 次重复试验中，事件 A 发生的次数 m 与总次数 n 的比值 m/n。
  概率的统计定义：当试验次数 n 很大时，频率 m/n 稳定在某个常数附近，
  这个常数就是事件 A 的概率，记为 P(A)。
  频率是随机的，每次试验可能不同；概率是确定的常数。
  频率是概率的近似值，试验次数越多，频率越接近概率。
prerequisites:
  - random-event-probability
follow_ups: []
related:
  - sample-estimate-population
  - random-event-probability
formulas:
  - "f_n(A) = \\frac{m}{n}"
  - "\\lim_{n \\to \\infty} f_n(A) = P(A)"
common_mistakes:
  - mistake: "把频率等同于概率"
    correction: "频率是随机的、变化的；概率是固定的。频率只是概率的估计值"
applied_in:
  - textbook: required-2
    chapters: [10]
```

- [ ] **Step 6: 提交**

```bash
git add src/content/knowledge-points/random-sampling.yml \
       src/content/knowledge-points/sample-estimate-population.yml \
       src/content/knowledge-points/random-event-probability.yml \
       src/content/knowledge-points/event-independence.yml \
       src/content/knowledge-points/frequency-probability.yml
git commit -m "content(kp): 添加统计与概率 5 个知识点 YAML"
```

---

## Milestone: 第六章内容 — 平面向量及其应用

### Task 5: 第六章 section-01 — 平面向量的概念

**Files:**
- Create: `src/content/textbooks/required-2/chapter-06/section-01/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-01/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-01/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-01/exercise-3.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（向量的定义）**

```markdown
---
type: definition
textbook: required-2
chapter: 6
section: 1
name: 向量
related_knowledge_points:
  - vector-concept
---

**定义（精确表述）：** 既有大小又有方向的量叫做向量（也称矢量）。向量的大小叫做向量的模（或长度），记作 $|\vec{a}|$ 或 $|\overrightarrow{AB}|$。模为零的向量叫做零向量，记作 $\vec{0}$。模为 $1$ 的向量叫做单位向量。

**通俗解释：** 向量就像一个"箭头"——它告诉你"往哪个方向走多远"。和数字不同，向量除了"多大"还有"朝哪"。比如"向东走 3 米"就是一个向量，而"3 米"只是一个数。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-concept
source: "自编"
references: "课标6.1.1"
---

**题目：** 判断下列说法是否正确，并说明理由：

(1) 温度含零上和零下，所以温度是向量。

(2) 若 $|\vec{a}| = |\vec{b}|$，则 $\vec{a} = \vec{b}$。

---

**解答：**

**第1步：** 判断 (1)
> 📌 运用知识点：平面向量的概念

(1) 错误。温度虽然有零上和零下之分，但温度只有大小没有方向，所以温度是标量，不是向量。

**第2步：** 判断 (2)
> 📌 运用知识点：平面向量的概念

(2) 错误。$|\vec{a}| = |\vec{b}|$ 只说明两个向量的模相等，但方向不一定相同。相等向量要求模相等**且**方向相同。

**💡 解题思路总结：** 向量的两个要素是大小和方向，缺一不可。判断两个向量相等必须同时验证模和方向。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-concept
source: "自编"
references: "课标6.1.1"
---

**题目：** 在正三角形 $ABC$ 中，$\overrightarrow{AB}$ 与 $\overrightarrow{BC}$ 是否为相等向量？$\overrightarrow{AB}$ 与 $\overrightarrow{CA}$ 呢？

---

**解答：**

**第1步：** 分析 $\overrightarrow{AB}$ 与 $\overrightarrow{BC}$
> 📌 运用知识点：平面向量的概念

正三角形中 $|\overrightarrow{AB}| = |\overrightarrow{BC}|$（边长相等），

但 $\overrightarrow{AB}$ 的方向是从 $A$ 到 $B$，$\overrightarrow{BC}$ 的方向是从 $B$ 到 $C$，方向不同。

所以 $\overrightarrow{AB}$ 与 $\overrightarrow{BC}$ 不是相等向量。

**第2步：** 分析 $\overrightarrow{AB}$ 与 $\overrightarrow{CA}$
> 📌 运用知识点：平面向量的概念

$|\overrightarrow{AB}| = |\overrightarrow{CA}|$（边长相等），

$\overrightarrow{AB}$ 从 $A$ 到 $B$，$\overrightarrow{CA}$ 从 $C$ 到 $A$，方向不同。

所以也不是相等向量。但 $|\overrightarrow{AB}| = |\overrightarrow{CA}|$，它们是模相等的向量。
```

- [ ] **Step 4: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - vector-concept
source: "自编"
references: "课标6.1.1"
---

**题目：** 如图，$O$ 是正六边形 $ABCDEF$ 的中心，写出与 $\overrightarrow{OA}$ 共线的所有向量（以图中已标注的点为端点）。

---

**解答：**

**第1步：** 确定 $\overrightarrow{OA}$ 的方向
> 📌 运用知识点：平面向量的概念

$\overrightarrow{OA}$ 的方向是从 $O$ 指向 $A$。共线向量要求方向相同或相反。

**第2步：** 找出同向和反向的向量
> 📌 运用知识点：平面向量的概念

正六边形中，$O$ 到各顶点的连线将六边形分为 6 个正三角形。

与 $\overrightarrow{OA}$ 同向的：$\overrightarrow{OA}$ 本身。

与 $\overrightarrow{OA}$ 反向的：$\overrightarrow{AO}$，$\overrightarrow{OD}$（$D$ 是 $A$ 的对顶点）。

所以与 $\overrightarrow{OA}$ 共线的向量有：$\overrightarrow{AO}$、$\overrightarrow{OD}$、$\overrightarrow{DO}$。

**💡 解题思路总结：** 共线向量 = 方向相同或相反的向量。在正六边形中，对顶点的连线经过中心，形成共线关系。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 6
section: 1
number: 1
knowledge_points:
  - vector-concept
---

**例题：** 下列说法中正确的个数是（  ）

① 平行向量一定是共线向量；
② 共线向量一定是平行向量；
③ 长度相等且方向相反的向量一定是相反向量；
④ 若 $\vec{a} \parallel \vec{b}$，$\vec{b} \parallel \vec{c}$，则 $\vec{a} \parallel \vec{c}$。

(A) 1  (B) 2  (C) 3  (D) 4

**解答：**

**第1步：** 逐一判断
> 📌 运用知识点：平面向量的概念

① 正确。平行向量就是共线向量（定义等价）。

② 正确。同上，共线向量就是平行向量。

③ 正确。相反向量的定义就是模相等、方向相反。

④ 错误。当 $\vec{b} = \vec{0}$ 时，$\vec{a} \parallel \vec{0}$ 和 $\vec{0} \parallel \vec{c}$ 恒成立，但 $\vec{a}$ 与 $\vec{c}$ 不一定平行。

答案：(C) 3 个。
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/required-2/chapter-06/section-01/
git commit -m "content(required-2/ch6-s1): 添加平面向量概念的定义、习题和例题"
```

---

### Task 6: 第六章 section-02 — 向量的加法与减法

**Files:**
- Create: `src/content/textbooks/required-2/chapter-06/section-02/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-02/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-02/example-1.md`

- [ ] **Step 1: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-addition-subtraction
source: "自编"
references: "课标6.2.1"
---

**题目：** 化简 $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}$。

---

**解答：**

**第1步：** 利用向量加法的三角形法则
> 📌 运用知识点：向量的加法与减法

$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$（首尾相接）

**第2步：** 继续化简
> 📌 运用知识点：向量的加法与减法

$\overrightarrow{AC} + \overrightarrow{CA} = \overrightarrow{AC} + (-\overrightarrow{AC}) = \vec{0}$

所以 $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \vec{0}$。

**💡 解题思路总结：** 首尾相接的向量链 $\overrightarrow{AB} + \overrightarrow{BC} + ... + \overrightarrow{ZA} = \vec{0}$（回到起点）。
```

- [ ] **Step 2: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - vector-addition-subtraction
source: "自编"
references: "课标6.2.1"
---

**题目：** 在平行四边形 $ABCD$ 中，设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，用 $\vec{a}, \vec{b}$ 表示 $\overrightarrow{AC}$ 和 $\overrightarrow{BD}$。

---

**解答：**

**第1步：** 求 $\overrightarrow{AC}$
> 📌 运用知识点：向量的加法与减法

由平行四边形法则：$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = \vec{a} + \vec{b}$

（因为 $\overrightarrow{BC} = \overrightarrow{AD} = \vec{b}$）

**第2步：** 求 $\overrightarrow{BD}$
> 📌 运用知识点：向量的加法与减法

$\overrightarrow{BD} = \overrightarrow{AD} - \overrightarrow{AB} = \vec{b} - \vec{a}$

（或者：$\overrightarrow{BD} = \overrightarrow{BA} + \overrightarrow{AD} = -\vec{a} + \vec{b} = \vec{b} - \vec{a}$）
```

- [ ] **Step 3: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 6
section: 2
number: 1
knowledge_points:
  - vector-addition-subtraction
---

**例题：** 已知 $|\vec{a}| = 3$，$|\vec{b}| = 5$，求 $|\vec{a} + \vec{b}|$ 的取值范围。

**解答：**

**第1步：** 利用向量模的不等式
> 📌 运用知识点：向量的加法与减法

由三角不等式：$||\vec{a}| - |\vec{b}|| \leq |\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$

**第2步：** 代入计算
> 📌 运用知识点：向量的加法与减法

$|3 - 5| \leq |\vec{a} + \vec{b}| \leq 3 + 5$

$2 \leq |\vec{a} + \vec{b}| \leq 8$

当 $\vec{a}, \vec{b}$ 反向时取最小值 $2$；同向时取最大值 $8$。

所以 $|\vec{a} + \vec{b}|$ 的取值范围是 $[2, 8]$。
```

- [ ] **Step 4: 提交**

```bash
git add src/content/textbooks/required-2/chapter-06/section-02/
git commit -m "content(required-2/ch6-s2): 添加向量加法与减法的习题和例题"
```

---

### Task 7: 第六章 section-03 — 向量的数乘运算与基本定理

**Files:**
- Create: `src/content/textbooks/required-2/chapter-06/section-03/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-03/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-03/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 6
section: 3
name: 平面向量基本定理
related_knowledge_points:
  - vector-coordinate
  - vector-scalar-multiplication
---

**定义（精确表述）：** 如果 $\vec{e_1}$、$\vec{e_2}$ 是同一平面内的两个不共线向量，那么对于这一平面内的任一向量 $\vec{a}$，有且只有一对实数 $\lambda_1, \lambda_2$，使得 $\vec{a} = \lambda_1 \vec{e_1} + \lambda_2 \vec{e_2}$。不共线的向量 $\vec{e_1}, \vec{e_2}$ 叫做表示这一平面内所有向量的一组基底。

**通俗解释：** 只要选定两个"不平行"的方向作为基准，平面内任何向量都可以用这两个方向的"拉伸/缩短"组合出来。就像用"向东走多少"和"向北走多少"可以描述平面上任何位置。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "自编"
references: "课标6.3.1"
---

**题目：** 计算：$3(\vec{a} - 2\vec{b}) - 2(\vec{a} + \vec{b})$。

---

**解答：**

**第1步：** 展开
> 📌 运用知识点：向量的数乘运算

$3(\vec{a} - 2\vec{b}) - 2(\vec{a} + \vec{b}) = 3\vec{a} - 6\vec{b} - 2\vec{a} - 2\vec{b}$

**第2步：** 合并同类项
> 📌 运用知识点：向量的数乘运算

$= (3-2)\vec{a} + (-6-2)\vec{b} = \vec{a} - 8\vec{b}$
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - vector-coordinate
  - vector-scalar-multiplication
source: "自编"
references: "课标6.3.1"
---

**题目：** 已知 $\vec{a} = (1, 2)$，$\vec{b} = (-3, 4)$，求 $\vec{a} + \vec{b}$，$\vec{a} - \vec{b}$，$2\vec{a} + 3\vec{b}$ 的坐标。

---

**解答：**

**第1步：** 求 $\vec{a} + \vec{b}$
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\vec{a} + \vec{b} = (1+(-3), 2+4) = (-2, 6)$

**第2步：** 求 $\vec{a} - \vec{b}$
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\vec{a} - \vec{b} = (1-(-3), 2-4) = (4, -2)$

**第3步：** 求 $2\vec{a} + 3\vec{b}$
> 📌 运用知识点：向量的数乘运算

$2\vec{a} + 3\vec{b} = 2(1, 2) + 3(-3, 4) = (2, 4) + (-9, 12) = (-7, 16)$

**💡 解题思路总结：** 向量的坐标运算就是对坐标分量分别进行相应的代数运算。
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 6
section: 3
number: 1
knowledge_points:
  - vector-coordinate
---

**例题：** 已知 $\vec{a} = (2, 3)$，$\vec{b} = (4, -1)$，若 $\vec{c} = \lambda\vec{a} + \mu\vec{b}$，且 $\vec{c} = (8, 5)$，求 $\lambda, \mu$ 的值。

**解答：**

**第1步：** 用坐标表示 $\vec{c}$
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\vec{c} = \lambda(2, 3) + \mu(4, -1) = (2\lambda + 4\mu, 3\lambda - \mu)$

**第2步：** 列方程组
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\begin{cases} 2\lambda + 4\mu = 8 \\ 3\lambda - \mu = 5 \end{cases}$

由第二式：$\mu = 3\lambda - 5$

代入第一式：$2\lambda + 4(3\lambda - 5) = 8$

$2\lambda + 12\lambda - 20 = 8$

$14\lambda = 28$，$\lambda = 2$

$\mu = 3 \times 2 - 5 = 1$

所以 $\lambda = 2$，$\mu = 1$。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-06/section-03/
git commit -m "content(required-2/ch6-s3): 添加向量数乘与基本定理的定义、习题和例题"
```

---

### Task 8: 第六章 section-04 — 向量的数量积

**Files:**
- Create: `src/content/textbooks/required-2/chapter-06/section-04/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-04/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-04/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-04/exercise-3.md`
- Create: `src/content/textbooks/required-2/chapter-06/section-04/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 6
section: 4
name: 向量的数量积
related_knowledge_points:
  - vector-dot-product
---

**定义（精确表述）：** 已知两个非零向量 $\vec{a}$ 和 $\vec{b}$，它们的夹角为 $\theta$（$0° \leq \theta \leq 180°$），则 $|\vec{a}||\vec{b}|\cos\theta$ 叫做 $\vec{a}$ 与 $\vec{b}$ 的数量积（或内积），记作 $\vec{a} \cdot \vec{b}$，即 $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta$。规定 $\vec{0} \cdot \vec{a} = 0$。

**通俗解释：** 数量积衡量的是两个向量在"同一方向上的配合程度"。如果一个力 $\vec{F}$ 沿位移 $\vec{s}$ 方向做了功，功就是 $\vec{F} \cdot \vec{s}$——只有力和位移方向一致时做功最大。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "自编"
references: "课标6.4.1"
---

**题目：** 已知 $|\vec{a}| = 4$，$|\vec{b}| = 3$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$，求 $\vec{a} \cdot \vec{b}$。

---

**解答：**

**第1步：** 代入数量积公式
> 📌 运用知识点：向量的数量积

$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = 4 \times 3 \times \cos 60° = 12 \times \frac{1}{2} = 6$
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "自编"
references: "课标6.4.1"
---

**题目：** 已知 $\vec{a} = (3, 4)$，$\vec{b} = (-1, 2)$，求 $\vec{a} \cdot \vec{b}$ 和 $|\vec{a}|$。

---

**解答：**

**第1步：** 计算数量积
> 📌 运用知识点：向量的数量积

$\vec{a} \cdot \vec{b} = 3 \times (-1) + 4 \times 2 = -3 + 8 = 5$

**第2步：** 计算 $|\vec{a}|$
> 📌 运用知识点：向量的数量积

$|\vec{a}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
```

- [ ] **Step 4: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "自编"
references: "课标6.4.1"
---

**题目：** 已知 $\vec{a} = (1, \sqrt{3})$，$\vec{b} = (-\sqrt{3}, 1)$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：向量的数量积

$\vec{a} \cdot \vec{b} = 1 \times (-\sqrt{3}) + \sqrt{3} \times 1 = -\sqrt{3} + \sqrt{3} = 0$

**第2步：** 判断夹角
> 📌 运用知识点：向量的数量积

因为 $\vec{a} \cdot \vec{b} = 0$，且 $\vec{a}, \vec{b}$ 均为非零向量，

所以 $\vec{a} \perp \vec{b}$，即夹角为 $90°$。

**💡 解题思路总结：** $\vec{a} \cdot \vec{b} = 0$ 是判断两个非零向量垂直的重要方法。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 6
section: 4
number: 1
knowledge_points:
  - vector-dot-product
---

**例题：** 已知 $\vec{a} = (2, 1)$，$\vec{b} = (x, -2)$，若 $\vec{a} \perp \vec{b}$，求 $x$ 的值。

**解答：**

**第1步：** 利用垂直条件
> 📌 运用知识点：向量的数量积

$\vec{a} \perp \vec{b} \Rightarrow \vec{a} \cdot \vec{b} = 0$

**第2步：** 代入坐标计算
> 📌 运用知识点：向量的数量积

$\vec{a} \cdot \vec{b} = 2x + 1 \times (-2) = 2x - 2 = 0$

$x = 1$
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/required-2/chapter-06/section-04/
git commit -m "content(required-2/ch6-s4): 添加向量数量积的定义、习题和例题"
```

---

## Milestone: 第七章内容 — 复数

### Task 9: 第七章 section-01 — 复数的概念

**Files:**
- Create: `src/content/textbooks/required-2/chapter-07/section-01/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-07/section-01/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-07/section-01/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-07/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 7
section: 1
name: 复数
related_knowledge_points:
  - complex-number-concept
---

**定义（精确表述）：** 形如 $z = a + bi$（$a, b \in \mathbb{R}$）的数叫做复数，其中 $i$ 是虚数单位，满足 $i^2 = -1$。$a$ 叫做复数 $z$ 的实部，记作 $\text{Re}(z)$；$b$ 叫做复数 $z$ 的虚部，记作 $\text{Im}(z)$。

**通俗解释：** 复数是在实数的基础上"发明"出来的新数。为了解决 $x^2 = -1$ 这种方程没有实数解的问题，数学家引入了 $i = \sqrt{-1}$，于是每个数都可以写成"实部 + 虚部 × i"的形式。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 7
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - complex-number-concept
source: "自编"
references: "课标7.1.1"
---

**题目：** 实数 $m$ 取什么值时，复数 $z = (m^2 - 2m - 3) + (m^2 + m - 6)i$ 是：

(1) 实数；(2) 纯虚数。

---

**解答：**

**第1步：** (1) $z$ 为实数的条件
> 📌 运用知识点：复数的概念

$z$ 为实数 $\Leftrightarrow$ 虚部为 $0$：$m^2 + m - 6 = 0$

$(m+3)(m-2) = 0$，$m = -3$ 或 $m = 2$

**第2步：** (2) $z$ 为纯虚数的条件
> 📌 运用知识点：复数的概念

$z$ 为纯虚数 $\Leftrightarrow$ 实部为 $0$ 且虚部不为 $0$：

$\begin{cases} m^2 - 2m - 3 = 0 \\ m^2 + m - 6 \neq 0 \end{cases}$

由第一式：$(m-3)(m+1) = 0$，$m = 3$ 或 $m = -1$

验证第二式：$m = 3$ 时 $m^2+m-6 = 9+3-6 = 6 \neq 0$ ✓

$m = -1$ 时 $m^2+m-6 = 1-1-6 = -6 \neq 0$ ✓

所以 $m = 3$ 或 $m = -1$ 时 $z$ 为纯虚数。

**⚠️ 易错提醒：** 纯虚数要求实部为 0 **且**虚部不为 0，两个条件缺一不可。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 7
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - complex-number-concept
source: "自编"
references: "课标7.1.1"
---

**题目：** 已知 $(x - 2) + yi = (3 - x) + (1 - y)i$，其中 $x, y$ 为实数，求 $x, y$ 的值。

---

**解答：**

**第1步：** 利用复数相等的条件
> 📌 运用知识点：复数的概念

两个复数相等 $\Leftrightarrow$ 实部相等且虚部相等：

$\begin{cases} x - 2 = 3 - x \\ y = 1 - y \end{cases}$

**第2步：** 解方程组
> 📌 运用知识点：复数的概念

由第一式：$2x = 5$，$x = \frac{5}{2}$

由第二式：$2y = 1$，$y = \frac{1}{2}$
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 7
section: 1
number: 1
knowledge_points:
  - complex-number-concept
---

**例题：** 已知复数 $z = \frac{m^2 - m - 6}{m + 3} + (m^2 + 5m + 6)i$，问 $m$ 为何值时 $z$ 为实数？

**解答：**

**第1步：** 分析虚部
> 📌 运用知识点：复数的概念

虚部 $= m^2 + 5m + 6 = (m+2)(m+3)$

$z$ 为实数要求虚部 $= 0$：$(m+2)(m+3) = 0$

$m = -2$ 或 $m = -3$

**第2步：** 检查定义域
> 📌 运用知识点：复数的概念

注意实部中分母 $m + 3 \neq 0$，即 $m \neq -3$。

所以 $m = -3$ 不合题意（分母为零），$m = -2$。

当 $m = -2$ 时，实部 $= \frac{4+2-6}{1} = 0$，虚部 $= 0$，$z = 0$ 是实数。

**⚠️ 易错提醒：** 注意检查分母不为零等隐含条件。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-07/section-01/
git commit -m "content(required-2/ch7-s1): 添加复数概念的定义、习题和例题"
```

---

### Task 10: 第七章 section-02 — 复数的四则运算

**Files:**
- Create: `src/content/textbooks/required-2/chapter-07/section-02/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-07/section-02/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-07/section-02/example-1.md`

- [ ] **Step 1: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 7
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "自编"
references: "课标7.2.1"
---

**题目：** 计算：$(2 + 3i)(1 - i)$。

---

**解答：**

**第1步：** 展开乘法
> 📌 运用知识点：复数的四则运算

$(2 + 3i)(1 - i) = 2 \times 1 + 2 \times (-i) + 3i \times 1 + 3i \times (-i)$

$= 2 - 2i + 3i - 3i^2$

**第2步：** 将 $i^2$ 替换为 $-1$
> 📌 运用知识点：复数的四则运算

$= 2 - 2i + 3i - 3(-1) = 2 - 2i + 3i + 3 = 5 + i$
```

- [ ] **Step 2: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 7
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "自编"
references: "课标7.2.1"
---

**题目：** 计算 $\frac{1 + 2i}{3 - 4i}$。

---

**解答：**

**第1步：** 分子分母同乘分母的共轭复数
> 📌 运用知识点：复数的四则运算

$\frac{1 + 2i}{3 - 4i} = \frac{(1 + 2i)(3 + 4i)}{(3 - 4i)(3 + 4i)}$

**第2步：** 计算分母
> 📌 运用知识点：复数的四则运算

$(3 - 4i)(3 + 4i) = 9 + 16 = 25$

**第3步：** 计算分子
> 📌 运用知识点：复数的四则运算

$(1 + 2i)(3 + 4i) = 3 + 4i + 6i + 8i^2 = 3 + 10i - 8 = -5 + 10i$

**第4步：** 求结果
> 📌 运用知识点：复数的四则运算

$\frac{-5 + 10i}{25} = -\frac{1}{5} + \frac{2}{5}i$

**💡 解题思路总结：** 复数除法的核心技巧——"分母实数化"：分子分母同乘分母的共轭复数。
```

- [ ] **Step 3: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 7
section: 2
number: 1
knowledge_points:
  - complex-number-operations
---

**例题：** 已知 $z = 1 + i$，求 $z^2$，$z^3$，$z^4$。

**解答：**

**第1步：** 计算 $z^2$
> 📌 运用知识点：复数的四则运算

$z^2 = (1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$

**第2步：** 计算 $z^3$
> 📌 运用知识点：复数的四则运算

$z^3 = z^2 \cdot z = 2i(1+i) = 2i + 2i^2 = -2 + 2i$

**第3步：** 计算 $z^4$
> 📌 运用知识点：复数的四则运算

$z^4 = (z^2)^2 = (2i)^2 = 4i^2 = -4$
```

- [ ] **Step 4: 提交**

```bash
git add src/content/textbooks/required-2/chapter-07/section-02/
git commit -m "content(required-2/ch7-s2): 添加复数四则运算的习题和例题"
```

---

## Milestone: 第八章内容 — 立体几何初步

### Task 11: 第八章 section-01 — 基本立体图形与直观图

**Files:**
- Create: `src/content/textbooks/required-2/chapter-08/section-01/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-01/definition-2.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-01/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-01/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（基本立体图形）**

```markdown
---
type: definition
textbook: required-2
chapter: 8
section: 1
name: 基本立体图形
related_knowledge_points:
  - solid-geometry-basics
---

**定义（精确表述）：** 棱柱：有两个面互相平行，其余各面都是四边形，并且每相邻两个四边形的公共边都互相平行。圆柱：以矩形的一边所在直线为旋转轴，其余三边旋转形成的面所围成的旋转体。圆锥：以直角三角形的一条直角边所在直线为旋转轴旋转形成。球：以半圆的直径所在直线为旋转轴旋转形成。

**通俗解释：** 立体图形就是"鼓起来"的图形。棱柱像"砖块"（上下两个一样的面），棱锥像"金字塔"（一个底面加一个尖），球就是"球"，圆柱像"水管"，圆锥像"冰淇淋蛋筒"。
```

- [ ] **Step 2: 创建 definition-2.md（三视图与直观图）**

```markdown
---
type: definition
textbook: required-2
chapter: 8
section: 1
name: 三视图与直观图
related_knowledge_points:
  - solid-geometry-drawing
---

**定义（精确表述）：** 三视图是将物体按正投影向三个互相垂直的投影面投影所得的图形，包括正视图（从前向后）、侧视图（从左向右）、俯视图（从上向下）。规则："长对正、高平齐、宽相等"。斜二测画法：画直观图时，$x'$ 轴与 $y'$ 轴成 $45°$（或 $135°$），平行于 $x$ 轴的线段长度不变，平行于 $y$ 轴的线段长度减半。

**通俗解释：** 三视图就像从三个方向"拍照"来描述一个立体物体。直观图则是用一种特殊画法把立体物体画在纸上，让它看起来有"立体感"。
```

- [ ] **Step 3: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - solid-geometry-basics
source: "自编"
references: "课标8.1.1"
---

**题目：** 下列几何体中，哪些是旋转体？哪些是多面体？

(1) 圆柱 (2) 三棱柱 (3) 圆锥 (4) 正方体 (5) 球

---

**解答：**

**第1步：** 分类
> 📌 运用知识点：基本立体图形

旋转体：由平面图形绕某条直线旋转而成。

(1) 圆柱（矩形绕一边旋转）、(3) 圆锥（直角三角形绕直角边旋转）、(5) 球（半圆绕直径旋转）。

多面体：由若干个平面多边形围成的几何体。

(2) 三棱柱、(4) 正方体。
```

- [ ] **Step 4: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - solid-geometry-drawing
source: "自编"
references: "课标8.2.1"
---

**题目：** 一个正三角形的边长为 $2$，用斜二测画法画出其直观图后，求直观图中平行于 $y'$ 轴的边的长度。

---

**解答：**

**第1步：** 应用斜二测画法规则
> 📌 运用知识点：立体图形的直观图

斜二测画法中，平行于 $y$ 轴的线段在直观图中长度变为原来的一半。

**第2步：** 计算
> 📌 运用知识点：立体图形的直观图

正三角形边长为 $2$，其中一条边平行于 $y$ 轴（取决于放置方式）。

直观图中该边长度 $= 2 \times \frac{1}{2} = 1$。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 8
section: 1
number: 1
knowledge_points:
  - solid-geometry-drawing
---

**例题：** 某几何体的正视图和侧视图都是边长为 $2$ 的正三角形，俯视图是边长为 $2$ 的正方形，求该几何体的体积。

**解答：**

**第1步：** 由三视图还原几何体
> 📌 运用知识点：立体图形的直观图

正视图和侧视图都是正三角形，俯视图是正方形，

该几何体是底面为正方形的正四棱锥。

底面边长 $= 2$，高 $= \sqrt{2^2 - 1^2} = \sqrt{3}$。

**第2步：** 计算体积
> 📌 运用知识点：简单几何体的表面积与体积

$V = \frac{1}{3} S h = \frac{1}{3} \times 2^2 \times \sqrt{3} = \frac{4\sqrt{3}}{3}$
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/required-2/chapter-08/section-01/
git commit -m "content(required-2/ch8-s1): 添加基本立体图形与直观图的定义、习题和例题"
```

---

### Task 12: 第八章 section-02 — 表面积与体积

**Files:**
- Create: `src/content/textbooks/required-2/chapter-08/section-02/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-02/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-02/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 8
section: 2
name: 几何体的表面积与体积公式
related_knowledge_points:
  - solid-surface-area-volume
---

**定义（精确表述）：** 柱体体积 $V = Sh$；锥体体积 $V = \frac{1}{3}Sh$；台体体积 $V = \frac{1}{3}(S_1 + S_2 + \sqrt{S_1 S_2})h$。球体积 $V = \frac{4}{3}\pi r^3$，球表面积 $S = 4\pi r^2$。圆柱侧面积 $S_{\text{侧}} = 2\pi rl$；圆锥侧面积 $S_{\text{侧}} = \pi rl$。

**通俗解释：** 柱体（如长方体、圆柱）的体积就是"底面积×高"。锥体（如金字塔、圆锥）是同底同高柱体的三分之一。球越大体积越大，与半径的三次方成正比。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - solid-surface-area-volume
source: "自编"
references: "课标8.3.1"
---

**题目：** 一个正四棱柱的底面边长为 $3$ cm，高为 $5$ cm，求其体积和表面积。

---

**解答：**

**第1步：** 求体积
> 📌 运用知识点：简单几何体的表面积与体积

$V = Sh = 3^2 \times 5 = 9 \times 5 = 45$ cm³

**第2步：** 求表面积
> 📌 运用知识点：简单几何体的表面积与体积

$S = 2S_{\text{底}} + S_{\text{侧}} = 2 \times 9 + 4 \times 3 \times 5 = 18 + 60 = 78$ cm²
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - solid-surface-area-volume
source: "自编"
references: "课标8.3.1"
---

**题目：** 一个圆锥的底面半径为 $3$，母线长为 $5$，求其体积和侧面积。

---

**解答：**

**第1步：** 求高
> 📌 运用知识点：简单几何体的表面积与体积

$h = \sqrt{l^2 - r^2} = \sqrt{25 - 9} = \sqrt{16} = 4$

**第2步：** 求体积
> 📌 运用知识点：简单几何体的表面积与体积

$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times 9 \times 4 = 12\pi$

**第3步：** 求侧面积
> 📌 运用知识点：简单几何体的表面积与体积

$S_{\text{侧}} = \pi r l = \pi \times 3 \times 5 = 15\pi$
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 8
section: 2
number: 1
knowledge_points:
  - solid-surface-area-volume
---

**例题：** 一个正三棱锥的底面边长为 $6$，侧面与底面所成的角为 $60°$，求其体积。

**解答：**

**第1步：** 求底面积
> 📌 运用知识点：简单几何体的表面积与体积

$S_{\text{底}} = \frac{\sqrt{3}}{4} \times 6^2 = 9\sqrt{3}$

**第2步：** 求高
> 📌 运用知识点：简单几何体的表面积与体积

底面中心到边的距离 $d = \frac{6}{2\sqrt{3}} \times \frac{\sqrt{3}}{1} = \frac{6\sqrt{3}}{6} = \sqrt{3}$

（正三角形中心到边的距离 = $\frac{a}{2\sqrt{3}} \times \sqrt{3} = \frac{a\sqrt{3}}{6} = \frac{6\sqrt{3}}{6} = \sqrt{3}$）

$\tan 60° = \frac{h}{d}$，$h = d \tan 60° = \sqrt{3} \times \sqrt{3} = 3$

**第3步：** 求体积
> 📌 运用知识点：简单几何体的表面积与体积

$V = \frac{1}{3} S_{\text{底}} h = \frac{1}{3} \times 9\sqrt{3} \times 3 = 9\sqrt{3}$
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-08/section-02/
git commit -m "content(required-2/ch8-s2): 添加表面积与体积的定义、习题和例题"
```

---

### Task 13: 第八章 section-03 — 空间位置关系与平行

**Files:**
- Create: `src/content/textbooks/required-2/chapter-08/section-03/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-03/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-03/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 8
section: 3
name: 空间中的平行关系
related_knowledge_points:
  - parallel-judgment
  - spatial-position-relation
---

**定义（精确表述）：** 线面平行判定定理：平面外一条直线与此平面内一条直线平行，则该直线与此平面平行。符号语言：若 $a \not\subset \alpha$，$b \subset \alpha$，$a \parallel b$，则 $a \parallel \alpha$。面面平行判定定理：一个平面内有两条相交直线分别平行于另一个平面，则这两个平面平行。

**通俗解释：** 要证明一条线和一面墙平行，只要在这面墙里找到一条线和它平行就行。要证明两面墙平行，只要在一面墙里找到两条交叉的线分别和另一面墙平行就行。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 3
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "自编"
references: "课标8.4.1"
---

**题目：** 判断下列说法是否正确：

(1) 如果两条直线没有公共点，那么它们平行。

(2) 如果一条直线与一个平面平行，那么这条直线与平面内的所有直线都平行。

---

**解答：**

**第1步：** 判断 (1)
> 📌 运用知识点：空间点、直线、平面之间的位置关系

(1) 错误。空间中两条直线没有公共点，可能平行也可能异面。

**第2步：** 判断 (2)
> 📌 运用知识点：空间点、直线、平面之间的位置关系

(2) 错误。直线 $a \parallel$ 平面 $\alpha$，则 $a$ 与 $\alpha$ 内的直线可能平行，也可能异面。只有经过 $a$ 的平面与 $\alpha$ 的交线才与 $a$ 平行。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - parallel-judgment
source: "自编"
references: "课标8.4.1"
---

**题目：** 如图，在正方体 $ABCD-A_1B_1C_1D_1$ 中，$E$ 是 $DD_1$ 的中点。求证：$BD_1 \parallel$ 平面 $ACE$。

---

**解答：**

**第1步：** 找辅助线
> 📌 运用知识点：平行的判定与性质

连接 $BD$，设 $BD \cap AC = O$（$O$ 为 $BD$ 的中点，因为正方形的对角线互相平分）。

连接 $OE$。

**第2步：** 证明 $BD_1 \parallel OE$
> 📌 运用知识点：平行的判定与性质

在 $\triangle BDD_1$ 中，$O$ 是 $BD$ 的中点，$E$ 是 $DD_1$ 的中点，

所以 $OE$ 是 $\triangle BDD_1$ 的中位线，$OE \parallel BD_1$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：平行的判定与性质

$OE \subset$ 平面 $ACE$，$BD_1 \not\subset$ 平面 $ACE$，$OE \parallel BD_1$，

所以 $BD_1 \parallel$ 平面 $ACE$。

**💡 解题思路总结：** 证明线面平行的关键：在平面内找到一条直线与目标直线平行。常用技巧：中位线、平行四边形。
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 8
section: 3
number: 1
knowledge_points:
  - parallel-judgment
---

**例题：** 在正方体 $ABCD-A_1B_1C_1D_1$ 中，求证：平面 $AB_1D_1 \parallel$ 平面 $BDC_1$。

**解答：**

**第1步：** 证明 $AB_1 \parallel$ 平面 $BDC_1$
> 📌 运用知识点：平行的判定与性质

在正方体中，$AB_1 \parallel DC_1$（因为 $AB_1$ 和 $DC_1$ 分别是正方体相对面上的对角线，方向相同）。

$DC_1 \subset$ 平面 $BDC_1$，$AB_1 \not\subset$ 平面 $BDC_1$，

所以 $AB_1 \parallel$ 平面 $BDC_1$。

**第2步：** 证明 $AD_1 \parallel$ 平面 $BDC_1$
> 📌 运用知识点：平行的判定与性质

同理 $AD_1 \parallel BC_1$，$BC_1 \subset$ 平面 $BDC_1$，

所以 $AD_1 \parallel$ 平面 $BDC_1$。

**第3步：** 应用面面平行判定定理
> 📌 运用知识点：平行的判定与性质

$AB_1$ 和 $AD_1$ 是平面 $AB_1D_1$ 内两条相交直线（交于 $A$），

且分别平行于平面 $BDC_1$，

所以平面 $AB_1D_1 \parallel$ 平面 $BDC_1$。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-08/section-03/
git commit -m "content(required-2/ch8-s3): 添加空间位置关系与平行的定义、习题和例题"
```

---

### Task 14: 第八章 section-04 — 垂直的判定与性质 + 空间角

**Files:**
- Create: `src/content/textbooks/required-2/chapter-08/section-04/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-04/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-04/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-08/section-04/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 8
section: 4
name: 空间中的垂直关系与空间角
related_knowledge_points:
  - perpendicular-judgment
  - spatial-angle
---

**定义（精确表述）：** 线面垂直判定定理：一条直线与一个平面内的两条相交直线都垂直，则该直线与此平面垂直。面面垂直判定定理：一个平面过另一个平面的一条垂线，则这两个平面垂直。异面直线所成角：过空间一点分别作两条异面直线的平行线，所成锐角或直角，范围 $(0°, 90°]$。直线与平面所成角：直线与其在平面上的射影所成角，范围 $[0°, 90°]$。二面角：从一条直线出发的两个半平面所组成的图形，其平面角在棱上取点，在两个半平面内分别作垂直于棱的射线所成的角。

**通俗解释：** 垂直就是"成 90° 角"。证明线面垂直，要在面内找两条交叉的线都和目标线垂直。空间角就是把三维的"角"投影到二维来量。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 4
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
source: "自编"
references: "课标8.5.1"
---

**题目：** 如图，在正方体 $ABCD-A_1B_1C_1D_1$ 中，求证：$AC \perp$ 平面 $BDD_1B_1$。

---

**解答：**

**第1步：** 证明 $AC \perp BD$
> 📌 运用知识点：垂直的判定与性质

在正方形 $ABCD$ 中，对角线 $AC \perp BD$。

**第2步：** 证明 $AC \perp BB_1$
> 📌 运用知识点：垂直的判定与性质

$BB_1 \perp$ 底面 $ABCD$，$AC \subset$ 底面 $ABCD$，

所以 $BB_1 \perp AC$。

**第3步：** 应用线面垂直判定定理
> 📌 运用知识点：垂直的判定与性质

$BD$ 和 $BB_1$ 是平面 $BDD_1B_1$ 内两条相交直线（交于 $B$），

$AC \perp BD$ 且 $AC \perp BB_1$，

所以 $AC \perp$ 平面 $BDD_1B_1$。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 8
section: 4
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - spatial-angle
  - perpendicular-judgment
source: "自编"
references: "课标8.5.1"
---

**题目：** 在正方体 $ABCD-A_1B_1C_1D_1$ 中（棱长为 $1$），求异面直线 $A_1B$ 与 $B_1C$ 所成的角。

---

**解答：**

**第1步：** 平移构造
> 📌 运用知识点：空间角

连接 $A_1D$。在正方体中 $A_1D \parallel B_1C$（因为 $A_1B_1CD$ 是平行四边形）。

所以 $A_1B$ 与 $B_1C$ 所成的角 $= A_1B$ 与 $A_1D$ 所成的角 $= \angle BA_1D$。

**第2步：** 计算 $\angle BA_1D$
> 📌 运用知识点：空间角

$A_1B = A_1D = \sqrt{2}$（正方形对角线），$BD = \sqrt{2}$（正方形对角线）。

所以 $\triangle A_1BD$ 是等边三角形，$\angle BA_1D = 60°$。

异面直线 $A_1B$ 与 $B_1C$ 所成的角为 $60°$。

**💡 解题思路总结：** 求异面直线所成角的方法：平移其中一条（或两条），使它们相交，然后求交角。
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 8
section: 4
number: 1
knowledge_points:
  - perpendicular-judgment
  - spatial-angle
---

**例题：** 在正三棱柱 $ABC-A_1B_1C_1$ 中，所有棱长均为 $2$，$D$ 是 $CC_1$ 的中点。求证：$A_1B \perp$ 平面 $ABD$。

**解答：**

**第1步：** 建立关键垂直关系
> 📌 运用知识点：垂直的判定与性质

取 $AB$ 中点 $M$，连接 $A_1M$。

正三角形 $A_1AB$ 中（$A_1A = AB = 2$），$M$ 为 $AB$ 中点，所以 $A_1M \perp AB$。

**第2步：** 证明 $A_1B \perp AD$
> 📌 运用知识点：垂直的判定与性质

通过计算：$A_1B = 2$，$AD = \sqrt{AC^2 + CD^2} = \sqrt{4 + 1} = \sqrt{5}$

$BD = \sqrt{BC^2 + CD^2} = \sqrt{4+1} = \sqrt{5}$

在 $\triangle A_1BD$ 中验证：$A_1B^2 + ... $（用向量法或坐标法更简洁）

设 $A$ 为原点，建立空间直角坐标系，计算各点坐标后用 $\vec{A_1B} \cdot \vec{AD} = 0$ 和 $\vec{A_1B} \cdot \vec{AB} = 0$ 验证。

**💡 解题思路总结：** 立体几何中证明垂直，可以用传统几何法（在面内找两条相交线垂直），也可以用向量法（验证数量积为零）。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-08/section-04/
git commit -m "content(required-2/ch8-s4): 添加垂直判定与空间角的定义、习题和例题"
```

---

## Milestone: 第九章内容 — 统计

### Task 15: 第九章 section-01 — 随机抽样

**Files:**
- Create: `src/content/textbooks/required-2/chapter-09/section-01/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-09/section-01/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-09/section-01/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-09/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 9
section: 1
name: 随机抽样方法
related_knowledge_points:
  - random-sampling
---

**定义（精确表述）：** 简单随机抽样：从含有 $N$ 个个体的总体中不放回地逐个抽取 $n$ 个个体作为样本，每个个体被抽到的概率为 $\frac{n}{N}$。系统抽样：将总体 $N$ 个个体编号，分成均衡的若干部分，按预先定出的规则从每部分抽取一个个体。分层抽样：当总体由差异明显的几部分组成时，将总体按某种特征分成若干层，再按各层在总体中所占比例进行抽样。

**通俗解释：** 抽样就是"从一大堆东西中取一小部分来了解整体"。简单随机抽样像抽签；系统抽样像"每隔 10 个取一个"；分层抽样像"按比例从各个班级分别抽人"。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 9
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - random-sampling
source: "自编"
references: "课标9.1.1"
---

**题目：** 某学校有高一学生 400 人，高二学生 320 人，高三学生 280 人。现用分层抽样的方法抽取一个容量为 $n$ 的样本，若高一学生抽取了 20 人，求 $n$ 的值。

---

**解答：**

**第1步：** 求抽样比
> 📌 运用知识点：随机抽样

高一的抽样比 $= \frac{20}{400} = \frac{1}{20}$

**第2步：** 求样本容量
> 📌 运用知识点：随机抽样

总人数 $= 400 + 320 + 280 = 1000$

$n = 1000 \times \frac{1}{20} = 50$
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 9
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - random-sampling
source: "自编"
references: "课标9.1.1"
---

**题目：** 某单位有职工 160 人，其中业务人员 112 人，管理人员 16 人，后勤人员 32 人。为了解职工的上班通勤时间，要抽取一个容量为 20 的样本。应采用什么抽样方法？各层分别抽取多少人？

---

**解答：**

**第1步：** 确定抽样方法
> 📌 运用知识点：随机抽样

总体由差异明显的三类人员组成，应采用分层抽样。

**第2步：** 计算各层抽样人数
> 📌 运用知识点：随机抽样

抽样比 $= \frac{20}{160} = \frac{1}{8}$

业务人员：$112 \times \frac{1}{8} = 14$ 人

管理人员：$16 \times \frac{1}{8} = 2$ 人

后勤人员：$32 \times \frac{1}{8} = 4$ 人

验证：$14 + 2 + 4 = 20$ ✓
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 9
section: 1
number: 1
knowledge_points:
  - random-sampling
---

**例题：** 某工厂生产的产品用传送带输送，质检员每隔 10 分钟从传送带上取一件产品进行检验。这种抽样方法属于什么抽样？

**解答：**

**第1步：** 分析特征
> 📌 运用知识点：随机抽样

每隔固定时间（10 分钟）取一件产品，这是按固定间隔抽取，

属于系统抽样（等距抽样）。

**💡 解题思路总结：** 系统抽样的特征：将总体"等距分段"，按预定规则从每段取一个个体。"每隔..."是系统抽样的典型标志词。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-09/section-01/
git commit -m "content(required-2/ch9-s1): 添加随机抽样的定义、习题和例题"
```

---

### Task 16: 第九章 section-02 — 用样本估计总体

**Files:**
- Create: `src/content/textbooks/required-2/chapter-09/section-02/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-09/section-02/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-09/section-02/example-1.md`

- [ ] **Step 1: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 9
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - sample-estimate-population
source: "自编"
references: "课标9.2.1"
---

**题目：** 一组数据 $2, 3, 5, 7, 8$，求这组数据的平均数、中位数和方差。

---

**解答：**

**第1步：** 求平均数
> 📌 运用知识点：用样本估计总体

$\bar{x} = \frac{2+3+5+7+8}{5} = \frac{25}{5} = 5$

**第2步：** 求中位数
> 📌 运用知识点：用样本估计总体

数据已排序：$2, 3, 5, 7, 8$，中间值为 $5$。中位数 $= 5$。

**第3步：** 求方差
> 📌 运用知识点：用样本估计总体

$s^2 = \frac{(2-5)^2 + (3-5)^2 + (5-5)^2 + (7-5)^2 + (8-5)^2}{5}$

$= \frac{9 + 4 + 0 + 4 + 9}{5} = \frac{26}{5} = 5.2$
```

- [ ] **Step 2: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 9
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - sample-estimate-population
source: "自编"
references: "课标9.2.1"
---

**题目：** 某频率分布直方图中，各小矩形的面积从左到右依次为 $0.05, 0.15, 0.3, 0.25, 0.15, 0.1$。已知样本容量为 $200$，求第三组的频数。

---

**解答：**

**第1步：** 理解频率分布直方图
> 📌 运用知识点：用样本估计总体

频率分布直方图中，每个小矩形的面积 $=$ 该组的频率。

**第2步：** 求第三组频数
> 📌 运用知识点：用样本估计总体

第三组频率 $= 0.3$

第三组频数 $= 200 \times 0.3 = 60$
```

- [ ] **Step 3: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 9
section: 2
number: 1
knowledge_points:
  - sample-estimate-population
---

**例题：** 甲、乙两种棉花各抽取 5 株，测得纤维长度（mm）如下：

甲：$25, 27, 30, 23, 25$

乙：$26, 24, 25, 26, 24$

哪种棉花的纤维长度更稳定？

**解答：**

**第1步：** 分别求平均数
> 📌 运用知识点：用样本估计总体

$\bar{x}_{\text{甲}} = \frac{25+27+30+23+25}{5} = \frac{130}{5} = 26$

$\bar{x}_{\text{乙}} = \frac{26+24+25+26+24}{5} = \frac{125}{5} = 25$

**第2步：** 分别求方差
> 📌 运用知识点：用样本估计总体

$s^2_{\text{甲}} = \frac{(25-26)^2+(27-26)^2+(30-26)^2+(23-26)^2+(25-26)^2}{5} = \frac{1+1+16+9+1}{5} = 5.6$

$s^2_{\text{乙}} = \frac{(26-25)^2+(24-25)^2+(25-25)^2+(26-25)^2+(24-25)^2}{5} = \frac{1+1+0+1+1}{5} = 0.8$

**第3步：** 比较
> 📌 运用知识点：用样本估计总体

$s^2_{\text{乙}} < s^2_{\text{甲}}$，乙的方差更小，纤维长度更稳定。

**💡 解题思路总结：** 方差越小，数据越集中、越稳定。比较稳定性看方差，比较平均水平看平均数。
```

- [ ] **Step 4: 提交**

```bash
git add src/content/textbooks/required-2/chapter-09/section-02/
git commit -m "content(required-2/ch9-s2): 添加用样本估计总体的习题和例题"
```

---

## Milestone: 第十章内容 — 概率

### Task 17: 第十章 section-01 — 随机事件与概率

**Files:**
- Create: `src/content/textbooks/required-2/chapter-10/section-01/definition-1.md`
- Create: `src/content/textbooks/required-2/chapter-10/section-01/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-10/section-01/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-10/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md**

```markdown
---
type: definition
textbook: required-2
chapter: 10
section: 1
name: 随机事件与概率
related_knowledge_points:
  - random-event-probability
---

**定义（精确表述）：** 在一定条件下可能发生也可能不发生的事件叫做随机事件。必然发生的事件叫做必然事件，$P = 1$。一定不发生的事件叫做不可能事件，$P = 0$。对于任意事件 $A$，$0 \leq P(A) \leq 1$。互斥事件：事件 $A$ 与 $B$ 不能同时发生（$A \cap B = \emptyset$）。对立事件：互斥事件 $A$ 与 $B$ 中必有一个发生（$A \cap B = \emptyset$ 且 $A \cup B$ 为必然事件）。

**通俗解释：** 概率就是"某件事发生的可能性有多大"，用 0 到 1 之间的数表示。0 表示"绝对不可能"，1 表示"一定会"。互斥就像"鱼和熊掌不可兼得"，对立则是"非此即彼"。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 10
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "自编"
references: "课标10.1.1"
---

**题目：** 从一副扑克牌（52 张，不含大小王）中随机抽取一张，求：

(1) 抽到红心的概率；(2) 抽到红色牌的概率；(3) 抽到既不是红心也不是黑色牌的概率。

---

**解答：**

**第1步：** (1) 抽到红心的概率
> 📌 运用知识点：随机事件与概率

红心有 13 张，$P(\text{红心}) = \frac{13}{52} = \frac{1}{4}$

**第2步：** (2) 抽到红色牌的概率
> 📌 运用知识点：随机事件与概率

红色牌有 26 张，$P(\text{红色}) = \frac{26}{52} = \frac{1}{2}$

**第3步：** (3) 抽到既不是红心也不是黑色牌
> 📌 运用知识点：随机事件与概率

"既不是红心也不是黑色" = "红色且不是红心" = "方块"

$P(\text{方块}) = \frac{13}{52} = \frac{1}{4}$
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 10
section: 1
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "自编"
references: "课标10.1.1"
---

**题目：** 袋中有 3 个红球和 2 个白球，从中随机取出 2 个球。求：

(1) 取出的 2 个球都是红球的概率；(2) 取出的 2 个球颜色不同的概率。

---

**解答：**

**第1步：** 列出总的取法
> 📌 运用知识点：随机事件与概率

从 5 个球中取 2 个：$C_5^2 = 10$ 种

**第2步：** (1) 都是红球
> 📌 运用知识点：随机事件与概率

从 3 个红球中取 2 个：$C_3^2 = 3$ 种

$P(\text{都是红球}) = \frac{3}{10}$

**第3步：** (2) 颜色不同
> 📌 运用知识点：随机事件与概率

1 红 1 白：$C_3^1 \times C_2^1 = 3 \times 2 = 6$ 种

$P(\text{颜色不同}) = \frac{6}{10} = \frac{3}{5}$

**💡 解题思路总结：** 古典概型：$P(A) = \frac{A\text{包含的基本事件数}}{\text{基本事件总数}}$。
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 10
section: 1
number: 1
knowledge_points:
  - random-event-probability
---

**例题：** 甲、乙两人各射击一次，甲命中的概率为 $0.8$，乙命中的概率为 $0.7$。求至少有一人命中的概率。

**解答：**

**第1步：** 利用对立事件
> 📌 运用知识点：随机事件与概率

"至少一人命中"的对立事件是"两人都没命中"。

$P(\text{甲不中}) = 1 - 0.8 = 0.2$

$P(\text{乙不中}) = 1 - 0.7 = 0.3$

**第2步：** 计算
> 📌 运用知识点：事件的相互独立性

$P(\text{都不中}) = 0.2 \times 0.3 = 0.06$

$P(\text{至少一人中}) = 1 - 0.06 = 0.94$

**💡 解题思路总结：** "至少..."问题通常用对立事件来算：$P(\text{至少一个}) = 1 - P(\text{一个都没有})$。
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/required-2/chapter-10/section-01/
git commit -m "content(required-2/ch10-s1): 添加随机事件与概率的定义、习题和例题"
```

---

### Task 18: 第十章 section-02 — 事件的独立性与频率

**Files:**
- Create: `src/content/textbooks/required-2/chapter-10/section-02/exercise-1.md`
- Create: `src/content/textbooks/required-2/chapter-10/section-02/exercise-2.md`
- Create: `src/content/textbooks/required-2/chapter-10/section-02/example-1.md`

- [ ] **Step 1: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - event-independence
source: "自编"
references: "课标10.2.1"
---

**题目：** 抛掷两枚硬币，设事件 $A$ = "第一枚正面朝上"，事件 $B$ = "第二枚正面朝上"。判断 $A, B$ 是否独立，并求两枚都正面朝上的概率。

---

**解答：**

**第1步：** 判断独立性
> 📌 运用知识点：事件的相互独立性

两枚硬币各自的结果互不影响，所以 $A, B$ 相互独立。

**第2步：** 计算概率
> 📌 运用知识点：事件的相互独立性

$P(A) = \frac{1}{2}$，$P(B) = \frac{1}{2}$

$P(AB) = P(A) \times P(B) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
```

- [ ] **Step 2: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - frequency-probability
  - random-event-probability
source: "自编"
references: "课标10.2.1"
---

**题目：** 某射手在同一条件下射击 100 次，击中环数统计如下：

| 环数 | 7 | 8 | 9 | 10 |
|------|---|---|---|---|
| 次数 | 15 | 30 | 35 | 20 |

(1) 计算击中各环数的频率；
(2) 估计该射手击中 9 环或 10 环的概率。

---

**解答：**

**第1步：** 计算各环数频率
> 📌 运用知识点：频率与概率

$P(7) = \frac{15}{100} = 0.15$

$P(8) = \frac{30}{100} = 0.30$

$P(9) = \frac{35}{100} = 0.35$

$P(10) = \frac{20}{100} = 0.20$

**第2步：** 估计击中 9 环或 10 环的概率
> 📌 运用知识点：频率与概率

"击中 9 环"和"击中 10 环"是互斥事件，

$P(9 \text{ 或 } 10) = 0.35 + 0.20 = 0.55$

用频率估计概率：该射手击中 9 环或 10 环的概率约为 $0.55$。
```

- [ ] **Step 3: 创建 example-1.md**

```markdown
---
type: example
textbook: required-2
chapter: 10
section: 2
number: 1
knowledge_points:
  - event-independence
  - random-event-probability
---

**例题：** 某电路系统中有两个元件 $A, B$ 独立工作。$A$ 正常工作的概率为 $0.9$，$B$ 正常工作的概率为 $0.8$。求：

(1) 两个元件都正常工作的概率；
(2) 至少有一个元件正常工作的概率。

**解答：**

**第1步：** (1) 都正常工作
> 📌 运用知识点：事件的相互独立性

$A, B$ 独立工作，$P(AB) = P(A) \times P(B) = 0.9 \times 0.8 = 0.72$

**第2步：** (2) 至少一个正常
> 📌 运用知识点：随机事件与概率

对立事件：两个都不正常。

$P(\bar{A}\bar{B}) = P(\bar{A}) \times P(\bar{B}) = 0.1 \times 0.2 = 0.02$

$P(\text{至少一个正常}) = 1 - 0.02 = 0.98$
```

- [ ] **Step 4: 提交**

```bash
git add src/content/textbooks/required-2/chapter-10/section-02/
git commit -m "content(required-2/ch10-s2): 添加事件独立性与频率的习题和例题"
```

---

## Milestone: 页面与构建更新

### Task 19: 更新 textbook/[id].astro — 添加 required-2 章标题

**Files:**
- Modify: `src/pages/textbook/[id].astro`

- [ ] **Step 1: 在 chapterTitles 映射中添加 required-2**

在 `chapterTitles` 对象中添加必修第二册的章标题：

```typescript
const chapterTitles: Record<string, string[]> = {
  'required-1': [
    '',
    '集合与常用逻辑用语',
    '一元二次函数、方程和不等式',
    '函数的概念与性质',
    '指数函数与对数函数',
    '三角函数',
  ],
  'required-2': [
    '', '', '', '', '', // chapters 1-5 不存在
    '平面向量及其应用',   // chapter 6
    '复数',               // chapter 7
    '立体几何初步',       // chapter 8
    '统计',               // chapter 9
    '概率',               // chapter 10
  ],
};
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

Expected: 构建成功，`/pep-math/textbook/required-2/` 页面显示 5 章内容

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/[id].astro
git commit -m "feat(pages): add required-2 chapter titles to textbook page"
```

---

### Task 20: 更新 knowledge-graph.astro — 添加 required-2 到教材列表

**Files:**
- Modify: `src/pages/knowledge-graph.astro`

- [ ] **Step 1: 更新 textbooks 数组**

```typescript
const textbooks = [
  { id: 'required-1', name: '必修 第一册' },
  { id: 'required-2', name: '必修 第二册' },
];
```

- [ ] **Step 2: 添加教材切换交互**

添加 JavaScript 使 textbook-select 下拉框切换时更新知识图谱的教材筛选：

```html
<script>
  document.getElementById('textbook-select')?.addEventListener('change', (e) => {
    const textbookId = (e.target as HTMLSelectElement).value;
    // 重新加载图谱或使用 Cytoscape API 筛选
    window.location.href = `/pep-math/knowledge-graph?textbook=${textbookId}`;
  });
</script>
```

- [ ] **Step 3: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge-graph.astro
git commit -m "feat(pages): add required-2 to knowledge graph textbook selector"
```

---

### Task 21: 更新 KnowledgeGraph 组件 — 支持教材筛选交互

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: 添加 textbookFilter prop 支持动态切换**

确保 KnowledgeGraph 组件接收 `textbookFilter` prop 并在 `useEffect` 中根据该 prop 筛选节点：

```typescript
const filteredNodes = graph.nodes.filter(n => {
  const matchesTextbook = textbookFilter
    ? n.textbooks.includes(textbookFilter)
    : true;
  const matchesCategory = selectedCategory === 'all'
    ? true
    : n.category === selectedCategory;
  return matchesTextbook && matchesCategory;
});
```

- [ ] **Step 2: 更新测试**

```typescript
it('filters nodes by textbook', () => {
  const graph = {
    nodes: [
      { id: 'set-concept', name: '集合', category: '集合', textbooks: ['required-1'], x: 0, y: 0 },
      { id: 'vector-concept', name: '向量', category: '向量', textbooks: ['required-2'], x: 100, y: 0 },
    ],
    edges: [],
  };
  const { container } = render(
    <KnowledgeGraph graph={graph} textbookFilter="required-1" />
  );
  // Only required-1 nodes should be visible
  expect(container.querySelector('#cy')).toBeTruthy();
});
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/KnowledgeGraph.test.tsx
git add src/components/KnowledgeGraph.tsx tests/components/KnowledgeGraph.test.tsx
git commit -m "feat(components): add textbook filtering to KnowledgeGraph"
```

---

### Task 22: 必修二内容完整性测试

**Files:**
- Create: `tests/content/required-2-integrity.test.ts`

- [ ] **Step 1: 编写测试**

```typescript
// tests/content/required-2-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/required-2');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Required-2 content integrity', () => {
  it('has all 5 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(5);
    expect(chapters).toContain('chapter-06');
    expect(chapters).toContain('chapter-07');
    expect(chapters).toContain('chapter-08');
    expect(chapters).toContain('chapter-09');
    expect(chapters).toContain('chapter-10');
  });

  it('every exercise has required frontmatter fields', () => {
    const findFiles = (dir: string, pattern: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath, pattern));
        } else if (item.startsWith(pattern)) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const exercises = findFiles(textbooksDir, 'exercise-');
    expect(exercises.length).toBeGreaterThanOrEqual(25);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('required-2');
      expect(data.difficulty).toMatch(/^(basic|medium|hard)$/);
      expect(data.knowledge_points).toBeInstanceOf(Array);
      expect(data.knowledge_points.length).toBeGreaterThanOrEqual(1);
      expect(data.source).toBe('自编');
      expect(data.references).toBeTruthy();
    }
  });

  it('all referenced knowledge points exist', () => {
    const kpFiles = fs.readdirSync(kpDir).filter(f => f.endsWith('.yml'));
    const kpIds = new Set(kpFiles.map(f => f.replace('.yml', '')));

    const findFiles = (dir: string): string[] => {
      const results: string[] = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          results.push(...findFiles(fullPath));
        } else if (item.endsWith('.md')) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const allFiles = findFiles(textbooksDir);
    for (const file of allFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      if (data.knowledge_points) {
        for (const kp of data.knowledge_points) {
          expect(kpIds.has(kp), `Missing KP: ${kp} referenced in ${file}`).toBe(true);
        }
      }
      if (data.related_knowledge_points) {
        for (const kp of data.related_knowledge_points) {
          expect(kpIds.has(kp), `Missing KP: ${kp} referenced in ${file}`).toBe(true);
        }
      }
    }
  });

  it('required-2 knowledge points have correct applied_in', () => {
    const required2Kps = [
      'vector-concept', 'vector-addition-subtraction', 'vector-scalar-multiplication',
      'vector-coordinate', 'vector-dot-product',
      'complex-number-concept', 'complex-number-operations',
      'solid-geometry-basics', 'solid-geometry-drawing', 'solid-surface-area-volume',
      'spatial-position-relation', 'parallel-judgment', 'perpendicular-judgment', 'spatial-angle',
      'random-sampling', 'sample-estimate-population',
      'random-event-probability', 'event-independence', 'frequency-probability',
    ];

    for (const kpId of required2Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('required-2');
    }
  });
});
```

- [ ] **Step 2: 运行测试**

```bash
npx vitest run tests/content/required-2-integrity.test.ts
```

Expected: 所有测试通过

- [ ] **Step 3: 提交**

```bash
git add tests/content/required-2-integrity.test.ts
git commit -m "test(content): add required-2 content integrity tests"
```

---

### Task 23: 更新知识图谱关系 — 跨册知识点

**Files:**
- Modify: 部分已有 required-1 知识点 YAML（添加跨册关系）

- [ ] **Step 1: 添加跨册知识点关系**

需要更新以下知识点以建立跨册关系：

1. `trig-function.yml` — 添加 `follow_ups: [vector-dot-product]`（三角函数是向量数量积的基础）
2. `quadratic-equation.yml` — 添加 `follow_ups: [complex-number-concept]`（一元二次方程引出复数概念）

验证双向关系完整性：
- `trig-function` → `vector-dot-product` ⟺ `vector-dot-product` prerequisites 包含 `trig-function` ✓
- `quadratic-equation` → `complex-number-concept` ⟺ `complex-number-concept` prerequisites 包含 `quadratic-equation` ✓

- [ ] **Step 2: 运行全部校验**

```bash
cd ~/Projects/pep-math
npm run validate
npm run build:scripts
npm test
```

Expected: 无孤立节点，无循环依赖，双向关系完整。

- [ ] **Step 3: 提交**

```bash
git add src/content/knowledge-points/trig-function.yml \
       src/content/knowledge-points/quadratic-equation.yml
git commit -m "content(kp): add cross-textbook knowledge point relations (required-1 ↔ required-2)"
```

---

### Task 24: 全量验证与质量报告

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 所有脚本成功运行，包括 required-2 内容

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 无错误

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: 所有测试通过（包括新增的 required-2-integrity.test.ts）

- [ ] **Step 4: 完整构建**

```bash
npm run build
```

Expected: Astro 构建成功，包含 required-2 页面

- [ ] **Step 5: 生成质量报告**

```bash
npm run report
```

Expected: 输出包含必修一和必修二的内容统计

- [ ] **Step 6: 本地预览验证**

```bash
npx astro preview
```

手动验证：
- `/pep-math/textbook/required-2` — 必修二教材浏览
- `/pep-math/textbook/required-2/chapter/6/section/1` — 平面向量概念
- `/pep-math/textbook/required-2/chapter/7/section/1` — 复数概念
- `/pep-math/textbook/required-2/chapter/8/section/1` — 立体图形
- `/pep-math/textbook/required-2/chapter/9/section/1` — 随机抽样
- `/pep-math/textbook/required-2/chapter/10/section/1` — 随机事件
- `/pep-math/knowledge-graph` — 知识图谱支持 required-2 筛选
- `/pep-math/knowledge/vector-concept` — 向量知识点详情

- [ ] **Step 7: 最终提交**

```bash
git add -A
git commit -m "chore: Plan 3 complete — required-2 content and multi-textbook support"
```

---

## Summary

| Task | 内容 | 新增文件 | 关键交付物 |
|------|------|---------|-----------|
| **Task 1-4** | 知识点 YAML | 19 个 `.yml` | 19 个新知识点，含跨册关系 |
| **Task 5-8** | 第六章内容 | ~14 个 `.md` | 平面向量：4 节、定义+习题+例题 |
| **Task 9-10** | 第七章内容 | ~6 个 `.md` | 复数：2 节、定义+习题+例题 |
| **Task 11-14** | 第八章内容 | ~16 个 `.md` | 立体几何：4 节、定义+习题+例题 |
| **Task 15-16** | 第九章内容 | ~6 个 `.md` | 统计：2 节、定义+习题+例题 |
| **Task 17-18** | 第十章内容 | ~6 个 `.md` | 概率：2 节、定义+习题+例题 |
| **Task 19-21** | 页面更新 | 修改 3 个文件 | 教材切换、图谱筛选 |
| **Task 22** | 内容测试 | 1 个测试 | 完整性校验 |
| **Task 23** | 跨册关系 | 修改 2 个 YAML | 知识图谱双向关系 |
| **Task 24** | 全量验证 | — | 质量报告 |

### 预计新增文件数

- 知识点 YAML：19 个
- 内容 Markdown：~48 个（习题 ~30 + 例题 ~12 + 定义 ~10）
- 测试文件：1 个
- 修改文件：~5 个（页面、组件、已有 YAML）
- **总计：~73 个文件**

### Commit 策略

按章节逐步提交，每个 Task 一个 commit：

```
content(kp): 添加平面向量 5 个知识点 YAML
content(kp): 添加复数 2 个知识点 YAML
content(kp): 添加立体几何初步 7 个知识点 YAML
content(kp): 添加统计与概率 5 个知识点 YAML
content(required-2/ch6-s1): 添加平面向量概念的定义、习题和例题
content(required-2/ch6-s2): 添加向量加法与减法的习题和例题
content(required-2/ch6-s3): 添加向量数乘与基本定理的定义、习题和例题
content(required-2/ch6-s4): 添加向量数量积的定义、习题和例题
content(required-2/ch7-s1): 添加复数概念的定义、习题和例题
content(required-2/ch7-s2): 添加复数四则运算的习题和例题
content(required-2/ch8-s1): 添加基本立体图形与直观图的定义、习题和例题
content(required-2/ch8-s2): 添加表面积与体积的定义、习题和例题
content(required-2/ch8-s3): 添加空间位置关系与平行的定义、习题和例题
content(required-2/ch8-s4): 添加垂直判定与空间角的定义、习题和例题
content(required-2/ch9-s1): 添加随机抽样的定义、习题和例题
content(required-2/ch9-s2): 添加用样本估计总体的习题和例题
content(required-2/ch10-s1): 添加随机事件与概率的定义、习题和例题
content(required-2/ch10-s2): 添加事件独立性与频率的习题和例题
feat(pages): add required-2 chapter titles to textbook page
feat(pages): add required-2 to knowledge graph textbook selector
feat(components): add textbook filtering to KnowledgeGraph
test(content): add required-2 content integrity tests
content(kp): add cross-textbook knowledge point relations
chore: Plan 3 complete — required-2 content and multi-textbook support
```

### 验收标准

1. ✅ 19 个新知识点 YAML 文件，每个包含完整的 id/name/category/description/formulas/common_mistakes/applied_in
2. ✅ 所有知识点 `applied_in` 包含 `textbook: required-2`
3. ✅ 14 个 section 目录，每个包含至少 2 道习题和 1 道例题
4. ✅ 所有习题 frontmatter 格式正确（textbook: required-2, source: "自编"）
5. ✅ 所有引用的知识点 ID 存在于 knowledge-points/ 目录
6. ✅ 跨册知识点关系双向一致
7. ✅ 知识图谱支持 required-2 筛选
8. ✅ 教材浏览页显示必修二章节目录
9. ✅ 全部测试通过（包括新增的 required-2-integrity.test.ts）
10. ✅ 构建脚本正常运行，质量报告包含两册统计
