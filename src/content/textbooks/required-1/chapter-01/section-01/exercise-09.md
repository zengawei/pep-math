---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P12 练习3"
---

**题目：** 已知集合 $A = \{x \mid x^2 - 3x + 2 = 0\}$，$B = \{x \mid x^2 - ax + a - 1 = 0\}$，若 $A \cup B = A$，求实数 $a$ 的值。

---

**解答：**

**第1步：** 确定集合 $A$
> 📌 运用知识点：列举法

解方程 $x^2 - 3x + 2 = 0$：

$(x - 1)(x - 2) = 0$，$x = 1$ 或 $x = 2$。

所以 $A = \{1, 2\}$。

**第2步：** 分析条件 $A \cup B = A$
> 📌 运用知识点：并集与子集的关系

$A \cup B = A$ 等价于 $B \subseteq A$。

所以 $B$ 的元素只能取自 $\{1, 2\}$，即 $B$ 的可能情况为：$\varnothing$、$\{1\}$、$\{2\}$、$\{1, 2\}$。

**第3步：** 分析方程 $x^2 - ax + a - 1 = 0$
> 📌 运用知识点：含参数的集合问题

将方程分解：$x^2 - ax + a - 1 = 0$

$x^2 - 1 - a(x - 1) = 0$

$(x - 1)(x + 1) - a(x - 1) = 0$

$(x - 1)(x - a + 1) = 0$

所以方程的根为 $x = 1$ 和 $x = a - 1$。

**第4步：** 分类讨论

**情况一：** $B = \{1\}$，即 $a - 1 = 1$，$a = 2$。

此时 $B = \{1\} \subseteq A$。✓

**情况二：** $B = \{1, 2\}$，即 $a - 1 = 2$，$a = 3$。

此时 $B = \{1, 2\} = A \subseteq A$。✓

**情况三：** $B = \varnothing$，即方程无实数根。但方程 $(x-1)(x-a+1)=0$ 总有根 $x=1$，所以 $B \neq \varnothing$。

综上所述，$a = 2$ 或 $a = 3$。

**⚠️ 易错提醒：** $A \cup B = A$ 等价于 $B \subseteq A$，不要误认为 $A \cup B = A$ 意味着 $B = A$。另外要注意 $B = \varnothing$ 的情况。

**💡 解题思路总结：** 先将集合化为列举法，再利用集合关系建立条件，对参数分类讨论。因式分解是解含参方程的关键技巧。
