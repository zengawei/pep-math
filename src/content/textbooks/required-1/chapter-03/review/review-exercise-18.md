---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x) = \frac{x + 1}{x - 1}$。

(1) 证明 $f(x)$ 在 $(1, +\infty)$ 上单调递减；

(2) 求 $f(x)$ 在 $[2, 5]$ 上的最大值和最小值。

---

**解答：**

**第1步：** 变形
> 📌 运用知识点：函数变形技巧

$f(x) = \frac{x + 1}{x - 1} = \frac{(x - 1) + 2}{x - 1} = 1 + \frac{2}{x - 1}$

**第2步：** 用定义法证明单调递减
> 📌 运用知识点：函数单调性的证明

设 $1 < x_1 < x_2$，

$f(x_1) - f(x_2) = \frac{2}{x_1 - 1} - \frac{2}{x_2 - 1} = \frac{2(x_2 - x_1)}{(x_1 - 1)(x_2 - 1)}$

因为 $x_2 > x_1$，$x_2 - x_1 > 0$；$x_1 > 1$，$x_2 > 1$，$(x_1 - 1)(x_2 - 1) > 0$。

所以 $f(x_1) - f(x_2) > 0$，即 $f(x_1) > f(x_2)$。

$f(x)$ 在 $(1, +\infty)$ 上单调递减。

**第3步：** 求 $[2, 5]$ 上的最值
> 📌 运用知识点：函数最值

$[2, 5] \subset (1, +\infty)$，$f(x)$ 在 $[2, 5]$ 上单调递减。

最大值 $= f(2) = \frac{3}{1} = 3$

最小值 $= f(5) = \frac{6}{4} = \frac{3}{2}$

**⚠️ 易错提醒：** 先将 $f(x)$ 变形为 $1 + \frac{2}{x-1}$ 再用定义法证明，比直接用原式作差更简洁。

**💡 解题思路总结：** 分式函数先变形（分离常数法），化为"常数 + 简单分式"的形式，便于分析单调性和求最值。
