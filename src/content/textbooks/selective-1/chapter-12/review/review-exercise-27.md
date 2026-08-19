---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - circle-equation
  - line-circle-position
  - coordinate-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P68 复习参考题 第27题"
---

**题目：** 已知圆 $C: (x - 1)^2 + (y - 2)^2 = 25$，直线 $l: (2m + 1)x + (m + 1)y - 7m - 4 = 0$（$m$ 为任意实数）。

(1) 证明：直线 $l$ 恒过定点，并求定点坐标。

(2) 求直线 $l$ 被圆 $C$ 截得的最短弦长。

(3) 当弦长最短时，求 $m$ 的值。

---

**解答：**

**第1步：** 求定点
> 📌 运用知识点：直线方程的应用

整理：$(2x + y - 7)m + (x + y - 4) = 0$。

对任意 $m$ 成立，需 $\begin{cases} 2x + y - 7 = 0 \\ x + y - 4 = 0 \end{cases}$。

解得 $x = 3, y = 1$。定点 $D(3, 1)$。

**第2步：** 求最短弦长
> 📌 运用知识点：直线与圆的位置关系

圆心 $C(1, 2)$，$r = 5$。

$|CD| = \sqrt{4 + 1} = \sqrt{5}$。

$D$ 在圆内（$\sqrt{5} < 5$），直线恒过圆内定点。

最短弦出现在 $l \perp CD$ 时，此时 $d = |CD| = \sqrt{5}$。

$$L_{\min} = 2\sqrt{25 - 5} = 2\sqrt{20} = 4\sqrt{5}$$

**第3步：** 求 $m$ 的值
> 📌 运用知识点：直线方程的应用

$k_{CD} = \dfrac{2 - 1}{1 - 3} = -\dfrac{1}{2}$。

$l \perp CD$ 时 $k_l = 2$。

$l$ 的斜率 $= -\dfrac{2m + 1}{m + 1} = 2$。

$-2m - 1 = 2m + 2 \Rightarrow 4m = -3 \Rightarrow m = -\dfrac{3}{4}$。

**⚠️ 易错提醒：** 含参直线过定点的方法：按参数整理，令参数系数和常数项同时为零。最短弦垂直于圆心与定点的连线。

**💡 解题思路总结：** 含参直线过定点 → 判断定点与圆的位置 → 最短弦垂直于圆心到定点连线。这是经典三步题。
