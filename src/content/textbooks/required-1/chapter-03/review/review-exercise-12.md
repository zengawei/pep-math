---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x) = \frac{\sqrt{4 - x}}{x - 1}$ 的定义域为 $A$，$g(x) = \sqrt{x + 3}$ 的定义域为 $B$，求 $A \cap B$ 和 $A \cup B$。

---

**解答：**

**第1步：** 求 $A$
> 📌 运用知识点：函数的定义域

$4 - x \geq 0$ 且 $x - 1 \neq 0$

$x \leq 4$ 且 $x \neq 1$

$A = (-\infty, 1) \cup (1, 4]$

**第2步：** 求 $B$
> 📌 运用知识点：函数的定义域

$x + 3 \geq 0$

$x \geq -3$

$B = [-3, +\infty)$

**第3步：** 求 $A \cap B$
> 📌 运用知识点：集合的运算

$A \cap B = [(-\infty, 1) \cup (1, 4]] \cap [-3, +\infty) = [-3, 1) \cup (1, 4]$

**第4步：** 求 $A \cup B$
> 📌 运用知识点：集合的运算

$A \cup B = (-\infty, 1) \cup (1, 4] \cup [-3, +\infty)$

因为 $[-3, +\infty)$ 覆盖了 $-3$ 到 $+\infty$ 的所有数，$(-\infty, 1)$ 覆盖了 $1$ 以下的所有数，

两者合并覆盖整个实数轴。

$A \cup B = \mathbb{R}$

**⚠️ 易错提醒：** 求 $A$ 时容易忘记 $x \neq 1$ 的条件。求 $A \cup B$ 时注意两段区间的合并。

**💡 解题思路总结：** 先分别求各函数的定义域（集合），再用集合运算求交集和并集。画数轴辅助分析。
