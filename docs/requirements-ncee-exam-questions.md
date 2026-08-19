# 高考数学真题需求文档

> 分支：`NCEE_ADDED`（基于 `TextbookOnly_V1` tag）

## 1. 项目背景

pep-math 当前已包含人教版 A 版 2019 全套 5 本教材（必修一二三 + 选择性必修一二三）的课后习题、例题，以及 94 个知识点的详细页面。现需添加高考数学真题，建立真题与教材章节、知识点的双向关联。

## 2. 数据范围

### 2.1 时间跨度

**2016 年 — 2025 年**，共 10 年。

### 2.2 试卷类型

#### 全国卷（统一命题）

| 时期 | 试卷名称 | 说明 |
|------|---------|------|
| 2016-2020 | 全国卷 I（课标I） | 理科 + 文科分开 |
| 2016-2020 | 全国卷 II（课标II） | 理科 + 文科分开 |
| 2016-2020 | 全国卷 III（课标III） | 理科 + 文科分开 |
| 2021-2025 | 新高考 I 卷 | 不分文理 |
| 2021-2025 | 新高考 II 卷 | 不分文理 |
| 2021-2025 | 全国甲卷 | 文理分科，部分省份使用 |
| 2021-2025 | 全国乙卷 | 文理分科，部分省份使用 |

#### 省级自主命题

| 省份 | 活跃年份（在 2016-2025 范围内） | 说明 |
|------|------|------|
| 北京 | 2016-2025 | 文理分科(2016-2019) → 不分(2020+) |
| 上海 | 2016-2025 | 不分文理（2017 起新高考） |
| 浙江 | 2016-2025 | 不分文理（2017 起新高考） |
| 江苏 | 2016-2025 | 文理分科(2016-2019) → 不分(2020+) |
| 天津 | 2016-2025 | 文理分科(2016-2019) → 不分(2020+) |

> **注意**：部分省份在不同年份使用全国卷或自主命题，需逐年确认。

### 2.3 数据量估算

| 维度 | 估算 |
|------|------|
| 每年试卷数 | ~15-20 套（全国卷 + 各省） |
| 每套试卷题数 | ~22 题（选择 12 + 填空 4 + 解答 6） |
| 10 年总量 | **约 3,500-4,500 道题** |

### 2.4 题型分类

| 题型 | 代码 | 说明 |
|------|------|------|
| 选择题 | `choice` | 单选 / 多选 |
| 填空题 | `fill_blank` | 直接填写答案 |
| 解答题 | `solution` | 需要完整解题过程 |

### 2.5 难度判定标准

| 难度 | 判定标准 | 典型位置 |
|------|---------|---------|
| `basic` | 单一知识点直接应用 | 选择题前 6 道、填空题前 2 道 |
| `medium` | 2-3 个知识点综合 | 选择题后 4 道、填空题后 2 道、解答题前 3 道 |
| `hard` | 多知识点深度综合，需要构造/转化 | 压轴选择/填空、解答题后 2-3 道 |

> 统一标准，避免不同录入人员判定不一致。

## 3. 数据模型设计

### 3.1 新增 Schema：NCEE 真题

在 `src/content/config.ts` 中新增 `nceeSchema`：

```typescript
const nceeSchema = z.object({
  type: z.literal('ncee'),
  ncee_id: z.string(),           // 全局唯一 ID，格式: ncee-{year}-{paper_code}-{question_number}
                                  // 例: ncee-2024-new-gao-kao-1-18
  year: z.number().int().min(2016).max(2025),
  paper: z.string(),              // e.g. "2024新高考I卷"
  paper_code: z.string(),         // e.g. "2024-new-gao-kao-1"
  question_number: z.number().int().min(1),  // 原题号
  question_type: z.enum(['choice', 'fill_blank', 'solution']),
  sub_type: z.string().optional(),  // "单选" / "多选" (2020+新高考有多选)
  difficulty: z.enum(['basic', 'medium', 'hard']),
    // ⚠️ Zod 仅校验枚举合法性，不校验难度是否符合业务判定标准（见 2.5）
    // 难度判定需人工审核，schema 无法自动验证
  score: z.number().optional(),     // 分值（5/12/15 等）
  knowledge_points: z.array(z.string()).min(1),  // 关联的知识点 ID（可多个）
  textbook_refs: z.array(z.object({  // 关联的教材章节（可为空数组）
    textbook: z.enum(['required-1', 'required-2', 'selective-1', 'selective-2', 'selective-3']),
    chapter: z.number().int().min(1),
    section: z.number().int().min(1).optional(),
  })).default([]),
  is_deprecated: z.boolean().default(false),  // 废弃标记（软删除）
  source: z.literal('高考真题'),
  region: z.string().optional(),    // 省份（省级卷适用），全国卷可省略
});
```

### 3.2 ncee_id 全局唯一标识

`ncee_id` 作为真题主键，所有跨页面引用、跳转、索引均使用此 ID。

格式：`ncee-{year}-{paper_code}-{question_number}`

示例：
- `ncee-2024-new-gao-kao-1-18` — 2024 新高考 I 卷第 18 题
- `ncee-2019-national-1-science-21` — 2019 全国 I 卷(理)第 21 题
- `ncee-2022-beijing-19` — 2022 北京卷第 19 题

### 3.3 与现有 Schema 的关系

