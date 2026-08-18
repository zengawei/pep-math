# pep-math Plan 6: 选择性必修第三册完整内容

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成选择性必修第三册全部 2 章内容录入（随机变量及其分布、统计与统计案例），新增 15 个知识点 YAML，~16 道习题、~8 道例题、~8 个定义。更新页面与构建脚本以支持五教材切换（全系列完成）。

**Architecture:** 在 Plan 5 基础上扩展。内容层新增 `selective-3/` 目录下全部 2 章 Markdown 内容 + 15 个知识点 YAML。构建脚本已支持多教材遍历（自动扫描 `src/content/textbooks/` 所有子目录），无需大改。页面层需更新 `textbook/[id].astro` 的 `chapterTitles` 映射和 `knowledge-graph.astro` 的教材列表以支持选择性必修三。知识图谱通过 `applied_in` 字段自动聚合新知识点。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v3, React 19, Cytoscape.js, KaTeX, Pagefind, Vitest

**Spec:** `/home/zwei/Projects/pep-math-design/pep-math-design.md`

**Plan 5 完成状态:** 必修一 5 章 ✅ 必修二 5 章 ✅ 选择性必修一 3 章 ✅ 选择性必修二 3 章 ✅ 79 知识点 ✅ ~142 习题 ✅ 全量测试通过 ✅

---

## 选择性必修第三册教材内容概览

基于人教版 2019 新课标高中数学选择性必修第三册：

> **注意：** 计数原理（排列组合、二项式定理）已在 Plan 5 的第十六章中覆盖。本计划从第十七章开始，覆盖剩余两大主题。

| 章 | 标题 | 节数 | 新增知识点 |
|----|------|------|-----------|
| 第十七章 | 随机变量及其分布 | 5 节 | 10 个 |
| 第十八章 | 统计与统计案例 | 2 节 | 5 个 |
| **合计** | | **7 节** | **15 个** |

### 知识点清单

**随机变量及其分布（10 个）：**
1. `conditional-probability` — 条件概率
2. `total-probability` — 全概率公式
3. `discrete-random-variable` — 离散型随机变量及其分布列
4. `expected-value-variance` — 离散型随机变量的均值与方差
5. `binomial-distribution` — 二项分布
6. `hypergeometric-distribution` — 超几何分布
7. `normal-distribution` — 正态分布
8. `probability-addition-multiplication` — 概率的加法与乘法公式（事件关系与独立事件）
9. `bernoulli-trials` — n 次独立重复试验（伯努利概型）
10. `distribution-table` — 分布列的性质与应用

**统计与统计案例（5 个）：**
11. `regression-analysis` — 回归分析（线性回归模型）
12. `correlation-analysis` — 相关分析（相关系数、散点图）
13. `independence-test` — 独立性检验（χ² 检验）
14. `contingency-table` — 列联表与频率分析
15. `statistical-case` — 统计案例的综合应用

### 章节详细结构

```
selective-3/
├── chapter-17/                    # 随机变量及其分布
│   ├── section-01/                # 17.1 条件概率与全概率公式
│   ├── section-02/                # 17.2 离散型随机变量及其分布列
│   ├── section-03/                # 17.3 二项分布与超几何分布
│   ├── section-04/                # 17.4 离散型随机变量的均值与方差
│   └── section-05/                # 17.5 正态分布
└── chapter-18/                    # 统计与统计案例
    ├── section-01/                # 18.1 回归分析
    └── section-02/                # 18.2 独立性检验
```

---

## Global Constraints

- 所有构建脚本使用 TypeScript（`npx tsx` 运行），不使用 Python
- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`
- 所有内容 source 字段为 `"自编"`，references 标注课标条目
- KaTeX 公式客户端渲染，不在构建时处理
- 节详情页通过 fetch `public/data/` 下的 JSON 加载习题数据
- 知识图谱支持 required-1、required-2、selective-1、selective-2、selective-3 五册筛选
- Conventional Commits 格式提交
- 每个功能先写测试，再写实现（TDD）
- 新增知识点 YAML 的 `applied_in` 字段必须标注 `textbook: selective-3`
- 跨册知识点关系需双向维护（如 required-2 的 `frequency-probability` → selective-3 的 `conditional-probability`）
- 知识点 category 使用以下分类：`概率`、`统计`
- 章节编号从 17 开始（延续 selective-2 的 14-16）

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
│   │   │   ├── selective-2/                   # ✅ 已有
│   │   │   └── selective-3/                   # 🆕 全部新建
│   │   │       ├── chapter-17/                # 随机变量及其分布
│   │   │       │   ├── section-01/
│   │   │       │   │   ├── definition-1.md    # 条件概率
│   │   │       │   │   ├── definition-2.md    # 全概率公式
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-02/
│   │   │       │   │   ├── definition-1.md    # 离散型随机变量与分布列
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-03/
│   │   │       │   │   ├── definition-1.md    # 二项分布与超几何分布
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   ├── section-04/
│   │   │       │   │   ├── definition-1.md    # 均值与方差
│   │   │       │   │   ├── exercise-1.md
│   │   │       │   │   ├── exercise-2.md
│   │   │       │   │   ├── exercise-3.md
│   │   │       │   │   └── example-1.md
│   │   │       │   └── section-05/
│   │   │       │       ├── definition-1.md    # 正态分布
│   │   │       │       ├── exercise-1.md
│   │   │       │       ├── exercise-2.md
│   │   │       │       └── example-1.md
│   │   │       └── chapter-18/                # 统计与统计案例
│   │   │           ├── section-01/
│   │   │           │   ├── definition-1.md    # 回归分析
│   │   │           │   ├── exercise-1.md
│   │   │           │   ├── exercise-2.md
│   │   │           │   ├── exercise-3.md
│   │   │           │   └── example-1.md
│   │   │           └── section-02/
│   │   │               ├── definition-1.md    # 独立性检验
│   │   │               ├── exercise-1.md
│   │   │               ├── exercise-2.md
│   │   │               ├── exercise-3.md
│   │   │               └── example-1.md
│   │   └── knowledge-points/
│   │       ├── conditional-probability.yml            # 🆕
│   │       ├── total-probability.yml                  # 🆕
│   │       ├── discrete-random-variable.yml           # 🆕
│   │       ├── expected-value-variance.yml            # 🆕
│   │       ├── binomial-distribution.yml              # 🆕
│   │       ├── hypergeometric-distribution.yml        # 🆕
│   │       ├── normal-distribution.yml                # 🆕
│   │       ├── probability-addition-multiplication.yml # 🆕
│   │       ├── bernoulli-trials.yml                   # 🆕
│   │       ├── distribution-table.yml                 # 🆕
│   │       ├── regression-analysis.yml                # 🆕
│   │       ├── correlation-analysis.yml               # 🆕
│   │       ├── independence-test.yml                  # 🆕
│   │       ├── contingency-table.yml                  # 🆕
│   │       └── statistical-case.yml                   # 🆕
│   └── pages/
│       ├── textbook/
│       │   └── [id].astro                             # ✏️ 更新（添加 selective-3 章标题）
│       └── knowledge-graph.astro                      # ✏️ 更新（添加 selective-3 到教材列表）
├── tests/
│   └── content/
│       └── selective-3-integrity.test.ts              # 🆕 选择性必修三内容完整性测试
└── docs/plans/
    └── 2026-08-18-plan-6-selective-3.md               # 🆕 本文件
```

---

## Milestone: 知识点 YAML 文件

### Task 1: 概率知识点 YAML（10 个）

**Files:**
- Create: `src/content/knowledge-points/conditional-probability.yml`
- Create: `src/content/knowledge-points/total-probability.yml`
- Create: `src/content/knowledge-points/discrete-random-variable.yml`
- Create: `src/content/knowledge-points/expected-value-variance.yml`
- Create: `src/content/knowledge-points/binomial-distribution.yml`
- Create: `src/content/knowledge-points/hypergeometric-distribution.yml`
- Create: `src/content/knowledge-points/normal-distribution.yml`
- Create: `src/content/knowledge-points/probability-addition-multiplication.yml`
- Create: `src/content/knowledge-points/bernoulli-trials.yml`
- Create: `src/content/knowledge-points/distribution-table.yml`

- [ ] **Step 1: 创建 conditional-probability.yml**

