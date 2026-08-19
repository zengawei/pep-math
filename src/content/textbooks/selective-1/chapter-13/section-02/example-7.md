---
type: example
textbook: selective-1
chapter: 13
section: 2
number: 7
knowledge_points:
  - conic-section-line
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P77 例7"
---

**例题：** 已知双曲线 $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$（$a > 0, b > 0$）的离心率为 $\sqrt{3}$，一个焦点到渐近线的距离为 $\sqrt{2}$。直线 $y = kx + 1$ 与双曲线交于 $A, B$ 两点，$AB$ 中点的横坐标为 $-1$，求 $k$。

**解答：**

**第1步：** 求双曲线方程
> 📌 运用知识点：双曲线的几何性质

$e = \dfrac{c}{a} = \sqrt{3}$，$c = \sqrt{3}a$，$b^2 = c^2 - a^2 = 2a^2$

渐近线 $y = \pm\dfrac{b}{a}x = \pm\sqrt{2}x$，即 $\sqrt{2}x \pm y = 0$

焦点 $(\sqrt{3}a, 0)$ 到渐近线 $\sqrt{2}x - y = 0$ 的距离：

$d = \dfrac{\sqrt{2} \cdot \sqrt{3}a}{\sqrt{2 + 1}} = \dfrac{\sqrt{6}a}{\sqrt{3}} = \sqrt{2}a = \sqrt{2}$

$a = 1$，$b^2 = 2$

双曲线：$x^2 - \dfrac{y^2}{2} = 1$

**第2步：** 联立直线与双曲线
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = kx + 1$ 代入 $x^2 - \dfrac{y^2}{2} = 1$：

$2x^2 - (kx + 1)^2 = 2$

$(2 - k^2)x^2 - 2kx - 3 = 0$

需 $2 - k^2 \neq 0$，$k \neq \pm\sqrt{2}$

$x_1 + x_2 = \dfrac{2k}{2 - k^2}$

**第3步：** 利用中点条件
> 📌 运用知识点：直线与圆锥曲线的位置关系

$\dfrac{x_1 + x_2}{2} = -1$

$\dfrac{2k}{2 - k^2} = -2$

$2k = -2(2 - k^2) = -4 + 2k^2$

$2k^2 - 2k - 4 = 0$

$k^2 - k - 2 = 0$

$(k - 2)(k + 1) = 0$

$k = 2$ 或 $k = -1$

验证 $k \neq \pm\sqrt{2}$：$k = 2$ 和 $k = -1$ 均满足 ✓

还需验证 $\Delta > 0$：

$\Delta = 4k^2 + 12(2 - k^2) = 4k^2 + 24 - 12k^2 = 24 - 8k^2$

$k = 2$：$\Delta = 24 - 32 = -8 < 0$，不满足 ✗

$k = -1$：$\Delta = 24 - 8 = 16 > 0$，满足 ✓

$k = -1$

**💡 解题思路总结：** 双曲线综合题：① 由离心率和焦点到渐近线距离求方程；② 联立后利用中点条件求参数；③ 必须验证判别式 $\Delta > 0$ 和不与渐近线平行。
