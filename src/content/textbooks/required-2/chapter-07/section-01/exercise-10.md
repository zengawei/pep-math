---
type: exercise
textbook: required-2
chapter: 7
section: 1
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - complex-number-concept
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知复数 $z = \frac{(m^2 - m - 2) + (m^2 + 3m + 2)i}{m + 1}$（$m \neq -1$），当 $m$ 取什么值时，$z$ 是：

(1) 实数；(2) 纯虚数。

---

**解答：**

**第1步：** 化简 $z$
> 📌 运用知识点：因式分解

分子实部：$m^2 - m - 2 = (m - 2)(m + 1)$

分子虚部系数：$m^2 + 3m + 2 = (m + 1)(m + 2)$

因为 $m \neq -1$，$m + 1 \neq 0$，可以约分：

$$z = \frac{(m-2)(m+1) + (m+1)(m+2)i}{m+1} = (m - 2) + (m + 2)i$$

**第2步：** (1) $z$ 为实数
> 📌 运用知识点：复数的概念——实数条件

虚部为 $0$：$m + 2 = 0$，$m = -2$。

**第3步：** (2) $z$ 为纯虚数
> 📌 运用知识点：复数的概念——纯虚数条件

实部为 $0$ 且虚部不为 $0$：

$\begin{cases} m - 2 = 0 \\ m + 2 \neq 0 \end{cases}$

$m = 2$，验证 $m + 2 = 4 \neq 0$ ✓

所以 $m = 2$ 时 $z$ 为纯虚数。

**💡 易错提醒：** 先约分化简再判断！不化简直接令分子实部为零会得到错误结果。约分条件 $m \neq -1$ 已在题目中给出。

**💡 解题思路总结：** 含分式的复数先因式分解约分，化为标准形式 $a + bi$ 后再判断类型。
