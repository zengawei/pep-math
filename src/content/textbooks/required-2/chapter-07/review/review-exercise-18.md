---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 18
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 设复数 $z$ 满足 $z + \frac{1}{z} = 1$，求 $|z|$ 的值。

---

**解答：**

**第1步：** 设 $z = a + bi$
> 📌 运用知识点：复数的概念

设 $z = a + bi$（$a, b \in \mathbb{R}$，$z \neq 0$）。

$z + \frac{1}{z} = 1$

$\frac{1}{z} = \frac{\bar{z}}{|z|^2} = \frac{a - bi}{a^2 + b^2}$

**第2步：** 代入条件
> 📌 运用知识点：复数相等

$z + \frac{1}{z} = (a + bi) + \frac{a - bi}{a^2 + b^2} = 1$

实部：$a + \frac{a}{a^2 + b^2} = 1 \quad \cdots (1)$

虚部：$b - \frac{b}{a^2 + b^2} = 0 \quad \cdots (2)$

**第3步：** 求解
> 📌 运用知识点：解方程

由 (2)：$b\left(1 - \frac{1}{a^2 + b^2}\right) = 0$

情况一：$b = 0$，则 $z = a$ 是实数，$a + \frac{1}{a} = 1$，$a^2 - a + 1 = 0$，$\Delta = -3 < 0$，无实数解。

情况二：$a^2 + b^2 = 1$，即 $|z|^2 = 1$，$|z| = 1$。

验证：$|z| = 1$ 时 $\frac{1}{z} = \bar{z}$，$z + \bar{z} = 2a = 1$，$a = \frac{1}{2}$，$b^2 = 1 - \frac{1}{4} = \frac{3}{4}$，$b = \pm\frac{\sqrt{3}}{2}$。

$z = \frac{1}{2} \pm \frac{\sqrt{3}}{2}i$，满足条件 ✓

$|z| = 1$

**💡 易错提醒：** $b = 0$ 时无实数解，所以必须 $|z| = 1$。

**💡 解题思路总结：** 利用 $\frac{1}{z} = \frac{\bar{z}}{|z|^2}$ 将条件分为实部和虚部方程，分类讨论求解。
