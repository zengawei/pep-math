---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P68 练习"
---

**题目：** 判断函数 $f(x) = \frac{2}{x-1}$ 在区间 $(1, +\infty)$ 上的单调性，并用定义法证明。

---

**解答：**

**第1步：** 取值
> 📌 运用知识点：函数单调性的定义

设 $x_1, x_2 \in (1, +\infty)$，且 $x_1 < x_2$。

**第2步：** 作差
> 📌 运用知识点：函数单调性的证明

$$f(x_1) - f(x_2) = \frac{2}{x_1 - 1} - \frac{2}{x_2 - 1} = \frac{2(x_2 - 1) - 2(x_1 - 1)}{(x_1 - 1)(x_2 - 1)} = \frac{2(x_2 - x_1)}{(x_1 - 1)(x_2 - 1)}$$

**第3步：** 判断符号
> 📌 运用知识点：不等式的性质

因为 $x_1 < x_2$，所以 $x_2 - x_1 > 0$。

因为 $x_1 > 1$，$x_2 > 1$，所以 $(x_1 - 1)(x_2 - 1) > 0$。

因此 $f(x_1) - f(x_2) > 0$，即 $f(x_1) > f(x_2)$。

**第4步：** 得出结论
> 📌 运用知识点：函数单调性的定义

所以 $f(x) = \frac{2}{x-1}$ 在 $(1, +\infty)$ 上单调递减。

**⚠️ 易错提醒：** 作差化简时容易算错符号。注意通分后分子为 $2(x_2 - x_1)$，不要写成 $2(x_1 - x_2)$。

**💡 解题思路总结：** 定义法证明单调性四步：取值→作差→变形判号→结论。关键是作差后正确变形并判断正负。