```yaml
id: conditional-probability
name: 条件概率
category: 概率
description: |
  条件概率：设 A, B 为两个事件，且 P(A) > 0，在事件 A 发生的条件下，事件 B 发生的概率称为
  条件概率，记作 P(B|A)。

  公式：P(B|A) = P(AB) / P(A)

  条件概率的性质：
  - 0 ≤ P(B|A) ≤ 1
  - P(Ω|A) = 1
  - 若 B, C 互斥，则 P(B∪C|A) = P(B|A) + P(C|A)

  乘法公式：P(AB) = P(A) · P(B|A) = P(B) · P(A|B)

  条件概率的本质：缩小样本空间。已知 A 发生后，样本空间从 Ω 缩小到 A，
  在此缩小的样本空间中计算 B 发生的概率。
prerequisites:
  - random-event-probability
  - frequency-probability
follow_ups:
  - total-probability
  - probability-addition-multiplication
related:
  - event-independence
  - set-operations
formulas:
  - "P(B|A) = \\frac{P(AB)}{P(A)}"
  - "P(AB) = P(A) \\cdot P(B|A)"
common_mistakes:
  - mistake: "混淆 P(AB) 和 P(B|A)"
    correction: "P(AB) 是 A 和 B 同时发生的概率（样本空间为 Ω），P(B|A) 是在 A 已发生的条件下 B 发生的概率（样本空间缩小为 A）。两者关系：P(B|A) = P(AB)/P(A)"
  - mistake: "认为 P(B|A) = P(A|B)"
    correction: "P(B|A) 和 P(A|B) 一般不相等。P(B|A) = P(AB)/P(A)，P(A|B) = P(AB)/P(B)，只有 P(A) = P(B) 时才相等"
  - mistake: "条件概率中忘记缩小样本空间"
    correction: "求 P(B|A) 时，样本空间已缩小为 A。计算时要么用公式 P(AB)/P(A)，要么直接在缩小的样本空间 A 中计算 B 的概率"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 2: 创建 total-probability.yml**

```yaml
id: total-probability
name: 全概率公式
category: 概率
description: |
  全概率公式：设 B₁, B₂, ..., Bₙ 是样本空间 Ω 的一个划分（即两两互斥且并集为 Ω），
  且 P(Bᵢ) > 0（i = 1, 2, ..., n），则对任意事件 A：

  P(A) = P(B₁)P(A|B₁) + P(B₂)P(A|B₂) + ... + P(Bₙ)P(A|Bₙ)
       = Σ P(Bᵢ) · P(A|Bᵢ)

  使用条件：
  - B₁, B₂, ..., Bₙ 两两互斥
  - B₁ ∪ B₂ ∪ ... ∪ Bₙ = Ω
  - 每个 P(Bᵢ) > 0

  思想：将复杂事件 A 的概率分解为若干简单条件概率的加权和。
  "先选原因，再发生结果"——全概率公式是"由因推果"。

  贝叶斯公式（逆概率公式）：
  P(Bⱼ|A) = P(Bⱼ)P(A|Bⱼ) / Σ P(Bᵢ)P(A|Bᵢ)
  贝叶斯公式是"由果推因"。
prerequisites:
  - conditional-probability
follow_ups:
  - discrete-random-variable
related:
  - random-event-probability
  - event-independence
formulas:
  - "P(A) = \\sum_{i=1}^{n} P(B_i) \\cdot P(A|B_i)"
  - "P(B_j|A) = \\frac{P(B_j) \\cdot P(A|B_j)}{\\sum_{i=1}^{n} P(B_i) \\cdot P(A|B_i)}"
common_mistakes:
  - mistake: "使用全概率公式时 Bᵢ 不构成样本空间的划分"
    correction: "B₁, B₂, ..., Bₙ 必须两两互斥且并集为 Ω。遗漏某种情况会导致计算结果偏小"
  - mistake: "混淆全概率公式和贝叶斯公式的使用场景"
    correction: "全概率公式：已知各原因的概率，求结果的概率（由因推果）。贝叶斯公式：已知结果发生了，反推是某个原因导致的概率（由果推因）"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 3: 创建 discrete-random-variable.yml**

```yaml
id: discrete-random-variable
name: 离散型随机变量及其分布列
category: 概率
description: |
  随机变量：如果随机试验的结果可以用一个变量来表示，则称这个变量为随机变量。
  离散型随机变量：可能取的值可以一一列举出来的随机变量。

  分布列：设离散型随机变量 X 可能取的值为 x₁, x₂, ..., xₙ，
  X 取每个值的概率分别为 p₁, p₂, ..., pₙ，
  则称表格为 X 的概率分布列（简称分布列）。

  分布列的性质：
  - pᵢ ≥ 0（i = 1, 2, ..., n）
  - Σ pᵢ = 1（所有概率之和为 1）
  - P(X = xᵢ) = pᵢ

  分布列的表示方法：表格法、公式法（通项公式）、图示法。
prerequisites:
  - total-probability
  - random-event-probability
follow_ups:
  - distribution-table
  - expected-value-variance
  - binomial-distribution
  - hypergeometric-distribution
related:
  - frequency-probability
formulas:
  - "P(X = x_i) = p_i, \\quad i = 1, 2, \\ldots, n"
  - "\\sum_{i=1}^{n} p_i = 1"
  - "p_i \\geq 0"
common_mistakes:
  - mistake: "分布列中概率之和不为 1"
    correction: "分布列的所有概率之和必须等于 1。可以用此性质检验分布列是否正确，或求未知参数"
  - mistake: "遗漏随机变量的某些可能取值"
    correction: "列出分布列时，要确保穷举随机变量的所有可能取值，不重不漏"
  - mistake: "混淆随机变量的值与对应概率"
    correction: "分布列中 X 的取值和概率要一一对应。概率必须非负，且总和为 1"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 4: 创建 expected-value-variance.yml**

```yaml
id: expected-value-variance
name: 离散型随机变量的均值与方差
category: 概率
description: |
  均值（数学期望）：E(X) = Σ xᵢ · pᵢ
  反映随机变量取值的"平均水平"。

  均值的性质：
  - E(aX + b) = aE(X) + b
  - E(c) = c（常数的期望等于常数本身）

  方差：D(X) = Σ (xᵢ - E(X))² · pᵢ = E(X²) - [E(X)]²
  反映随机变量取值的"波动程度"或"离散程度"。

  方差的性质：
  - D(aX + b) = a²D(X)
  - D(c) = 0

  标准差：σ(X) = √D(X)

  常见分布的期望和方差：
  - 两点分布 X ~ B(1, p)：E(X) = p，D(X) = p(1-p)
  - 二项分布 X ~ B(n, p)：E(X) = np，D(X) = np(1-p)
  - 超几何分布 X ~ H(n, M, N)：E(X) = nM/N
prerequisites:
  - distribution-table
follow_ups:
  - binomial-distribution
  - normal-distribution
related:
  - discrete-random-variable
formulas:
  - "E(X) = \\sum_{i=1}^{n} x_i \\cdot p_i"
  - "D(X) = \\sum_{i=1}^{n} (x_i - E(X))^2 \\cdot p_i"
  - "D(X) = E(X^2) - [E(X)]^2"
  - "E(aX + b) = aE(X) + b"
  - "D(aX + b) = a^2 D(X)"
common_mistakes:
  - mistake: "计算方差时不使用 D(X) = E(X²) - [E(X)]² 的简便公式"
    correction: "直接用定义 D(X) = Σ(xᵢ - E(X))²pᵢ 计算量大。推荐先算 E(X) 和 E(X²) = Σxᵢ²pᵢ，再用 D(X) = E(X²) - [E(X)]²"
  - mistake: "D(aX + b) 中误写为 a²D(X) + b²"
    correction: "D(aX + b) = a²D(X)，常数 b 不影响方差（方差衡量的是偏离均值的程度，整体平移不改变偏离）"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 5: 创建 binomial-distribution.yml**

```yaml
id: binomial-distribution
name: 二项分布
category: 概率
description: |
  n 次独立重复试验（伯努利试验）中，每次试验事件 A 发生的概率为 p，
  设 X 为 n 次试验中 A 发生的次数，则 X 服从二项分布，记作 X ~ B(n, p)。

  分布列：P(X = k) = C(n, k) · pᵏ · (1-p)ⁿ⁻ᵏ（k = 0, 1, 2, ..., n）

  期望：E(X) = np
  方差：D(X) = np(1-p)

  二项分布的特征：
  - 试验次数 n 固定
  - 每次试验只有两个结果（成功/失败）
  - 每次试验相互独立
  - 每次成功的概率 p 不变

  当 n = 1 时，二项分布退化为两点分布（0-1 分布）。
prerequisites:
  - bernoulli-trials
  - combination
  - discrete-random-variable
follow_ups:
  - normal-distribution
related:
  - hypergeometric-distribution
  - expected-value-variance
  - event-independence
formulas:
  - "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}"
  - "X \\sim B(n, p)"
  - "E(X) = np"
  - "D(X) = np(1-p)"
common_mistakes:
  - mistake: "不满足独立条件时误用二项分布"
    correction: "二项分布要求每次试验相互独立。如果是不放回抽样且总体较小，应使用超几何分布而非二项分布"
  - mistake: "公式中 pᵏ 和 (1-p)ⁿ⁻ᵏ 的幂次写反"
    correction: "P(X = k) = C(n,k) · pᵏ · (1-p)ⁿ⁻ᵏ，p 的幂次是成功次数 k，(1-p) 的幂次是失败次数 n-k"
  - mistake: "忘记乘以 C(n, k)"
    correction: "C(n, k) 是从 n 次试验中选出 k 次成功的方式数。不乘 C(n, k) 只计算了一种特定顺序的概率"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 6: 创建 hypergeometric-distribution.yml**

```yaml
id: hypergeometric-distribution
name: 超几何分布
category: 概率
description: |
  在含有 M 件次品的 N 件产品中，不放回地任取 n 件，
  设取到的次品数为 X，则 X 服从超几何分布。

  分布列：P(X = k) = C(M, k) · C(N-M, n-k) / C(N, n)
  其中 max(0, n-(N-M)) ≤ k ≤ min(n, M)

  期望：E(X) = nM/N

  超几何分布的特征：
  - 不放回抽样
  - 总体分为两类（如正品/次品）
  - 每次抽取时概率会变化（因为不放回）

  与二项分布的区别：
  - 超几何分布：不放回抽样，每次概率变化
  - 二项分布：放回抽样（或总体极大时的近似），每次概率不变
  - 当 N 很大、n 相对 N 很小时，超几何分布近似于二项分布
