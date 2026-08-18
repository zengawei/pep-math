# pep-math Plan 4: 选择性必修第一册完整内容

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成选择性必修第一册全部 3 章内容录入（空间向量与立体几何、直线和圆的方程、圆锥曲线的方程），新增 23 个知识点 YAML，~50 道习题、~15 道例题、~12 个定义。更新页面与构建脚本以支持三教材切换。

**Architecture:** 在 Plan 3 基础上扩展。内容层新增 `selective-1/` 目录下全部 3 章 Markdown 内容 + 23 个知识点 YAML。构建脚本已支持多教材遍历（自动扫描 `src/content/textbooks/` 所有子目录），无需大改。页面层需更新 `textbook/[id].astro` 的 `chapterTitles` 映射和 `knowledge-graph.astro` 的教材列表以支持选择性必修一。知识图谱通过 `applied_in` 字段自动聚合新知识点。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v3, React 19, Cytoscape.js, KaTeX, Pagefind, Vitest

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

**Plan 3 完成状态:** 必修一 5 章 ✅ 必修二 5 章 ✅ 38 知识点 ✅ 80 习题 ✅ 核心页面 ✅ 知识图谱 ✅ 搜索 ✅ 73/73 测试通过 ✅

---

## 选择性必修第一册教材内容概览

基于人教版 2019 新课标高中数学选择性必修第一册：

| 章 | 标题 | 节数 | 新增知识点 |
|----|------|------|-----------|
| 第十一章 | 空间向量与立体几何 | 3 节 | 6 个 |
| 第十二章 | 直线和圆的方程 | 3 节 | 7 个 |
| 第十三章 | 圆锥曲线的方程 | 3 节 | 10 个 |
| **合计** | | **9 节** | **23 个** |

### 知识点清单

**空间向量与立体几何（6 个）：**
1. `space-vector-concept` — 空间向量的概念
2. `space-vector-operations` — 空间向量的运算（加减、数乘、数量积）
3. `space-vector-coordinate` — 空间向量的坐标运算
4. `space-vector-fundamental-theorem` — 空间向量基本定理
5. `vector-prove-parallel-perpendicular` — 用向量证明平行与垂直
6. `vector-calculate-angle` — 用向量求空间角

**直线和圆的方程（7 个）：**
7. `line-inclination-slope` — 直线的倾斜角与斜率
8. `line-equation` — 直线的方程
9. `circle-equation` — 圆的方程
10. `line-circle-position` — 直线与圆的位置关系
11. `circle-circle-position` — 圆与圆的位置关系
12. `line-equation-application` — 直线与圆的方程应用
13. `coordinate-method` — 坐标法（解析几何基本思想）

**圆锥曲线的方程（10 个）：**
14. `ellipse-definition` — 椭圆的定义与标准方程
15. `ellipse-properties` — 椭圆的几何性质
16. `hyperbola-definition` — 双曲线的定义与标准方程
17. `hyperbola-properties` — 双曲线的几何性质
18. `parabola-definition` — 抛物线的定义与标准方程
19. `parabola-properties` — 抛物线的几何性质
20. `conic-section-summary` — 圆锥曲线的综合应用
21. `curve-equation-method` — 求曲线方程的一般方法
22. `conic-section-line` — 圆锥曲线与直线的位置关系
23. `conic-section-optimization` — 圆锥曲线中的最值与范围问题

### 章节详细结构

```
selective-1/
├── chapter-11/                    # 空间向量与立体几何
│   ├── section-01/                # 11.1 空间向量及其运算
│   ├── section-02/                # 11.2 空间向量基本定理
│   └── section-03/                # 11.3 空间向量在立体几何中的应用
├── chapter-12/                    # 直线和圆的方程
│   ├── section-01/                # 12.1 直线的方程
│   ├── section-02/                # 12.2 圆及其方程
│   └── section-03/                # 12.3 直线与圆的位置关系
└── chapter-13/                    # 圆锥曲线的方程
    ├── section-01/                # 13.1 椭圆及其方程
    ├── section-02/                # 13.2 双曲线及其方程
    └── section-03/                # 13.3 抛物线及其方程
```

---

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容 source 字段为 `"自编"`，references 标注课标条目
- KaTeX 公式客户端渲染，不在构建时处理
- 节详情页通过 fetch `public/data/` 下的 JSON 加载习题数据
- 知识图谱支持 required-1、required-2、selective-1 三册筛选
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）
- 新增知识点 YAML 的 `applied_in` 字段必须标注 `textbook: selective-1`
- 跨册知识点关系（如必修二的 `vector-dot-product` → 选择性必修一的 `space-vector-operations`）需双向维护
- 知识点 category 使用以下分类：`空间向量`、`解析几何`

---

## File Structure (新增文件)

```
pep-math/
├── src/
│   ├── content/
│   │   ├── textbooks/
│   │   │   ├── required-1/                    # ✅ 已有
│   │   │   ├── required-2/                    # ✅ 已有
│   │   │   └── selective-1/                   # 🆕 全部新建
│   │   │       ├── chapter-11/                # 空间向量与立体几何
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 空间向量的定义
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md    # 空间向量基本定理
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-03/
│   │   │       │       ├── definition-1.md    # 向量法证明平行垂直
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       ├── exercise-3.md
│   │   │       │       └── example-1.md
│   │   │       ├── chapter-12/                # 直线和圆的方程
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 倾斜角与斜率
│   │   │       │   │   ├── definition-2.md    # 直线方程的几种形式
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md    # 圆的标准方程
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-03/
│   │   │       │       ├── definition-1.md    # 直线与圆位置关系判定
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       ├── exercise-3.md
│   │   │       │       └── example-1.md
│   │   │       └── chapter-13/                # 圆锥曲线的方程
│   │   │           ├── section-01/
│   │   │           │   ├── definition-1.md    # 椭圆定义
│   │   │           │   ├── definition-2.md    # 椭圆几何性质
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   ├── exercise-3.md
│   │   │           │   └── example-1.md
│   │   │           ├── section-02/
│   │   │           │   ├── definition-1.md    # 双曲线定义
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   ├── exercise-3.md
│   │   │           │   └── example-1.md
│   │   │           └── section-03/
│   │   │               ├── definition-1.md    # 抛物线定义
│   │   │               ├── exercise-1.md
│   │   │               ├── exercise-2.md
│   │   │               ├── exercise-3.md
│   │   │               └── example-1.md
│   │   └── knowledge-points/
│   │       ├── space-vector-concept.yml             # 🆕
│   │       ├── space-vector-operations.yml          # 🆕
│   │       ├── space-vector-coordinate.yml          # 🆕
│   │       ├── space-vector-fundamental-theorem.yml # 🆕
│   │       ├── vector-prove-parallel-perpendicular.yml # 🆕
│   │       ├── vector-calculate-angle.yml           # 🆕
│   │       ├── line-inclination-slope.yml           # 🆕
│   │       ├── line-equation.yml                    # 🆕
│   │       ├── circle-equation.yml                  # 🆕
│   │       ├── line-circle-position.yml             # 🆕
│   │       ├── circle-circle-position.yml           # 🆕
│   │       ├── line-equation-application.yml        # 🆕
│   │       ├── coordinate-method.yml                # 🆕
│   │       ├── ellipse-definition.yml               # 🆕
│   │       ├── ellipse-properties.yml               # 🆕
│   │       ├── hyperbola-definition.yml             # 🆕
│   │       ├── hyperbola-properties.yml             # 🆕
│   │       ├── parabola-definition.yml              # 🆕
│   │       ├── parabola-properties.yml              # 🆕
│   │       ├── conic-section-summary.yml            # 🆕
│   │       ├── curve-equation-method.yml            # 🆕
│   │       ├── conic-section-line.yml               # 🆕
│   │       └── conic-section-optimization.yml       # 🆕
│   └── pages/
│       ├── textbook/
│       │   └── [id].astro                           # ✏️ 更新（添加 selective-1 章标题）
│       └── knowledge-graph.astro                    # ✏️ 更新（添加 selective-1 到教材列表）
├── tests/
│   └── content/
│       └── selective-1-integrity.test.ts            # 🆕 选择性必修一内容完整性测试
└── docs/plans/
    └── 2026-08-18-plan-4-selective-1.md             # 🆕 本文件
```

---

## Milestone: 知识点 YAML 文件

### Task 1: 空间向量知识点 YAML（6 个）

**Files:**
- Create: `src/content/knowledge-points/space-vector-concept.yml`
- Create: `src/content/knowledge-points/space-vector-operations.yml`
- Create: `src/content/knowledge-points/space-vector-coordinate.yml`
- Create: `src/content/knowledge-points/space-vector-fundamental-theorem.yml`
- Create: `src/content/knowledge-points/vector-prove-parallel-perpendicular.yml`
- Create: `src/content/knowledge-points/vector-calculate-angle.yml`

- [ ] **Step 1: 创建 space-vector-concept.yml**

```yaml
id: space-vector-concept
name: 空间向量的概念
category: 空间向量
description: |
  空间中既有大小又有方向的量叫做空间向量。
  空间向量是平面向量向三维空间的推广。
  空间向量的大小叫做向量的模，记作 |a| 或 |AB→|。
  零向量：模为 0 的向量。
  单位向量：模为 1 的向量。
  相等向量：模相等且方向相同的向量。
  相反向量：模相等但方向相反的向量。
  共线向量（平行向量）：方向相同或相反的向量，记作 a∥b。
  共面向量：能平移到同一平面内的向量。空间中任意两个向量共面。
prerequisites:
  - vector-concept
follow_ups:
  - space-vector-operations
  - space-vector-coordinate
related:
  - vector-concept
  - solid-geometry-basics
formulas:
  - "|\\vec{a}| \\geq 0"
  - "\\vec{a} \\parallel \\vec{b} \\Leftrightarrow \\exists \\lambda, \\vec{a} = \\lambda \\vec{b}"
common_mistakes:
  - mistake: "认为空间中任意三个向量一定共面"
    correction: "空间中任意两个向量一定共面，但三个向量不一定共面。三个向量共面当且仅当其中一个可以用另外两个线性表示"
  - mistake: "混淆空间向量与平面向量的概念范围"
    correction: "平面向量是空间向量的特殊情况（z 分量为 0），空间向量是平面向量向三维的推广"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 2: 创建 space-vector-operations.yml**

```yaml
id: space-vector-operations
name: 空间向量的运算
category: 空间向量
description: |
  空间向量的加法、减法和数乘运算与平面向量完全类似，满足交换律和结合律。
  空间向量的数量积：a·b = |a||b|cosθ，其中 θ 为两向量的夹角（0° ≤ θ ≤ 180°）。
  数量积的性质：a·a = |a|²；a⊥b ⟺ a·b = 0（a, b 非零）。
  数量积满足交换律：a·b = b·a，但不满足结合律。
  向量投影：向量 a 在向量 b 方向上的投影为 |a|cosθ = (a·b)/|b|。
