---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 33
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
  - conic-section-summary
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P112 复习参考题 第33题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{2} + y^2 = 1$，$F_1, F_2$ 为其左右焦点。直线 $l$ 过 $F_2$ 交椭圆于 $A, B$ 两点。

(1) 求 $\dfrac{|AF_1|}{|AF_2|} + \dfrac{|BF_1|}{|BF_2|}$ 的值（当 $l$ 垂直于 $x$ 轴时）。

(2) 证明：对任意过 $F_2$ 的直线 $l$，$\dfrac{1}{|AF_2|} + \dfrac{1}{|BF_2|}$ 为定值。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：椭圆的几何性质

$a^2 = 2, b^2 = 1, c^2 = 1$。$a = \sqrt{2}, c = 1$。$F_2(1, 0)$。

$l \perp x$ 轴：$x = 1$，代入 $\dfrac{1}{2} + y^2 = 1$，$y = \pm\dfrac{\sqrt{2}}{2}$。

$A\left(1, \dfrac{\sqrt{2}}{2}\right)$，$B\left(1, -\dfrac{\sqrt{2}}{2}\right)$。

$|AF_2| = \dfrac{\sqrt{2}}{2}$。

$|AF_1| = 2a - |AF_2| = 2\sqrt{2} - \dfrac{\sqrt{2}}{2} = \dfrac{3\sqrt{2}}{2}$。

$\dfrac{|AF_1|}{|AF_2|} = \dfrac{3\sqrt{2}/2}{\sqrt{2}/2} = 3$。

由对称性 $\dfrac{|BF_1|}{|BF_2|} = 3$。

和为 $6$。

**第2步：** 证明定值
> 📌 运用知识点：圆锥曲线与直线的位置关系

设 $x = my + 1$，代入 $\dfrac{x^2}{2} + y^2 = 1$：

$(m^2 + 2)y^2 + 2my - 1 = 0$。

$y_1 + y_2 = \dfrac{-2m}{m^2 + 2}$，$y_1 y_2 = \dfrac{-1}{m^2 + 2}$。

$|AF_2| = x_1 + \dfrac{a^2}{c} - \dfrac{a^2}{c}$... 用焦半径公式：

$|AF_2| = a - ex_1 = \sqrt{2} - \dfrac{x_1}{\sqrt{2}} = \dfrac{2 - x_1}{\sqrt{2}}$。

不对，右焦点焦半径 $|AF_2| = a - ex_1$：

$|AF_2| = \sqrt{2} - \dfrac{1}{\sqrt{2}} \cdot x_1 = \sqrt{2} - \dfrac{x_1}{\sqrt{2}}$。

$\dfrac{1}{|AF_2|} + \dfrac{1}{|BF_2|} = \dfrac{|AF_2| + |BF_2|}{|AF_2| \cdot |BF_2|}$

$|AF_2| + |BF_2| = 2\sqrt{2} - \dfrac{x_1 + x_2}{\sqrt{2}}$

$x_1 + x_2 = m(y_1 + y_2) + 2 = \dfrac{-2m^2}{m^2 + 2} + 2 = \dfrac{4}{m^2 + 2}$

$|AF_2| + |BF_2| = 2\sqrt{2} - \dfrac{4}{\sqrt{2}(m^2 + 2)} = 2\sqrt{2} - \dfrac{2\sqrt{2}}{m^2 + 2} = \dfrac{2\sqrt{2}(m^2 + 1)}{m^2 + 2}$

$|AF_2| \cdot |BF_2| = \left(\sqrt{2} - \dfrac{x_1}{\sqrt{2}}\right)\left(\sqrt{2} - \dfrac{x_2}{\sqrt{2}}\right) = 2 - (x_1 + x_2) + \dfrac{x_1 x_2}{2}$

$x_1 x_2 = (my_1 + 1)(my_2 + 1) = m^2 y_1 y_2 + m(y_1 + y_2) + 1 = \dfrac{-m^2}{m^2 + 2} + \dfrac{-2m^2}{m^2 + 2} + 1 = \dfrac{-3m^2 + m^2 + 2}{m^2 + 2} = \dfrac{2 - 2m^2}{m^2 + 2}$

$|AF_2| \cdot |BF_2| = 2 - \dfrac{4}{m^2 + 2} + \dfrac{2 - 2m^2}{2(m^2 + 2)} = 2 - \dfrac{4}{m^2 + 2} + \dfrac{1 - m^2}{m^2 + 2}$

$= 2 + \dfrac{-4 + 1 - m^2}{m^2 + 2} = 2 - \dfrac{3 + m^2}{m^2 + 2} = \dfrac{2m^2 + 4 - 3 - m^2}{m^2 + 2} = \dfrac{m^2 + 1}{m^2 + 2}$

$\dfrac{1}{|AF_2|} + \dfrac{1}{|BF_2|} = \dfrac{2\sqrt{2}(m^2 + 1)/(m^2 + 2)}{(m^2 + 1)/(m^2 + 2)} = 2\sqrt{2}$

定值为 $2\sqrt{2}$。

**⚠️ 易错提醒：** 椭圆焦半径公式 $|PF_2| = a - ex$（右焦点）。计算过程较复杂，需要仔细化简。

**💡 解题思路总结：** 焦点弦倒数和为定值 $\frac{2a}{b^2}$。本题 $\frac{2\sqrt{2}}{1} = 2\sqrt{2}$，与计算一致。
