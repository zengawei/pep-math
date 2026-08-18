# pep-math Plan 5: 选择性必修第二册完整内容

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成选择性必修第二册全部 3 章内容录入（数列、导数及其应用、计数原理），新增 18 个知识点 YAML，~26 道习题、~9 道例题、~9 个定义。更新页面与构建脚本以支持四教材切换。

**Architecture:** 在 Plan 4 基础上扩展。内容层新增 `selective-2/` 目录下全部 3 章 Markdown 内容 + 18 个知识点 YAML。构建脚本已支持多教材遍历（自动扫描 `src/content/textbooks/` 所有子目录），无需大改。页面层需更新 `textbook/[id].astro` 的 `chapterTitles` 映射和 `knowledge-graph.astro` 的教材列表以支持选择性必修二。知识图谱通过 `applied_in` 字段自动聚合新知识点。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v3, React 19, Cytoscape.js, KaTeX, Pagefind, Vitest

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

**Plan 4 完成状态:** 必修一 5 章 ✅ 必修二 5 章 ✅ 选择性必修一 3 章 ✅ 61 知识点 ✅ 106 习题 ✅ 78/78 测试通过 ✅

---

## 选择性必修第二册教材内容概览

基于人教版 2019 新课标高中数学选择性必修第二册：

| 章 | 标题 | 节数 | 新增知识点 |
|----|------|------|-----------|
| 第十四章 | 数列 | 3 节 | 6 个 |
| 第十五章 | 导数及其应用 | 3 节 | 6 个 |
| 第十六章 | 计数原理 | 3 节 | 6 个 |
| **合计** | | **9 节** | **18 个** |

### 知识点清单

**数列（6 个）：**
1. `sequence-concept` — 数列的概念与表示
2. `arithmetic-sequence` — 等差数列（定义、通项公式、性质）
3. `arithmetic-sequence-sum` — 等差数列的前 n 项和
4. `geometric-sequence` — 等比数列（定义、通项公式、性质）
5. `geometric-sequence-sum` — 等比数列的前 n 项和
6. `sequence-sum-methods` — 数列求和方法（裂项、错位相减等）

**导数及其应用（6 个）：**
7. `derivative-concept` — 导数的概念（平均变化率、瞬时变化率、导数定义）
8. `derivative-operations` — 导数的运算（基本初等函数导数公式、运算法则）
9. `derivative-monotonicity` — 导数与函数的单调性
10. `derivative-extrema` — 导数与函数的极值
11. `derivative-max-min` — 导数与函数的最值
12. `derivative-applications` — 导数的综合应用（不等式证明、零点问题等）

**计数原理（6 个）：**
13. `counting-principle-addition` — 分类加法计数原理
14. `counting-principle-multiplication` — 分步乘法计数原理
15. `permutation` — 排列与排列数
16. `combination` — 组合与组合数
17. `binomial-theorem` — 二项式定理
18. `binomial-properties` — 二项式系数的性质

### 章节详细结构

```
selective-2/
├── chapter-14/                    # 数列
│   ├── section-01/                # 14.1 数列的概念与表示
│   ├── section-02/                # 14.2 等差数列
│   └── section-03/                # 14.3 等比数列
├── chapter-15/                    # 导数及其应用
│   ├── section-01/                # 15.1 导数的概念与运算
│   ├── section-02/                # 15.2 导数与函数的单调性、极值
│   └── section-03/                # 15.3 导数与函数的最值、综合应用
└── chapter-16/                    # 计数原理
    ├── section-01/                # 16.1 计数原理与排列组合
    ├── section-02/                # 16.2 组合与二项式定理
    └── section-03/                # 16.3 二项式定理的应用
```

---

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容 source 字段为 `"自编"`，references 标注课标条目
- KaTeX 公式客户端渲染，不在构建时处理
- 节详情页通过 fetch `public/data/` 下的 JSON 加载习题数据
- 知识图谱支持 required-1、required-2、selective-1、selective-2 四册筛选
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）
- 新增知识点 YAML 的 `applied_in` 字段必须标注 `textbook: selective-2`
- 跨册知识点关系需双向维护（如 required-1 的 `function-concept` → selective-2 的 `derivative-concept`）
- 知识点 category 使用以下分类：`数列`、`微积分`、`计数原理`
- 章节编号从 14 开始（延续 selective-1 的 11-13）

---

## File Structure (新增文件)

```
pep-math/
├── src/
│   ├── content/
│   │   ├── textbooks/
│   │   │   ├── required-1/                    # ✅ 已有
│   │   │   ├── required-2/                    # ✅ 已有
│   │   │   ├── selective-1/                   # ✅ 已有
│   │   │   └── selective-2/                   # 🆕 全部新建
│   │   │       ├── chapter-14/                # 数列
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 数列的概念
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md    # 等差数列
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-03/
│   │   │       │       ├── definition-1.md    # 等比数列
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       ├── exercise-3.md
│   │   │       │       └── example-1.md
│   │   │       ├── chapter-15/                # 导数及其应用
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 导数的概念
│   │   │       │   │   ├── definition-2.md    # 导数运算法则
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md    # 导数与单调性、极值
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-03/
│   │   │       │       ├── definition-1.md    # 导数与最值
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       ├── exercise-3.md
│   │   │       │       └── example-1.md
│   │   │       └── chapter-16/                # 计数原理
│   │   │           ├── section-01/
│   │   │           │   ├── definition-1.md    # 两个计数原理
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   ├── exercise-3.md
│   │   │           │   └── example-1.md
│   │   │           ├── section-02/
│   │   │           │   ├── definition-1.md    # 排列与组合
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   ├── exercise-3.md
│   │   │           │   └── example-1.md
│   │   │           └── section-03/
│   │   │               ├── definition-1.md    # 二项式定理
│   │   │               ├── exercise-1.md
│   │   │               ├── exercise-2.md
│   │   │               └── example-1.md
│   │   └── knowledge-points/
│   │       ├── sequence-concept.yml                   # 🆕
│   │       ├── arithmetic-sequence.yml                # 🆕
│   │       ├── arithmetic-sequence-sum.yml            # 🆕
│   │       ├── geometric-sequence.yml                 # 🆕
│   │       ├── geometric-sequence-sum.yml             # 🆕
│   │       ├── sequence-sum-methods.yml               # 🆕
│   │       ├── derivative-concept.yml                 # 🆕
│   │       ├── derivative-operations.yml              # 🆕
│   │       ├── derivative-monotonicity.yml            # 🆕
│   │       ├── derivative-extrema.yml                 # 🆕
│   │       ├── derivative-max-min.yml                 # 🆕
│   │       ├── derivative-applications.yml            # 🆕
│   │       ├── counting-principle-addition.yml        # 🆕
│   │       ├── counting-principle-multiplication.yml  # 🆕
│   │       ├── permutation.yml                        # 🆕
│   │       ├── combination.yml                        # 🆕
│   │       ├── binomial-theorem.yml                   # 🆕
│   │       └── binomial-properties.yml                # 🆕
│   └── pages/
│       ├── textbook/
│       │   └── [id].astro                             # ✏️ 更新（添加 selective-2 章标题）
│       └── knowledge-graph.astro                      # ✏️ 更新（添加 selective-2 到教材列表）
├── tests/
│   └── content/
│       └── selective-2-integrity.test.ts              # 🆕 选择性必修二内容完整性测试
└── docs/plans/
    └── 2026-08-18-plan-5-selective-2.md               # 🆕 本文件
```

---

## Milestone: 知识点 YAML 文件

### Task 1: 数列知识点 YAML（6 个）

**Files:**
- Create: `src/content/knowledge-points/sequence-concept.yml`
- Create: `src/content/knowledge-points/arithmetic-sequence.yml`
- Create: `src/content/knowledge-points/arithmetic-sequence-sum.yml`
- Create: `src/content/knowledge-points/geometric-sequence.yml`
- Create: `src/content/knowledge-points/geometric-sequence-sum.yml`
- Create: `src/content/knowledge-points/sequence-sum-methods.yml`

- [ ] **Step 1: 创建 sequence-concept.yml**

