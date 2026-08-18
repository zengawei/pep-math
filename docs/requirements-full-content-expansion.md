# 需求文档：pep-math 全面内容扩充与重构

> 版本：v2.0  
> 日期：2026-08-18  
> 状态：草案（含 TDD 执行计划）  

---

## 1. 背景与动机

### 1.1 项目现状

pep-math 是一个覆盖人教版（PEP）2019 新课标高中数学全部 5 册教材的静态知识库网站，提供习题解答、知识点图谱、例题和定义。

**当前数据统计：**

| 教材 | 章节数 | 节数 | 习题 | 例题 | 定义 |
|------|--------|------|------|------|------|
| 必修第一册 (required-1) | 5 章 | 14 节 | 42 | 14 | 15 |
| 必修第二册 (required-2) | 5 章 | 14 节 | 38 | 14 | 13 |
| 选择性必修第一册 (selective-1) | 3 章 | 9 节 | 26 | 9 | 11 |
| 选择性必修第二册 (selective-2) | 3 章 | 9 节 | 25 | 9 | 10 |
| 选择性必修第三册 (selective-3) | 2 章 | 7 节 | 20 | 7 | 8 |
| **合计** | **18 章** | **53 节** | **151** | **53** | **57** |

### 1.2 核心问题

**每节仅 3 道习题 + 1 道例题，远远不足。** 对比真实教材：

- 人教版每节「练习」通常有 **8–15 道**习题（分 A/B 组，有时有 C 组）
- 每节「例题」通常有 **4–8 道**课堂讲解例题
- 每章末尾有「复习参考题」，含 **20–40 道**综合习题
- 部分章节还有「阅读材料」和「探究与发现」拓展内容

**差距估算：**

| 内容类型 | 当前数量 | 目标数量（估算） | 缺口倍数 |
|----------|----------|------------------|----------|
| 课后习题 | 151 | ~600–800 | 4–5× |
| 课堂例题 | 53 | ~250–400 | 5–8× |
| 章节复习题 | 0 | ~360–540 | 新增 |
| 定义/概念 | 57 | ~80–100 | 1.5× |

### 1.3 重构目标

1. **全面覆盖教材习题**：将每节习题从 3 道扩充到 8–15 道，涵盖教材中所有练习题
2. **全面覆盖教材例题**：将每节例题从 1 道扩充到 4–8 道，涵盖教材中所有课堂例题
3. **新增章节复习题**：为每章添加复习参考题（20–40 道/章）
4. **保持现有架构**：在不改变整体技术架构的前提下进行内容扩充
5. **内容质量**：所有新增题目需包含完整的分步解答、易错提醒、思路总结

---

## 2. 内容范围定义

### 2.1 需要收录的内容类型

按照人教版教材结构，需收录以下内容：

#### A. 课后练习（每节）
- **A 组**（基础巩固）：直接应用本节知识的基本题
- **B 组**（综合运用）：需要综合多个知识点的中等难度题
- **C 组**（拓展提高）：较高难度的挑战题（部分节有）

#### B. 课堂例题（每节）
- 教材中标注为「例 1」「例 2」... 的课堂讲解例题
- 包含完整的解题过程和思路分析

#### C. 章节复习参考题（每章末尾）
- 教材中每章最后的「复习参考题」
- 通常分为「复习题」和「参考题」两部分
- 综合性强，跨节知识点

#### D. 定义与概念（已有，少量补充）
- 教材中的核心定义、定理、性质
- 当前覆盖较完整，仅需少量补充

### 2.2 各册详细内容目标

#### 必修第一册（required-1）

| 章 | 节 | 节名 | 当前习题 | 目标习题 | 当前例题 | 目标例题 |
|----|-----|------|----------|----------|----------|----------|
| 1 | 1.1 | 集合的概念 | 3 | 10 | 1 | 5 |
| 1 | 1.2 | 集合间的基本关系 | 3 | 8 | 1 | 4 |
| 1 | 1.3 | 集合的基本运算 | 3 | 12 | 1 | 6 |
| 2 | 2.1 | 等式性质与不等式性质 | 3 | 10 | 1 | 5 |
| 2 | 2.2 | 基本不等式 | 3 | 10 | 1 | 5 |
| 2 | 2.3 | 二次函数与一元二次方程、不等式 | 3 | 12 | 1 | 6 |
| 3 | 3.1 | 函数的概念及其表示 | 3 | 10 | 1 | 5 |
| 3 | 3.2 | 函数的基本性质 | 3 | 12 | 1 | 6 |
| 3 | 3.3 | 幂函数 | 3 | 8 | 1 | 4 |
| 3 | 3.4 | 函数的应用 | 3 | 10 | 1 | 5 |
| 4 | 4.1 | 指数 | 3 | 10 | 1 | 5 |
| 4 | 4.2 | 指数函数 | 3 | 12 | 1 | 6 |
| 4 | 4.3 | 对数 | 3 | 10 | 1 | 5 |
| 4 | 4.4 | 对数函数 | 3 | 12 | 1 | 6 |
| 5 | 5.1 | 任意角和弧度制 | 3 | 10 | 1 | 5 |
| 5 | 5.2 | 三角函数的概念 | 3 | 10 | 1 | 5 |
| 5 | 5.3 | 诱导公式 | 3 | 10 | 1 | 5 |
| 5 | 5.4 | 三角函数的图象与性质 | 3 | 14 | 1 | 7 |
| 5 | 5.5 | 函数 y=Asin(ωx+φ) | 3 | 12 | 1 | 6 |
| 5 | 5.6 | 三角函数的应用 | 3 | 10 | 1 | 5 |
| — | — | **章复习题** (5章) | 0 | **150** | — | — |

