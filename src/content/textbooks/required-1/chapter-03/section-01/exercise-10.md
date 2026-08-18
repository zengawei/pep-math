---
type: exercise
textbook: required-1
chapter: 3
section: 1
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P65 习题"
---

**题目：** 已知函数 $f(x)$ 对任意实数 $x, y$ 都满足 $f(x + y) = f(x) + f(y)$，且 $f(1) = 2$。

(1) 求 $f(0)$ 的值；

(2) 求 $f(x)$ 的解析式；

(3) 若 $f(x)$ 在 $\mathbb{R}$ 上单调递增，解不等式 $f(3x) > f(x + 4)$。

---

**解答：**

**第1步：** 求 $f(0)$
> 📌 运用知识点：抽象函数

令 $x = y = 0$：$f(0) = f(0) + f(0) = 2f(0)$

所以 $f(0) = 0$。

**第2步：** 求 $f(x)$ 的解析式
> 📌 运用知识点：抽象函数

令 $y = 1$：$f(x + 1) = f(x) + f(1) = f(x) + 2$

即 $f(x + 1) - f(x) = 2$，说明 $f$ 在整数点上构成公差为 $2$ 的等差数列。

$f(0) = 0$，$f(1) = 2$，$f(2) = 4$，…，$f(n) = 2n$（$n \in \mathbb{N}$）。

对于任意实数 $x$，令 $y = x$：$f(2x) = 2f(x)$。

令 $y = -x$：$f(0) = f(x) + f(-x)$，即 $f(-x) = -f(x)$（$f$ 为奇函数）。

综合可得 $f(x) = 2x$（$x \in \mathbb{R}$）。

**第3步：** 解不等式
> 📌 运用知识点：函数的单调性

因为 $f(x)$ 在 $\mathbb{R}$ 上单调递增，

$f(3x) > f(x + 4) \iff 3x > x + 4 \iff 2x > 4 \iff x > 2$

不等式的解集为 $(2, +\infty)$。

**⚠️ 易错提醒：** 第(2)问中，由 $f(n) = 2n$ 推广到 $f(x) = 2x$ 需要说明对所有实数成立，不能只验证整数。第(3)问利用单调性去掉 $f$ 时，要注意单调递增才能保持不等号方向不变。

**💡 解题思路总结：** 抽象函数问题常用"赋值法"：令 $x, y$ 取特殊值（$0, 1, -x$ 等）来推导函数性质。Cauchy 方程 $f(x+y) = f(x) + f(y)$ 在单调性条件下可确定 $f(x) = kx$。
