---
type: exercise
textbook: selective-1
chapter: 12
section: 2
number: 3
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P42 练习A 第3题"
---

**题目：** 求圆心在直线 $3x + y - 7 = 0$ 上，且经过点 $A(1, 1)$ 和 $B(3, 5)$ 的圆的标准方程。

---

**解答：**

**第1步：** 利用圆心在弦的垂直平分线上
> 📌 运用知识点：圆的方程

$AB$ 中点 $M = \left(\dfrac{1+3}{2}, \dfrac{1+5}{2}\right) = (2, 3)$

$k_{AB} = \dfrac{5 - 1}{3 - 1} = 2$

$AB$ 的垂直平分线斜率 $= -\dfrac{1}{2}$

垂直平分线方程：$y - 3 = -\dfrac{1}{2}(x - 2)$，即 $x + 2y - 8 = 0$

**第2步：** 联立求圆心
> 📌 运用知识点：圆的方程

$\begin{cases} 3x + y - 7 = 0 \\ x + 2y - 8 = 0 \end{cases}$

由第一式 $y = 7 - 3x$，代入第二式：$x + 2(7 - 3x) - 8 = 0$

$x + 14 - 6x - 8 = 0$，$-5x + 6 = 0$，$x = \dfrac{6}{5}$

$y = 7 - 3 \times \dfrac{6}{5} = 7 - \dfrac{18}{5} = \dfrac{17}{5}$

圆心 $C\left(\dfrac{6}{5}, \dfrac{17}{5}\right)$

**第3步：** 求半径并写出方程
> 📌 运用知识点：圆的方程

$r^2 = |CA|^2 = \left(1 - \dfrac{6}{5}\right)^2 + \left(1 - \dfrac{17}{5}\right)^2 = \left(-\dfrac{1}{5}\right)^2 + \left(-\dfrac{12}{5}\right)^2 = \dfrac{1}{25} + \dfrac{144}{25} = \dfrac{145}{25} = \dfrac{29}{5}$

圆的标准方程：$\left(x - \dfrac{6}{5}\right)^2 + \left(y - \dfrac{17}{5}\right)^2 = \dfrac{29}{5}$

**⚠️ 易错提醒：** 求圆心时利用"圆心在弦的垂直平分线上"这一性质，比直接设圆心坐标联立距离方程更简洁。垂直平分线的斜率是原线段斜率的负倒数，不要搞反符号。

**💡 解题思路总结：** 已知圆过两点且圆心在某直线上，利用弦的垂直平分线过圆心，与已知直线联立即可求出圆心。
