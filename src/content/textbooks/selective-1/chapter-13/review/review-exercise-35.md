---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 35
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
  - conic-section-summary
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P115 复习参考题 第35题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{3} + y^2 = 1$。设直线 $l: y = kx + m$（$m \neq 0$）与椭圆 $C$ 交于 $A, B$ 两点，且 $|AB| = \sqrt{3}$。

(1) 求 $m$ 与 $k$ 的关系。

(2) 求 $\triangle AOB$ 面积的最大值（$O$ 为原点）。

---

**解答：**

**第1步：** 联立方程
> 📌 运用知识点：圆锥曲线与直线的位置关系

代入 $y = kx + m$：$x^2 + 3(kx + m)^2 = 3$。

$(1 + 3k^2)x^2 + 6kmx + 3m^2 - 3 = 0$。

$\Delta = 36k^2m^2 - 4(1 + 3k^2)(3m^2 - 3) = 12(1 + 3k^2 - m^2) > 0$。

$x_1 + x_2 = \dfrac{-6km}{1 + 3k^2}$，$x_1 x_2 = \dfrac{3m^2 - 3}{1 + 3k^2}$。

**第2步：** 利用弦长条件
> 📌 运用知识点：圆锥曲线与直线的位置关系

$|AB|^2 = (1 + k^2)[(x_1 + x_2)^2 - 4x_1 x_2] = 3$。

$(1 + k^2)\left[\dfrac{36k^2m^2}{(1+3k^2)^2} - \dfrac{4(3m^2-3)}{1+3k^2}\right] = 3$

$(1 + k^2) \cdot \dfrac{36k^2m^2 - 4(3m^2 - 3)(1 + 3k^2)}{(1 + 3k^2)^2} = 3$

分子 $= 36k^2m^2 - 12m^2 - 36k^2m^2 + 12 + 36k^2 = -12m^2 + 12 + 36k^2 = 12(1 + 3k^2 - m^2)$

$(1 + k^2) \cdot \dfrac{12(1 + 3k^2 - m^2)}{(1 + 3k^2)^2} = 3$

$$\frac{4(1 + k^2)(1 + 3k^2 - m^2)}{(1 + 3k^2)^2} = 1$$

$$4(1 + k^2)(1 + 3k^2 - m^2) = (1 + 3k^2)^2$$

$$m^2 = 1 + 3k^2 - \frac{(1 + 3k^2)^2}{4(1 + k^2)}$$

**第3步：** 求面积最大值
> 📌 运用知识点：圆锥曲线中的最值问题

$S = \dfrac{1}{2}|AB| \cdot d = \dfrac{1}{2} \cdot \sqrt{3} \cdot \dfrac{|m|}{\sqrt{1 + k^2}} = \dfrac{\sqrt{3}|m|}{2\sqrt{1 + k^2}}$。

由 $m^2$ 的表达式，设 $t = k^2 \geq 0$：

$m^2 = 1 + 3t - \dfrac{(1 + 3t)^2}{4(1 + t)} = \dfrac{4(1+t)(1+3t) - (1+3t)^2}{4(1+t)} = \dfrac{(1+3t)[4+4t-1-3t]}{4(1+t)} = \dfrac{(1+3t)(3+t)}{4(1+t)}$

$S^2 = \dfrac{3m^2}{4(1+t)} = \dfrac{3(1+3t)(3+t)}{16(1+t)^2}$

设 $u = 1 + t \geq 1$：$S^2 = \dfrac{3(3u - 2)(u + 2)}{16u^2} = \dfrac{3(3u^2 + 4u - 4)}{16u^2} = \dfrac{3}{16}\left(3 + \dfrac{4}{u} - \dfrac{4}{u^2}\right)$

设 $v = \dfrac{1}{u} \in (0, 1]$：$f(v) = 3 + 4v - 4v^2 = -4\left(v - \dfrac{1}{2}\right)^2 + 4$。

$v = \dfrac{1}{2}$ 时 $f_{\max} = 4$，$S^2_{\max} = \dfrac{3 \times 4}{16} = \dfrac{3}{4}$。

$S_{\max} = \dfrac{\sqrt{3}}{2}$。

**⚠️ 易错提醒：** 弦长条件和面积最值结合是高考压轴题的常见模式。化简过程复杂，需要耐心和仔细。换元后求二次函数最值是关键步骤。

**💡 解题思路总结：** 综合最值题：联立韦达定理 → 弦长条件建立参数关系 → 面积表达式化为一元函数 → 换元求最值。
