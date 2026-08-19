---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 33
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

**题目：** 已知函数 $f(x) = x^3 - 3x + 1$，若对任意 $x_1 \in [-2, 2]$，都存在 $x_2 \in [-2, 2]$，使得 $f(x_1) = f(x_2) + m$ 成立，求实数 $m$ 的值。

---

**解答：**

**第1步：** 求 $f(x)$ 在 $[-2, 2]$ 上的值域
> 📌 运用知识点：闭区间上最值

对 $f(x)$ 求导：

$$f'(x) = 3x^2 - 3 = 3(x+1)(x-1)$$

令 $f'(x) = 0$，得 $x = -1$ 或 $x = 1$，均在 $[-2, 2]$ 内。

计算关键点的函数值：

$$f(-2) = -8 + 6 + 1 = -1$$

$$f(-1) = -1 + 3 + 1 = 3$$

$$f(1) = 1 - 3 + 1 = -1$$

$$f(2) = 8 - 6 + 1 = 3$$

所以 $f(x)$ 在 $[-2, 2]$ 上的最大值为 $3$，最小值为 $-1$，值域为 $[-1, 3]$。

**第2步：** 转化存在性条件
> 📌 运用知识点：存在性问题的转化

题意：$\forall x_1 \in [-2, 2], \exists x_2 \in [-2, 2]$，使得 $f(x_2) = f(x_1) - m$。

这要求：对 $f(x)$ 值域中的任意值 $y$，$y - m$ 也必须在值域 $[-1, 3]$ 中。

即当 $y$ 取遍 $[-1, 3]$ 时，$y - m \in [-1, 3]$ 恒成立。

等价于 $[-1 - m, 3 - m] \subseteq [-1, 3]$。

**第3步：** 求解 $m$
> 📌 运用知识点：集合包含关系

由 $[-1 - m, 3 - m] \subseteq [-1, 3]$，需同时满足：

$$\begin{cases} -1 - m \geqslant -1 \\ 3 - m \leqslant 3 \end{cases} \implies \begin{cases} m \leqslant 0 \\ m \geqslant 0 \end{cases}$$

所以 $m = 0$。

**⚠️ 易错提醒：** ①"$\forall x_1, \exists x_2$"是全称量词与存在量词的组合，需转化为值域的包含关系 $A \subseteq B$，而不是 $A \cap B \neq \varnothing$；②求值域时不要遗漏极值点，$f(x)$ 在 $[-2, 2]$ 上的最值需要比较端点值和极值；③本题结果恰好 $m = 0$，说明只有恒等映射才能满足条件，这是因为值域的"宽度"恰好不允许平移。

**💡 解题思路总结：** 存在性与任意性组合问题的转化方法："$\forall x_1 \in I, \exists x_2 \in I$，$f(x_1) = g(x_2) + m$"等价于"$f$ 的值域 $A$ 满足 $A - m \subseteq B$"（其中 $B$ 是 $g$ 的值域）。先求值域，再建立包含关系，最后解不等式（组）。