```yaml
id: sequence-concept
name: 数列的概念与表示
category: 数列
description: |
  按照一定顺序排列的一列数叫做数列。数列中的每一个数叫做这个数列的项。
  数列可以看作以正整数集（或它的有限子集）为定义域的函数。
  数列的通项公式：如果数列 {aₙ} 的第 n 项 aₙ 与 n 之间的关系可以用一个公式 aₙ = f(n) 来表示，
  那么这个公式叫做这个数列的通项公式。
  数列的递推公式：如果数列 {aₙ} 的第 n 项 aₙ 与它的前一项 aₙ₋₁ 之间的关系可以用一个公式来表示，
  那么这个公式叫做这个数列的递推公式。
  数列的分类：有穷数列与无穷数列；递增数列、递减数列、常数列、摆动数列。
prerequisites:
  - function-concept
follow_ups:
  - arithmetic-sequence
  - geometric-sequence
related:
  - function-concept
  - function-properties
formulas:
  - "a_n = f(n) \\quad (n \\in \\mathbb{N}^*)"
common_mistakes:
  - mistake: "认为数列就是集合，可以无序"
    correction: "数列中的数是有顺序的，{1, 2, 3} 和 {3, 2, 1} 是不同的数列。集合中的元素无序且不重复"
  - mistake: "混淆通项公式与递推公式"
    correction: "通项公式直接给出 aₙ 与 n 的关系；递推公式给出 aₙ 与前一项（或前几项）的关系，需要初始条件才能确定数列"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 2: 创建 arithmetic-sequence.yml**

```yaml
id: arithmetic-sequence
name: 等差数列
category: 数列
description: |
  如果一个数列从第二项起，每一项与它的前一项的差等于同一个常数，这个数列就叫做等差数列。
  这个常数叫做等差数列的公差，通常用字母 d 表示。

  通项公式：aₙ = a₁ + (n-1)d
  等差中项：如果 a, A, b 成等差数列，则 A = (a+b)/2
  性质：
  - 若 m + n = p + q，则 aₘ + aₙ = aₚ + aₓ
  - aₙ = (aₙ₋₁ + aₙ₊₁) / 2（等差中项性质）
  - 等差数列的任意等距子列仍为等差数列
prerequisites:
  - sequence-concept
follow_ups:
  - arithmetic-sequence-sum
related:
  - linear-function
formulas:
  - "a_n = a_1 + (n-1)d"
  - "A = \\frac{a + b}{2} \\quad (\\text{等差中项})"
  - "a_m + a_n = a_p + a_q \\quad (m + n = p + q)"
common_mistakes:
  - mistake: "将 aₙ = a₁ + (n-1)d 误写为 aₙ = a₁ + nd"
    correction: "通项公式中 n-1 不能遗漏。a₁ 是首项，从 a₁ 到 aₙ 经过了 (n-1) 次加 d"
  - mistake: "使用性质 aₘ + aₙ = aₚ + aₓ 时不验证 m+n = p+q"
    correction: "等差数列中 aₘ + aₙ = aₚ + aₓ 成立的前提是 m + n = p + q，不能随意组合"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 3: 创建 arithmetic-sequence-sum.yml**

```yaml
id: arithmetic-sequence-sum
name: 等差数列的前 n 项和
category: 数列
description: |
  等差数列的前 n 项和公式：
  Sₙ = na₁ + n(n-1)d/2 = n(a₁ + aₙ)/2

  推导方法：倒序相加法（高斯求和法）
  Sₙ = a₁ + a₂ + ... + aₙ
  Sₙ = aₙ + aₙ₋₁ + ... + a₁
  2Sₙ = n(a₁ + aₙ)

  性质：
  - Sₙ 是关于 n 的二次函数（d ≠ 0 时）或一次函数（d = 0 时），且常数项为 0
  - Sₙ = An² + Bn 的形式，其中 A = d/2, B = a₁ - d/2
  - 若 Sₙ = An² + Bn（无常数项），则 {aₙ} 是等差数列
  - Sₘ, S₂ₘ - Sₘ, S₃ₘ - S₂ₘ 也成等差数列
prerequisites:
  - arithmetic-sequence
follow_ups:
  - sequence-sum-methods
related:
  - quadratic-function
formulas:
  - "S_n = \\frac{n(a_1 + a_n)}{2}"
  - "S_n = na_1 + \\frac{n(n-1)}{2}d"
  - "S_n = An^2 + Bn"
common_mistakes:
  - mistake: "由 Sₙ 求 aₙ 时忘记讨论 n = 1 的情况"
    correction: "aₙ = Sₙ - Sₙ₋₁ 仅在 n ≥ 2 时成立。n = 1 时 a₁ = S₁ 需单独计算，再验证是否与通项公式一致"
  - mistake: "认为 Sₙ 是二次函数就一定是等差数列"
    correction: "Sₙ = An² + Bn（常数项为 0）才是等差数列。如果 Sₙ = An² + Bn + C（C ≠ 0），则从第二项起才是等差数列"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 4: 创建 geometric-sequence.yml**

```yaml
id: geometric-sequence
name: 等比数列
category: 数列
description: |
  如果一个数列从第二项起，每一项与它的前一项的比等于同一个常数（不为零），
  这个数列就叫做等比数列。这个常数叫做等比数列的公比，通常用字母 q 表示（q ≠ 0）。

  通项公式：aₙ = a₁ · qⁿ⁻¹
  等比中项：如果 a, G, b 成等比数列，则 G² = ab（G = ±√(ab)）
  性质：
  - 若 m + n = p + q，则 aₘ · aₙ = aₚ · aₓ
  - aₙ² = aₙ₋₁ · aₙ₊₁（等比中项性质）
  - 等比数列的任意等距子列仍为等比数列
  - 等比数列中各项均不为零
prerequisites:
  - sequence-concept
  - exponent-operation
follow_ups:
  - geometric-sequence-sum
related:
  - exponential-function
formulas:
  - "a_n = a_1 \\cdot q^{n-1}"
  - "G^2 = ab \\quad (\\text{等比中项})"
  - "a_m \\cdot a_n = a_p \\cdot a_q \\quad (m + n = p + q)"
common_mistakes:
  - mistake: "忽略等比数列中各项不为零的条件"
    correction: "等比数列的每一项都不为零，公比 q ≠ 0。如果题目中出现某项为零，则不是等比数列"
  - mistake: "等比中项只取正值"
    correction: "G² = ab 中 G = ±√(ab)，等比中项有两个（一正一负），不要遗漏"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 5: 创建 geometric-sequence-sum.yml**

```yaml
id: geometric-sequence-sum
name: 等比数列的前 n 项和
category: 数列
description: |
  等比数列的前 n 项和公式：
  当 q = 1 时：Sₙ = na₁
  当 q ≠ 1 时：Sₙ = a₁(1 - qⁿ) / (1 - q) = a₁(qⁿ - 1) / (q - 1)

  推导方法：错位相减法
  Sₙ = a₁ + a₁q + a₁q² + ... + a₁qⁿ⁻¹
  qSₙ = a₁q + a₁q² + ... + a₁qⁿ⁻¹ + a₁qⁿ
  (1-q)Sₙ = a₁ - a₁qⁿ = a₁(1 - qⁿ)

  性质：
  - Sₘ, S₂ₘ - Sₘ, S₃ₘ - S₂ₘ 也成等比数列（各项非零时）
  - 已知 Sₙ 和 S₂ₙ 可以求 S₃ₙ 等
prerequisites:
  - geometric-sequence
follow_ups:
  - sequence-sum-methods
related:
  - exponential-function
formulas:
  - "S_n = \\frac{a_1(1 - q^n)}{1 - q} \\quad (q \\neq 1)"
  - "S_n = na_1 \\quad (q = 1)"
common_mistakes:
  - mistake: "使用公式时忘记讨论 q = 1 的情况"
    correction: "等比数列求和必须分 q = 1 和 q ≠ 1 两种情况讨论。q = 1 时 Sₙ = na₁，不能代入分式公式（分母为零）"
  - mistake: "错位相减法中漏项或符号错误"
    correction: "错位相减时仔细对齐各项：Sₙ 的第 k+1 项与 qSₙ 的第 k 项相同，相消后只剩首项和末项"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 6: 创建 sequence-sum-methods.yml**

```yaml
id: sequence-sum-methods
name: 数列求和方法
category: 数列
description: |
  非等差等比数列的求和常用方法：

  1. 公式法：直接利用等差/等比数列求和公式。

  2. 分组求和法：将通项拆分为几个可分别求和的部分。
     如 aₙ = 2ⁿ + n，可分别求等比部分和等差部分。

  3. 裂项相消法：将通项写成两项之差的形式，求和时中间项相消。
     如 1/(n(n+1)) = 1/n - 1/(n+1)

  4. 错位相减法：适用于 aₙ = bₙ · cₙ 的形式（一个等差 × 一个等比）。
     如 aₙ = n · 2ⁿ，用 Sₙ - 2Sₙ 消去中间项。

  5. 倒序相加法：将求和式正写一遍、倒写一遍再相加。
     等差数列求和公式就是用此方法推导的。
