---
type: example
textbook: selective-1
chapter: 13
section: 1
number: 6
knowledge_points:
  - conic-section-line
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P66 例6"
---

**例题：** 已知椭圆 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的离心率为 $\dfrac{\sqrt{2}}{2}$，直线 $y = x + 1$ 与椭圆交于 $A, B$ 两点，且 $|AB| = \dfrac{4\sqrt{3}}{3}$，求椭圆的方程。

**解答：**

**第1步：** 利用离心率
> 📌 运用知识点：椭圆的几何性质

$e = \dfrac{c}{a} = \dfrac{\sqrt{2}}{2}$，$c^2 = \dfrac{a^2}{2}$

$b^2 = a^2 - c^2 = \dfrac{a^2}{2}$

椭圆方程化为：$\dfrac{x^2}{a^2} + \dfrac{2y^2}{a^2} = 1$，即 $x^2 + 2y^2 = a^2$

**第2步：** 联立直线与椭圆
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = x + 1$ 代入 $x^2 + 2y^2 = a^2$：

$x^2 + 2(x + 1)^2 = a^2$

$3x^2 + 4x + 2 - a^2 = 0$

$x_1 + x_2 = -\dfrac{4}{3}$，$x_1 x_2 = \dfrac{2 - a^2}{3}$

**第3步：** 利用弦长
> 📌 运用知识点：直线与圆锥曲线的位置关系

$|AB| = \sqrt{1 + k^2} \cdot |x_1 - x_2| = \sqrt{2} \cdot \sqrt{(x_1+x_2)^2 - 4x_1x_2}$

$= \sqrt{2} \cdot \sqrt{\dfrac{16}{9} - \dfrac{4(2 - a^2)}{3}} = \sqrt{2} \cdot \sqrt{\dfrac{16 - 24 + 12a^2}{9}} = \sqrt{2} \cdot \dfrac{\sqrt{12a^2 - 8}}{3}$

$= \dfrac{\sqrt{2} \cdot 2\sqrt{3a^2 - 2}}{3} = \dfrac{2\sqrt{6a^2 - 4}}{3} = \dfrac{4\sqrt{3}}{3}$

$\sqrt{6a^2 - 4} = 2\sqrt{3}$

$6a^2 - 4 = 12$

$a^2 = \dfrac{16}{6} = \dfrac{8}{3}$

$b^2 = \dfrac{4}{3}$

**第4步：** 写出方程
> 📌 运用知识点：椭圆的定义与标准方程

椭圆方程：$\dfrac{x^2}{8/3} + \dfrac{y^2}{4/3} = 1$，即 $\dfrac{3x^2}{8} + \dfrac{3y^2}{4} = 1$

**💡 解题思路总结：** 已知离心率和弦长求椭圆方程：① 用离心率将 $b^2$ 用 $a^2$ 表示，减少未知量；② 联立后利用韦达定理和弦长公式建立关于 $a^2$ 的方程。
