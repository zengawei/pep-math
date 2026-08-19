---
type: example
textbook: selective-1
chapter: 13
section: 1
number: 2
knowledge_points:
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P62 例2"
---

**例题：** 已知椭圆 $\dfrac{x^2}{25} + \dfrac{y^2}{16} = 1$，求 $x^2 + y^2$ 的最大值和最小值。

**解答：**

**第1步：** 设椭圆上的点
> 📌 运用知识点：椭圆的几何性质

设 $P(x, y)$ 在椭圆上，则 $\dfrac{x^2}{25} + \dfrac{y^2}{16} = 1$

$y^2 = 16\left(1 - \dfrac{x^2}{25}\right) = 16 - \dfrac{16x^2}{25}$

**第2步：** 转化为关于 $x$ 的函数
> 📌 运用知识点：椭圆的几何性质

$f = x^2 + y^2 = x^2 + 16 - \dfrac{16x^2}{25} = x^2\left(1 - \dfrac{16}{25}\right) + 16 = \dfrac{9}{25}x^2 + 16$

因为 $-5 \leqslant x \leqslant 5$，$0 \leqslant x^2 \leqslant 25$

**第3步：** 求最值
> 📌 运用知识点：椭圆的几何性质

当 $x^2 = 0$（即 $x = 0$，短轴端点）时：$f_{\min} = 16$

当 $x^2 = 25$（即 $x = \pm 5$，长轴端点）时：$f_{\max} = \dfrac{9}{25} \times 25 + 16 = 9 + 16 = 25$

$x^2 + y^2$ 的最大值为 $25$，最小值为 $16$。

**💡 解题思路总结：** 求椭圆上点的表达式的最值，核心方法是将问题转化为关于一个变量的函数，利用椭圆方程消元后在定义域内求最值。本题中 $x^2 + y^2$ 表示点到原点的距离的平方。
