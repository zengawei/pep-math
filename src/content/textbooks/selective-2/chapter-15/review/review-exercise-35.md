---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 35
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - derivative-concept
  - derivative-operations
  - derivative-monotonicity
  - derivative-extrema
  - derivative-max-min
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P65 复习参考题"
---

**题目：** 已知函数 $f(x) = ae^x - \ln x - 1$。

（1）当 $a = 1$ 时，求 $f(x)$ 的单调区间；

（2）证明：当 $a \geqslant \frac{1}{e}$ 时，$f(x) \geqslant 0$。

---

**解答：**

**第1步：** 当 $a = 1$ 时求单调区间
> 📌 运用知识点：导数与单调性

当 $a = 1$ 时，$f(x) = e^x - \ln x - 1$（$x > 0$）。

$$f'(x) = e^x - \frac{1}{x}$$

设 $g(x) = e^x - \frac{1}{x}$，则 $g'(x) = e^x + \frac{1}{x^2} > 0$（$x > 0$）。

所以 $g(x) = f'(x)$ 在 $(0, +\infty)$ 上单调递增。

又 $g(1) = e - 1 > 0$，$g\left(\frac{1}{2}\right) = e^{1/2} - 2 \approx 1.649 - 2 < 0$。

所以 $f'(x) = 0$ 在 $\left(\frac{1}{2}, 1\right)$ 内有唯一实根 $x_0$。

- 当 $0 < x < x_0$ 时，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x > x_0$ 时，$f'(x) > 0$，$f(x)$ 单调递增。

$f(x)$ 的单调递减区间为 $(0, x_0)$，单调递增区间为 $(x_0, +\infty)$。

**第2步：** 证明 $a \geqslant \frac{1}{e}$ 时 $f(x) \geqslant 0$
> 📌 运用知识点：导数与最值、导数与不等式证明

当 $a \geqslant \frac{1}{e}$ 时，$f(x) = ae^x - \ln x - 1 \geqslant \frac{e^x}{e} - \ln x - 1 = e^{x-1} - \ln x - 1$。

只需证 $e^{x-1} - \ln x - 1 \geqslant 0$（$x > 0$）。

设 $h(x) = e^{x-1} - \ln x - 1$（$x > 0$）。

$$h'(x) = e^{x-1} - \frac{1}{x}$$

**第3步：** 分析 $h(x)$ 的最小值
> 📌 运用知识点：导数与极值、导数与最值

设 $\varphi(x) = h'(x) = e^{x-1} - \frac{1}{x}$。

$$\varphi'(x) = e^{x-1} + \frac{1}{x^2} > 0$$

所以 $h'(x)$ 在 $(0, +\infty)$ 上单调递增。

又 $h'(1) = e^0 - 1 = 0$，所以 $x = 1$ 是 $h'(x) = 0$ 的唯一根。

- 当 $0 < x < 1$ 时，$h'(x) < 0$，$h(x)$ 单调递减；
- 当 $x > 1$ 时，$h'(x) > 0$，$h(x)$ 单调递增。

$h(x)$ 在 $x = 1$ 处取最小值：

$$h(1) = e^0 - \ln 1 - 1 = 1 - 0 - 1 = 0$$

所以 $h(x) \geqslant h(1) = 0$，即 $e^{x-1} - \ln x - 1 \geqslant 0$。

因此当 $a \geqslant \frac{1}{e}$ 时，$f(x) \geqslant e^{x-1} - \ln x - 1 \geqslant 0$。证毕。

**⚠️ 易错提醒：** ①第（1）问中 $f'(x) = e^x - \frac{1}{x} = 0$ 的根无法精确求出，需要用零点存在定理说明根的存在性和唯一性，不能直接写 $x_0 = 1$（实际上 $x_0 \neq 1$，因为 $f'(1) = e - 1 \neq 0$）；②第（2）问的放缩 $ae^x \geqslant \frac{e^x}{e} = e^{x-1}$ 是关键一步，方向不能搞反；③$h'(1) = 0$ 恰好使计算简洁，这是题目设计的巧妙之处。

**💡 解题思路总结：** 导数压轴综合题的解题策略：①第（1）问通常是基础计算（求单调区间），为后续做铺垫；②第（2）问常用"放缩+构造函数"的方法：先利用参数范围放缩简化函数，再构造新函数用导数求最值证明不等式；③多次求导（$h \to h' \to \varphi' $）是判断导数零点的常用手段；④本题综合考查了导数的概念、运算、单调性、极值、最值和不等式证明等全部知识点。
