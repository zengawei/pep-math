---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x)$ 是定义在 $[-1, 1]$ 上的奇函数，$f(1) = 1$，且对任意 $x_1, x_2 \in [-1, 1]$，当 $x_1 < x_2$ 时，$\frac{f(x_1) - f(x_2)}{x_1 - x_2} > 0$。

(1) 判断 $f(x)$ 在 $[-1, 1]$ 上的单调性并证明；

(2) 解不等式 $f\left(x + \frac{1}{2}\right) < f\left(\frac{1}{2}x\right)$；

(3) 若 $f(x) \leq m^2 - 2am + 1$ 对任意 $x \in [-1, 1]$，$a \in [-1, 1]$ 恒成立，求 $m$ 的取值范围。

---

**解答：**

**第1步：** 判断单调性
> 📌 运用知识点：函数单调性的定义

当 $x_1 < x_2$ 时，$x_1 - x_2 < 0$。

由条件 $\frac{f(x_1) - f(x_2)}{x_1 - x_2} > 0$，分母为负，所以分子也为负：

$f(x_1) - f(x_2) < 0$，即 $f(x_1) < f(x_2)$。

所以 $f(x)$ 在 $[-1, 1]$ 上**单调递增**。

**第2步：** 解不等式
> 📌 运用知识点：函数单调性的应用

需要 $x + \frac{1}{2} \in [-1, 1]$ 且 $\frac{1}{2}x \in [-1, 1]$：

$-\frac{3}{2} \leq x \leq \frac{1}{2}$ 且 $-2 \leq x \leq 2$，取交集：$-\frac{3}{2} \leq x \leq \frac{1}{2}$

$f$ 单调递增：$f\left(x + \frac{1}{2}\right) < f\left(\frac{1}{2}x\right) \iff x + \frac{1}{2} < \frac{1}{2}x$

$\frac{1}{2}x < -\frac{1}{2}$，$x < -1$

结合定义域约束：$-\frac{3}{2} \leq x < -1$

不等式的解集为 $\left[-\frac{3}{2}, -1\right)$。

**第3步：** 恒成立问题
> 📌 运用知识点：函数最值与恒成立

$f(x)$ 在 $[-1, 1]$ 上单调递增，最大值 $f(1) = 1$。

需要 $1 \leq m^2 - 2am + 1$ 对所有 $a \in [-1, 1]$ 恒成立。

即 $m^2 - 2am \geq 0$ 对所有 $a \in [-1, 1]$ 恒成立。

令 $g(a) = m^2 - 2am = -2ma + m^2$（关于 $a$ 的一次函数）。

需要 $g(-1) \geq 0$ 且 $g(1) \geq 0$：

$g(-1) = m^2 + 2m \geq 0 \Rightarrow m(m + 2) \geq 0 \Rightarrow m \leq -2$ 或 $m \geq 0$

$g(1) = m^2 - 2m \geq 0 \Rightarrow m(m - 2) \geq 0 \Rightarrow m \leq 0$ 或 $m \geq 2$

取交集：$m \leq -2$ 或 $m = 0$ 或 $m \geq 2$

$m$ 的取值范围为 $(-\infty, -2] \cup \{0\} \cup [2, +\infty)$。

**⚠️ 易错提醒：** ①第(2)问容易忘记定义域约束。②第(3)问中 $g(a)$ 是关于 $a$ 的一次函数，需要两端点都 $\geq 0$，不能只考虑一端。

**💡 解题思路总结：** 恒成立问题的策略：①将"对所有 $x$ 成立"转化为最值问题；②将"对所有 $a$ 成立"视 $a$ 为变量，利用一次函数的端点值。