prerequisites:
  - arithmetic-sequence-sum
  - geometric-sequence-sum
follow_ups: []
related:
  - arithmetic-sequence
  - geometric-sequence
formulas:
  - "\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}"
  - "\\frac{1}{(2n-1)(2n+1)} = \\frac{1}{2}\\left(\\frac{1}{2n-1} - \\frac{1}{2n+1}\\right)"
common_mistakes:
  - mistake: "裂项相消后忘记处理剩余的首尾项"
    correction: "裂项相消后，中间项全部消去，但通常还剩首部的 1-2 项和尾部的 1-2 项，不要遗漏"
  - mistake: "错位相减法中 q 的幂次写错"
    correction: "错位相减时 Sₙ 乘以 q 后，每一项的 q 的幂次比原来多 1。对齐时注意 Sₙ 的第 k 项对应 qSₙ 的第 k-1 项"
applied_in:
  - textbook: selective-2
    chapters: [14]
```

- [ ] **Step 7: 提交**

```bash
git add src/content/knowledge-points/sequence-concept.yml \
       src/content/knowledge-points/arithmetic-sequence.yml \
       src/content/knowledge-points/arithmetic-sequence-sum.yml \
       src/content/knowledge-points/geometric-sequence.yml \
       src/content/knowledge-points/geometric-sequence-sum.yml \
       src/content/knowledge-points/sequence-sum-methods.yml
git commit -m "content(kp): 添加数列 6 个知识点 YAML"
```

---

### Task 2: 导数知识点 YAML（6 个）

**Files:**
- Create: `src/content/knowledge-points/derivative-concept.yml`
- Create: `src/content/knowledge-points/derivative-operations.yml`
- Create: `src/content/knowledge-points/derivative-monotonicity.yml`
- Create: `src/content/knowledge-points/derivative-extrema.yml`
- Create: `src/content/knowledge-points/derivative-max-min.yml`
- Create: `src/content/knowledge-points/derivative-applications.yml`

- [ ] **Step 1: 创建 derivative-concept.yml**

```yaml
id: derivative-concept
name: 导数的概念
category: 微积分
description: |
  平均变化率：Δy/Δx = (f(x₀ + Δx) - f(x₀)) / Δx
  瞬时变化率（导数）：当 Δx → 0 时，平均变化率的极限。

  导数的定义：f'(x₀) = lim(Δx→0) [f(x₀ + Δx) - f(x₀)] / Δx
  导数的几何意义：f'(x₀) 是曲线 y = f(x) 在点 (x₀, f(x₀)) 处的切线斜率。
  切线方程：y - f(x₀) = f'(x₀)(x - x₀)

  导函数：如果 f(x) 在区间 (a, b) 内每一点都可导，则对区间内每个 x 都对应一个导数值 f'(x)，
  这个新的函数 f'(x) 叫做 f(x) 的导函数。

  注意区分：
  - "在某点处的切线"：以该点为切点的切线（唯一确定）
  - "过某点的切线"：切线经过该点，但该点不一定是切点（可能有多条）
prerequisites:
  - function-concept
  - function-properties
follow_ups:
  - derivative-operations
related:
  - function-concept
  - line-inclination-slope
formulas:
  - "f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}"
  - "y - f(x_0) = f'(x_0)(x - x_0) \\quad (\\text{切线方程})"
common_mistakes:
  - mistake: "混淆'在点 P 处的切线'和'过点 P 的切线'"
    correction: "'在点 P 处'意味着 P 是切点，切线唯一；'过点 P'只要求切线经过 P，P 未必是切点，需要设切点再列方程"
  - mistake: "认为 f'(x₀) = 0 就一定是极值点"
    correction: "f'(x₀) = 0 只是极值的必要条件，不是充分条件。如 f(x) = x³ 在 x = 0 处 f'(0) = 0 但不是极值点"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 2: 创建 derivative-operations.yml**

```yaml
id: derivative-operations
name: 导数的运算
category: 微积分
description: |
  基本初等函数的导数公式：
  - c' = 0（c 为常数）
  - (xⁿ)' = nxⁿ⁻¹
  - (sin x)' = cos x
  - (cos x)' = -sin x
  - (eˣ)' = eˣ
  - (aˣ)' = aˣ ln a
  - (ln x)' = 1/x
  - (logₐx)' = 1/(x ln a)

  导数的运算法则：
  - (f ± g)' = f' ± g'
  - (fg)' = f'g + fg'（乘法法则）
  - (f/g)' = (f'g - fg') / g²（除法法则）
  - [f(g(x))]' = f'(g(x)) · g'(x)（链式法则/复合函数求导）
prerequisites:
  - derivative-concept
  - trig-function
  - exponent-logarithm
follow_ups:
  - derivative-monotonicity
related:
  - trig-function
  - exponential-function
  - logarithmic-function
formulas:
  - "(x^n)' = nx^{n-1}"
  - "(\\sin x)' = \\cos x"
  - "(\\cos x)' = -\\sin x"
  - "(e^x)' = e^x"
  - "(\\ln x)' = \\frac{1}{x}"
  - "(fg)' = f'g + fg'"
  - "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}"
common_mistakes:
  - mistake: "(cos x)' 写成 cos x（忘记负号）"
    correction: "(cos x)' = -sin x，注意负号不能丢"
  - mistake: "复合函数求导时漏掉内层函数的导数"
    correction: "链式法则 [f(g(x))]' = f'(g(x)) · g'(x)，必须乘以内层函数 g(x) 的导数"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 3: 创建 derivative-monotonicity.yml**

```yaml
id: derivative-monotonicity
name: 导数与函数的单调性
category: 微积分
description: |
  设函数 f(x) 在区间 (a, b) 上可导：
  - f'(x) > 0 ⟹ f(x) 在 (a, b) 上单调递增
  - f'(x) < 0 ⟹ f(x) 在 (a, b) 上单调递减
  - f'(x) = 0 在 (a, b) 上恒成立 ⟹ f(x) 在 (a, b) 上是常数函数

  求单调区间的步骤：
  1. 确定 f(x) 的定义域
  2. 求 f'(x)
  3. 解不等式 f'(x) > 0（递增区间）和 f'(x) < 0（递减区间）
  4. 结合定义域写出单调区间

  注意：单调区间必须是定义域的子集，不能用并集连接不相邻的区间。
prerequisites:
  - derivative-operations
  - function-properties
follow_ups:
  - derivative-extrema
related:
  - function-properties
  - quadratic-function
formulas:
  - "f'(x) > 0 \\Rightarrow f(x) \\text{ 单调递增}"
  - "f'(x) < 0 \\Rightarrow f(x) \\text{ 单调递减}"
common_mistakes:
  - mistake: "求单调区间时不先确定定义域"
    correction: "必须先确定函数的定义域，再在定义域内讨论 f'(x) 的正负。例如 ln x 的定义域是 x > 0"
  - mistake: "用并集连接不相邻的单调区间"
    correction: "单调区间不能取并集。如 f(x) = 1/x 在 (-∞, 0) 和 (0, +∞) 上分别递减，但不能说在 (-∞, 0) ∪ (0, +∞) 上递减"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 4: 创建 derivative-extrema.yml**

