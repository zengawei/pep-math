---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - derivative-concept
source: "人教A版2019"
references: "课标15.1.1"
---

**题目：** 用导数的定义求 $f(x) = x^2$ 在 $x = 1$ 处的导数。

---

**解答：**

**第1步：** 写出导数定义式
> 📌 运用知识点：导数的概念

$$f'(1) = \lim_{\Delta x \to 0} \frac{f(1 + \Delta x) - f(1)}{\Delta x}$$

**第2步：** 代入函数计算分子
> 📌 运用知识点：导数的概念

$f(1 + \Delta x) = (1 + \Delta x)^2 = 1 + 2\Delta x + (\Delta x)^2$

$f(1) = 1$

$$f(1 + \Delta x) - f(1) = 1 + 2\Delta x + (\Delta x)^2 - 1 = 2\Delta x + (\Delta x)^2$$

**第3步：** 代入极限式并化简
> 📌 运用知识点：导数的概念

$$f'(1) = \lim_{\Delta x \to 0} \frac{2\Delta x + (\Delta x)^2}{\Delta x} = \lim_{\Delta x \to 0} (2 + \Delta x)$$

**第4步：** 求极限
> 📌 运用知识点：导数的概念

$$f'(1) = 2 + 0 = 2$$

**💡 解题思路总结：** 用定义求导的核心步骤是"三代一极限"——代入函数值、计算增量、化简分式、取极限。注意化简时约去 $\Delta x$ 后才能取极限，否则会出现除以零的情况。
