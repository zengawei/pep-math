---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x) = \frac{2^x - 1}{2^x + 1}$。

(1) 判断 $f(x)$ 的奇偶性；

(2) 证明 $f(x)$ 在 $\mathbb{R}$ 上单调递增；

(3) 求 $f(x)$ 的值域。

---

**解答：**

**第1步：** 判断奇偶性
> 📌 运用知识点：函数奇偶性

定义域为 $\mathbb{R}$（$2^x + 1 > 0$ 恒成立），关于原点对称。

$$f(-x) = \frac{2^{-x} - 1}{2^{-x} + 1} = \frac{\frac{1}{2^x} - 1}{\frac{1}{2^x} + 1} = \frac{1 - 2^x}{1 + 2^x} = -\frac{2^x - 1}{2^x + 1} = -f(x)$$

所以 $f(x)$ 为**奇函数**。

**第2步：** 证明单调递增
> 📌 运用知识点：函数单调性的证明

$$f(x) = \frac{2^x - 1}{2^x + 1} = \frac{(2^x + 1) - 2}{2^x + 1} = 1 - \frac{2}{2^x + 1}$$

因为 $2^x$ 在 $\mathbb{R}$ 上单调递增，$2^x + 1$ 也单调递增，

$\frac{2}{2^x + 1}$ 单调递减，$-\frac{2}{2^x + 1}$ 单调递增，

$f(x) = 1 - \frac{2}{2^x + 1}$ 单调递增。

**第3步：** 求值域
> 📌 运用知识点：函数值域

因为 $2^x > 0$，$2^x + 1 > 1$，$0 < \frac{2}{2^x + 1} < 2$，

$-2 < -\frac{2}{2^x + 1} < 0$，$-1 < 1 - \frac{2}{2^x + 1} < 1$

即 $-1 < f(x) < 1$。

当 $x \to -\infty$ 时 $f(x) \to -1$；当 $x \to +\infty$ 时 $f(x) \to 1$。

值域为 $(-1, 1)$。

**⚠️ 易错提醒：** ①$f(-x)$ 的化简需要分子分母同乘 $2^x$。②变形为 $1 - \frac{2}{2^x+1}$ 是分析单调性和值域的关键。

**💡 解题思路总结：** 含指数分式的函数，先变形为"常数 + 简单分式"的形式，便于分析单调性和值域。
