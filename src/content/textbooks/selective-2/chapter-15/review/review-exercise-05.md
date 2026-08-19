---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 5
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P52 复习参考题"
---

**题目：** 求下列函数的导数：

（1）$f(x) = x^4 - 3x^3 + 2x^2 - x + 5$；

（2）$f(x) = 3e^x + 2\ln x - \dfrac{1}{x}$。

---

**解答：**

**第1步：** 求第（1）题的导数
> 📌 运用知识点：导数的运算法则

利用幂函数求导公式 $(x^n)' = nx^{n-1}$ 以及导数的加减法则，逐项求导：

$$f'(x) = (x^4)' - (3x^3)' + (2x^2)' - (x)' + (5)'$$

$$= 4x^3 - 3 \cdot 3x^2 + 2 \cdot 2x - 1 + 0$$

$$= 4x^3 - 9x^2 + 4x - 1$$

**第2步：** 求第（2）题的导数
> 📌 运用知识点：导数的运算法则

利用基本初等函数的导数公式：$(e^x)' = e^x$，$(\ln x)' = \dfrac{1}{x}$，$\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$：

$$f'(x) = 3(e^x)' + 2(\ln x)' - \left(\frac{1}{x}\right)'$$

$$= 3e^x + \frac{2}{x} - \left(-\frac{1}{x^2}\right)$$

$$= 3e^x + \frac{2}{x} + \frac{1}{x^2}$$

**⚠️ 易错提醒：** ①常数项的导数为零，不要遗漏或写错；②$\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$，负号容易丢掉；③系数要乘到每一项上，如 $(3x^3)' = 9x^2$ 而不是 $3x^2$。

**💡 解题思路总结：** 多项式和基本初等函数组合的求导，关键是熟记基本导数公式，然后逐项求导。注意每一项的系数要保留，常数项导数为零。对于 $\frac{1}{x} = x^{-1}$ 的求导，利用幂函数公式即可。
