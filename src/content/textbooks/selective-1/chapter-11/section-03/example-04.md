---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 4
knowledge_points:
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P26 例4"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系。求直线 $A'C$ 与平面 $ABCD$ 所成角的正弦值。

---

**解答：**

**第1步：** 确定方向向量和法向量
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$C(1,1,0)$，$A'(0,0,1)$

$$\overrightarrow{A'C} = (1, 1, -1)$$

平面 $ABCD$ 是 $xOy$ 平面，其法向量 $\vec{n} = (0, 0, 1)$。

**第2步：** 利用公式求线面角
> 📌 运用知识点：用向量求空间角

设直线 $A'C$ 与平面 $ABCD$ 所成角为 $\alpha$，则：

$$\sin\alpha = \frac{|\overrightarrow{A'C} \cdot \vec{n}|}{|\overrightarrow{A'C}||\vec{n}|}$$

$$\overrightarrow{A'C} \cdot \vec{n} = 1 \times 0 + 1 \times 0 + (-1) \times 1 = -1$$

$$|\overrightarrow{A'C}| = \sqrt{1 + 1 + 1} = \sqrt{3}, \quad |\vec{n}| = 1$$

$$\sin\alpha = \frac{|-1|}{\sqrt{3} \times 1} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

**💡 解题思路总结：** 直线与平面所成角 $\alpha$ 满足 $\sin\alpha = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}||\vec{n}|}$，其中 $\vec{v}$ 是直线方向向量，$\vec{n}$ 是平面法向量。注意这里用的是 $\sin$ 而不是 $\cos$，因为线面角是方向向量与法向量夹角的余角。
