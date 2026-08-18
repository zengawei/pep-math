---
type: exercise
textbook: required-2
chapter: 7
section: 1
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - complex-number-concept
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知复数 $z = (m^2 + m - 6) + (m^2 - 4)i$ 是纯虚数，求实数 $m$ 的值。

---

**解答：**

**第1步：** 列出纯虚数条件
> 📌 运用知识点：复数的概念——纯虚数条件

$z$ 是纯虚数 $\Leftrightarrow$ 实部为 $0$ 且虚部不为 $0$：

$\begin{cases} m^2 + m - 6 = 0 \quad \cdots (1) \\ m^2 - 4 \neq 0 \quad \cdots (2) \end{cases}$

**第2步：** 求解
> 📌 运用知识点：因式分解

由 (1)：$(m + 3)(m - 2) = 0$，$m = -3$ 或 $m = 2$。

由 (2)：$m \neq 2$ 且 $m \neq -2$。

验证：$m = -3$ 时，$m^2 - 4 = 9 - 4 = 5 \neq 0$ ✓

$m = 2$ 时，$m^2 - 4 = 4 - 4 = 0$ ✗（不满足条件 (2)）

所以 $m = -3$。

**💡 易错提醒：** 纯虚数必须同时满足实部 $= 0$ 和虚部 $\neq 0$。$m = 2$ 使虚部为 $0$，此时 $z = 0$ 是实数，要排除。

**💡 解题思路总结：** 纯虚数条件是两个方程（不等式）联立，解完后必须验证虚部不为零。
