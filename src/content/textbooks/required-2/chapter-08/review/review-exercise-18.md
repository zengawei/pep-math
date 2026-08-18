---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正三棱柱 $ABC\text{-}A_1B_1C_1$ 中，$D$ 是 $A_1C_1$ 的中点。求证：$BC_1 \parallel$ 平面 $AB_1D$。

---

**解答：**

**第1步：** 连接辅助线
> 📌 运用知识点：线面平行的判定定理

设 $A_1B$ 与 $AB_1$ 交于点 $O$。

在矩形 $ABB_1A_1$ 中，$O$ 是 $A_1B$ 的中点，也是 $AB_1$ 的中点。

连接 $OD$。

**第2步：** 证明 $OD \parallel BC_1$
> 📌 运用知识点：三角形中位线定理

在 $\triangle A_1BC_1$ 中，$O$ 是 $A_1B$ 的中点，$D$ 是 $A_1C_1$ 的中点。

由中位线定理：$OD \parallel BC_1$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：线面平行的判定定理

$OD \subset$ 平面 $AB_1D$，$BC_1 \not\subset$ 平面 $AB_1D$，$OD \parallel BC_1$，

所以 $BC_1 \parallel$ 平面 $AB_1D$。

**💡 易错提醒：** 需要确认 $O$ 在平面 $AB_1D$ 内。$O$ 在 $AB_1$ 上，$AB_1 \subset$ 平面 $AB_1D$，所以 $O \in$ 平面 $AB_1D$。

**💡 解题思路总结：** 在棱柱中，对角面的对角线交于中点。利用这个中点和已知中点构造中位线。
