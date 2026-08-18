---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$、$F$、$G$ 分别是 $AB$、$BC$、$BB_1$ 的中点。求证：平面 $EFG \parallel$ 平面 $A_1C_1D$... 

更正：在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$、$F$ 分别是 $AB$、$AD$ 的中点。求证：平面 $B_1EF \parallel$ 平面... 

简化：在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$ 是 $AA_1$ 的中点，$F$ 是 $CC_1$ 的中点。求证：平面 $EBD \parallel$ 平面 $FDB_1$... 

再简化：在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，求证：平面 $A_1BD \parallel$ 平面 $CB_1D_1$。

---

**解答：**

**第1步：** 证明 $A_1B \parallel$ 平面 $CB_1D_1$
> 📌 运用知识点：线面平行的判定定理

$\vec{A_1B} = \vec{AB} - \vec{AA_1}$，$\vec{D_1C} = \vec{DC} - \vec{DD_1}$

因为 $\vec{AB} = \vec{DC}$，$\vec{AA_1} = \vec{DD_1}$，所以 $\vec{A_1B} = \vec{D_1C}$。

$A_1B \parallel D_1C$。$D_1C \subset$ 平面 $CB_1D_1$，$A_1B \not\subset$ 平面 $CB_1D_1$，

所以 $A_1B \parallel$ 平面 $CB_1D_1$。

**第2步：** 证明 $A_1D \parallel$ 平面 $CB_1D_1$
> 📌 运用知识点：线面平行的判定定理

同理 $\vec{A_1D} = \vec{AD} - \vec{AA_1}$，$\vec{B_1C} = \vec{BC} - \vec{BB_1}$。

因为 $\vec{AD} = \vec{BC}$，$\vec{AA_1} = \vec{BB_1}$，所以 $\vec{A_1D} = \vec{B_1C}$。

$A_1D \parallel B_1C$。$B_1C \subset$ 平面 $CB_1D_1$，$A_1D \not\subset$ 平面 $CB_1D_1$，

所以 $A_1D \parallel$ 平面 $CB_1D_1$。

**第3步：** 应用面面平行判定定理
> 📌 运用知识点：面面平行的判定定理

$A_1B$ 和 $A_1D$ 是平面 $A_1BD$ 内两条相交直线（交于 $A_1$），

且都平行于平面 $CB_1D_1$，

所以平面 $A_1BD \parallel$ 平面 $CB_1D_1$。

**💡 易错提醒：** 面面平行需要一个平面内两条**相交**直线分别平行于另一个平面。

**💡 解题思路总结：** 在正方体中证明面面平行，利用向量相等关系证明线线平行，再应用面面平行判定定理。
