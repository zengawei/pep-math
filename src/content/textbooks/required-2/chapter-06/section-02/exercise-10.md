---
type: exercise
textbook: required-2
chapter: 6
section: 2
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在平行四边形 $ABCD$ 中，$E$ 是 $CD$ 的中点，$AE$ 与 $BD$ 交于点 $F$。用 $\overrightarrow{AB} = \vec{a}$ 和 $\overrightarrow{AD} = \vec{b}$ 表示 $\overrightarrow{AF}$。

---

**解答：**

**第1步：** 建立向量表达式
> 📌 运用知识点：向量的加法与减法

因为 $E$ 是 $CD$ 的中点，$\overrightarrow{DE} = \frac{1}{2}\overrightarrow{DC} = \frac{1}{2}\vec{a}$。

所以 $\overrightarrow{AE} = \overrightarrow{AD} + \overrightarrow{DE} = \vec{b} + \frac{1}{2}\vec{a}$。

**第2步：** 利用共线条件
> 📌 运用知识点：向量的共线条件

$F$ 在 $AE$ 上，设 $\overrightarrow{AF} = t\overrightarrow{AE} = t(\frac{1}{2}\vec{a} + \vec{b}) = \frac{t}{2}\vec{a} + t\vec{b}$（$t$ 为参数）。

$F$ 在 $BD$ 上，设 $\overrightarrow{BF} = s\overrightarrow{BD}$（$s$ 为参数）。

$\overrightarrow{BD} = \overrightarrow{AD} - \overrightarrow{AB} = \vec{b} - \vec{a}$。

$\overrightarrow{AF} = \overrightarrow{AB} + \overrightarrow{BF} = \vec{a} + s(\vec{b} - \vec{a}) = (1 - s)\vec{a} + s\vec{b}$。

**第3步：** 比较系数求参数
> 📌 运用知识点：向量的基本定理

因为 $\vec{a}$ 与 $\vec{b}$ 不共线，比较两种表达式的系数：

$\frac{t}{2} = 1 - s$，$t = s$。

将 $t = s$ 代入第一式：$\frac{t}{2} = 1 - t$，$\frac{3t}{2} = 1$，$t = \frac{2}{3}$。

所以 $\overrightarrow{AF} = \frac{1}{3}\vec{a} + \frac{2}{3}\vec{b}$。

**💡 易错提醒：** 利用向量基本定理，不共线的 $\vec{a}$ 和 $\vec{b}$ 的系数可以分别比较。注意 $E$ 是 $CD$ 中点，$\overrightarrow{DE} = \frac{1}{2}\overrightarrow{DC} = \frac{1}{2}\vec{a}$，不要误写为 $\frac{1}{2}\vec{b}$。

**💡 解题思路总结：** 交点问题用参数法：设交点分两条线段的比例分别为参数，利用向量基本定理比较系数求解。
