---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$ 不共线，$\vec{c} = 3\vec{a} - 2\vec{b}$，$\vec{d} = 2\vec{a} + k\vec{b}$。若 $\vec{c} \parallel \vec{d}$，求实数 $k$ 的值。

---

**解答：**

**第1步：** 利用共线条件
> 📌 运用知识点：共线向量定理

因为 $\vec{c} \parallel \vec{d}$，所以存在实数 $\lambda$，使得 $\vec{d} = \lambda\vec{c}$。

即 $2\vec{a} + k\vec{b} = \lambda(3\vec{a} - 2\vec{b}) = 3\lambda\vec{a} - 2\lambda\vec{b}$。

**第2步：** 比较系数
> 📌 运用知识点：平面向量基本定理

因为 $\vec{a}$ 与 $\vec{b}$ 不共线，由平面向量基本定理，对应系数相等：

$2 = 3\lambda$，$k = -2\lambda$

由第一式：$\lambda = \frac{2}{3}$

代入第二式：$k = -2 \times \frac{2}{3} = -\frac{4}{3}$

**💡 易错提醒：** 利用平面向量基本定理比较系数的前提是 $\vec{a}$ 与 $\vec{b}$ 不共线。如果 $\vec{a}$ 与 $\vec{b}$ 共线，则不能直接比较系数。

**💡 解题思路总结：** 两向量共线 $\Rightarrow$ 一个是另一个的数倍 $\Rightarrow$ 展开后利用基本定理比较系数。这是求参数的标准方法。