```yaml
id: derivative-extrema
name: 导数与函数的极值
category: 微积分
description: |
  极值的概念：
  极大值：如果存在 x₀ 的某个邻域，使得对该邻域内所有 x ≠ x₀ 都有 f(x) < f(x₀)，
  则 f(x₀) 是极大值。
  极小值：类似定义。

  极值的判定（一阶导数判别法）：
  设 f'(x₀) = 0：
  - 若 f'(x) 在 x₀ 左侧为正、右侧为负，则 f(x₀) 是极大值
  - 若 f'(x) 在 x₀ 左侧为负、右侧为正，则 f(x₀) 是极小值
  - 若 f'(x) 在 x₀ 两侧同号，则 f(x₀) 不是极值

  求极值的步骤：
  1. 求 f'(x)，令 f'(x) = 0 求驻点
  2. 检查驻点两侧 f'(x) 的符号变化
  3. 根据符号变化判断极值类型

  注意：极值是局部概念，极大值不一定大于极小值。
prerequisites:
  - derivative-monotonicity
follow_ups:
  - derivative-max-min
related:
  - function-properties
formulas:
  - "f'(x_0) = 0 \\text{ 且 } f' \\text{ 变号} \\Rightarrow x_0 \\text{ 是极值点}"
common_mistakes:
  - mistake: "认为 f'(x₀) = 0 的点一定是极值点"
    correction: "f'(x₀) = 0 只是必要条件。还需要检查 f'(x) 在 x₀ 两侧是否变号。如 f(x) = x³ 在 x = 0 处不变号，不是极值"
  - mistake: "认为极大值一定大于极小值"
    correction: "极值是局部概念。一个函数的极大值可能小于另一个极小值。例如 f(x) = x³ - 3x 的极大值 f(-1) = 2，极小值 f(1) = -2，但这不是普遍规律"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 5: 创建 derivative-max-min.yml**

```yaml
id: derivative-max-min
name: 导数与函数的最值
category: 微积分
description: |
  闭区间上连续函数必有最大值和最小值。

  求闭区间 [a, b] 上 f(x) 最值的步骤：
  1. 求 f'(x)，找出 (a, b) 内的所有驻点（f'(x) = 0 的点）
  2. 计算驻点处的函数值和端点值 f(a), f(b)
  3. 比较所有这些值，最大的为最大值，最小的为最小值

  最值与极值的关系：
  - 最值是全局概念，极值是局部概念
  - 最值可能在端点取到，也可能在极值点取到
  - 如果最值在区间内部取到，则该最值一定是极值

  开区间上的最值：需要结合函数的单调性和极限行为判断。
prerequisites:
  - derivative-extrema
follow_ups:
  - derivative-applications
related:
  - function-application
  - basic-inequality
formulas: []
common_mistakes:
  - mistake: "求闭区间上的最值时忘记计算端点值"
    correction: "最值可能在端点取到。必须比较所有驻点的函数值和端点值 f(a), f(b)"
  - mistake: "在开区间上直接令 f'(x) = 0 就认为是最值"
    correction: "开区间上需要验证该极值确实是最值（如函数只有一个极值且连续，则该极值就是最值）"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 6: 创建 derivative-applications.yml**

```yaml
id: derivative-applications
name: 导数的综合应用
category: 微积分
description: |
  导数的综合应用包括：

  1. 证明不等式：构造辅助函数，利用单调性证明。
     如证 f(x) > g(x)，令 h(x) = f(x) - g(x)，证 h(x) > 0。

  2. 零点问题：利用导数判断函数零点的个数和位置。
     通过分析单调性和极值，画出函数大致图像，判断与 x 轴的交点个数。

  3. 恒成立问题：将参数分离，转化为求最值问题。
     如 f(x) ≥ a 恒成立 ⟺ f(x)min ≥ a。

  4. 实际应用：求实际问题的最优解（最大利润、最小成本等）。
     建立目标函数，利用导数求最值。

  5. 切线问题：过曲线外一点作曲线的切线。
     设切点为 (t, f(t))，利用切线过已知点列方程。
prerequisites:
  - derivative-max-min
  - basic-inequality
follow_ups: []
related:
  - basic-inequality
  - quadratic-function
  - function-application
formulas: []
common_mistakes:
  - mistake: "证明不等式时不构造辅助函数"
    correction: "将不等式移项构造 h(x) = f(x) - g(x)，利用 h'(x) 分析单调性，再结合端点值或极值证明 h(x) > 0"
  - mistake: "恒成立问题中不分离参数"
    correction: "将含参数的问题转化为'参数 ≤ f(x)min'或'参数 ≥ f(x)max'的形式，利用导数求 f(x) 的最值"
applied_in:
  - textbook: selective-2
    chapters: [15]
```

- [ ] **Step 7: 提交**

```bash
git add src/content/knowledge-points/derivative-concept.yml \
       src/content/knowledge-points/derivative-operations.yml \
       src/content/knowledge-points/derivative-monotonicity.yml \
       src/content/knowledge-points/derivative-extrema.yml \
       src/content/knowledge-points/derivative-max-min.yml \
       src/content/knowledge-points/derivative-applications.yml
git commit -m "content(kp): 添加导数及其应用 6 个知识点 YAML"
```

---

### Task 3: 计数原理知识点 YAML（6 个）

**Files:**
- Create: `src/content/knowledge-points/counting-principle-addition.yml`
- Create: `src/content/knowledge-points/counting-principle-multiplication.yml`
- Create: `src/content/knowledge-points/permutation.yml`
- Create: `src/content/knowledge-points/combination.yml`
- Create: `src/content/knowledge-points/binomial-theorem.yml`
- Create: `src/content/knowledge-points/binomial-properties.yml`

- [ ] **Step 1: 创建 counting-principle-addition.yml**

```yaml
id: counting-principle-addition
name: 分类加法计数原理
category: 计数原理
description: |
  分类加法计数原理：完成一件事有两类方案，在第 1 类方案中有 m 种不同的方法，
  在第 2 类方案中有 n 种不同的方法，那么完成这件事共有 m + n 种不同的方法。

  推广到 k 类：N = m₁ + m₂ + ... + mₖ

  使用条件：各类方案相互独立，任一类中的任一方法都能独立完成这件事。
  关键词："分类"——每一类都能独立完成任务。
prerequisites:
  - set-concept
follow_ups:
  - counting-principle-multiplication
  - permutation
related:
  - set-operations
formulas:
  - "N = m_1 + m_2 + \\cdots + m_k \\quad (\\text{分类})"
common_mistakes:
  - mistake: "分类不全面或有重叠"
    correction: "分类必须做到'不重不漏'——每一类互不重叠，所有类合在一起涵盖全部情况"
  - mistake: "该用乘法时用了加法"
    correction: "加法原理用于'分类'（每类独立完成），乘法原理用于'分步'（每步只是完成一部分）。判断标准：一步能否独立完成整件事"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 2: 创建 counting-principle-multiplication.yml**

```yaml
id: counting-principle-multiplication
name: 分步乘法计数原理
category: 计数原理
description: |
  分步乘法计数原理：完成一件事需要两个步骤，做第 1 步有 m 种不同的方法，
  做第 2 步有 n 种不同的方法，那么完成这件事共有 m × n 种不同的方法。

  推广到 k 步：N = m₁ × m₂ × ... × mₖ

  使用条件：各步相互依存，每步都不能独立完成这件事，必须依次完成所有步骤。
  关键词："分步"——每步都不能独立完成，需要连续完成所有步骤。
prerequisites:
  - counting-principle-addition
follow_ups:
  - permutation
  - combination
related:
  - set-concept
formulas:
  - "N = m_1 \\times m_2 \\times \\cdots \\times m_k \\quad (\\text{分步})"
common_mistakes:
  - mistake: "该用加法时用了乘法"
    correction: "如果每步都能独立完成整件事，用加法（分类）；如果每步只是完成一部分，必须全部步骤完成才行，用乘法（分步）"
  - mistake: "分步时步骤之间有重叠或遗漏"
    correction: "分步必须做到每步的方法数计算正确，且各步之间相互独立（前一步的选择不影响后一步的方法数）"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 3: 创建 permutation.yml**