prerequisites:
  - space-vector-concept
  - vector-dot-product
follow_ups:
  - space-vector-coordinate
related:
  - vector-dot-product
  - vector-addition-subtraction
  - vector-scalar-multiplication
formulas:
  - "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta"
  - "\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2"
  - "\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0"
common_mistakes:
  - mistake: "认为数量积满足结合律 (a·b)·c = a·(b·c)"
    correction: "数量积不满足结合律。a·b 是标量，(a·b)·c 是标量乘向量；而 b·c 也是标量，a·(b·c) 意义不同"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 3: 创建 space-vector-coordinate.yml**

```yaml
id: space-vector-coordinate
name: 空间向量的坐标运算
category: 空间向量
description: |
  建立空间直角坐标系 Oxyz，取与三条坐标轴方向相同的单位向量 i, j, k 为基底。
  任意向量 a 可表示为 a = xi + yj + zk = (x, y, z)。
  坐标运算：
  a ± b = (x₁±x₂, y₁±y₂, z₁±z₂)
  λa = (λx, λy, λz)
  a·b = x₁x₂ + y₁y₂ + z₁z₂
  |a| = √(x² + y² + z²)
  cosθ = (a·b)/(|a||b|) = (x₁x₂+y₁y₂+z₁z₂)/(√(x₁²+y₁²+z₁²)·√(x₂²+y₂²+z₂²))
  a⊥b ⟺ x₁x₂ + y₁y₂ + z₁z₂ = 0
  a∥b ⟺ x₁/x₂ = y₁/y₂ = z₁/z₂（分母非零时）
prerequisites:
  - space-vector-operations
  - space-vector-fundamental-theorem
follow_ups:
  - vector-prove-parallel-perpendicular
  - vector-calculate-angle
related:
  - vector-coordinate
formulas:
  - "\\vec{a} = (x, y, z)"
  - "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2"
  - "|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}"
  - "\\cos\\theta = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{|\\vec{a}||\\vec{b}|}"
common_mistakes:
  - mistake: "空间向量坐标运算中遗漏 z 分量"
    correction: "空间向量有三个分量 (x, y, z)，不要遗漏 z 方向的运算"
  - mistake: "判断平行时用 x₁/x₂ = y₁/y₂ = z₁/z₂ 但忽略分母为零的情况"
    correction: "应使用交叉相乘形式 x₁y₂ = x₂y₁ 等，或分别讨论分母为零的情况"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 4: 创建 space-vector-fundamental-theorem.yml**

```yaml
id: space-vector-fundamental-theorem
name: 空间向量基本定理
category: 空间向量
description: |
  空间向量基本定理：如果三个向量 a, b, c 不共面，那么对空间任一向量 p，
  存在唯一的有序实数组 (x, y, z)，使得 p = xa + yb + zc。
  基底：不共面的三个向量 a, b, c 叫做空间向量的一组基底。
  空间直角坐标系中，基底为单位正交基底 {i, j, k}。
  与平面向量基本定理的区别：平面需要 2 个不共线向量作基底，空间需要 3 个不共面向量作基底。
prerequisites:
  - space-vector-operations
  - vector-coordinate
follow_ups:
  - space-vector-coordinate
related:
  - vector-coordinate
formulas:
  - "\\vec{p} = x\\vec{a} + y\\vec{b} + z\\vec{c}"
common_mistakes:
  - mistake: "用共面的三个向量作基底"
    correction: "基底要求三个向量不共面。如果三个向量共面，则无法表示空间中所有向量"
  - mistake: "认为空间中任意三个向量都可以作基底"
    correction: "三个向量必须不共面才能作基底。例如 (1,0,0), (2,0,0), (0,1,0) 共面（前两个共线），不能作基底"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 5: 创建 vector-prove-parallel-perpendicular.yml**

```yaml
id: vector-prove-parallel-perpendicular
name: 用向量证明平行与垂直
category: 空间向量
description: |
  利用空间向量的坐标运算可以证明立体几何中的平行和垂直关系。
  
  线线平行：两直线的方向向量平行（成比例）。
  线面平行：直线的方向向量与平面的法向量垂直。
  面面平行：两平面的法向量平行（成比例）。
  
  线线垂直：两直线的方向向量的数量积为零。
  线面垂直：直线的方向向量与平面的法向量平行（成比例）。
  面面垂直：两平面的法向量的数量积为零。
  
  法向量求法：设平面法向量 n=(x,y,z)，利用平面内两个不共线向量 a, b，
  由 n·a=0 和 n·b=0 列方程组求解。
prerequisites:
  - space-vector-coordinate
  - parallel-judgment
  - perpendicular-judgment
follow_ups:
  - vector-calculate-angle
related:
  - parallel-judgment
  - perpendicular-judgment
formulas:
  - "\\text{线线平行}: \\vec{a} \\parallel \\vec{b} \\Leftrightarrow \\vec{a} = \\lambda \\vec{b}"
  - "\\text{线面平行}: \\vec{l} \\cdot \\vec{n} = 0"
  - "\\text{面面平行}: \\vec{n_1} \\parallel \\vec{n_2}"
  - "\\text{线线垂直}: \\vec{a} \\cdot \\vec{b} = 0"
  - "\\text{线面垂直}: \\vec{l} \\parallel \\vec{n}"
  - "\\text{面面垂直}: \\vec{n_1} \\cdot \\vec{n_2} = 0"
common_mistakes:
  - mistake: "求法向量时只列一个方程"
    correction: "法向量需满足与平面内两个不共线向量都垂直，需要列两个方程 n·a=0, n·b=0，再令一个分量为特定值求解"
  - mistake: "混淆线面平行和线在面内"
    correction: "线面平行要求直线的方向向量与法向量垂直，且直线不在平面内。需要额外验证直线上的点不在平面上"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 6: 创建 vector-calculate-angle.yml**

```yaml
id: vector-calculate-angle
name: 用向量求空间角
category: 空间向量
description: |
  利用空间向量的坐标运算可以求解各类空间角。
  
  异面直线所成的角：设两直线方向向量为 a, b，
  cosθ = |a·b|/(|a||b|)，θ ∈ (0°, 90°]（取绝对值保证锐角或直角）。
  
  直线与平面所成的角：设直线方向向量为 a，平面法向量为 n，
  sinθ = |a·n|/(|a||n|)，θ ∈ [0°, 90°]。
  注意：这里求的是 sin 而非 cos。
  
  二面角：设两个半平面的法向量为 n₁, n₂，
  cosθ = ±(n₁·n₂)/(|n₁||n₂|)。
  正负号取决于二面角是锐角还是钝角，需结合几何意义判断。
prerequisites:
  - space-vector-coordinate
  - vector-prove-parallel-perpendicular
  - spatial-angle
  - trig-function
follow_ups: []
related:
  - spatial-angle
  - trig-function
  - vector-dot-product
formulas:
  - "\\text{异面直线}: \\cos\\theta = \\frac{|\\vec{a} \\cdot \\vec{b}|}{|\\vec{a}||\\vec{b}|}"
  - "\\text{线面角}: \\sin\\theta = \\frac{|\\vec{a} \\cdot \\vec{n}|}{|\\vec{a}||\\vec{n}|}"
  - "\\text{二面角}: \\cos\\theta = \\pm\\frac{\\vec{n_1} \\cdot \\vec{n_2}}{|\\vec{n_1}||\\vec{n_2}|}"
common_mistakes:
  - mistake: "求线面角时用 cos 而不是 sin"
    correction: "线面角 θ 与方向向量和法向量夹角 α 互余（θ + α = 90°），所以 sinθ = |cosα| = |a·n|/(|a||n|)"
  - mistake: "二面角中不判断正负号"
    correction: "两个法向量的夹角可能等于二面角或其补角。需要观察法向量的方向（指向二面角内部还是外部）来确定正负"
applied_in:
  - textbook: selective-1
    chapters: [11]
```

- [ ] **Step 7: 提交**

```bash
git add src/content/knowledge-points/space-vector-*.yml \
       src/content/knowledge-points/vector-prove-parallel-perpendicular.yml \
       src/content/knowledge-points/vector-calculate-angle.yml
git commit -m "content(kp): 添加空间向量 6 个知识点 YAML"
```

---

### Task 2: 直线和圆的方程知识点 YAML（7 个）

**Files:**
- Create: `src/content/knowledge-points/line-inclination-slope.yml`
- Create: `src/content/knowledge-points/line-equation.yml`
- Create: `src/content/knowledge-points/circle-equation.yml`
- Create: `src/content/knowledge-points/line-circle-position.yml`
- Create: `src/content/knowledge-points/circle-circle-position.yml`
- Create: `src/content/knowledge-points/line-equation-application.yml`
- Create: `src/content/knowledge-points/coordinate-method.yml`

- [ ] **Step 1: 创建 line-inclination-slope.yml**

```yaml
id: line-inclination-slope
name: 直线的倾斜角与斜率
category: 解析几何
description: |
  倾斜角：直线向上方向与 x 轴正方向所成的角，范围 [0°, 180°)。
  斜率：k = tanα（α ≠ 90° 时）。当 α = 90° 时斜率不存在。
  过两点 P₁(x₁, y₁), P₂(x₂, y₂) 的直线斜率：k = (y₂-y₁)/(x₂-x₁)（x₁ ≠ x₂）。
  斜率与倾斜角的关系：
  - α = 0° ⟺ k = 0
  - 0° < α < 90° ⟺ k > 0
  - α = 90° ⟺ k 不存在
  - 90° < α < 180° ⟺ k < 0
