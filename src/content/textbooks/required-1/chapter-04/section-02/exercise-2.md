---
type: exercise
textbook: required-1
chapter: 4
section: 2
number: 2
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - exponent-logarithm
source: "人教A版2019"
references: "课标4.2.1"
---

**题目：** 已知 $\log_{18} 9 = a$，$18^b = 5$，用 $a, b$ 表示 $\log_{36} 45$。

---

**解答：**

**第1步：** 分析已知条件
> 📌 运用知识点：指数与对数运算

$\log_{18} 9 = a$，$18^b = 5$ 即 $\log_{18} 5 = b$。

**第2步：** 换底
> 📌 运用知识点：指数与对数运算

$\log_{36} 45 = \frac{\log_{18} 45}{\log_{18} 36}$

$\log_{18} 45 = \log_{18}(9 \times 5) = \log_{18} 9 + \log_{18} 5 = a + b$

$\log_{18} 36 = \log_{18}(4 \times 9) = \log_{18} 4 + \log_{18} 9$

$\log_{18} 4 = \log_{18}\frac{36}{9} = \log_{18} 36 - \log_{18} 9$

设 $\log_{18} 36 = t$，则 $\log_{18} 4 = t - a$。

又 $\log_{18} 4 = \log_{18} 2^2 = 2\log_{18} 2$，

$\log_{18} 2 = \log_{18}\frac{18}{9} = 1 - a$

所以 $\log_{18} 4 = 2(1-a)$，$t = 2(1-a) + a = 2 - a$。

$\log_{36} 45 = \frac{a+b}{2-a}$
