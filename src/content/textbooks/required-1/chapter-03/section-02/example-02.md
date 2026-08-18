---
type: example
textbook: required-1
chapter: 3
section: 2
number: 2
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P68 例"
---

**例题：** 用定义法证明函数 $f(x) = x + \frac{4}{x}$ 在区间 $[2, +\infty)$ 上单调递增。

**解答：**

**第1步：** 取值
> 📌 运用知识点：函数单调性的定义

设 $x_1, x_2 \in [2, +\infty)$，且 $x_1 < x_2$。

**第2步：** 作差并变形
> 📌 运用知识点：函数单调性的证明

$$f(x_1) - f(x_2) = \left(x_1 + \frac{4}{x_1}\right) - \left(x_2 + \frac{4}{x_2}\right) = (x_1 - x_2) + 4\left(\frac{1}{x_1} - \frac{1}{x_2}\right)$$

$$= (x_1 - x_2) + \frac{4(x_2 - x_1)}{x_1 x_2} = (x_1 - x_2)\left(1 - \frac{4}{x_1 x_2}\right) = (x_1 - x_2) \cdot \frac{x_1 x_2 - 4}{x_1 x_2}$$

**第3步：** 判断符号
> 📌 运用知识点：不等式的性质

因为 $x_1 < x_2$，所以 $x_1 - x_2 < 0$。

因为 $x_1 \geq 2$，$x_2 > 2$，所以 $x_1 x_2 > 4$，即 $x_1 x_2 - 4 > 0$。

又 $x_1 x_2 > 0$。

因此 $f(x_1) - f(x_2) = \frac{(-)(+)}{(+)} < 0$，即 $f(x_1) < f(x_2)$。

**第4步：** 得出结论

所以 $f(x) = x + \frac{4}{x}$ 在 $[2, +\infty)$ 上单调递增。

**💡 解题思路总结：** 作差后需要因式分解，将结果化为几个因式的乘积，再逐一判断各因式的符号。关键是变形要彻底，确保每个因式的符号可以明确判断。
