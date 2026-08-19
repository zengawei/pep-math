---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
  - derivative-extrema
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P61 复习参考题"
---

**题目：** 已知函数 $f(x) = e^x - ax - 1$。

（1）讨论 $f(x)$ 的单调性；

（2）若 $f(x)$ 有两个零点，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 讨论 $f(x)$ 的单调性
> 📌 运用知识点：导数与单调性

对 $f(x)$ 求导：

$$f'(x) = e^x - a$$

**情况一：** 当 $a \leqslant 0$ 时，$f'(x) = e^x - a > 0$（因为 $e^x > 0 \geqslant a$），$f(x)$ 在 $\mathbb{R}$ 上单调递增。

**情况二：** 当 $a > 0$ 时，令 $f'(x) = 0$，得 $e^x = a$，即 $x = \ln a$。

- 当 $x < \ln a$ 时，$e^x < a$，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x > \ln a$ 时，$e^x > a$，$f'(x) > 0$，$f(x)$ 单调递增。

**第2步：** 分析有两个零点的条件
> 📌 运用知识点：极值与零点的关系

由第（1）问知，当 $a \leqslant 0$ 时 $f(x)$ 单调递增，至多一个零点，不满足。

当 $a > 0$ 时，$f(x)$ 在 $x = \ln a$ 处取极小值（也是最小值）：

$$f(\ln a) = e^{\ln a} - a \ln a - 1 = a - a \ln a - 1$$

$f(x)$ 有两个零点需要：极小值 $f(\ln a) < 0$，即：

$$a - a \ln a - 1 < 0 \quad \cdots (*)$$

**第3步：** 求解不等式确定 $a$ 的范围
> 📌 运用知识点：导数与不等式

设 $g(a) = a - a \ln a - 1$（$a > 0$），分析 $g(a)$ 的符号。

$$g'(a) = 1 - (\ln a + 1) = -\ln a$$

- 当 $0 < a < 1$ 时，$g'(a) > 0$，$g(a)$ 单调递增；
- 当 $a > 1$ 时，$g'(a) < 0$，$g(a)$ 单调递减。

$g(a)$ 在 $a = 1$ 处取最大值：$g(1) = 1 - 0 - 1 = 0$。

所以 $g(a) \leqslant 0$ 对所有 $a > 0$ 成立，等号仅在 $a = 1$ 时取到。

因此 $(*)$ 等价于 $a > 0$ 且 $a \neq 1$。

但还需验证 $f(x)$ 确实在两侧有零点。当 $a > 0$ 且 $a \neq 1$ 时：
- $f(\ln a) < 0$；
- 当 $x \to -\infty$ 时，$f(x) = e^x - ax - 1 \to +\infty$（因为 $-ax \to +\infty$）；
- 当 $x \to +\infty$ 时，$f(x) = e^x - ax - 1 \to +\infty$（因为 $e^x$ 增长最快）。

由零点存在定理，$f(x)$ 在 $(-\infty, \ln a)$ 和 $(\ln a, +\infty)$ 上各有一个零点。

所以 $a$ 的取值范围是 $(0, 1) \cup (1, +\infty)$。

**⚠️ 易错提醒：** ①$a \leqslant 0$ 的情况容易遗漏，此时 $f(x)$ 单调递增，至多一个零点；②$a = 1$ 时 $f(\ln 1) = f(0) = 0$，极小值恰好为零，此时只有一个零点，不满足"两个零点"的条件；③验证两端趋于正无穷时，$x \to -\infty$ 的分析要注意 $e^x \to 0$ 而 $-ax \to +\infty$。

**💡 解题思路总结：** 含 $e^x$ 的函数零点问题：①先讨论单调性（对参数分类）→ ②确定极值点并计算极值 → ③由极值的正负判断零点个数 → ④利用极限行为验证零点存在性。本题的难点在于第（2）问需要构造辅助函数 $g(a)$ 并再次用导数分析。
