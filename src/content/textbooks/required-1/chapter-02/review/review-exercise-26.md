---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-function
source: "人教A版2019"
references: "必修第一册 P55 复习题 第26题"
---

**题目：** 已知 $f(x) = ax^2 + bx + c$，$f(1) = 0$，且 $a > b > c$。求 $f(x)$ 的两个零点之间的距离 $d$ 的取值范围。

---

**解答：**

**第1步：** 利用 $f(1) = 0$
> 📌 运用知识点：一元二次方程

$f(1) = a + b + c = 0$，所以 $c = -a - b$。

$x = 1$ 是一个零点。设另一个零点为 $x_0$。

**第2步：** 求另一个零点
> 📌 运用知识点：一元二次方程

由韦达定理：$1 \cdot x_0 = \frac{c}{a} = \frac{-a-b}{a} = -1 - \frac{b}{a}$

所以 $x_0 = -1 - \frac{b}{a}$。

两个零点之间的距离：

$$d = |1 - x_0| = \left|1 - \left(-1 - \frac{b}{a}\right)\right| = \left|2 + \frac{b}{a}\right|$$

**第3步：** 利用 $a > b > c$ 确定 $\frac{b}{a}$ 的范围
> 📌 运用知识点：不等式的性质

首先判断 $a$ 的符号：$a + b + c = 0$，$a > b > c$。

若 $a \leq 0$，则 $b < a \leq 0$，$c < b < 0$，三者之和 $< 0$，与 $a + b + c = 0$ 矛盾。

所以 $a > 0$。同理，若 $c \geq 0$，则 $a > b > c \geq 0$，三者之和 $> 0$，矛盾。所以 $c < 0$。

由 $c = -a - b$ 和 $a > b > c$：

$b > c = -a - b$，即 $2b > -a$，$\frac{b}{a} > -\frac{1}{2}$。

$a > b$，即 $\frac{b}{a} < 1$。

所以 $-\frac{1}{2} < \frac{b}{a} < 1$。

**第4步：** 求 $d$ 的范围
> 📌 运用知识点：一元二次不等式

$$d = \left|2 + \frac{b}{a}\right|$$

因为 $-\frac{1}{2} < \frac{b}{a} < 1$，所以 $\frac{3}{2} < 2 + \frac{b}{a} < 3$。

因为 $2 + \frac{b}{a} > 0$，所以 $d = 2 + \frac{b}{a} \in \left(\frac{3}{2}, 3\right)$。

**⚠️ 易错提醒：** 需要先判断 $a > 0$ 和 $c < 0$，才能正确地用不等式约束 $\frac{b}{a}$ 的范围。

**💡 解题思路总结：** 综合题：①利用已知条件（$f(1)=0$）简化问题 ②用韦达定理求零点 ③利用 $a > b > c$ 的约束确定参数范围 ④求出距离的范围。
