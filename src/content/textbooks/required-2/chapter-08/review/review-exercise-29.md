---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正三棱柱 $ABC\text{-}A_1B_1C_1$ 中，所有棱长均为 $2$，$D$ 是 $CC_1$ 的中点。

(1) 求证：$AB_1 \perp A_1D$。

(2) 求二面角 $A\text{-}BD\text{-}A_1$ 的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：坐标法

取 $BC$ 中点 $M$，以 $M$ 为原点，$MB$ 沿 $x$ 轴，$MA$ 沿 $y$ 轴，竖直沿 $z$ 轴。

$B(1, 0, 0)$，$C(-1, 0, 0)$，$A(0, \sqrt{3}, 0)$

$B_1(1, 0, 2)$，$C_1(-1, 0, 2)$，$A_1(0, \sqrt{3}, 2)$

$D$ 是 $CC_1$ 中点：$D = (-1, 0, 1)$

**第2步：** 证明 $AB_1 \perp A_1D$
> 📌 运用知识点：向量垂直的条件

$\vec{AB_1} = B_1 - A = (1, -\sqrt{3}, 2)$

$\vec{A_1D} = D - A_1 = (-1, -\sqrt{3}, -1)$

$\vec{AB_1} \cdot \vec{A_1D} = -1 + 3 - 2 = 0$

所以 $AB_1 \perp A_1D$。

**第3步：** 求二面角 $A\text{-}BD\text{-}A_1$
> 📌 运用知识点：二面角的向量法

$\vec{BD} = (-2, 0, 1)$，$\vec{BA} = (-1, \sqrt{3}, 0)$，$\vec{BA_1} = (-1, \sqrt{3}, 2)$

平面 $ABD$ 的法向量 $\vec{n_1}$：$\vec{n_1} \cdot \vec{BD} = 0$，$\vec{n_1} \cdot \vec{BA} = 0$

$-2a + c = 0$，$-a + \sqrt{3}b = 0$

取 $a = \sqrt{3}$：$b = 1$，$c = 2\sqrt{3}$。$\vec{n_1} = (\sqrt{3}, 1, 2\sqrt{3})$

平面 $A_1BD$ 的法向量 $\vec{n_2}$：$\vec{n_2} \cdot \vec{BD} = 0$，$\vec{n_2} \cdot \vec{BA_1} = 0$

$-2a + c = 0$，$-a + \sqrt{3}b + 2c = 0$

$c = 2a$，$-a + \sqrt{3}b + 4a = 0$，$3a + \sqrt{3}b = 0$，$b = -\sqrt{3}a$

取 $a = 1$：$b = -\sqrt{3}$，$c = 2$。$\vec{n_2} = (1, -\sqrt{3}, 2)$

$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|\sqrt{3} - \sqrt{3} + 4\sqrt{3}|}{\sqrt{3+1+12} \times \sqrt{1+3+4}} = \frac{4\sqrt{3}}{\sqrt{16} \times \sqrt{8}} = \frac{4\sqrt{3}}{4 \times 2\sqrt{2}} = \frac{\sqrt{3}}{2\sqrt{2}} = \frac{\sqrt{6}}{4}$

$\theta = \arccos\frac{\sqrt{6}}{4}$

**💡 易错提醒：** 建坐标系时要正确计算各点坐标，特别是正三角形的高为 $\frac{\sqrt{3}}{2}a$。

**💡 解题思路总结：** 正棱柱中用坐标法处理垂直和角度问题，关键是正确建系和计算法向量。