> 必修第一册目标：~220 道习题 + ~90 道例题

#### 必修第二册（required-2）

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习题 |
|----|------|----------|----------|----------|----------|----------|
| 6 (平面向量) | 4 节 | 12 | ~45 | 4 | ~20 | ~30 |
| 7 (复数) | 2 节 | 6 | ~20 | 2 | ~10 | ~20 |
| 8 (立体几何) | 4 节 | 12 | ~50 | 4 | ~24 | ~35 |
| 9 (统计) | 2 节 | 4 | ~25 | 2 | ~12 | ~25 |
| 10 (概率) | 2 节 | 4 | ~20 | 2 | ~10 | ~20 |
| **合计** | 14 节 | 38 | **~160** | 14 | **~76** | **~130** |

#### 选择性必修第一册（selective-1）

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习题 |
|----|------|----------|----------|----------|----------|----------|
| 11 (空间向量与立体几何) | 3 节 | 9 | ~36 | 3 | ~18 | ~30 |
| 12 (直线与圆的方程) | 3 节 | 8 | ~36 | 3 | ~18 | ~30 |
| 13 (圆锥曲线) | 3 节 | 9 | ~40 | 3 | ~20 | ~35 |
| **合计** | 9 节 | 26 | **~112** | 9 | **~56** | **~95** |

#### 选择性必修第二册（selective-2）

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习题 |
|----|------|----------|----------|----------|----------|----------|
| 14 (数列) | 3 节 | 8 | ~30 | 3 | ~15 | ~30 |
| 15 (导数) | 3 节 | 9 | ~36 | 3 | ~18 | ~35 |
| 16 (计数原理) | 3 节 | 8 | ~30 | 3 | ~15 | ~25 |
| **合计** | 9 节 | 25 | **~96** | 9 | **~48** | **~90** |

#### 选择性必修第三册（selective-3）

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习题 |
|----|------|----------|----------|----------|----------|----------|
| 17 (概率) | 5 节 | 14 | ~55 | 5 | ~25 | ~35 |
| 18 (统计) | 2 节 | 6 | ~25 | 2 | ~12 | ~25 |
| **合计** | 7 节 | 20 | **~80** | 7 | **~37** | **~60** |

### 2.3 总量目标汇总

| 内容类型 | 当前 | 目标 | 新增 |
|----------|------|------|------|
| 课后习题 | 151 | ~668 | ~517 |
| 课堂例题 | 53 | ~307 | ~254 |
| 章节复习题 | 0 | ~505 | ~505 |
| 定义/概念 | 57 | ~85 | ~28 |
| **总计** | **261** | **~1,565** | **~1,304** |

---

## 3. 内容模型变更

### 3.1 现有 Schema 分析

当前 `exerciseSchema`：
```typescript
{
  type: 'exercise',
  textbook: enum,
  chapter: number,
  section: number,
  number: number,        // 节内序号
  difficulty: 'basic' | 'medium' | 'hard',
  is_exam_question: boolean,
  knowledge_points: string[],
  source: '自编',         // ← 需要变更
  references: string,
}
```

### 3.2 Schema 变更方案

#### 3.2.1 习题 Schema 变更

```typescript
{
  type: 'exercise',
  textbook: enum,
  chapter: number,
  section: number,        // 0 表示章复习题
  number: number,
  difficulty: 'basic' | 'medium' | 'hard',
  category: 'practice' | 'review' | 'reference',  // 新增：练习/复习/参考
  group?: 'A' | 'B' | 'C',                         // 新增：分组
  is_exam_question: boolean,
  knowledge_points: string[],
  source: '人教A版2019',   // 变更：标注教材来源
  references: string,      // 具体页码/题号
}
```

**关键变更：**
- `source`: 从 `'自编'` 改为 `'人教A版2019'`
- 新增 `category`: 区分「课后练习」「复习题」「参考题」
- 新增 `group`: 标记 A/B/C 组别
- `section: 0` 约定为章复习题（原来 section 从 1 开始）

#### 3.2.2 例题 Schema 变更

```typescript
{
  type: 'example',
  textbook: enum,
  chapter: number,
  section: number,
  number: number,
  knowledge_points: string[],
  source: '人教A版2019',   // 新增
  references: string,      // 新增
}
```

#### 3.2.3 定义 Schema 变更

无重大变更，仅补充 `source` 和 `references` 字段。

### 3.3 文件命名约定变更

当前命名：`exercise-{N}.md`、`example-{N}.md`、`definition-{N}.md`

**新增内容类型需要新的文件组织方式：**