prerequisites:
  - discrete-random-variable
  - combination
follow_ups:
  - expected-value-variance
related:
  - binomial-distribution
  - permutation
formulas:
  - "P(X = k) = \\frac{\\binom{M}{k} \\binom{N-M}{n-k}}{\\binom{N}{n}}"
  - "E(X) = \\frac{nM}{N}"
common_mistakes:
  - mistake: "放回抽样时误用超几何分布"
    correction: "放回抽样应使用二项分布。超几何分布专用于不放回抽样。判断标准：每次抽取后总体是否改变"
  - mistake: "超几何分布公式中 C(M, k) 和 C(N-M, n-k) 的参数搞混"
    correction: "M 是特殊类（如次品）的总数，k 是取到的特殊类个数；N-M 是普通类的总数，n-k 是取到的普通类个数。分子是两类各自的组合数之积"
  - mistake: "忽略 k 的取值范围"
    correction: "k 的范围是 max(0, n-(N-M)) ≤ k ≤ min(n, M)。例如从 50 件（5 件次品）中取 10 件，k 最小为 0，最大为 5"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 7: 创建 normal-distribution.yml**

```yaml
id: normal-distribution
name: 正态分布
category: 概率
description: |
  如果随机变量 X 的概率密度函数为：
  f(x) = (1/(σ√(2π))) · e^(-(x-μ)²/(2σ²))
  则称 X 服从正态分布，记作 X ~ N(μ, σ²)。

  参数含义：
  - μ：均值（决定对称轴位置）
  - σ：标准差（σ > 0，决定曲线的"胖瘦"）

  正态曲线的特点：
  - 关于 x = μ 对称
  - 在 x = μ 处取最大值 1/(σ√(2π))
  - σ 越小，曲线越"瘦高"（数据越集中）；σ 越大，曲线越"矮胖"（数据越分散）
  - 曲线与 x 轴围成的面积为 1

  特殊概率（3σ 原则）：
  - P(μ - σ < X ≤ μ + σ) ≈ 0.6827
  - P(μ - 2σ < X ≤ μ + 2σ) ≈ 0.9545
  - P(μ - 3σ < X ≤ μ + 3σ) ≈ 0.9973

  标准正态分布：μ = 0, σ = 1，记作 Z ~ N(0, 1)。
  标准化：若 X ~ N(μ, σ²)，则 Z = (X - μ)/σ ~ N(0, 1)。
prerequisites:
  - expected-value-variance
  - discrete-random-variable
follow_ups: []
related:
  - binomial-distribution
  - sample-estimate-population
formulas:
  - "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}"
  - "X \\sim N(\\mu, \\sigma^2)"
  - "P(\\mu - \\sigma < X \\leq \\mu + \\sigma) \\approx 0.6827"
  - "P(\\mu - 2\\sigma < X \\leq \\mu + 2\\sigma) \\approx 0.9545"
  - "P(\\mu - 3\\sigma < X \\leq \\mu + 3\\sigma) \\approx 0.9973"
common_mistakes:
  - mistake: "混淆 σ 和 σ² 在记号中的含义"
    correction: "X ~ N(μ, σ²) 中第二个参数是方差 σ²，不是标准差 σ。密度函数中用的是 σ"
  - mistake: "认为正态曲线与 x 轴有交点"
    correction: "正态曲线无限趋近 x 轴但永不相交。曲线向两侧无限延伸"
  - mistake: "3σ 原则中记混各区间对应的概率"
    correction: "记住：1σ ≈ 68.27%，2σ ≈ 95.45%，3σ ≈ 99.73%。越宽的区间包含的概率越大"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 8: 创建 probability-addition-multiplication.yml**

```yaml
id: probability-addition-multiplication
name: 概率的加法与乘法公式
category: 概率
description: |
  加法公式（一般情形）：
  P(A∪B) = P(A) + P(B) - P(AB)
  若 A, B 互斥：P(A∪B) = P(A) + P(B)

  乘法公式：
  P(AB) = P(A) · P(B|A) = P(B) · P(A|B)
  若 A, B 独立：P(AB) = P(A) · P(B)

  事件的独立性：
  如果 P(AB) = P(A) · P(B)，则称事件 A 与 B 相互独立。
  独立性的直观含义：一个事件的发生不影响另一个事件发生的概率。

  独立事件的性质：
  - 若 A, B 独立，则 A 与 B̄、Ā 与 B、Ā 与 B̄ 也独立
  - 多个事件相互独立时，联合概率等于各自概率的乘积
prerequisites:
  - conditional-probability
  - random-event-probability
follow_ups:
  - bernoulli-trials
  - binomial-distribution
related:
  - event-independence
  - set-operations
formulas:
  - "P(A \\cup B) = P(A) + P(B) - P(AB)"
  - "P(AB) = P(A) \\cdot P(B) \\quad (\\text{A, B 独立})"
  - "P(A_1 A_2 \\cdots A_n) = P(A_1) \\cdot P(A_2) \\cdots P(A_n) \\quad (\\text{相互独立})"
common_mistakes:
  - mistake: "混淆独立与互斥"
    correction: "互斥：A, B 不能同时发生（AB = ∅，P(AB) = 0）。独立：一个事件不影响另一个（P(AB) = P(A)P(B)）。两者是完全不同的概念，P(A) > 0 且 P(B) > 0 时互斥与独立不能同时成立"
  - mistake: "不验证独立性就直接用 P(AB) = P(A)P(B)"
    correction: "题目中通常通过'独立''互不影响'等关键词说明独立性。不能在没有依据的情况下假设事件独立"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 9: 创建 bernoulli-trials.yml**

```yaml
id: bernoulli-trials
name: n 次独立重复试验
category: 概率
description: |
  伯努利试验：只有两个可能结果（成功/失败）的试验。

  n 次独立重复试验（伯努利概型）的特征：
  1. 试验可以在相同条件下重复进行
  2. 每次试验只有两个结果：A（成功）和 Ā（失败）
  3. 每次试验相互独立
  4. 每次试验中 P(A) = p 保持不变

  在 n 次独立重复试验中，恰好成功 k 次的概率：
  P(X = k) = C(n, k) · pᵏ · (1-p)ⁿ⁻ᵏ

  此时 X 服从二项分布 X ~ B(n, p)。

  与古典概型的区别：
  - 古典概型：有限个等可能结果
  - 伯努利概型：重复试验，每次两个结果，概率不变，相互独立
prerequisites:
  - probability-addition-multiplication
  - combination
follow_ups:
  - binomial-distribution
related:
  - event-independence
  - frequency-probability
formulas:
  - "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}"
  - "X \\sim B(n, p)"
common_mistakes:
  - mistake: "非独立重复试验中误用伯努利公式"
    correction: "伯努利概型要求每次试验相互独立且概率不变。如果试验之间有关联（如不放回抽样），不能直接使用此公式"
  - mistake: "将'至少成功 k 次'直接代入公式"
    correction: "'至少 k 次'需要求 P(X ≥ k) = P(X = k) + P(X = k+1) + ... + P(X = n)，或用对立事件 1 - P(X < k)"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 10: 创建 distribution-table.yml**

```yaml
id: distribution-table
name: 分布列的性质与应用
category: 概率
description: |
  分布列的核心性质：
  1. 非负性：pᵢ ≥ 0
  2. 归一性：Σ pᵢ = 1
  3. 完备性：所有可能取值都已列出

  利用分布列求概率：
  - P(X = k) = pₖ（直接查表）
  - P(a ≤ X ≤ b) = Σ pᵢ（xᵢ 在 [a, b] 范围内的各项之和）
  - P(X > a) = 1 - P(X ≤ a)（对立事件法）

  利用分布列求参数：
  - 已知分布列的部分概率和为 1，可求未知参数
  - 已知期望或方差，结合分布列列方程

  常见分布类型判断：
  - 放回抽样 → 二项分布
  - 不放回抽样 → 超几何分布
  - 测量误差/自然现象 → 正态分布
prerequisites:
  - discrete-random-variable
follow_ups:
  - expected-value-variance
related:
  - binomial-distribution
  - hypergeometric-distribution
formulas:
  - "\\sum_{i=1}^{n} p_i = 1"
  - "P(a \\leq X \\leq b) = \\sum_{a \\leq x_i \\leq b} p_i"
