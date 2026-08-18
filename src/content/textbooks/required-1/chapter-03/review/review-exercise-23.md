---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 定义在 $\mathbb{R}$ 上的偶函数 $f(x)$ 在 $[0, +\infty)$ 上单调递增，且 $f(1) = 0$。解不等式 $f(x - 2) < 0$。

---

**解答：**

**第1步：** 分析 $f(x)$ 的性质
> 📌 运用知识点：奇偶性与单调性

$f(x)$ 是偶函数，$f(1) = 0$，所以 $f(-1) = f(1) = 0$。

$f(x)$ 在 $[0, +\infty)$ 上单调递增，且 $f(1) = 0$，

所以当 $0 \leq x < 1$ 时 $f(x) < 0$；当 $x > 1$ 时 $f(x) > 0$。

由偶函数的对称性：$f(x) < 0 \iff |x| < 1 \iff -1 < x < 1$。

**第2步：** 解不等式
> 📌 运用知识点：函数单调性的应用

$f(x - 2) < 0 \iff |x - 2| < 1 \iff -1 < x - 2 < 1 \iff 1 < x < 3$

不等式的解集为 $(1, 3)$。

**⚠️ 易错提醒：** 偶函数 + 单调性的组合，关键是利用 $f(x) < 0 \iff |x| < 1$ 将问题转化为绝对值不等式。

**💡 解题思路总结：** 偶函数在对称区间上的单调性"左右相反"。利用 $f(a) = f(|a|)$ 将问题转化到 $[0, +\infty)$ 上，再利用单调性解不等式。