| 字段 | 教材习题 (exercise) | 高考真题 (ncee) |
|------|-------------------|----------------|
| `type` | `'exercise'` | `'ncee'` |
| 唯一 ID | 路径推导 | `ncee_id` 显式字段 |
| `textbook` | 必填（属于哪本教材） | 可选（通过 `textbook_refs` 多对多） |
| `chapter/section` | 必填（属于哪节） | 可选（通过 `textbook_refs` 关联） |
| `knowledge_points` | ✅ | ✅ |
| `source` | `"人教A版2019"` | `"高考真题"` |
| `year` | 无 | 必填 |
| `paper` | 无 | 必填 |
| `question_type` | 无 | 必填 |
| `is_deprecated` | 无 | 软删除标记 |

### 3.4 知识点映射

每道真题必须关联到现有 94 个知识点中的至少一个。对于综合题（如解析几何大题），列出所有涉及的知识点：

```yaml
knowledge_points:
  - ellipse-definition      # 椭圆定义
  - line-circle-position    # 直线与圆的位置关系
  - derivative-applications # 导数应用（如果第二问涉及）
```

**硬性约束**：`knowledge_points` 中每个 ID 必须存在于 `src/content/knowledge-points/` 目录中。**禁止新增知识点 ID**。违反此规则的真题不予录入。

### 3.5 教材章节关联（textbook_refs 业务规则）

| 场景 | 填写方式 |
|------|---------|
| 能精确匹配到节 | `textbook` + `chapter` + `section` |
| 只能匹配到章，无法匹配小节 | `textbook` + `chapter`，`section` 省略 |
| 知识点存在，但教材无对应章节（旧课标迁移） | `textbook_refs` 为空数组 `[]`，依靠 `knowledge_points` 关联 |

> 录入人员不得强行填写不存在的 chapter/section。测试用例覆盖以上三种场景。

### 3.6 子题粒度说明（v1 限制）

高考解答题常有多个小问，各小问可能涉及不同知识点。

**v1 决策**：知识点挂在大题整体，不做子问级别的结构化标记。

- 解答文本中，每个子问的步骤需用 `📌 运用知识点：xxx` 标注所用知识点
- Schema 层面不增加 `sub_questions` 字段
- 知识点统计允许一定偏差，后续迭代可细化

**后续迭代**：v2 考虑增加子问结构化支持，实现子问粒度的知识点关联和统计。

### 3.7 废弃真题处理（软删除）

当真题录入错误需要删除时，**不直接删除 md 文件**：

1. 将 frontmatter 中 `is_deprecated` 设为 `true`
2. 构建脚本过滤 `is_deprecated: true` 的条目，不输出到索引 JSON
3. 访问该 `ncee_id` 的详情页时，显示"该题目已废弃"提示，而非 404
4. 保留 Git 历史中的原始数据

> 原因：公开上线后用户会保存分享链接，直接删除文件会产生死链。

## 4. 内容目录结构

### 4.1 真题文件存放

```
src/content/textbooks/ncee/
├── 2025/
│   ├── new-gao-kao-1/          # 2025 新高考 I 卷
│   │   ├── _index.yml          # 试卷元信息（仅不变字段）
│   │   ├── q01.md              # 第 1 题（固定两位数字命名）
│   │   ├── q02.md              # 第 2 题
│   │   └── ...
│   ├── new-gao-kao-2/
│   │   └── ...
│   ├── beijing/
│   │   └── ...
│   └── ...
├── 2024/
│   └── ...
├── ...
└── 2016/
    └── ...
```

### 4.2 文件名格式约束

**强制规则**：`qNN.md`，固定两位数字，前补零。

| 合法 | 非法 |
|------|------|
| `q01.md`, `q09.md`, `q18.md` | `q1.md`, `q001.md`, `Q01.md`, `question-1.md` |

构建脚本 `build-ncee-index.ts` 校验：
- 文件名必须匹配 `/^q\d{2}\.md$/`
- 同一试卷目录内 `question_number` 无重复
- 违反则 CI 报错阻断

### 4.3 试卷索引文件（_index.yml）

`_index.yml` **仅保留人工填写的不变信息**：

```yaml
year: 2024
paper: "2024新高考I卷"
paper_code: "2024-new-gao-kao-1"
region: null                     # 全国卷
total_score: 150
```

**计数字段由脚本自动统计**（禁止人工维护）：
- `question_count` — 扫描目录下 `q*.md` 文件数量
- `choice_count` / `multi_choice_count` / `fill_blank_count` / `solution_count` — 按 `question_type` + `sub_type` 统计

测试校验：页面展示的题目数量 = 目录实际 md 文件数量。

### 4.4 真题文件示例

```markdown
---
type: ncee
ncee_id: "ncee-2024-new-gao-kao-1-18"
year: 2024
paper: "2024新高考I卷"
paper_code: "2024-new-gao-kao-1"
question_number: 18
question_type: solution
difficulty: hard
score: 17
knowledge_points:
  - derivative-monotonicity
  - derivative-extrema
  - derivative-max-min
textbook_refs:
  - textbook: selective-2
    chapter: 6
    section: 3
source: "高考真题"
---

**题目：** 已知函数 $f(x) = x\ln x - x^2 + ax$。

(1) 当 $a = 1$ 时，求 $f(x)$ 的单调区间；

(2) 若 $f(x) \leq 0$ 对一切 $x > 0$ 成立，求 $a$ 的取值范围。

---

**解答：**

**(1) 第1步：** 求导数
> 📌 运用知识点：derivative-operations

当 $a = 1$ 时，$f(x) = x\ln x - x^2 + x$

$f'(x) = \ln x + 1 - 2x + 1 = \ln x - 2x + 2$

**(1) 第2步：** 分析 $f'(x)$ 的符号
> 📌 运用知识点：derivative-monotonicity

令 $g(x) = \ln x - 2x + 2$，则 $g'(x) = \frac{1}{x} - 2$

...（详细解答过程）

**(2) 第3步：** 构造不等式条件
> 📌 运用知识点：derivative-extrema, derivative-max-min

...（详细解答过程）

**⚠️ 易错提醒：** 含参讨论时注意分类的完备性...

**💡 解题思路总结：** 导数综合题的核心是构造函数、分析单调性...
```

