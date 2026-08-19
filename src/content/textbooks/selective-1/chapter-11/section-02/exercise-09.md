---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P15 练习B 第2题"
---

**题目：** 已知 $\vec{a} = (1, 1, 0)$，$\vec{b} = (0, 1, 1)$，$\vec{c} = (1, 0, 1)$。若向量 $\vec{d} = (2, 3, 3)$ 可以用 $\vec{a}, \vec{b}, \vec{c}$ 线性表示，即 $\vec{d} = x\vec{a} + y\vec{b} + z\vec{c}$，求 $x, y, z$ 的值。

---

**解答：**

**第1步：** 列方程组
> 📌 运用知识点：空间向量基本定理

$$x\vec{a} + y\vec{b} + z\vec{c} = x(1, 1, 0) + y(0, 1, 1) + z(1, 0, 1) = (x + z, x + y, y + z)$$

令 $(x + z, x + y, y + z) = (2, 3, 3)$，得方程组：

$$\begin{cases} x + z = 2 \quad \cdots (1) \\ x + y = 3 \quad \cdots (2) \\ y + z = 3 \quad \cdots (3) \end{cases}$$

**第2步：** 解方程组
> 📌 运用知识点：空间向量的坐标运算

$(1) + (2) + (3)$：$2(x + y + z) = 8$，所以 $x + y + z = 4$。

由 $x + y + z = 4$ 和 $(3)$：$x = 4 - 3 = 1$。

由 $x + y + z = 4$ 和 $(1)$：$y = 4 - 2 = 2$。

由 $x + y + z = 4$ 和 $(2)$：$z = 4 - 3 = 1$。

所以 $x = 1$，$y = 2$，$z = 1$。

**验证：** $1 \cdot (1,1,0) + 2 \cdot (0,1,1) + 1 \cdot (1,0,1) = (1,1,0) + (0,2,2) + (1,0,1) = (2,3,3) = \vec{d}$。✓

**⚠️ 易错提醒：** 解三元一次方程组时，"三式相加"是一种常用技巧，可以简化计算。解完后一定要代回验证。

**💡 解题思路总结：** 用基向量线性表示目标向量，本质是解线性方程组。将向量等式按分量展开，得到关于系数的方程组，然后求解。