common_mistakes:
  - mistake: "求 P(a < X < b) 时包含端点"
    correction: "注意严格不等号和非严格不等号的区别。P(a < X < b) 不包含 a 和 b 处的概率，P(a ≤ X ≤ b) 包含"
  - mistake: "利用归一性求参数时遗漏某些取值"
    correction: "分布列必须包含随机变量的所有可能取值。遗漏某项会导致概率之和不为 1，参数计算错误"
applied_in:
  - textbook: selective-3
    chapters: [17]
```

- [ ] **Step 11: 提交**

```bash
git add src/content/knowledge-points/conditional-probability.yml \
       src/content/knowledge-points/total-probability.yml \
       src/content/knowledge-points/discrete-random-variable.yml \
       src/content/knowledge-points/expected-value-variance.yml \
       src/content/knowledge-points/binomial-distribution.yml \
       src/content/knowledge-points/hypergeometric-distribution.yml \
       src/content/knowledge-points/normal-distribution.yml \
       src/content/knowledge-points/probability-addition-multiplication.yml \
       src/content/knowledge-points/bernoulli-trials.yml \
       src/content/knowledge-points/distribution-table.yml
git commit -m "content(kp): 添加随机变量及其分布 10 个知识点 YAML"
```

---

### Task 2: 统计知识点 YAML（5 个）

**Files:**
- Create: `src/content/knowledge-points/regression-analysis.yml`
- Create: `src/content/knowledge-points/correlation-analysis.yml`
- Create: `src/content/knowledge-points/independence-test.yml`
- Create: `src/content/knowledge-points/contingency-table.yml`
- Create: `src/content/knowledge-points/statistical-case.yml`

- [ ] **Step 1: 创建 regression-analysis.yml**

```yaml
id: regression-analysis
name: 回归分析
category: 统计
description: |
  回归分析：研究两个变量之间相关关系的统计方法。

  线性回归模型：ŷ = b̂x + â

  最小二乘法估计：
  b̂ = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)²
    = (Σxᵢyᵢ - nx̄ȳ) / (Σxᵢ² - nx̄²)
  â = ȳ - b̂x̄

  回归直线的性质：
  - 回归直线一定过样本中心点 (x̄, ȳ)
  - b̂ > 0 时正相关，b̂ < 0 时负相关

  残差分析：
  残差 eᵢ = yᵢ - ŷᵢ
  残差图：以残差为纵坐标，以样本编号或 x 值为横坐标。
  残差点均匀分布在水平带状区域内，说明模型选择适当。

  相关指数 R²（决定系数）：
  R² = 1 - Σ(yᵢ - ŷᵢ)² / Σ(yᵢ - ȳ)²
  R² 越接近 1，回归效果越好。
prerequisites:
  - sample-estimate-population
follow_ups:
  - statistical-case
related:
  - correlation-analysis
  - function-concept
formulas:
  - "\\hat{y} = \\hat{b}x + \\hat{a}"
  - "\\hat{b} = \\frac{\\sum_{i=1}^{n} x_i y_i - n\\bar{x}\\bar{y}}{\\sum_{i=1}^{n} x_i^2 - n\\bar{x}^2}"
  - "\\hat{a} = \\bar{y} - \\hat{b}\\bar{x}"
  - "R^2 = 1 - \\frac{\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2}{\\sum_{i=1}^{n}(y_i - \\bar{y})^2}"
common_mistakes:
  - mistake: "认为回归直线一定过原点"
    correction: "回归直线过样本中心点 (x̄, ȳ)，不一定过原点。â = ȳ - b̂x̄ 一般不为 0"
  - mistake: "混淆相关关系和因果关系"
    correction: "回归分析只说明两变量之间存在相关关系，不能说明因果关系。相关不等于因果"
  - mistake: "计算 b̂ 时分子分母公式记混"
    correction: "b̂ 的分子是 Σxᵢyᵢ - nx̄ȳ（x 和 y 的'协变'），分母是 Σxᵢ² - nx̄²（x 的'变异'）。分子含 y，分母不含 y"
applied_in:
  - textbook: selective-3
    chapters: [18]
```

- [ ] **Step 2: 创建 correlation-analysis.yml**

```yaml
id: correlation-analysis
name: 相关分析
category: 统计
description: |
  相关关系：两个变量之间存在某种非确定性的关联关系。
  与函数关系的区别：函数关系是确定性关系（一个变量唯一确定另一个），
  相关关系是非确定性关系（一个变量变化时另一个变量有变化趋势但不唯一确定）。

  散点图：用直角坐标系中的点表示两个变量的对应值。
  散点图可以直观判断两变量的相关关系类型：
  - 正相关：点散布在从左下到右上的区域
  - 负相关：点散布在从左上到右下的区域
  - 不相关：点散布无明显规律

  相关系数 r：
  r = Σ(xᵢ - x̄)(yᵢ - ȳ) / √[Σ(xᵢ - x̄)² · Σ(yᵢ - ȳ)²]
  = (Σxᵢyᵢ - nx̄ȳ) / √[(Σxᵢ² - nx̄²)(Σyᵢ² - nȳ²)]

  |r| 越接近 1，线性相关性越强；
  |r| 越接近 0，线性相关性越弱。
  r > 0 为正相关，r < 0 为负相关。
prerequisites:
  - sample-estimate-population
follow_ups:
  - regression-analysis
related:
  - regression-analysis
formulas:
  - "r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\cdot \\sum_{i=1}^{n}(y_i - \\bar{y})^2}}"
common_mistakes:
  - mistake: "相关系数 r 接近 0 就认为两变量无关"
    correction: "r 只衡量线性相关程度。r 接近 0 说明线性相关性弱，但可能存在非线性关系（如二次关系）"
  - mistake: "认为相关系数大就是因果关系"
    correction: "相关关系不等于因果关系。两个变量可能同时受第三个变量影响而产生虚假相关"
applied_in:
  - textbook: selective-3
    chapters: [18]
```

- [ ] **Step 3: 创建 independence-test.yml**

```yaml
id: independence-test
name: 独立性检验
category: 统计
description: |
  独立性检验：判断两个分类变量之间是否存在关联关系。

  基本思想（反证法思想）：
  - 假设 H₀：两个变量无关联（独立）
  - 计算 χ² 统计量，衡量实际观测值与理论期望值的偏离程度
  - χ² 越大，说明 H₀ 越不可信，两变量越可能有关联

  χ² 统计量（2×2 列联表）：
  χ² = n(ad - bc)² / [(a+b)(c+d)(a+c)(b+d)]
  其中 n = a + b + c + d

  临界值判断：
  - χ² ≥ 3.841 时，有 95% 的把握认为两变量有关（P ≤ 0.05）
  - χ² ≥ 6.635 时，有 99% 的把握认为两变量有关（P ≤ 0.01）
  - χ² ≥ 10.828 时，有 99.9% 的把握认为两变量有关（P ≤ 0.001）

  注意：独立性检验的结论是概率性的，不是确定性的。
  "有 95% 的把握"意味着犯错误的概率不超过 5%。
prerequisites:
  - contingency-table
  - frequency-probability
follow_ups:
  - statistical-case
related:
  - contingency-table
  - random-event-probability
formulas:
  - "\\chi^2 = \\frac{n(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}"
  - "\\chi^2 \\geq 3.841 \\Rightarrow \\text{有 95\\% 把握认为有关}"
  - "\\chi^2 \\geq 6.635 \\Rightarrow \\text{有 99\\% 把握认为有关}"
common_mistakes:
  - mistake: "认为 χ² 检验结果是确定性的"
    correction: "独立性检验的结论是概率性的。'有 95% 的把握认为有关'意味着有 5% 的可能性犯错。这不是 100% 确定的结论"
  - mistake: "χ² 公式中 ad - bc 忘记平方"
    correction: "χ² = n(ad - bc)² / [(a+b)(c+d)(a+c)(b+d)]，分子中 (ad - bc) 必须平方，否则可能为负"
  - mistake: "把'有 95% 的把握认为有关'说成'有 95% 的概率有关'"
    correction: "正确表述：'在犯错误概率不超过 5% 的前提下，认为两变量有关'。不是'两变量有 95% 的概率有关'"
applied_in:
  - textbook: selective-3
    chapters: [18]
```

- [ ] **Step 4: 创建 contingency-table.yml**

```yaml
id: contingency-table
name: 列联表与频率分析
category: 统计
description: |
  列联表（交叉表）：将两个分类变量的频数汇总在一个表格中。

  2×2 列联表：
         B₁    B₂    合计
  A₁     a     b     a+b
  A₂     c     d     c+d
  合计   a+c   b+d   n

  其中 n = a + b + c + d

  频率分析：
  - 行频率：每行中各列占该行合计的比例
  - 列频率：每列中各行占该列合计的比例
  - 通过比较频率差异，初步判断两变量是否有关联

  列联表的作用：
  - 直观展示两个分类变量的频数分布
  - 为独立性检验提供数据基础
  - 通过频率差异初步判断关联方向
prerequisites:
  - sample-estimate-population
  - frequency-probability
follow_ups:
  - independence-test
related:
  - independence-test
  - random-sampling
formulas:
  - "\\chi^2 = \\frac{n(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)} \\quad (\\text{基于 2×2 列联表})"
