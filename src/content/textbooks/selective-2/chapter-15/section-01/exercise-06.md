---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-concept
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P28 练习A 第6题"
---

**题目：** 已知函数 $f(x) = x^3$，用导数定义求 $f'(2)$。

---

**解答：**

**第1步：** 写出导数定义式
> 📌 运用知识点：导数的概念

$$f'(2) = \lim_{\Delta x \to 0} \frac{f(2 + \Delta x) - f(2)}{\Delta x}$$

**第2步：** 代入函数值计算分子
> 📌 运用知识点：导数的概念

$f(2 + \Delta x) = (2 + \Delta x)^3 = 8 + 12\Delta x + 6(\Delta x)^2 + (\Delta x)^3$

$f(2) = 8$

$$f(2 + \Delta x) - f(2) = 12\Delta x + 6(\Delta x)^2 + (\Delta x)^3$$

**第3步：** 代入极限式并化简
> 📌 运用知识点：导数的概念

$$f'(2) = \lim_{\Delta x \to 0} \frac{12\Delta x + 6(\Delta x)^2 + (\Delta x)^3}{\Delta x} = \lim_{\Delta x \to 0} \left[12 + 6\Delta x + (\Delta x)^2\right]$$

**第4步：** 求极限
> 📌 运用知识点：导数的概念

$$f'(2) = 12 + 0 + 0 = 12$$

**⚠️ 易错提醒：** 展开 $(2 + \Delta x)^3$ 时要使用完全立方公式 $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$，不要漏项。化简分式时必须约去 $\Delta x$ 后才能取极限。

**💡 解题思路总结：** 用定义求导的"三代一极限"步骤：①代入 $x_0 + \Delta x$ 求函数增量；②代入定义式；③约去 $\Delta x$ 化简；④取极限。本题验证了 $f'(x) = 3x^2$ 在 $x=2$ 处的值为 $12$。
