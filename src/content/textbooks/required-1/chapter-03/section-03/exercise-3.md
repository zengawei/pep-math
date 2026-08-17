---
type: exercise
textbook: required-1
chapter: 3
section: 3
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-properties
source: "自编"
references: "课标3.3.1"
---

**题目：** 已知 $f(x) = ax^2 + bx + c$ 是定义在 $[-3, 3]$ 上的偶函数，且 $f(1) = 3$，$f(2) = 7$，求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 利用偶函数条件
> 📌 运用知识点：函数的性质

$f(x)$ 为偶函数，则 $f(-x) = f(x)$ 对任意 $x \in [-3, 3]$ 成立。

$f(-x) = a(-x)^2 + b(-x) + c = ax^2 - bx + c$

$f(-x) = f(x)$ 即 $ax^2 - bx + c = ax^2 + bx + c$

所以 $-bx = bx$，即 $b = 0$。

**第2步：** 利用已知条件求 $a, c$
> 📌 运用知识点：函数的概念

$f(x) = ax^2 + c$

$f(1) = a + c = 3$

$f(2) = 4a + c = 7$

**第3步：** 解方程组
> 📌 运用知识点：一元二次方程

两式相减：$3a = 4$，$a = \frac{4}{3}$

$c = 3 - a = 3 - \frac{4}{3} = \frac{5}{3}$

所以 $f(x) = \frac{4}{3}x^2 + \frac{5}{3}$。

**💡 解题思路总结：** 偶函数中 $b=0$（奇次项系数为0），再利用已知点列方程求解。
