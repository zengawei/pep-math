---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 10
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知复数 $z_1 = 2 + i$，$z_2 = a + 3i$（$a \in \mathbb{R}$），且 $z_1 \cdot z_2$ 是纯虚数，求 $a$ 的值。

---

**解答：**

**第1步：** 计算 $z_1 \cdot z_2$
> 📌 运用知识点：复数的乘法

$z_1 \cdot z_2 = (2 + i)(a + 3i) = 2a + 6i + ai + 3i^2 = (2a - 3) + (6 + a)i$

**第2步：** 利用纯虚数条件
> 📌 运用知识点：复数的概念——纯虚数

$z_1 \cdot z_2$ 是纯虚数 $\Leftrightarrow$ 实部为 $0$ 且虚部不为 $0$：

$\begin{cases} 2a - 3 = 0 \\ 6 + a \neq 0 \end{cases}$

$a = \frac{3}{2}$，验证 $6 + \frac{3}{2} = \frac{15}{2} \neq 0$ ✓

所以 $a = \frac{3}{2}$。

**💡 易错提醒：** 纯虚数要求实部为零且虚部不为零。展开乘法时 $3i^2 = -3$。

**💡 解题思路总结：** 先展开乘积化为标准形式，再令实部为零、虚部不为零。
