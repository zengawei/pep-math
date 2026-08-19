---
type: example
textbook: selective-2
chapter: 15
section: 2
number: 4
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P38 例4"
---

**例题：** 已知 $f(x) = x^3 + ax + 1$ 在 $\mathbb{R}$ 上是单调递增函数，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性

$f'(x) = 3x^2 + a$

**第2步：** 分析单调递增条件
> 📌 运用知识点：导数与单调性

$f(x)$ 在 $\mathbb{R}$ 上单调递增 $\iff f'(x) \geq 0$ 对 $x \in \mathbb{R}$ 恒成立。

即 $3x^2 + a \geq 0$ 对 $x \in \mathbb{R}$ 恒成立。

**第3步：** 求参数范围
> 📌 运用知识点：导数与单调性

$3x^2 + a \geq 0 \iff a \geq -3x^2$ 对 $x \in \mathbb{R}$ 恒成立。

因为 $-3x^2 \leq 0$，$-3x^2$ 的最大值为 $0$（在 $x = 0$ 时取到）。

所以 $a \geq 0$。

**第4步：** 验证
> 📌 运用知识点：导数与单调性

当 $a \geq 0$ 时，$f'(x) = 3x^2 + a \geq 0$ 恒成立，且 $f'(x) = 0$ 仅在有限个点成立（$a = 0$ 时仅在 $x = 0$），不影响单调性。

$$\boxed{a \geq 0}$$

**💡 解题思路总结：** "函数在某区间上单调递增"等价于"$f'(x) \geq 0$ 在该区间上恒成立"。将问题转化为恒成立问题后，利用二次函数的性质求参数范围。注意 $f'(x) \geq 0$ 允许在孤立点处等于零。
