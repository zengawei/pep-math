---
type: exercise
textbook: selective-1
chapter: 13
section: 2
number: 3
difficulty: hard
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hyperbola-definition
  - hyperbola-properties
source: "人教A版2019"
references: "课标13.2.2"
---

**题目：** 已知双曲线 $\dfrac{x^2}{4} - y^2 = 1$ 的两条渐近线为 $l_1, l_2$，过右焦点 $F$ 作直线 $l \parallel l_1$，$l$ 与双曲线交于点 $A$，求 $|AF|$。

---

**解答：**

**第1步：** 确定基本量和渐近线
> 📌 运用知识点：双曲线的几何性质

$a^2 = 4$，$b^2 = 1$，$c^2 = a^2 + b^2 = 5$

$a = 2$，$c = \sqrt{5}$，右焦点 $F(\sqrt{5}, 0)$

渐近线：$y = \pm\dfrac{1}{2}x$

**第2步：** 求直线 $l$ 的方程
> 📌 运用知识点：双曲线的几何性质

$l \parallel l_1$，取 $l_1: y = \dfrac{1}{2}x$，则 $l: y = \dfrac{1}{2}(x - \sqrt{5})$

**第3步：** 联立求交点
> 📌 运用知识点：双曲线的定义与标准方程

将 $y = \dfrac{1}{2}(x - \sqrt{5})$ 代入 $\dfrac{x^2}{4} - y^2 = 1$：

$\dfrac{x^2}{4} - \dfrac{(x - \sqrt{5})^2}{4} = 1$

$x^2 - (x^2 - 2\sqrt{5}x + 5) = 4$

$2\sqrt{5}x - 5 = 4$

$x = \dfrac{9}{2\sqrt{5}} = \dfrac{9\sqrt{5}}{10}$

$y = \dfrac{1}{2}\left(\dfrac{9\sqrt{5}}{10} - \sqrt{5}\right) = \dfrac{1}{2} \times \dfrac{-\sqrt{5}}{10} = -\dfrac{\sqrt{5}}{20}$

**第4步：** 求 $|AF|$
> 📌 运用知识点：双曲线的几何性质

$|AF| = \sqrt{\left(\dfrac{9\sqrt{5}}{10} - \sqrt{5}\right)^2 + \left(-\dfrac{\sqrt{5}}{20}\right)^2} = \sqrt{\left(-\dfrac{\sqrt{5}}{10}\right)^2 + \left(\dfrac{\sqrt{5}}{20}\right)^2}$

$= \sqrt{\dfrac{5}{100} + \dfrac{5}{400}} = \sqrt{\dfrac{20 + 5}{400}} = \sqrt{\dfrac{25}{400}} = \dfrac{5}{20} = \dfrac{1}{4}$

（注：与渐近线平行的直线与双曲线只有一个交点，但它不是切线。）

**💡 解题思路总结：** 与渐近线平行的直线和双曲线只有一个交点（但不是切线），联立方程后二次项消去，得到唯一解。
