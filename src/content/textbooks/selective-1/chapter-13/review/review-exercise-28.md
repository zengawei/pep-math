---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 28
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - curve-equation-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P108 复习参考题 第28题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的右焦点为 $F(1, 0)$，且椭圆经过点 $\left(1, \dfrac{3}{2}\right)$。

(1) 求椭圆 $C$ 的方程。

(2) 设过 $F$ 的直线 $l$ 交椭圆于 $M, N$ 两点，问：在 $x$ 轴上是否存在定点 $Q$，使得 $\overrightarrow{QM} \cdot \overrightarrow{QN}$ 为定值？若存在，求出 $Q$ 的坐标。

---

**解答：**

**第1步：** 求椭圆方程
> 📌 运用知识点：求曲线方程的方法

$c = 1$，$b^2 = a^2 - 1$。

代入 $\left(1, \dfrac{3}{2}\right)$：$\dfrac{1}{a^2} + \dfrac{9}{4(a^2 - 1)} = 1$。

$4(a^2 - 1) + 9a^2 = 4a^2(a^2 - 1)$

$13a^2 - 4 = 4a^4 - 4a^2$

$4a^4 - 17a^2 + 4 = 0$

$(4a^2 - 1)(a^2 - 4) = 0$

$a^2 = 4$（$a^2 = \frac{1}{4} < c^2$ 不合），$b^2 = 3$。

椭圆方程：$\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$。

**第2步：** 探究定点
> 📌 运用知识点：圆锥曲线与直线的位置关系

设 $Q(t, 0)$，直线 $x = my + 1$。

代入椭圆：$(3m^2 + 4)y^2 + 6my - 9 = 0$。

$y_1 + y_2 = \dfrac{-6m}{3m^2 + 4}$，$y_1 y_2 = \dfrac{-9}{3m^2 + 4}$。

$\overrightarrow{QM} \cdot \overrightarrow{QN} = (x_1 - t)(x_2 - t) + y_1 y_2$

$= (my_1 + 1 - t)(my_2 + 1 - t) + y_1 y_2$

$= (m^2 + 1)y_1 y_2 + m(1 - t)(y_1 + y_2) + (1 - t)^2$

$= (m^2 + 1)\dfrac{-9}{3m^2 + 4} + m(1 - t)\dfrac{-6m}{3m^2 + 4} + (1 - t)^2$

$= \dfrac{-9m^2 - 9 - 6m^2(1 - t)}{3m^2 + 4} + (1 - t)^2$

$= \dfrac{-9m^2 - 9 - 6m^2 + 6m^2 t}{3m^2 + 4} + (1 - t)^2$

$= \dfrac{(-15 + 6t)m^2 - 9}{3m^2 + 4} + (1 - t)^2$

要使其为定值（与 $m$ 无关），需 $\dfrac{-15 + 6t}{3} = \dfrac{-9}{4}$：

$-15 + 6t = -\dfrac{27}{4}$，$6t = 15 - \dfrac{27}{4} = \dfrac{33}{4}$，$t = \dfrac{11}{8}$。

此时定值 $= \dfrac{-9}{4} + \left(1 - \dfrac{11}{8}\right)^2 = -\dfrac{9}{4} + \dfrac{9}{64} = -\dfrac{135}{64}$。

$Q\left(\dfrac{11}{8}, 0\right)$。

**⚠️ 易错提醒：** 存在性探究问题需要令表达式与参数无关。分子分母中 $m^2$ 的系数比要相等。

**💡 解题思路总结：** 定点定值问题：设参数 → 韦达定理 → 将目标表达式整理为关于参数的分式 → 令系数比相等求定点。
