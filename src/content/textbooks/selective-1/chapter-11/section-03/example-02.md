---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 2
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P22 例2"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $D$ 为原点，$\overrightarrow{DA}, \overrightarrow{DC}, \overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。求证：$AC' \perp$ 平面 $A'BD$。

---

**解答：**

**第1步：** 确定各点坐标和向量
> 📌 运用知识点：用向量证明平行与垂直

$D(0,0,0)$，$A(1,0,0)$，$B(1,1,0)$，$C(0,1,0)$

$D'(0,0,1)$，$A'(1,0,1)$，$C'(0,1,1)$

$$\overrightarrow{AC'} = C' - A = (-1, 1, 1)$$

平面 $A'BD$ 内过点 $D$ 的两个不共线向量：

$$\overrightarrow{DA'} = (1, 0, 1), \quad \overrightarrow{DB} = (1, 1, 0)$$

**第2步：** 验证 $\overrightarrow{AC'}$ 与平面内两个向量都垂直
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{AC'} \cdot \overrightarrow{DA'} = (-1) \times 1 + 1 \times 0 + 1 \times 1 = -1 + 0 + 1 = 0$$

$$\overrightarrow{AC'} \cdot \overrightarrow{DB} = (-1) \times 1 + 1 \times 1 + 1 \times 0 = -1 + 1 + 0 = 0$$

$\overrightarrow{AC'}$ 与平面 $A'BD$ 内两个不共线向量 $\overrightarrow{DA'}$ 和 $\overrightarrow{DB}$ 都垂直，所以 $AC' \perp$ 平面 $A'BD$。

**💡 解题思路总结：** 证明线面垂直的核心方法：证明直线的方向向量与平面内两个不共线向量的数量积都为零。在正方体中，体对角线 $AC'$ 垂直于过其端点的某些截面，这是一个经典结论。
