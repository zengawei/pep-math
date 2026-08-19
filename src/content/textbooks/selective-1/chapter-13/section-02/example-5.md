---
type: example
textbook: selective-1
chapter: 13
section: 2
number: 5
knowledge_points:
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P75 例5"
---

**例题：** 已知双曲线 $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$（$a > 0, b > 0$），左顶点为 $A$，过右焦点 $F$ 作垂直于 $x$ 轴的直线交双曲线于 $B, C$。若 $AB \perp AC$，求双曲线的离心率。

**解答：**

**第1步：** 确定坐标
> 📌 运用知识点：双曲线的几何性质

$A(-a, 0)$，$F(c, 0)$

过 $F$ 垂直于 $x$ 轴的直线 $x = c$，代入双曲线：

$\dfrac{c^2}{a^2} - \dfrac{y^2}{b^2} = 1$

$\dfrac{y^2}{b^2} = \dfrac{c^2}{a^2} - 1 = \dfrac{c^2 - a^2}{a^2} = \dfrac{b^2}{a^2}$

$y^2 = \dfrac{b^4}{a^2}$，$y = \pm\dfrac{b^2}{a}$

$B\left(c, \dfrac{b^2}{a}\right)$，$C\left(c, -\dfrac{b^2}{a}\right)$

**第2步：** 利用垂直条件
> 📌 运用知识点：双曲线的几何性质

$\overrightarrow{AB} = \left(c + a, \dfrac{b^2}{a}\right)$，$\overrightarrow{AC} = \left(c + a, -\dfrac{b^2}{a}\right)$

$\overrightarrow{AB} \cdot \overrightarrow{AC} = (c + a)^2 - \dfrac{b^4}{a^2} = 0$

$(c + a)^2 = \dfrac{b^4}{a^2}$

$c + a = \dfrac{b^2}{a}$（取正值，因为 $c + a > 0, b^2/a > 0$）

**第3步：** 求离心率
> 📌 运用知识点：双曲线的几何性质

$a(c + a) = b^2 = c^2 - a^2 = (c - a)(c + a)$

$a = c - a$

$c = 2a$

$e = \dfrac{c}{a} = 2$

**💡 解题思路总结：** 由几何条件求离心率：① 用 $a, b, c$ 表示各点坐标；② 将几何条件（如垂直）转化为代数方程；③ 化简得到 $a, b, c$ 的关系，求出 $e$。