## 5. 架构决策：构建与渲染策略

### 5.1 问题

4000 道真题 = 4000 个 md 文件。如果全部走 Astro Content Collections 预构建静态 HTML：
- CI 构建时间可能过长
- 内存占用高，存在 OOM 风险
- 全量索引 JSON 体积过大，移动端加载卡顿

### 5.2 决策：分层存储 + 按需渲染

| 层级 | 存储方式 | 渲染方式 |
|------|---------|---------|
| **元数据索引** | 构建脚本从 md 提取 → 分片 JSON | 前端按需加载分片 |
| **真题详情页** | md 文件保留在 Content Collections | `getStaticPaths` 生成路由，页面运行时读取 md 渲染 |
| **试卷/总览页** | 从分片 JSON 读取 | 静态生成（页面数少） |

### 5.3 getStaticPaths 规模风险与应对

4000 条路由的 `getStaticPaths` 在构建阶段会生成 4000 个 path 对象，存在内存压力。

**v1 方案（SSG + CI 调优）**：

```json
// package.json scripts
"build": "NODE_OPTIONS='--max-old-space-size=6144' astro build"
```

- CI 环境设置 `NODE_OPTIONS="--max-old-space-size=6144"`（6GB）
- Plan 2.5 性能验证监控构建内存占用

**备选方案（若构建超时/OOM）**：

| 方案 | 说明 | 代价 |
|------|------|------|
| 迁移到 Cloudflare Pages | 支持 SSR，真题详情页改为动态路由 | 需要切换托管平台 |
| 客户端动态渲染 | 真题详情页不预生成，前端从 JSON 读取元数据 + 从 md 原文渲染 | 牺牲 SEO |
| 分批构建 | 最近 3 年预生成静态页，更早的采用客户端渲染 | 体验不一致 |

> 在 Plan 2.5 性能验证中评估，若 120 道题时构建已接近上限，立即切换备选方案。

### 5.4 索引分片规则

构建脚本输出以下分片 JSON（**不生成全量索引**）：

```
public/data/ncee/
├── by-year/
│   ├── 2025.json          # 2025 年所有真题元数据
│   ├── 2024.json
│   └── ...
├── by-paper/
│   ├── 2024-new-gao-kao-1.json
│   └── ...
├── by-kp/
│   ├── derivative-monotonicity.json
│   └── ...
├── by-chapter/
│   ├── selective-2/ch6.json
│   └── ...
└── summary.json           # 仅统计信息：各年试卷数、各知识点真题数
```

### 5.5 索引 JSON 字段裁剪

索引 JSON **只保留列表渲染必需字段**，不包含题目正文和解答：

```typescript
interface NceeIndexEntry {
  ncee_id: string;
  year: number;
  paper: string;
  question_number: number;
  question_type: 'choice' | 'fill_blank' | 'solution';
  difficulty: 'basic' | 'medium' | 'hard';
  score?: number;
  knowledge_points: string[];
}
```

### 5.6 索引输出原子性

防止脚本异常退出导致半截损坏的 JSON：

1. 脚本先输出到临时目录 `public/data/ncee-tmp/`
2. 全部生成完毕后，校验每个 JSON 文件可正常 `JSON.parse()`
3. 校验通过 → 整体移动到 `public/data/ncee/`
4. 校验失败 → CI 报错，不替换旧产物

### 5.7 前端加载策略

- 真题总览页：只加载 `summary.json`（统计信息），按年份折叠展示
- 点击某年份 → 按需加载 `by-year/{year}.json`
- 知识点页面：加载 `by-kp/{kp_id}.json`
- 试卷详情页：加载 `by-paper/{paper_code}.json`

### 5.8 分页规则

| 场景 | 默认每页 | 说明 |
|------|---------|------|
| 知识点真题板块 | 20 条 | 支持页码切换 |
| 筛选结果列表 | 20 条 | 支持页码切换 |
| 真题总览页 | 按年份分组 | 每年折叠展示，不分页 |

### 5.9 KaTeX 公式语法校验

构建阶段对所有真题 md 文件中的 LaTeX 公式做轻量语法校验：

| 检查项 | 规则 |
|--------|------|
| `$` 配对 | 行内公式 `$...$` 必须成对出现 |
| `$$` 配对 | 块级公式 `$$...$$` 必须成对出现 |
| `{}` 匹配 | 花括号必须左右匹配 |
| 常见错误 | `\frac` 后必须有 `{}`，`\sqrt` 后必须有 `{}` 或 `[]` |

校验失败 → CI 报错，输出文件名 + 行号 + 错误类型，阻断合并。

> 不做完整 LaTeX 解析（成本过高），仅做轻量正则校验，覆盖 90% 以上的常见语法错误。