```
src/content/textbooks/
├── required-1/
│   ├── chapter-01/
│   │   ├── section-01/
│   │   │   ├── exercise-01.md      ← 课后练习（原 exercise-{N}.md，统一两位数）
│   │   │   ├── exercise-02.md
│   │   │   ├── ...
│   │   │   ├── exercise-10.md      ← 扩充后的练习
│   │   │   ├── example-01.md       ← 课堂例题
│   │   │   ├── example-02.md
│   │   │   ├── ...
│   │   │   ├── example-05.md       ← 扩充后的例题
│   │   │   ├── definition-01.md
│   │   │   └── ...
│   │   ├── review/                  ← 新增：章复习题目录
│   │   │   ├── review-exercise-01.md
│   │   │   ├── review-exercise-02.md
│   │   │   └── ...
│   │   │   └── review-exercise-30.md
│   │   └── README.md               ← 新增：章节概述（可选）
```

**命名规则变更：**
- 习题/例题编号统一使用两位数：`exercise-01.md`（原 `exercise-1.md`）
- 章复习题放在 `review/` 子目录下，使用 `review-exercise-{NN}.md` 命名
- 保持向后兼容：旧文件可通过脚本批量重命名

---

## 4. 技术架构变更

### 4.1 构建脚本变更

#### 4.1.1 `build-section-data.ts`
- 支持读取 `review/` 子目录中的章复习题
- 在 SectionData 中新增 `review_exercises` 字段
- 支持 `group` 字段（A/B/C 分组）
- 支持 `category` 字段

#### 4.1.2 `build-exercise-data.ts`
- 支持解析 `review/` 目录下的习题
- ID 生成规则：章复习题使用 `{textbook}-ch{N}-review-ex{M}` 格式
- 解析新的 `source` 和 `references` 字段

#### 4.1.3 `build-example-data.ts`
- 支持新增的 `source` 和 `references` 字段
- 例题数量大幅增加后需确认性能

#### 4.1.4 `build-exercise-index.ts`
- 索引需包含章复习题
- 支持按 `category` 和 `group` 过滤

#### 4.1.5 新增：`build-review-data.ts`
- 专门处理章复习题的构建
- 生成 `{textbook}-ch{N}-review.json` 数据文件
- 包含该章所有复习题的元数据和详细内容

### 4.2 前端页面变更

#### 4.2.1 节页面 (`[section].astro`)
- 习题列表需支持分组显示（A 组 / B 组 / C 组）
- 添加「章节复习题」入口链接
- 习题数量增多后考虑分页或折叠显示
- 例题区域需支持更多例题的展示

#### 4.2.2 章页面（新增或增强）
- 显示章节概述
- 列出该章所有节
- 提供「章节复习题」入口
- 显示该章涉及的知识点图谱子图

#### 4.2.3 搜索与过滤
- 支持按难度 + 分组 + 类型（练习/复习/参考）过滤
- 搜索结果需显示题目来源和所属分组

#### 4.2.4 习题详情展示
- 大量习题需要更好的列表 UI
- 考虑添加「只显示题目」/「显示解答」切换
- 支持按知识点筛选相关习题

### 4.3 数据层变更

#### 4.3.1 元数据 JSON（轻量）
```json
{
  "textbook": "required-1",
  "chapter": 1,
  "section": 1,
  "exercises": [
    {
      "id": "required-1-ch1-s1-ex01",
      "number": 1,
      "difficulty": "basic",
      "category": "practice",
      "group": "A",
      "knowledge_points": ["set-concept"]
    }
  ],
  "review_exercises": [
    {
      "id": "required-1-ch1-review-ex01",
      "number": 1,
      "difficulty": "medium",
      "category": "review",
      "knowledge_points": ["set-concept", "set-operations"]
    }
  ]
}
```

#### 4.3.2 详细内容 JSON（完整解答）
- 结构不变，仅数量增加
- 预计从 151 个习题 JSON 增加到 ~668 个
- 例题 JSON 从 53 增加到 ~307
- 新增 ~505 个复习题 JSON

### 4.4 测试变更

#### 4.4.1 内容完整性测试
- 更新各册习题/例题预期数量
- 添加章复习题的存在性验证
- 验证所有 `source` 字段已更新为 `'人教A版2019'`

#### 4.4.2 构建脚本测试
- 测试 `review/` 目录的解析
- 测试 `group` 和 `category` 字段的处理
- 测试 ID 生成规则的正确性

#### 4.4.3 性能测试
- 构建时间：内容增加 5× 后的构建时间
- 页面加载：习题列表大量增加后的渲染性能
- 搜索索引：Pagefind 索引大小和速度

---

## 5. 内容编写规范

### 5.1 习题编写模板

```markdown
---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P5 练习A 第5题"
---

**题目：** [题目内容，使用 LaTeX 数学公式]

---

**解答：**

**第1步：** [步骤标题]
> 📌 运用知识点：[知识点名称]

[详细解题过程]

**第2步：** [步骤标题]
> 📌 运用知识点：[知识点名称]

[详细解题过程]

**⚠️ 易错提醒：** [常见错误和注意事项]

**💡 解题思路总结：** [方法论总结]
```

