---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P62 练习"
---

**题目：** 已知函数 $f(x) = \begin{cases} 2x + 1, & x < -1 \\ x^2, & -1 \leq x \leq 2 \\ -x + 6, & x > 2 \end{cases}$

(1) 求 $f(-3)$，$f(1)$，$f(4)$ 的值；

(2) 若 $f(a) = 3$，求 $a$ 的值。

---

**解答：**

**第1步：** 求 $f(-3)$
> 📌 运用知识点：分段函数

因为 $-3 < -1$，使用第一段：$f(-3) = 2 \times (-3) + 1 = -5$

**第2步：** 求 $f(1)$
> 📌 运用知识点：分段函数

因为 $-1 \leq 1 \leq 2$，使用第二段：$f(1) = 1^2 = 1$

**第3步：** 求 $f(4)$
> 📌 运用知识点：分段函数

因为 $4 > 2$，使用第三段：$f(4) = -4 + 6 = 2$

**第4步：** 解 $f(a) = 3$
> 📌 运用知识点：分段函数与方程

**情况一：** $a < -1$ 时，$2a + 1 = 3$，$a = 1$。但 $1 \not< -1$，舍去。

**情况二：** $-1 \leq a \leq 2$ 时，$a^2 = 3$，$a = \sqrt{3}$ 或 $a = -\sqrt{3}$。

$\sqrt{3} \approx 1.73 \in [-1, 2]$，符合；$-\sqrt{3} \approx -1.73 \not\in [-1, 2]$，舍去。

**情况三：** $a > 2$ 时，$-a + 6 = 3$，$a = 3$。$3 > 2$，符合。

所以 $a = \sqrt{3}$ 或 $a = 3$。

**⚠️ 易错提醒：** 解出 $a$ 的值后，必须检验是否满足该段的条件范围。不检验会导致增根。

**💡 解题思路总结：** 分段函数求值"对号入座"；分段函数解方程需要分情况讨论，每种情况解出后要验证是否在对应区间内。
