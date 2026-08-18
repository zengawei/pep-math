---
type: exercise
textbook: required-2
chapter: 8
section: 4
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 是正方形，$PA \perp$ 底面 $ABCD$，$PA = AB = 2$。

(1) 求证：$BD \perp$ 平面 $PAC$。

(2) 求证：平面 $PBD \perp$ 平面 $PAC$。

(3) 求二面角 $B\text{-}PC\text{-}D$ 的大小。

---

**解答：**

**第1步：** 证明 $BD \perp$ 平面 $PAC$
> 📌 运用知识点：线面垂直的判定定理

在正方形 $ABCD$ 中，$BD \perp AC$。

$PA \perp$ 底面 $ABCD$，$BD \subset$ 底面 $ABCD$，所以 $PA \perp BD$。

$AC$ 和 $PA$ 是平面 $PAC$ 内两条相交直线（交于 $A$），

$BD \perp AC$ 且 $BD \perp PA$，

所以 $BD \perp$ 平面 $PAC$。

**第2步：** 证明平面 $PBD \perp$ 平面 $PAC$
> 📌 运用知识点：面面垂直的判定定理

$BD \subset$ 平面 $PBD$，$BD \perp$ 平面 $PAC$，

由面面垂直判定定理：平面 $PBD \perp$ 平面 $PAC$。

**第3步：** 求二面角 $B\text{-}PC\text{-}D$
> 📌 运用知识点：二面角的求解

建立坐标系：$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$。

$\vec{PB} = (2,0,-2)$，$\vec{PD} = (0,2,-2)$，$\vec{PC} = (2,2,-2)$

设平面 $BPC$ 的法向量 $\vec{n_1}$：$\vec{n_1} \cdot \vec{PB} = 0$，$\vec{n_1} \cdot \vec{PC} = 0$

$2x - 2z = 0$，$2x + 2y - 2z = 0$

$x = z$，$x + y = z$，$y = 0$。取 $\vec{n_1} = (1, 0, 1)$。

设平面 $DPC$ 的法向量 $\vec{n_2}$：$\vec{n_2} \cdot \vec{PD} = 0$，$\vec{n_2} \cdot \vec{PC} = 0$

$2y - 2z = 0$，$2x + 2y - 2z = 0$

$y = z$，$x + y = z$，$x = 0$。取 $\vec{n_2} = (0, 1, 1)$。

$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|0 + 0 + 1|}{\sqrt{2} \times \sqrt{2}} = \frac{1}{2}$

$\theta = 60°$

二面角 $B\text{-}PC\text{-}D$ 的大小为 $60°$。

**💡 易错提醒：** 求二面角时，两个法向量的夹角可能等于二面角，也可能是其补角。需要根据几何关系判断二面角是锐角还是钝角。

**💡 解题思路总结：** 综合题的解题策略：①先证线面垂直（找面内两条相交线垂直）；②由线面垂直推面面垂直；③用向量法求二面角（求两个面的法向量，再求夹角）。
