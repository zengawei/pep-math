---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P74 练习"
---

**题目：** 已知 $f(x)$ 是定义在 $\mathbb{R}$ 上的偶函数，且在 $[0, +\infty)$ 上单调递增。若 $f(a) \leq f(2)$，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 利用偶函数性质转化
> 📌 运用知识点：函数奇偶性

因为 $f(x)$ 是偶函数，所以 $f(a) = f(|a|)$。

不等式变为 $f(|a|) \leq f(2)$。

**第2步：** 利用单调性去 $f$
> 📌 运用知识点：函数单调性

因为 $f(x)$ 在 $[0, +\infty)$ 上单调递增，且 $|a| \geq 0$，$2 > 0$，

$f(|a|) \leq f(2) \iff |a| \leq 2$

**第3步：** 解绝对值不等式
> 📌 运用知识点：绝对值不等式

$|a| \leq 2 \iff -2 \leq a \leq 2$

所以 $a$ 的取值范围为 $[-2, 2]$。

**⚠️ 易错提醒：** 偶函数 + 单调性的组合题，关键是将 $f(a)$ 转化为 $f(|a|)$。不能直接由 $f(a) \leq f(2)$ 得到 $a \leq 2$，因为 $a$ 可能为负数。

**💡 解题思路总结：** 偶函数在对称区间上的单调性"左右相反"。利用 $f(a) = f(|a|)$ 将问题转化到 $[0, +\infty)$ 上，再利用单调性解不等式。
