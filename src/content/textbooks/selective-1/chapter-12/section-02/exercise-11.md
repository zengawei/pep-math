---
type: exercise
textbook: selective-1
chapter: 12
section: 2
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P44 练习C 第11题"
---

**题目：** 已知点 $P(x, y)$ 在圆 $x^2 + y^2 - 6x - 6y + 14 = 0$ 上，求 $x + y$ 的最大值和最小值。

---

**解答：**

**第1步：** 化为标准方程
> 📌 运用知识点：圆的方程

$(x - 3)^2 + (y - 3)^2 = 4$

圆心 $C(3, 3)$，半径 $r = 2$。

**第2步：** 设参数
> 📌 运用知识点：圆的方程

设 $x + y = t$，即 $x + y - t = 0$。

直线与圆有交点，需圆心到直线的距离 $\leq r$：

$d = \dfrac{|3 + 3 - t|}{\sqrt{1 + 1}} = \dfrac{|6 - t|}{\sqrt{2}} \leq 2$

**第3步：** 求解不等式
> 📌 运用知识点：圆的方程

$|6 - t| \leq 2\sqrt{2}$

$6 - 2\sqrt{2} \leq t \leq 6 + 2\sqrt{2}$

$x + y$ 的最大值为 $6 + 2\sqrt{2}$，最小值为 $6 - 2\sqrt{2}$。

**⚠️ 易错提醒：** 配方时注意：$x^2 - 6x$ 加 $9$，$y^2 - 6y$ 加 $9$，右边 $= -14 + 9 + 9 = 4$。求 $x + y$ 的最值时，将 $x + y = t$ 视为直线与圆有交点的条件，利用 $d \leq r$ 列不等式。

**💡 解题思路总结：** 圆上点的线性表达式 $ax + by$ 的最值问题，令 $ax + by = t$ 转化为直线与圆有交点的问题，利用 $d \leq r$ 求 $t$ 的范围。
