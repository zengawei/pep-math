---
type: example
textbook: selective-1
chapter: 12
section: 1
number: 5
knowledge_points:
  - line-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P35 例5"
---

**例题：** 已知直线 $l$ 过点 $P(3, 2)$ 且与 $x$ 轴正半轴、$y$ 轴正半轴分别交于 $A$、$B$ 两点。当 $|PA| + |PB|$ 取最小值时，求直线 $l$ 的方程。

---

**解答：**

**第1步：** 设直线方程
> 📌 运用知识点：直线的方程

设直线斜率为 $k$（$k < 0$）：$y - 2 = k(x - 3)$

令 $y = 0$：$x = 3 - \dfrac{2}{k}$，$A\left(3 - \dfrac{2}{k}, 0\right)$

令 $x = 0$：$y = 2 - 3k$，$B(0, 2 - 3k)$

**第2步：** 计算 $|PA| + |PB|$
> 📌 运用知识点：直线的方程

$|PA| = \sqrt{\left(-\dfrac{2}{k}\right)^2 + (-2)^2} = \sqrt{\dfrac{4}{k^2} + 4} = \dfrac{2}{|k|}\sqrt{1 + k^2} = -\dfrac{2}{k}\sqrt{1 + k^2}$

$|PB| = \sqrt{(-3)^2 + (-3k)^2} = 3\sqrt{1 + k^2}$

$|PA| + |PB| = \left(-\dfrac{2}{k} + 3\right)\sqrt{1 + k^2}$

设 $t = -k > 0$：

$|PA| + |PB| = \left(\dfrac{2}{t} + 3\right)\sqrt{1 + t^2}$

此表达式较复杂，换用截距式方法。

**第3步：** 用截距式重新求解
> 📌 运用知识点：直线的方程

设截距式 $\dfrac{x}{a} + \dfrac{y}{b} = 1$（$a > 0, b > 0$），过 $P(3, 2)$：$\dfrac{3}{a} + \dfrac{2}{b} = 1$

$A(a, 0)$，$B(0, b)$。

利用向量：$\overrightarrow{PA} = (a - 3, -2)$，$\overrightarrow{PB} = (-3, b - 2)$

$|PA| = \sqrt{(a-3)^2 + 4}$，$|PB| = \sqrt{9 + (b-2)^2}$

由 $\dfrac{3}{a} + \dfrac{2}{b} = 1$ 得 $b = \dfrac{2a}{a - 3}$（$a > 3$）

$b - 2 = \dfrac{2a}{a-3} - 2 = \dfrac{2a - 2a + 6}{a - 3} = \dfrac{6}{a - 3}$

$|PA| = \sqrt{(a-3)^2 + 4}$

$|PB| = \sqrt{9 + \dfrac{36}{(a-3)^2}} = \sqrt{9 + \dfrac{36}{(a-3)^2}}$

设 $u = a - 3 > 0$：

$|PA| + |PB| = \sqrt{u^2 + 4} + \sqrt{9 + \dfrac{36}{u^2}} = \sqrt{u^2 + 4} + \dfrac{3}{u}\sqrt{u^2 + 4} = \sqrt{u^2 + 4}\left(1 + \dfrac{3}{u}\right)$

$= \sqrt{u^2 + 4} \cdot \dfrac{u + 3}{u}$

设 $f(u) = \dfrac{(u+3)^2(u^2+4)}{u^2}$，求 $f(u)$ 的最小值。

$f(u) = \dfrac{(u^2 + 6u + 9)(u^2 + 4)}{u^2} = (u^2 + 6u + 9)\left(1 + \dfrac{4}{u^2}\right)$

展开较复杂，用数值方法或柯西不等式。

利用柯西不等式：$(|PA| + |PB|)^2 \leq 2(|PA|^2 + |PB|^2)$，但这是上界不是下界。

换一种思路：利用 $P$ 到 $A$、$B$ 的参数表示。

**第4步：** 用三角参数法
> 📌 运用知识点：直线的倾斜角与斜率

设直线倾斜角为 $\alpha$（$\dfrac{\pi}{2} < \alpha < \pi$），$k = \tan\alpha$。

$|PA| = \dfrac{2}{\sin(\pi - \alpha)} = \dfrac{2}{\sin\alpha}$（$P$ 到 $x$ 轴的竖直距离为 $2$）

$|PB| = \dfrac{3}{\cos(\pi - \alpha)} = \dfrac{3}{-\cos\alpha}$（$P$ 到 $y$ 轴的水平距离为 $3$）

$|PA| + |PB| = \dfrac{2}{\sin\alpha} - \dfrac{3}{\cos\alpha}$

设 $g(\alpha) = \dfrac{2}{\sin\alpha} - \dfrac{3}{\cos\alpha}$，$g'(\alpha) = -\dfrac{2\cos\alpha}{\sin^2\alpha} + \dfrac{3\sin\alpha}{\cos^2\alpha} = 0$

$\dfrac{3\sin\alpha}{\cos^2\alpha} = \dfrac{2\cos\alpha}{\sin^2\alpha}$

$3\sin^3\alpha = 2\cos^3\alpha$

$\tan^3\alpha = \dfrac{2}{3}$，$\tan\alpha = -\sqrt[3]{\dfrac{2}{3}}$（第二象限取负）

$k = -\sqrt[3]{\dfrac{2}{3}}$

直线方程：$y - 2 = -\sqrt[3]{\dfrac{2}{3}}(x - 3)$

**💡 解题思路总结：** 求线段和的最值，可以用三角参数法将问题转化为关于倾斜角的函数求最值。设倾斜角为参数，利用几何关系将 $|PA|$ 和 $|PB|$ 分别用三角函数表示，再用导数或不等式求最值。
