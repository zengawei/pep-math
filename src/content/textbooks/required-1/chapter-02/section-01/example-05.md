---
type: example
textbook: required-1
chapter: 2
section: 1
number: 5
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P30"
---

**例题：** 已知 $a > b > c$，求证：$\frac{1}{a-b} + \frac{1}{b-c} > \frac{2}{a-c}$。

**解答：**

**第1步：** 变量替换
> 📌 运用知识点：不等式的性质

令 $x = a - b > 0$，$y = b - c > 0$，则 $a - c = x + y$。

原不等式变为：

$$\frac{1}{x} + \frac{1}{y} > \frac{2}{x + y}$$

**第2步：** 通分证明
> 📌 运用知识点：不等式的性质

左边通分：

$$\frac{1}{x} + \frac{1}{y} = \frac{x + y}{xy}$$

需要证明 $\frac{x + y}{xy} > \frac{2}{x + y}$。

因为 $x > 0, y > 0$，所以 $xy > 0, x + y > 0$，两边乘以 $xy(x+y)$（正数）：

$$(x + y)^2 > 2xy$$

**第3步：** 化简验证
> 📌 运用知识点：不等式的性质

展开：$x^2 + 2xy + y^2 > 2xy$，即 $x^2 + y^2 > 0$。

因为 $x > 0, y > 0$，所以 $x^2 + y^2 > 0$ 显然成立。

以上各步均可逆推，故原不等式成立。

**⚠️ 易错提醒：** 换元法是处理此类不等式的有力工具。令 $x = a-b, y = b-c$ 可以将三个变量的关系简化为两个正数的关系。