## 6. 页面设计

### 6.1 页面路由总览

| 路由 | 页面 | 说明 |
|------|------|------|
| `/pep-math/ncee` | 真题总览 | 按年份浏览所有试卷 |
| `/pep-math/ncee/[year]/[paper]` | 试卷详情 | 一套完整试卷，含所有题目 |
| `/pep-math/ncee/question/[ncee_id]` | **真题详情** | 单道真题完整页面 |

### 6.2 真题总览页 (`/pep-math/ncee`)

```
┌─────────────────────────────────────────────┐
│  📋 高考数学真题                              │
│  2016-2025，共 XX 套试卷，XXXX 道题目          │
│                                              │
│  筛选：                                       │
│  [年份 ▼] [试卷类型 ▼] [题型 ▼]               │
│  [知识点 ▼] [难度 ▼] [单选/多选 ▼]            │
│  [清空筛选 ✕]                                 │
│                                              │
│  ⚠️ 筛选逻辑：多条件 AND（同时满足全部条件）     │
│  ⚠️ 筛选状态同步到 URL query 参数              │
│  例: /ncee?year=2024&difficulty=hard          │
│  支持复制链接分享筛选结果                       │
│  ⚠️ URL 非法参数自动丢弃，页面不报错            │
│                                              │
│  ┌─ 2025 ──────────────────────────────────┐ │
│  │ 📄 新高考I卷    19题  150分  [查看详情]   │ │
│  │ 📄 新高考II卷   19题  150分  [查看详情]   │ │
│  │ 📄 北京卷       21题  150分  [查看详情]   │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  ┌─ 2024 ──────────────────────────────────┐ │
│  │ 📄 新高考I卷    19题  150分  [查看详情]   │ │
│  │ ...                                      │ │
│  └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### 6.3 筛选逻辑详细定义

| 规则 | 说明 |
|------|------|
| 多条件逻辑 | **AND**（同时满足全部筛选条件） |
| URL 同步 | 筛选条件写入 query 参数，刷新保留、链接可分享 |
| 非法参数容错 | URL 中传入不存在的 `kp_id`、非法年份等 → 自动丢弃该参数，页面正常渲染 |
| 清空筛选 | 提供"清空全部筛选"按钮，一键重置 |
| 无结果 | 显示"未找到匹配的真题"提示，建议调整筛选条件 |

### 6.4 试卷详情页 (`/pep-math/ncee/[year]/[paper]`)

```
┌─────────────────────────────────────────────┐
│  2024 新高考 I 卷                              │
│  总分 150 | 19 题 | 用时 120 分钟              │
│                                              │
│  一、选择题（每小题 5 分，共 40 分）            │
│  ┌──────────────────────────────────────────┐│
│  │ 第1题 [展开] [详情→]  知识点：集合运算     ││
│  │ 第2题 [展开] [详情→]  知识点：复数运算     ││
│  │ ...                                      ││
│  └──────────────────────────────────────────┘│
│                                              │
│  二、填空题（每小题 5 分，共 15 分）            │
│  ┌──────────────────────────────────────────┐│
│  │ 第13题 [展开] [详情→]  知识点：向量数量积  ││
│  │ ...                                      ││
│  └──────────────────────────────────────────┘│
│                                              │
│  三、解答题（共 77 分）                        │
│  ┌──────────────────────────────────────────┐│
│  │ 第17题 [展开] [详情→]  知识点：解三角形    ││
│  │ 第18题 [展开] [详情→]  知识点：导数综合    ││
│  │ ...                                      ││
│  └──────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

- 每题支持**折叠展开**（快速查看）+ **详情跳转**（完整页面）

### 6.5 真题详情页 (`/pep-math/ncee/question/[ncee_id]`)

```
┌─────────────────────────────────────────────┐
│  2024 新高考 I 卷 第 18 题                     │
│  解答题 | 17 分 | 难度：★★★                    │
│                                              │
│  📝 题目                                      │
│  已知函数 f(x) = x·ln(x) - x² + ax...        │
│                                              │
│  ✅ 分步解答                                   │
│  第1步：求导数                                 │
│  第2步：分析单调性                             │
│  ...                                         │
│                                              │
│  🔗 关联知识点                                 │
│  [导数单调性] [导数极值] [导数最值]             │
│                                              │
│  📚 关联教材章节                               │
│  选择性必修二 第6章 第3节                      │
│                                              │
│  ⚠️ 易错提醒                                  │
│  💡 解题思路总结                               │
│                                              │
│  ← 返回试卷  |  上一题 →  |  ← 下一题         │
└─────────────────────────────────────────────┘
```

- 支持直接分享链接
- Pagefind 搜索可直接定位到此页
- 底部导航：返回试卷 / 上一题 / 下一题
- 若 `is_deprecated: true`，显示"该题目已废弃"横幅，不展示正文

### 6.6 知识点页面增强

在现有 `/pep-math/knowledge/[id]` 页面增加「高考真题」板块：

