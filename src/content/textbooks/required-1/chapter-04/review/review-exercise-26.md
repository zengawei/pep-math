---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P115 复习26"
---

**题目：** 设 $f(x) = \begin{cases} 2^x, & x < 0 \\ 1, & 0 \leq x < 1 \\ \log_2 x, & x \geq 1 \end{cases}$，求 $f(f(-1))$ 的值。

---

**解答：**

**第1步：** 求 $f(-1)$
> 📌 运用知识点：指数函数图象与性质

$-1 < 0$，所以 $f(-1) = 2^{-1} = \frac{1}{2}$

**第2步：** 求 $f(f(-1)) = f\left(\frac{1}{2}\right)$
> 📌 运用知识点：对数函数图象与性质

$0 \leq \frac{1}{2} < 1$，所以 $f\left(\frac{1}{2}\right) = 1$

$f(f(-1)) = 1$

**⚠️ 易错提醒：** 分段函数求值时，先判断自变量属于哪一段，再代入对应表达式。

**💡 解题思路总结：** 复合分段函数：由内向外逐层求值，每层先判断所属区间。
