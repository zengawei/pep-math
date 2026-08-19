---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 34
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - derivative-extrema
  - derivative-max-min
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P63 复习参考题"
---

**题目：** 已知函数 $f(x) = x^2 - 2x + a\ln x$（$a \in \mathbb{R}$）。

（1）当 $a = 1$ 时，求 $f(x)$ 的极值；

（2）若存在 $x \in [1, e]$，使得 $f(x) \leqslant 0$ 成立，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 当 $a = 1$ 时求极值
> 📌 运用知识点：导数与极值

当 $a = 1$ 时，$f(x) = x^2 - 2x + \ln x$（$x > 0$）。

$$f'(x) = 2x - 2 + \frac{1}{x} = \frac{2x^2 - 2x + 1}{x}$$

分子 $2x^2 - 2x + 1$ 的判别式 $\Delta = 4 - 8 = -4 < 0$，且二次项系数为正，所以 $2x^2 - 2x + 1 > 0$ 恒成立。

因此 $f'(x) > 0$ 对所有 $x > 0$ 成立，$f(x)$ 在 $(0, +\infty)$ 上单调递增，无极值。

**第2步：** 转化第（2）问的条件
> 📌 运用知识点：存在性问题的转化

"存在 $x \in [1, e]$，使得 $f(x) \leqslant 0$"等价于 $f(x)$ 在 $[1, e]$ 上的最小值 $\leqslant 0$。

注意到 $f(1) = 1 - 2 + a \ln 1 = -1 + 0 = -1 < 0$。

**第3步：** 得出结论
> 📌 运用知识点：闭区间上含参最值

因为 $x = 1 \in [1, e]$，且 $f(1) = -1 < 0 \leqslant 0$ 对任意 $a \in \mathbb{R}$ 恒成立，

所以无论 $a$ 取何值，总存在 $x = 1 \in [1, e]$ 使得 $f(x) \leqslant 0$ 成立。

因此 $a$ 的取值范围是 $\mathbb{R}$（全体实数）。

**⚠️ 易错提醒：** ①本题的"陷阱"在于 $f(1) = -1 \leqslant 0$ 恒成立（因为 $\ln 1 = 0$，$a$ 的系数为零），所以不需要复杂的分类讨论；②做题时不要急于对参数 $a$ 分类讨论求最小值，先代入端点特殊值检验，往往能发现简化的突破口；③第（1）问无极值的结论要写清楚理由（判别式小于零，导数恒正）。

**💡 解题思路总结：** 存在性问题的转化："存在 $x \in [a,b]$ 使 $f(x) \leqslant 0$"等价于"$f(x)$ 在 $[a,b]$ 上的最小值 $\leqslant 0$"。但更聪明的做法是先代入特殊值（如端点）检验——如果能直接满足条件，则可以大幅简化讨论。本题 $f(1) = -1 < 0$ 是突破口，$\ln 1 = 0$ 使得参数 $a$ 被消去。
