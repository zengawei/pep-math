---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P115 复习27"
---

**题目：** 已知函数 $f(x) = \log_a(a^x - 1)$（$a > 1$），证明 $f(x)$ 在 $(0, +\infty)$ 上单调递增，并求 $f(x) > 1$ 的解集。

---

**解答：**

**第1步：** 求定义域
> 📌 运用知识点：对数函数图象与性质

$a^x - 1 > 0 \Rightarrow a^x > 1 = a^0$

因为 $a > 1$，所以 $x > 0$。定义域为 $(0, +\infty)$。

**第2步：** 证明单调递增
> 📌 运用知识点：指数函数图象与性质

设 $0 < x_1 < x_2$。

因为 $a > 1$，$y = a^x$ 递增，所以 $a^{x_1} < a^{x_2}$，即 $a^{x_1} - 1 < a^{x_2} - 1$。

又因为 $a > 1$，$y = \log_a t$ 递增，所以 $\log_a(a^{x_1} - 1) < \log_a(a^{x_2} - 1)$。

即 $f(x_1) < f(x_2)$，$f(x)$ 在 $(0, +\infty)$ 上单调递增。

**第3步：** 解不等式
> 📌 运用知识点：指数函数图象与性质

$f(x) > 1 = \log_a a$

因为 $\log_a t$ 递增，所以 $a^x - 1 > a$

$a^x > a + 1$

$x > \log_a(a + 1)$

解集为 $(\log_a(a+1), +\infty)$。

**⚠️ 易错提醒：** 解 $f(x) > 1$ 时，1要写成 $\log_a a$ 才能利用对数函数的单调性。

**💡 解题思路总结：** 复合函数单调性证明+对数不等式求解，关键是统一形式后利用单调性。
