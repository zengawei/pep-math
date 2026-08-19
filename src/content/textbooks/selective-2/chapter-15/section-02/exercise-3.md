---
type: exercise
textbook: selective-2
chapter: 15
section: 2
number: 3
difficulty: hard
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "课标15.2.3"
---

**题目：** 已知函数 $f(x) = x^3 - ax$ 在 $(1, +\infty)$ 上单调递增，求实数 $a$ 的取值范围。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性

$f'(x) = 3x^2 - a$

**第2步：** 建立条件
> 📌 运用知识点：导数与单调性

$f(x)$ 在 $(1, +\infty)$ 上单调递增，要求在 $(1, +\infty)$ 上 $f'(x) \geqslant 0$ 恒成立，即

$$3x^2 - a \geqslant 0 \quad \text{对任意 } x \in (1, +\infty) \text{ 恒成立}$$

即 $a \leqslant 3x^2$ 对任意 $x \in (1, +\infty)$ 恒成立。

**第3步：** 求 $3x^2$ 在 $(1, +\infty)$ 上的下确界
> 📌 运用知识点：导数与单调性

当 $x \in (1, +\infty)$ 时，$3x^2 > 3 \times 1^2 = 3$。

$g(x) = 3x^2$ 在 $(1, +\infty)$ 上单调递增，当 $x \to 1^+$ 时，$3x^2 \to 3$。

因此 $3x^2$ 在 $(1, +\infty)$ 上的下确界为 $3$（不可取到）。

**第4步：** 确定 $a$ 的范围
> 📌 运用知识点：导数与单调性

要使 $a \leqslant 3x^2$ 对任意 $x \in (1, +\infty)$ 恒成立，需 $a \leqslant 3$。

**验证：** 当 $a = 3$ 时，$f'(x) = 3x^2 - 3 = 3(x^2 - 1)$，在 $(1, +\infty)$ 上 $x^2 > 1$，故 $f'(x) > 0$，满足条件。

**结论：** $a$ 的取值范围为 $a \leqslant 3$，即 $(-\infty, 3]$。

**💡 解题思路总结：** 含参单调性问题的关键是"分离参数"：由单调性条件得到 $f'(x) \geqslant 0$ 在指定区间上恒成立，将参数 $a$ 与含 $x$ 的表达式分离，再求另一侧的最值（或下确界）。注意端点处等号是否可取。

