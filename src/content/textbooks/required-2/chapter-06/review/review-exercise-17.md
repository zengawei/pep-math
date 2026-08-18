---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a} = (1, 2)$，$\vec{b} = (x, 1)$，若 $\vec{a} + 2\vec{b}$ 与 $2\vec{a} - \vec{b}$ 垂直，求 $x$ 的值。

---

**解答：**

**第1步：** 计算两个向量
> 📌 运用知识点：向量的数乘与加法

$\vec{a} + 2\vec{b} = (1, 2) + 2(x, 1) = (1 + 2x, 4)$

$2\vec{a} - \vec{b} = 2(1, 2) - (x, 1) = (2 - x, 3)$

**第2步：** 利用垂直条件
> 📌 运用知识点：向量垂直——数量积为零

$(\vec{a} + 2\vec{b}) \cdot (2\vec{a} - \vec{b}) = 0$

$(1 + 2x)(2 - x) + 4 \times 3 = 0$

$2 - x + 4x - 2x^2 + 12 = 0$

$-2x^2 + 3x + 14 = 0$

$2x^2 - 3x - 14 = 0$

$(2x - 7)(x + 2) = 0$

$x = \frac{7}{2}$ 或 $x = -2$

**💡 易错提醒：** 展开 $(1+2x)(2-x)$ 时不要漏项。解一元二次方程要检验。

**💡 解题思路总结：** 先算出两个向量的坐标表达式，再用垂直条件（数量积为零）列方程。
