---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P28 复习参考题 第27题"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，$PA \perp$ 底面 $ABCD$，底面 $ABCD$ 为正方形，$PA = AB = 2$。$M$ 为 $PD$ 的中点。

(1) 证明：$PB \parallel$ 平面 $MAC$。

(2) 求平面 $MAC$ 与平面 $PCD$ 所成二面角的余弦值。

(3) 求点 $B$ 到平面 $PCD$ 的距离。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AD}$、$\overrightarrow{AP}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$，$M(0,1,1)$。

**第2步：** 证明 $PB \parallel$ 平面 $MAC$
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{PB} = (2, 0, -2)$。

$\overrightarrow{AM} = (0, 1, 1)$，$\overrightarrow{AC} = (2, 2, 0)$。

设 $\overrightarrow{PB} = \lambda\overrightarrow{AM} + \mu\overrightarrow{AC}$：

$$\begin{cases} 2\mu = 2 \\ \lambda + 2\mu = 0 \\ \lambda = -2 \end{cases}$$

解得 $\mu = 1$，$\lambda = -2$。验证：$(-2) + 2(1) = 0$ ✓，$(-2) = -2$ ✓。

$\overrightarrow{PB}$ 可由 $\overrightarrow{AM}$ 和 $\overrightarrow{AC}$ 线性表示，且 $P$ 不在平面 $MAC$ 上，所以 $PB \parallel$ 平面 $MAC$。

**第3步：** 求二面角和距离
> 📌 运用知识点：用向量计算角

平面 $MAC$ 法向量 $\vec{n_1}$：$\vec{n_1} \cdot \overrightarrow{AM} = 0 \Rightarrow y + z = 0$；$\vec{n_1} \cdot \overrightarrow{AC} = 0 \Rightarrow 2x + 2y = 0$。

取 $\vec{n_1} = (1, -1, 1)$。

平面 $PCD$：$\overrightarrow{PC} = (2, 2, -2)$，$\overrightarrow{PD} = (0, 2, -2)$。

法向量 $\vec{n_2}$：$\begin{cases} 2x + 2y - 2z = 0 \\ 2y - 2z = 0 \end{cases}$，解得 $y = z$，$x = 0$。取 $\vec{n_2} = (0, 1, 1)$。

二面角余弦值：$\cos\theta = \dfrac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \dfrac{|0 - 1 + 1|}{\sqrt{3} \cdot \sqrt{2}} = 0$。

二面角为 $90°$，余弦值为 $0$。

点 $B$ 到平面 $PCD$ 的距离：取平面上点 $P(0,0,2)$，$\overrightarrow{PB} = (2, 0, -2)$。

$$d = \frac{|\overrightarrow{PB} \cdot \vec{n_2}|}{|\vec{n_2}|} = \frac{|0 + 0 - 2|}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$$

**⚠️ 易错提醒：** 证明线面平行后，求距离时要用平面上的点到目标点的向量。法向量方向不唯一，但不影响距离计算结果。

**💡 解题思路总结：** 综合题分步进行：先证平行（线性表示），再求二面角（法向量夹角），最后求距离（投影公式）。建系后各步骤都是标准的向量运算。