```yaml
id: permutation
name: 排列与排列数
category: 计数原理
description: |
  排列：从 n 个不同元素中取出 m（m ≤ n）个元素，按照一定的顺序排成一列，
  叫做从 n 个不同元素中取出 m 个元素的一个排列。

  排列数公式：
  A(n, m) = n! / (n-m)! = n(n-1)(n-2)...(n-m+1)
  全排列：A(n, n) = n!

  排列的特征：有序性——元素的位置不同就是不同的排列。
  关键词："有序"——交换元素位置得到不同结果。
prerequisites:
  - counting-principle-multiplication
follow_ups:
  - combination
related:
  - counting-principle-multiplication
formulas:
  - "A_n^m = \\frac{n!}{(n-m)!}"
  - "A_n^n = n!"
  - "0! = 1"
common_mistakes:
  - mistake: "排列与组合混淆"
    correction: "排列考虑顺序（AB ≠ BA），组合不考虑顺序（AB = BA）。题目中如果交换位置得到不同结果，就是排列问题"
  - mistake: "排列数公式中项数算错"
    correction: "A(n, m) = n(n-1)(n-2)...(n-m+1)，共 m 个因子相乘，从 n 开始每次减 1，写到 (n-m+1) 为止"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 4: 创建 combination.yml**

```yaml
id: combination
name: 组合与组合数
category: 计数原理
description: |
  组合：从 n 个不同元素中取出 m（m ≤ n）个元素，组成一组，
  叫做从 n 个不同元素中取出 m 个元素的一个组合。

  组合数公式：
  C(n, m) = n! / [m!(n-m)!] = A(n, m) / m! = C(n, n-m)

  组合的性质：
  - C(n, m) = C(n, n-m)（对称性）
  - C(n+1, m) = C(n, m-1) + C(n, m)（帕斯卡恒等式/杨辉三角递推）

  组合与排列的关系：A(n, m) = C(n, m) × m!
  关键词："无序"——选取后不排列，只关心选了哪些元素。
prerequisites:
  - permutation
follow_ups:
  - binomial-theorem
related:
  - permutation
formulas:
  - "C_n^m = \\frac{n!}{m!(n-m)!}"
  - "C_n^m = C_n^{n-m}"
  - "C_{n+1}^m = C_n^{m-1} + C_n^m"
common_mistakes:
  - mistake: "组合问题中多除了或少除了阶乘"
    correction: "C(n, m) = A(n, m) / m!，排列数除以选取元素的全排列。记住 C(n,m) ≤ A(n,m)"
  - mistake: "有约束条件的组合问题不分类讨论"
    correction: "含特殊要求的组合问题（如'至少''至多'），需要分类讨论或用间接法（总数 - 不合要求的）"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 5: 创建 binomial-theorem.yml**

```yaml
id: binomial-theorem
name: 二项式定理
category: 计数原理
description: |
  二项式定理：
  (a + b)ⁿ = Σ(k=0 to n) C(n,k) · aⁿ⁻ᵏ · bᵏ
  = C(n,0)aⁿ + C(n,1)aⁿ⁻¹b + C(n,2)aⁿ⁻²b² + ... + C(n,n)bⁿ

  通项公式：T(r+1) = C(n,r) · aⁿ⁻ʳ · bʳ（第 r+1 项）

  特殊情形：
  - (1 + x)ⁿ = Σ C(n,k) xᵏ
  - (1 + 1)ⁿ = 2ⁿ（令 x = 1）
  - (1 - 1)ⁿ = 0（令 x = -1）

  二项展开式共 n+1 项。
  每一项中 a 的幂次从 n 递减到 0，b 的幂次从 0 递增到 n，幂次之和为 n。
prerequisites:
  - combination
follow_ups:
  - binomial-properties
related:
  - combination
  - exponent-operation
formulas:
  - "(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k"
  - "T_{r+1} = \\binom{n}{r} a^{n-r} b^r"
common_mistakes:
  - mistake: "通项中 r+1 和 r 搞混"
    correction: "T(r+1) 是第 r+1 项（不是第 r 项），r 从 0 开始。第 1 项对应 r = 0，第 2 项对应 r = 1"
  - mistake: "展开式中 a 和 b 的幂次写反"
    correction: "通项 T(r+1) = C(n,r) · aⁿ⁻ʳ · bʳ，a 的幂次是 n-r（递减），b 的幂次是 r（递增）"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 6: 创建 binomial-properties.yml**

```yaml
id: binomial-properties
name: 二项式系数的性质
category: 计数原理
description: |
  二项式系数 C(n, k) 的性质：

  1. 对称性：C(n, k) = C(n, n-k)
     与首末两端"等距离"的两项的二项式系数相等。

  2. 增减性与最大值：
     - n 为偶数时，中间一项 C(n, n/2) 最大
     - n 为奇数时，中间两项 C(n, (n-1)/2) 和 C(n, (n+1)/2) 相等且最大

  3. 二项式系数之和：
     Σ(k=0 to n) C(n, k) = 2ⁿ（令 a = b = 1）

  4. 奇数项与偶数项的二项式系数之和：
     奇数项系数之和 = 偶数项系数之和 = 2ⁿ⁻¹（令 a = 1, b = -1）

  5. 杨辉三角：每行两端都是 1，中间每个数等于它上方两数之和。
     C(n+1, k) = C(n, k-1) + C(n, k)

  注意区分"二项式系数"和"项的系数"：
  二项式系数专指 C(n, k)，而"项的系数"还包括 a 和 b 的幂次的系数。
prerequisites:
  - binomial-theorem
follow_ups: []
related:
  - combination
  - binomial-theorem
formulas:
  - "\\sum_{k=0}^{n} \\binom{n}{k} = 2^n"
  - "\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}"
  - "\\text{奇数项系数和} = \\text{偶数项系数和} = 2^{n-1}"
common_mistakes:
  - mistake: "混淆'二项式系数'和'项的系数'"
    correction: "二项式系数专指 C(n,k)，只与 n 和 k 有关；项的系数是展开后某一项的完整系数，还包含 a, b 的幂次带来的系数"
  - mistake: "求特定项时忘记乘以 a 和 b 的幂次"
    correction: "通项 T(r+1) = C(n,r) · aⁿ⁻ʳ · bʳ，求'某项的系数'需要把 C(n,r) 和 aⁿ⁻ʳ · bʳ 中的数值部分都算进去"
applied_in:
  - textbook: selective-2
    chapters: [16]
```

- [ ] **Step 7: 提交**

```bash
git add src/content/knowledge-points/counting-principle-addition.yml \
       src/content/knowledge-points/counting-principle-multiplication.yml \
       src/content/knowledge-points/permutation.yml \
       src/content/knowledge-points/combination.yml \
       src/content/knowledge-points/binomial-theorem.yml \
       src/content/knowledge-points/binomial-properties.yml
git commit -m "content(kp): 添加计数原理 6 个知识点 YAML"
```

---

## Milestone: 第十四章内容 — 数列

### Task 4: 第十四章 section-01 — 数列的概念与表示

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-14/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（数列的概念）**

```markdown
---
type: definition
textbook: selective-2
chapter: 14
section: 1
name: 数列的概念
related_knowledge_points:
  - sequence-concept
---

**定义（精确表述）：** 按照一定顺序排列的一列数叫做数列。数列可以看作以正整数集 $\mathbb{N}^*$（或它的有限子集 $\{1, 2, \ldots, n\}$）为定义域的函数 $a_n = f(n)$，当自变量 $n$ 按照从小到大的顺序依次取值时，对应的一列函数值 $f(1), f(2), f(3), \ldots$ 就构成了一个数列。

**通俗解释：** 数列就是"排好队的一列数"。和集合不同，数列中的数有先后顺序，而且可以重复。你可以把数列想象成一台"数的机器"：你输入 1，它吐出第一个数；输入 2，它吐出第二个数……这台机器就是一个以正整数为输入的函数。
```

- [ ] **Step 2: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "自编"
references: "课标14.1.1"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \frac{n}{n+1}$。

(1) 写出该数列的前 5 项。

(2) 判断该数列是递增数列还是递减数列，并说明理由。

---

**解答：**

**第1步：** 求前 5 项
> 📌 运用知识点：数列的概念与表示

$a_1 = \frac{1}{2}$，$a_2 = \frac{2}{3}$，$a_3 = \frac{3}{4}$，$a_4 = \frac{4}{5}$，$a_5 = \frac{5}{6}$

**第2步：** 判断增减性
> 📌 运用知识点：数列的概念与表示

$a_{n+1} - a_n = \frac{n+1}{n+2} - \frac{n}{n+1} = \frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)} = \frac{1}{(n+1)(n+2)} > 0$

所以 $a_{n+1} > a_n$，该数列是递增数列。

**💡 解题思路总结：** 判断数列增减性，比较 $a_{n+1}$ 与 $a_n$ 的大小：作差判断正负，或作商（各项为正时）判断与 1 的关系。
```

- [ ] **Step 3: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "自编"
references: "课标14.1.2"
---

**题目：** 已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$a_{n+1} = \frac{a_n}{1 + a_n}$（$n \geq 1$）。

(1) 求 $a_2, a_3, a_4$。

(2) 猜想通项公式，并验证。

