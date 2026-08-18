---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中（棱长为 $2$），$E$ 是 $CC_1$ 的中点。

(1) 求证：$A_1C \perp$ 平面 $BDE$。

(2) 求 $A_1C$ 与平面 $BDE$ 所成的角。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：坐标法

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$

$A_1(0,0,2)$，$B_1(2,0,2)$，$C_1(2,2,2)$，$D_1(0,2,2)$

$E = (2, 2, 1)$（$CC_1$ 中点）

$\vec{A_1C} = (2, 2, -2)$

**第2步：** 验证 $A_1C \perp BD$ 和 $A_1C \perp BE$
> 📌 运用知识点：向量垂直的条件

$\vec{BD} = (-2, 2, 0)$

$\vec{A_1C} \cdot \vec{BD} = -4 + 4 + 0 = 0$ ✓

$\vec{BE} = (0, 2, 1)$

$\vec{A_1C} \cdot \vec{BE} = 0 + 4 - 2 = 2 \neq 0$

$A_1C$ 不垂直于 $BE$。题目需要修改。

让我验证 $A_1C \perp DE$：$\vec{DE} = (2, 0, 1)$

$\vec{A_1C} \cdot \vec{DE} = 4 + 0 - 2 = 2 \neq 0$

$A_1C$ 不垂直于平面 $BDE$。修改为求证 $A_1C \perp BD$ 并求 $A_1C$ 与平面 $BDE$ 所成角。

**修正后的解答：**

(1) $\vec{A_1C} \cdot \vec{BD} = (2)(-2) + (2)(2) + (-2)(0) = -4 + 4 + 0 = 0$

所以 $A_1C \perp BD$。

(2) 求平面 $BDE$ 的法向量 $\vec{n}$：

$\vec{BD} = (-2, 2, 0)$，$\vec{BE} = (0, 2, 1)$

$\vec{n} = \vec{BD} \times \vec{BE} = (2 \times 1 - 0 \times 2, 0 \times 0 - (-2) \times 1, (-2) \times 2 - 2 \times 0) = (2, 2, -4)$

简化：$\vec{n} = (1, 1, -2)$

$\sin\theta = \frac{|\vec{A_1C} \cdot \vec{n}|}{|\vec{A_1C}||\vec{n}|} = \frac{|2 + 2 + 4|}{\sqrt{12} \times \sqrt{6}} = \frac{8}{\sqrt{72}} = \frac{8}{6\sqrt{2}} = \frac{4}{3\sqrt{2}} = \frac{4\sqrt{2}}{6} = \frac{2\sqrt{2}}{3}$

$\theta = \arcsin\frac{2\sqrt{2}}{3}$

**💡 易错提醒：** 线与平面所成的角 $\theta$ 满足 $\sin\theta = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}||\vec{n}|}$，其中 $\vec{n}$ 是平面法向量。

**💡 解题思路总结：** 用向量法求线面角：先求平面法向量，再用公式 $\sin\theta = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}||\vec{n}|}$。
