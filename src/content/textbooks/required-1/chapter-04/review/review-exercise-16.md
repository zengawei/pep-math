---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P114 复习16"
---

**题目：** 已知 $f(x) = \left(\frac{1}{3}\right)^{x^2 - 2x}$，求 $f(x)$ 的单调递增区间。

---

**解答：**

**第1步：** 分析内外层
> 📌 运用知识点：指数函数图象与性质

外层 $y = \left(\frac{1}{3}\right)^t$，底数 $\frac{1}{3} \in (0,1)$，关于 $t$ 单调递减。

内层 $t = x^2 - 2x = (x-1)^2 - 1$，在 $(-\infty, 1)$ 上递减，在 $(1, +\infty)$ 上递增。

**第2步：** 复合函数单调性
> 📌 运用知识点：指数函数图象与性质

外层递减，要使整体递增，内层需递减（减减得增）。

$t$ 在 $(-\infty, 1)$ 上递减，所以 $f(x)$ 的单调递增区间为 $(-\infty, 1)$。

**⚠️ 易错提醒：** 复合函数"同增异减"——外层递减时，内层递减才使整体递增。

**💡 解题思路总结：** 复合函数单调性：先分内外层，再用"同增异减"判断。
