---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 12
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - complex-number-concept
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 设复数 $z$ 满足 $|z| = 1$，且 $(3 + 4i) \cdot z$ 是纯虚数，求 $z$。

---

**解答：**

**第1步：** 设 $z = a + bi$
> 📌 运用知识点：复数的概念

$|z| = 1 \Rightarrow a^2 + b^2 = 1 \quad \cdots (1)$

$(3 + 4i)(a + bi) = (3a - 4b) + (4a + 3b)i$

**第2步：** 利用纯虚数条件
> 📌 运用知识点：纯虚数条件

实部为 $0$：$3a - 4b = 0$，$a = \frac{4b}{3} \quad \cdots (2)$

虚部不为 $0$：$4a + 3b \neq 0$

**第3步：** 联立求解
> 📌 运用知识点：解方程组

将 (2) 代入 (1)：$\frac{16b^2}{9} + b^2 = 1$，$\frac{25b^2}{9} = 1$，$b^2 = \frac{9}{25}$，$b = \pm\frac{3}{5}$

$b = \frac{3}{5}$ 时 $a = \frac{4}{5}$，$4a + 3b = \frac{16}{5} + \frac{9}{5} = 5 \neq 0$ ✓

$b = -\frac{3}{5}$ 时 $a = -\frac{4}{5}$，$4a + 3b = -\frac{16}{5} - \frac{9}{5} = -5 \neq 0$ ✓

$z = \frac{4}{5} + \frac{3}{5}i$ 或 $z = -\frac{4}{5} - \frac{3}{5}i$

**💡 易错提醒：** 纯虚数要求实部为零且虚部不为零，两组解都要验证虚部非零。

**💡 解题思路总结：** 设 $z = a + bi$，利用模和纯虚数条件列方程组求解。