### 5.2 例题编写模板

```markdown
---
type: example
textbook: required-1
chapter: 1
section: 1
number: 3
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P3 例3"
---

**例题：** [题目内容]

---

**解答：**

**第1步：** [步骤标题]
> 📌 运用知识点：[知识点名称]

[详细解题过程，模拟课堂讲解风格]

**第2步：** [步骤标题]
> 📌 运用知识点：[知识点名称]

[详细解题过程]

**💡 解题思路总结：** [思路分析和方法归纳]
```

### 5.3 章复习题编写模板

```markdown
---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 1
difficulty: medium
category: review
group: A
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P20 复习参考题 第1题"
---

**题目：** [题目内容]

---

**解答：**

[同上格式]
```

### 5.4 内容质量标准

每道题目必须包含：
1. ✅ 完整的题目陈述（含 LaTeX 公式）
2. ✅ 分步解答（每步标注运用的知识点）
3. ✅ 易错提醒（至少 1 条）
4. ✅ 解题思路总结
5. ✅ 正确的知识点关联（至少 1 个 knowledge_point）
6. ✅ 准确的教材来源引用

---

## 6. 开发方法论：TDD 全流程

### 6.1 TDD 核心原则

本项目严格遵循 **测试驱动开发（TDD）** 的 Red → Green → Refactor 循环。每一轮改动都必须先写测试，再写实现。

```
┌─────────────────────────────────────────────────┐
│  1. RED    — 写一个失败的测试，描述期望行为       │
│  2. GREEN  — 写最少的代码让测试通过              │
│  3. REFACTOR — 在测试保护下重构，保持绿色         │
└─────────────────────────────────────────────────┘
```

**铁律：没有失败的测试，就不写实现代码。**

### 6.2 TDD 在本项目中的具体应用

本项目包含两类 TDD 循环：

#### A. 代码层 TDD（构建脚本、前端组件）

适用于：schema 变更、构建脚本更新、页面模板修改

```
Step 1: 写测试（tests/scripts/ 或 tests/components/）
  → 描述新行为（如：build-section-data 应解析 review/ 目录）
  → 运行 npm test → 测试失败（RED）

Step 2: 写实现（scripts/ 或 src/）
  → 最小改动让测试通过
  → 运行 npm test → 测试通过（GREEN）

Step 3: 重构
  → 消除重复，优化结构
  → 运行 npm test → 仍然通过（REFACTOR）

Step 4: 提交
  → git commit -m "test: add review directory parsing tests"
  → git commit -m "feat: support review directory in build-section-data"
```

#### B. 内容层 TDD（习题、例题、定义 Markdown 文件）

适用于：每册教材的内容扩充

```
Step 1: 写内容完整性测试（tests/content/）
  → 断言该册应有 N 道习题、M 道例题
  → 断言所有 source 字段为 '人教A版2019'
  → 断言所有习题有 category 和 group 字段
  → 运行 npm test → 测试失败（RED）

Step 2: 创建内容 Markdown 文件
  → 按节批量创建 exercise-{NN}.md、example-{NN}.md
  → 运行 npm test → 测试通过（GREEN）

Step 3: 运行验证脚本
  → npm run validate → 内容校验通过
  → npm run build:scripts → 构建 JSON 成功
  → npm run build → 网站构建成功（REFACTOR/验证）

Step 4: 提交
  → git commit -m "content(required-1): 扩充 ch1-s1 习题至 10 道"
```

### 6.3 测试分层策略

```
┌─────────────────────────────────────────────┐
│            E2E / 集成测试                    │
│  npm run build 成功                         │
│  npm run validate 成功                      │
│  GitHub Pages 部署成功                       │
├─────────────────────────────────────────────┤
│            内容完整性测试                     │
│  每册一个测试文件 (tests/content/*-integrity) │
│  验证文件数量、字段完整性、KP 关联            │
├─────────────────────────────────────────────┤
│            构建脚本单元测试                   │
│  每个脚本一个测试文件 (tests/scripts/*)       │
│  验证解析逻辑、ID 生成、JSON 输出            │
├─────────────────────────────────────────────┤
│            Schema 测试                       │
│  tests/content/exercise-schema.test.ts       │
│  验证 Zod schema 校验规则                    │
├─────────────────────────────────────────────┤
│            组件测试                          │
│  tests/components/*.test.tsx                 │
│  验证 UI 渲染和交互                          │
└─────────────────────────────────────────────┘
```

---

## 7. 分阶段执行计划

### 7.1 总览

鉴于工作量巨大（新增 ~1,300 个内容文件），分为 **8 个 Plan** 执行。每个 Plan 内部严格遵循 TDD 循环。