common_mistakes:
  - mistake: "列联表中合计行/列计算错误"
    correction: "仔细核对每行每列的合计值。所有行的合计之和应等于总样本量 n"
  - mistake: "将频数和频率混淆"
    correction: "频数是绝对数（人数、个数），频率是相对数（比例、百分比）。列联表中直接填写频数，频率需要另外计算"
applied_in:
  - textbook: selective-3
    chapters: [18]
```

- [ ] **Step 5: 创建 statistical-case.yml**

```yaml
id: statistical-case
name: 统计案例的综合应用
category: 统计
description: |
  统计案例综合应用：将回归分析和独立性检验应用于实际问题。

  解题步骤：
  1. 审题：明确两个变量分别是什么，是定量变量还是分类变量
  2. 选择方法：
     - 两个定量变量 → 回归分析（线性回归方程）
     - 两个分类变量 → 独立性检验（χ² 检验）
  3. 计算：代入公式求解
  4. 结论：用规范语言表述统计结论

  实际应用中的注意事项：
  - 回归方程只适用于样本所代表的总体
  - 回归预测是估计值，不是精确值
  - 独立性检验的结论有犯错误的可能
  - 样本量越大，结论越可靠
prerequisites:
  - regression-analysis
  - independence-test
follow_ups: []
related:
  - regression-analysis
  - independence-test
  - sample-estimate-population
formulas: []
common_mistakes:
  - mistake: "回归方程用于超出样本范围的预测"
    correction: "回归方程的预测范围不应超出样本数据的范围太多。超出范围的外推可能不准确"
  - mistake: "独立性检验结论中使用'一定''必然'等词"
    correction: "统计结论是概率性的。应使用'有 XX% 的把握认为'或'在犯错误概率不超过 XX% 的前提下认为'"
applied_in:
  - textbook: selective-3
    chapters: [18]
```

- [ ] **Step 6: 提交**

```bash
git add src/content/knowledge-points/regression-analysis.yml \
       src/content/knowledge-points/correlation-analysis.yml \
       src/content/knowledge-points/independence-test.yml \
       src/content/knowledge-points/contingency-table.yml \
       src/content/knowledge-points/statistical-case.yml
git commit -m "content(kp): 添加统计与统计案例 5 个知识点 YAML"
```

---

## Milestone: 第十七章内容 — 随机变量及其分布

### Task 3: 第十七章 section-01 — 条件概率与全概率公式

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/definition-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（条件概率）**

```markdown
---
type: definition
textbook: selective-3
chapter: 17
section: 1
name: 条件概率
related_knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
---

**定义（精确表述）：** 设 $A, B$ 为两个事件，且 $P(A) > 0$。在事件 $A$ 已经发生的条件下，事件 $B$ 发生的概率称为**条件概率**，记作 $P(B|A)$。

$$P(B|A) = \frac{P(AB)}{P(A)}$$

条件概率满足概率的基本性质：
- $0 \leqslant P(B|A) \leqslant 1$
- $P(\Omega|A) = 1$
- 若 $B, C$ 互斥，则 $P(B \cup C|A) = P(B|A) + P(C|A)$

**乘法公式：** 由条件概率的定义可直接得到乘法公式：

$$P(AB) = P(A) \cdot P(B|A)$$

**通俗解释：** 条件概率就是"已知某件事已经发生了，另一件事发生的可能性有多大"。比如你知道今天下雨了（事件 A），那你带伞（事件 B）的概率就比不知道天气时高得多。条件概率的本质是**缩小样本空间**——原来考虑所有可能的天气，现在只看"下雨"这种情况。
```

- [ ] **Step 2: 创建 definition-2.md（全概率公式）**

```markdown
---
type: definition
textbook: selective-3
chapter: 17
section: 1
name: 全概率公式
related_knowledge_points:
  - total-probability
  - conditional-probability
---

**定义（精确表述）：** 设 $B_1, B_2, \ldots, B_n$ 是样本空间 $\Omega$ 的一个**划分**（即 $B_i$ 两两互斥，且 $B_1 \cup B_2 \cup \cdots \cup B_n = \Omega$），且 $P(B_i) > 0$，则对任意事件 $A$：

$$P(A) = \sum_{i=1}^{n} P(B_i) \cdot P(A|B_i) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) + \cdots + P(B_n)P(A|B_n)$$

这就是**全概率公式**。

**贝叶斯公式（逆概率公式）：** 若事件 $A$ 已经发生，则"是第 $j$ 个原因导致"的概率为：

$$P(B_j|A) = \frac{P(B_j) \cdot P(A|B_j)}{\displaystyle\sum_{i=1}^{n} P(B_i) \cdot P(A|B_i)}$$

**通俗解释：** 全概率公式的思想是"化整为零"——把一个复杂事件的概率分解成若干简单情况的加权和。就像你想知道迟到的总概率，可以按交通方式分类：坐公交迟到的概率 × 坐公交的比例 + 走路迟到的概率 × 走路的比例 + …… 贝叶斯公式则是反过来：已知你迟到了，反推你是坐公交导致的概率。
```

- [ ] **Step 3: 创建 exercise-1.md**

```markdown
---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - conditional-probability
source: "自编"
references: "课标17.1.1"
---

**题目：** 一个盒子中有 $6$ 个红球和 $4$ 个白球，从中不放回地依次取 $2$ 个球。

(1) 求第一次取到红球的概率。

(2) 已知第一次取到红球，求第二次也取到红球的概率。

(3) 求两次都取到红球的概率。

---

**解答：**

**第1步：** 求第一次取到红球的概率
> 📌 运用知识点：古典概型

$P(\text{第一次红}) = \dfrac{6}{10} = \dfrac{3}{5}$

**第2步：** 已知第一次取到红球，求第二次也取到红球的概率
> 📌 运用知识点：条件概率

已知第一次取到红球后，盒中剩 $5$ 个红球和 $4$ 个白球，共 $9$ 个球。

$P(\text{第二次红}|\text{第一次红}) = \dfrac{5}{9}$

**第3步：** 求两次都取到红球的概率
> 📌 运用知识点：乘法公式

$P(\text{两次都红}) = P(\text{第一次红}) \cdot P(\text{第二次红}|\text{第一次红}) = \dfrac{3}{5} \times \dfrac{5}{9} = \dfrac{1}{3}$

**💡 解题思路总结：** 不放回抽样是条件概率的典型场景。第一次抽取改变第二次的样本空间，因此需要用条件概率和乘法公式。
```

- [ ] **Step 4: 创建 exercise-2.md**

```markdown
---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - total-probability
  - conditional-probability
source: "自编"
references: "课标17.1.2"
---

**题目：** 某工厂有甲、乙、丙三条生产线生产同一种产品，产量分别占总产量的 $25\%$、$35\%$、$40\%$。已知甲、乙、丙三条生产线的次品率分别为 $2\%$、$1\%$、$3\%$。

(1) 从该厂产品中随机取一件，求该产品是次品的概率。

(2) 若取到的是次品，求它来自甲生产线的概率。

---

**解答：**

**第1步：** 设定事件
> 📌 运用知识点：全概率公式

设 $A$ = "取到次品"，$B_1$ = "来自甲"，$B_2$ = "来自乙"，$B_3$ = "来自丙"。

已知：
- $P(B_1) = 0.25$，$P(A|B_1) = 0.02$
- $P(B_2) = 0.35$，$P(A|B_2) = 0.01$
- $P(B_3) = 0.40$，$P(A|B_3) = 0.03$

**第2步：** 用全概率公式求 P(A)
> 📌 运用知识点：全概率公式

$$P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) + P(B_3)P(A|B_3)$$

$$= 0.25 \times 0.02 + 0.35 \times 0.01 + 0.40 \times 0.03$$

$$= 0.005 + 0.0035 + 0.012 = 0.0205$$

**第3步：** 用贝叶斯公式求 P(B₁|A)
> 📌 运用知识点：贝叶斯公式

$$P(B_1|A) = \frac{P(B_1) \cdot P(A|B_1)}{P(A)} = \frac{0.005}{0.0205} = \frac{100}{410} = \frac{10}{41} \approx 0.244$$

**💡 解题思路总结：** 全概率公式"由因推果"（已知各生产线的次品率，求总次品率），贝叶斯公式"由果推因"（已知取到次品，反推来源）。这是经典的"全概率 + 贝叶斯"组合题型。
```

- [ ] **Step 5: 创建 exercise-3.md**

```markdown
---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
source: "自编"
references: "课标17.1.3"
---

**题目：** 甲、乙两人独立地解同一道数学题，甲解出的概率为 $0.8$，乙解出的概率为 $0.7$。

(1) 求两人都解出这道题的概率。

(2) 求至少有一人解出这道题的概率。

(3) 已知至少有一人解出，求两人都解出的概率。

---

**解答：**

**第1步：** 求两人都解出的概率
> 📌 运用知识点：独立事件的乘法公式

设 $A$ = "甲解出"，$B$ = "乙解出"，$A, B$ 独立。

$P(AB) = P(A) \cdot P(B) = 0.8 \times 0.7 = 0.56$

