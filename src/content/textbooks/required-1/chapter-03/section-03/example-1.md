---
type: example
textbook: required-1
chapter: 3
section: 3
number: 1
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "待补充"
---

**例题：** 判断函数 $f(x) = \frac{x^2 - 1}{x^2 + 1}$ 的奇偶性，并求其值域。

**解答：**

**第1步：** 判断奇偶性
> 📌 运用知识点：函数的性质

定义域为 $\mathbb{R}$，关于原点对称。

$f(-x) = \frac{(-x)^2 - 1}{(-x)^2 + 1} = \frac{x^2 - 1}{x^2 + 1} = f(x)$

所以 $f(x)$ 为偶函数。

**第2步：** 求值域
> 📌 运用知识点：函数的性质

$f(x) = \frac{x^2 - 1}{x^2 + 1} = \frac{x^2 + 1 - 2}{x^2 + 1} = 1 - \frac{2}{x^2 + 1}$

因为 $x^2 + 1 \geq 1$，所以 $0 < \frac{2}{x^2 + 1} \leq 2$。

因此 $-1 \leq 1 - \frac{2}{x^2 + 1} < 1$。

值域为 $[-1, 1)$。
