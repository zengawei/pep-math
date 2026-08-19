---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 5
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P27 例5"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $2$。以 $D$ 为原点建立空间直角坐标系。求平面 $A'BD$ 的一个法向量。

---

**解答：**

**第1步：** 确定各点坐标和平面内向量
> 📌 运用知识点：用向量证明平行与垂直

$D(0,0,0)$，$A(2,0,0)$，$B(2,2,0)$，$A'(2,0,2)$

$$\overrightarrow{DA'} = (2, 0, 2), \quad \overrightarrow{DB} = (2, 2, 0)$$

**第2步：** 设法向量 $\vec{n} = (x, y, z)$，列方程
> 📌 运用知识点：用向量证明平行与垂直

法向量与平面内任意向量垂直：

$$\vec{n} \cdot \overrightarrow{DA'} = 2x + 2z = 0 \quad \Rightarrow \quad x = -z \quad \cdots (1)$$

$$\vec{n} \cdot \overrightarrow{DB} = 2x + 2y = 0 \quad \Rightarrow \quad y = -x \quad \cdots (2)$$

**第3步：** 求解
> 📌 运用知识点：用向量证明平行与垂直

由 (1)(2)：$y = -x = z$。取 $z = 1$，则 $x = -1$，$y = 1$。

所以平面 $A'BD$ 的一个法向量为 $\vec{n} = (-1, 1, 1)$。

**验证：** $\vec{n} \cdot \overrightarrow{DA'} = -2 + 0 + 2 = 0$ ✓，$\vec{n} \cdot \overrightarrow{DB} = -2 + 2 + 0 = 0$ ✓

**💡 解题思路总结：** 求法向量的标准步骤：① 找平面内两个不共线向量；② 设法向量 $(x,y,z)$；③ 列两个垂直方程；④ 令一个分量为特定值（通常取 $1$ 或使结果为整数）求解。法向量不唯一，任何非零倍数都是法向量。
