---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P4 练习A 第2题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。用 $\vec{a}, \vec{b}, \vec{c}$ 表示下列向量：

(1) $\overrightarrow{BD'}$；

(2) $\overrightarrow{A'C}$。

---

**解答：**

**第1步：** 表示 $\overrightarrow{BD'}$
> 📌 运用知识点：空间向量的运算

沿路径 $B \to A \to D \to D'$：

$$\overrightarrow{BD'} = \overrightarrow{BA} + \overrightarrow{AD} + \overrightarrow{DD'}$$

其中 $\overrightarrow{BA} = -\vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{DD'} = \overrightarrow{AA'} = \vec{c}$。

所以 $\overrightarrow{BD'} = -\vec{a} + \vec{b} + \vec{c}$。

**第2步：** 表示 $\overrightarrow{A'C}$
> 📌 运用知识点：空间向量的运算

沿路径 $A' \to A \to B \to C$：

$$\overrightarrow{A'C} = \overrightarrow{A'A} + \overrightarrow{AB} + \overrightarrow{BC}$$

其中 $\overrightarrow{A'A} = -\vec{c}$，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{BC} = \overrightarrow{AD} = \vec{b}$。

所以 $\overrightarrow{A'C} = \vec{a} + \vec{b} - \vec{c}$。

**⚠️ 易错提醒：** 选择路径时要注意每一步的方向，特别是反向向量要加负号，如 $\overrightarrow{BA} = -\overrightarrow{AB} = -\vec{a}$。

**💡 解题思路总结：** 在正方体中用基向量表示未知向量时，选择一条从起点到终点的路径，将每段用基向量表示后求和即可。
