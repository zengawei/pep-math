---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P109 复习参考题 第29题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$，$F_1, F_2$ 为其左右焦点。过 $F_1$ 的直线 $l$ 交椭圆于 $A, B$ 两点。

(1) 求 $\triangle ABF_2$ 的周长。

(2) 求 $\triangle ABF_2$ 面积的最大值。

---

**解答：**

**第1步：** 求周长
> 📌 运用知识点：椭圆的定义

$a = 2, b = \sqrt{3}, c = 1$。$F_1(-1, 0), F_2(1, 0)$。

$\triangle ABF_2$ 的周长 $= |AF_2| + |BF_2| + |AB|$

$= |AF_2| + |BF_2| + |AF_1| + |BF_1|$

$= (|AF_1| + |AF_2|) + (|BF_1| + |BF_2|) = 2a + 2a = 4a = 8$。

**第2步：** 求面积最大值
> 📌 运用知识点：圆锥曲线中的最值问题

$S = \dfrac{1}{2}|AB| \cdot d$，其中 $d$ 为 $F_2$ 到直线 $l$ 的距离。

设 $l: x = my - 1$。代入椭圆：$(3m^2 + 4)y^2 - 6my - 9 = 0$。

$y_1 + y_2 = \dfrac{6m}{3m^2 + 4}$，$y_1 y_2 = \dfrac{-9}{3m^2 + 4}$。

$|AB| = \sqrt{1 + m^2} \cdot |y_1 - y_2| = \sqrt{1 + m^2} \cdot \sqrt{\frac{36m^2}{(3m^2+4)^2} + \frac{36}{3m^2+4}}$

$= \sqrt{1 + m^2} \cdot \frac{12\sqrt{m^2 + 1}}{3m^2 + 4} = \frac{12(m^2 + 1)}{3m^2 + 4}$

$F_2(1, 0)$ 到 $l: x - my + 1 = 0$ 的距离 $d = \dfrac{|1 + 1|}{\sqrt{1 + m^2}} = \dfrac{2}{\sqrt{1 + m^2}}$。

$S = \dfrac{1}{2} \cdot \dfrac{12(m^2 + 1)}{3m^2 + 4} \cdot \dfrac{2}{\sqrt{1 + m^2}} = \dfrac{12\sqrt{m^2 + 1}}{3m^2 + 4}$

设 $t = \sqrt{m^2 + 1} \geq 1$：$S = \dfrac{12t}{3t^2 + 1}$。

$S' = \dfrac{12(1 - 3t^2)}{(3t^2 + 1)^2} = 0 \Rightarrow t = \dfrac{1}{\sqrt{3}} < 1$。

在 $t \geq 1$ 上 $S' < 0$，$S$ 递减。$t = 1$（$m = 0$）时取最大值：

$S_{\max} = \dfrac{12}{4} = 3$。

**⚠️ 易错提醒：** 焦点三角形周长利用椭圆定义直接得出 $4a$。面积最值需要转化为关于参数的函数求极值。

**💡 解题思路总结：** 焦点弦构成的三角形：周长用椭圆定义，面积用弦长×距离÷2，最值用换元求导或不等式。
