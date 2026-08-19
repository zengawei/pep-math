---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P53 复习参考题"
---

**题目：** 已知函数 $f(x) = \ln x - ax$（$a \in \mathbb{R}$），讨论 $f(x)$ 的单调性。

---

**解答：**

**第1步：** 确定定义域并求导
> 📌 运用知识点：导数与单调性的关系

函数 $f(x) = \ln x - ax$ 的定义域为 $(0, +\infty)$。

对 $f(x)$ 求导：

$$f'(x) = \frac{1}{x} - a = \frac{1 - ax}{x}$$

因为 $x > 0$，所以 $f'(x)$ 的符号由分子 $1 - ax$ 决定。

**第2步：** 对参数 $a$ 分类讨论
> 📌 运用知识点：含参分类讨论

**情况一：** 当 $a \leqslant 0$ 时，$1 - ax > 0$ 对所有 $x > 0$ 恒成立（因为 $-ax \geqslant 0$），所以 $f'(x) > 0$。

此时 $f(x)$ 在 $(0, +\infty)$ 上单调递增。

**情况二：** 当 $a > 0$ 时，令 $f'(x) = 0$，得 $x = \frac{1}{a}$。

- 当 $0 < x < \frac{1}{a}$ 时，$1 - ax > 0$，$f'(x) > 0$，$f(x)$ 单调递增；
- 当 $x > \frac{1}{a}$ 时，$1 - ax < 0$，$f'(x) < 0$，$f(x)$ 单调递减。

综上所述：
- 当 $a \leqslant 0$ 时，$f(x)$ 在 $(0, +\infty)$ 上单调递增；
- 当 $a > 0$ 时，$f(x)$ 在 $\left(0, \frac{1}{a}\right)$ 上单调递增，在 $\left(\frac{1}{a}, +\infty\right)$ 上单调递减。

**⚠️ 易错提醒：** ①忘记写定义域 $(0, +\infty)$，导致讨论范围错误；②对 $a$ 的分类讨论中，$a = 0$ 容易遗漏，$a = 0$ 时 $f(x) = \ln x$ 确实单调递增，应归入 $a \leqslant 0$ 的情况。

**💡 解题思路总结：** 含对数函数的单调性讨论，关键是先确定定义域，再通分将导数化为分式形式，分析分子符号。对参数的分类要全面，特别注意 $a = 0$ 的边界情况以及 $a$ 的正负对导数零点存在性的影响。
