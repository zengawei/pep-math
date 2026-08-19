---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 5
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P17 复习参考题 第5题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，$E$ 为 $BB'$ 的中点，$F$ 为 $DD'$ 的中点。用向量法证明：$AE \parallel C'F$。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：用向量证明平行与垂直

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设正方体棱长为 $2$。

各点坐标：$A(2, 0, 0)$，$E(2, 2, 1)$，$C'(0, 2, 2)$，$F(0, 0, 1)$。

**第2步：** 计算方向向量
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{AE} = E - A = (2-2, 2-0, 1-0) = (0, 2, 1)$$

$$\overrightarrow{C'F} = F - C' = (0-0, 0-2, 1-2) = (0, -2, -1)$$

**第3步：** 验证平行
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{C'F} = (0, -2, -1) = -1 \cdot (0, 2, 1) = -\overrightarrow{AE}$$

因为 $\overrightarrow{C'F} = -\overrightarrow{AE}$，即两向量共线，所以 $AE \parallel C'F$。

**⚠️ 易错提醒：** 向量平行只说明方向相同或相反，要确认线段平行（而非共线），还需验证两条直线不重合。本题中 $A, E, C', F$ 四点不共线，故为平行。

**💡 解题思路总结：** 用向量法证明两直线平行，只需证明它们的方向向量成比例（共线）。建立合适的坐标系是关键第一步。
