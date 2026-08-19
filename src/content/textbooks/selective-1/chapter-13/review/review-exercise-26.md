---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 26
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - parabola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P107 复习参考题 第26题"
---

**题目：** 已知抛物线 $C: y^2 = 4x$ 的焦点为 $F$，过 $F$ 的直线交 $C$ 于 $A, B$ 两点。

(1) 若 $|AF| + |BF| = 8$，求直线 $AB$ 的方程。

(2) 证明：$\dfrac{1}{|AF|} + \dfrac{1}{|BF|}$ 为定值。

---

**解答：**

**第1步：** 求直线方程
> 📌 运用知识点：抛物线的几何性质

$F(1, 0)$，$p = 2$。设 $x = my + 1$。

$y^2 - 4my - 4 = 0$，$y_1 + y_2 = 4m$，$y_1 y_2 = -4$。

$|AF| + |BF| = x_1 + x_2 + 2 = m(y_1 + y_2) + 2 + 2 = 4m^2 + 4 = 8$。

$m^2 = 1$，$m = \pm 1$。

直线：$x = \pm y + 1$，即 $x - y - 1 = 0$ 或 $x + y - 1 = 0$。

**第2步：** 证明定值
> 📌 运用知识点：抛物线的几何性质

$$\frac{1}{|AF|} + \frac{1}{|BF|} = \frac{1}{x_1 + 1} + \frac{1}{x_2 + 1} = \frac{x_1 + x_2 + 2}{(x_1 + 1)(x_2 + 1)}$$

$x_1 + x_2 = m(y_1 + y_2) + 2 = 4m^2 + 2$。

$(x_1 + 1)(x_2 + 1) = x_1 x_2 + x_1 + x_2 + 1$。

$x_1 x_2 = (my_1 + 1)(my_2 + 1) = m^2 y_1 y_2 + m(y_1 + y_2) + 1 = -4m^2 + 4m^2 + 1 = 1$。

$(x_1 + 1)(x_2 + 1) = 1 + 4m^2 + 2 + 1 = 4m^2 + 4$。

$$\frac{1}{|AF|} + \frac{1}{|BF|} = \frac{4m^2 + 4}{4m^2 + 4} = 1$$

定值为 $1$。

**⚠️ 易错提醒：** 抛物线焦点弦的倒数和为定值 $\frac{2}{p}$。本题 $p = 2$，定值为 $1$。计算 $x_1 x_2$ 时利用韦达定理化简。

**💡 解题思路总结：** 抛物线焦点弦性质：$\frac{1}{|AF|} + \frac{1}{|BF|} = \frac{2}{p}$ 是定值。用韦达定理可以证明。
