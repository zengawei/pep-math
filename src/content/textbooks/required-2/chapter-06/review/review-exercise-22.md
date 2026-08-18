---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$ 不共线，$\vec{c} = \vec{a} + 2\vec{b}$，$\vec{d} = 3\vec{a} - 4\vec{b}$，$\vec{e} = -\vec{a} + 3\vec{b}$。用 $\vec{c}$、$\vec{d}$ 表示 $\vec{e}$。

---

**解答：**

**第1步：** 设 $\vec{e} = x\vec{c} + y\vec{d}$
> 📌 运用知识点：平面向量基本定理

$\vec{e} = x(\vec{a} + 2\vec{b}) + y(3\vec{a} - 4\vec{b}) = (x + 3y)\vec{a} + (2x - 4y)\vec{b}$

**第2步：** 比较系数
> 📌 运用知识点：向量基本定理

$\vec{e} = -\vec{a} + 3\vec{b}$，比较系数：

$x + 3y = -1 \quad \cdots (1)$

$2x - 4y = 3 \quad \cdots (2)$

由 (1)：$x = -1 - 3y$

代入 (2)：$2(-1 - 3y) - 4y = 3$

$-2 - 6y - 4y = 3$

$-10y = 5$，$y = -\frac{1}{2}$

$x = -1 - 3(-\frac{1}{2}) = -1 + \frac{3}{2} = \frac{1}{2}$

所以 $\vec{e} = \frac{1}{2}\vec{c} - \frac{1}{2}\vec{d}$。

**💡 易错提醒：** 利用基本定理比较系数时，前提是 $\vec{a}$ 与 $\vec{b}$ 不共线。

**💡 解题思路总结：** 设 $\vec{e} = x\vec{c} + y\vec{d}$，展开后用基本定理比较系数，解方程组。
