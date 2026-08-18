---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在三角形 $ABC$ 中，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AC} = \vec{b}$，$M$ 是 $BC$ 的中点，$N$ 在 $AC$ 上且 $AN = 2NC$。用 $\vec{a}$、$\vec{b}$ 表示 $\overrightarrow{MN}$。

---

**解答：**

**第1步：** 求 $\overrightarrow{AM}$
> 📌 运用知识点：中线向量

$\overrightarrow{AM} = \frac{1}{2}(\vec{a} + \vec{b})$

**第2步：** 求 $\overrightarrow{AN}$
> 📌 运用知识点：向量的数乘

$AN = 2NC$，$AN = \frac{2}{3}AC$，$\overrightarrow{AN} = \frac{2}{3}\vec{b}$

**第3步：** 求 $\overrightarrow{MN}$
> 📌 运用知识点：向量的减法

$\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM} = \frac{2}{3}\vec{b} - \frac{1}{2}(\vec{a} + \vec{b}) = -\frac{1}{2}\vec{a} + \frac{2}{3}\vec{b} - \frac{1}{2}\vec{b} = -\frac{1}{2}\vec{a} + \frac{1}{6}\vec{b}$

**💡 易错提醒：** $AN = 2NC$ 意味着 $AN = \frac{2}{3}AC$，不是 $\frac{1}{3}AC$。

**💡 解题思路总结：** 分别求出 $\overrightarrow{AM}$ 和 $\overrightarrow{AN}$，再用 $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}$。
