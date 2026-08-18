---
type: exercise
textbook: required-2
chapter: 6
section: 3
number: 6
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 判断向量 $2\vec{a} - \vec{b}$ 与 $-4\vec{a} + 2\vec{b}$ 是否共线，并说明理由。

---

**解答：**

**第1步：** 观察两个向量的关系
> 📌 运用知识点：向量的数乘——共线向量

观察 $-4\vec{a} + 2\vec{b}$：

$-4\vec{a} + 2\vec{b} = -2(2\vec{a} - \vec{b})$

**第2步：** 判断共线
> 📌 运用知识点：共线向量定理

因为 $-4\vec{a} + 2\vec{b} = -2(2\vec{a} - \vec{b})$，即存在实数 $\lambda = -2$，使得：

$$-4\vec{a} + 2\vec{b} = \lambda(2\vec{a} - \vec{b})$$

由共线向量定理，若一个向量是另一个向量的数倍，则两个向量共线。

所以 $2\vec{a} - \vec{b}$ 与 $-4\vec{a} + 2\vec{b}$ 共线。

**💡 易错提醒：** 判断共线时，要验证是否存在实数 $\lambda$ 使得一个向量等于另一个向量的 $\lambda$ 倍。注意 $\lambda = -2 < 0$，说明两向量方向相反。

**💡 解题思路总结：** 判断两向量共线，看能否将一个向量表示为另一个向量的数乘。提取公因子是关键方法。
