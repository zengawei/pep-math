---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "课标3.2.1"
---

**题目：** 用定义法证明 $f(x) = x^2$ 在 $(0, +\infty)$ 上单调递增。

---

**解答：**

**第1步：** 取值
> 📌 运用知识点：函数的性质

设 $x_1, x_2 \in (0, +\infty)$，且 $x_1 < x_2$。

**第2步：** 作差
> 📌 运用知识点：函数的性质

$f(x_1) - f(x_2) = x_1^2 - x_2^2 = (x_1 + x_2)(x_1 - x_2)$

**第3步：** 判断符号
> 📌 运用知识点：函数的性质

因为 $x_1, x_2 > 0$，所以 $x_1 + x_2 > 0$。

因为 $x_1 < x_2$，所以 $x_1 - x_2 < 0$。

因此 $f(x_1) - f(x_2) < 0$，即 $f(x_1) < f(x_2)$。

所以 $f(x) = x^2$ 在 $(0, +\infty)$ 上单调递增。

**💡 解题思路总结：** 定义法证明单调性四步：取值→作差→变形→判号→结论。
