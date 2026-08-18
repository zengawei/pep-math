---
type: exercise
textbook: required-2
chapter: 8
section: 4
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正三棱锥 $P\text{-}ABC$ 中，底面边长为 $2$，侧棱长为 $\sqrt{3}$。求证：平面 $PBC \perp$ 平面 $PAB$ 不成立，但 $PO \perp$ 底面 $ABC$（$O$ 为底面中心）。

更正：在正三棱锥 $P\text{-}ABC$ 中，底面边长为 $2$，$PA = PB = PC = \sqrt{3}$。求证：侧面 $PBC$ 与底面 $ABC$ 所成角的余弦值。

---

**解答：**

**第1步：** 求底面中心到边的距离
> 📌 运用知识点：正三角形的性质

底面 $ABC$ 是边长为 $2$ 的正三角形，中心 $O$ 到边 $BC$ 的距离：

$d = \frac{2\sqrt{3}}{6} \times 2 = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$

更正：正三角形中心到边的距离 $= \frac{a\sqrt{3}}{6} = \frac{2\sqrt{3}}{6} = \frac{\sqrt{3}}{3}$

**第2步：** 求棱锥的高
> 📌 运用知识点：正棱锥的高

$O$ 到底面顶点 $B$ 的距离 $= \frac{2\sqrt{3}}{3}$

$h = PO = \sqrt{PB^2 - OB^2} = \sqrt{3 - \frac{4}{3}} = \sqrt{\frac{5}{3}} = \frac{\sqrt{15}}{3}$

**第3步：** 求侧面与底面所成的角
> 📌 运用知识点：二面角

取 $BC$ 中点 $M$，连接 $PM$、$OM$。

$PM \perp BC$，$OM \perp BC$，$\angle PMO$ 是侧面 $PBC$ 与底面 $ABC$ 所成角的平面角。

$\tan\angle PMO = \frac{PO}{OM} = \frac{\frac{\sqrt{15}}{3}}{\frac{\sqrt{3}}{3}} = \frac{\sqrt{15}}{\sqrt{3}} = \sqrt{5}$

$\cos\angle PMO = \frac{1}{\sqrt{1 + 5}} = \frac{1}{\sqrt{6}} = \frac{\sqrt{6}}{6}$

**💡 易错提醒：** 正棱锥中，中心到顶点的距离和中心到边的距离不同。正三角形中心到顶点距离 $= \frac{a\sqrt{3}}{3}$，到边的距离 $= \frac{a\sqrt{3}}{6}$。

**💡 解题思路总结：** 求侧面与底面所成的角，关键是找到二面角的平面角。在正棱锥中，取底面边的中点，连接顶点和中心到该中点，构成的角就是所求角。