```
┌─────────────────────────────────────────────┐
│  📖 定义与核心概念                             │
│  📐 关键公式                                   │
│  🔗 知识关联                                   │
│  ⚠️ 常见错误                                   │
│  📝 相关习题（教材习题）                         │
│                                              │
│  🎯 高考真题                                   │
│  共 XX 道真题涉及此知识点                        │
│  ┌──────────────────────────────────────────┐│
│  │ 按年份分组，每页 20 条，支持分页             ││
│  │ 2024: 新高考I卷 第18题 [详情→]             ││
│  │        北京卷 第12题 [详情→]                ││
│  │ 2023: 新高考II卷 第17题 [详情→]            ││
│  │ ...                                      ││
│  │ [1] [2] [3] ... [10] 下一页 →             ││
│  └──────────────────────────────────────────┘│
│                                              │
│  筛选：[题型 ▼] [难度 ▼]                      │
└─────────────────────────────────────────────┘
```

- 教材习题与高考真题**分块显示**（v1 不做混合列表）
- 分页：默认每页 20 条

### 6.7 教材章节页面增强

在现有教材章节页面增加「高考真题」板块，同样分页 20 条。

### 6.8 Pagefind 搜索集成

- 搜索结果条目增加来源标签：`[教材习题]` / `[高考真题]` / `[知识点]`
- v1 不支持按来源过滤搜索，后续迭代
- Pagefind 索引体积纳入 Plan 2.5 性能验证

### 6.9 前端错误输出约定

便于用户提交 Issue 时复制控制台信息：

```javascript
// JSON 加载失败
console.error('[pep-math] 真题索引加载失败:', {
  url: '/data/ncee/by-year/2024.json',
  error: 'JSON parse error',
  ncee_context: '真题总览页'
});

// KaTeX 渲染失败
console.error('[pep-math] 公式渲染失败:', {
  ncee_id: 'ncee-2024-new-gao-kao-1-18',
  formula: '$$\\frac{...}',
  error: 'Missing } brace'
});
```

## 7. 构建脚本更新

### 7.1 新增：`build-ncee-index.ts`

```
功能：
- 扫描 src/content/textbooks/ncee/ 下所有真题 md 文件
- 校验文件名格式（qNN.md）
- 校验同试卷内 question_number 无重复
- 校验 ncee_id 全局唯一
- 校验 knowledge_points 全部在现有 94 个 ID 中
- 轻量 KaTeX 语法校验（$ 配对、{} 匹配）
- 过滤 is_deprecated: true 的条目
- 提取元数据（不含正文/解答）
- 自动统计 _index.yml 计数字段
- 输出到临时目录 → 校验 JSON 合法性 → 移入 public/data/ncee/
- 输出分片 JSON：
  - public/data/ncee/by-year/{year}.json
  - public/data/ncee/by-paper/{paper_code}.json
  - public/data/ncee/by-kp/{kp_id}.json
  - public/data/ncee/by-chapter/{textbook}/ch{N}.json
  - public/data/ncee/summary.json（统计信息）
- 不生成全量索引 JSON
```

### 7.2 修改：`build-exercise-index.ts`

```
修改：
- 识别 type: 'ncee' 的内容（过滤 is_deprecated）
- 在 byKp 索引中包含真题（标记来源为 'ncee'，使用 ncee_id）
- 新增 byChapter 索引（将真题关联到教材章节）
```

### 7.3 修改：`build-knowledge-graph.ts`

```
修改：
- 在知识图谱节点数据中增加 ncee_count 字段
- 节点 tooltip 显示 "教材习题 N 道 | 高考真题 M 道"
- 计数规则：只统计 knowledge_points 数组直接包含该 kp_id 的真题，不做传递推导
- 若某知识点 0 道真题，tooltip 不显示真题计数部分
- v1 只做计数展示，不做图谱按真题筛选
```

## 8. 知识点映射策略

### 8.1 映射原则

1. **每道真题至少关联 1 个知识点**
2. **综合题关联所有涉及的知识点**（如解析几何大题可能涉及 3-4 个）
3. **以现有 94 个知识点为准**，禁止新增知识点 ID
4. **映射需人工审核**，确保准确性
5. **旧课标题目**：知识点在 94 个中的正常录入；不在的直接排除，不录入

### 8.2 94 个知识点覆盖预估

基于高考出题规律，各知识板块的真题出现频率：

| 知识板块 | 知识点数 | 每年出题占比 | 预估 10 年真题量 |
|---------|---------|------------|----------------|
| 函数与导数 | 12 | ~25% | ~800 |
| 三角函数 | 6 | ~15% | ~500 |
| 数列 | 4 | ~10% | ~350 |
| 向量 | 7 | ~10% | ~350 |
| 不等式 | 4 | ~5% | ~150 |
| 立体几何 | 7 | ~15% | ~500 |
| 解析几何 | 9 | ~15% | ~500 |
| 概率统计 | 13 | ~15% | ~500 |
| 集合与逻辑 | 5 | ~5% | ~150 |
| **合计** | **94** (实际使用约 67) | 100% | **~3,800** |

### 8.3 教材章节关联策略

| 教材 | 章节 | 关联真题预估 |
|------|------|------------|
| 必修一 | Ch1 集合 | ~100 题 |
| 必修一 | Ch2 一元二次函数/不等式 | ~200 题 |
| 必修一 | Ch3 函数概念 | ~150 题 |
| 必修一 | Ch4 指数对数 | ~100 题 |
| 必修一 | Ch5 三角函数 | ~250 题 |
| 必修二 | Ch6 平面向量 | ~150 题 |
| 必修二 | Ch7 复数 | ~50 题 |
| 必修二 | Ch8 立体几何初步 | ~200 题 |
| 必修二 | Ch9 统计 | ~150 题 |
| 必修二 | Ch10 概率 | ~100 题 |
| 选择性必修一 | Ch1 空间向量 | ~200 题 |
| 选择性必修一 | Ch2 直线与圆 | ~150 题 |
| 选择性必修一 | Ch3 圆锥曲线 | ~300 题 |
| 选择性必修二 | Ch4 数列 | ~250 题 |
| 选择性必修二 | Ch5 一元函数导数 | ~400 题 |
| 选择性必修三 | Ch6 计数原理 | ~150 题 |
| 选择性必修三 | Ch7 随机变量 | ~250 题 |
| 选择性必修三 | Ch8 统计案例 | ~100 题 |

