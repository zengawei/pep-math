---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P6 练习B 第3题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。设 $\overrightarrow{AB} = \vec{a}$，$\overrightarrow{AD} = \vec{b}$，$\overrightarrow{AA'} = \vec{c}$。

(1) 用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{AC'}$；

(2) 求 $\overrightarrow{AC'}$ 与 $\overrightarrow{BD}$ 的数量积。

---

**解答：**

**第1步：** 表示 $\overrightarrow{AC'}$
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{AC'} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CC'} = \vec{a} + \vec{b} + \vec{c}$$

**第2步：** 表示 $\overrightarrow{BD}$
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{BD} = \overrightarrow{AD} - \overrightarrow{AB} = \vec{b} - \vec{a}$$

**第3步：** 计算数量积
> 📌 运用知识点：空间向量的运算

由于正方体棱长为 $1$，$\vec{a}, \vec{b}, \vec{c}$ 两两垂直且模为 $1$，所以 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{a} \cdot \vec{c} = 0$，$|\vec{a}|^2 = |\vec{b}|^2 = |\vec{c}|^2 = 1$。

$$\overrightarrow{AC'} \cdot \overrightarrow{BD} = (\vec{a} + \vec{b} + \vec{c}) \cdot (\vec{b} - \vec{a})$$

$$= \vec{a} \cdot \vec{b} - |\vec{a}|^2 + |\vec{b}|^2 - \vec{a} \cdot \vec{b} + \vec{b} \cdot \vec{c} - \vec{a} \cdot \vec{c}$$

$$= 0 - 1 + 1 - 0 + 0 - 0 = 0$$

所以 $\overrightarrow{AC'} \cdot \overrightarrow{BD} = 0$，即 $\overrightarrow{AC'} \perp \overrightarrow{BD}$。

**⚠️ 易错提醒：** 在正方体中，三条棱向量 $\vec{a}, \vec{b}, \vec{c}$ 两两垂直，它们的数量积为零。展开时不要遗漏任何交叉项。

**💡 解题思路总结：** 正方体问题中利用基向量两两垂直（数量积为零）的性质，可以大大简化计算。数量积为零说明两向量垂直。