**第2步：** 求至少有一人解出的概率
> 📌 运用知识点：对立事件

$P(A \cup B) = 1 - P(\bar{A}) \cdot P(\bar{B}) = 1 - 0.2 \times 0.3 = 1 - 0.06 = 0.94$

**第3步：** 求条件概率
> 📌 运用知识点：条件概率

$$P(AB|A \cup B) = \frac{P(AB \cap (A \cup B))}{P(A \cup B)} = \frac{P(AB)}{P(A \cup B)} = \frac{0.56}{0.94} = \frac{28}{47}$$

（注意 $AB \subset A \cup B$，所以 $AB \cap (A \cup B) = AB$）

**💡 解题思路总结：** "至少一个"用对立事件法（$1 - P(\text{都不})$）。条件概率中注意事件包含关系可以简化交集运算。
```

- [ ] **Step 6: 创建 example-1.md**

```markdown
---
type: example
textbook: selective-3
chapter: 17
section: 1
number: 1
knowledge_points:
  - conditional-probability
  - total-probability
---

**例题：** 袋中有 $4$ 个白球和 $2$ 个红球。采用如下方式取球：第一次取出一个球后放回，再放入与取出球颜色不同的球 $1$ 个，然后第二次取球。求第二次取到白球的概率。

**解答：**

**第1步：** 分析题意，确定分类标准
> 📌 运用知识点：全概率公式

第一次取球有两种结果：取到白球或取到红球。这两种情况会影响袋中球的组成，从而影响第二次取球的概率。以第一次取球结果为分类标准。

**第2步：** 计算各情况的概率
> 📌 运用知识点：条件概率

**情况 1：** 第一次取到白球（概率 $\frac{4}{6} = \frac{2}{3}$）
- 放回白球，再放入 $1$ 个红球
- 袋中：$4$ 白 $3$ 红，共 $7$ 个球
- $P(\text{第二次白}|\text{第一次白}) = \dfrac{4}{7}$

**情况 2：** 第一次取到红球（概率 $\frac{2}{6} = \frac{1}{3}$）
- 放回红球，再放入 $1$ 个白球
- 袋中：$5$ 白 $2$ 红，共 $7$ 个球
- $P(\text{第二次白}|\text{第一次红}) = \dfrac{5}{7}$

**第3步：** 用全概率公式
> 📌 运用知识点：全概率公式

$$P(\text{第二次白}) = \frac{2}{3} \times \frac{4}{7} + \frac{1}{3} \times \frac{5}{7} = \frac{8}{21} + \frac{5}{21} = \frac{13}{21}$$

> ⚠️ **注意：** 这道题的关键在于第一次取球后"放回并加入不同颜色的球"，这改变了第二次取球时袋中球的组成。必须分情况讨论，用全概率公式合并。
```

- [ ] **Step 7: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-17/section-01/
git commit -m "content(selective-3/ch17-s1): 添加条件概率与全概率公式的定义、习题和例题"
```

---

### Task 4: 第十七章 section-02 — 离散型随机变量及其分布列

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-17/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（离散型随机变量与分布列）**

内容同知识点 `discrete-random-variable` 和 `distribution-table` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 写出简单随机变量的分布列（如掷骰子、摸球）
- exercise-2: medium — 利用分布列的性质（概率之和为 1）求未知参数
- exercise-3: medium — 求含参数分布列的期望

- [ ] **Step 5: 创建 example-1.md**

例题：从装有 3 个红球和 2 个白球的袋中不放回地取球，直到取出红球为止。设取球次数为 X，求 X 的分布列。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-17/section-02/
git commit -m "content(selective-3/ch17-s2): 添加离散型随机变量及其分布列的定义、习题和例题"
```

---

### Task 5: 第十七章 section-03 — 二项分布与超几何分布

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-17/section-03/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-03/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-03/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-03/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-03/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（二项分布与超几何分布）**

```markdown
---
type: definition
textbook: selective-3
chapter: 17
section: 3
name: 二项分布与超几何分布
related_knowledge_points:
  - binomial-distribution
  - hypergeometric-distribution
  - bernoulli-trials
---

**定义（精确表述）：**

**二项分布：** 在 $n$ 次独立重复试验中，每次试验事件 $A$ 发生的概率为 $p$，设 $X$ 为 $n$ 次试验中 $A$ 发生的次数，则 $X$ 服从二项分布 $X \sim B(n, p)$，其分布列为：

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \quad (k = 0, 1, 2, \ldots, n)$$

**超几何分布：** 在含有 $M$ 件特殊品的 $N$ 件产品中，不放回地取 $n$ 件，设取到的特殊品数为 $X$，则：

$$P(X = k) = \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}$$

**两种分布的区别：**

| 特征 | 二项分布 | 超几何分布 |
|------|---------|-----------|
| 抽样方式 | 放回抽样 | 不放回抽样 |
| 每次概率 | 不变 | 变化 |
| 试验独立性 | 独立 | 不独立 |

**通俗解释：** 二项分布就像"反复扔硬币"——每次互不影响，正面概率始终是 $1/2$。超几何分布就像"从一筐水果里摸球"——每摸一个，筐里的情况就变了，下一次摸到的概率也跟着变。当总体很大（$N$ 很大）而抽样数很小（$n$ 很小）时，不放回的影响可以忽略，超几何分布就近似于二项分布。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 二项分布直接计算（如射击命中次数 X ~ B(n, p)）
- exercise-2: medium — 超几何分布应用（如从含次品的产品中抽检）
- exercise-3: medium — 判断使用二项分布还是超几何分布，并求分布列

- [ ] **Step 5: 创建 example-1.md**

例题：一批产品共 100 件，其中 5 件次品。
(1) 有放回地取 3 件，求恰好取到 1 件次品的概率。
(2) 不放回地取 3 件，求取到次品数 X 的分布列。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-17/section-03/
git commit -m "content(selective-3/ch17-s3): 添加二项分布与超几何分布的定义、习题和例题"
```

---

### Task 6: 第十七章 section-04 — 离散型随机变量的均值与方差

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-17/section-04/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-04/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-04/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-04/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-04/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（均值与方差）**

内容同知识点 `expected-value-variance` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 由分布列直接计算 E(X) 和 D(X)
- exercise-2: medium — 利用 E(X) 和 D(X) 的性质（E(aX+b), D(aX+b)）
- exercise-3: hard — 实际应用题（如决策问题——比较两种方案的期望收益）

- [ ] **Step 5: 创建 example-1.md**

例题：某投资项目的利润 X（万元）的分布列为 P(X=2)=0.3, P(X=5)=0.5, P(X=-1)=0.2。求 E(X) 和 D(X)。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-17/section-04/
git commit -m "content(selective-3/ch17-s4): 添加离散型随机变量均值与方差的定义、习题和例题"
```

---

### Task 7: 第十七章 section-05 — 正态分布

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-17/section-05/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-05/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-05/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-17/section-05/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（正态分布）**

内容同知识点 `normal-distribution` 的精确表述和通俗解释。

- [ ] **Step 2-3: 创建 exercise-1.md, exercise-2.md**

习题覆盖：
- exercise-1: basic — 利用 3σ 原则计算概率（如 X ~ N(μ, σ²)，求 P(a < X < b)）
- exercise-2: medium — 正态分布的实际应用（如测量误差、产品质量问题）

- [ ] **Step 4: 创建 example-1.md**

例题：某次考试数学成绩 X ~ N(100, 10²)。
(1) 求 P(90 < X ≤ 110)。
(2) 若 P(X > a) = 0.8413，求 a 的值。

- [ ] **Step 5: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-17/section-05/
git commit -m "content(selective-3/ch17-s5): 添加正态分布的定义、习题和例题"
```

---

## Milestone: 第十八章内容 — 统计与统计案例

### Task 8: 第十八章 section-01 — 回归分析

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-18/section-01/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-01/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-01/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-01/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-01/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（回归分析）**

```markdown
---
type: definition
textbook: selective-3
chapter: 18
section: 1
name: 回归分析
related_knowledge_points:
  - regression-analysis
  - correlation-analysis
---

**定义（精确表述）：** 回归分析是对具有**相关关系**的两个变量进行统计分析的方法。

**线性回归方程：** $\hat{y} = \hat{b}x + \hat{a}$，其中

