---
type: example
textbook: selective-1
chapter: 11
section: 2
number: 1
knowledge_points:
  - space-vector-fundamental-theorem
  - space-vector-coordinate
source: "人教A版2019"
references: "待补充"
---

**例题：** 已知 $\vec{a} = (1, 1, 0)$，$\vec{b} = (0, 1, 1)$，$\vec{c} = (1, 0, 1)$，判断 $\vec{a}, \vec{b}, \vec{c}$ 能否作为空间向量的一组基底。若能，将 $\vec{d} = (2, 3, 4)$ 用 $\vec{a}, \vec{b}, \vec{c}$ 线性表示。

**解答：**

**第1步：** 判断是否共面
> 📌 运用知识点：空间向量基本定理

设 $x\vec{a} + y\vec{b} + z\vec{c} = \vec{0}$，即 $(x+z, x+y, y+z) = (0,0,0)$。

$\begin{cases} x + z = 0 \\ x + y = 0 \\ y + z = 0 \end{cases}$

由第一式 $z = -x$，由第二式 $y = -x$，代入第三式 $-x + (-x) = -2x = 0$，所以 $x = y = z = 0$。

唯一解为零，说明 $\vec{a}, \vec{b}, \vec{c}$ 不共面，可以作为基底。

**第2步：** 将 $\vec{d}$ 用基底表示
> 📌 运用知识点：空间向量基本定理

设 $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$，即 $(x+z, x+y, y+z) = (2, 3, 4)$。

$\begin{cases} x + z = 2 \\ x + y = 3 \\ y + z = 4 \end{cases}$

三式相加：$2(x+y+z) = 9$，$x+y+z = 9/2$。

$y = 9/2 - 2 = 5/2$，$z = 9/2 - 3 = 3/2$，$x = 9/2 - 4 = 1/2$。

所以 $\vec{d} = \frac{1}{2}\vec{a} + \frac{5}{2}\vec{b} + \frac{3}{2}\vec{c}$。
