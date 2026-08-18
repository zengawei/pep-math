---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P114 复习19"
---

**题目：** 已知 $f(x) = \frac{2^x - 1}{2^x + 1}$，判断 $f(x)$ 的奇偶性。

---

**解答：**

**第1步：** 求 $f(-x)$
> 📌 运用知识点：指数函数图象与性质

$f(-x) = \frac{2^{-x} - 1}{2^{-x} + 1} = \frac{\frac{1}{2^x} - 1}{\frac{1}{2^x} + 1} = \frac{1 - 2^x}{1 + 2^x} = -\frac{2^x - 1}{2^x + 1} = -f(x)$

**第2步：** 结论

定义域为 $\mathbb{R}$，关于原点对称，且 $f(-x) = -f(x)$，所以 $f(x)$ 是奇函数。

**⚠️ 易错提醒：** 处理 $2^{-x}$ 时，分子分母同乘 $2^x$ 化简，不要直接约分。

**💡 解题思路总结：** 含指数函数的奇偶性判断：计算 $f(-x)$，将 $a^{-x}$ 化为 $\frac{1}{a^x}$ 后通分化简。
