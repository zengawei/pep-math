---
type: exercise
textbook: selective-2
chapter: 16
section: 1
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - permutation
  - counting-principle-multiplication
source: "人教A版2019"
references: "选择性必修第二册 P57 练习B 第2题"
---

**题目：** $4$ 名同学报名参加 $3$ 个不同的兴趣小组，每人限报 $1$ 个小组，每个小组限报人数不限，共有多少种报名方案？

---

**解答：**

**第1步：** 分析题意
> 📌 运用知识点：乘法原理（分步计数）

每名同学都要选 $1$ 个小组报名，共 $4$ 名同学，需分 $4$ 步完成。

**第2步：** 逐人分析
> 📌 运用知识点：乘法原理

每名同学都可以从 $3$ 个小组中任选 $1$ 个，各有 $3$ 种选法。

**第3步：** 汇总
> 📌 运用知识点：乘法原理

$$N = 3 \times 3 \times 3 \times 3 = 3^4 = 81 \text{（种）}$$

**⚠️ 易错提醒：** 本题容易与"每个小组限报 $1$ 人"混淆。本题是"每人选一组"，每组可被多人选择，所以每人都有 $3$ 种选择（而非递减）。注意区分：元素（人）分配给位置（组），位置可重复→用 $n^m$ 型。

**💡 解题思路总结：** " $m$ 个元素分配到 $n$ 个位置，每个位置不限"→每人独立选择→$n^m$ 种。关键是判断"谁选谁"以及"是否可重复"。
