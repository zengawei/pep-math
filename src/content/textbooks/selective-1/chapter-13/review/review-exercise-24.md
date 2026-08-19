---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - curve-equation-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P106 复习参考题 第24题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的离心率为 $\dfrac{\sqrt{2}}{2}$，且经过点 $(2, 1)$。

(1) 求椭圆 $C$ 的方程。

(2) 直线 $y = x + m$ 与椭圆 $C$ 交于 $A, B$ 两点，求 $|AB|$ 的最大值。

---

**解答：**

**第1步：** 求椭圆方程
> 📌 运用知识点：求曲线方程的方法

$e = \dfrac{c}{a} = \dfrac{\sqrt{2}}{2}$，$c^2 = \dfrac{a^2}{2}$，$b^2 = a^2 - c^2 = \dfrac{a^2}{2}$。

代入 $(2, 1)$：$\dfrac{4}{a^2} + \dfrac{1}{\frac{a^2}{2}} = \dfrac{4}{a^2} + \dfrac{2}{a^2} = \dfrac{6}{a^2} = 1$。

$a^2 = 6$，$b^2 = 3$。

椭圆方程：$\dfrac{x^2}{6} + \dfrac{y^2}{3} = 1$。

**第2步：** 求弦长
> 📌 运用知识点：圆锥曲线与直线的位置关系

代入 $y = x + m$：$x^2 + 2(x + m)^2 = 6$，$3x^2 + 4mx + 2m^2 - 6 = 0$。

$\Delta = 16m^2 - 12(2m^2 - 6) = -8m^2 + 72 > 0 \Rightarrow m^2 < 9$。

$x_1 + x_2 = -\dfrac{4m}{3}$，$x_1 x_2 = \dfrac{2m^2 - 6}{3}$。

$|AB| = \sqrt{2}|x_1 - x_2| = \sqrt{2}\sqrt{(x_1+x_2)^2 - 4x_1 x_2}$

$= \sqrt{2}\sqrt{\frac{16m^2}{9} - \frac{4(2m^2 - 6)}{3}} = \sqrt{2}\sqrt{\frac{16m^2 - 24m^2 + 72}{9}} = \sqrt{2}\sqrt{\frac{-8m^2 + 72}{9}}$

$= \frac{\sqrt{2}}{3}\sqrt{72 - 8m^2}$

当 $m = 0$ 时取最大值：$|AB|_{\max} = \dfrac{\sqrt{2}}{3} \cdot \sqrt{72} = \dfrac{\sqrt{2} \cdot 6\sqrt{2}}{3} = 4$。

**⚠️ 易错提醒：** 弦长最大时 $m = 0$（直线过原点）。要确保判别式大于零。

**💡 解题思路总结：** 先由离心率和已知点确定椭圆方程，再用韦达定理求弦长表达式，最后求最值。
