---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P61 练习"
---

**题目：** 已知 $f\left(x + \frac{1}{x}\right) = x^2 + \frac{1}{x^2}$（$x > 0$），求 $f(x)$ 的解析式。

---

**解答：**

**第1步：** 配方变形
> 📌 运用知识点：函数解析式求法（配凑法）

注意到 $x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2$

**第2步：** 换元
> 📌 运用知识点：函数解析式求法（换元法）

令 $t = x + \frac{1}{x}$，则 $f(t) = t^2 - 2$。

**第3步：** 确定定义域
> 📌 运用知识点：函数的概念

当 $x > 0$ 时，由均值不等式 $t = x + \frac{1}{x} \geq 2\sqrt{x \cdot \frac{1}{x}} = 2$，

所以 $t \geq 2$。

因此 $f(x) = x^2 - 2$（$x \geq 2$）。

**⚠️ 易错提醒：** 容易忘记求 $t$ 的范围，导致定义域写成 $\mathbb{R}$。换元法必须同时确定新变量的取值范围。

**💡 解题思路总结：** 求函数解析式常用方法：①配凑法（将右边凑成括号内表达式的形式）；②换元法（令 $t$ 等于括号内的表达式）。无论哪种方法都要注意新变量的取值范围。
