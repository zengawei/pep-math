---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P26 复习参考题 第24题"
---

**题目：** 在正四棱柱 $ABCD\text{-}A'B'C'D'$ 中，$AB = 1$，$AA' = 2$。求点 $A$ 到平面 $BDC'$ 的距离。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向。

$A(1, 0, 0)$，$B(1, 1, 0)$，$C(0, 1, 0)$，$D(0, 0, 0)$，$C'(0, 1, 2)$。

**第2步：** 求平面 $BDC'$ 的法向量
> 📌 运用知识点：空间向量的坐标表示

$\overrightarrow{DB} = (1, 1, 0)$，$\overrightarrow{DC'} = (0, 1, 2)$。

设法向量 $\vec{n} = (x, y, z)$：

$$\begin{cases} x + y = 0 \\ y + 2z = 0 \end{cases}$$

取 $z = 1$，则 $y = -2$，$x = 2$。$\vec{n} = (2, -2, 1)$。

**第3步：** 计算距离
> 📌 运用知识点：用向量计算角

$$d = \frac{|\overrightarrow{DA} \cdot \vec{n}|}{|\vec{n}|} = \frac{|(1,0,0) \cdot (2,-2,1)|}{\sqrt{4+4+1}} = \frac{2}{3}$$

点 $A$ 到平面 $BDC'$ 的距离为 $\dfrac{2}{3}$。

**⚠️ 易错提醒：** 点到平面距离公式 $d = \dfrac{|\overrightarrow{P_0P} \cdot \vec{n}|}{|\vec{n}|}$ 中，$\overrightarrow{P_0P}$ 是从平面上任意一点 $P_0$ 到目标点 $P$ 的向量，注意方向不要搞反。

**💡 解题思路总结：** 求点到平面距离的向量法：求平面法向量 → 取平面上一点到目标点的向量 → 代入距离公式。这是空间距离问题的通用方法。
