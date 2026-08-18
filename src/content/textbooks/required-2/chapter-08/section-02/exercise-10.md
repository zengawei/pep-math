---
type: exercise
textbook: required-2
chapter: 8
section: 2
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - solid-surface-area-volume
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 一个正三棱锥的所有棱长均为 $a$，求其外接球的半径。

---

**解答：**

**第1步：** 分析正三棱锥的结构
> 📌 运用知识点：正棱锥的结构特征

所有棱长为 $a$ 的正三棱锥，底面是边长为 $a$ 的正三角形，三条侧棱也均为 $a$。

底面中心 $O$ 到底面顶点的距离：$R_{\text{底}} = \frac{a}{\sqrt{3}} = \frac{\sqrt{3}}{3}a$

**第2步：** 求棱锥的高
> 📌 运用知识点：棱锥的高

设顶点为 $S$，$SO \perp$ 底面，$SA = a$。

$h = SO = \sqrt{SA^2 - R_{\text{底}}^2} = \sqrt{a^2 - \frac{a^2}{3}} = \sqrt{\frac{2a^2}{3}} = \frac{\sqrt{6}}{3}a$

**第3步：** 求外接球半径
> 📌 运用知识点：球的切接问题

设外接球球心为 $O'$，在 $SO$ 上（由对称性），$O'$ 到底面顶点 $A$ 和到顶点 $S$ 的距离相等。

设 $O'$ 距底面为 $x$，则 $O'A = R$（外接球半径），$O'S = R$。

$R^2 = x^2 + R_{\text{底}}^2 = x^2 + \frac{a^2}{3}$

$R = h - x$，所以 $(h - x)^2 = x^2 + \frac{a^2}{3}$

$h^2 - 2hx + x^2 = x^2 + \frac{a^2}{3}$

$h^2 - 2hx = \frac{a^2}{3}$

$\frac{2a^2}{3} - 2hx = \frac{a^2}{3}$

$x = \frac{a^2}{6h} = \frac{a^2}{6 \times \frac{\sqrt{6}}{3}a} = \frac{a}{2\sqrt{6}} = \frac{\sqrt{6}}{12}a$

$R = h - x = \frac{\sqrt{6}}{3}a - \frac{\sqrt{6}}{12}a = \frac{4\sqrt{6} - \sqrt{6}}{12}a = \frac{3\sqrt{6}}{12}a = \frac{\sqrt{6}}{4}a$

**💡 易错提醒：** 正三棱锥的外接球球心不一定在棱锥内部。求外接球半径的关键是利用球心到各顶点距离相等，建立方程求解。

**💡 解题思路总结：** 正棱锥的外接球问题，利用对称性确定球心在高所在的直线上，再由球心到顶点和底面顶点距离相等列方程。
