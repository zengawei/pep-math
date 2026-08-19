---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P25 练习B 第2题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系。求异面直线 $A'B$ 与 $B'C$ 所成角的余弦值。

---

**解答：**

**第1步：** 确定各点坐标和方向向量
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$A'(0,0,1)$，$B'(1,0,1)$

$$\overrightarrow{A'B} = B - A' = (1, 0, -1)$$

$$\overrightarrow{B'C} = C - B' = (0, 1, -1)$$

**第2步：** 计算夹角余弦
> 📌 运用知识点：用向量求空间角

$$\overrightarrow{A'B} \cdot \overrightarrow{B'C} = 1 \times 0 + 0 \times 1 + (-1) \times (-1) = 1$$

$$|\overrightarrow{A'B}| = \sqrt{1 + 0 + 1} = \sqrt{2}$$

$$|\overrightarrow{B'C}| = \sqrt{0 + 1 + 1} = \sqrt{2}$$

$$\cos\theta = \frac{|\overrightarrow{A'B} \cdot \overrightarrow{B'C}|}{|\overrightarrow{A'B}||\overrightarrow{B'C}|} = \frac{|1|}{\sqrt{2} \times \sqrt{2}} = \frac{1}{2}$$

所以异面直线 $A'B$ 与 $B'C$ 所成角的余弦值为 $\frac{1}{2}$，即所成角为 $60°$。

**⚠️ 易错提醒：** 异面直线所成角取绝对值保证结果为锐角或直角（范围 $(0°, 90°]$）。如果算出的余弦值为负，取绝对值后对应补角。

**💡 解题思路总结：** 求异面直线所成角的标准方法：求方向向量 → 代入公式 $\cos\theta = \frac{|\vec{u} \cdot \vec{v}|}{|\vec{u}||\vec{v}|}$ → 求角。
