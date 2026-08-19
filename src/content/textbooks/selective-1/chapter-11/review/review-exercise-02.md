---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 2
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P15 复习参考题 第2题"
---

**题目：** 在平行六面体 $ABCD\text{-}A'B'C'D'$ 中，设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。

(1) 用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{AC'}$ 和 $\overrightarrow{BD'}$。

(2) 若 $|\vec{a}| = 3$，$|\vec{b}| = 4$，$|\vec{c}| = 5$，且 $\vec{a}, \vec{b}, \vec{c}$ 两两垂直，求 $|\overrightarrow{AC'}|$。

---

**解答：**

**第1步：** 表示 $\overrightarrow{AC'}$
> 📌 运用知识点：空间向量的运算

沿路径 $A \to B \to C \to C'$：

$$\overrightarrow{AC'} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CC'} = \vec{a} + \vec{b} + \vec{c}$$

**第2步：** 表示 $\overrightarrow{BD'}$
> 📌 运用知识点：空间向量的运算

沿路径 $B \to A \to D \to D'$：

$$\overrightarrow{BD'} = \overrightarrow{BA} + \overrightarrow{AD} + \overrightarrow{DD'} = -\vec{a} + \vec{b} + \vec{c}$$

**第3步：** 计算 $|\overrightarrow{AC'}|$
> 📌 运用知识点：空间向量的运算

因为 $\vec{a}, \vec{b}, \vec{c}$ 两两垂直，所以 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{a} \cdot \vec{c} = 0$。

$$|\overrightarrow{AC'}|^2 = (\vec{a} + \vec{b} + \vec{c}) \cdot (\vec{a} + \vec{b} + \vec{c}) = |\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 = 9 + 16 + 25 = 50$$

所以 $|\overrightarrow{AC'}| = 5\sqrt{2}$。

**⚠️ 易错提醒：** 表示向量时要沿明确的路径逐步分解，注意方向。计算模的平方时，展开后交叉项在两两垂直条件下为零，不能遗漏此条件。

**💡 解题思路总结：** 在平行六面体中用基向量表示目标向量，关键是选择合适的路径。当基向量两两垂直时，模的计算简化为各分量模的平方和的算术平方根。
