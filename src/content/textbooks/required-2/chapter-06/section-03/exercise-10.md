---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$ 不共线。设 $\overrightarrow{OA} = \vec{a}$，$\overrightarrow{OB} = t\vec{b}$，$\overrightarrow{OC} = \frac{1}{3}(\vec{a} + \vec{b})$。当 $t$ 为何值时，$A$、$B$、$C$ 三点共线？

---

**解答：**

**第1步：** 建立共线条件
> 📌 运用知识点：共线向量定理

$A$、$B$、$C$ 三点共线 $\Leftrightarrow$ $\overrightarrow{AB}$ 与 $\overrightarrow{AC}$ 共线。

$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = t\vec{b} - \vec{a} = -\vec{a} + t\vec{b}$

$\overrightarrow{AC} = \overrightarrow{OC} - \overrightarrow{OA} = \frac{1}{3}(\vec{a} + \vec{b}) - \vec{a} = -\frac{2}{3}\vec{a} + \frac{1}{3}\vec{b}$

**第2步：** 利用共线条件求 $t$
> 📌 运用知识点：平面向量基本定理

$\overrightarrow{AB}$ 与 $\overrightarrow{AC}$ 共线，存在实数 $\lambda$ 使得 $\overrightarrow{AB} = \lambda\overrightarrow{AC}$：

$$-\vec{a} + t\vec{b} = \lambda\left(-\frac{2}{3}\vec{a} + \frac{1}{3}\vec{b}\right) = -\frac{2\lambda}{3}\vec{a} + \frac{\lambda}{3}\vec{b}$$

因为 $\vec{a}$ 与 $\vec{b}$ 不共线，比较系数：

$-1 = -\frac{2\lambda}{3}$，$t = \frac{\lambda}{3}$

由第一式：$\lambda = \frac{3}{2}$

代入第二式：$t = \frac{3/2}{3} = \frac{1}{2}$

**💡 易错提醒：** 三点共线转化为两个向量共线，再利用基本定理比较系数。注意 $\vec{a}$ 与 $\vec{b}$ 不共线是比较系数的前提。

**💡 解题思路总结：** 三点共线问题：$\overrightarrow{AB} = \lambda\overrightarrow{AC}$，展开后利用基本定理比较系数求参数。
