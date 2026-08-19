---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P50 练习B 第3题"
---

**题目：** 若不等式 $x^2 - a \ln x \geq 0$ 对 $x \in [1, e]$ 恒成立，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 分离参数
> 📌 运用知识点：导数的应用——恒成立问题

当 $x = 1$ 时：$1 - a \ln 1 = 1 - 0 = 1 \geq 0$，恒成立，对 $a$ 无限制。

当 $x \in (1, e]$ 时，$\ln x > 0$，不等式可化为：

$$a \leq \frac{x^2}{\ln x}$$

**第2步：** 求 $g(x) = \dfrac{x^2}{\ln x}$ 在 $(1, e]$ 上的最小值
> 📌 运用知识点：导数的应用——恒成立问题

$$g'(x) = \frac{2x \ln x - x^2 \cdot \frac{1}{x}}{(\ln x)^2} = \frac{2x \ln x - x}{(\ln x)^2} = \frac{x(2\ln x - 1)}{(\ln x)^2}$$

令 $g'(x) = 0$：$2\ln x - 1 = 0 \implies \ln x = \dfrac{1}{2} \implies x = \sqrt{e}$

**第3步：** 判断最小值
> 📌 运用知识点：导数的应用——恒成立问题

当 $1 < x < \sqrt{e}$ 时，$2\ln x - 1 < 0$，$g'(x) < 0$，$g(x)$ 递减；

当 $\sqrt{e} < x \leq e$ 时，$2\ln x - 1 > 0$，$g'(x) > 0$，$g(x)$ 递增。

所以 $g(x)$ 在 $x = \sqrt{e}$ 处取最小值：

$$g(\sqrt{e}) = \frac{(\sqrt{e})^2}{\ln \sqrt{e}} = \frac{e}{\frac{1}{2}} = 2e$$

**第4步：** 得出结论
> 📌 运用知识点：导数的应用——恒成立问题

$a \leq g(x)_{\min} = 2e$

$$\boxed{a \leq 2e}$$

**⚠️ 易错提醒：** 分离参数时要注意 $\ln x$ 的符号：在 $(1, e]$ 上 $\ln x > 0$，不等号方向不变。求 $g'(x)$ 时使用除法法则，分子化简要仔细。$x = \sqrt{e}$ 在区间 $(1, e]$ 内，需要验证。

**💡 解题思路总结：** "恒成立"问题的参数分离法：将参数 $a$ 与变量 $x$ 分离，转化为求另一侧函数的最值。关键是构造函数 $g(x) = \frac{x^2}{\ln x}$ 后，用导数求其最小值。
