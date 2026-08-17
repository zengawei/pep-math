---
type: example
textbook: required-1
chapter: 4
section: 3
number: 1
knowledge_points:
  - exponential-function
  - logarithmic-function
---

**例题：** 求函数 $f(x) = 4^x - 2^{x+1} + 3$ 在 $x \in [-1, 2]$ 上的最大值和最小值。

**解答：**

**第1步：** 换元
> 📌 运用知识点：指数函数

令 $t = 2^x$，因为 $x \in [-1, 2]$，所以 $t \in [\frac{1}{2}, 4]$。

$f(x) = (2^x)^2 - 2 \cdot 2^x + 3 = t^2 - 2t + 3$

**第2步：** 求二次函数在 $[\frac{1}{2}, 4]$ 上的最值
> 📌 运用知识点：一元二次函数

$g(t) = t^2 - 2t + 3 = (t-1)^2 + 2$

对称轴 $t = 1 \in [\frac{1}{2}, 4]$。

$g(1) = 2$（最小值）

$g(\frac{1}{2}) = \frac{1}{4} - 1 + 3 = \frac{9}{4}$

$g(4) = 16 - 8 + 3 = 11$（最大值）

所以 $f(x)$ 的最小值为 $2$（$x = 0$ 时），最大值为 $11$（$x = 2$ 时）。
