---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P53 复习题 第17题"
---

**题目：** 已知 $a > b > 0$，判断 $a + \frac{1}{a} > b + \frac{1}{b}$ 是否一定成立。若不成立，给出成立的条件。

---

**解答：**

**第1步：** 作差分析
> 📌 运用知识点：不等式的性质

$$\left(a + \frac{1}{a}\right) - \left(b + \frac{1}{b}\right) = (a - b) + \left(\frac{1}{a} - \frac{1}{b}\right) = (a - b) + \frac{b - a}{ab} = (a - b) - \frac{a - b}{ab} = (a - b)\left(1 - \frac{1}{ab}\right)$$

**第2步：** 判断正负
> 📌 运用知识点：不等式的性质

因为 $a > b > 0$，所以 $a - b > 0$。

$1 - \frac{1}{ab}$ 的正负取决于 $ab$ 与 $1$ 的大小关系：
- 当 $ab > 1$ 时，$1 - \frac{1}{ab} > 0$，差值 $> 0$，不等式成立。
- 当 $ab = 1$ 时，差值 $= 0$，$a + \frac{1}{a} = b + \frac{1}{b}$。
- 当 $ab < 1$ 时，$1 - \frac{1}{ab} < 0$，差值 $< 0$，不等式不成立。

**第3步：** 反例
> 📌 运用知识点：不等式的性质

取 $a = \frac{1}{2}, b = \frac{1}{4}$（$a > b > 0$，$ab = \frac{1}{8} < 1$）：

$a + \frac{1}{a} = \frac{1}{2} + 2 = \frac{5}{2}$

$b + \frac{1}{b} = \frac{1}{4} + 4 = \frac{17}{4}$

$\frac{5}{2} < \frac{17}{4}$，不等式不成立。

**结论：** $a + \frac{1}{a} > b + \frac{1}{b}$ 不一定成立。成立的条件是 $ab > 1$。

**⚠️ 易错提醒：** 函数 $f(x) = x + \frac{1}{x}$ 在 $(0, 1)$ 上递减，在 $(1, +\infty)$ 上递增。所以 $a > b > 0$ 不能保证 $f(a) > f(b)$。

**💡 解题思路总结：** 判断不等式是否恒成立：作差分析，找出决定正负的关键因子。本题的关键是 $1 - \frac{1}{ab}$ 的符号。