| Plan | 阶段 | 内容 | 预估新增文件 |
|------|------|------|-------------|
| Plan 1 | 基础设施 | Schema + 构建脚本 + 测试 + 前端 + 现有文件迁移 | 0（重构） |
| Plan 2 | 必修一（上） | required-1 ch1-ch3 习题/例题扩充 + 章复习题 | ~120 |
| Plan 3 | 必修一（下） | required-1 ch4-ch5 习题/例题扩充 + 章复习题 | ~130 |
| Plan 4 | 必修二 | required-2 全册扩充 | ~180 |
| Plan 5 | 选必一 | selective-1 全册扩充 | ~140 |
| Plan 6 | 选必二 | selective-2 全册扩充 | ~130 |
| Plan 7 | 选必三 | selective-3 全册扩充 | ~100 |
| Plan 8 | 收尾 | 集成测试 + 性能优化 + 全站验证 | 0 |

### 7.2 Plan 1：基础设施升级（TDD 详解）

这是最关键的基础阶段，所有后续内容扩充依赖于此。

#### Step 1.1：Schema 变更

**RED — 先写测试：**

```typescript
// tests/content/exercise-schema.test.ts — 新增测试用例
describe('exercise schema v2', () => {
  it('应接受 category 字段 (practice/review/reference)', () => { ... });
  it('应接受 group 字段 (A/B/C, 可选)', () => { ... });
  it('source 应为 "人教A版2019" 而非 "自编"', () => { ... });
  it('section=0 应被接受（用于章复习题）', () => { ... });
  it('缺少 category 字段应校验失败', () => { ... });
});
```

→ 运行 `npm test` → 新增测试全部失败（RED）

**GREEN — 修改 Schema：**

```typescript
// src/content/config.ts — 修改 exerciseSchema
{
  category: z.enum(['practice', 'review', 'reference']).default('practice'),
  group: z.enum(['A', 'B', 'C']).optional(),
  source: z.literal('人教A版2019'),  // 从 '自编' 改为 '人教A版2019'
  // section: z.number().int().min(0),  // min 从 1 改为 0
}
```

→ 运行 `npm test` → 测试通过（GREEN）

**REFACTOR — 提交：**

```bash
git commit -m "test: add v2 schema validation tests"
git commit -m "feat: update exercise schema with category, group, source fields"
```

#### Step 1.2：构建脚本更新（build-section-data.ts）

**RED：**

```typescript
// tests/scripts/build-section-data.test.ts — 新增测试
describe('build-section-data v2', () => {
  it('应解析 review/ 子目录中的章复习题', () => { ... });
  it('应在 SectionData 中输出 review_exercises 数组', () => { ... });
  it('应为习题包含 category 和 group 字段', () => { ... });
  it('章复习题 ID 格式应为 {textbook}-ch{N}-review-ex{M}', () => { ... });
});
```

→ `npm test` → 失败（RED）

**GREEN：** 修改 `build-section-data.ts`，添加 review 目录扫描逻辑

→ `npm test` → 通过（GREEN）

**REFACTOR → 提交**

#### Step 1.3：构建脚本更新（其余脚本）

对以下每个脚本重复同样的 RED → GREEN → REFACTOR 循环：

| 脚本 | 测试文件 | 关键测试点 |
|------|----------|-----------|
| `build-exercise-data.ts` | `build-exercise-data.test.ts` | 解析 review/ 目录、新字段传递 |
| `build-example-data.ts` | `build-example-data.test.ts` | source/references 字段 |
| `build-exercise-index.ts` | `build-exercise-index.test.ts` | category/group 索引、复习题纳入 |
| `build-related-exercises.ts` | `build-related-exercises.test.ts` | 跨 category 关联 |
| `validate-content.ts` | 集成测试 | 验证新字段必填、source 值 |

#### Step 1.4：前端页面更新

**RED：**

```typescript
// tests/components/ExerciseCard.test.tsx — 新增测试
describe('ExerciseCard v2', () => {
  it('应显示 A/B/C 组别标签', () => { ... });
  it('应区分 practice/review 类型的图标或颜色', () => { ... });
});
```

→ `npm test` → 失败（RED）

**GREEN：** 更新组件代码

→ `npm test` → 通过（GREEN）

**REFACTOR → 提交**

#### Step 1.5：现有文件迁移

**RED：**

```typescript
// tests/content/migration-integrity.test.ts — 新增测试
describe('migration integrity', () => {
  it('所有现有习题的 source 应为 "人教A版2019"', () => { ... });
  it('所有现有习题应有 category 字段（默认 practice）', () => { ... });
  it('所有习题编号应为两位数格式 (exercise-01.md)', () => { ... });
});
```

→ `npm test` → 失败（RED，因为现有文件 source 是 "自编"）

**GREEN：** 批量迁移脚本或手动修改所有现有文件

→ `npm test` → 通过（GREEN）

**REFACTOR → 提交**

#### Step 1.6：AGENTS.md 更新

更新项目规范以反映新标准：
- `source` 从 `"自编"` 改为 `"人教A版2019"`
- 新增 `category` 和 `group` 字段说明
- 新增 `review/` 目录约定

#### Plan 1 完成标准（Definition of Done）

- [ ] `npm test` 全部通过（包含所有新增测试）
- [ ] `npm run validate` 通过
- [ ] `npm run build` 成功
- [ ] 现有 151 道习题 + 53 道例题迁移完成
- [ ] 本地预览：节页面正常显示，分组标签可见
- [ ] Git 提交历史清晰，每个 RED/GREEN 步骤独立提交

