---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 用定义法证明 $f(x) = x^2 + \frac{1}{x}$ 在 $[1, +\infty)$ 上单调递增。

---

**解答：**

**第1步：** 取值
> 📌 运用知识点：函数单调性的定义

设 $x_1, x_2 \in [1, +\infty)$，且 $x_1 < x_2$。

**第2步：** 作差并变形
> 📌 运用知识点：函数单调性的证明

$$f(x_1) - f(x_2) = \left(x_1^2 + \frac{1}{x_1}\right) - \left(x_2^2 + \frac{1}{x_2}\right)$$

$$= (x_1^2 - x_2^2) + \left(\frac{1}{x_1} - \frac{1}{x_2}\right) = (x_1 - x_2)(x_1 + x_2) + \frac{x_2 - x_1}{x_1 x_2}$$

$$= (x_1 - x_2)\left(x_1 + x_2 - \frac{1}{x_1 x_2}\right)$$

**第3步：** 判断符号
> 📌 运用知识点：不等式的性质

因为 $x_1 < x_2$，所以 $x_1 - x_2 < 0$。

因为 $x_1 \geq 1$，$x_2 > 1$，所以 $x_1 + x_2 > 2$，$\frac{1}{x_1 x_2} < 1$。

因此 $x_1 + x_2 - \frac{1}{x_1 x_2} > 2 - 1 = 1 > 0$。

所以 $f(x_1) - f(x_2) = (-)(+) < 0$，即 $f(x_1) < f(x_2)$。

**第4步：** 得出结论

$f(x) = x^2 + \frac{1}{x}$ 在 $[1, +\infty)$ 上单调递增。

**⚠️ 易错提醒：** 作差后需要仔细分组变形。判断 $x_1 + x_2 - \frac{1}{x_1 x_2}$ 的符号时，需要利用 $x_1, x_2 \geq 1$ 的条件。

**💡 解题思路总结：** 定义法证明单调性：取值→作差→变形（提取公因式）→判号→结论。变形的关键是提取 $(x_1 - x_2)$ 后判断剩余部分的符号。
