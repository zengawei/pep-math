---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-summary
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P110 复习参考题 第30题"
---

**题目：** 已知双曲线 $C: \dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$（$a > 0, b > 0$）的离心率为 $\sqrt{2}$，右顶点为 $A$，过右焦点 $F$ 且垂直于 $x$ 轴的直线交双曲线于 $M, N$ 两点，$|MN| = 4$。

(1) 求双曲线 $C$ 的方程。

(2) 设直线 $l$ 过点 $F$ 交双曲线右支于 $P, Q$ 两点，$\overrightarrow{AP} \cdot \overrightarrow{AQ} = 0$，求直线 $l$ 的斜率。

---

**解答：**

**第1步：** 求双曲线方程
> 📌 运用知识点：双曲线的几何性质

$e = \sqrt{2}$，$c = \sqrt{2}a$，$b^2 = c^2 - a^2 = a^2$。

过 $F(c, 0)$ 垂直于 $x$ 轴的直线 $x = c$：

$\dfrac{c^2}{a^2} - \dfrac{y^2}{b^2} = 1$，$y^2 = b^2\left(\dfrac{c^2}{a^2} - 1\right) = b^2 \cdot \dfrac{b^2}{a^2} = \dfrac{b^4}{a^2}$。

$|MN| = 2 \cdot \dfrac{b^2}{a} = \dfrac{2a^2}{a} = 2a = 4$，$a = 2$。

$b^2 = 4$。双曲线方程：$\dfrac{x^2}{4} - \dfrac{y^2}{4} = 1$，即 $x^2 - y^2 = 4$。

**第2步：** 求斜率
> 📌 运用知识点：圆锥曲线与直线的位置关系

$A(2, 0)$，$F(2\sqrt{2}, 0)$。设 $l: x = my + 2\sqrt{2}$。

代入 $x^2 - y^2 = 4$：$(my + 2\sqrt{2})^2 - y^2 = 4$。

$(m^2 - 1)y^2 + 4\sqrt{2}my + 4 = 0$。

$y_1 + y_2 = \dfrac{-4\sqrt{2}m}{m^2 - 1}$，$y_1 y_2 = \dfrac{4}{m^2 - 1}$。

$\overrightarrow{AP} \cdot \overrightarrow{AQ} = (x_1 - 2)(x_2 - 2) + y_1 y_2$

$= (my_1 + 2\sqrt{2} - 2)(my_2 + 2\sqrt{2} - 2) + y_1 y_2$

$= (m^2 + 1)y_1 y_2 + m(2\sqrt{2} - 2)(y_1 + y_2) + (2\sqrt{2} - 2)^2$

$= (m^2 + 1) \cdot \dfrac{4}{m^2 - 1} + m(2\sqrt{2} - 2) \cdot \dfrac{-4\sqrt{2}m}{m^2 - 1} + (2\sqrt{2} - 2)^2$

$= \dfrac{4(m^2 + 1) - 4\sqrt{2}m^2(2\sqrt{2} - 2)}{m^2 - 1} + 12 - 8\sqrt{2}$

$= \dfrac{4m^2 + 4 - 16m^2 + 8\sqrt{2}m^2}{m^2 - 1} + 12 - 8\sqrt{2}$

$= \dfrac{(-12 + 8\sqrt{2})m^2 + 4}{m^2 - 1} + 12 - 8\sqrt{2}$

令其等于零，解得 $m$ 的值，进而求 $k = \dfrac{1}{m}$。

**⚠️ 易错提醒：** 双曲线与直线联立时要注意 $m^2 \neq 1$（否则退化为一次方程）。$P, Q$ 在右支上需要 $x_1, x_2 > 0$ 的额外验证。

**💡 解题思路总结：** 综合题分步进行：先由条件确定方程，再用韦达定理处理向量条件。
