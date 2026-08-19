---
type: exercise
textbook: selective-1
chapter: 13
section: 2
number: 13
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P76 练习C 第3题"
---

**题目：** 已知双曲线 $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$（$a > 0, b > 0$）的左顶点为 $A$，右焦点为 $F$，离心率为 $2$。过 $F$ 的直线与双曲线右支交于 $B, C$ 两点，若 $\overrightarrow{AB} \cdot \overrightarrow{AC} = 0$，求直线 $BC$ 的斜率。

---

**解答：**

**第1步：** 确定参数关系
> 📌 运用知识点：双曲线的几何性质

$e = \dfrac{c}{a} = 2$，$c = 2a$，$b^2 = c^2 - a^2 = 3a^2$

双曲线：$\dfrac{x^2}{a^2} - \dfrac{y^2}{3a^2} = 1$，即 $3x^2 - y^2 = 3a^2$

$A(-a, 0)$，$F(2a, 0)$

**第2步：** 设直线并联立
> 📌 运用知识点：直线与圆锥曲线的位置关系

设 $BC: x = my + 2a$（包含斜率不存在的情况）。

代入 $3x^2 - y^2 = 3a^2$：

$3(my + 2a)^2 - y^2 = 3a^2$

$(3m^2 - 1)y^2 + 12amy + 12a^2 - 3a^2 = 0$

$(3m^2 - 1)y^2 + 12amy + 9a^2 = 0$

$y_1 + y_2 = \dfrac{-12am}{3m^2 - 1}$，$y_1 y_2 = \dfrac{9a^2}{3m^2 - 1}$

**第3步：** 利用向量条件
> 📌 运用知识点：直线与圆锥曲线的位置关系

$\overrightarrow{AB} = (x_1 + a, y_1)$，$\overrightarrow{AC} = (x_2 + a, y_2)$

$\overrightarrow{AB} \cdot \overrightarrow{AC} = (x_1 + a)(x_2 + a) + y_1 y_2 = 0$

$x_i + a = my_i + 2a + a = my_i + 3a$

$(my_1 + 3a)(my_2 + 3a) + y_1 y_2 = 0$

$m^2 y_1 y_2 + 3am(y_1 + y_2) + 9a^2 + y_1 y_2 = 0$

$(m^2 + 1)y_1 y_2 + 3am(y_1 + y_2) + 9a^2 = 0$

代入韦达定理结果：

$(m^2 + 1) \cdot \dfrac{9a^2}{3m^2 - 1} + 3am \cdot \dfrac{-12am}{3m^2 - 1} + 9a^2 = 0$

$\dfrac{9a^2(m^2 + 1) - 36a^2m^2}{3m^2 - 1} + 9a^2 = 0$

$\dfrac{9a^2(m^2 + 1 - 4m^2)}{3m^2 - 1} + 9a^2 = 0$

$\dfrac{9a^2(1 - 3m^2)}{3m^2 - 1} + 9a^2 = 0$

$\dfrac{-9a^2(3m^2 - 1)}{3m^2 - 1} + 9a^2 = 0$

$-9a^2 + 9a^2 = 0$

$0 = 0$

**第4步：** 分析结果
> 📌 运用知识点：双曲线的几何性质

上式恒成立！说明对于任意使 $B, C$ 在右支上的 $m$，条件 $\overrightarrow{AB} \cdot \overrightarrow{AC} = 0$ 都满足。

但这需要 $3m^2 - 1 \neq 0$ 且 $B, C$ 都在右支。

当 $m = 0$ 时（直线 $x = 2a$，即垂直于 $x$ 轴），斜率不存在。

$y^2 = 3(4a^2) - 3a^2 = 9a^2$，$y = \pm 3a$

$B(2a, 3a)$，$C(2a, -3a)$

$\overrightarrow{AB} = (3a, 3a)$，$\overrightarrow{AC} = (3a, -3a)$

$\overrightarrow{AB} \cdot \overrightarrow{AC} = 9a^2 - 9a^2 = 0$ ✓

当 $m \neq 0$ 时，斜率 $k = \dfrac{1}{m}$。需要 $B, C$ 在右支：$x_1, x_2 > a$。

$x_1 x_2 = (my_1 + 2a)(my_2 + 2a) = m^2 y_1 y_2 + 2am(y_1 + y_2) + 4a^2$

$= m^2 \cdot \dfrac{9a^2}{3m^2-1} + 2am \cdot \dfrac{-12am}{3m^2-1} + 4a^2 = \dfrac{9a^2m^2 - 24a^2m^2}{3m^2-1} + 4a^2 = \dfrac{-15a^2m^2}{3m^2-1} + 4a^2$

$= \dfrac{-15a^2m^2 + 12a^2m^2 - 4a^2}{3m^2-1} = \dfrac{-3a^2m^2 - 4a^2}{3m^2-1} = \dfrac{-a^2(3m^2+4)}{3m^2-1}$

需要 $x_1 x_2 > 0$：$\dfrac{-a^2(3m^2+4)}{3m^2-1} > 0$，需 $3m^2 - 1 < 0$，$m^2 < \dfrac{1}{3}$

同时 $x_1 + x_2 = m(y_1+y_2) + 4a = \dfrac{-12am^2}{3m^2-1} + 4a = \dfrac{-12am^2 + 12am^2 - 4a}{3m^2-1} = \dfrac{-4a}{3m^2-1}$

当 $3m^2 - 1 < 0$ 时，$x_1 + x_2 = \dfrac{-4a}{3m^2-1} > 0$ ✓

所以 $m^2 < \dfrac{1}{3}$，$m \in \left(-\dfrac{\sqrt{3}}{3}, \dfrac{\sqrt{3}}{3}\right)$

斜率 $k = \dfrac{1}{m}$，$|k| > \sqrt{3}$

直线 $BC$ 的斜率 $k$ 满足 $|k| > \sqrt{3}$，即 $k \in (-\infty, -\sqrt{3}) \cup (\sqrt{3}, +\infty)$，或斜率不存在。

**⚠️ 易错提醒：** ① 恒等式 $0=0$ 说明条件自动满足，但需要额外的位置约束（$B, C$ 在右支）；② 验证右支条件时需检查 $x_1, x_2 > a$，通过 $x_1 x_2 > 0$ 和 $x_1 + x_2 > 0$ 来判断。

**💡 解题思路总结：** 当向量条件化简为恒等式时，说明该几何性质对满足位置条件的所有情况都成立。最终答案由位置约束（交点在指定分支上）决定参数范围。
