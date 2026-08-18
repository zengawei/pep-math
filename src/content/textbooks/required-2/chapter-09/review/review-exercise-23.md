---
type: exercise
textbook: required-2
chapter: 9
section: 0
number: 23
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - sample-estimate-population
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知数据 $x_1, x_2, \cdots, x_n$ 的平均数为 $\bar{x}$，方差为 $s^2$。

(1) 证明：数据 $x_1+c, x_2+c, \cdots, x_n+c$（$c$ 为常数）的方差不变；

(2) 若数据 $2, 4, 6, 8, 10$ 的方差为 $8$，求数据 $1, 3, 5, 7, 9$ 的方差。

---

**解答：**

**第1步：** (1) 证明
> 📌 运用知识点：用样本估计总体

设 $y_i = x_i + c$，则 $\bar{y} = \bar{x} + c$

$s_y^2 = \frac{1}{n}\sum_{i=1}^{n}(y_i - \bar{y})^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i + c - \bar{x} - c)^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2 = s^2$

所以数据整体平移后方差不变。

**第2步：** (2) 求方差
> 📌 运用知识点：用样本估计总体

观察：$1, 3, 5, 7, 9$ 可由 $2, 4, 6, 8, 10$ 每个数据减 $1$ 得到。

由 (1) 的结论，数据整体平移后方差不变。

所以数据 $1, 3, 5, 7, 9$ 的方差 $= 8$

**💡 易错提醒：** 方差只反映数据的离散程度，与数据的位置无关。平移不改变方差。

**💡 解题思路总结：** 方差性质：$s_{x+c}^2 = s_x^2$（平移不变性），$s_{ax}^2 = a^2 s_x^2$（缩放性质）。
