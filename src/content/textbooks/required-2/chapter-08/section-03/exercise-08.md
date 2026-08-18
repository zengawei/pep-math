---
type: exercise
textbook: required-2
chapter: 8
section: 3
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$、$F$ 分别是 $BB_1$、$DD_1$ 的中点。求证：$A_1C \parallel$ 平面 $BDE$。

---

**解答：**

**第1步：** 连接辅助线
> 📌 运用知识点：线面平行的判定定理

连接 $A_1C_1$，设 $A_1C_1$ 与 $B_1D_1$ 交于点 $O_1$（$O_1$ 是 $A_1C_1$ 中点）。

连接 $AC$，设 $AC$ 与 $BD$ 交于点 $O$（$O$ 是 $AC$ 中点）。

连接 $A_1O$。

**第2步：** 证明 $A_1C \parallel$ 平面 $BDE$ 中的某条线
> 📌 运用知识点：线面平行的判定

实际上，连接 $OE$。

在正方体中，$O$ 是 $AC$ 中点，$E$ 是 $BB_1$ 中点。

设正方体棱长为 $2$，以 $A$ 为原点建立坐标系：
$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$
$A_1(0,0,2)$，$B_1(2,0,2)$，$C_1(2,2,2)$，$D_1(0,2,2)$

$O = (1,1,0)$，$E = (2,0,1)$，$F = (0,2,1)$

$\vec{A_1C} = (2,2,-2)$

$\vec{OE} = (1,-1,1)$

$\vec{A_1C} = 2\vec{OE}$，所以 $A_1C \parallel OE$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：线面平行的判定定理

$OE \subset$ 平面 $BDE$（$O$ 在 $BD$ 上，$E$ 在平面 $BDE$ 上），$A_1C \not\subset$ 平面 $BDE$，$A_1C \parallel OE$，

所以 $A_1C \parallel$ 平面 $BDE$。

**💡 易错提醒：** 在正方体中证明平行关系，坐标法是最可靠的方法。关键是找到正确的辅助线（或辅助向量）。

**💡 解题思路总结：** 证明线面平行的策略：①在目标平面内找一条线与已知线平行；②可以用向量法验证方向向量成比例。
