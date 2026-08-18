---
type: exercise
textbook: required-1
chapter: 4
section: 3
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P106 习题1"
---

**题目：** 已知函数 $f(x) = \log_a(a^x - 1)$（$a > 0$ 且 $a \neq 1$），求 $f(x)$ 的定义域，并讨论 $f(x)$ 的单调性。

---

**解答：**

**第1步：** 求定义域
> 📌 运用知识点：对数函数图象与性质

要求 $a^x - 1 > 0$，即 $a^x > 1$。

当 $a > 1$ 时，$a^x > 1 = a^0$，所以 $x > 0$。

当 $0 < a < 1$ 时，$a^x > 1 = a^0$，因为 $y = a^x$ 递减，所以 $x < 0$。

**第2步：** 讨论单调性
> 📌 运用知识点：指数函数图象与性质

设 $t = a^x - 1$，则 $f(x) = \log_a t$。

当 $a > 1$ 时：$t = a^x - 1$ 在 $(0, +\infty)$ 上递增，$\log_a t$ 也递增，所以 $f(x)$ 在 $(0, +\infty)$ 上单调递增。

当 $0 < a < 1$ 时：$t = a^x - 1$ 在 $(-\infty, 0)$ 上递减，$\log_a t$ 也递减，所以 $f(x)$ 在 $(-\infty, 0)$ 上单调递增（减减得增）。

**⚠️ 易错提醒：** 复合函数单调性"同增异减"：内外层单调性相同则增，相反则减。

**💡 解题思路总结：** 复合函数问题分三步：①求定义域 ②分析内外层单调性 ③用"同增异减"判断。