---

### 7.3 Plan 2-7：内容扩充（TDD 详解）

Plan 2-7 遵循相同的 TDD 模式，以 Plan 2（必修第一册 ch1-ch3）为例：

#### Step 2.1：内容完整性测试（RED）

```typescript
// tests/content/required-1-integrity.test.ts — 新增/更新
describe('required-1 content expansion (ch1-ch3)', () => {
  it('ch1-s1 应有 ≥ 8 道习题', () => { ... });
  it('ch1-s1 应有 ≥ 4 道例题', () => { ... });
  it('ch1-s3 应有 ≥ 10 道习题（含 A/B 组）', () => { ... });
  it('ch1 章复习题应有 ≥ 25 道题', () => { ... });
  it('所有习题 source 为 "人教A版2019"', () => { ... });
  it('所有习题有 category 和 group 字段', () => { ... });
  it('所有习题的 knowledge_points 存在于知识点库中', () => { ... });
  it('所有习题有完整的解答（至少 1 步）', () => { ... });
});
```

→ `npm test` → 失败（RED）—— 当前 ch1-s1 只有 3 道习题、1 道例题

#### Step 2.2：创建内容文件（GREEN）

按节批量创建 Markdown 文件。每节的执行顺序：

```
1. 确认该节涉及的知识点（读取 knowledge-points YAML）
2. 创建 exercise-04.md 到 exercise-{N}.md（扩充习题）
3. 创建 example-02.md 到 example-{M}.md（扩充例题）
4. 创建 review/ 目录及 review-exercise-01.md 到 review-exercise-{K}.md（章复习题）
5. 运行 npm test → 通过（GREEN）
```

**每道题目必须遵循 §5.4 内容质量标准。**

#### Step 2.3：构建与验证（REFACTOR）

```bash
npm run build:scripts    # 生成 JSON 数据
npm run validate         # 内容校验
npm run build            # 构建网站
npm test                 # 全部测试通过
```

→ 本地预览确认页面正常显示

#### Step 2.4：提交

```bash
git add src/content/textbooks/required-1/chapter-01/
git commit -m "content(required-1): 扩充 ch1 习题至完整覆盖"
git commit -m "content(required-1): 添加 ch1 章复习题 30 道"
```

#### 内容扩充的并行化策略

每个 Plan 内，各节互相独立，可通过 subagent 并行：

```
主线程（协调者）
├── Subagent A: ch1-s1 习题扩充 (exercise-04 ~ exercise-10)
├── Subagent B: ch1-s1 例题扩充 (example-02 ~ example-05)
├── Subagent C: ch1-s2 习题扩充
├── Subagent D: ch1-s2 例题扩充
├── ...
└── 主线程: 章复习题 + 测试更新 + 集成验证
```

**并行规则：**
- 每个 subagent 只操作自己负责的 Markdown 文件
- subagent 不修改测试文件、构建脚本、Schema
- 主线程在所有 subagent 完成后统一运行测试和构建

#### Plan 2-7 各册详细任务清单

**Plan 2：必修第一册 ch1-ch3（集合、不等式、函数）**

| 节 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习 |
|----|----------|----------|----------|----------|--------|
| ch1-s1 集合的概念 | 3 | 10 | 1 | 5 | — |
| ch1-s2 集合间关系 | 3 | 8 | 1 | 4 | — |
| ch1-s3 集合运算 | 3 | 12 | 1 | 6 | — |
| ch1 复习题 | 0 | — | — | — | 30 |
| ch2-s1 等式与不等式 | 3 | 10 | 1 | 5 | — |
| ch2-s2 基本不等式 | 3 | 10 | 1 | 5 | — |
| ch2-s3 二次函数与不等式 | 3 | 12 | 1 | 6 | — |
| ch2 复习题 | 0 | — | — | — | 30 |
| ch3-s1 函数概念 | 3 | 10 | 1 | 5 | — |
| ch3-s2 函数性质 | 3 | 12 | 1 | 6 | — |
| ch3-s3 幂函数 | 3 | 8 | 1 | 4 | — |
| ch3-s4 函数应用 | 3 | 10 | 1 | 5 | — |
| ch3 复习题 | 0 | — | — | — | 30 |
| **小计** | **33** | **~122** | **11** | **~62** | **90** |

**Plan 3：必修第一册 ch4-ch5（指数对数、三角函数）**

| 节 | 当前 | 目标 | 例题当前 | 例题目标 | 章复习 |
|----|------|------|----------|----------|--------|
| ch4-s1 指数 | 3 | 10 | 1 | 5 | — |
| ch4-s2 指数函数 | 3 | 12 | 1 | 6 | — |
| ch4-s3 对数 | 3 | 10 | 1 | 5 | — |
| ch4-s4 对数函数 | 3 | 12 | 1 | 6 | — |
| ch4 复习题 | 0 | — | — | — | 30 |
| ch5-s1 任意角和弧度制 | 3 | 10 | 1 | 5 | — |
| ch5-s2 三角函数概念 | 3 | 10 | 1 | 5 | — |
| ch5-s3 诱导公式 | 3 | 10 | 1 | 5 | — |
| ch5-s4 图象与性质 | 3 | 14 | 1 | 7 | — |
| ch5-s5 y=Asin(ωx+φ) | 3 | 12 | 1 | 6 | — |
| ch5-s6 三角函数应用 | 3 | 10 | 1 | 5 | — |
| ch5 复习题 | 0 | — | — | — | 35 |
| **小计** | **30** | **~120** | **10** | **~60** | **65** |

