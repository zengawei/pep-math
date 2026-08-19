---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P52 练习C 第1题"
---

**题目：** 已知函数 $f(x) = \ln x - ax + 1$（$a \in \mathbb{R}$），若 $f(x) \leq 0$ 对 $x \in (0, +\infty)$ 恒成立，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 转化问题
> 📌 运用知识点：导数的应用——恒成立问题

$f(x) \leq 0$ 对 $x \in (0, +\infty)$ 恒成立，即 $\ln x - ax + 1 \leq 0$ 恒成立。

当 $x = 1$ 时：$0 - a + 1 \leq 0 \implies a \geq 1$。

下面证明 $a \geq 1$ 是充分条件。

**第2步：** 当 $a \geq 1$ 时，证明 $f(x) \leq 0$ 恒成立
> 📌 运用知识点：导数的应用——恒成立问题

$f'(x) = \dfrac{1}{x} - a = \dfrac{1 - ax}{x}$

令 $f'(x) = 0$：$x = \dfrac{1}{a}$（因为 $a \geq 1 > 0$，所以 $\frac{1}{a} > 0$）。

当 $0 < x < \dfrac{1}{a}$ 时，$f'(x) > 0$，$f(x)$ 递增；

当 $x > \dfrac{1}{a}$ 时，$f'(x) < 0$，$f(x)$ 递减。

所以 $f(x)$ 在 $x = \dfrac{1}{a}$ 处取最大值。

**第3步：** 计算最大值
> 📌 运用知识点：导数的应用——恒成立问题

$$f\left(\frac{1}{a}\right) = \ln\frac{1}{a} - a \cdot \frac{1}{a} + 1 = -\ln a - 1 + 1 = -\ln a$$

要使 $f(x) \leq 0$ 恒成立，需 $f\left(\dfrac{1}{a}\right) \leq 0$：

$$-\ln a \leq 0 \implies \ln a \geq 0 \implies a \geq 1$$

**第4步：** 当 $a < 1$ 时验证不成立
> 📌 运用知识点：导数的应用——恒成立问题

当 $a \leq 0$ 时，$f(x) = \ln x - ax + 1$，当 $x \to +\infty$ 时 $f(x) \to +\infty$，不满足。

当 $0 < a < 1$ 时，$f\left(\dfrac{1}{a}\right) = -\ln a > 0$（因为 $\ln a < 0$），不满足。

$$\boxed{a \geq 1}$$

**⚠️ 易错提醒：** 含 $\ln x$ 的函数定义域为 $(0, +\infty)$，求导时 $f'(x) = \frac{1}{x} - a$ 要通分分析符号。最大值 $f\left(\frac{1}{a}\right) = -\ln a$ 的计算要仔细：$\ln\frac{1}{a} = -\ln a$。

**💡 解题思路总结：** 恒成立问题的标准解法：①求 $f(x)$ 的最大值；②令最大值 $\leq 0$。关键是利用导数找到 $f(x)$ 的最大值点，再建立关于参数的不等式。
