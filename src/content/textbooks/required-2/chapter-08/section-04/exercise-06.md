---
type: exercise
textbook: required-2
chapter: 8
section: 4
number: 6
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，求证：$A_1C \perp BD$。

---

**解答：**

**第1步：** 证明 $AC \perp BD$
> 📌 运用知识点：正方形的性质

在正方形 $ABCD$ 中，对角线 $AC \perp BD$。

**第2步：** 证明 $AA_1 \perp BD$
> 📌 运用知识点：线面垂直的性质

$AA_1 \perp$ 底面 $ABCD$，$BD \subset$ 底面 $ABCD$，

所以 $AA_1 \perp BD$。

**第3步：** 证明 $BD \perp$ 平面 $ACC_1A_1$
> 📌 运用知识点：线面垂直的判定定理

$AC$ 和 $AA_1$ 是平面 $ACC_1A_1$ 内两条相交直线（交于 $A$），

$BD \perp AC$ 且 $BD \perp AA_1$，

所以 $BD \perp$ 平面 $ACC_1A_1$。

**第4步：** 得出结论
> 📌 运用知识点：线面垂直的性质

$A_1C \subset$ 平面 $ACC_1A_1$，$BD \perp$ 平面 $ACC_1A_1$，

所以 $BD \perp A_1C$，即 $A_1C \perp BD$。

**💡 易错提醒：** 证明两条异面直线垂直，通常先证其中一条垂直于另一条所在的平面（或包含另一条的平面），再由线面垂直的性质得到线线垂直。

**💡 解题思路总结：** 在正方体中证明线线垂直的策略：利用正方形的对角线互相垂直和侧棱垂直于底面这两个基本性质，先证线面垂直，再得线线垂直。
