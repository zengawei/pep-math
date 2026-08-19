---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P24 练习A 第4题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $2$。以 $D$ 为原点，$\overrightarrow{DA}, \overrightarrow{DC}, \overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。求证：$BD' \perp$ 平面 $A'C'D$。

---

**解答：**

**第1步：** 确定各点坐标和向量
> 📌 运用知识点：用向量证明平行与垂直

$D(0,0,0)$，$A(2,0,0)$，$B(2,2,0)$，$C(0,2,0)$

$D'(0,0,2)$，$A'(2,0,2)$，$C'(0,2,2)$

$$\overrightarrow{BD'} = D' - B = (-2, -2, 2)$$

平面 $A'C'D$ 内过点 $D$ 的两个向量：

$$\overrightarrow{DA'} = (2, 0, 2), \quad \overrightarrow{DC'} = (0, 2, 2)$$

**第2步：** 验证 $\overrightarrow{BD'}$ 与平面内两个向量都垂直
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{BD'} \cdot \overrightarrow{DA'} = (-2) \times 2 + (-2) \times 0 + 2 \times 2 = -4 + 0 + 4 = 0$$

$$\overrightarrow{BD'} \cdot \overrightarrow{DC'} = (-2) \times 0 + (-2) \times 2 + 2 \times 2 = 0 - 4 + 4 = 0$$

$\overrightarrow{BD'}$ 与平面 $A'C'D$ 内两个不共线向量 $\overrightarrow{DA'}$ 和 $\overrightarrow{DC'}$ 都垂直，所以 $BD' \perp$ 平面 $A'C'D$。

**⚠️ 易错提醒：** 证明线面垂直需要证明方向向量与平面内**两个不共线**向量都垂直，而不是只与一个垂直。同时要确认这两个向量确实不共线（$\overrightarrow{DA'}$ 和 $\overrightarrow{DC'}$ 显然不成比例）。

**💡 解题思路总结：** 证明线面垂直的向量方法：证明直线的方向向量与平面内两个不共线向量的数量积都为零。