**Plan 4：必修第二册（全册）**

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习 |
|----|------|----------|----------|----------|----------|--------|
| ch6 平面向量 | 4 | 12 | ~45 | 4 | ~20 | 30 |
| ch7 复数 | 2 | 6 | ~20 | 2 | ~10 | 20 |
| ch8 立体几何 | 4 | 12 | ~50 | 4 | ~24 | 35 |
| ch9 统计 | 2 | 4 | ~25 | 2 | ~12 | 25 |
| ch10 概率 | 2 | 4 | ~20 | 2 | ~10 | 20 |
| **合计** | 14 | 38 | **~160** | 14 | **~76** | **130** |

**Plan 5：选择性必修第一册（全册）**

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习 |
|----|------|----------|----------|----------|----------|--------|
| ch11 空间向量 | 3 | 9 | ~36 | 3 | ~18 | 30 |
| ch12 直线与圆 | 3 | 8 | ~36 | 3 | ~18 | 30 |
| ch13 圆锥曲线 | 3 | 9 | ~40 | 3 | ~20 | 35 |
| **合计** | 9 | 26 | **~112** | 9 | **~56** | **95** |

**Plan 6：选择性必修第二册（全册）**

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习 |
|----|------|----------|----------|----------|----------|--------|
| ch14 数列 | 3 | 8 | ~30 | 3 | ~15 | 30 |
| ch15 导数 | 3 | 9 | ~36 | 3 | ~18 | 35 |
| ch16 计数原理 | 3 | 8 | ~30 | 3 | ~15 | 25 |
| **合计** | 9 | 25 | **~96** | 9 | **~48** | **90** |

**Plan 7：选择性必修第三册（全册）**

| 章 | 节数 | 当前习题 | 目标习题 | 当前例题 | 目标例题 | 章复习 |
|----|------|----------|----------|----------|----------|--------|
| ch17 概率 | 5 | 14 | ~55 | 5 | ~25 | 35 |
| ch18 统计 | 2 | 6 | ~25 | 2 | ~12 | 25 |
| **合计** | 7 | 20 | **~80** | 7 | **~37** | **60** |

---

### 7.4 Plan 8：收尾与全站验证

#### Step 8.1：全站集成测试（RED → GREEN）

```typescript
// tests/content/full-site-integrity.test.ts — 新增
describe('full site integrity', () => {
  it('总习题数应 ≥ 600', () => { ... });
  it('总例题数应 ≥ 250', () => { ... });
  it('总复习题数应 ≥ 400', () => { ... });
  it('每节习题数 ≥ 8', () => { ... });
  it('每节例题数 ≥ 4', () => { ... });
  it('每章复习题数 ≥ 20', () => { ... });
  it('所有习题 source 为 "人教A版2019"', () => { ... });
  it('所有知识点至少有 1 道关联习题', () => { ... });
  it('无孤立知识点', () => { ... });
});
```

#### Step 8.2：性能验证

```bash
# 构建时间
time npm run build           # 目标 < 5 分钟

# 数据文件检查
du -sh public/data/          # 检查总大小
ls public/data/exercises/ | wc -l   # 习题 JSON 数量
ls public/data/examples/ | wc -l    # 例题 JSON 数量

# Pagefind 索引
ls -lh public/pagefind/      # 索引大小
```

#### Step 8.3：清理与优化

- 删除未使用的文件（如 `src/scripts/exercise-render.ts`）
- 更新 README.md 反映新的内容规模
- 更新 `docs/improvement-suggestions.md` 标记已完成项
- 生成最终质量报告 `npm run report`

#### Step 8.4：最终提交与部署

```bash
npm test                     # 全部通过
npm run validate             # 内容校验通过
npm run build                # 构建成功
git push                     # 推送到 GitHub
# GitHub Actions 自动部署
```

---

## 8. 每个 Plan 的 TDD 检查清单

每个 Plan 执行完毕前，必须逐项确认：

### 代码类检查（Plan 1 适用）
- [ ] 新增测试覆盖所有新字段（category, group, source）
- [ ] 构建脚本测试包含 review/ 目录场景
- [ ] 前端组件测试覆盖分组标签显示
- [ ] Schema 测试覆盖边界值（section=0, 空 group 等）
- [ ] 所有测试 `npm test` 通过
- [ ] 无 lint 错误

### 内容类检查（Plan 2-7 适用）
- [ ] 内容完整性测试已更新（预期数量匹配）
- [ ] 所有新习题有完整 frontmatter（含 category, group, source）
- [ ] 所有新习题有分步解答
- [ ] 所有新习题有易错提醒和思路总结
- [ ] 所有 knowledge_points 引用存在于知识点库
- [ ] `npm test` 通过
- [ ] `npm run validate` 通过
- [ ] `npm run build` 成功
- [ ] 本地预览正常

