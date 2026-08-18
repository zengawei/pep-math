---
type: exercise
textbook: required-1
chapter: 3
section: 3
number: 2
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "课标3.3.1"
---

**题目：** 已知 $f(x)$ 是定义在 $\mathbb{R}$ 上的奇函数，当 $x > 0$ 时 $f(x) = x^2 - 2x$，求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 利用奇函数性质求 $x < 0$ 时的表达式
> 📌 运用知识点：函数的性质

当 $x < 0$ 时，$-x > 0$，$f(-x) = (-x)^2 - 2(-x) = x^2 + 2x$。

因为 $f(x)$ 为奇函数，$f(-x) = -f(x)$，

所以 $f(x) = -f(-x) = -(x^2 + 2x) = -x^2 - 2x$。

**第2步：** 确定 $f(0)$
> 📌 运用知识点：函数的性质

奇函数若在 $x=0$ 处有定义，则 $f(0) = -f(0)$，即 $f(0) = 0$。

**第3步：** 写出完整解析式
> 📌 运用知识点：函数的概念

$$f(x) = \begin{cases} x^2 - 2x, & x > 0 \\ 0, & x = 0 \\ -x^2 - 2x, & x < 0 \end{cases}$$