---

**解答：**

**第1步：** 逐项计算
> 📌 运用知识点：数列的概念与表示

$a_2 = \frac{a_1}{1 + a_1} = \frac{1}{1 + 1} = \frac{1}{2}$

$a_3 = \frac{a_2}{1 + a_2} = \frac{1/2}{1 + 1/2} = \frac{1}{3}$

$a_4 = \frac{a_3}{1 + a_3} = \frac{1/3}{1 + 1/3} = \frac{1}{4}$

**第2步：** 猜想并验证
> 📌 运用知识点：数列的概念与表示

猜想 $a_n = \frac{1}{n}$。

验证：$a_1 = \frac{1}{1} = 1$ ✓

假设 $a_n = \frac{1}{n}$，则 $a_{n+1} = \frac{a_n}{1 + a_n} = \frac{1/n}{1 + 1/n} = \frac{1}{n + 1}$ ✓

所以猜想成立，$a_n = \frac{1}{n}$。
```

- [ ] **Step 4: 创建 example-1.md**

```markdown
---
type: example
textbook: selective-2
chapter: 14
section: 1
number: 1
knowledge_points:
  - sequence-concept
---

**例题：** 已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n = 2n^2 + 3n$，求通项公式 $a_n$。

**解答：**

**第1步：** 当 $n \geq 2$ 时
> 📌 运用知识点：数列的概念与表示

$a_n = S_n - S_{n-1} = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]$

$= 2n^2 + 3n - 2n^2 + 4n - 2 - 3n + 3 = 4n + 1$

**第2步：** 当 $n = 1$ 时
> 📌 运用知识点：数列的概念与表示

$a_1 = S_1 = 2(1)^2 + 3(1) = 5$

验证：$4(1) + 1 = 5 = a_1$ ✓

**第3步：** 结论
> 📌 运用知识点：数列的概念与表示

$a_n = 4n + 1$（$n \in \mathbb{N}^*$）
```

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-14/section-01/
git commit -m "content(selective-2/ch14-s1): 添加数列概念与表示的定义、习题和例题"
```

---

### Task 5: 第十四章 section-02 — 等差数列

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-14/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（等差数列与前 n 项和）**

```markdown
---
type: definition
textbook: selective-2
chapter: 14
section: 2
name: 等差数列
related_knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
---

**定义（精确表述）：** 如果一个数列从第二项起，每一项与它的前一项的差等于同一个常数 $d$，这个数列就叫做等差数列，常数 $d$ 叫做公差。通项公式 $a_n = a_1 + (n-1)d$。前 $n$ 项和公式 $S_n = \frac{n(a_1 + a_n)}{2} = na_1 + \frac{n(n-1)}{2}d$。

**通俗解释：** 等差数列就是"每次增加（或减少）同样多数"的数列。比如 2, 5, 8, 11, 14...，每次加 3。公差 $d$ 就是那个"每次加的数"。求和有个巧妙办法：把数列正着写一遍、倒着写一遍，上下对应相加，每一对的和都相同——这就是高斯小时候发现的求和方法。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 已知等差数列的首项和公差，求通项和第 n 项
- exercise-2: medium — 已知等差数列的若干项求前 n 项和（利用性质）
- exercise-3: medium — 已知 Sₙ 求通项 aₙ（注意 n=1 的讨论）

- [ ] **Step 5: 创建 example-1.md**

例题：等差数列中，已知 a₃ = 7, a₇ = 19，求 a₁, d 和 S₂₀。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-14/section-02/
git commit -m "content(selective-2/ch14-s2): 添加等差数列的定义、习题和例题"
```

---

### Task 6: 第十四章 section-03 — 等比数列

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-14/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-14/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（等比数列与前 n 项和）**

```markdown
---
type: definition
textbook: selective-2
chapter: 14
section: 3
name: 等比数列
related_knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
  - sequence-sum-methods
---

**定义（精确表述）：** 如果一个数列从第二项起，每一项与它的前一项的比等于同一个非零常数 $q$，这个数列就叫做等比数列，常数 $q$ 叫做公比（$q \neq 0$）。通项公式 $a_n = a_1 \cdot q^{n-1}$。前 $n$ 项和：$q = 1$ 时 $S_n = na_1$；$q \neq 1$ 时 $S_n = \frac{a_1(1 - q^n)}{1 - q}$。

**通俗解释：** 等比数列就是"每次乘以同样一个数"的数列。比如 3, 6, 12, 24, 48...，每次乘 2。公比 $q$ 就是那个"每次乘的数"。求和的技巧是"错位相减"——把 $S_n$ 乘以 $q$，再和原来的 $S_n$ 相减，中间的项全部消掉，只剩首尾。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 已知等比数列的首项和公比，求通项和前 n 项和
- exercise-2: medium — 已知等比数列的若干项，求公比和指定项（注意 q = 1 的讨论）
- exercise-3: hard — 数列求和（错位相减法：aₙ = n · 2ⁿ）

- [ ] **Step 5: 创建 example-1.md**

例题：已知等比数列 {aₙ} 中，a₁ + a₃ = 10，a₂ + a₄ = 20，求 S₅。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-14/section-03/
git commit -m "content(selective-2/ch14-s3): 添加等比数列的定义、习题和例题"
```

---

## Milestone: 第十五章内容 — 导数及其应用

### Task 7: 第十五章 section-01 — 导数的概念与运算

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/definition-2.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（导数的概念）**

内容同知识点 `derivative-concept` 的精确表述和通俗解释。

- [ ] **Step 2: 创建 definition-2.md（导数运算法则）**

内容同知识点 `derivative-operations` 的精确表述和通俗解释。

- [ ] **Step 3-5: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 用导数定义求简单函数的导数（如 f(x) = x² 在 x = 1 处的导数）
- exercise-2: basic — 利用基本导数公式和运算法则求导
- exercise-3: medium — 求曲线在某点处的切线方程（区分"在"和"过"）

- [ ] **Step 6: 创建 example-1.md**

例题：求函数 f(x) = x³ - 2x + 1 在 x = 1 处的切线方程。

- [ ] **Step 7: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-15/section-01/
git commit -m "content(selective-2/ch15-s1): 添加导数概念与运算的定义、习题和例题"
```

---

### Task 8: 第十五章 section-02 — 导数与函数的单调性、极值

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-15/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（导数与单调性、极值）**

```markdown
---
type: definition
textbook: selective-2
chapter: 15
section: 2
name: 导数与单调性、极值
related_knowledge_points:
  - derivative-monotonicity
  - derivative-extrema
---

**定义（精确表述）：** 设 $f(x)$ 在区间 $(a, b)$ 上可导。若 $f'(x) > 0$，则 $f(x)$ 在 $(a, b)$ 上单调递增；若 $f'(x) < 0$，则 $f(x)$ 单调递减。若 $f'(x_0) = 0$ 且 $f'(x)$ 在 $x_0$ 两侧变号，则 $x_0$ 是极值点。

**通俗解释：** 导数告诉你函数"正在往哪走"——导数为正，函数在上升；导数为负，函数在下降。导数从正变负的那个点就是"山顶"（极大值），从负变正的点就是"谷底"（极小值）。就像爬山：上坡时坡度为正，下坡时坡度为负，山顶就是坡度从正变负的地方。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 求给定函数的单调区间
- exercise-2: medium — 求函数的极值（含含参讨论）
- exercise-3: hard — 已知函数的单调性求参数范围

- [ ] **Step 5: 创建 example-1.md**

例题：求函数 f(x) = x³ - 3x² + 1 的单调区间和极值。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-15/section-02/
git commit -m "content(selective-2/ch15-s2): 添加导数与单调性极值的定义、习题和例题"
```

---

### Task 9: 第十五章 section-03 — 导数与函数的最值、综合应用

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-15/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-15/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（导数与最值）**

内容同知识点 `derivative-max-min` 和 `derivative-applications` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 求闭区间上函数的最值
- exercise-2: medium — 利用导数证明不等式
- exercise-3: hard — 含参恒成立问题（分离参数法）

- [ ] **Step 5: 创建 example-1.md**

例题：求 f(x) = x³ - 3x 在 [-2, 2] 上的最大值和最小值。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-15/section-03/
git commit -m "content(selective-2/ch15-s3): 添加导数与最值综合应用的定义、习题和例题"
```

---

## Milestone: 第十六章内容 — 计数原理

