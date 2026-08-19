---
type: exercise
textbook: selective-1
chapter: 13
section: 3
number: 11
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P85 练习B 第4题"
---

**题目：** 已知抛物线 $x^2 = 4y$，过点 $M(0, 2)$ 的直线与抛物线交于 $A, B$ 两点，求 $|AB|$ 的最小值。

---

**解答：**

**第1步：** 设直线方程
> 📌 运用知识点：直线与圆锥曲线的位置关系

直线过 $M(0, 2)$，设 $y = kx + 2$（先考虑斜率存在的情况）。

代入 $x^2 = 4y$：$x^2 = 4(kx + 2)$

$x^2 - 4kx - 8 = 0$

$x_1 + x_2 = 4k$，$x_1 x_2 = -8$

判别式 $\Delta = 16k^2 + 32 > 0$（恒成立）

**第2步：** 求弦长
> 📌 运用知识点：圆锥曲线的最值问题

$|AB| = \sqrt{1 + k^2} \cdot |x_1 - x_2|$

$|x_1 - x_2| = \sqrt{(x_1+x_2)^2 - 4x_1x_2} = \sqrt{16k^2 + 32} = 4\sqrt{k^2 + 2}$

$|AB| = \sqrt{1+k^2} \cdot 4\sqrt{k^2+2} = 4\sqrt{(1+k^2)(k^2+2)}$

**第3步：** 求最小值
> 📌 运用知识点：圆锥曲线的最值问题

设 $t = k^2 \geqslant 0$：

$f(t) = (1+t)(t+2) = t^2 + 3t + 2 = \left(t + \dfrac{3}{2}\right)^2 - \dfrac{1}{4}$

在 $t \geqslant 0$ 上，$f(t)$ 单调递增，$f(0) = 2$

$|AB|_{\min} = 4\sqrt{2}$（当 $k = 0$ 时取到）

当 $k = 0$ 时，直线 $y = 2$（水平线），代入 $x^2 = 8$，$x = \pm 2\sqrt{2}$

$|AB| = 4\sqrt{2}$ ✓

斜率不存在时（直线 $x = 0$），与抛物线只有一个交点 $(0, 0)$，不合题意。

**⚠️ 易错提醒：** ① 换元后要注意新变量的范围（$t = k^2 \geqslant 0$）；② 最小值在 $k = 0$ 时取到，即弦为水平弦（通径方向），不要忽略这个简单情况。

**💡 解题思路总结：** 抛物线弦长最值问题：将弦长表示为斜率的函数，利用二次函数或基本不等式求最小值。
