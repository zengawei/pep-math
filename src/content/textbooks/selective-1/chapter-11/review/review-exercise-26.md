---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 26
difficulty: hard
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P27 复习参考题 第26题"
---

**题目：** 如图，在正三棱柱 $ABC\text{-}A'B'C'$ 中，$AB = AA' = 2$，$D$ 为 $A'B'$ 的中点，$E$ 在 $CC'$ 上。

(1) 当 $E$ 为 $CC'$ 中点时，求二面角 $D\text{-}AE\text{-}C$ 的大小。

(2) 当 $CE$ 为何值时，$A'E \perp$ 平面 $ABD$？

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

取 $BC$ 中点 $O$，以 $O$ 为原点，$\overrightarrow{OC}$ 为 $x$ 轴，$\overrightarrow{OA}$ 为 $y$ 轴，竖直方向为 $z$ 轴。

$B(-1, 0, 0)$，$C(1, 0, 0)$，$A(0, \sqrt{3}, 0)$，$A'(0, \sqrt{3}, 2)$，$B'(-1, 0, 2)$，$C'(1, 0, 2)$。

$D$ 为 $A'B'$ 中点：$D\left(-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}, 2\right)$。

**第2步：** 求 (1) 的二面角
> 📌 运用知识点：用向量计算角

$E$ 为 $CC'$ 中点：$E(1, 0, 1)$。

$\overrightarrow{AD} = \left(-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}, 2\right)$，$\overrightarrow{AE} = (1, -\sqrt{3}, 1)$。

平面 $DAE$ 法向量 $\vec{n_1}$：

$$\begin{cases} -\frac{1}{2}x - \frac{\sqrt{3}}{2}y + 2z = 0 \\ x - \sqrt{3}y + z = 0 \end{cases}$$

由第二式 $x = \sqrt{3}y - z$，代入第一式：$-\frac{1}{2}(\sqrt{3}y - z) - \frac{\sqrt{3}}{2}y + 2z = 0$

$-\frac{\sqrt{3}}{2}y + \frac{1}{2}z - \frac{\sqrt{3}}{2}y + 2z = 0 \Rightarrow -\sqrt{3}y + \frac{5}{2}z = 0$

取 $z = 2\sqrt{3}$，则 $y = 5$，$x = \sqrt{3}(5) - 2\sqrt{3} = 3\sqrt{3}$。

$\vec{n_1} = (3\sqrt{3}, 5, 2\sqrt{3})$。

平面 $AEC$：$\overrightarrow{AE} = (1, -\sqrt{3}, 1)$，$\overrightarrow{AC} = (1, -\sqrt{3}, 0)$。

法向量 $\vec{n_2}$：$\begin{cases} x - \sqrt{3}y + z = 0 \\ x - \sqrt{3}y = 0 \end{cases}$，解得 $z = 0$，$x = \sqrt{3}y$。

取 $\vec{n_2} = (\sqrt{3}, 1, 0)$。

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|9 + 5 + 0|}{\sqrt{27+25+12} \cdot \sqrt{3+1}} = \frac{14}{\sqrt{64} \cdot 2} = \frac{14}{16} = \frac{7}{8}$$

二面角大小为 $\arccos\dfrac{7}{8}$。

**第3步：** 求 (2) 中 $CE$ 的值
> 📌 运用知识点：用向量证明平行与垂直

设 $E(1, 0, t)$，$t \in [0, 2]$，$CE = t$。

$\overrightarrow{A'E} = (1, -\sqrt{3}, t-2)$。

$A'E \perp$ 平面 $ABD$ 需要 $\overrightarrow{A'E} \perp \overrightarrow{AB}$ 且 $\overrightarrow{A'E} \perp \overrightarrow{AD}$。

$\overrightarrow{AB} = (-1, -\sqrt{3}, 0)$：$\overrightarrow{A'E} \cdot \overrightarrow{AB} = -1 + 3 + 0 = 2 \neq 0$。

这说明 $A'E$ 不可能垂直于 $AB$。重新检查：应使 $A'E \perp$ 平面 $ABD$，需要 $A'E$ 垂直于平面内两个不共线向量。

$\overrightarrow{AB} = B - A = (-1, -\sqrt{3}, 0)$，$\overrightarrow{AD} = D - A = \left(-\frac{1}{2}, -\frac{\sqrt{3}}{2}, 2\right)$。

$\overrightarrow{A'E} \cdot \overrightarrow{AB} = -1 + 3 = 2 \neq 0$。

这说明 $A'E$ 无法垂直于平面 $ABD$。题目条件需要调整。

**⚠️ 易错提醒：** 正三棱柱建系时底面正三角形的高为 $\frac{\sqrt{3}}{2}a$，坐标计算要仔细。存在性问题需要先验证是否可能。

**💡 解题思路总结：** 正三棱柱问题建系要利用对称性。二面角用两面法向量的夹角公式。存在性探究用参数法转化为方程求解。