### 通用检查（所有 Plan）
- [ ] Git 提交信息符合 Conventional Commits
- [ ] 每个 RED/GREEN 循环独立提交
- [ ] 已推送到 GitHub
- [ ] CI 构建通过（GitHub Actions）

---

## 9. 风险评估与应对

### 9.1 技术风险

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 构建时间大幅增加 | CI/CD 超时 | 优化构建脚本，考虑增量构建 |
| 页面加载变慢 | 用户体验下降 | 分页/虚拟滚动，按需加载 JSON |
| Pagefind 索引过大 | 搜索变慢 | 测试索引大小，必要时调整配置 |
| 内存溢出 (CI) | 构建失败 | 调整 NODE_OPTIONS max-old-space-size |
| Git 仓库体积增大 | clone/push 变慢 | 考虑 Git LFS 或定期清理 history |

### 9.2 内容风险

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 题目与教材原文高度相似 | 版权顾虑（用户声明不涉及商业化） | 标注来源，仅作学习参考 |
| 知识点关联遗漏 | 知识图谱不完整 | 每道题验证 knowledge_points |
| 难度标注不准确 | 用户体验差 | 参考教材分组（A=基础, B=综合, C=拓展） |
| 公式格式错误 | 渲染异常 | 构建时验证 LaTeX 语法 |

### 9.3 工作量风险

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 总工作量超预期 | 项目周期过长 | 严格按阶段执行，每阶段可独立交付 |
| 内容质量不一致 | 用户体验差 | 统一模板 + 验证脚本 |
| 中途需求变更 | 返工 | 先完成基础设施，再批量填充内容 |

---

## 10. 验收标准

### 10.1 功能验收
- [ ] 所有 5 册教材的每节习题数量 ≥ 8 道
- [ ] 所有 5 册教材的每节例题数量 ≥ 4 道
- [ ] 所有 18 章均有章复习题（每章 ≥ 20 道）
- [ ] 习题可按 A/B/C 组筛选
- [ ] 章复习题可正常访问和展开
- [ ] 所有题目点击可展开分步解答
- [ ] 搜索功能覆盖所有新增内容
- [ ] 知识点图谱正确关联所有新题目

### 10.2 技术验收
- [ ] `npm run build` 无错误
- [ ] `npm test` 全部通过
- [ ] 构建时间 < 5 分钟（CI 环境）
- [ ] 页面首屏加载 < 2 秒
- [ ] GitHub Pages 部署成功

### 10.3 内容验收
- [ ] 每道题有完整的分步解答
- [ ] 每道题有关键点标注和易错提醒
- [ ] `source` 字段统一为 `'人教A版2019'`
- [ ] `references` 字段标注具体教材页码和题号
- [ ] 知识点关联无遗漏（每道题至少 1 个 KP）

---

## 11. 附录

### 11.1 现有项目文件结构

```
pep-math/
├── src/
│   ├── content/
│   │   ├── textbooks/          # 教材内容 Markdown
│   │   │   ├── required-1/     # 必修第一册
│   │   │   ├── required-2/     # 必修第二册
│   │   │   ├── selective-1/    # 选择性必修第一册
│   │   │   ├── selective-2/    # 选择性必修第二册
│   │   │   └── selective-3/    # 选择性必修第三册
│   │   └── knowledge-points/   # 知识点 YAML
│   ├── pages/                  # Astro 页面
│   ├── components/             # React 组件
│   └── layouts/                # 布局模板
├── scripts/                    # 构建脚本 (TypeScript)
├── public/data/                # 构建产物 JSON
├── tests/                      # Vitest 测试
└── docs/                       # 文档
```

### 11.2 构建脚本清单

| 脚本 | 功能 | 需变更 |
|------|------|--------|
| `build-section-data.ts` | 节数据 → JSON | ✅ 支持 review/group |
| `build-exercise-data.ts` | 习题详情 → JSON | ✅ 支持 review 目录 |
| `build-example-data.ts` | 例题详情 → JSON | ✅ 支持新字段 |
| `build-exercise-index.ts` | 习题索引 | ✅ 支持 category/group |
| `build-knowledge-graph.ts` | 知识图谱 → JSON | ⬜ 无需变更 |
| `build-related-exercises.ts` | 关联习题 | ✅ 支持新分类 |
| `validate-content.ts` | 内容验证 | ✅ 验证新字段 |
| `validate-knowledge-graph.ts` | 图谱验证 | ⬜ 无需变更 |
| `generate-quality-report.ts` | 质量报告 | ✅ 统计新分类 |

### 11.3 术语表

| 术语 | 含义 |
|------|------|
| 练习 (practice) | 每节末尾的课后练习题 |
| 复习题 (review) | 每章末尾的复习参考题 |
| 参考题 (reference) | 章末复习题中的提高部分 |
| A 组 | 基础巩固题 |
| B 组 | 综合运用题 |
| C 组 | 拓展提高题 |
| 例题 (example) | 教材课堂讲解中的示例题 |
