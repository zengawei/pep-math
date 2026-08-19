---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P28 练习A 第4题"
---

**题目：** 求下列函数的导数：

（1）$f(x) = 5x^3 - 2x + 7$；

（2）$f(x) = \sqrt{x} + \dfrac{1}{x}$。

---

**解答：**

**第1步：** 求 $f(x) = 5x^3 - 2x + 7$ 的导数
> 📌 运用知识点：导数运算法则——幂函数求导、加减法则

对每一项分别求导：

$$f'(x) = 5 \cdot 3x^2 - 2 + 0 = 15x^2 - 2$$

**第2步：** 求 $f(x) = \sqrt{x} + \dfrac{1}{x}$ 的导数
> 📌 运用知识点：导数运算法则——幂函数求导、加减法则

先将函数改写为幂函数形式：$f(x) = x^{\frac{1}{2}} + x^{-1}$

对每一项分别求导：

$$f'(x) = \frac{1}{2} x^{-\frac{1}{2}} + (-1) x^{-2} = \frac{1}{2\sqrt{x}} - \frac{1}{x^2}$$

**⚠️ 易错提醒：** 常数项 $7$ 的导数为 $0$，不要遗漏。对于 $\sqrt{x}$ 和 $\frac{1}{x}$，要先转化为幂函数形式 $x^{\frac{1}{2}}$ 和 $x^{-1}$ 再使用幂函数求导公式。

**💡 解题思路总结：** 多项式函数的求导利用加减法则逐项求导即可。遇到根式和分式时，先转化为幂函数形式 $x^n$，再利用公式 $(x^n)' = nx^{n-1}$ 求导。
