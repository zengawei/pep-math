---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 27
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

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 是正方形，$PA \perp$ 底面 $ABCD$，$PA = AB = 2$。$E$ 是 $PB$ 的中点。

(1) 求证：$AE \perp PC$。

(2) 求二面角 $E\text{-}AC\text{-}B$ 的大小。

---

**解答：**

**第1步：** 建立坐标系并证明 $AE \perp PC$
> 📌 运用知识点：坐标法

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$

$E$ 是 $PB$ 中点：$E = (1, 0, 1)$

$\vec{AE} = (1, 0, 1)$，$\vec{PC} = (2, 2, -2)$

$\vec{AE} \cdot \vec{PC} = 2 + 0 - 2 = 0$

所以 $AE \perp PC$。

**第2步：** 求二面角 $E\text{-}AC\text{-}B$
> 📌 运用知识点：二面角的向量法

$\vec{AC} = (2, 2, 0)$

平面 $EAC$ 的法向量 $\vec{n_1}$：$\vec{n_1} \cdot \vec{AE} = 0$，$\vec{n_1} \cdot \vec{AC} = 0$

$a + c = 0$，$2a + 2b = 0$

取 $a = 1$：$c = -1$，$b = -1$。$\vec{n_1} = (1, -1, -1)$

平面 $ABC$ 的法向量 $\vec{n_2} = (0, 0, 1)$

$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|-1|}{\sqrt{3} \times 1} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$

$\theta = \arccos\frac{\sqrt{3}}{3}$

**💡 易错提醒：** 求二面角时需要注意法向量的方向，确保二面角的值是锐角还是钝角。

**💡 解题思路总结：** 综合题的解题策略：①建坐标系用向量法证垂直；②求两面法向量算二面角。