### Task 10: 第十六章 section-01 — 计数原理与排列

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-16/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（两个计数原理与排列）**

```markdown
---
type: definition
textbook: selective-2
chapter: 16
section: 1
name: 计数原理与排列
related_knowledge_points:
  - counting-principle-addition
  - counting-principle-multiplication
  - permutation
---

**定义（精确表述）：** 分类加法计数原理——完成一件事有两类方案，第 1 类有 $m$ 种方法，第 2 类有 $n$ 种方法，则共有 $m + n$ 种方法。分步乘法计数原理——完成一件事需要两步，第 1 步有 $m$ 种方法，第 2 步有 $n$ 种方法，则共有 $m \times n$ 种方法。排列——从 $n$ 个不同元素中取出 $m$ 个按顺序排列，排列数 $A_n^m = \frac{n!}{(n-m)!}$。

**通俗解释：** 加法原理是"分类"——选一类中的任何一种方法都能独立完成整件事。乘法原理是"分步"——每步只是完成一部分，必须所有步骤都做完才行。排列就是"排队"——从一群人里选出几个排成一排，谁在前谁在后有区别。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 用两个计数原理计算简单问题
- exercise-2: medium — 排列问题（有约束条件，如某人必须站在中间）
- exercise-3: medium — 排列与组合的综合应用（相邻/不相邻问题）

- [ ] **Step 5: 创建 example-1.md**

例题：用 0, 1, 2, 3, 4 五个数字组成没有重复数字的五位数，其中奇数有多少个？

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-16/section-01/
git commit -m "content(selective-2/ch16-s1): 添加计数原理与排列的定义、习题和例题"
```

---

### Task 11: 第十六章 section-02 — 组合

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-16/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（组合与组合数）**

内容同知识点 `combination` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 计算组合数、解组合方程
- exercise-2: medium — 组合应用问题（如从若干人中选人组成小组）
- exercise-3: medium — 含约束条件的组合问题（"至少""至多"型）

- [ ] **Step 5: 创建 example-1.md**

例题：从 5 名男生和 3 名女生中选 3 人，要求至少有 1 名女生，有多少种选法？

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-16/section-02/
git commit -m "content(selective-2/ch16-s2): 添加组合的定义、习题和例题"
```

---

### Task 12: 第十六章 section-03 — 二项式定理

**Files:**
- Create: `src/content/textbooks/selective-2/chapter-16/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-2/chapter-16/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（二项式定理）**

内容同知识点 `binomial-theorem` 和 `binomial-properties` 的精确表述和通俗解释。

- [ ] **Step 2-3: 创建 exercise-1.md, exercise-2.md**

习题覆盖：
- exercise-1: basic — 展开 (a + b)ⁿ 或求特定项
- exercise-2: medium — 求二项式系数之和、特定项的系数

- [ ] **Step 4: 创建 example-1.md**

例题：求 $(x + \frac{1}{x})^{10}$ 展开式中的常数项。

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/selective-2/chapter-16/section-03/
git commit -m "content(selective-2/ch16-s3): 添加二项式定理的定义、习题和例题"
```

---

## Milestone: 页面与构建更新

### Task 13: 更新 textbook/[id].astro — 添加 selective-2 章标题

**Files:**
- Modify: `src/pages/textbook/[id].astro`

- [ ] **Step 1: 在 chapterTitles 映射中添加 selective-2**

```typescript
'selective-2': [
  '', '', '', '', '', '', '', '', '', '', // chapters 1-10 do not exist
  '', '', '',                             // chapters 11-13 do not exist
  '数列',                                 // chapter 14
  '导数及其应用',                          // chapter 15
  '计数原理',                              // chapter 16
],
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

Expected: 构建成功，`/pep-math/textbook/selective-2/` 页面显示 3 章内容

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/[id].astro
git commit -m "feat(pages): add selective-2 chapter titles to textbook page"
```

---

### Task 14: 更新 knowledge-graph.astro — 添加 selective-2 到教材列表

**Files:**
- Modify: `src/pages/knowledge-graph.astro`

- [ ] **Step 1: 更新 textbooks 数组**

```typescript
const textbooks = [
  { id: 'required-1', name: '必修 第一册' },
  { id: 'required-2', name: '必修 第二册' },
  { id: 'selective-1', name: '选择性必修 第一册' },
  { id: 'selective-2', name: '选择性必修 第二册' },
];
```

- [ ] **Step 2: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge-graph.astro
git commit -m "feat(pages): add selective-2 to knowledge graph textbook selector"
```

---

### Task 15: 更新 KnowledgeGraph 组件 — 支持四教材筛选

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: 验证 textbookFilter prop 已支持 selective-2**

确保 KnowledgeGraph 组件的 textbookFilter 逻辑对 `selective-2` 值正常工作（应已支持，因为它是通用的字符串匹配）。

- [ ] **Step 2: 更新测试**

添加测试用例验证 selective-2 节点正确筛选：

```typescript
it('filters nodes for selective-2', () => {
  const graph = {
    nodes: [
      { id: 'set-concept', name: '集合', category: '集合', textbooks: ['required-1'], x: 0, y: 0 },
      { id: 'sequence-concept', name: '数列概念', category: '数列', textbooks: ['selective-2'], x: 100, y: 0 },
    ],
    edges: [],
  };
  const { container } = render(
    <KnowledgeGraph graph={graph} textbookFilter="selective-2" />
  );
  expect(container.querySelector('#cy')).toBeTruthy();
});
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/KnowledgeGraph.test.tsx
git add src/components/KnowledgeGraph.tsx tests/components/KnowledgeGraph.test.tsx
git commit -m "feat(components): verify KnowledgeGraph supports selective-2 filtering"
```

---

## Milestone: 测试与验证

### Task 16: 选择性必修二内容完整性测试

**Files:**
- Create: `tests/content/selective-2-integrity.test.ts`

- [ ] **Step 1: 编写测试**

```typescript
// tests/content/selective-2-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/selective-2');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Selective-2 content integrity', () => {
  it('has all 3 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(3);
    expect(chapters).toContain('chapter-14');
    expect(chapters).toContain('chapter-15');
    expect(chapters).toContain('chapter-16');
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
    expect(exercises.length).toBeGreaterThanOrEqual(20);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('selective-2');
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

  it('selective-2 knowledge points have correct applied_in', () => {
    const selective2Kps = [
      'sequence-concept', 'arithmetic-sequence', 'arithmetic-sequence-sum',
      'geometric-sequence', 'geometric-sequence-sum', 'sequence-sum-methods',
      'derivative-concept', 'derivative-operations', 'derivative-monotonicity',
      'derivative-extrema', 'derivative-max-min', 'derivative-applications',
      'counting-principle-addition', 'counting-principle-multiplication',
      'permutation', 'combination', 'binomial-theorem', 'binomial-properties',
    ];

    for (const kpId of selective2Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('selective-2');
    }
  });
});
```

- [ ] **Step 2: 运行测试**

```bash
npx vitest run tests/content/selective-2-integrity.test.ts
```

Expected: 所有测试通过

- [ ] **Step 3: 提交**

```bash
git add tests/content/selective-2-integrity.test.ts
git commit -m "test(content): add selective-2 content integrity tests"
```

---

### Task 17: 更新知识图谱关系 — 跨册知识点

**Files:**
- Modify: 部分已有知识点 YAML（添加跨册关系）

- [ ] **Step 1: 添加跨册知识点关系**

需要更新以下知识点以建立跨册关系：

**required-1 → selective-2：**
1. `function-concept.yml` — 添加 `follow_ups: [derivative-concept]`（函数概念 → 导数概念）
2. `function-properties.yml` — 添加 `follow_ups: [derivative-monotonicity]`（函数性质 → 导数与单调性）
3. `exponent-operation.yml` — 添加 `follow_ups: [geometric-sequence]`（指数运算 → 等比数列）

**required-2 → selective-2：**
4. `set-concept.yml` — 添加 `follow_ups: [counting-principle-addition]`（集合概念 → 分类加法计数原理）

**selective-1 → selective-2：**
5. `line-inclination-slope.yml` — 添加 `related: [derivative-concept]`（斜率 ↔ 导数的几何意义）

