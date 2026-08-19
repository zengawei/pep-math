---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 2
difficulty: hard
category: practice
group: A
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "课标11.3.2"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系，求异面直线 $A'C$ 与 $B'D$ 所成角的余弦值。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$A'(0,0,1)$，$B'(1,0,1)$，$C'(1,1,1)$，$D'(0,1,1)$

**第2步：** 求方向向量
> 📌 运用知识点：用向量求空间角

$\overrightarrow{A'C} = C - A' = (1, 1, -1)$

$\overrightarrow{B'D} = D - B' = (-1, 1, -1)$

**第3步：** 计算夹角余弦
> 📌 运用知识点：用向量求空间角

$\overrightarrow{A'C} \cdot \overrightarrow{B'D} = (1)(-1) + (1)(1) + (-1)(-1) = -1 + 1 + 1 = 1$

$|\overrightarrow{A'C}| = \sqrt{1+1+1} = \sqrt{3}$

$|\overrightarrow{B'D}| = \sqrt{1+1+1} = \sqrt{3}$

$\cos\theta = \frac{|\overrightarrow{A'C} \cdot \overrightarrow{B'D}|}{|\overrightarrow{A'C}||\overrightarrow{B'D}|} = \frac{|1|}{\sqrt{3} \cdot \sqrt{3}} = \frac{1}{3}$

**💡 解题思路总结：** 异面直线所成角取绝对值保证结果为锐角或直角。建立坐标系后，一切归结为坐标运算。
