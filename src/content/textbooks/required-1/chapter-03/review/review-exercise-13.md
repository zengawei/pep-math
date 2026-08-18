---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知 $f(x)$ 的定义域为 $[-2, 4]$，求 $g(x) = f(x+1) + f(x-1)$ 的定义域。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：复合函数的定义域

$f(x)$ 的定义域为 $[-2, 4]$，即 $f$ 的"输入"必须在 $[-2, 4]$ 内。

对于 $g(x) = f(x+1) + f(x-1)$，需要同时满足：

$x + 1 \in [-2, 4]$ 且 $x - 1 \in [-2, 4]$

**第2步：** 解不等式组
> 📌 运用知识点：不等式的性质

$-2 \leq x + 1 \leq 4 \Rightarrow -3 \leq x \leq 3$

$-2 \leq x - 1 \leq 4 \Rightarrow -1 \leq x \leq 5$

**第3步：** 取交集
> 📌 运用知识点：集合的运算

$[-3, 3] \cap [-1, 5] = [-1, 3]$

$g(x)$ 的定义域为 $[-1, 3]$。

**⚠️ 易错提醒：** $g(x)$ 的定义域需要两个条件同时满足，取交集（不是并集）。

**💡 解题思路总结：** 复合函数的定义域：让每个 $f(\cdot)$ 中的表达式都落在 $f$ 的原始定义域内，取各条件的交集。
