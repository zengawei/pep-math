---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P60 练习"
---

**题目：** 已知 $f(x) = \begin{cases} x+1, & x \leq 0 \\ x^2, & x > 0 \end{cases}$，求 $f(-2)$，$f(1)$，$f(f(-1))$ 的值。

---

**解答：**

**第1步：** 求 $f(-2)$
> 📌 运用知识点：分段函数

因为 $-2 \leq 0$，使用第一段 $f(x) = x + 1$：

$f(-2) = -2 + 1 = -1$

**第2步：** 求 $f(1)$
> 📌 运用知识点：分段函数

因为 $1 > 0$，使用第二段 $f(x) = x^2$：

$f(1) = 1^2 = 1$

**第3步：** 求 $f(f(-1))$
> 📌 运用知识点：分段函数与复合

先求 $f(-1)$：因为 $-1 \leq 0$，$f(-1) = -1 + 1 = 0$。

再求 $f(f(-1)) = f(0)$：因为 $0 \leq 0$，$f(0) = 0 + 1 = 1$。

所以 $f(f(-1)) = 1$。

**⚠️ 易错提醒：** 求 $f(f(-1))$ 时容易忘记先算内层 $f(-1)$ 的值，或判断 $f(0)$ 时用错了分段条件（$0 \leq 0$ 应用第一段）。

**💡 解题思路总结：** 分段函数求值时，先判断自变量属于哪个区间，再代入对应解析式。复合求值要从内到外逐层计算。
