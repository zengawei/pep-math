---
type: example
textbook: required-2
chapter: 7
section: 2
number: 4
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
---

**例题：** 设复数 $z$ 满足 $z + |z| = 2 + i$，求 $z$。

---

**解答：**

**第1步：** 设 $z = a + bi$
> 📌 运用知识点：复数的概念

设 $z = a + bi$（$a, b \in \mathbb{R}$），$|z| = \sqrt{a^2 + b^2}$。

代入条件：$a + bi + \sqrt{a^2 + b^2} = 2 + i$

**第2步：** 比较实部和虚部
> 📌 运用知识点：复数相等

实部：$a + \sqrt{a^2 + b^2} = 2 \quad \cdots (1)$

虚部：$b = 1 \quad \cdots (2)$

**第3步：** 求解
> 📌 运用知识点：解方程

将 $b = 1$ 代入 (1)：$a + \sqrt{a^2 + 1} = 2$

$\sqrt{a^2 + 1} = 2 - a$

两边平方（需 $2 - a \geq 0$，即 $a \leq 2$）：

$a^2 + 1 = 4 - 4a + a^2$

$1 = 4 - 4a$

$4a = 3$，$a = \frac{3}{4}$

验证：$a = \frac{3}{4} \leq 2$ ✓

$z = \frac{3}{4} + i$

**💡 方法总结：** 设 $z = a + bi$，利用 $|z|$ 是实数的特点，将条件分为实部和虚部两个方程。注意平方后验证条件。