prerequisites:
  - function-concept
  - trig-function
follow_ups:
  - line-equation
related:
  - trig-function
formulas:
  - "k = \\tan\\alpha \\quad (\\alpha \\neq 90°)"
  - "k = \\frac{y_2 - y_1}{x_2 - x_1} \\quad (x_1 \\neq x_2)"
common_mistakes:
  - mistake: "认为倾斜角可以是 180°"
    correction: "倾斜角的范围是 [0°, 180°)，不包含 180°。180° 等价于 0°"
  - mistake: "忽略斜率不存在的情况"
    correction: "当直线垂直于 x 轴时（倾斜角 90°），斜率不存在。涉及斜率的问题必须单独讨论这种情况"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 2: 创建 line-equation.yml**

```yaml
id: line-equation
name: 直线的方程
category: 解析几何
description: |
  直线方程的五种形式：
  1. 点斜式：y - y₀ = k(x - x₀)，已知斜率 k 和一点 (x₀, y₀)。
  2. 斜截式：y = kx + b，已知斜率 k 和 y 轴截距 b。
  3. 两点式：(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)，已知两点。
  4. 截距式：x/a + y/b = 1，已知 x 截距 a 和 y 截距 b（a, b ≠ 0）。
  5. 一般式：Ax + By + C = 0（A, B 不同时为零）。
  
  两直线的位置关系：
  l₁: y = k₁x + b₁, l₂: y = k₂x + b₂
  平行：k₁ = k₂ 且 b₁ ≠ b₂
  垂直：k₁ · k₂ = -1
  相交：k₁ ≠ k₂
prerequisites:
  - line-inclination-slope
follow_ups:
  - line-circle-position
  - line-equation-application
related:
  - basic-inequality
formulas:
  - "y - y_0 = k(x - x_0)"
  - "y = kx + b"
  - "\\frac{x}{a} + \\frac{y}{b} = 1"
  - "Ax + By + C = 0"
  - "l_1 \\perp l_2 \\Leftrightarrow k_1 k_2 = -1"
common_mistakes:
  - mistake: "使用点斜式时忽略斜率不存在的情况"
    correction: "斜率不存在时直线方程为 x = x₀，不能写成点斜式。解题时需先讨论斜率是否存在"
  - mistake: "使用截距式时忽略截距为零的情况"
    correction: "截距式要求 a ≠ 0 且 b ≠ 0。过原点的直线不能用截距式"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 3: 创建 circle-equation.yml**

```yaml
id: circle-equation
name: 圆的方程
category: 解析几何
description: |
  圆的标准方程：(x-a)² + (y-b)² = r²，圆心 (a, b)，半径 r。
  圆的一般方程：x² + y² + Dx + Ey + F = 0（D²+E²-4F > 0）。
  圆心 (-D/2, -E/2)，半径 r = √(D²+E²-4F)/2。
  
  求圆的方程的方法：
  1. 待定系数法：根据已知条件列方程组求解 a, b, r 或 D, E, F。
  2. 几何法：利用圆的几何性质（如圆心在某直线上、弦的中垂线过圆心等）。
prerequisites:
  - line-equation
  - quadratic-equation
follow_ups:
  - line-circle-position
  - circle-circle-position
related:
  - quadratic-equation
formulas:
  - "(x-a)^2 + (y-b)^2 = r^2"
  - "x^2 + y^2 + Dx + Ey + F = 0 \\quad (D^2+E^2-4F > 0)"
  - "r = \\frac{\\sqrt{D^2+E^2-4F}}{2}"
common_mistakes:
  mistake: "一般方程中忽略 D²+E²-4F > 0 的条件"
  correction: "D²+E²-4F > 0 是方程表示圆的充要条件。等于 0 表示一个点，小于 0 不表示任何图形"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 4: 创建 line-circle-position.yml**

```yaml
id: line-circle-position
name: 直线与圆的位置关系
category: 解析几何
description: |
  设圆心到直线的距离为 d，圆的半径为 r：
  d > r ⟺ 直线与圆相离（无交点）
  d = r ⟺ 直线与圆相切（一个交点）
  d < r ⟺ 直线与圆相交（两个交点）
  
  圆心 (a, b) 到直线 Ax + By + C = 0 的距离：
  d = |Aa + Bb + C| / √(A² + B²)
  
  弦长公式：|AB| = 2√(r² - d²)
  
  切线方程：过圆 (x-a)²+(y-b)²=r² 上一点 (x₀, y₀) 的切线：
  (x₀-a)(x-a) + (y₀-b)(y-b) = r²
prerequisites:
  - line-equation
  - circle-equation
follow_ups:
  - circle-circle-position
  - line-equation-application
related:
  - line-equation
  - circle-equation
formulas:
  - "d = \\frac{|Aa + Bb + C|}{\\sqrt{A^2 + B^2}}"
  - "|AB| = 2\\sqrt{r^2 - d^2}"
  - "(x_0 - a)(x - a) + (y_0 - b)(y - b) = r^2"
common_mistakes:
  - mistake: "点到直线距离公式中忘记取绝对值"
    correction: "d = |Aa+Bb+C|/√(A²+B²)，分子必须取绝对值，距离非负"
  - mistake: "求过圆外一点的切线时漏解"
    correction: "过圆外一点有两条切线。设切线斜率 k 后，用 d = r 列方程，注意讨论斜率不存在的情况"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 5: 创建 circle-circle-position.yml**

```yaml
id: circle-circle-position
name: 圆与圆的位置关系
category: 解析几何
description: |
  设两圆圆心距为 d，半径分别为 r₁, r₂（r₁ ≥ r₂）：
  d > r₁ + r₂ ⟺ 两圆外离
  d = r₁ + r₂ ⟺ 两圆外切
  |r₁ - r₂| < d < r₁ + r₂ ⟺ 两圆相交
  d = |r₁ - r₂| ⟺ 两圆内切
  d < |r₁ - r₂| ⟺ 两圆内含
  
  两圆相交时，公共弦所在直线方程：
  将两圆方程相减即得公共弦所在直线方程。
prerequisites:
  - circle-equation
  - line-circle-position
follow_ups:
  - line-equation-application
related:
  - circle-equation
formulas:
  - "d > r_1 + r_2: \\text{外离}"
  - "d = r_1 + r_2: \\text{外切}"
  - "|r_1 - r_2| < d < r_1 + r_2: \\text{相交}"
  - "d = |r_1 - r_2|: \\text{内切}"
  - "d < |r_1 - r_2|: \\text{内含}"
common_mistakes:
  - mistake: "判断圆与圆位置关系时只比较半径不比较圆心距"
    correction: "必须同时考虑圆心距 d 和两半径之和/差的关系。五种位置关系由 d 与 r₁+r₂、|r₁-r₂| 的大小决定"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 6: 创建 line-equation-application.yml**

```yaml
id: line-equation-application
name: 直线与圆的方程应用
category: 解析几何
description: |
  直线与圆的方程在实际问题中的应用：
  1. 求最值问题：利用圆的参数方程或几何意义求距离、面积等最值。
  2. 轨迹方程：根据几何条件建立坐标系，求动点的轨迹方程。
  3. 对称问题：求点关于直线的对称点、直线关于直线的对称直线。
  4. 线性规划：利用直线围成的可行域求目标函数的最值。
  
  常用技巧：
  - 数形结合：将代数问题转化为几何图形分析
  - 参数法：利用圆的参数方程 x=a+r·cosθ, y=b+r·sinθ
prerequisites:
  - line-circle-position
  - circle-circle-position
follow_ups: []
related:
  - line-equation
  - circle-equation
  - basic-inequality
formulas:
  - "x = a + r\\cos\\theta, \\quad y = b + r\\sin\\theta"
common_mistakes:
  - mistake: "求对称点时公式记错"
    correction: "点 (a, b) 关于直线 y = x 的对称点为 (b, a)；关于 y = -x 的对称点为 (-b, -a)。一般直线的对称点需列方程组求解"
applied_in:
  - textbook: selective-1
    chapters: [12]
```

- [ ] **Step 7: 创建 coordinate-method.yml**

```yaml
id: coordinate-method
name: 坐标法
category: 解析几何
description: |
  坐标法（解析法）是解析几何的基本思想方法：
  1. 建立适当的坐标系
  2. 用坐标表示几何元素（点、线、面）
  3. 将几何问题转化为代数问题
  4. 通过代数运算解决问题
  5. 将代数结果翻译回几何结论
  
  坐标法的核心是"数形结合"——用代数方法研究几何问题。
  这是整个解析几何章节的方法论基础。
prerequisites:
  - line-inclination-slope
follow_ups:
  - ellipse-definition
  - hyperbola-definition
  - parabola-definition
related:
  - function-concept
formulas: []
common_mistakes:
  - mistake: "坐标系建立不当导致计算复杂"
    correction: "选择坐标系时应尽量利用对称性，使关键点在坐标轴上或原点，简化计算"
applied_in:
  - textbook: selective-1
    chapters: [12, 13]
```

- [ ] **Step 8: 提交**

```bash
git add src/content/knowledge-points/line-*.yml \
       src/content/knowledge-points/circle-*.yml \
       src/content/knowledge-points/coordinate-method.yml
git commit -m "content(kp): 添加直线和圆的方程 7 个知识点 YAML"
```

---

### Task 3: 圆锥曲线知识点 YAML（10 个）

**Files:**
- Create: `src/content/knowledge-points/ellipse-definition.yml`
- Create: `src/content/knowledge-points/ellipse-properties.yml`
- Create: `src/content/knowledge-points/hyperbola-definition.yml`
- Create: `src/content/knowledge-points/hyperbola-properties.yml`
- Create: `src/content/knowledge-points/parabola-definition.yml`
- Create: `src/content/knowledge-points/parabola-properties.yml`
- Create: `src/content/knowledge-points/conic-section-summary.yml`
- Create: `src/content/knowledge-points/curve-equation-method.yml`
- Create: `src/content/knowledge-points/conic-section-line.yml`
- Create: `src/content/knowledge-points/conic-section-optimization.yml`

- [ ] **Step 1: 创建 ellipse-definition.yml**

