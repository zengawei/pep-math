---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - function-concept
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x)$ 对任意实数 $x, y$ 满足 $f(x + y) = f(x) \cdot f(y)$，且当 $x > 0$ 时 $0 < f(x) < 1$，$f(1) = \frac{1}{2}$。

(1) 求 $f(0)$ 的值；

(2) 证明 $f(x)$ 在 $\mathbb{R}$ 上单调递减；

(3) 解不等式 $f(2x - 1) > \frac{1}{4}$。

---

**解答：**

**第1步：** 求 $f(0)$
> 📌 运用知识点：抽象函数（赋值法）

令 $x = y = 0$：$f(0) = f(0) \cdot f(0) = [f(0)]^2$

$[f(0)]^2 - f(0) = 0$，$f(0)[f(0) - 1] = 0$

$f(0) = 0$ 或 $f(0) = 1$。

若 $f(0) = 0$：$f(x) = f(x + 0) = f(x) \cdot f(0) = 0$ 对所有 $x$ 成立，与 $f(1) = \frac{1}{2}$ 矛盾。

所以 $f(0) = 1$。

**第2步：** 证明 $f(x) > 0$ 且单调递减
> 📌 运用知识点：抽象函数的性质

先证 $f(x) > 0$：$f(x) = f\left(\frac{x}{2} + \frac{x}{2}\right) = \left[f\left(\frac{x}{2}\right)\right]^2 \geq 0$。

若 $f(x_0) = 0$：$f(x) = f(x_0 + (x - x_0)) = f(x_0) \cdot f(x - x_0) = 0$，矛盾。

所以 $f(x) > 0$ 对所有 $x$ 成立。

设 $x_1 < x_2$，则 $x_2 - x_1 > 0$，$0 < f(x_2 - x_1) < 1$。

$f(x_2) = f(x_1 + (x_2 - x_1)) = f(x_1) \cdot f(x_2 - x_1)$

因为 $f(x_1) > 0$ 且 $0 < f(x_2 - x_1) < 1$：

$f(x_2) < f(x_1)$

所以 $f(x)$ 在 $\mathbb{R}$ 上单调递减。

**第3步：** 解不等式
> 📌 运用知识点：函数单调性的应用

$f(1) = \frac{1}{2}$，$f(2) = f(1) \cdot f(1) = \frac{1}{4}$。

$f(2x - 1) > \frac{1}{4} = f(2)$

因为 $f$ 单调递减：$2x - 1 < 2$，$x < \frac{3}{2}$。

不等式的解集为 $\left(-\infty, \frac{3}{2}\right)$。

**⚠️ 易错提醒：** ①$f(0) = 0$ 的情况需要排除（用反证法）。②证明单调性前需先证 $f(x) > 0$。③$f(2) = f(1)^2$ 的推导不要遗漏。

**💡 解题思路总结：** Cauchy 型函数方程 $f(x+y) = f(x)f(y)$ 的解题策略：①赋值求特殊值；②证明函数值恒正；③利用函数值范围和单调性解题。
