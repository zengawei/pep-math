---
type: exercise
textbook: selective-1
chapter: 12
section: 2
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P43 练习B 第9题"
---

**题目：** 已知实数 $x, y$ 满足 $x^2 + y^2 - 4x + 1 = 0$，求 $\dfrac{y}{x}$ 的最大值和最小值。

---

**解答：**

**第1步：** 化为标准方程
> 📌 运用知识点：圆的方程

$(x - 2)^2 + y^2 = 3$

圆心 $C(2, 0)$，半径 $r = \sqrt{3}$。

**第2步：** 理解几何意义
> 📌 运用知识点：圆的方程

$\dfrac{y}{x}$ 表示圆上的点 $(x, y)$ 与原点 $O(0, 0)$ 连线的斜率 $k$。

设 $y = kx$，即 $kx - y = 0$。

**第3步：** 利用圆心到直线的距离
> 📌 运用知识点：圆的方程

直线 $kx - y = 0$ 与圆有交点，需圆心到直线的距离 $\leq r$：

$d = \dfrac{|2k - 0|}{\sqrt{k^2 + 1}} = \dfrac{2|k|}{\sqrt{k^2 + 1}} \leq \sqrt{3}$

$4k^2 \leq 3(k^2 + 1)$

$4k^2 \leq 3k^2 + 3$

$k^2 \leq 3$

$-\sqrt{3} \leq k \leq \sqrt{3}$

**⚠️ 易错提醒：** $\dfrac{y}{x}$ 的几何意义是过原点的直线的斜率。求斜率的范围时，利用直线与圆有交点（$d \leq r$）来列不等式，而不是令 $d = r$（那是相切的情况，给出的是边界值）。

**💡 解题思路总结：** 圆上点与定点连线的斜率范围问题，将斜率设为 $k$，写出直线方程，利用圆心到直线的距离 $\leq r$ 建立关于 $k$ 的不等式求解。
