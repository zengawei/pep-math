---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 4
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P16 复习参考题 第4题"
---

**题目：** 已知向量 $\vec{a} = (1, 1, 0)$，$\vec{b} = (0, 1, 1)$，$\vec{c} = (1, 0, 1)$。

(1) 判断 $\vec{a}, \vec{b}, \vec{c}$ 是否可以作为空间的一个基底。

(2) 若能，将向量 $\vec{p} = (2, 3, 2)$ 用 $\vec{a}, \vec{b}, \vec{c}$ 线性表示。

---

**解答：**

**第1步：** 判断是否构成基底
> 📌 运用知识点：空间向量基本定理

三个向量构成基底当且仅当它们不共面，即混合积不为零。

$$\vec{a} \cdot (\vec{b} \times \vec{c}) = \begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = 1(1-0) - 1(0-1) + 0 = 1 + 1 = 2 \neq 0$$

所以 $\vec{a}, \vec{b}, \vec{c}$ 不共面，可以作为空间的一个基底。

**第2步：** 线性表示 $\vec{p}$
> 📌 运用知识点：空间向量基本定理

设 $\vec{p} = x\vec{a} + y\vec{b} + z\vec{c}$，即：

$$(2, 3, 2) = x(1, 1, 0) + y(0, 1, 1) + z(1, 0, 1)$$

列方程组：
$$\begin{cases} x + z = 2 \\ x + y = 3 \\ y + z = 2 \end{cases}$$

由第一式 $z = 2 - x$，由第二式 $y = 3 - x$，代入第三式：$(3 - x) + (2 - x) = 2$，解得 $x = \dfrac{3}{2}$。

所以 $y = \dfrac{3}{2}$，$z = \dfrac{1}{2}$。

$$\vec{p} = \frac{3}{2}\vec{a} + \frac{3}{2}\vec{b} + \frac{1}{2}\vec{c}$$

**⚠️ 易错提醒：** 判断基底时不能只看任意两个向量不平行，必须验证三个向量不共面（混合积不为零）。解方程组时要仔细检验。

**💡 解题思路总结：** 空间向量基本定理指出三个不共面的向量构成基底，任一向量可唯一线性表示。判断共面性用混合积，求表示系数用待定系数法解方程组。