```yaml
id: ellipse-definition
name: 椭圆的定义与标准方程
category: 解析几何
description: |
  椭圆的第一定义：平面上到两个定点 F₁, F₂ 的距离之和等于常数 2a（2a > |F₁F₂|）的点的轨迹。
  若 2a = |F₁F₂|，轨迹为线段 F₁F₂；若 2a < |F₁F₂|，轨迹不存在。
  
  标准方程：
  焦点在 x 轴：x²/a² + y²/b² = 1（a > b > 0），焦点 (±c, 0)，c² = a² - b²。
  焦点在 y 轴：y²/a² + x²/b² = 1（a > b > 0），焦点 (0, ±c)，c² = a² - b²。
  
  关键关系：a² = b² + c²（勾股关系）
  离心率：e = c/a ∈ (0, 1)
prerequisites:
  - coordinate-method
follow_ups:
  - ellipse-properties
related:
  - quadratic-equation
formulas:
  - "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b > 0)"
  - "c^2 = a^2 - b^2"
  - "e = \\frac{c}{a} \\in (0, 1)"
  - "|PF_1| + |PF_2| = 2a"
common_mistakes:
  - mistake: "混淆 a² = b² + c² 与 c² = a² + b²"
    correction: "椭圆中 a 最大，关系为 a² = b² + c²。双曲线中 c 最大，关系为 c² = a² + b²"
  - mistake: "忽略 2a > |F₁F₂| 的条件"
    correction: "椭圆定义要求 2a > 2c（即 a > c）。若 2a = 2c 轨迹为线段，2a < 2c 无轨迹"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 2: 创建 ellipse-properties.yml**

```yaml
id: ellipse-properties
name: 椭圆的几何性质
category: 解析几何
description: |
  椭圆 x²/a² + y²/b² = 1（a > b > 0）的几何性质：
  范围：-a ≤ x ≤ a，-b ≤ y ≤ b
  对称性：关于 x 轴、y 轴、原点对称
  顶点：(±a, 0), (0, ±b)
  长轴长：2a，短轴长：2b
  焦距：2c，c² = a² - b²
  离心率：e = c/a ∈ (0, 1)。e 越接近 1，椭圆越扁；e 越接近 0，椭圆越接近圆。
  焦点三角形：△PF₁F₂ 中，|PF₁| + |PF₂| = 2a，可用余弦定理求角。
  通径（半正交弦）：过焦点垂直于长轴的弦长 = 2b²/a。
prerequisites:
  - ellipse-definition
follow_ups:
  - conic-section-summary
  - conic-section-line
related:
  - trig-identity
formulas:
  - "\\text{长轴} = 2a, \\quad \\text{短轴} = 2b"
  - "e = \\frac{c}{a}, \\quad c^2 = a^2 - b^2"
  - "\\text{通径} = \\frac{2b^2}{a}"
common_mistakes:
  - mistake: "认为离心率 e 可以等于 1"
    correction: "椭圆离心率 e ∈ (0, 1)，开区间。e = 0 时为圆，e = 1 时为抛物线（退化情况）"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 3: 创建 hyperbola-definition.yml**

```yaml
id: hyperbola-definition
name: 双曲线的定义与标准方程
category: 解析几何
description: |
  双曲线的第一定义：平面上到两个定点 F₁, F₂ 的距离之差的绝对值等于常数 2a（0 < 2a < |F₁F₂|）的点的轨迹。
  注意是"差的绝对值"——如果只取差（不加绝对值），则只得到双曲线的一支。
  
  标准方程：
  焦点在 x 轴：x²/a² - y²/b² = 1，焦点 (±c, 0)，c² = a² + b²。
  焦点在 y 轴：y²/a² - x²/b² = 1，焦点 (0, ±c)，c² = a² + b²。
  
  关键关系：c² = a² + b²（与椭圆不同！）
  离心率：e = c/a > 1
  渐近线：y = ±(b/a)x（焦点在 x 轴时）
prerequisites:
  - ellipse-definition
  - coordinate-method
follow_ups:
  - hyperbola-properties
related:
  - ellipse-definition
formulas:
  - "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1"
  - "c^2 = a^2 + b^2"
  - "e = \\frac{c}{a} > 1"
  - "||PF_1| - |PF_2|| = 2a"
  - "y = \\pm\\frac{b}{a}x \\quad (\\text{渐近线})"
common_mistakes:
  - mistake: "双曲线定义中忘记取绝对值"
    correction: "定义是 ||PF₁| - |PF₂|| = 2a（绝对值），不是 |PF₁| - |PF₂| = 2a。后者只是双曲线的一支"
  - mistake: "混淆椭圆和双曲线中 a, b, c 的关系"
    correction: "椭圆：a² = b² + c²（a 最大）；双曲线：c² = a² + b²（c 最大）"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 4: 创建 hyperbola-properties.yml**

```yaml
id: hyperbola-properties
name: 双曲线的几何性质
category: 解析几何
description: |
  双曲线 x²/a² - y²/b² = 1 的几何性质：
  范围：|x| ≥ a（y 取任意实数）
  对称性：关于 x 轴、y 轴、原点对称
  顶点：(±a, 0)
  实轴长：2a，虚轴长：2b
  焦距：2c，c² = a² + b²
  离心率：e = c/a > 1。e 越大，双曲线开口越宽。
  渐近线：y = ±(b/a)x
  等轴双曲线：a = b 时，方程为 x² - y² = a²，渐近线为 y = ±x，e = √2。
  
  渐近线的应用：判断双曲线与直线的位置关系。
  与渐近线平行的直线与双曲线只有一个交点（但不是切线）。
prerequisites:
  - hyperbola-definition
follow_ups:
  - conic-section-summary
  - conic-section-line
related:
  - ellipse-properties
formulas:
  - "\\text{实轴} = 2a, \\quad \\text{虚轴} = 2b"
  - "e = \\frac{c}{a} > 1, \\quad c^2 = a^2 + b^2"
  - "\\text{渐近线}: y = \\pm\\frac{b}{a}x"
  - "\\text{等轴双曲线}: e = \\sqrt{2}"
common_mistakes:
  - mistake: "认为与渐近线平行的直线和双曲线相切"
    correction: "与渐近线平行的直线与双曲线只有一个交点，但不是切线——它是穿过双曲线的。真正的切线需要用导数或判别式 Δ=0 来求"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 5: 创建 parabola-definition.yml**

```yaml
id: parabola-definition
name: 抛物线的定义与标准方程
category: 解析几何
description: |
  抛物线的定义：平面上到一定点 F（焦点）和一定直线 l（准线）距离相等的点的轨迹。
  注意：焦点不在准线上。
  
  四种标准方程（设焦准距为 p > 0）：
  1. y² = 2px：焦点 (p/2, 0)，准线 x = -p/2，开口向右
  2. y² = -2px：焦点 (-p/2, 0)，准线 x = p/2，开口向左
  3. x² = 2py：焦点 (0, p/2)，准线 y = -p/2，开口向上
  4. x² = -2py：焦点 (0, -p/2)，准线 y = p/2，开口向下
  
  焦点弦（通径）：过焦点垂直于对称轴的弦长 = 2p。
  焦半径：|PF| = x₀ + p/2（y² = 2px 的情形）。
prerequisites:
  - ellipse-definition
  - coordinate-method
follow_ups:
  - parabola-properties
related:
  - quadratic-function
formulas:
  - "y^2 = 2px \\quad (p > 0)"
  - "\\text{焦点}: \\left(\\frac{p}{2}, 0\\right), \\quad \\text{准线}: x = -\\frac{p}{2}"
  - "|PF| = x_0 + \\frac{p}{2}"
  - "\\text{通径} = 2p"
common_mistakes:
  - mistake: "混淆 y² = 2px 中 p 的含义"
    correction: "p 是焦准距（焦点到准线的距离），不是焦点到原点的距离。焦点到原点的距离是 p/2"
  - mistake: "四种标准方程中搞混开口方向"
    correction: "y² = 2px 开口向右（一次项系数为正），y² = -2px 开口向左。x² = 2py 开口向上，x² = -2py 开口向下"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 6: 创建 parabola-properties.yml**

```yaml
id: parabola-properties
name: 抛物线的几何性质
category: 解析几何
description: |
  抛物线 y² = 2px（p > 0）的几何性质：
  范围：x ≥ 0
  对称性：关于 x 轴对称
  顶点：原点 (0, 0)
  离心率：e = 1
  焦点弦性质：
  - 过焦点的弦 AB，设 A(x₁, y₁), B(x₂, y₂)
  - |AF| = x₁ + p/2, |BF| = x₂ + p/2
  - |AB| = x₁ + x₂ + p
  - y₁y₂ = -p², x₁x₂ = p²/4
  - 1/|AF| + 1/|BF| = 2/p（定值）
  
  抛物线的切线：过抛物线上一点 (x₀, y₀) 的切线方程为 yy₀ = p(x + x₀)。
prerequisites:
  - parabola-definition
follow_ups:
  - conic-section-summary
  - conic-section-line
related:
  - quadratic-function
  - ellipse-properties
  - hyperbola-properties
formulas:
  - "e = 1"
  - "|AB| = x_1 + x_2 + p"
  - "y_1 y_2 = -p^2"
  - "\\frac{1}{|AF|} + \\frac{1}{|BF|} = \\frac{2}{p}"
common_mistakes:
  - mistake: "焦半径公式中搞混 p 和 p/2"
    correction: "对于 y² = 2px，焦半径 |PF| = x₀ + p/2（不是 x₀ + p）。p/2 是焦点到顶点的距离"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 7: 创建 conic-section-summary.yml**

