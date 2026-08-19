---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 11
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P20 复习参考题 第11题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，证明：$BD' \perp$ 平面 $ACB'$。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设棱长为 $1$。

$B(1, 1, 0)$，$D'(0, 0, 1)$，$A(1, 0, 0)$，$C(0, 1, 0)$，$B'(1, 1, 1)$。

**第2步：** 求方向向量
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{BD'} = (-1, -1, 1)$$

$$\overrightarrow{AC} = (-1, 1, 0), \quad \overrightarrow{AB'} = (0, 1, 1)$$

**第3步：** 验证垂直
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{BD'} \cdot \overrightarrow{AC} = (-1)(-1) + (-1)(1) + 1 \times 0 = 1 - 1 + 0 = 0$$

$$\overrightarrow{BD'} \cdot \overrightarrow{AB'} = (-1)(0) + (-1)(1) + 1 \times 1 = 0 - 1 + 1 = 0$$

$\overrightarrow{BD'}$ 与平面 $ACB'$ 内两个不共线向量都垂直，所以 $BD' \perp$ 平面 $ACB'$。

**⚠️ 易错提醒：** 证明线面垂直需要验证与平面内两个不共线向量都垂直，不能只验证一个。同时要说明这两个向量确实不共线。

**💡 解题思路总结：** 向量法证明线面垂直：只需验证直线的方向向量与平面内两个不共线向量的数量积都为零。
