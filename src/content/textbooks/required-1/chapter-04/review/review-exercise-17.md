---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P114 复习17"
---

**题目：** 求函数 $y = \log_2(x^2 - 4x + 5)$ 的最小值。

---

**解答：**

**第1步：** 分析内层函数
> 📌 运用知识点：对数函数图象与性质

$t = x^2 - 4x + 5 = (x-2)^2 + 1 \geq 1$

$t$ 的最小值为1（当 $x = 2$ 时取到）。

**第2步：** 求最小值
> 📌 运用知识点：对数函数图象与性质

$y = \log_2 t$，底数 $2 > 1$，关于 $t$ 单调递增。

$t$ 最小为1时，$y_{min} = \log_2 1 = 0$。

**⚠️ 易错提醒：** 先求内层最小值，再代入外层求值。注意 $t \geq 1 > 0$，定义域为 $\mathbb{R}$。

**💡 解题思路总结：** 复合函数最值：先求内层最值，再代入外层。
