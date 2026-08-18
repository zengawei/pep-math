---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x) = \begin{cases} x^2 + 2x, & x \geq 0 \\ -x^2 + 2x, & x < 0 \end{cases}$

(1) 判断 $f(x)$ 的奇偶性；

(2) 解不等式 $f(a) > 3$。

---

**解答：**

**第1步：** 判断奇偶性
> 📌 运用知识点：函数奇偶性

定义域为 $\mathbb{R}$，关于原点对称。

当 $x > 0$ 时：$-x < 0$，$f(-x) = -(-x)^2 + 2(-x) = -x^2 - 2x = -(x^2 + 2x) = -f(x)$

当 $x < 0$ 时：$-x > 0$，$f(-x) = (-x)^2 + 2(-x) = x^2 - 2x = -(-x^2 + 2x) = -f(x)$

$f(0) = 0$

所以 $f(-x) = -f(x)$ 对所有 $x$ 成立，$f(x)$ 为**奇函数**。

**第2步：** 解不等式 $f(a) > 3$
> 📌 运用知识点：分段函数与不等式

**当 $a \geq 0$ 时：** $a^2 + 2a > 3$

$a^2 + 2a - 3 > 0$，$(a + 3)(a - 1) > 0$

$a < -3$ 或 $a > 1$。结合 $a \geq 0$：$a > 1$。

**当 $a < 0$ 时：** $-a^2 + 2a > 3$

$a^2 - 2a + 3 < 0$，$(a - 1)^2 + 2 < 0$

左边恒正，无解。

不等式的解集为 $(1, +\infty)$。

**⚠️ 易错提醒：** ①判断奇偶性需要分别验证 $x > 0$ 和 $x < 0$ 的情况。②$a < 0$ 时的不等式 $-a^2 + 2a > 3$ 化简后无解，不要遗漏这种情况。

**💡 解题思路总结：** 分段函数的奇偶性需要逐段验证。解不等式时分情况讨论，每种情况结合区间限制求解。
