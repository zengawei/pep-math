---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 2
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - expected-value-variance
source: "人教A版2019"
references: "课标17.4.2"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $-1$ | $0$ | $1$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | $\dfrac{1}{4}$ |

令 $Y = 2X + 3$，求 $E(Y)$ 和 $D(Y)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：均值公式

$$E(X) = (-1) \times \frac{1}{4} + 0 \times \frac{1}{2} + 1 \times \frac{1}{4} = -\frac{1}{4} + 0 + \frac{1}{4} = 0$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = (-1 - 0)^2 \times \frac{1}{4} + (0 - 0)^2 \times \frac{1}{2} + (1 - 0)^2 \times \frac{1}{4}$$

$$= 1 \times \frac{1}{4} + 0 + 1 \times \frac{1}{4} = \frac{1}{2}$$

**第3步：** 利用性质求 $E(Y)$ 和 $D(Y)$
> 📌 运用知识点：$E(aX+b) = aE(X)+b$，$D(aX+b) = a^2 D(X)$

由 $Y = 2X + 3$，即 $a = 2$，$b = 3$：

$$E(Y) = E(2X + 3) = 2E(X) + 3 = 2 \times 0 + 3 = 3$$

$$D(Y) = D(2X + 3) = 2^2 \cdot D(X) = 4 \times \frac{1}{2} = 2$$

**💡 解题思路总结：** 当随机变量经过线性变换 $Y = aX + b$ 时，无需重新列出 $Y$ 的分布列，直接利用性质 $E(aX+b) = aE(X)+b$ 和 $D(aX+b) = a^2 D(X)$ 即可快速求解。注意方差中常数 $b$ 不影响结果，系数 $a$ 要平方。