```yaml
id: conic-section-summary
name: 圆锥曲线的综合应用
category: 解析几何
description: |
  圆锥曲线的综合问题通常涉及多种曲线性质的综合运用：
  1. 求轨迹方程：根据几何条件建立方程，判断曲线类型。
  2. 焦点弦问题：利用焦半径公式和焦点弦性质。
  3. 中点弦问题：利用"点差法"——将弦两端点代入曲线方程相减。
  4. 对称性问题：利用曲线的对称性简化计算。
  5. 存在性问题：假设存在满足条件的元素，推导是否矛盾。
  
  圆锥曲线的统一定义：到定点（焦点）距离与到定直线（准线）距离之比为常数 e 的点的轨迹。
  e < 1：椭圆；e = 1：抛物线；e > 1：双曲线。
prerequisites:
  - ellipse-properties
  - hyperbola-properties
  - parabola-properties
follow_ups:
  - conic-section-line
  - conic-section-optimization
related:
  - ellipse-definition
  - hyperbola-definition
  - parabola-definition
formulas:
  - "e < 1: \\text{椭圆}; \\quad e = 1: \\text{抛物线}; \\quad e > 1: \\text{双曲线}"
common_mistakes:
  - mistake: "点差法中忘记验证判别式 Δ > 0"
    correction: "点差法求出中点弦斜率后，必须验证该直线确实与曲线有两个交点（Δ > 0），否则中点弦不存在"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 8: 创建 curve-equation-method.yml**

```yaml
id: curve-equation-method
name: 求曲线方程的一般方法
category: 解析几何
description: |
  求曲线方程的一般步骤（建系、设点、列式、化简、验证）：
  1. 建系：建立适当的坐标系（利用对称性简化）。
  2. 设点：设动点 P(x, y)。
  3. 列式：根据几何条件列出等式。
  4. 化简：用坐标表示等式，化简为最简方程。
  5. 验证：检验方程是否满足条件（去除不合题意的点）。
  
  常用方法：
  - 直接法：直接将几何条件翻译为代数方程
  - 代入法（相关点法）：动点随另一已知曲线上的点运动
  - 参数法：引入参数表示动点坐标，再消去参数
prerequisites:
  - coordinate-method
  - ellipse-definition
follow_ups:
  - conic-section-summary
related:
  - function-concept
formulas: []
common_mistakes:
  - mistake: "建系不当导致方程过于复杂"
    correction: "建立坐标系时应充分利用对称性，将关键点放在坐标轴上或原点"
  - mistake: "化简后忘记验证，引入增解或漏解"
    correction: "化简过程中两边平方可能引入增解，需要代回原条件验证"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 9: 创建 conic-section-line.yml**

```yaml
id: conic-section-line
name: 圆锥曲线与直线的位置关系
category: 解析几何
description: |
  直线与圆锥曲线的位置关系：
  将直线方程代入曲线方程，消元得一元方程，用判别式 Δ 判断：
  Δ > 0：两个交点（相交）
  Δ = 0：一个交点（相切）
  Δ < 0：无交点（相离）
  
  韦达定理的应用：
  设交点为 (x₁, y₁), (x₂, y₂)，则：
  x₁ + x₂ = -b/a, x₁x₂ = c/a
  
  弦长公式：
  |AB| = √(1+k²) · |x₁-x₂| = √(1+k²) · √((x₁+x₂)²-4x₁x₂)
  
  注意：对于双曲线和抛物线，直线与曲线只有一个交点不一定是相切
  （可能与渐近线/对称轴平行）。
prerequisites:
  - conic-section-summary
  - line-equation
follow_ups:
  - conic-section-optimization
related:
  - line-circle-position
  - quadratic-equation
formulas:
  - "\\Delta > 0: \\text{相交}; \\quad \\Delta = 0: \\text{相切}; \\quad \\Delta < 0: \\text{相离}"
  - "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}"
  - "|AB| = \\sqrt{1+k^2} \\cdot \\sqrt{(x_1+x_2)^2 - 4x_1 x_2}"
common_mistakes:
  - mistake: "对双曲线/抛物线，Δ=0 就认为是相切"
    correction: "对双曲线，与渐近线平行的直线也只有一个交点但 Δ 可能不为 0；对抛物线，与对称轴平行的直线也只有一个交点。需要结合具体情况判断"
  - mistake: "韦达定理使用中没有验证 Δ > 0"
    correction: "使用韦达定理前必须确保方程有两个实根，即 Δ > 0"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 10: 创建 conic-section-optimization.yml**

```yaml
id: conic-section-optimization
name: 圆锥曲线中的最值与范围问题
category: 解析几何
description: |
  圆锥曲线中常见的最值与范围问题：
  1. 距离最值：利用焦半径公式或几何意义（如点到直线距离）。
  2. 面积最值：利用弦长和距离公式建立目标函数。
  3. 斜率范围：利用 Δ > 0 和其他约束条件列不等式。
  4. 中点轨迹：利用韦达定理求中点坐标的参数方程。
  
  常用方法：
  - 函数法：将目标表示为某个变量的函数，求最值
  - 不等式法：利用基本不等式、判别式等建立不等关系
  - 几何法：利用圆锥曲线的几何性质直接得出最值
  - 参数法：利用参数方程将问题转化为一元函数
prerequisites:
  - conic-section-line
  - basic-inequality
follow_ups: []
related:
  - basic-inequality
  - quadratic-function
  - quadratic-inequality
formulas: []
common_mistakes:
  - mistake: "求范围时忘记考虑变量的隐含约束"
    correction: "圆锥曲线上的点有范围限制（如椭圆上 -a≤x≤a），求最值时必须考虑这些隐含条件"
  - mistake: "使用基本不等式时不验证等号成立条件"
    correction: "使用均值不等式求最值后，必须验证等号能取到（即对应的点在曲线上存在）"
applied_in:
  - textbook: selective-1
    chapters: [13]
```

- [ ] **Step 11: 提交**

```bash
git add src/content/knowledge-points/ellipse-*.yml \
       src/content/knowledge-points/hyperbola-*.yml \
       src/content/knowledge-points/parabola-*.yml \
       src/content/knowledge-points/conic-section-*.yml \
       src/content/knowledge-points/curve-equation-method.yml
git commit -m "content(kp): 添加圆锥曲线 10 个知识点 YAML"
```

---

## Milestone: 第十一章内容 — 空间向量与立体几何

### Task 4: 第十一章 section-01 — 空间向量及其运算

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-11/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（空间向量的定义）**

```markdown
---
type: definition
textbook: selective-1
chapter: 11
section: 1
name: 空间向量
related_knowledge_points:
  - space-vector-concept
  - space-vector-operations
---

**定义（精确表述）：** 空间中既有大小又有方向的量叫做空间向量。空间中任意两个向量都可以平移到同一个平面内，因此空间中任意两个向量总是共面的。空间向量的运算（加法、减法、数乘、数量积）与平面向量类似。

**通俗解释：** 空间向量就是"三维版本的箭头"。在平面上，向量描述"走多远、朝哪走"；在空间中，还要加上"往上还是往下"。好消息是，平面向量的所有运算规则在空间中依然成立。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - space-vector-concept
source: "自编"
references: "课标11.1.1"
---

**题目：** 判断下列说法是否正确：

(1) 空间中任意两个向量一定共面。

(2) 若 $\vec{a} \parallel \vec{b}$，$\vec{b} \parallel \vec{c}$，则 $\vec{a} \parallel \vec{c}$。

(3) 空间中模相等且方向相同的向量一定相等。

---

**解答：**

**第1步：** 判断 (1)
> 📌 运用知识点：空间向量的概念

(1) 正确。空间中任意两个向量总可以平移到同一平面内（因为两条直线确定一个平面），所以任意两个向量共面。

**第2步：** 判断 (2)
> 📌 运用知识点：空间向量的概念

(2) 错误。当 $\vec{b} = \vec{0}$ 时，$\vec{a} \parallel \vec{0}$ 和 $\vec{0} \parallel \vec{c}$ 恒成立，但 $\vec{a}$ 与 $\vec{c}$ 不一定平行。

**第3步：** 判断 (3)
> 📌 运用知识点：空间向量的概念

(3) 正确。向量的本质特征是大小和方向，与起点位置无关。模相等且方向相同的向量是相等向量（自由向量）。

