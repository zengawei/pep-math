---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - circle-equation
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P63 复习参考题 第18题"
---

**题目：** 求与圆 $C: (x + 1)^2 + (y - 2)^2 = 4$ 相切，且在两坐标轴上截距相等的直线方程。

---

**解答：**

**第1步：** 分情况讨论
> 📌 运用知识点：直线与圆的位置关系

**情况一：** 截距为零（过原点）。

设 $y = kx$，即 $kx - y = 0$。

圆心 $C(-1, 2)$ 到直线距离等于半径 $2$：

$$\frac{|-k - 2|}{\sqrt{k^2 + 1}} = 2 \Rightarrow (k + 2)^2 = 4(k^2 + 1)$$

$$k^2 + 4k + 4 = 4k^2 + 4 \Rightarrow 3k^2 - 4k = 0 \Rightarrow k(3k - 4) = 0$$

$k = 0$ 或 $k = \dfrac{4}{3}$。

切线：$y = 0$ 或 $y = \dfrac{4}{3}x$，即 $4x - 3y = 0$。

**第2步：** 截距不为零
> 📌 运用知识点：直线方程的应用

设 $\dfrac{x}{a} + \dfrac{y}{a} = 1$，即 $x + y = a$。

$$\frac{|-1 + 2 - a|}{\sqrt{2}} = 2 \Rightarrow |1 - a| = 2\sqrt{2}$$

$a = 1 \pm 2\sqrt{2}$。

切线：$x + y - 1 - 2\sqrt{2} = 0$ 或 $x + y - 1 + 2\sqrt{2} = 0$。

**第3步：** 汇总
> 📌 运用知识点：直线与圆的位置关系

共四条切线：$y = 0$，$4x - 3y = 0$，$x + y - 1 - 2\sqrt{2} = 0$，$x + y - 1 + 2\sqrt{2} = 0$。

**⚠️ 易错提醒：** "截距相等"包含截距都为零的情况。过原点的直线要单独讨论，不能直接用截距式。

**💡 解题思路总结：** 含条件的切线问题：分类讨论（截距是否为零）→ 利用圆心到直线距离等于半径列方程 → 求解。
