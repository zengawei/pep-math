---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P27 复习参考题 第25题"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 为正方形，$PA \perp$ 底面 $ABCD$，$PA = AB = 2$。$E$ 为 $PB$ 的中点，$F$ 为 $PC$ 上的点。

(1) 当 $F$ 为 $PC$ 中点时，证明：$EF \parallel$ 平面 $ABCD$。

(2) 在 (1) 的条件下，求平面 $AEF$ 与平面 $ABCD$ 所成二面角的余弦值。

(3) 是否存在点 $F$ 使得 $AF \perp$ 平面 $PBC$？若存在，求出 $F$ 的位置。

---

**解答：**

**第1步：** 建立坐标系并证明 (1)
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AD}$、$\overrightarrow{AP}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$。

$E$ 为 $PB$ 中点：$E(1, 0, 1)$。$F$ 为 $PC$ 中点：$F(1, 1, 1)$。

$\overrightarrow{EF} = (0, 1, 0)$。

因为 $\overrightarrow{EF}$ 平行于 $y$ 轴，而平面 $ABCD$ 为 $xy$ 平面，$\overrightarrow{EF}$ 在平面 $ABCD$ 的方向内。又 $E$ 不在平面 $ABCD$ 上（$z = 1 \neq 0$），所以 $EF \parallel$ 平面 $ABCD$。

**第2步：** 求二面角 (2)
> 📌 运用知识点：用向量计算角

平面 $AEF$：$\overrightarrow{AE} = (1, 0, 1)$，$\overrightarrow{AF} = (1, 1, 1)$。

法向量 $\vec{n_1}$：$\begin{cases} x + z = 0 \\ x + y + z = 0 \end{cases}$，解得 $y = 0$，$z = -x$。取 $\vec{n_1} = (1, 0, -1)$。

平面 $ABCD$ 法向量 $\vec{n_2} = (0, 0, 1)$。

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$

二面角的余弦值为 $\dfrac{\sqrt{2}}{2}$。

**第3步：** 探究 (3)
> 📌 运用知识点：用向量证明平行与垂直

设 $F$ 在 $PC$ 上，$\overrightarrow{PF} = t\overrightarrow{PC} = t(2, 2, -2) = (2t, 2t, -2t)$，$F = (2t, 2t, 2-2t)$，$t \in [0, 1]$。

$\overrightarrow{AF} = (2t, 2t, 2-2t)$。

$AF \perp$ 平面 $PBC$ 需要 $\overrightarrow{AF} \perp \overrightarrow{PB}$ 且 $\overrightarrow{AF} \perp \overrightarrow{PC}$。

$\overrightarrow{PB} = (2, 0, -2)$：$\overrightarrow{AF} \cdot \overrightarrow{PB} = 4t + 0 - 2(2-2t) = 4t - 4 + 4t = 8t - 4 = 0 \Rightarrow t = \dfrac{1}{2}$。

$\overrightarrow{PC} = (2, 2, -2)$：$\overrightarrow{AF} \cdot \overrightarrow{PC} = 4t + 4t - 2(2-2t) = 8t - 4 + 4t = 12t - 4 = 0 \Rightarrow t = \dfrac{1}{3}$。

两个条件给出不同的 $t$ 值，矛盾。所以不存在这样的点 $F$。

**⚠️ 易错提醒：** 探究存在性问题时，需要同时满足所有条件。当不同条件给出矛盾结果时，说明不存在满足条件的点。

**💡 解题思路总结：** 存在性问题用待定参数法：设参数表示点的位置，将几何条件转化为方程。若方程组有解则存在，无解则不存在。
