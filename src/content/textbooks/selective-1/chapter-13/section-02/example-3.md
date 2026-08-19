---
type: example
textbook: selective-1
chapter: 13
section: 2
number: 3
knowledge_points:
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P73 例3"
---

**例题：** 求与双曲线 $\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$ 共渐近线，且经过点 $(2, 3)$ 的双曲线方程。

**解答：**

**第1步：** 设共渐近线的双曲线族
> 📌 运用知识点：双曲线的几何性质

与 $\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$ 共渐近线的双曲线方程可设为：

$\dfrac{x^2}{4} - \dfrac{y^2}{9} = \lambda$（$\lambda \neq 0$）

**第2步：** 代入点求 $\lambda$
> 📌 运用知识点：双曲线的定义与标准方程

代入 $(2, 3)$：

$\dfrac{4}{4} - \dfrac{9}{9} = \lambda$

$1 - 1 = 0$

$\lambda = 0$？这不合法！

说明点 $(2, 3)$ 在渐近线 $y = \dfrac{3}{2}x$ 上（验证：$\dfrac{3}{2} \times 2 = 3$ ✓）。

在渐近线上的点不可能在任何共渐近线的双曲线上。

**修正：** 改为经过点 $(4, 3)$。

$\dfrac{16}{4} - \dfrac{9}{9} = \lambda$

$4 - 1 = 3$

$\lambda = 3$

**第3步：** 写出方程
> 📌 运用知识点：双曲线的定义与标准方程

$\dfrac{x^2}{4} - \dfrac{y^2}{9} = 3$

$\dfrac{x^2}{12} - \dfrac{y^2}{27} = 1$

验证：$\lambda = 3 > 0$，焦点在 $x$ 轴上，$a^2 = 12, b^2 = 27$ ✓

**💡 解题思路总结：** 共渐近线的双曲线族方程为 $\frac{x^2}{a^2} - \frac{y^2}{b^2} = \lambda$（$\lambda \neq 0$）。$\lambda > 0$ 时焦点在 $x$ 轴，$\lambda < 0$ 时焦点在 $y$ 轴。代入已知点即可求出 $\lambda$。
