---
type: exercise
textbook: selective-1
chapter: 13
section: 2
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P76 练习C 第2题"
---

**题目：** 已知双曲线 $C: \dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$（$a > 0, b > 0$）的离心率为 $\dfrac{\sqrt{5}}{2}$，一个焦点到一条渐近线的距离为 $2$。

(1) 求双曲线 $C$ 的方程；

(2) 设直线 $l: y = kx + m$ 与双曲线 $C$ 交于 $A, B$ 两点，$AB$ 的中点为 $M(2, 1)$，求 $k$ 的值和 $m$ 的取值范围。

---

**解答：**

**第1步：** 求双曲线方程
> 📌 运用知识点：双曲线的几何性质

$e = \dfrac{c}{a} = \dfrac{\sqrt{5}}{2}$，$c = \dfrac{\sqrt{5}}{2}a$

$b^2 = c^2 - a^2 = \dfrac{5}{4}a^2 - a^2 = \dfrac{1}{4}a^2$

渐近线 $y = \pm\dfrac{b}{a}x = \pm\dfrac{1}{2}x$，即 $x \pm 2y = 0$

焦点 $(c, 0)$ 到渐近线 $x - 2y = 0$ 的距离：

$d = \dfrac{|c|}{\sqrt{1+4}} = \dfrac{c}{\sqrt{5}} = \dfrac{\frac{\sqrt{5}}{2}a}{\sqrt{5}} = \dfrac{a}{2} = 2$

$a = 4$，$b^2 = \dfrac{1}{4} \times 16 = 4$

双曲线方程：$\dfrac{x^2}{16} - \dfrac{y^2}{4} = 1$

**第2步：** 联立直线与双曲线
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = kx + m$ 代入 $\dfrac{x^2}{16} - \dfrac{y^2}{4} = 1$：

$x^2 - 4(kx + m)^2 = 16$

$(1 - 4k^2)x^2 - 8kmx - 4m^2 - 16 = 0$

需要 $1 - 4k^2 \neq 0$（即 $k \neq \pm\dfrac{1}{2}$，不与渐近线平行）。

$x_1 + x_2 = \dfrac{8km}{1 - 4k^2}$

中点 $M(2, 1)$：$\dfrac{x_1 + x_2}{2} = 2$，$\dfrac{8km}{1 - 4k^2} = 4$

$2km = 1 - 4k^2 \quad \cdots (*)$

**第3步：** 利用中点纵坐标
> 📌 运用知识点：直线与圆锥曲线的位置关系

$y_1 + y_2 = k(x_1 + x_2) + 2m = k \cdot 4 + 2m = 4k + 2m$

$\dfrac{y_1 + y_2}{2} = 1$，$4k + 2m = 2$，$m = 1 - 2k$

代入 $(*)$：$2k(1 - 2k) = 1 - 4k^2$

$2k - 4k^2 = 1 - 4k^2$

$2k = 1$，$k = \dfrac{1}{2}$

但 $k = \dfrac{1}{2}$ 时 $1 - 4k^2 = 0$，与渐近线平行，矛盾！

重新审视：用点差法。

**第4步：** 点差法求 $k$
> 📌 运用知识点：直线与圆锥曲线的位置关系

$\dfrac{x_1^2}{16} - \dfrac{y_1^2}{4} = 1$，$\dfrac{x_2^2}{16} - \dfrac{y_2^2}{4} = 1$

相减：$\dfrac{(x_1+x_2)(x_1-x_2)}{16} - \dfrac{(y_1+y_2)(y_1-y_2)}{4} = 0$

$\dfrac{4}{16} - \dfrac{2}{4} \cdot k = 0$

$\dfrac{1}{4} - \dfrac{k}{2} = 0$，$k = \dfrac{1}{2}$

$k = \frac{1}{2}$ 恰好等于渐近线斜率，说明不存在满足条件的直线。

$m = 1 - 2 \times \dfrac{1}{2} = 0$

但 $k = \dfrac{1}{2}$ 使直线平行于渐近线，与双曲线只有一个交点，不能有两个交点 $A, B$。

因此不存在满足条件的 $k$ 和 $m$。

**⚠️ 易错提醒：** 中点弦问题用点差法求出的斜率，必须验证该斜率是否使直线与双曲线确实有两个交点。若斜率等于渐近线斜率，则直线与双曲线只有一个交点，不满足条件。

**💡 解题思路总结：** 双曲线中点弦问题：① 点差法求斜率；② 必须验证 $\Delta > 0$ 且不与渐近线平行。若点差法得出的斜率等于渐近线斜率，则说明不存在满足条件的弦。
