---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 求函数 $f(x) = \left(\frac{1}{2}\right)^{x^2 - 4x + 3}$ 的单调区间。

---

**解答：**

**第1步：** 分析复合结构
> 📌 运用知识点：复合函数的单调性

令 $u = x^2 - 4x + 3 = (x - 2)^2 - 1$。

外层函数 $y = \left(\frac{1}{2}\right)^u$ 是指数函数，底数 $\frac{1}{2} < 1$，单调递减。

**第2步：** 分析内层函数
> 📌 运用知识点：二次函数的性质

$u = (x - 2)^2 - 1$ 在 $(-\infty, 2]$ 上单调递减，在 $[2, +\infty)$ 上单调递增。

**第3步：** 利用"同增异减"
> 📌 运用知识点：复合函数的单调性

外层递减，内层递减 → "同" → 复合函数递增：$f(x)$ 在 $(-\infty, 2]$ 上单调递增。

外层递减，内层递增 → "异" → 复合函数递减：$f(x)$ 在 $[2, +\infty)$ 上单调递减。

**⚠️ 易错提醒：** 底数 $\frac{1}{2} < 1$ 时指数函数递减，不要误认为递增。"同增异减"中"同"指内外层单调性相同（都增或都减），复合后递增。

**💡 解题思路总结：** 复合函数单调性分析：①分清内外层；②分别判断单调性；③用"同增异减"得出结论。
