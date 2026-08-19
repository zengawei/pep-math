---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 14
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P65 练习C 第3题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的左焦点为 $F_1(-1, 0)$，离心率 $e = \dfrac{1}{2}$。

(1) 求椭圆的方程；

(2) 过 $F_1$ 的直线交椭圆于 $A, B$ 两点，求 $\triangle ABF_2$ 面积的最大值（$F_2$ 为右焦点）。

---

**解答：**

**第1步：** 求椭圆方程
> 📌 运用知识点：椭圆的定义与标准方程

$c = 1$，$e = \dfrac{c}{a} = \dfrac{1}{2}$，$a = 2$

$b^2 = a^2 - c^2 = 4 - 1 = 3$

椭圆方程：$\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$

**第2步：** 分析面积表达式
> 📌 运用知识点：圆锥曲线的最值问题

$F_2(1, 0)$，$|F_1F_2| = 2$

$\triangle ABF_2$ 的面积 $S = \dfrac{1}{2}|AB| \cdot d$，其中 $d$ 为 $F_2$ 到直线 $AB$ 的距离。

设直线 $AB: x = my - 1$（设 $x$ 关于 $y$ 的表达式，可避免斜率不存在的讨论）。

代入椭圆：$\dfrac{(my-1)^2}{4} + \dfrac{y^2}{3} = 1$

$3(my-1)^2 + 4y^2 = 12$

$(3m^2 + 4)y^2 - 6my - 9 = 0$

$y_1 + y_2 = \dfrac{6m}{3m^2 + 4}$，$y_1 y_2 = \dfrac{-9}{3m^2 + 4}$

**第3步：** 求 $|AB|$ 和 $d$
> 📌 运用知识点：圆锥曲线的最值问题

$|y_1 - y_2| = \sqrt{(y_1+y_2)^2 - 4y_1y_2} = \sqrt{\dfrac{36m^2}{(3m^2+4)^2} + \dfrac{36}{3m^2+4}} = \sqrt{\dfrac{36m^2 + 36(3m^2+4)}{(3m^2+4)^2}} = \dfrac{12\sqrt{m^2+1}}{3m^2+4}$

$|AB| = \sqrt{1+m^2} \cdot |y_1 - y_2| = \dfrac{12(m^2+1)}{3m^2+4}$

$F_2(1,0)$ 到直线 $x - my + 1 = 0$ 的距离 $d = \dfrac{|1+1|}{\sqrt{1+m^2}} = \dfrac{2}{\sqrt{1+m^2}}$

**第4步：** 求面积最大值
> 📌 运用知识点：圆锥曲线的最值问题

$S = \dfrac{1}{2} \cdot \dfrac{12(m^2+1)}{3m^2+4} \cdot \dfrac{2}{\sqrt{1+m^2}} = \dfrac{12\sqrt{m^2+1}}{3m^2+4}$

设 $t = \sqrt{m^2+1} \geqslant 1$，$m^2 = t^2 - 1$：

$S = \dfrac{12t}{3(t^2-1)+4} = \dfrac{12t}{3t^2+1}$

$S' = \dfrac{12(3t^2+1) - 12t \cdot 6t}{(3t^2+1)^2} = \dfrac{12 - 72t^2}{(3t^2+1)^2}$

令 $S' = 0$：$t^2 = \dfrac{1}{6}$，$t = \dfrac{1}{\sqrt{6}} < 1$，不在 $t \geqslant 1$ 范围内。

当 $t \geqslant 1$ 时 $S' < 0$，$S$ 单调递减，$S$ 在 $t = 1$（即 $m = 0$）时取最大值：

$S_{\max} = \dfrac{12 \times 1}{3 + 1} = 3$

此时 $m = 0$，直线为 $x = -1$（垂直于 $x$ 轴）。

**⚠️ 易错提醒：** ① 设直线为 $x = my - 1$ 可以包含斜率不存在的情况；② 换元后要检查新变量的范围；③ 求最值时注意单调性分析，极值点不在定义域内时要看端点。

**💡 解题思路总结：** 焦点三角形面积最值问题：将面积表示为关于一个参数的函数，利用换元法和单调性求最值。关键是正确表达 $|AB|$ 和距离 $d$。
