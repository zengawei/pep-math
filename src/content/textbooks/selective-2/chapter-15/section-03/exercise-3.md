---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 3
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "课标15.3.3"
---

**题目：** 若 $f(x) = x - a \ln x \geq 1$ 对 $x \in [1, +\infty)$ 恒成立，求实数 $a$ 的取值范围。

---

**解答：**

**第1步：** 转化问题（分离参数）
> 📌 运用知识点：导数的综合应用——恒成立问题

$f(x) \geq 1$ 即 $x - a \ln x \geq 1$，即 $x - 1 \geq a \ln x$。

当 $x = 1$ 时，$\ln 1 = 0$，不等式变为 $0 \geq 0$，对任意 $a$ 恒成立。

当 $x > 1$ 时，$\ln x > 0$，不等式等价于 $a \leq \dfrac{x - 1}{\ln x}$。

因此需 $a \leq \left(\dfrac{x - 1}{\ln x}\right)_{\min}$，其中 $x \in (1, +\infty)$。

**第2步：** 求 $g(x) = \dfrac{x - 1}{\ln x}$ 在 $(1, +\infty)$ 上的最小值
> 📌 运用知识点：导数的综合应用——恒成立问题

$$g'(x) = \frac{\ln x - (x-1) \cdot \dfrac{1}{x}}{(\ln x)^2} = \frac{\ln x - 1 + \dfrac{1}{x}}{(\ln x)^2}$$

令分子为 $h(x) = \ln x - 1 + \dfrac{1}{x}$，则：

$$h'(x) = \frac{1}{x} - \frac{1}{x^2} = \frac{x - 1}{x^2}$$

当 $x > 1$ 时，$h'(x) > 0$，故 $h(x)$ 在 $(1, +\infty)$ 上单调递增。

又 $h(1) = \ln 1 - 1 + 1 = 0$，所以当 $x > 1$ 时 $h(x) > 0$。

因此 $g'(x) > 0$（$x > 1$），即 $g(x)$ 在 $(1, +\infty)$ 上单调递增。

**第3步：** 求极限确定下确界
> 📌 运用知识点：导数的综合应用——恒成立问题

$$\lim_{x \to 1^+} g(x) = \lim_{x \to 1^+} \frac{x - 1}{\ln x} \xlongequal{\text{洛必达}} \lim_{x \to 1^+} \frac{1}{\dfrac{1}{x}} = 1$$

（也可令 $t = x - 1 \to 0^+$，利用等价无穷小 $\ln(1+t) \sim t$ 得到极限为 $1$。）

因为 $g(x)$ 在 $(1, +\infty)$ 上单调递增且 $\lim\limits_{x \to 1^+} g(x) = 1$，所以 $g(x) > 1$ 对所有 $x > 1$ 成立，且 $g(x)$ 的下确界为 $1$。

**第4步：** 得出结论
> 📌 运用知识点：导数的综合应用——恒成立问题

要使 $a \leq g(x)$ 对所有 $x \in (1, +\infty)$ 恒成立，需 $a \leq 1$。

综合 $x = 1$ 的情形，$a$ 的取值范围为 $\boxed{a \leq 1}$，即 $(-\infty, 1]$。

**💡 解题思路总结：** 恒成立问题的核心方法是分离参数：把含参不等式化为 $a \leq g(x)$（或 $a \geq g(x)$），再用导数求 $g(x)$ 的最值（或下确界/上确界）。注意讨论 $\ln x$ 的正负对不等号方向的影响。