**selective-2 内部知识点关系（已在 YAML 中定义，需验证双向一致性）：**
- `sequence-concept` → `arithmetic-sequence` ⟺ `arithmetic-sequence` prerequisites 包含 `sequence-concept` ✓
- `arithmetic-sequence` → `arithmetic-sequence-sum` ⟺ `arithmetic-sequence-sum` prerequisites 包含 `arithmetic-sequence` ✓
- `derivative-concept` → `derivative-operations` ⟺ `derivative-operations` prerequisites 包含 `derivative-concept` ✓
- 等等

验证双向关系完整性：
- `function-concept` → `derivative-concept` ⟺ `derivative-concept` prerequisites 包含 `function-concept` ✓
- `function-properties` → `derivative-monotonicity` ⟺ `derivative-monotonicity` prerequisites 包含 `function-properties` ✓
- `counting-principle-addition` → `counting-principle-multiplication` ⟺ `counting-principle-multiplication` prerequisites 包含 `counting-principle-addition` ✓

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
git add src/content/knowledge-points/function-concept.yml \
       src/content/knowledge-points/function-properties.yml \
       src/content/knowledge-points/exponent-operation.yml \
       src/content/knowledge-points/set-concept.yml \
       src/content/knowledge-points/line-inclination-slope.yml
git commit -m "content(kp): add cross-textbook knowledge point relations (required/selective-1 ↔ selective-2)"
```

---

### Task 18: 全量验证与质量报告

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 所有脚本成功运行，包括 selective-2 内容

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 无错误

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: 所有测试通过（包括新增的 selective-2-integrity.test.ts）

- [ ] **Step 4: 完整构建**

```bash
npm run build
```

Expected: Astro 构建成功，包含 selective-2 页面

- [ ] **Step 5: 生成质量报告**

```bash
npm run report
```

Expected: 输出包含必修一、必修二、选择性必修一和选择性必修二的内容统计

- [ ] **Step 6: 本地预览验证**

```bash
npx astro preview
```

手动验证：
- `/pep-math/textbook/selective-2` — 选择性必修二教材浏览
- `/pep-math/textbook/selective-2/chapter/14/section/1` — 数列的概念
- `/pep-math/textbook/selective-2/chapter/15/section/1` — 导数的概念与运算
- `/pep-math/textbook/selective-2/chapter/16/section/1` — 计数原理与排列
- `/pep-math/knowledge-graph` — 知识图谱支持 selective-2 筛选
- `/pep-math/knowledge/sequence-concept` — 数列概念知识点详情
- `/pep-math/knowledge/derivative-concept` — 导数概念知识点详情
- `/pep-math/knowledge/binomial-theorem` — 二项式定理知识点详情

- [ ] **Step 7: 最终提交**

```bash
git add -A
git commit -m "chore: Plan 5 complete — selective-2 content and quad-textbook support"
```

---

## Summary

| Task | 内容 | 新增文件 | 关键交付物 |
|------|------|---------|-----------|
| **Task 1** | 数列知识点 YAML | 6 个 `.yml` | 6 个新知识点 |
| **Task 2** | 导数知识点 YAML | 6 个 `.yml` | 6 个新知识点 |
| **Task 3** | 计数原理知识点 YAML | 6 个 `.yml` | 6 个新知识点 |
| **Task 4** | 第十四章 section-01 内容 | ~4 个 `.md` | 数列的概念与表示 |
| **Task 5** | 第十四章 section-02 内容 | ~5 个 `.md` | 等差数列 |
| **Task 6** | 第十四章 section-03 内容 | ~5 个 `.md` | 等比数列 |
| **Task 7** | 第十五章 section-01 内容 | ~6 个 `.md` | 导数的概念与运算 |
| **Task 8** | 第十五章 section-02 内容 | ~5 个 `.md` | 导数与单调性、极值 |
| **Task 9** | 第十五章 section-03 内容 | ~5 个 `.md` | 导数与最值、综合应用 |
| **Task 10** | 第十六章 section-01 内容 | ~5 个 `.md` | 计数原理与排列 |
| **Task 11** | 第十六章 section-02 内容 | ~5 个 `.md` | 组合 |
| **Task 12** | 第十六章 section-03 内容 | ~4 个 `.md` | 二项式定理 |
| **Task 13-15** | 页面更新 | 修改 3 个文件 | 四教材切换、图谱筛选 |
| **Task 16** | 内容测试 | 1 个测试 | 完整性校验 |
| **Task 17** | 跨册关系 | 修改 ~5 个 YAML | 知识图谱双向关系 |
| **Task 18** | 全量验证 | — | 质量报告 |

### 预计新增文件数

- 知识点 YAML：18 个
- 内容 Markdown：~54 个（习题 ~26 + 例题 ~9 + 定义 ~9 + 其他定义 ~10）
- 测试文件：1 个
- 修改文件：~8 个（页面、组件、已有 YAML）
- **总计：~81 个文件**

### 预计完成后项目总统计

| 指标 | Plan 4 结束时 | Plan 5 结束时 |
|------|-------------|-------------|
| 知识点 | 61 | **79** |
| 习题 | ~116 | **~142** |
| 页面 | ~81 | **~90**（+9 节） |
| 教材 | 3 册 | **4 册** |
| 测试 | ~78 | **~81+** |

### Commit 策略

按章节逐步提交，每个 Task 一个 commit：

```
content(kp): 添加数列 6 个知识点 YAML
content(kp): 添加导数及其应用 6 个知识点 YAML
content(kp): 添加计数原理 6 个知识点 YAML
content(selective-2/ch14-s1): 添加数列概念与表示的定义、习题和例题
content(selective-2/ch14-s2): 添加等差数列的定义、习题和例题
content(selective-2/ch14-s3): 添加等比数列的定义、习题和例题
content(selective-2/ch15-s1): 添加导数概念与运算的定义、习题和例题
content(selective-2/ch15-s2): 添加导数与单调性极值的定义、习题和例题
content(selective-2/ch15-s3): 添加导数与最值综合应用的定义、习题和例题
content(selective-2/ch16-s1): 添加计数原理与排列的定义、习题和例题
content(selective-2/ch16-s2): 添加组合的定义、习题和例题
content(selective-2/ch16-s3): 添加二项式定理的定义、习题和例题
feat(pages): add selective-2 chapter titles to textbook page
feat(pages): add selective-2 to knowledge graph textbook selector
feat(components): verify KnowledgeGraph supports selective-2 filtering
test(content): add selective-2 content integrity tests
content(kp): add cross-textbook knowledge point relations (required/selective-1 ↔ selective-2)
chore: Plan 5 complete — selective-2 content and quad-textbook support
```

### 验收标准

1. ✅ 18 个新知识点 YAML 文件，每个包含完整的 id/name/category/description/formulas/common_mistakes/applied_in
2. ✅ 所有知识点 `applied_in` 包含 `textbook: selective-2`
3. ✅ 9 个 section 目录，每个包含至少 2 道习题和 1 道例题
4. ✅ 所有习题 frontmatter 格式正确（textbook: selective-2, source: "自编"）
5. ✅ 所有引用的知识点 ID 存在于 knowledge-points/ 目录
6. ✅ 跨册知识点关系双向一致（required-1 ↔ selective-2, required-2 ↔ selective-2, selective-1 ↔ selective-2）
7. ✅ 知识图谱支持 selective-2 筛选
8. ✅ 教材浏览页显示选择性必修二章节目录
9. ✅ 全部测试通过（包括新增的 selective-2-integrity.test.ts）
10. ✅ 构建脚本正常运行，质量报告包含四册统计

### 关键跨册知识关联图

```
必修第一册                    选择性必修第二册
├── function-concept ──────────→ derivative-concept
├── function-properties ───────→ derivative-monotonicity
└── exponent-operation ────────→ geometric-sequence

必修第二册                    选择性必修第二册
└── set-concept ───────────────→ counting-principle-addition

选择性必修第一册               选择性必修第二册
└── line-inclination-slope ←→ derivative-concept (related)

选择性必修第二册（内部）
├── sequence-concept → arithmetic-sequence → arithmetic-sequence-sum
├── sequence-concept → geometric-sequence → geometric-sequence-sum
├── arithmetic-sequence-sum → sequence-sum-methods
├── geometric-sequence-sum → sequence-sum-methods
├── derivative-concept → derivative-operations → derivative-monotonicity
│   → derivative-extrema → derivative-max-min → derivative-applications
└── counting-principle-addition → counting-principle-multiplication
    → permutation → combination → binomial-theorem → binomial-properties
```
