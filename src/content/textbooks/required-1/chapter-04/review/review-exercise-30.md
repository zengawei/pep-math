---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P115 复习30"
---

**题目：** 已知函数 $f(x) = \log_a(ax^2 - x + \frac{1}{2})$（$a > 0$ 且 $a \neq 1$）在 $[1, 2]$ 上恒有 $f(x) > 0$，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：对数函数图象与性质

$f(x) > 0$ 即 $\log_a(ax^2 - x + \frac{1}{2}) > 0 = \log_a 1$

**第2步：** 分类讨论
> 📌 运用知识点：指数函数图象与性质

**情况1：** $a > 1$ 时，$\log_a t$ 递增，需要 $ax^2 - x + \frac{1}{2} > 1$，即 $ax^2 - x - \frac{1}{2} > 0$ 在 $[1,2]$ 上恒成立。

设 $g(x) = ax^2 - x - \frac{1}{2}$

$g(1) = a - 1 - \frac{1}{2} = a - \frac{3}{2} > 0 \Rightarrow a > \frac{3}{2}$

$g(2) = 4a - 2 - \frac{1}{2} = 4a - \frac{5}{2} > 0 \Rightarrow a > \frac{5}{8}$

当 $a > \frac{3}{2}$ 时，$g(x)$ 在 $[1,2]$ 上的最小值在 $x=1$ 处（对称轴 $x = \frac{1}{2a} < 1$），所以 $a > \frac{3}{2}$。

**情况2：** $0 < a < 1$ 时，$\log_a t$ 递减，需要 $0 < ax^2 - x + \frac{1}{2} < 1$。

$ax^2 - x + \frac{1}{2} < 1$ 即 $ax^2 - x - \frac{1}{2} < 0$

$g(1) = a - \frac{3}{2} < 0 \Rightarrow a < \frac{3}{2}$（已满足）

$g(2) = 4a - \frac{5}{2} < 0 \Rightarrow a < \frac{5}{8}$

同时需要 $ax^2 - x + \frac{1}{2} > 0$ 在 $[1,2]$ 上恒成立。

$h(x) = ax^2 - x + \frac{1}{2}$，$h(1) = a - \frac{1}{2} > 0 \Rightarrow a > \frac{1}{2}$

$h(2) = 4a - \frac{3}{2} > 0 \Rightarrow a > \frac{3}{8}$

综合：$\frac{1}{2} < a < \frac{5}{8}$

**第3步：** 合并

$a$ 的取值范围为 $\left(\frac{1}{2}, \frac{5}{8}\right) \cup \left(\frac{3}{2}, +\infty\right)$。

**⚠️ 易错提醒：** 对数不等式必须分 $a > 1$ 和 $0 < a < 1$ 讨论；恒成立问题要确保区间端点都满足。

**💡 解题思路总结：** 对数恒成立问题：①分类讨论底数 ②转化为代数不等式 ③在闭区间上求最值确定参数范围。
