---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 31
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
  - parabola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P110 复习参考题 第31题"
---

**题目：** 已知抛物线 $C: y^2 = 2x$，$O$ 为原点，$F$ 为焦点。过点 $F$ 的直线交 $C$ 于 $A, B$ 两点。

(1) 求证：$\overrightarrow{OA} \cdot \overrightarrow{OB}$ 为定值。

(2) 求 $\triangle OAB$ 面积的最小值。

---

**解答：**

**第1步：** 证明定值
> 📌 运用知识点：抛物线的几何性质

$F\left(\dfrac{1}{2}, 0\right)$。设 $x = my + \dfrac{1}{2}$，代入 $y^2 = 2x$：

$y^2 - 2my - 1 = 0$，$y_1 + y_2 = 2m$，$y_1 y_2 = -1$。

$x_1 x_2 = \dfrac{y_1^2 y_2^2}{4} = \dfrac{1}{4}$。

$\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = \dfrac{1}{4} - 1 = -\dfrac{3}{4}$（定值）。

**第2步：** 求面积最小值
> 📌 运用知识点：圆锥曲线中的最值问题

$S = \dfrac{1}{2}|OF| \cdot |y_1 - y_2| = \dfrac{1}{2} \cdot \dfrac{1}{2} \cdot \sqrt{(y_1 + y_2)^2 - 4y_1 y_2}$

$= \dfrac{1}{4}\sqrt{4m^2 + 4} = \dfrac{1}{2}\sqrt{m^2 + 1}$

当 $m = 0$ 时取最小值：$S_{\min} = \dfrac{1}{2}$。

**⚠️ 易错提醒：** $\overrightarrow{OA} \cdot \overrightarrow{OB}$ 为定值 $-\frac{3}{4}$，说明 $OA$ 与 $OB$ 的夹角始终为钝角。面积公式中 $|OF|$ 是底，$|y_1 - y_2|$ 是高。

**💡 解题思路总结：** 抛物线焦点弦问题：设 $x = my + \frac{p}{2}$ 代入，韦达定理给出 $y_1 y_2$ 和 $y_1 + y_2$，直接计算目标量。
