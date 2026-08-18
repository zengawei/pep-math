---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a} = (1, 2)$，$\vec{b} = (-3, 2)$，当 $k$ 为何值时，$k\vec{a} + \vec{b}$ 与 $\vec{a} - 3\vec{b}$ 平行？平行时它们是同向还是反向？

---

**解答：**

**第1步：** 计算两个向量
> 📌 运用知识点：向量的数乘——坐标运算

$k\vec{a} + \vec{b} = k(1, 2) + (-3, 2) = (k - 3, 2k + 2)$

$\vec{a} - 3\vec{b} = (1, 2) - 3(-3, 2) = (1 + 9, 2 - 6) = (10, -4)$

**第2步：** 利用平行条件
> 📌 运用知识点：向量平行的坐标条件

$(k - 3)(-4) - (2k + 2)(10) = 0$

$-4k + 12 - 20k - 20 = 0$

$-24k - 8 = 0$，$k = -\frac{1}{3}$

**第3步：** 判断方向
> 📌 运用知识点：向量的方向

$k = -\frac{1}{3}$ 时：$k\vec{a} + \vec{b} = (-\frac{1}{3} - 3, -\frac{2}{3} + 2) = (-\frac{10}{3}, \frac{4}{3})$

$(-\frac{10}{3}, \frac{4}{3}) = -\frac{1}{3}(10, -4)$

系数 $-\frac{1}{3} < 0$，所以两向量**反向**。

**💡 易错提醒：** 平行条件 $x_1 y_2 - x_2 y_1 = 0$。判断同向还是反向看比例系数的正负。

**💡 解题思路总结：** 先算出两个向量的坐标，用平行条件列方程求 $k$，再看比例系数的正负判断方向。
