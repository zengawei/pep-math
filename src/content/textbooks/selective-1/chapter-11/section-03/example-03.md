---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 3
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P24 例3"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系。求异面直线 $A'C$ 与 $B'D'$ 所成角的余弦值。

---

**解答：**

**第1步：** 确定各点坐标和方向向量
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$

$A'(0,0,1)$，$B'(1,0,1)$，$D'(0,1,1)$

$$\overrightarrow{A'C} = C - A' = (1, 1, -1)$$

$$\overrightarrow{B'D'} = D' - B' = (-1, 1, 0)$$

**第2步：** 计算夹角余弦
> 📌 运用知识点：用向量求空间角

$$\overrightarrow{A'C} \cdot \overrightarrow{B'D'} = 1 \times (-1) + 1 \times 1 + (-1) \times 0 = -1 + 1 + 0 = 0$$

$$\cos\theta = \frac{|\overrightarrow{A'C} \cdot \overrightarrow{B'D'}|}{|\overrightarrow{A'C}||\overrightarrow{B'D'}|} = \frac{0}{\sqrt{3} \times \sqrt{2}} = 0$$

所以 $\theta = 90°$，即异面直线 $A'C$ 与 $B'D'$ 所成角为 $90°$。

**💡 解题思路总结：** 求异面直线所成角：① 求方向向量；② 代入公式 $\cos\theta = \frac{|\vec{u} \cdot \vec{v}|}{|\vec{u}||\vec{v}|}$。当数量积为零时，两异面直线互相垂直。
