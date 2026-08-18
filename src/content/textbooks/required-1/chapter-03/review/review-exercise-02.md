---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 2
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知 $f(x) = \begin{cases} x^2 + 1, & x \leq 1 \\ 2x - 1, & x > 1 \end{cases}$，求 $f(0)$，$f(1)$，$f(3)$，$f(f(2))$ 的值。

---

**解答：**

**第1步：** 求 $f(0)$
> 📌 运用知识点：分段函数

$0 \leq 1$，使用第一段：$f(0) = 0^2 + 1 = 1$

**第2步：** 求 $f(1)$
> 📌 运用知识点：分段函数

$1 \leq 1$，使用第一段：$f(1) = 1^2 + 1 = 2$

**第3步：** 求 $f(3)$
> 📌 运用知识点：分段函数

$3 > 1$，使用第二段：$f(3) = 2 \times 3 - 1 = 5$

**第4步：** 求 $f(f(2))$
> 📌 运用知识点：分段函数与复合

先求 $f(2)$：$2 > 1$，$f(2) = 2 \times 2 - 1 = 3$。

再求 $f(f(2)) = f(3) = 5$。

**⚠️ 易错提醒：** 求 $f(f(2))$ 时注意先算内层 $f(2) = 3$，再算 $f(3) = 5$。容易在判断 $f(2)$ 用哪一段时出错。

**💡 解题思路总结：** 分段函数求值"对号入座"，复合求值从内到外逐层计算。
