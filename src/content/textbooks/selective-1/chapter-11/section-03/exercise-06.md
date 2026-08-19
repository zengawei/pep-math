---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P23 练习A 第3题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系。求异面直线 $A'B$ 与 $AC$ 所成角的大小。

---

**解答：**

**第1步：** 确定各点坐标和方向向量
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$A'(0,0,1)$

$$\overrightarrow{A'B} = B - A' = (1, 0, -1)$$

$$\overrightarrow{AC} = C - A = (1, 1, 0)$$

**第2步：** 计算夹角余弦
> 📌 运用知识点：用向量求空间角

$$\overrightarrow{A'B} \cdot \overrightarrow{AC} = 1 \times 1 + 0 \times 1 + (-1) \times 0 = 1$$

$$|\overrightarrow{A'B}| = \sqrt{1 + 0 + 1} = \sqrt{2}$$

$$|\overrightarrow{AC}| = \sqrt{1 + 1 + 0} = \sqrt{2}$$

$$\cos\theta = \frac{|\overrightarrow{A'B} \cdot \overrightarrow{AC}|}{|\overrightarrow{A'B}||\overrightarrow{AC}|} = \frac{|1|}{\sqrt{2} \times \sqrt{2}} = \frac{1}{2}$$

所以 $\theta = 60°$。

**⚠️ 易错提醒：** 异面直线所成角的范围是 $(0°, 90°]$，所以数量积公式中要取绝对值 $|\cos\theta|$，保证结果为锐角或直角。

**💡 解题思路总结：** 求异面直线所成角：① 求两条直线的方向向量；② 代入公式 $\cos\theta = \frac{|\vec{u} \cdot \vec{v}|}{|\vec{u}||\vec{v}|}$（取绝对值）；③ 求反余弦得角。
