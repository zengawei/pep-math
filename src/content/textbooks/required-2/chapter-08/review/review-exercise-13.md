---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - spatial-position-relation
  - solid-geometry-basics
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$ 是 $A_1B_1$ 的中点，$F$ 是 $B_1C_1$ 的中点。求证：$EF \parallel$ 平面 $ABCD$。

---

**解答：**

**第1步：** 证明 $EF \parallel A_1C_1$
> 📌 运用知识点：三角形中位线定理

在 $\triangle A_1B_1C_1$ 中，$E$ 是 $A_1B_1$ 中点，$F$ 是 $B_1C_1$ 中点。

由中位线定理：$EF \parallel A_1C_1$。

**第2步：** 证明 $A_1C_1 \parallel AC$
> 📌 运用知识点：正方体的性质

在正方体中，$A_1C_1 \parallel AC$（$AA_1C_1C$ 是矩形）。

所以 $EF \parallel AC$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：线面平行的判定定理

$AC \subset$ 平面 $ABCD$，$EF \not\subset$ 平面 $ABCD$，$EF \parallel AC$，

所以 $EF \parallel$ 平面 $ABCD$。

**💡 易错提醒：** 证明线面平行时，需要明确说明"面外线"和"面内线"。$EF$ 在上底面内，不在下底面 $ABCD$ 内。

**💡 解题思路总结：** 利用中位线定理得到 $EF \parallel A_1C_1$，再利用正方体性质 $A_1C_1 \parallel AC$，传递得到 $EF \parallel AC$。
