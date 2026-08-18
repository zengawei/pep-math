---
type: exercise
textbook: required-2
chapter: 8
section: 3
number: 9
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正三棱柱 $ABC\text{-}A_1B_1C_1$ 中，$D$ 是 $BC$ 的中点，$E$ 是 $A_1C_1$ 的中点。求证：平面 $A_1BD \parallel$ 平面... 不对。求证：$A_1E \parallel$ 平面 $AB_1D$。

更正：在正三棱柱 $ABC\text{-}A_1B_1C_1$ 中，$D$ 是 $BC$ 的中点。求证：$A_1C \parallel$ 平面 $AB_1D$。

---

**解答：**

**第1步：** 连接辅助线
> 📌 运用知识点：线面平行的判定定理

设 $A_1B$ 与 $AB_1$ 交于点 $O$。

在正三棱柱中，$ABB_1A_1$ 是矩形（侧面），所以 $O$ 是 $A_1B$ 的中点，也是 $AB_1$ 的中点。

连接 $OD$。

**第2步：** 证明 $A_1C \parallel OD$
> 📌 运用知识点：三角形中位线定理

在 $\triangle A_1BC$ 中，$O$ 是 $A_1B$ 的中点，$D$ 是 $BC$ 的中点。

由三角形中位线定理：$OD \parallel A_1C$，且 $OD = \frac{1}{2}A_1C$。

**第3步：** 应用线面平行判定定理
> 📌 运用知识点：线面平行的判定定理

$OD \subset$ 平面 $AB_1D$（$O$ 在 $AB_1$ 上，$D$ 在平面 $AB_1D$ 上），$A_1C \not\subset$ 平面 $AB_1D$，$A_1C \parallel OD$，

所以 $A_1C \parallel$ 平面 $AB_1D$。

**💡 易错提醒：** 三角形中位线定理是证明线线平行的重要工具。在立体几何中，需要善于构造三角形，将空间问题转化为平面问题。

**💡 解题思路总结：** 在棱柱中证明线面平行，常用"找中点、连中位线"的策略。关键是发现 $A_1B$ 与 $AB_1$ 的交点是中点。