## 9. 测试策略

### 9.1 Schema 验证测试

```typescript
// tests/content/ncee-schema.test.ts
describe('NCEE schema validation', () => {
  test('all ncee files have valid frontmatter');
  test('ncee_id is globally unique across all files');
  test('year is between 2016 and 2025');
  test('knowledge_points all reference existing KP IDs (禁止新增)');
  test('textbook_refs reference valid textbook/chapter');
  test('question_type matches content format');
  // ⚠️ difficulty 测试仅校验枚举合法性（basic/medium/hard）
  // 难度是否符合业务判定标准（见 2.5）需人工审核，Zod 无法自动验证
  test('difficulty is one of: basic, medium, hard');
});
```

### 9.2 索引完整性测试

```typescript
// tests/content/ncee-index.test.ts
describe('NCEE index integrity', () => {
  test('every ncee question appears in at least one KP index');
  test('every ncee question appears in at least one chapter index (or has valid reason)');
  test('paper question counts match actual md file count in directory');
  test('no duplicate question numbers within a paper');
  test('no duplicate ncee_id across all files');
  test('分片索引数据一致性：同一真题在多个分片中元数据完全一致');
  test('is_deprecated 的真题不出现在任何索引 JSON 中');
});
```

### 9.3 交叉引用测试

```typescript
// tests/content/ncee-cross-ref.test.ts
describe('NCEE cross-references', () => {
  test('knowledge point pages show correct ncee counts');
  test('chapter pages show correct ncee counts');
  test('knowledge graph nodes include correct ncee counts');
  test('反向校验：KP 页面统计数 = by-kp JSON 中实际数量');
  test('知识图谱计数 = 直接关联真题数（非传递推导）');
});
```

### 9.4 边界场景测试

```typescript
// tests/content/ncee-edge-cases.test.ts
describe('NCEE edge cases', () => {
  test('textbook_refs 为空的真题，页面正常渲染不报错');
  test('知识点关联 100+ 道真题时，分页正常工作，DOM 不爆炸');
  test('旧课标真题（2016-2019文理分科）正确归类');
  test('新高考多选题 sub_type 正确标注');
  test('is_deprecated 真题详情页显示废弃提示，不显示正文');
  test('URL 非法筛选参数自动丢弃，页面不崩溃');
  test('0 道真题的知识点，图谱 tooltip 不显示真题计数');
});
```

### 9.5 性能测试

```typescript
// tests/content/ncee-performance.test.ts
describe('NCEE performance', () => {
  test('单个分片 JSON 文件 < 200KB（未压缩体积；gzip 后会更小）');
  test('索引 JSON 不包含题目正文或解答');
  test('真题详情页构建时间合理（单页 < 100ms）');
  test('所有分片 JSON 可正常 JSON.parse()（无截断损坏）');
  test('Pagefind 索引体积在合理范围内');
});
```

### 9.6 文件名与格式校验测试

```typescript
// tests/content/ncee-filename.test.ts
describe('NCEE filename validation', () => {
  test('all ncee md files match /^q\\d{2}\\.md$/ pattern');
  test('no duplicate question_number within same paper directory');
  test('_index.yml only contains manual fields (no auto-count fields)');
});
```

### 9.7 移动端适配测试

```
手动测试清单：
- [ ] 筛选下拉组件在移动端正常展开/收起
- [ ] 长试卷列表滚动流畅
- [ ] 分页控件触摸操作正常
- [ ] 真题详情页公式不溢出屏幕
```

## 10. 风险与注意事项

### 10.1 版权（四条红线）

1. **解答必须原创**：所有分步解答为团队独立撰写，**禁止直接复制网络现成解析**
2. **禁止商业用途**：README + 页面页脚标注版权声明
3. **禁止图片扫描**：全部题目文字转录 + KaTeX 排版，不复用试卷扫描件/图片
4. **不提供原版试卷扫描图片资源**：项目仅提供文字转录版本

> 高考真题属于公开考试题目，题目文本可自由使用于教育目的。但官方参考答案不一定属于公有领域，我们的解答必须独立原创。

### 10.2 数据准确性

- **题目文本**：需与原始试卷一致，公式用 KaTeX 正确排版
- **解答**：分步骤、详细，与教材习题风格一致
- **知识点分类**：需人工审核，避免错误分类
- **教材关联**：需确认每个 `textbook_refs` 准确
- **禁止新增知识点**：所有 `knowledge_points` 必须是现有 94 个 ID 之一

### 10.3 规模管理

- 3,500-4,500 道题的文件量很大
- 使用并行 agent 批量生成（按试卷粒度分配，一套试卷只分配给一个 Agent）
- 构建脚本分片输出，避免 OOM
- 页面分页/懒加载，避免 DOM 爆炸

### 10.4 旧课标 vs 新课标

2016-2019 年的试卷基于旧课标（文理分科），部分知识点范围与现行 2019 人教 A 版不完全对应：