**💡 解题思路总结：** 空间向量是自由向量，可以任意平移。零向量与任何向量平行，这是容易出错的特殊情形。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "自编"
references: "课标11.1.2"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$，用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{AC'}$。

---

**解答：**

**第1步：** 沿路径分解
> 📌 运用知识点：空间向量的运算

$\overrightarrow{AC'} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CC'}$

**第2步：** 替换为已知向量
> 📌 运用知识点：空间向量的运算

$\overrightarrow{BC} = \overrightarrow{AD} = \vec{b}$，$\overrightarrow{CC'} = \overrightarrow{AA'} = \vec{c}$

所以 $\overrightarrow{AC'} = \vec{a} + \vec{b} + \vec{c}$。
```

- [ ] **Step 4: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "自编"
references: "课标11.1.2"
---

**题目：** 已知空间向量 $\vec{a}, \vec{b}$ 满足 $|\vec{a}| = 2$，$|\vec{b}| = 3$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$，求 $|\vec{a} + \vec{b}|$ 和 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：空间向量的运算

$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 60° = 2 \times 3 \times \frac{1}{2} = 3$

**第2步：** 求 $|\vec{a} + \vec{b}|$
> 📌 运用知识点：空间向量的运算

$|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 4 + 6 + 9 = 19$

$|\vec{a} + \vec{b}| = \sqrt{19}$

**第3步：** 求 $|\vec{a} - \vec{b}|$
> 📌 运用知识点：空间向量的运算

$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 4 - 6 + 9 = 7$

$|\vec{a} - \vec{b}| = \sqrt{7}$

**💡 解题思路总结：** 求向量和（差）的模，利用 $|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$ 展开计算。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: selective-1
chapter: 11
section: 1
number: 1
knowledge_points:
  - space-vector-operations
---

**例题：** 在平行六面体 $ABCD\text{-}A'B'C'D'$ 中，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。$M$ 为 $CC'$ 的中点，用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{AM}$。

**解答：**

**第1步：** 选择路径
> 📌 运用知识点：空间向量的运算

$\overrightarrow{AM} = \overrightarrow{AC} + \overrightarrow{CM}$

**第2步：** 分别计算各段
> 📌 运用知识点：空间向量的运算

$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = \vec{a} + \vec{b}$

$\overrightarrow{CM} = \frac{1}{2}\overrightarrow{CC'} = \frac{1}{2}\vec{c}$

**第3步：** 合并
> 📌 运用知识点：空间向量的运算

$\overrightarrow{AM} = \vec{a} + \vec{b} + \frac{1}{2}\vec{c}$
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-11/section-01/
git commit -m "content(selective-1/ch11-s1): 添加空间向量及其运算的定义、习题和例题"
```

---

### Task 5: 第十一章 section-02 — 空间向量基本定理与坐标运算

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-11/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（空间向量基本定理）**

```markdown
---
type: definition
textbook: selective-1
chapter: 11
section: 2
name: 空间向量基本定理
related_knowledge_points:
  - space-vector-fundamental-theorem
  - space-vector-coordinate
---

**定义（精确表述）：** 如果三个向量 $\vec{a}, \vec{b}, \vec{c}$ 不共面，那么对于空间中的任一向量 $\vec{p}$，存在唯一的有序实数组 $(x, y, z)$，使得 $\vec{p} = x\vec{a} + y\vec{b} + z\vec{c}$。不共面的三个向量 $\vec{a}, \vec{b}, \vec{c}$ 叫做空间向量的一组基底。

**通俗解释：** 只要选定三个"不共面"的方向作为基准，空间中任何向量都可以用这三个方向的"拉伸/缩短"组合出来。就像用"东西方向走多少""南北方向走多少""上下方向走多少"可以描述空间中任何位置——这就是空间直角坐标系的原理。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "自编"
references: "课标11.2.1"
---

**题目：** 已知 $\vec{a} = (1, 2, 3)$，$\vec{b} = (-1, 0, 2)$，求 $\vec{a} + \vec{b}$，$\vec{a} - \vec{b}$，$2\vec{a} - 3\vec{b}$，$\vec{a} \cdot \vec{b}$。

---

**解答：**

**第1步：** 求 $\vec{a} + \vec{b}$
> 📌 运用知识点：空间向量的坐标运算

$\vec{a} + \vec{b} = (1+(-1), 2+0, 3+2) = (0, 2, 5)$

**第2步：** 求 $\vec{a} - \vec{b}$
> 📌 运用知识点：空间向量的坐标运算

$\vec{a} - \vec{b} = (1-(-1), 2-0, 3-2) = (2, 2, 1)$

**第3步：** 求 $2\vec{a} - 3\vec{b}$
> 📌 运用知识点：空间向量的坐标运算

$2\vec{a} - 3\vec{b} = 2(1,2,3) - 3(-1,0,2) = (2,4,6) - (-3,0,6) = (5, 4, 0)$

**第4步：** 求 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：空间向量的坐标运算

$\vec{a} \cdot \vec{b} = 1 \times (-1) + 2 \times 0 + 3 \times 2 = -1 + 0 + 6 = 5$
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - space-vector-fundamental-theorem
source: "自编"
references: "课标11.2.1"
---

**题目：** 已知 $\vec{a} = (2, -1, 3)$，$\vec{b} = (-4, 2, -6)$，判断 $\vec{a}$ 与 $\vec{b}$ 是否共线，并说明理由。

---

**解答：**

**第1步：** 检查对应分量是否成比例
> 📌 运用知识点：空间向量的坐标运算

$\frac{-4}{2} = -2$，$\frac{2}{-1} = -2$，$\frac{-6}{3} = -2$

**第2步：** 得出结论
> 📌 运用知识点：空间向量的坐标运算

三个比值相等，即 $\vec{b} = -2\vec{a}$，所以 $\vec{a}$ 与 $\vec{b}$ 共线。

**💡 解题思路总结：** 判断两向量共线，检查对应分量是否成比例（即是否存在常数 λ 使 $\vec{b} = \lambda\vec{a}$）。
```

- [ ] **Step 4: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "自编"
references: "课标11.2.1"
---

**题目：** 已知 $\vec{a} = (1, 2, -2)$，$\vec{b} = (2, -1, 1)$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$ 和 $|\vec{a}|, |\vec{b}|$
> 📌 运用知识点：空间向量的坐标运算

$\vec{a} \cdot \vec{b} = 1 \times 2 + 2 \times (-1) + (-2) \times 1 = 2 - 2 - 2 = -2$

$|\vec{a}| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1+4+4} = 3$

$|\vec{b}| = \sqrt{2^2 + (-1)^2 + 1^2} = \sqrt{4+1+1} = \sqrt{6}$

**第2步：** 代入夹角公式
> 📌 运用知识点：空间向量的坐标运算

$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{-2}{3\sqrt{6}} = \frac{-2}{3\sqrt{6}} = -\frac{\sqrt{6}}{9}$

$\theta = \arccos\left(-\frac{\sqrt{6}}{9}\right)$

**💡 解题思路总结：** 利用 $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ 求夹角，注意结果范围是 $[0°, 180°]$。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: selective-1
chapter: 11
section: 2
number: 1
knowledge_points:
  - space-vector-fundamental-theorem
  - space-vector-coordinate
---

**例题：** 已知 $\vec{a} = (1, 1, 0)$，$\vec{b} = (0, 1, 1)$，$\vec{c} = (1, 0, 1)$，判断 $\vec{a}, \vec{b}, \vec{c}$ 能否作为空间向量的一组基底。若能，将 $\vec{d} = (2, 3, 4)$ 用 $\vec{a}, \vec{b}, \vec{c}$ 线性表示。

**解答：**

**第1步：** 判断是否共面
> 📌 运用知识点：空间向量基本定理

设 $x\vec{a} + y\vec{b} + z\vec{c} = \vec{0}$，即 $(x+z, x+y, y+z) = (0,0,0)$。

$\begin{cases} x + z = 0 \\ x + y = 0 \\ y + z = 0 \end{cases}$

由第一式 $z = -x$，由第二式 $y = -x$，代入第三式 $-x + (-x) = -2x = 0$，所以 $x = y = z = 0$。

唯一解为零，说明 $\vec{a}, \vec{b}, \vec{c}$ 不共面，可以作为基底。

**第2步：** 将 $\vec{d}$ 用基底表示
> 📌 运用知识点：空间向量基本定理

设 $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$，即 $(x+z, x+y, y+z) = (2, 3, 4)$。

$\begin{cases} x + z = 2 \\ x + y = 3 \\ y + z = 4 \end{cases}$

三式相加：$2(x+y+z) = 9$，$x+y+z = 9/2$。

$y = 9/2 - 2 = 5/2$，$z = 9/2 - 3 = 3/2$，$x = 9/2 - 4 = 1/2$。

所以 $\vec{d} = \frac{1}{2}\vec{a} + \frac{5}{2}\vec{b} + \frac{3}{2}\vec{c}$。
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-11/section-02/
git commit -m "content(selective-1/ch11-s2): 添加空间向量基本定理与坐标运算的定义、习题和例题"
```

---

### Task 6: 第十一章 section-03 — 空间向量在立体几何中的应用

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-11/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-11/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（法向量与向量法）**

```markdown
---
type: definition
textbook: selective-1
chapter: 11
section: 3
name: 平面的法向量
related_knowledge_points:
  - vector-prove-parallel-perpendicular
  - vector-calculate-angle
---

**定义（精确表述）：** 如果一条直线垂直于一个平面，那么这条直线的方向向量叫做该平面的法向量。设平面 $\alpha$ 内有两个不共线向量 $\vec{a}, \vec{b}$，则平面的法向量 $\vec{n}$ 满足 $\vec{n} \cdot \vec{a} = 0$ 且 $\vec{n} \cdot \vec{b} = 0$。

**通俗解释：** 法向量就是"垂直于平面的箭头"。知道了法向量，就知道了平面的"朝向"。求法向量的方法：找到平面内两个不共线的向量，让法向量同时与它们垂直（列两个方程），就能解出法向量的方向。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 1
difficulty: medium
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "自编"
references: "课标11.3.1"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $2$。以 $D$ 为原点，$\overrightarrow{DA}, \overrightarrow{DC}, \overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。求证：$\overrightarrow{BD'} \perp \overrightarrow{AC}$。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量证明平行与垂直

$D(0,0,0)$，$A(2,0,0)$，$B(2,2,0)$，$C(0,2,0)$，$D'(0,0,2)$

**第2步：** 计算向量
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{BD'} = D' - B = (-2, -2, 2)$

$\overrightarrow{AC} = C - A = (-2, 2, 0)$

**第3步：** 验证数量积为零
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{BD'} \cdot \overrightarrow{AC} = (-2)(-2) + (-2)(2) + (2)(0) = 4 - 4 + 0 = 0$

所以 $\overrightarrow{BD'} \perp \overrightarrow{AC}$。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 2
difficulty: hard
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "自编"
references: "课标11.3.2"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系，求异面直线 $A'C$ 与 $B'D$ 所成角的余弦值。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$A'(0,0,1)$，$B'(1,0,1)$，$C'(1,1,1)$，$D'(0,1,1)$

**第2步：** 求方向向量
> 📌 运用知识点：用向量求空间角

$\overrightarrow{A'C} = C - A' = (1, 1, -1)$

$\overrightarrow{B'D} = D - B' = (-1, 1, -1)$

**第3步：** 计算夹角余弦
> 📌 运用知识点：用向量求空间角

$\overrightarrow{A'C} \cdot \overrightarrow{B'D} = (1)(-1) + (1)(1) + (-1)(-1) = -1 + 1 + 1 = 1$

$|\overrightarrow{A'C}| = \sqrt{1+1+1} = \sqrt{3}$

$|\overrightarrow{B'D}| = \sqrt{1+1+1} = \sqrt{3}$

$\cos\theta = \frac{|\overrightarrow{A'C} \cdot \overrightarrow{B'D}|}{|\overrightarrow{A'C}||\overrightarrow{B'D}|} = \frac{|1|}{\sqrt{3} \cdot \sqrt{3}} = \frac{1}{3}$

**💡 解题思路总结：** 异面直线所成角取绝对值保证结果为锐角或直角。建立坐标系后，一切归结为坐标运算。
```

- [ ] **Step 4: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 3
difficulty: hard
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "自编"
references: "课标11.3.2"
---

**题目：** 在正三棱柱 $ABC\text{-}A'B'C'$ 中，所有棱长均为 $2$。以底面中心为原点建立空间直角坐标系，求平面 $A'BC$ 的法向量。

---

**解答：**

**第1步：** 建立坐标系确定各点
> 📌 运用知识点：用向量证明平行与垂直

取底面正三角形 $ABC$ 中心为原点。设 $BC$ 沿 $x$ 轴方向。

$B(-1, -\frac{\sqrt{3}}{3}, 0)$，$C(1, -\frac{\sqrt{3}}{3}, 0)$，$A(0, \frac{2\sqrt{3}}{3}, 0)$

$A'(0, \frac{2\sqrt{3}}{3}, 2)$

**第2步：** 求平面内两个向量
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{BC} = (2, 0, 0)$

$\overrightarrow{BA'} = (1, \sqrt{3}, 2)$

**第3步：** 设法向量 $\vec{n} = (x, y, z)$，列方程
> 📌 运用知识点：用向量证明平行与垂直

$\vec{n} \cdot \overrightarrow{BC} = 2x = 0 \Rightarrow x = 0$

$\vec{n} \cdot \overrightarrow{BA'} = y\sqrt{3} + 2z = 0 \Rightarrow y = -\frac{2z}{\sqrt{3}}$

取 $z = \sqrt{3}$，则 $y = -2$。

所以法向量 $\vec{n} = (0, -2, \sqrt{3})$。

**💡 解题思路总结：** 求法向量的步骤：① 找平面内两个不共线向量；② 设法向量 $(x,y,z)$；③ 列两个垂直方程；④ 令一个分量为特定值求解。
```

- [ ] **Step 5: 创建 example-1.md**

```markdown
---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 1
knowledge_points:
  - vector-prove-parallel-perpendicular
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $2$，$E$ 为 $BB'$ 的中点。求证：平面 $A'EC \perp$ 平面 $ABCD$。

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：用向量证明平行与垂直

以 $D$ 为原点，$\overrightarrow{DA}, \overrightarrow{DC}, \overrightarrow{DD'}$ 分别为 $x, y, z$ 轴。

$A(2,0,0)$，$B(2,2,0)$，$C(0,2,0)$，$A'(2,0,2)$，$E(2,2,1)$

**第2步：** 求平面 $A'EC$ 的法向量
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{A'E} = (0, 2, -1)$，$\overrightarrow{A'C} = (-2, 2, -2)$

设 $\vec{n_1} = (x, y, z)$ 为平面 $A'EC$ 的法向量：

$\vec{n_1} \cdot \overrightarrow{A'E} = 2y - z = 0 \Rightarrow z = 2y$

$\vec{n_1} \cdot \overrightarrow{A'C} = -2x + 2y - 2z = 0 \Rightarrow -2x + 2y - 4y = 0 \Rightarrow x = -y$

取 $y = 1$：$\vec{n_1} = (-1, 1, 2)$

**第3步：** 平面 $ABCD$ 的法向量为 $\vec{n_2} = (0, 0, 1)$

**第4步：** 验证 $\vec{n_1} \cdot \vec{n_2}$
> 📌 运用知识点：用向量证明平行与垂直

$\vec{n_1} \cdot \vec{n_2} = (-1)(0) + (1)(0) + (2)(1) = 2 \neq 0$

所以两平面不垂直。

（注：此例题用于演示法向量方法的完整流程。实际题目中如果结论是"不垂直"，同样需要严格计算证明。）
```

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-11/section-03/
git commit -m "content(selective-1/ch11-s3): 添加空间向量在立体几何中应用的定义、习题和例题"
```

---

## Milestone: 第十二章内容 — 直线和圆的方程

### Task 7: 第十二章 section-01 — 直线的方程

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/definition-2.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（倾斜角与斜率）**

内容同知识点 `line-inclination-slope` 的精确表述和通俗解释。

- [ ] **Step 2: 创建 definition-2.md（直线方程的几种形式）**

内容同知识点 `line-equation` 的精确表述和通俗解释。

- [ ] **Step 3-5: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 求过两点的直线斜率和方程
- exercise-2: medium — 判断两直线平行/垂直关系
- exercise-3: medium — 求直线方程（含斜率不存在的讨论）

- [ ] **Step 6: 创建 example-1.md**

例题：根据已知条件求直线方程（综合运用多种形式的选择）。

- [ ] **Step 7: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-12/section-01/
git commit -m "content(selective-1/ch12-s1): 添加直线方程的定义、习题和例题"
```

---

### Task 8: 第十二章 section-02 — 圆及其方程

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-12/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（圆的方程）**

内容同知识点 `circle-equation` 的精确表述和通俗解释。

- [ ] **Step 2-3: 创建 exercise-1.md, exercise-2.md**

习题覆盖：
- exercise-1: basic — 求圆的标准方程（已知圆心和半径）
- exercise-2: medium — 待定系数法求圆的一般方程

- [ ] **Step 4: 创建 example-1.md**

例题：已知圆过三点，求圆的方程。

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-12/section-02/
git commit -m "content(selective-1/ch12-s2): 添加圆的方程的定义、习题和例题"
```

---

### Task 9: 第十二章 section-03 — 直线与圆的位置关系

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-12/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-12/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（直线与圆的位置关系判定）**

内容同知识点 `line-circle-position` 和 `circle-circle-position` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 判断直线与圆的位置关系（计算距离 d 与 r 比较）
- exercise-2: medium — 求弦长（利用弦长公式）
- exercise-3: hard — 求过圆外一点的切线方程

- [ ] **Step 5: 创建 example-1.md**

例题：已知直线与圆相交，求弦长和弦的中点。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-12/section-03/
git commit -m "content(selective-1/ch12-s3): 添加直线与圆位置关系的定义、习题和例题"
```

---

## Milestone: 第十三章内容 — 圆锥曲线的方程

### Task 10: 第十三章 section-01 — 椭圆及其方程

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/definition-2.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（椭圆的定义与标准方程）**

内容同知识点 `ellipse-definition` 的精确表述和通俗解释。

- [ ] **Step 2: 创建 definition-2.md（椭圆的几何性质）**

内容同知识点 `ellipse-properties` 的精确表述和通俗解释。

- [ ] **Step 3-5: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 已知 a, b 求椭圆标准方程和基本量
- exercise-2: medium — 已知焦点和过焦点的条件求椭圆方程
- exercise-3: hard — 椭圆焦点三角形问题

- [ ] **Step 6: 创建 example-1.md**

例题：求满足特定条件的椭圆方程（综合运用定义和性质）。

- [ ] **Step 7: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-13/section-01/
git commit -m "content(selective-1/ch13-s1): 添加椭圆定义与性质的定义、习题和例题"
```

---

### Task 11: 第十三章 section-02 — 双曲线及其方程

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-13/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（双曲线的定义与标准方程）**

内容同知识点 `hyperbola-definition` 和 `hyperbola-properties` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 已知 a, b 求双曲线标准方程和渐近线
- exercise-2: medium — 已知焦点和条件求双曲线方程
- exercise-3: hard — 双曲线与渐近线综合问题

- [ ] **Step 5: 创建 example-1.md**

例题：求与椭圆共焦点的双曲线方程。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-13/section-02/
git commit -m "content(selective-1/ch13-s2): 添加双曲线定义与性质的定义、习题和例题"
```

---

### Task 12: 第十三章 section-03 — 抛物线及其方程

**Files:**
- Create: `src/content/textbooks/selective-1/chapter-13/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-1/chapter-13/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（抛物线的定义与标准方程）**

内容同知识点 `parabola-definition` 和 `parabola-properties` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 已知焦准距求抛物线标准方程
- exercise-2: medium — 利用焦半径公式求距离
- exercise-3: hard — 抛物线焦点弦问题

- [ ] **Step 5: 创建 example-1.md**

例题：求抛物线的焦点弦长。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-1/chapter-13/section-03/
git commit -m "content(selective-1/ch13-s3): 添加抛物线定义与性质的定义、习题和例题"
```

---

## Milestone: 页面与构建更新

### Task 13: 更新 textbook/[id].astro — 添加 selective-1 章标题

**Files:**
- Modify: `src/pages/textbook/[id].astro`

- [ ] **Step 1: 在 chapterTitles 映射中添加 selective-1**

```typescript
'selective-1': [
  '', '', '', '', '', '', '', '', '', '', // chapters 1-10 do not exist
  '空间向量与立体几何',   // chapter 11
  '直线和圆的方程',       // chapter 12
  '圆锥曲线的方程',       // chapter 13
],
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

Expected: 构建成功，`/pep-math/textbook/selective-1/` 页面显示 3 章内容

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/[id].astro
git commit -m "feat(pages): add selective-1 chapter titles to textbook page"
```

---

### Task 14: 更新 knowledge-graph.astro — 添加 selective-1 到教材列表

**Files:**
- Modify: `src/pages/knowledge-graph.astro`

- [ ] **Step 1: 更新 textbooks 数组**

```typescript
const textbooks = [
  { id: 'required-1', name: '必修 第一册' },
  { id: 'required-2', name: '必修 第二册' },
  { id: 'selective-1', name: '选择性必修 第一册' },
];
```

- [ ] **Step 2: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge-graph.astro
git commit -m "feat(pages): add selective-1 to knowledge graph textbook selector"
```

---

### Task 15: 更新 KnowledgeGraph 组件 — 支持三教材筛选

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: 验证 textbookFilter prop 已支持选择性必修一**

确保 KnowledgeGraph 组件的 textbookFilter 逻辑对 `selective-1` 值正常工作（应已支持，因为它是通用的字符串匹配）。

- [ ] **Step 2: 更新测试**

添加测试用例验证 selective-1 节点正确筛选：

```typescript
it('filters nodes for selective-1', () => {
  const graph = {
    nodes: [
      { id: 'set-concept', name: '集合', category: '集合', textbooks: ['required-1'], x: 0, y: 0 },
      { id: 'space-vector-concept', name: '空间向量', category: '空间向量', textbooks: ['selective-1'], x: 100, y: 0 },
    ],
    edges: [],
  };
  const { container } = render(
    <KnowledgeGraph graph={graph} textbookFilter="selective-1" />
  );
  expect(container.querySelector('#cy')).toBeTruthy();
});
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/KnowledgeGraph.test.tsx
git add src/components/KnowledgeGraph.tsx tests/components/KnowledgeGraph.test.tsx
git commit -m "feat(components): verify KnowledgeGraph supports selective-1 filtering"
```

---

## Milestone: 测试与验证

### Task 16: 选择性必修一内容完整性测试

**Files:**
- Create: `tests/content/selective-1-integrity.test.ts`

- [ ] **Step 1: 编写测试**

```typescript
// tests/content/selective-1-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/selective-1');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Selective-1 content integrity', () => {
  it('has all 3 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(3);
    expect(chapters).toContain('chapter-11');
    expect(chapters).toContain('chapter-12');
    expect(chapters).toContain('chapter-13');
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
    expect(exercises.length).toBeGreaterThanOrEqual(30);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('selective-1');
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

  it('selective-1 knowledge points have correct applied_in', () => {
    const selective1Kps = [
      'space-vector-concept', 'space-vector-operations', 'space-vector-coordinate',
      'space-vector-fundamental-theorem', 'vector-prove-parallel-perpendicular', 'vector-calculate-angle',
      'line-inclination-slope', 'line-equation', 'circle-equation',
      'line-circle-position', 'circle-circle-position', 'line-equation-application', 'coordinate-method',
      'ellipse-definition', 'ellipse-properties',
      'hyperbola-definition', 'hyperbola-properties',
      'parabola-definition', 'parabola-properties',
      'conic-section-summary', 'curve-equation-method',
      'conic-section-line', 'conic-section-optimization',
    ];

    for (const kpId of selective1Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('selective-1');
    }
  });
});
```

- [ ] **Step 2: 运行测试**

```bash
npx vitest run tests/content/selective-1-integrity.test.ts
```

Expected: 所有测试通过

- [ ] **Step 3: 提交**

```bash
git add tests/content/selective-1-integrity.test.ts
git commit -m "test(content): add selective-1 content integrity tests"
```

---

### Task 17: 更新知识图谱关系 — 跨册知识点

**Files:**
- Modify: 部分已有 required-2 知识点 YAML（添加跨册关系）

- [ ] **Step 1: 添加跨册知识点关系**

需要更新以下知识点以建立跨册关系：

**required-2 → selective-1：**
1. `vector-dot-product.yml` — 添加 `follow_ups: [space-vector-operations]`（平面向量数量积 → 空间向量运算）
2. `vector-coordinate.yml` — 添加 `follow_ups: [space-vector-coordinate]`（平面向量坐标 → 空间向量坐标）
3. `solid-geometry-basics.yml` — 添加 `follow_ups: [space-vector-concept]`（基本立体图形 → 空间向量概念）
4. `spatial-angle.yml` — 添加 `follow_ups: [vector-calculate-angle]`（空间角 → 用向量求空间角）
5. `parallel-judgment.yml` — 添加 `follow_ups: [vector-prove-parallel-perpendicular]`（平行判定 → 向量法证明平行）
6. `perpendicular-judgment.yml` — 添加 `follow_ups: [vector-prove-parallel-perpendicular]`（垂直判定 → 向量法证明垂直）

**required-1 → selective-1：**
7. `quadratic-function.yml` — 添加 `follow_ups: [ellipse-definition]`（二次函数 → 椭圆）
8. `quadratic-equation.yml` — 添加 `follow_ups: [conic-section-line]`（一元二次方程 → 圆锥曲线与直线）

验证双向关系完整性：
- `vector-dot-product` → `space-vector-operations` ⟺ `space-vector-operations` prerequisites 包含 `vector-dot-product` ✓
- `vector-coordinate` → `space-vector-coordinate` ⟺ `space-vector-coordinate` prerequisites 包含 `vector-coordinate` ✓
- 等等

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
git add src/content/knowledge-points/vector-dot-product.yml \
       src/content/knowledge-points/vector-coordinate.yml \
       src/content/knowledge-points/solid-geometry-basics.yml \
       src/content/knowledge-points/spatial-angle.yml \
       src/content/knowledge-points/parallel-judgment.yml \
       src/content/knowledge-points/perpendicular-judgment.yml \
       src/content/knowledge-points/quadratic-function.yml \
       src/content/knowledge-points/quadratic-equation.yml
git commit -m "content(kp): add cross-textbook knowledge point relations (required ↔ selective-1)"
```

---

### Task 18: 全量验证与质量报告

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 所有脚本成功运行，包括 selective-1 内容

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 无错误

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: 所有测试通过（包括新增的 selective-1-integrity.test.ts）

- [ ] **Step 4: 完整构建**

```bash
npm run build
```

Expected: Astro 构建成功，包含 selective-1 页面

- [ ] **Step 5: 生成质量报告**

```bash
npm run report
```

Expected: 输出包含必修一、必修二和选择性必修一的内容统计

- [ ] **Step 6: 本地预览验证**

```bash
npx astro preview
```

手动验证：
- `/pep-math/textbook/selective-1` — 选择性必修一教材浏览
- `/pep-math/textbook/selective-1/chapter/11/section/1` — 空间向量及其运算
- `/pep-math/textbook/selective-1/chapter/12/section/1` — 直线的方程
- `/pep-math/textbook/selective-1/chapter/13/section/1` — 椭圆及其方程
- `/pep-math/knowledge-graph` — 知识图谱支持 selective-1 筛选
- `/pep-math/knowledge/space-vector-concept` — 空间向量知识点详情
- `/pep-math/knowledge/ellipse-definition` — 椭圆知识点详情

- [ ] **Step 7: 最终提交**

```bash
git add -A
git commit -m "chore: Plan 4 complete — selective-1 content and tri-textbook support"
```

---

## Summary

| Task | 内容 | 新增文件 | 关键交付物 |
|------|------|---------|-----------|
| **Task 1** | 空间向量知识点 YAML | 6 个 `.yml` | 6 个新知识点 |
| **Task 2** | 直线和圆的方程知识点 YAML | 7 个 `.yml` | 7 个新知识点 |
| **Task 3** | 圆锥曲线知识点 YAML | 10 个 `.yml` | 10 个新知识点 |
| **Task 4** | 第十一章 section-01 内容 | ~5 个 `.md` | 空间向量及其运算 |
| **Task 5** | 第十一章 section-02 内容 | ~5 个 `.md` | 空间向量基本定理与坐标 |
| **Task 6** | 第十一章 section-03 内容 | ~5 个 `.md` | 向量法在立体几何中的应用 |
| **Task 7** | 第十二章 section-01 内容 | ~6 个 `.md` | 直线的方程 |
| **Task 8** | 第十二章 section-02 内容 | ~4 个 `.md` | 圆的方程 |
| **Task 9** | 第十二章 section-03 内容 | ~5 个 `.md` | 直线与圆的位置关系 |
| **Task 10** | 第十三章 section-01 内容 | ~6 个 `.md` | 椭圆及其方程 |
| **Task 11** | 第十三章 section-02 内容 | ~5 个 `.md` | 双曲线及其方程 |
| **Task 12** | 第十三章 section-03 内容 | ~5 个 `.md` | 抛物线及其方程 |
| **Task 13-15** | 页面更新 | 修改 3 个文件 | 三教材切换、图谱筛选 |
| **Task 16** | 内容测试 | 1 个测试 | 完整性校验 |
| **Task 17** | 跨册关系 | 修改 ~8 个 YAML | 知识图谱双向关系 |
| **Task 18** | 全量验证 | — | 质量报告 |

### 预计新增文件数

- 知识点 YAML：23 个
- 内容 Markdown：~56 个（习题 ~36 + 例题 ~12 + 定义 ~12）
- 测试文件：1 个
- 修改文件：~11 个（页面、组件、已有 YAML）
- **总计：~91 个文件**

### 预计完成后项目总统计

| 指标 | Plan 3 结束时 | Plan 4 结束时 |
|------|-------------|-------------|
| 知识点 | 38 | **61** |
| 习题 | 80 | **~116** |
| 页面 | 72 | **~81**（+9 节） |
| 教材 | 2 册 | **3 册** |
| 测试 | 73 | **~76+** |

### Commit 策略

按章节逐步提交，每个 Task 一个 commit：

```
content(kp): 添加空间向量 6 个知识点 YAML
content(kp): 添加直线和圆的方程 7 个知识点 YAML
content(kp): 添加圆锥曲线 10 个知识点 YAML
content(selective-1/ch11-s1): 添加空间向量及其运算的定义、习题和例题
content(selective-1/ch11-s2): 添加空间向量基本定理与坐标运算的定义、习题和例题
content(selective-1/ch11-s3): 添加空间向量在立体几何中应用的定义、习题和例题
content(selective-1/ch12-s1): 添加直线方程的定义、习题和例题
content(selective-1/ch12-s2): 添加圆的方程的定义、习题和例题
content(selective-1/ch12-s3): 添加直线与圆位置关系的定义、习题和例题
content(selective-1/ch13-s1): 添加椭圆定义与性质的定义、习题和例题
content(selective-1/ch13-s2): 添加双曲线定义与性质的定义、习题和例题
content(selective-1/ch13-s3): 添加抛物线定义与性质的定义、习题和例题
feat(pages): add selective-1 chapter titles to textbook page
feat(pages): add selective-1 to knowledge graph textbook selector
feat(components): verify KnowledgeGraph supports selective-1 filtering
test(content): add selective-1 content integrity tests
content(kp): add cross-textbook knowledge point relations (required ↔ selective-1)
chore: Plan 4 complete — selective-1 content and tri-textbook support
```

### 验收标准

1. ✅ 23 个新知识点 YAML 文件，每个包含完整的 id/name/category/description/formulas/common_mistakes/applied_in
2. ✅ 所有知识点 `applied_in` 包含 `textbook: selective-1`
3. ✅ 9 个 section 目录，每个包含至少 2 道习题和 1 道例题
4. ✅ 所有习题 frontmatter 格式正确（textbook: selective-1, source: "自编"）
5. ✅ 所有引用的知识点 ID 存在于 knowledge-points/ 目录
6. ✅ 跨册知识点关系双向一致（required-1 ↔ selective-1, required-2 ↔ selective-1）
7. ✅ 知识图谱支持 selective-1 筛选
8. ✅ 教材浏览页显示选择性必修一章节目录
9. ✅ 全部测试通过（包括新增的 selective-1-integrity.test.ts）
10. ✅ 构建脚本正常运行，质量报告包含三册统计
