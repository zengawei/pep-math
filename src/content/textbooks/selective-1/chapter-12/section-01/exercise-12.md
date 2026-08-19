---
type: exercise
textbook: selective-1
chapter: 12
section: 1
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - line-equation
  - line-inclination-slope
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P35 练习C 第12题"
---

**题目：** 已知直线 $l$ 的方程为 $(2m + 1)x + (m + 1)y - 3m - 2 = 0$（$m$ 为任意实数）。

(1) 证明：不论 $m$ 取何值，直线 $l$ 恒过定点 $M$；

(2) 若直线 $l$ 与 $x$ 轴、$y$ 轴的正半轴分别交于 $A$、$B$ 两点，$O$ 为原点，求 $\triangle AOB$ 面积的最小值及此时直线 $l$ 的方程。

---

**解答：**

**第1步：** 证明恒过定点
> 📌 运用知识点：直线的方程

将方程按 $m$ 整理：

$m(2x + y - 3) + (x + y - 2) = 0$

对任意 $m$ 成立，需：

$\begin{cases} 2x + y - 3 = 0 \\ x + y - 2 = 0 \end{cases}$

两式相减：$x = 1$，代入得 $y = 1$。

所以直线恒过定点 $M(1, 1)$。

验证：$(2m+1)(1) + (m+1)(1) - 3m - 2 = 2m + 1 + m + 1 - 3m - 2 = 0$ ✓

**第2步：** 设直线方程并求交点
> 📌 运用知识点：直线的方程

直线过 $M(1, 1)$，设斜率为 $k$（$k < 0$，因为与两轴正半轴相交）：

$y - 1 = k(x - 1)$

令 $y = 0$：$x = 1 - \dfrac{1}{k}$，所以 $A\left(1 - \dfrac{1}{k}, 0\right)$。

令 $x = 0$：$y = 1 - k$，所以 $B(0, 1 - k)$。

因为 $k < 0$：$1 - \dfrac{1}{k} > 1 > 0$ ✓，$1 - k > 1 > 0$ ✓

**第3步：** 求面积并求最小值
> 📌 运用知识点：直线的方程

$S = \dfrac{1}{2}\left(1 - \dfrac{1}{k}\right)(1 - k) = \dfrac{1}{2}\left(1 - k - \dfrac{1}{k} + 1\right) = \dfrac{1}{2}\left(2 - k - \dfrac{1}{k}\right)$

设 $t = -k > 0$：

$S = \dfrac{1}{2}\left(2 + t + \dfrac{1}{t}\right) \geq \dfrac{1}{2}(2 + 2) = 2$

等号成立：$t = \dfrac{1}{t}$，$t = 1$，即 $k = -1$。

**第4步：** 写出直线方程
> 📌 运用知识点：直线的方程

$k = -1$ 时：$y - 1 = -(x - 1)$，即 $x + y - 2 = 0$。

$\triangle AOB$ 面积的最小值为 $2$。

**⚠️ 易错提醒：** 含参数直线系恒过定点，关键是按参数整理后令各系数为零。求面积最值时，利用基本不等式 $t + \dfrac{1}{t} \geq 2$，要验证等号成立条件 $t = 1$ 在定义域内。

**💡 解题思路总结：** 直线系过定点问题用"按参数整理 + 令系数为零"法。面积最值问题将几何量用斜率表示，再用基本不等式求解，是解析几何中的经典方法。