$$\hat{b} = \frac{\displaystyle\sum_{i=1}^{n} x_i y_i - n\bar{x}\bar{y}}{\displaystyle\sum_{i=1}^{n} x_i^2 - n\bar{x}^2} = \frac{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

$$\hat{a} = \bar{y} - \hat{b}\bar{x}$$

**回归直线必过样本中心点** $(\bar{x}, \bar{y})$。

**相关指数 $R^2$（决定系数）：**

$$R^2 = 1 - \frac{\displaystyle\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{\displaystyle\sum_{i=1}^{n}(y_i - \bar{y})^2}$$

$R^2$ 越接近 $1$，回归效果越好。

**通俗解释：** 回归分析就是"找一条最合适的直线来描述两个变量的关系"。这条直线不一定穿过每个数据点，但它尽可能"靠近"所有点——就像在散点图中画一条最能代表数据趋势的线。$R^2$ 告诉你这条线的"拟合度"：$R^2 = 0.95$ 意味着 $95\%$ 的数据波动可以被这条直线解释。
```

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 根据给定的数据表求线性回归方程
- exercise-2: medium — 利用回归方程进行预测，计算 R²
- exercise-3: medium — 非线性关系的处理（如 y = ae^(bx) 取对数转化为线性回归）

- [ ] **Step 5: 创建 example-1.md**

例题：某工厂记录了 5 个月的产量 x（吨）与能耗 y（吨标准煤）的数据，求线性回归方程并预测产量为 8 吨时的能耗。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-18/section-01/
git commit -m "content(selective-3/ch18-s1): 添加回归分析的定义、习题和例题"
```

---

### Task 9: 第十八章 section-02 — 独立性检验

**Files:**
- Create: `src/content/textbooks/selective-3/chapter-18/section-02/definition-1.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-02/exercise-1.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-02/exercise-2.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-02/exercise-3.md`
- Create: `src/content/textbooks/selective-3/chapter-18/section-02/example-1.md`

- [ ] **Step 1: 创建 definition-1.md（独立性检验）**

内容同知识点 `independence-test` 和 `contingency-table` 的精确表述和通俗解释。

- [ ] **Step 2-4: 创建 exercise-1.md, exercise-2.md, exercise-3.md**

习题覆盖：
- exercise-1: basic — 根据 2×2 列联表计算 χ² 并判断关联性
- exercise-2: medium — 根据文字描述列出列联表，进行独立性检验
- exercise-3: medium — 综合应用题（结合频率分析和独立性检验，给出完整统计报告）

- [ ] **Step 5: 创建 example-1.md**

例题：为研究性别与是否喜欢数学的关系，调查了 100 名学生，得到列联表。计算 χ² 并判断是否有 95% 的把握认为性别与喜欢数学有关。

- [ ] **Step 6: 提交**

```bash
git add src/content/textbooks/selective-3/chapter-18/section-02/
git commit -m "content(selective-3/ch18-s2): 添加独立性检验的定义、习题和例题"
```

---

## Milestone: 页面与构建更新

### Task 10: 更新 textbook/[id].astro — 添加 selective-3 章标题

**Files:**
- Modify: `src/pages/textbook/[id].astro`

- [ ] **Step 1: 在 chapterTitles 映射中添加 selective-3**

```typescript
'selective-3': [
  '', '', '', '', '', '', '', '', '', '', // chapters 1-10 do not exist
  '', '', '',                             // chapters 11-13 do not exist
  '', '', '',                             // chapters 14-16 do not exist
  '随机变量及其分布',                      // chapter 17
  '统计与统计案例',                         // chapter 18
],
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/Projects/pep-math
npm run build:scripts
npx astro build
```

Expected: 构建成功，`/pep-math/textbook/selective-3/` 页面显示 2 章内容

- [ ] **Step 3: 提交**

```bash
git add src/pages/textbook/[id].astro
git commit -m "feat(pages): add selective-3 chapter titles to textbook page"
```

---

### Task 11: 更新 knowledge-graph.astro — 添加 selective-3 到教材列表

**Files:**
- Modify: `src/pages/knowledge-graph.astro`

- [ ] **Step 1: 更新 textbooks 数组**

```typescript
const textbooks = [
  { id: 'required-1', name: '必修 第一册' },
  { id: 'required-2', name: '必修 第二册' },
  { id: 'selective-1', name: '选择性必修 第一册' },
  { id: 'selective-2', name: '选择性必修 第二册' },
  { id: 'selective-3', name: '选择性必修 第三册' },
];
```

- [ ] **Step 2: 验证并提交**

```bash
npx astro build
git add src/pages/knowledge-graph.astro
git commit -m "feat(pages): add selective-3 to knowledge graph textbook selector"
```

---

### Task 12: 更新 KnowledgeGraph 组件 — 支持五教材筛选

**Files:**
- Modify: `src/components/KnowledgeGraph.tsx`

- [ ] **Step 1: 验证 textbookFilter prop 已支持 selective-3**

确保 KnowledgeGraph 组件的 textbookFilter 逻辑对 `selective-3` 值正常工作（应已支持，因为它是通用的字符串匹配）。

- [ ] **Step 2: 更新测试**

添加测试用例验证 selective-3 节点正确筛选：

```typescript
it('filters nodes for selective-3', () => {
  const graph = {
    nodes: [
      { id: 'set-concept', name: '集合', category: '集合', textbooks: ['required-1'], x: 0, y: 0 },
      { id: 'conditional-probability', name: '条件概率', category: '概率', textbooks: ['selective-3'], x: 100, y: 0 },
    ],
    edges: [],
  };
  const { container } = render(
    <KnowledgeGraph graph={graph} textbookFilter="selective-3" />
  );
  expect(container.querySelector('#cy')).toBeTruthy();
});
```

- [ ] **Step 3: 运行测试并提交**

```bash
npx vitest run tests/components/KnowledgeGraph.test.tsx
git add src/components/KnowledgeGraph.tsx tests/components/KnowledgeGraph.test.tsx
git commit -m "feat(components): verify KnowledgeGraph supports selective-3 filtering"
```

---

## Milestone: 测试与验证

### Task 13: 选择性必修三内容完整性测试

**Files:**
- Create: `tests/content/selective-3-integrity.test.ts`

- [ ] **Step 1: 编写测试**

```typescript
// tests/content/selective-3-integrity.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const textbooksDir = path.resolve('src/content/textbooks/selective-3');
const kpDir = path.resolve('src/content/knowledge-points');

describe('Selective-3 content integrity', () => {
  it('has all 2 chapters', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );
    expect(chapters.length).toBe(2);
    expect(chapters).toContain('chapter-17');
    expect(chapters).toContain('chapter-18');
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
    expect(exercises.length).toBeGreaterThanOrEqual(14);

    for (const file of exercises) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      expect(data.type).toBe('exercise');
      expect(data.textbook).toBe('selective-3');
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

  it('selective-3 knowledge points have correct applied_in', () => {
    const selective3Kps = [
      'conditional-probability', 'total-probability',
      'discrete-random-variable', 'expected-value-variance',
      'binomial-distribution', 'hypergeometric-distribution',
      'normal-distribution', 'probability-addition-multiplication',
      'bernoulli-trials', 'distribution-table',
      'regression-analysis', 'correlation-analysis',
      'independence-test', 'contingency-table',
      'statistical-case',
    ];

    for (const kpId of selective3Kps) {
      const file = path.join(kpDir, `${kpId}.yml`);
      expect(fs.existsSync(file), `Missing KP file: ${kpId}.yml`).toBe(true);
      const raw = fs.readFileSync(file, 'utf-8');
      const kp = yaml.load(raw) as any;
      const appliedTextbooks = (kp.applied_in || []).map((a: any) => a.textbook);
      expect(appliedTextbooks).toContain('selective-3');
    }
  });

  it('every section has at least one definition and one example', () => {
    const chapters = fs.readdirSync(textbooksDir).filter(f =>
      fs.statSync(path.join(textbooksDir, f)).isDirectory()
    );

    for (const chapter of chapters) {
      const chapterPath = path.join(textbooksDir, chapter);
      const sections = fs.readdirSync(chapterPath).filter(f =>
        fs.statSync(path.join(chapterPath, f)).isDirectory()
      );

      for (const section of sections) {
        const sectionPath = path.join(chapterPath, section);
        const files = fs.readdirSync(sectionPath);
        const definitions = files.filter(f => f.startsWith('definition-'));
        const examples = files.filter(f => f.startsWith('example-'));
        expect(definitions.length, `${chapter}/${section} missing definitions`).toBeGreaterThanOrEqual(1);
        expect(examples.length, `${chapter}/${section} missing examples`).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
```

- [ ] **Step 2: 运行测试**

```bash
npx vitest run tests/content/selective-3-integrity.test.ts
```

Expected: 所有测试通过

- [ ] **Step 3: 提交**

```bash
git add tests/content/selective-3-integrity.test.ts
git commit -m "test(content): add selective-3 content integrity tests"
```

---

### Task 14: 更新知识图谱关系 — 跨册知识点

**Files:**
- Modify: 部分已有知识点 YAML（添加跨册关系）

- [ ] **Step 1: 添加跨册知识点关系**

需要更新以下知识点以建立跨册关系：

**required-2 → selective-3：**
1. `frequency-probability.yml` — 添加 `follow_ups: [conditional-probability]`（频率与概率 → 条件概率）
2. `random-event-probability.yml` — 添加 `follow_ups: [conditional-probability, probability-addition-multiplication]`（随机事件概率 → 条件概率）
3. `event-independence.yml` — 添加 `related: [probability-addition-multiplication, bernoulli-trials]`（事件独立性 ↔ 独立事件乘法）
4. `random-sampling.yml` — 添加 `related: [hypergeometric-distribution]`（随机抽样 ↔ 超几何分布）
5. `sample-estimate-population.yml` — 添加 `follow_ups: [regression-analysis, correlation-analysis]`（样本估计总体 → 回归分析）

**selective-2 → selective-3：**
6. `combination.yml` — 添加 `follow_ups: [binomial-distribution, hypergeometric-distribution]`（组合 → 二项/超几何分布）

**selective-3 内部知识点关系（已在 YAML 中定义，需验证双向一致性）：**
- `conditional-probability` → `total-probability` ⟺ `total-probability` prerequisites 包含 `conditional-probability` ✓
- `discrete-random-variable` → `distribution-table` ⟺ `distribution-table` prerequisites 包含 `discrete-random-variable` ✓
- `distribution-table` → `expected-value-variance` ⟺ `expected-value-variance` prerequisites 包含 `distribution-table` ✓
- `bernoulli-trials` → `binomial-distribution` ⟺ `binomial-distribution` prerequisites 包含 `bernoulli-trials` ✓
- `probability-addition-multiplication` → `bernoulli-trials` ⟺ `bernoulli-trials` prerequisites 包含 `probability-addition-multiplication` ✓

验证双向关系完整性：
- `frequency-probability` → `conditional-probability` ⟺ `conditional-probability` prerequisites 包含 `frequency-probability` ✓（需确认已有）
- `random-event-probability` → `conditional-probability` ⟺ `conditional-probability` prerequisites 包含 `random-event-probability` ✓
- `combination` → `binomial-distribution` ⟺ `binomial-distribution` prerequisites 包含 `combination` ✓

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
git add src/content/knowledge-points/frequency-probability.yml \
       src/content/knowledge-points/random-event-probability.yml \
       src/content/knowledge-points/event-independence.yml \
       src/content/knowledge-points/random-sampling.yml \
       src/content/knowledge-points/sample-estimate-population.yml \
       src/content/knowledge-points/combination.yml
git commit -m "content(kp): add cross-textbook knowledge point relations (required-2/selective-2 ↔ selective-3)"
```

---

### Task 15: 全量验证与质量报告

- [ ] **Step 1: 运行全部构建脚本**

```bash
cd ~/Projects/pep-math
npm run build:scripts
```

Expected: 所有脚本成功运行，包括 selective-3 内容

- [ ] **Step 2: 运行全部校验**

```bash
npm run validate
```

Expected: 无错误

- [ ] **Step 3: 运行全部测试**

```bash
npm test
```

Expected: 所有测试通过（包括新增的 selective-3-integrity.test.ts）

- [ ] **Step 4: 完整构建**

```bash
npm run build
```

Expected: Astro 构建成功，包含 selective-3 页面

- [ ] **Step 5: 生成质量报告**

```bash
npm run report
```

Expected: 输出包含全部五册教材的内容统计

- [ ] **Step 6: 本地预览验证**

```bash
npx astro preview
```

手动验证：
- `/pep-math/textbook/selective-3` — 选择性必修三教材浏览
- `/pep-math/textbook/selective-3/chapter/17/section/1` — 条件概率与全概率公式
- `/pep-math/textbook/selective-3/chapter/17/section/3` — 二项分布与超几何分布
- `/pep-math/textbook/selective-3/chapter/18/section/1` — 回归分析
- `/pep-math/textbook/selective-3/chapter/18/section/2` — 独立性检验
- `/pep-math/knowledge-graph` — 知识图谱支持 selective-3 筛选
- `/pep-math/knowledge/conditional-probability` — 条件概率知识点详情
- `/pep-math/knowledge/binomial-distribution` — 二项分布知识点详情
- `/pep-math/knowledge/regression-analysis` — 回归分析知识点详情

- [ ] **Step 7: 最终提交**

```bash
git add -A
git commit -m "chore: Plan 6 complete — selective-3 content and full five-textbook support"
```

---

## Summary

| Task | 内容 | 新增文件 | 关键交付物 |
|------|------|---------|-----------|
| **Task 1** | 概率知识点 YAML | 10 个 `.yml` | 10 个新知识点 |
| **Task 2** | 统计知识点 YAML | 5 个 `.yml` | 5 个新知识点 |
| **Task 3** | 第十七章 section-01 内容 | ~6 个 `.md` | 条件概率与全概率公式 |
| **Task 4** | 第十七章 section-02 内容 | ~5 个 `.md` | 离散型随机变量及其分布列 |
| **Task 5** | 第十七章 section-03 内容 | ~5 个 `.md` | 二项分布与超几何分布 |
| **Task 6** | 第十七章 section-04 内容 | ~5 个 `.md` | 离散型随机变量的均值与方差 |
| **Task 7** | 第十七章 section-05 内容 | ~4 个 `.md` | 正态分布 |
| **Task 8** | 第十八章 section-01 内容 | ~5 个 `.md` | 回归分析 |
| **Task 9** | 第十八章 section-02 内容 | ~5 个 `.md` | 独立性检验 |
| **Task 10-12** | 页面更新 | 修改 3 个文件 | 五教材切换、图谱筛选 |
| **Task 13** | 内容测试 | 1 个测试 | 完整性校验 |
| **Task 14** | 跨册关系 | 修改 ~6 个 YAML | 知识图谱双向关系 |
| **Task 15** | 全量验证 | — | 质量报告 |

### 预计新增文件数

- 知识点 YAML：15 个
- 内容 Markdown：~40 个（习题 ~16 + 例题 ~8 + 定义 ~8 + 其他定义 ~8）
- 测试文件：1 个
- 修改文件：~9 个（页面、组件、已有 YAML）
- **总计：~65 个文件**

### 预计完成后项目总统计

| 指标 | Plan 5 结束时 | Plan 6 结束时 |
|------|-------------|-------------|
| 知识点 | 79 | **94** |
| 习题 | ~142 | **~158** |
| 页面 | ~90 | **~97**（+7 节） |
| 教材 | 4 册 | **5 册（全系列完成）** |
| 测试 | ~81+ | **~84+** |

### Commit 策略

按章节逐步提交，每个 Task 一个 commit：

```
content(kp): 添加随机变量及其分布 10 个知识点 YAML
content(kp): 添加统计与统计案例 5 个知识点 YAML
content(selective-3/ch17-s1): 添加条件概率与全概率公式的定义、习题和例题
content(selective-3/ch17-s2): 添加离散型随机变量及其分布列的定义、习题和例题
content(selective-3/ch17-s3): 添加二项分布与超几何分布的定义、习题和例题
content(selective-3/ch17-s4): 添加离散型随机变量均值与方差的定义、习题和例题
content(selective-3/ch17-s5): 添加正态分布的定义、习题和例题
content(selective-3/ch18-s1): 添加回归分析的定义、习题和例题
content(selective-3/ch18-s2): 添加独立性检验的定义、习题和例题
feat(pages): add selective-3 chapter titles to textbook page
feat(pages): add selective-3 to knowledge graph textbook selector
feat(components): verify KnowledgeGraph supports selective-3 filtering
test(content): add selective-3 content integrity tests
content(kp): add cross-textbook knowledge point relations (required-2/selective-2 ↔ selective-3)
chore: Plan 6 complete — selective-3 content and full five-textbook support
```

### 验收标准

1. ✅ 15 个新知识点 YAML 文件，每个包含完整的 id/name/category/description/formulas/common_mistakes/applied_in
2. ✅ 所有知识点 `applied_in` 包含 `textbook: selective-3`
3. ✅ 7 个 section 目录，每个包含至少 2 道习题和 1 道例题
4. ✅ 所有习题 frontmatter 格式正确（textbook: selective-3, source: "自编"）
5. ✅ 所有引用的知识点 ID 存在于 knowledge-points/ 目录
6. ✅ 跨册知识点关系双向一致（required-2 ↔ selective-3, selective-2 ↔ selective-3）
7. ✅ 知识图谱支持 selective-3 筛选
8. ✅ 教材浏览页显示选择性必修三章节目录
9. ✅ 全部测试通过（包括新增的 selective-3-integrity.test.ts）
10. ✅ 构建脚本正常运行，质量报告包含五册统计
11. ✅ 全系列 5 册教材内容全部完成

### 关键跨册知识关联图

```
必修第二册                    选择性必修第三册
├── frequency-probability ───────→ conditional-probability
├── random-event-probability ────→ conditional-probability
├── event-independence ←→ probability-addition-multiplication (related)
├── random-sampling ←→ hypergeometric-distribution (related)
└── sample-estimate-population ──→ regression-analysis
                                   → correlation-analysis

选择性必修第二册               选择性必修第三册
└── combination ───────────────→ binomial-distribution
                               → hypergeometric-distribution

选择性必修第三册（内部 — 概率链）
├── random-event-probability → conditional-probability → total-probability
│   → discrete-random-variable → distribution-table → expected-value-variance
├── probability-addition-multiplication → bernoulli-trials → binomial-distribution
├── combination → binomial-distribution
├── combination → hypergeometric-distribution
└── expected-value-variance → normal-distribution

选择性必修第三册（内部 — 统计链）
├── sample-estimate-population → correlation-analysis → regression-analysis
├── sample-estimate-population → contingency-table → independence-test
└── regression-analysis + independence-test → statistical-case
```
