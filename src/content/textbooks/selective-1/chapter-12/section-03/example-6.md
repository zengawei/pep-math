---
type: example
textbook: selective-1
chapter: 12
section: 3
number: 6
knowledge_points:
  - line-circle-position
  - line-equation-application
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P52 例6"
---

**例题：** 已知圆 $C: x^2 + y^2 - 4x - 6y + 9 = 0$，过点 $P(1, 0)$ 作直线 $l$ 与圆交于 $A, B$ 两点。当 $\triangle ACB$ 的面积最大时，求直线 $l$ 的方程（$C$ 为圆心）。

---

**解答：**

**第1步：** 化简圆的方程
> 📌 运用知识点：直线与圆的位置关系

$(x - 2)^2 + (y - 3)^2 = 4$

圆心 $C(2, 3)$，半径 $r = 2$。

**第2步：** 分析面积
> 📌 运用知识点：直线与圆的位置关系

$\triangle ACB$ 中，$CA = CB = r = 2$。

$S_{\triangle ACB} = \dfrac{1}{2} \cdot CA \cdot CB \cdot \sin\angle ACB = \dfrac{1}{2} \cdot 4 \cdot \sin\angle ACB = 2\sin\angle ACB$

面积最大 $\Leftrightarrow \sin\angle ACB = 1$，即 $\angle ACB = 90°$。

**第3步：** 求此时圆心到直线的距离
> 📌 运用知识点：直线与圆的位置关系

$\angle ACB = 90°$ 时，$\triangle ACB$ 是等腰直角三角形。

$d = r\cos 45° = 2 \times \dfrac{\sqrt{2}}{2} = \sqrt{2}$

**第4步：** 求直线方程
> 📌 运用知识点：直线与圆的位置关系

验证 $P$ 在圆内：$(1-2)^2 + (0-3)^2 = 1 + 9 = 10 > 4$，$P$ 在圆外。

设直线 $l: y = k(x - 1)$，即 $kx - y - k = 0$。

$d = \dfrac{|2k - 3 - k|}{\sqrt{k^2 + 1}} = \dfrac{|k - 3|}{\sqrt{k^2 + 1}} = \sqrt{2}$

$(k - 3)^2 = 2(k^2 + 1)$

$k^2 - 6k + 9 = 2k^2 + 2$

$k^2 + 6k - 7 = 0$

$(k + 7)(k - 1) = 0$

$k = -7$ 或 $k = 1$

讨论斜率不存在：$x = 1$，$d = |2 - 1| = 1 \neq \sqrt{2}$，不合。

**第5步：** 写出直线方程
> 📌 运用知识点：直线与圆的位置关系

$k = 1$：$y = x - 1$，即 $x - y - 1 = 0$

$k = -7$：$y = -7(x - 1)$，即 $7x + y - 7 = 0$

验证 $d$：$C(2,3)$ 到 $x - y - 1 = 0$ 的 $d = \dfrac{|2 - 3 - 1|}{\sqrt{2}} = \dfrac{2}{\sqrt{2}} = \sqrt{2}$ ✓

$C(2,3)$ 到 $7x + y - 7 = 0$ 的 $d = \dfrac{|14 + 3 - 7|}{\sqrt{50}} = \dfrac{10}{5\sqrt{2}} = \sqrt{2}$ ✓

**💡 解题思路总结：** 圆中弦与圆心构成三角形面积最大问题：$S = \dfrac{1}{2}r^2\sin\theta$，当 $\theta = 90°$ 时面积最大。再由 $d = r\cos 45°$ 确定直线位置，用距离公式求直线方程。
