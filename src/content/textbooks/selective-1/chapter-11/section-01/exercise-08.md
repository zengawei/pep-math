---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P6 练习B 第1题"
---

**题目：** 在四面体 $OABC$ 中，设 $\overrightarrow{OA} = \vec{a}$，$\overrightarrow{OB} = \vec{b}$，$\overrightarrow{OC} = \vec{c}$。点 $M$ 是 $BC$ 的中点，点 $N$ 是 $OA$ 的中点。用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{MN}$。

---

**解答：**

**第1步：** 求 $\overrightarrow{OM}$
> 📌 运用知识点：空间向量的运算

$M$ 是 $BC$ 的中点，所以：

$$\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OB} + \overrightarrow{OC}) = \frac{1}{2}(\vec{b} + \vec{c})$$

**第2步：** 求 $\overrightarrow{ON}$
> 📌 运用知识点：空间向量的运算

$N$ 是 $OA$ 的中点，所以：

$$\overrightarrow{ON} = \frac{1}{2}\overrightarrow{OA} = \frac{1}{2}\vec{a}$$

**第3步：** 求 $\overrightarrow{MN}$
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{MN} = \overrightarrow{ON} - \overrightarrow{OM} = \frac{1}{2}\vec{a} - \frac{1}{2}(\vec{b} + \vec{c}) = \frac{1}{2}\vec{a} - \frac{1}{2}\vec{b} - \frac{1}{2}\vec{c}$$

**⚠️ 易错提醒：** 中点向量公式 $\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OB} + \overrightarrow{OC})$ 是从原点出发的，注意不要和 $\overrightarrow{BM} = \frac{1}{2}\overrightarrow{BC}$ 混淆。

**💡 解题思路总结：** 求两点间的向量，先分别求出两点相对于同一原点的位置向量，再做差。中点的位置向量等于两端点位置向量的平均值。
