---
type: exercise
textbook: selective-1
chapter: 12
section: 2
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P44 练习C 第12题"
---

**题目：** 已知圆 $C: x^2 + y^2 - 2x + 4y - 4 = 0$。是否存在斜率为 $1$ 的直线 $l$，使得 $l$ 被圆 $C$ 截得的弦 $AB$ 满足：以 $AB$ 为直径的圆经过原点？若存在，求出直线 $l$ 的方程；若不存在，说明理由。

---

**解答：**

**第1步：** 化简圆的方程
> 📌 运用知识点：圆的方程

$(x - 1)^2 + (y + 2)^2 = 9$

圆心 $C(1, -2)$，半径 $r = 3$。

**第2步：** 设直线方程
> 📌 运用知识点：圆的方程

设 $l: y = x + m$，即 $x - y + m = 0$。

圆心到直线的距离 $d = \dfrac{|1 + 2 + m|}{\sqrt{2}} = \dfrac{|3 + m|}{\sqrt{2}}$

要有交点需 $d < r$：$\dfrac{|3 + m|}{\sqrt{2}} < 3$，$(3 + m)^2 < 18$，$-3 - 3\sqrt{2} < m < -3 + 3\sqrt{2}$。

**第3步：** 利用"以 $AB$ 为直径的圆过原点"条件
> 📌 运用知识点：圆的方程

以 $AB$ 为直径的圆过原点 $O$，等价于 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$，即 $x_1x_2 + y_1y_2 = 0$。

联立 $\begin{cases} y = x + m \\ (x-1)^2 + (y+2)^2 = 9 \end{cases}$

代入：$(x-1)^2 + (x + m + 2)^2 = 9$

$x^2 - 2x + 1 + x^2 + 2(m+2)x + (m+2)^2 = 9$

$2x^2 + (2m + 2)x + m^2 + 4m - 4 = 0$

由韦达定理：$x_1 + x_2 = -(m + 1)$，$x_1x_2 = \dfrac{m^2 + 4m - 4}{2}$

$y_1y_2 = (x_1 + m)(x_2 + m) = x_1x_2 + m(x_1 + x_2) + m^2$

$= \dfrac{m^2 + 4m - 4}{2} + m(-(m+1)) + m^2$

$= \dfrac{m^2 + 4m - 4}{2} - m^2 - m + m^2$

$= \dfrac{m^2 + 4m - 4}{2} - m$

$= \dfrac{m^2 + 4m - 4 - 2m}{2} = \dfrac{m^2 + 2m - 4}{2}$

$x_1x_2 + y_1y_2 = \dfrac{m^2 + 4m - 4}{2} + \dfrac{m^2 + 2m - 4}{2} = \dfrac{2m^2 + 6m - 8}{2} = m^2 + 3m - 4 = 0$

$(m + 4)(m - 1) = 0$

$m = -4$ 或 $m = 1$

**第4步：** 验证
> 📌 运用知识点：圆的方程

$m = -4$：$|3 + (-4)| = 1 < 3\sqrt{2}$ ✓

$m = 1$：$|3 + 1| = 4 < 3\sqrt{2} \approx 4.24$ ✓

两个值都满足条件。

直线方程：$y = x - 4$ 或 $y = x + 1$。

**⚠️ 易错提醒：** "以 $AB$ 为直径的圆过原点"的条件是 $\overrightarrow{OA} \perp \overrightarrow{OB}$，即 $x_1x_2 + y_1y_2 = 0$。求出 $m$ 后必须验证判别式 $> 0$（直线与圆确实相交）。

**💡 解题思路总结：** 直线与圆的综合问题，将几何条件转化为代数方程。"以弦为直径的圆过定点"等价于该点对弦两端点的向量点积为零。联立直线与圆的方程，利用韦达定理是处理此类问题的核心方法。
