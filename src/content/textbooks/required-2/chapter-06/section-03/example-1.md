---
type: example
textbook: required-2
chapter: 6
section: 3
number: 1
knowledge_points:
  - vector-coordinate
---

**例题：** 已知 $\vec{a} = (2, 3)$，$\vec{b} = (4, -1)$，若 $\vec{c} = \lambda\vec{a} + \mu\vec{b}$，且 $\vec{c} = (8, 5)$，求 $\lambda, \mu$ 的值。

**解答：**

**第1步：** 用坐标表示 $\vec{c}$
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\vec{c} = \lambda(2, 3) + \mu(4, -1) = (2\lambda + 4\mu, 3\lambda - \mu)$

**第2步：** 列方程组
> 📌 运用知识点：平面向量的基本定理及坐标表示

$\begin{cases} 2\lambda + 4\mu = 8 \\ 3\lambda - \mu = 5 \end{cases}$

由第二式：$\mu = 3\lambda - 5$

代入第一式：$2\lambda + 4(3\lambda - 5) = 8$

$2\lambda + 12\lambda - 20 = 8$

$14\lambda = 28$，$\lambda = 2$

$\mu = 3 \times 2 - 5 = 1$

所以 $\lambda = 2$，$\mu = 1$。

**💡 解题思路总结：** 利用平面向量基本定理，将向量等式转化为坐标方程组，通过解方程组求出未知参数。
