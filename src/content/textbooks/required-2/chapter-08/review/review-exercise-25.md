---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - spatial-position-relation
  - solid-geometry-basics
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中（棱长为 $2$），求异面直线 $A_1B$ 与 $B_1C$ 所成的角。

---

**解答：**

**第1步：** 找平行线
> 📌 运用知识点：异面直线所成角的概念

$A_1B \parallel D_1C$（$\vec{A_1B} = \vec{D_1C}$）。

异面直线 $A_1B$ 与 $B_1C$ 所成的角等于 $D_1C$ 与 $B_1C$ 所成的角，即 $\angle B_1CD_1$。

**第2步：** 计算 $\angle B_1CD_1$
> 📌 运用知识点：余弦定理

$B_1C = \sqrt{4 + 4} = 2\sqrt{2}$（矩形 $BCC_1B_1$ 的对角线）

$D_1C = A_1B = \sqrt{4 + 4} = 2\sqrt{2}$

$B_1D_1 = \sqrt{4 + 4} = 2\sqrt{2}$（正方形 $A_1B_1C_1D_1$ 的对角线）

$\triangle B_1CD_1$ 是等边三角形（三边均为 $2\sqrt{2}$）。

$\angle B_1CD_1 = 60°$

**验证：** 用向量法。$\vec{A_1B} = (2, 0, -2)$，$\vec{B_1C} = (0, 2, -2)$

$\cos\theta = \frac{|\vec{A_1B} \cdot \vec{B_1C}|}{|\vec{A_1B}||\vec{B_1C}|} = \frac{|0 + 0 + 4|}{\sqrt{8} \times \sqrt{8}} = \frac{4}{8} = \frac{1}{2}$

$\theta = 60°$ ✓

异面直线 $A_1B$ 与 $B_1C$ 所成的角为 $60°$。

**💡 易错提醒：** 异面直线所成的角取锐角（或直角），范围是 $(0°, 90°]$。

**💡 解题思路总结：** 求异面直线所成角的方法：①平移一条线使其与另一条相交；②用向量法直接计算。在正方体中，对角线的夹角常为 $60°$ 或 $90°$。
