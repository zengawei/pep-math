---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P115 复习28"
---

**题目：** 已知 $f(x) = \log_4(4^x + 1) + kx$（$k \in \mathbb{R}$）是偶函数，求 $k$ 的值。

---

**解答：**

**第1步：** 利用偶函数条件
> 📌 运用知识点：对数函数图象与性质

$f(-x) = f(x)$ 对所有 $x$ 成立。

$f(-x) = \log_4(4^{-x} + 1) - kx$

$f(x) = \log_4(4^x + 1) + kx$

**第2步：** 化简 $f(-x)$
> 📌 运用知识点：指数运算法则

$\log_4(4^{-x} + 1) = \log_4\frac{1 + 4^x}{4^x} = \log_4(1 + 4^x) - \log_4 4^x = \log_4(4^x + 1) - x$

**第3步：** 建立等式

$f(-x) = \log_4(4^x + 1) - x - kx = \log_4(4^x + 1) + kx$

$-x - kx = kx$

$-1 - k = k$

$k = -\frac{1}{2}$

**⚠️ 易错提醒：** $4^{-x} + 1 = \frac{1 + 4^x}{4^x}$，提取 $4^{-x}$ 后利用对数减法法则化简。

**💡 解题思路总结：** 含参数的偶函数问题：利用 $f(-x) = f(x)$ 建立恒等式，比较系数求参数。