| 场景 | 处理方式 |
|------|---------|
| 知识点在 94 个现有 ID 中 | 正常录入 |
| 知识点不在 94 个中（如极坐标、不等式选讲） | **排除该题，不录入** |
| 知识点存在但教材无对应章节 | `textbook_refs` 为空，依靠 `knowledge_points` 关联 |

---

## 11. 工程规范（延续 TextbookOnly 阶段经验）

### 11.1 TDD 流程（RED → GREEN → VERIFY）

每个 Plan 严格执行 TDD：

1. **RED**：先编写/更新测试，使测试失败
   - 更新 schema 验证测试
   - 更新索引计数测试（使用 `toBeGreaterThanOrEqual`，不用 `toBe`）
   - 添加交叉引用测试、边界场景测试
2. **GREEN**：创建内容/代码，使测试通过
   - 录入真题数据
   - 编写构建脚本
   - 开发页面
3. **VERIFY**：运行全量测试 + 构建验证
   - `npm test` — 所有测试通过
   - `npm run build` — 构建无错误
   - 本地预览验证页面功能

### 11.2 Git 规范

| 规则 | 说明 |
|------|------|
| 分支 | 所有工作在 `NCEE_ADDED` 分支上进行 |
| Commit 粒度 | 每个 Plan 完成后至少一个 commit |
| Commit message | 遵循 Conventional Commits：`feat:`, `fix:`, `test:`, `docs:` |
| Tag | 完成后打 tag `NCEE_V1` |
| Push | 明早 9:30 后统一 push |
| 合并 | 最终将 `NCEE_ADDED` 合并回 `main` |

### 11.3 并行调度策略

| 策略 | 说明 |
|------|------|
| 按试卷分派 | 每个 agent 负责 1 套完整试卷 |
| **冲突约束** | **一套试卷只能分配给一个 Agent**，禁止多 Agent 编辑同一试卷 |
| 独立任务并行 | 构建脚本、页面开发、测试编写可并行 |
| 依赖任务串行 | 先完成 schema → 再录入数据 → 最后开发页面 |

### 11.4 内容质量标准

每道真题必须满足：

| 检查项 | 标准 |
|--------|------|
| 题目文本 | 与原始试卷完全一致 |
| 数学公式 | KaTeX 语法正确，本地预览渲染正常，通过自动语法校验 |
| 解答 | 分步骤、详细，每步标注所用知识点（`📌 运用知识点：xxx`） |
| 知识点 | 至少 1 个，综合题列出全部涉及的知识点；**必须是现有 94 个 ID 之一** |
| 教材关联 | `textbook_refs` 准确，遵循三种业务规则 |
| 难度 | 按统一标准标注（见 2.5）；Zod 仅校验枚举合法，判定标准需人工审核 |
| 易错提醒 | 解答题必须包含 |
| 解题思路 | 解答题必须包含总结 |
| 解答原创性 | **禁止复制网络现成解析，必须独立撰写** |
| ncee_id | 全局唯一，格式正确 |
| 文件名 | 固定 `qNN.md` 格式（两位数字） |

### 11.5 之前做得好的，继续保持

| 实践 | 说明 |
|------|------|
| ✅ TDD 先行 | 先写测试，再写内容，确保数据完整性 |
| ✅ 并行 agent 批量生成 | 大规模内容创建时按试卷分派 |
| ✅ Git 纪律 | 有意义的 commit message，阶段性 commit |
| ✅ 测试使用 `toBeGreaterThanOrEqual` | 计数测试不因内容增长而 break |
| ✅ 构建脚本自动化 | 索引、交叉引用自动生成 |

### 11.6 之前需改进的，本次落实

| 改进项 | 具体措施 |
|--------|---------|
| 🔧 一次性修复所有同类问题 | 发现框架级 bug 后，立即 grep 扫描全站所有实例，一次性修复 |
| 🔧 先查 Git History | 遇到 bug 先 `git log --grep="关键词"` 查找历史解决方案 |
| 🔧 自底向上调试 | 先验证资源加载（HTTP 状态码）→ 再验证 JS 执行 → 再验证 UI 交互 |
| 🔧 Astro `<script>` 陷阱 | 所有客户端交互使用 `<script is:inline>` + 纯 JS，数据注入用 `<div set:html>` |
| 🔧 不重复调试同一问题 | 修复后立刻全站扫描，确认无遗漏再提交 |

---

## 12. 实施计划

### Plan 1：基础设施搭建

**目标**：数据模型、目录结构、构建脚本就绪

| 任务 | 说明 |
|------|------|
| 1.1 更新 content schema | 新增 `nceeSchema`（含 `ncee_id`、`is_deprecated`）到 `config.ts` |
| 1.2 创建目录结构 | `src/content/textbooks/ncee/` |
| 1.3 编写 `build-ncee-index.ts` | 真题索引构建脚本（分片输出 + 原子写入 + 自动统计 + 格式校验 + KaTeX 校验） |
| 1.4 更新 `build-exercise-index.ts` | 支持 ncee 类型 |
| 1.5 编写测试 | schema 验证、索引构建、边界场景、文件名格式、性能测试 |

### Plan 2：真题数据录入 — 第一批（2023-2025 全国卷）

**目标**：录入最近 3 年全国卷真题，验证完整流程

