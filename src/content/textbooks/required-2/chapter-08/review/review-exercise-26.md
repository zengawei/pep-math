---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - solid-surface-area-volume
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 正三棱锥 $P\text{-}ABC$ 的底面边长为 $2\sqrt{3}$，侧棱长为 $\sqrt{7}$。求其外接球的半径。

---

**解答：**

**第1步：** 求底面外接圆半径
> 📌 运用知识点：正三角形的外接圆半径

底面边长 $a = 2\sqrt{3}$，外接圆半径 $R_{\text{底}} = \frac{a}{\sqrt{3}} = \frac{2\sqrt{3}}{\sqrt{3}} = 2$

**第2步：** 求棱锥的高
> 📌 运用知识点：正棱锥的高

$h = \sqrt{PA^2 - R_{\text{底}}^2} = \sqrt{7 - 4} = \sqrt{3}$

**第3步：** 求外接球半径
> 📌 运用知识点：球的切接问题

设外接球球心 $O'$ 在高 $PO$ 上（由对称性），$O'$ 距底面为 $x$。

$R^2 = x^2 + R_{\text{底}}^2 = x^2 + 4$

$R = h - x$（球心在棱锥内部时），$(h - x)^2 = x^2 + 4$

$3 - 2\sqrt{3}x + x^2 = x^2 + 4$

$3 - 2\sqrt{3}x = 4$

$x = -\frac{1}{2\sqrt{3}} = -\frac{\sqrt{3}}{6}$

$x < 0$ 说明球心在底面下方（棱锥外部）。

$R = h - x = \sqrt{3} + \frac{\sqrt{3}}{6} = \frac{7\sqrt{3}}{6}$

**💡 易错提醒：** 外接球球心不一定在几何体内部。$x < 0$ 说明球心在底面的另一侧。

**💡 解题思路总结：** 正棱锥外接球问题：利用球心在高上，由球心到顶点和底面顶点距离相等列方程。
