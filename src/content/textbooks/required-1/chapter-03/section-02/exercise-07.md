---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P73 练习"
---

**题目：** 求函数 $f(x) = \sqrt{x^2 - 2x + 3}$ 的单调递增区间。

---

**解答：**

**第1步：** 分析复合函数的结构
> 📌 运用知识点：复合函数的单调性

令 $u = x^2 - 2x + 3 = (x-1)^2 + 2$。

因为 $(x-1)^2 \geq 0$，所以 $u \geq 2 > 0$，定义域为 $\mathbb{R}$。

$f(x) = \sqrt{u}$，外层函数 $y = \sqrt{u}$ 在 $[0, +\infty)$ 上单调递增。

**第2步：** 分析内层函数的单调性
> 📌 运用知识点：二次函数的性质

$u = (x-1)^2 + 2$ 是开口向上的二次函数，

在 $(-\infty, 1]$ 上单调递减，在 $[1, +\infty)$ 上单调递增。

**第3步：** 利用"同增异减"法则
> 📌 运用知识点：复合函数的单调性

外层 $y = \sqrt{u}$ 递增，内层 $u$ 在 $[1, +\infty)$ 上递增，

"同增"→ 复合函数在 $[1, +\infty)$ 上单调递增。

所以 $f(x)$ 的单调递增区间为 $[1, +\infty)$。

**⚠️ 易错提醒：** 容易忘记先求定义域。复合函数单调性遵循"同增异减"法则：内外层单调性相同则复合函数递增，不同则递减。

**💡 解题思路总结：** 复合函数单调性分析步骤：①确定定义域；②分清内外层函数；③分别判断各层单调性；④用"同增异减"得出结论。
