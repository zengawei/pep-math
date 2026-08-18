---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 设 $\vec{e_1}$、$\vec{e_2}$ 是两个不共线的向量，$\overrightarrow{AB} = 2\vec{e_1} + k\vec{e_2}$，$\overrightarrow{CB} = \vec{e_1} + 3\vec{e_2}$，$\overrightarrow{CD} = 2\vec{e_1} - \vec{e_2}$。若 $A$、$B$、$D$ 三点共线，求 $k$ 的值。

---

**解答：**

**第1步：** 求 $\overrightarrow{BD}$
> 📌 运用知识点：向量的减法

$\overrightarrow{BD} = \overrightarrow{CD} - \overrightarrow{CB} = (2\vec{e_1} - \vec{e_2}) - (\vec{e_1} + 3\vec{e_2}) = \vec{e_1} - 4\vec{e_2}$

**第2步：** 利用三点共线条件
> 📌 运用知识点：共线向量定理

$A$、$B$、$D$ 三点共线 $\Leftrightarrow$ $\overrightarrow{AB}$ 与 $\overrightarrow{BD}$ 共线。

存在实数 $\lambda$ 使 $\overrightarrow{AB} = \lambda\overrightarrow{BD}$：

$2\vec{e_1} + k\vec{e_2} = \lambda(\vec{e_1} - 4\vec{e_2}) = \lambda\vec{e_1} - 4\lambda\vec{e_2}$

因为 $\vec{e_1}$ 与 $\vec{e_2}$ 不共线，比较系数：

$2 = \lambda$，$k = -4\lambda = -4 \times 2 = -8$

**💡 易错提醒：** 先求 $\overrightarrow{BD}$（不是 $\overrightarrow{DB}$），再利用 $\overrightarrow{AB}$ 与 $\overrightarrow{BD}$ 共线。

**💡 解题思路总结：** 三点共线转化为两向量共线，利用基本定理比较系数求参数。
