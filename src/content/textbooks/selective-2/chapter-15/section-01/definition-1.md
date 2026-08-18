---
type: definition
textbook: selective-2
chapter: 15
section: 1
name: 导数的概念
related_knowledge_points:
  - derivative-concept
---

**定义（精确表述）：** 设函数 $y = f(x)$ 在点 $x_0$ 的某个邻域内有定义，自变量的增量为 $\Delta x$（$\Delta x \neq 0$），函数值的增量为 $\Delta y = f(x_0 + \Delta x) - f(x_0)$。

**平均变化率：** $\dfrac{\Delta y}{\Delta x} = \dfrac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$

**导数：** 若极限 $\lim\limits_{\Delta x \to 0} \dfrac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$ 存在，则称函数 $f(x)$ 在点 $x_0$ 处可导，并称此极限值为 $f(x)$ 在 $x_0$ 处的导数，记作 $f'(x_0)$ 或 $y'\big|_{x=x_0}$。

$$f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$$

**几何意义：** $f'(x_0)$ 等于曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。切线方程为：

$$y - f(x_0) = f'(x_0)(x - x_0)$$

**通俗解释：** 导数就是"瞬间速度"。就像汽车的速度表显示的是某一瞬间的快慢，导数描述的是函数在某一点变化的快慢。平均变化率是"一段时间内的平均速度"，而导数是把这段时间缩到无限短时的极限值。

---

**定义（精确表述）：** 若函数 $f(x)$ 在区间 $(a, b)$ 内每一点都可导，则对 $(a, b)$ 内每一个 $x$，都对应一个确定的导数 $f'(x)$，这个 $f'(x)$ 称为 $f(x)$ 在 $(a, b)$ 内的导函数，简称导数，记作 $f'(x)$。

**通俗解释：** 如果函数在每个点都有导数，那导数本身就变成了一个新的函数——把每个点 $x$ 映射到该点的"瞬间变化速度"。
