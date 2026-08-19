---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P17 练习C 第1题"
---

**题目：** 已知 $\vec{a} = (1, 2, 3)$，$\vec{b} = (2, -1, 1)$，$\vec{c} = (1, 1, -2)$。

(1) 证明 $\vec{a}, \vec{b}, \vec{c}$ 可以作为空间的一个基底；

(2) 将向量 $\vec{d} = (4, 5, 6)$ 用 $\vec{a}, \vec{b}, \vec{c}$ 线性表示。

---

**解答：**

**第1步：** 证明 $\vec{a}, \vec{b}, \vec{c}$ 不共面
> 📌 运用知识点：空间向量基本定理

设 $\vec{c} = \lambda \vec{a} + \mu \vec{b}$，即 $(1, 1, -2) = \lambda(1, 2, 3) + \mu(2, -1, 1)$。

$$\begin{cases} \lambda + 2\mu = 1 \\ 2\lambda - \mu = 1 \\ 3\lambda + \mu = -2 \end{cases}$$

由第 (1)(2) 式：$\lambda + 2\mu = 1$ 和 $2\lambda - \mu = 1$。

解得 $\lambda = \frac{3}{5}$，$\mu = \frac{1}{5}$。

代入第 (3) 式：$3 \times \frac{3}{5} + \frac{1}{5} = \frac{10}{5} = 2 \neq -2$。矛盾！

所以 $\vec{c}$ 不能用 $\vec{a}, \vec{b}$ 线性表示，即 $\vec{a}, \vec{b}, \vec{c}$ 不共面，可以作为空间的基底。

**第2步：** 将 $\vec{d}$ 用基底表示
> 📌 运用知识点：空间向量的坐标运算

设 $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$：

$$(4, 5, 6) = x(1, 2, 3) + y(2, -1, 1) + z(1, 1, -2) = (x + 2y + z, 2x - y + z, 3x + y - 2z)$$

$$\begin{cases} x + 2y + z = 4 \quad \cdots (1) \\ 2x - y + z = 5 \quad \cdots (2) \\ 3x + y - 2z = 6 \quad \cdots (3) \end{cases}$$

$(2) - (1)$：$x - 3y = 1 \quad \cdots (4)$

$(1) \times 2 + (3)$：$5x + 5y = 14 \Rightarrow x + y = \frac{14}{5} \quad \cdots (5)$

由 (4)(5)：$x - 3y = 1$，$x + y = \frac{14}{5}$。

$(5) - (4)$：$4y = \frac{14}{5} - 1 = \frac{9}{5}$，$y = \frac{9}{20}$。

$x = \frac{14}{5} - \frac{9}{20} = \frac{56 - 9}{20} = \frac{47}{20}$。

$z = 4 - x - 2y = 4 - \frac{47}{20} - \frac{18}{20} = 4 - \frac{65}{20} = \frac{80 - 65}{20} = \frac{15}{20} = \frac{3}{4}$。

所以 $\vec{d} = \frac{47}{20}\vec{a} + \frac{9}{20}\vec{b} + \frac{3}{4}\vec{c}$。

**⚠️ 易错提醒：** 证明三个向量不共面时，只需证明其中一个不能用另外两个线性表示。解三元方程组要仔细，建议解后代回验证。

**💡 解题思路总结：** 证明基底：证不共面（反证法或直接验证）。用基底表示向量：设系数列方程组求解。
