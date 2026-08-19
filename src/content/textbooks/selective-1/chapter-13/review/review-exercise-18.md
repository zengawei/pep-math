---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - parabola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P103 复习参考题 第18题"
---

**题目：** 过抛物线 $y^2 = 4x$ 的焦点 $F$ 的直线交抛物线于 $A, B$ 两点。若 $|AF| = 3|BF|$，求直线 $AB$ 的斜率。

---

**解答：**

**第1步：** 设直线
> 📌 运用知识点：抛物线的几何性质

焦点 $F(1, 0)$。设 $A(x_1, y_1), B(x_2, y_2)$。

由焦半径公式：$|AF| = x_1 + 1$，$|BF| = x_2 + 1$。

$x_1 + 1 = 3(x_2 + 1)$，$x_1 = 3x_2 + 2$。

**第2步：** 利用韦达定理
> 📌 运用知识点：圆锥曲线与直线的位置关系

设直线 $x = my + 1$，代入 $y^2 = 4x$：$y^2 - 4my - 4 = 0$。

$y_1 y_2 = -4$，$y_1 + y_2 = 4m$。

又 $y_1^2 = 4x_1, y_2^2 = 4x_2$。

$x_1 x_2 = \dfrac{y_1^2 y_2^2}{16} = \dfrac{16}{16} = 1$。

由 $x_1 = 3x_2 + 2$：$x_1 x_2 = (3x_2 + 2)x_2 = 3x_2^2 + 2x_2 = 1$。

$3x_2^2 + 2x_2 - 1 = 0$，$(3x_2 - 1)(x_2 + 1) = 0$。

$x_2 = \dfrac{1}{3}$（$x_2 > 0$），$x_1 = 3$。

$y_2^2 = \dfrac{4}{3}$，$y_2 = \pm\dfrac{2}{\sqrt{3}}$；$y_1^2 = 12$，$y_1 = \pm 2\sqrt{3}$。

**第3步：** 求斜率
> 📌 运用知识点：圆锥曲线与直线的位置关系

$k = \dfrac{y_1 - y_2}{x_1 - x_2} = \dfrac{\pm 2\sqrt{3} \mp \frac{2}{\sqrt{3}}}{3 - \frac{1}{3}} = \dfrac{\pm\frac{8}{\sqrt{3}}}{\frac{8}{3}} = \pm\sqrt{3}$。

**⚠️ 易错提醒：** 抛物线焦半径 $|PF| = x_0 + \frac{p}{2}$。$y_1, y_2$ 异号（因为 $y_1 y_2 = -4 < 0$），注意符号对应。

**💡 解题思路总结：** 焦点弦的比例问题：焦半径公式 + 韦达定理联立求解。
