---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 9
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在三角形 $ABC$ 中，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AC} = \vec{b}$。$M$ 是 $BC$ 的中点，$N$ 是 $AM$ 的中点。用 $\vec{a}$、$\vec{b}$ 表示 $\overrightarrow{BN}$。

---

**解答：**

**第1步：** 求 $\overrightarrow{AM}$
> 📌 运用知识点：向量的加法——中线向量

$M$ 是 $BC$ 的中点，所以：

$$\overrightarrow{AM} = \frac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}) = \frac{1}{2}(\vec{a} + \vec{b})$$

**第2步：** 求 $\overrightarrow{AN}$
> 📌 运用知识点：向量的数乘——中点

$N$ 是 $AM$ 的中点，所以：

$$\overrightarrow{AN} = \frac{1}{2}\overrightarrow{AM} = \frac{1}{2} \times \frac{1}{2}(\vec{a} + \vec{b}) = \frac{1}{4}(\vec{a} + \vec{b}) = \frac{1}{4}\vec{a} + \frac{1}{4}\vec{b}$$

**第3步：** 求 $\overrightarrow{BN}$
> 📌 运用知识点：向量的减法

$$\overrightarrow{BN} = \overrightarrow{AN} - \overrightarrow{AB} = \frac{1}{4}\vec{a} + \frac{1}{4}\vec{b} - \vec{a} = -\frac{3}{4}\vec{a} + \frac{1}{4}\vec{b}$$

**💡 易错提醒：** $\overrightarrow{BN} = \overrightarrow{AN} - \overrightarrow{AB}$（终点减起点），不要写成 $\overrightarrow{AB} - \overrightarrow{AN}$。

**💡 解题思路总结：** 多次利用中点条件逐步求出目标向量。中点对应系数 $\frac{1}{2}$，路径法 $\overrightarrow{BN} = \overrightarrow{AN} - \overrightarrow{AB}$ 是基本方法。
