---
type: exercise
textbook: selective-2
chapter: 15
section: 2
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P38 练习A 第5题"
---

**题目：** 求函数 $f(x) = x^3 - 12x + 1$ 的单调递增区间。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性

$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x + 2)(x - 2)$

**第2步：** 令 $f'(x) > 0$，求递增区间
> 📌 运用知识点：导数与单调性

$f(x)$ 单调递增 $\iff f'(x) > 0$

$3(x + 2)(x - 2) > 0$

因为 $3 > 0$，需要 $(x + 2)(x - 2) > 0$。

解得 $x < -2$ 或 $x > 2$。

**第3步：** 写出结论
> 📌 运用知识点：导数与单调性

$f(x)$ 的单调递增区间为 $(-\infty, -2)$ 和 $(2, +\infty)$。

**⚠️ 易错提醒：** 题目只要求"单调递增区间"，不需要求递减区间。注意审题，不要做多余的工作。$f'(x) > 0$ 对应递增，$f'(x) < 0$ 对应递减，不要搞反。

**💡 解题思路总结：** 求单调递增区间就是解不等式 $f'(x) > 0$。对于二次型导数，先因式分解找零点，再用"穿根法"或列表法判断符号。
