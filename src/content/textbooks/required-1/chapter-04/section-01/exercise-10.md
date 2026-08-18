---
type: exercise
textbook: required-1
chapter: 4
section: 1
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "人教A版2019"
references: "必修第一册 P91 习题1"
---

**题目：** 已知 $a^{2n} = 3$，求 $\frac{a^{3n} + a^{-3n}}{a^n + a^{-n}}$ 的值。

---

**解答：**

**第1步：** 设 $t = a^n$
> 📌 运用知识点：指数运算法则

则 $t^2 = a^{2n} = 3$，原式变为 $\frac{t^3 + t^{-3}}{t + t^{-1}}$

**第2步：** 因式分解
> 📌 运用知识点：指数幂运算

$t^3 + t^{-3} = (t + t^{-1})(t^2 - 1 + t^{-2})$

所以原式 $= t^2 - 1 + t^{-2}$

**第3步：** 代入计算
> 📌 运用知识点：指数运算法则

$t^2 = 3$，$t^{-2} = \frac{1}{3}$

原式 $= 3 - 1 + \frac{1}{3} = \frac{7}{3}$

**⚠️ 易错提醒：** 立方和公式 $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ 中 $ab = t \cdot t^{-1} = 1$，不要遗漏。

**💡 解题思路总结：** 换元法简化表达式，再利用因式分解和已知条件代入求值。
