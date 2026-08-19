---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 32
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-summary
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P111 复习参考题 第32题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{4} + y^2 = 1$，$A$ 为椭圆的右顶点。过原点 $O$ 的直线交椭圆于 $M, N$ 两点（$M, N$ 不与 $A$ 重合）。

(1) 求 $k_{AM} \cdot k_{AN}$ 的值。

(2) 求 $\triangle AMN$ 面积的最大值。

---

**解答：**

**第1步：** 求斜率积
> 📌 运用知识点：椭圆的几何性质

$A(2, 0)$。设 $M(x_0, y_0)$，则 $N(-x_0, -y_0)$。

$$k_{AM} \cdot k_{AN} = \frac{y_0}{x_0 - 2} \cdot \frac{-y_0}{-x_0 - 2} = \frac{-y_0^2}{x_0^2 - 4}$$

由 $\dfrac{x_0^2}{4} + y_0^2 = 1$：$y_0^2 = 1 - \dfrac{x_0^2}{4} = \dfrac{4 - x_0^2}{4}$。

$$k_{AM} \cdot k_{AN} = \frac{-\frac{4 - x_0^2}{4}}{x_0^2 - 4} = \frac{1}{4}$$

**第2步：** 求面积最大值
> 📌 运用知识点：圆锥曲线中的最值问题

设 $MN$ 的方程为 $y = kx$，代入椭圆：$x^2 + 4k^2x^2 = 4$，$x^2 = \dfrac{4}{1 + 4k^2}$。

$|MN| = 2\sqrt{x_0^2 + y_0^2} = 2|x_0|\sqrt{1 + k^2} = 2 \cdot \dfrac{2}{\sqrt{1 + 4k^2}} \cdot \sqrt{1 + k^2} = \dfrac{4\sqrt{1 + k^2}}{\sqrt{1 + 4k^2}}$。

$A(2, 0)$ 到 $y = kx$ 的距离 $d = \dfrac{2|k|}{\sqrt{1 + k^2}}$。

$S = \dfrac{1}{2}|MN| \cdot d = \dfrac{1}{2} \cdot \dfrac{4\sqrt{1 + k^2}}{\sqrt{1 + 4k^2}} \cdot \dfrac{2|k|}{\sqrt{1 + k^2}} = \dfrac{4|k|}{\sqrt{1 + 4k^2}}$。

设 $t = k^2 > 0$：$S^2 = \dfrac{16t}{1 + 4t}$。

$S^2$ 关于 $t$ 递增（$\frac{d}{dt}\frac{16t}{1+4t} = \frac{16}{(1+4t)^2} > 0$），$t \to \infty$ 时 $S^2 \to 4$。

$S < 2$，无最大值（上确界为 $2$）。

当 $MN$ 垂直于 $x$ 轴时（$k \to \infty$），$M(0, 1), N(0, -1)$：$S = \dfrac{1}{2} \times 2 \times 2 = 2$。

所以 $S_{\max} = 2$。

**⚠️ 易错提醒：** $k_{AM} \cdot k_{AN} = \frac{b^2}{a^2} = \frac{1}{4}$（注意这里是正号因为 $M, N$ 关于原点对称）。面积最大值在 $MN$ 为短轴时取到。

**💡 解题思路总结：** 关于中心对称的两点与椭圆上另一点连线的斜率积为常数。面积最值用参数化或几何直观。
