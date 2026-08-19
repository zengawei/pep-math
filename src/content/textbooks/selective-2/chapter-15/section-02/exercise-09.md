---
type: exercise
textbook: selective-2
chapter: 15
section: 2
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P40 练习B 第3题"
---

**题目：** 讨论函数 $f(x) = x^3 - ax$（$a > 0$）的单调性。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性

$f'(x) = 3x^2 - a$

**第2步：** 令 $f'(x) = 0$，求驻点
> 📌 运用知识点：导数与单调性

$3x^2 - a = 0 \implies x^2 = \dfrac{a}{3} \implies x = \pm\sqrt{\dfrac{a}{3}}$

因为 $a > 0$，所以 $\sqrt{\dfrac{a}{3}}$ 有意义，有两个驻点 $x_1 = -\sqrt{\dfrac{a}{3}}$，$x_2 = \sqrt{\dfrac{a}{3}}$。

**第3步：** 判断各区间上 $f'(x)$ 的符号
> 📌 运用知识点：导数与单调性

$f'(x) = 3x^2 - a$ 是开口向上的二次函数，在两个零点之间为负，之外为正：

| 区间 | $f'(x)$ 的符号 | 单调性 |
|:---:|:---:|:---:|
| $\left(-\infty, -\sqrt{\dfrac{a}{3}}\right)$ | $+$ | 单调递增 |
| $\left(-\sqrt{\dfrac{a}{3}}, \sqrt{\dfrac{a}{3}}\right)$ | $-$ | 单调递减 |
| $\left(\sqrt{\dfrac{a}{3}}, +\infty\right)$ | $+$ | 单调递增 |

**第4步：** 写出结论
> 📌 运用知识点：导数与单调性

$f(x)$ 在 $\left(-\infty, -\sqrt{\dfrac{a}{3}}\right)$ 和 $\left(\sqrt{\dfrac{a}{3}}, +\infty\right)$ 上单调递增，在 $\left(-\sqrt{\dfrac{a}{3}}, \sqrt{\dfrac{a}{3}}\right)$ 上单调递减。

**⚠️ 易错提醒：** 本题需要讨论参数 $a$ 的取值。因为题目给定 $a > 0$，所以 $\frac{a}{3} > 0$，$f'(x) = 0$ 有两个不等实根。如果 $a \leq 0$，则 $f'(x) \geq 0$，$f(x)$ 在 $\mathbb{R}$ 上单调递增，情况完全不同。

**💡 解题思路总结：** 含参数的单调性讨论，关键是分析 $f'(x) = 0$ 的根的情况。当 $a > 0$ 时有两个驻点，将定义域分成三段。注意根的表达要准确，使用 $\pm\sqrt{\frac{a}{3}}$。
