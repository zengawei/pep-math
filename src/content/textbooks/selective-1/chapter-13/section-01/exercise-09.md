---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P63 练习B 第2题"
---

**题目：** 已知直线 $y = x + 1$ 与椭圆 $\dfrac{x^2}{4} + y^2 = 1$ 交于 $A, B$ 两点，求 $|AB|$。

---

**解答：**

**第1步：** 联立方程
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = x + 1$ 代入 $\dfrac{x^2}{4} + y^2 = 1$：

$\dfrac{x^2}{4} + (x + 1)^2 = 1$

$\dfrac{x^2}{4} + x^2 + 2x + 1 = 1$

$\dfrac{5x^2}{4} + 2x = 0$

$x\left(\dfrac{5x}{4} + 2\right) = 0$

**第2步：** 求交点坐标
> 📌 运用知识点：直线与圆锥曲线的位置关系

$x_1 = 0$，$y_1 = 1$，即 $A(0, 1)$

$x_2 = -\dfrac{8}{5}$，$y_2 = -\dfrac{8}{5} + 1 = -\dfrac{3}{5}$，即 $B\left(-\dfrac{8}{5}, -\dfrac{3}{5}\right)$

**第3步：** 求弦长
> 📌 运用知识点：直线与圆锥曲线的位置关系

$|AB| = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} = \sqrt{\left(\dfrac{8}{5}\right)^2 + \left(1 + \dfrac{3}{5}\right)^2}$

$= \sqrt{\dfrac{64}{25} + \dfrac{64}{25}} = \sqrt{\dfrac{128}{25}} = \dfrac{8\sqrt{2}}{5}$

**⚠️ 易错提醒：** 联立直线与椭圆方程时，注意展开和化简的准确性。本题恰好可以直接因式分解，但一般情况需要用韦达定理和弦长公式 $|AB| = \sqrt{1 + k^2} \cdot |x_1 - x_2|$。

**💡 解题思路总结：** 直线与椭圆相交求弦长的方法：① 联立方程求交点坐标（能直接解出时）；② 韦达定理 + 弦长公式 $|AB| = \sqrt{1+k^2}\sqrt{(x_1+x_2)^2 - 4x_1x_2}$。
