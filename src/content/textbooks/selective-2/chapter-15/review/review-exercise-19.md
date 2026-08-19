---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P52 复习参考题"
---

**题目：** 已知函数 $f(x) = x^3 - ax^2 + (a-1)x + 1$，讨论函数 $f(x)$ 的单调性。

---

**解答：**

**第1步：** 求导并分析导数的符号
> 📌 运用知识点：导数与单调性的关系

对 $f(x)$ 求导：

$$f'(x) = 3x^2 - 2ax + (a-1)$$

令 $f'(x) = 0$，即 $3x^2 - 2ax + (a-1) = 0$。

计算判别式：

$$\Delta = 4a^2 - 12(a-1) = 4a^2 - 12a + 12 = 4(a^2 - 3a + 3) = 4\left[\left(a - \frac{3}{2}\right)^2 + \frac{3}{4}\right] > 0$$

因为 $\Delta > 0$ 恒成立，所以 $f'(x) = 0$ 恒有两个不相等的实根。

**第2步：** 求出两根并对 $a$ 分类讨论
> 📌 运用知识点：含参分类讨论

由求根公式：

$$x = \frac{2a \pm \sqrt{4a^2 - 12a + 12}}{6} = \frac{a \pm \sqrt{a^2 - 3a + 3}}{3}$$

设 $x_1 = \frac{a - \sqrt{a^2 - 3a + 3}}{3}$，$x_2 = \frac{a + \sqrt{a^2 - 3a + 3}}{3}$，则 $x_1 < x_2$。

- 当 $x \in (-\infty, x_1)$ 时，$f'(x) > 0$，$f(x)$ 单调递增；
- 当 $x \in (x_1, x_2)$ 时，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x \in (x_2, +\infty)$ 时，$f'(x) > 0$，$f(x)$ 单调递增。

**⚠️ 易错提醒：** 本题判别式恒正，不需要对 $\Delta$ 分类讨论。很多同学看到含参就习惯性分 $\Delta > 0$、$\Delta = 0$、$\Delta < 0$ 三种情况，但这里 $\Delta$ 恒大于零，只需一种情况即可。注意验证 $\Delta$ 的符号再做判断。

**💡 解题思路总结：** 含参函数讨论单调性的标准流程：①求导 → ②分析导数方程的根（计算判别式）→ ③根据根的情况确定导数符号 → ④写出单调区间。关键是对判别式的分析要准确，不要盲目分类。
