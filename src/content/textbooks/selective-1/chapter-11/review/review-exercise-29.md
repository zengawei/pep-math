---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P28 复习参考题 第29题"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 为菱形，$\angle BAD = 60°$，$PA = PD = AD = 2$，$PB = \sqrt{6}$。

(1) 证明：平面 $PAD \perp$ 平面 $ABCD$。

(2) 求二面角 $P\text{-}AB\text{-}D$ 的正切值。

---

**解答：**

**第1步：** 分析几何关系
> 📌 运用知识点：用向量证明平行与垂直

取 $AD$ 中点 $O$。因为 $PA = PD = 2$，所以 $PO \perp AD$。

$PO = \sqrt{PA^2 - OA^2} = \sqrt{4 - 1} = \sqrt{3}$。

底面 $ABCD$ 为菱形，$\angle BAD = 60°$，$AD = 2$，则 $\triangle ABD$ 为等边三角形，$BD = 2$。

$BO \perp AD$（等边三角形中线即高），$BO = \sqrt{3}$。

以 $O$ 为原点，$\overrightarrow{OD}$ 为 $x$ 轴，$\overrightarrow{OB}$ 为 $y$ 轴，$\overrightarrow{OP}$ 为 $z$ 轴。

$O(0,0,0)$，$D(1,0,0)$，$A(-1,0,0)$，$B(0,\sqrt{3},0)$，$P(0,0,\sqrt{3})$。

验证 $PB$：$PB = \sqrt{0 + 3 + 3} = \sqrt{6}$ ✓。

**第2步：** 证明面面垂直
> 📌 运用知识点：用向量证明平行与垂直

$PO \perp AD$（已证），$PO \perp OB$（因为 $PO$ 沿 $z$ 轴，$OB$ 沿 $y$ 轴）。

所以 $PO \perp$ 平面 $ABCD$。又 $PO \subset$ 平面 $PAD$，所以平面 $PAD \perp$ 平面 $ABCD$。

**第3步：** 求二面角 $P\text{-}AB\text{-}D$
> 📌 运用知识点：用向量计算角

$\overrightarrow{AB} = (1, \sqrt{3}, 0)$，$\overrightarrow{AP} = (1, 0, \sqrt{3})$。

平面 $PAB$ 法向量 $\vec{n_1}$：$\begin{cases} x + \sqrt{3}y = 0 \\ x + \sqrt{3}z = 0 \end{cases}$，解得 $y = z = -\dfrac{x}{\sqrt{3}}$。

取 $\vec{n_1} = (\sqrt{3}, -1, -1)$。

平面 $ABD$（底面）法向量 $\vec{n_2} = (0, 0, 1)$。

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{1}{\sqrt{3+1+1}} = \frac{1}{\sqrt{5}}$$

$$\tan\theta = \frac{\sqrt{1 - \frac{1}{5}}}{\frac{1}{\sqrt{5}}} = \frac{\frac{2}{\sqrt{5}}}{\frac{1}{\sqrt{5}}} = 2$$

二面角 $P\text{-}AB\text{-}D$ 的正切值为 $2$。

**⚠️ 易错提醒：** 证明面面垂直时，需要找到一个平面内的直线垂直于另一个平面。本题关键是发现 $PO \perp$ 底面。求正切值时注意从余弦值转换。

**💡 解题思路总结：** 菱形问题利用对角线的垂直关系建系。面面垂直的证明思路：找一条线垂直于一个面，且该线在另一个面内。