| 试卷 | 题数（约） |
|------|-----------|
| 2025 新高考 I 卷 | 19 |
| 2025 新高考 II 卷 | 19 |
| 2024 新高考 I 卷 | 19 |
| 2024 新高考 II 卷 | 19 |
| 2023 新高考 I 卷 | 22 |
| 2023 新高考 II 卷 | 22 |
| **小计** | **~120 题** |

### Plan 2.5：性能验证 ⚡

**目标**：在数据量尚小时提前发现性能问题

| 检查项 | 标准 |
|--------|------|
| CI 构建耗时 | < 5 分钟 |
| 内存占用 | < 2GB（设置 `--max-old-space-size=6144`） |
| 单个分片 JSON | < 200KB（未压缩体积；gzip 后会更小） |
| 浏览器首屏加载 | < 2 秒 |
| 索引 JSON 内容 | 确认不含题目正文/解答 |
| 所有分片 JSON | `JSON.parse()` 合法，无截断 |
| Pagefind 索引体积 | 在合理范围内 |
| **getStaticPaths 评估** | 若 120 题时构建已接近上限，立即切换备选方案 |

> 不通过则先解决性能问题，再继续录入。

### Plan 3：真题数据录入 — 第二批（2019-2022 全国卷 + 省级卷）

| 试卷 | 题数（约） |
|------|-----------|
| 2019-2022 全国卷 I/II/III（文理） | ~240 |
| 2019-2022 北京/上海/浙江/江苏/天津 | ~250 |
| **小计** | **~490 题** |

### Plan 4：真题数据录入 — 第三批（2016-2018）

| 试卷 | 题数（约） |
|------|-----------|
| 2016-2018 全国卷 I/II/III（文理）+ 各省自主命题 | ~1,500 |
| **小计** | **~1,500 题** |

### Plan 5：页面开发

| 任务 | 说明 |
|------|------|
| 5.1 真题总览页 | `/pep-math/ncee`（含筛选 AND 逻辑 + URL 同步 + 容错） |
| 5.2 试卷详情页 | `/pep-math/ncee/[year]/[paper]`（折叠展开 + 详情跳转） |
| 5.3 真题详情页 | `/pep-math/ncee/question/[ncee_id]`（含废弃提示） |
| 5.4 知识点真题板块 | 增强 `/pep-math/knowledge/[id]`（分页 20 条） |
| 5.5 教材章节真题板块 | 增强章节页面（分页 20 条） |
| 5.6 知识图谱更新 | 节点显示真题数量（仅直接计数，不做筛选） |
| 5.7 前端错误约定 | console.error 格式输出，含 ncee_id |

### Plan 6：集成测试与收尾

| 任务 | 说明 |
|------|------|
| 6.1 全量测试 | schema、索引完整性、交叉引用、边界场景、性能、文件名格式 |
| 6.2 搜索集成 | Pagefind 重新索引，结果增加来源标签 |
| 6.3 移动端测试 | 筛选、分页、公式渲染在移动端正常 |
| 6.4 最终验证 | 全量构建 + 本地预览完整功能验证 |
| 6.5 合并 push | `NCEE_ADDED` → `main`，打 tag `NCEE_V1` |

---

## 13. v1.0 不在范围内的功能

明确以下功能**不在 v1.0 实现**，防止范围蔓延：

| 功能 | 说明 |
|------|------|
| ❌ 真题收藏 / 做题 / 自测 / 打分 | 需要用户系统，v2 考虑 |
| ❌ 子问粒度知识点关联 | v1 知识点挂在大题整体 |
| ❌ 用户导出试卷（PDF / Markdown） | 后续迭代 |
| ❌ 开发者批量导出校对工具 | 后续迭代 |
| ❌ 离线下载试卷 | 后续迭代 |
| ❌ 知识图谱按真题筛选 | v1 只做计数展示 |
| ❌ 搜索结果按来源过滤 | v1 只加来源标签，不做过滤 |
| ❌ 教材习题 / 高考真题混合列表 | v1 分块显示 |
| ❌ 批量数据修复工具 | v1 通过重跑构建脚本处理 |
| ❌ 教材习题 ↔ 高考真题举一反三联动 | v2 迭代 |
| ❌ 跨试卷复用真题去重 | v1 接受复制 md，v2 考虑公共实体 |

---

## 14. 成功标准

- [ ] 所有 2016-2025 全国卷真题已录入
- [ ] 所有 2016-2025 省级卷真题已录入
- [ ] 每道题有详细的**原创**分步骤解答
- [ ] 每道题关联至少 1 个知识点（必须是现有 94 个 ID 之一）
- [ ] 每道题有全局唯一 `ncee_id`
- [ ] 知识点页面显示相关真题（分页，每页 20 条）
- [ ] 教材章节页面显示相关真题（分页，每页 20 条）
- [ ] 真题总览页可按年份/卷别/题型/知识点/难度筛选（AND 逻辑），状态同步 URL
- [ ] 单道真题有独立详情页，可分享链接
- [ ] 废弃真题显示提示页，不返回 404
- [ ] 所有测试通过（`npm test`）
- [ ] 构建无错误（`npm run build`）
- [ ] 构建性能达标（< 5 分钟，< 2GB 内存）
- [ ] 单个索引 JSON < 200KB（未压缩）
- [ ] 所有分片 JSON 可正常解析
- [ ] 知识图谱节点显示真题数量（直接计数）
- [ ] 搜索结果区分来源标签
- [ ] 版权声明已添加
- [ ] 移动端基本适配正常
