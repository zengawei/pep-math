---
type: exercise
textbook: required-1
chapter: 2
section: 2
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-function
source: "人教A版2019"
references: "必修第一册 P38 习题 第8题"
---

**题目：** 已知不等式 $ax^2 + bx + 2 > 0$ 的解集为 $\left(-\frac{1}{2}, \frac{1}{3}\right)$，求 $a, b$ 的值。

---

**解答：**

**第1步：** 分析解集与根的关系
> 📌 运用知识点：一元二次不等式

解集为 $\left(-\frac{1}{2}, \frac{1}{3}\right)$（取中间），说明抛物线开口向下，即 $a < 0$。

$-\frac{1}{2}$ 和 $\frac{1}{3}$ 是方程 $ax^2 + bx + 2 = 0$ 的两个根。

**第2步：** 利用韦达定理
> 📌 运用知识点：一元二次方程

由韦达定理：

$$x_1 + x_2 = -\frac{1}{2} + \frac{1}{3} = -\frac{1}{6} = -\frac{b}{a}$$

$$x_1 \cdot x_2 = \left(-\frac{1}{2}\right) \times \frac{1}{3} = -\frac{1}{6} = \frac{2}{a}$$

**第3步：** 求解 $a, b$
> 📌 运用知识点：一元二次方程

由 $\frac{2}{a} = -\frac{1}{6}$，得 $a = -12$。

由 $-\frac{b}{a} = -\frac{1}{6}$，得 $\frac{b}{a} = \frac{1}{6}$，$b = \frac{a}{6} = \frac{-12}{6} = -2$。

所以 $a = -12$，$b = -2$。

**第4步：** 验证
> 📌 运用知识点：一元二次不等式

$-12x^2 - 2x + 2 > 0$，即 $12x^2 + 2x - 2 < 0$，$6x^2 + x - 1 < 0$。

$(2x + 1)(3x - 1) < 0$，解集为 $\left(-\frac{1}{2}, \frac{1}{3}\right)$。✓

**⚠️ 易错提醒：** 由解集的形式（取中间）要判断出 $a < 0$。如果忽略这一点，可能得到错误的 $a$ 值。

**💡 解题思路总结：** 已知解集求参数：①由解集形式判断 $a$ 的正负 ②解集的端点就是对应方程的根 ③用韦达定理建立方程组求解。
