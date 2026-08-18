---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P63 练习"
---

**题目：** 已知函数 $f(x) = \sqrt{ax^2 + bx + c}$ 的定义域为 $[-1, 3]$，且 $f(2) = \sqrt{5}$，求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 分析定义域条件
> 📌 运用知识点：函数的概念

$f(x) = \sqrt{ax^2 + bx + c}$ 的定义域为 $[-1, 3]$，

说明 $ax^2 + bx + c \geq 0$ 的解集为 $[-1, 3]$。

这意味着 $ax^2 + bx + c = 0$ 的两根为 $x_1 = -1$，$x_2 = 3$，且 $a < 0$。

**第2步：** 利用韦达定理
> 📌 运用知识点：一元二次方程

$ax^2 + bx + c = a(x + 1)(x - 3) = a(x^2 - 2x - 3)$

展开得 $b = -2a$，$c = -3a$。

**第3步：** 利用 $f(2) = \sqrt{5}$ 求 $a$
> 📌 运用知识点：函数值的计算

$f(2) = \sqrt{a(2+1)(2-3)} = \sqrt{a \cdot 3 \cdot (-1)} = \sqrt{-3a} = \sqrt{5}$

所以 $-3a = 5$，$a = -\frac{5}{3}$。

**第4步：** 写出解析式
> 📌 运用知识点：函数的概念

$b = -2 \times \left(-\frac{5}{3}\right) = \frac{10}{3}$，$c = -3 \times \left(-\frac{5}{3}\right) = 5$

$$f(x) = \sqrt{-\frac{5}{3}x^2 + \frac{10}{3}x + 5}$$

**⚠️ 易错提醒：** 容易忘记判断 $a < 0$ 的条件。定义域为有限区间说明二次函数开口向下。

**💡 解题思路总结：** 已知定义域求解析式，先由定义域的端点确定二次函数的零点，再由其他条件确定系数。
