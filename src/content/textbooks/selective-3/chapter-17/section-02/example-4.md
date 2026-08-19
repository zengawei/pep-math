---
type: example
textbook: selective-3
chapter: 17
section: 2
number: 4
knowledge_points:
  - expected-value-variance
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P25 例4"
---

**例题：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $-2$ | $0$ | $1$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{6}$ | $\dfrac{1}{3}$ | $\dfrac{1}{6}$ | $\dfrac{1}{6}$ |

(1) 求 $E(X)$ 和 $D(X)$。

(2) 若 $Y = 2X + 1$，求 $E(Y)$ 和 $D(Y)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：数学期望公式

$$E(X) = (-2) \times \frac{1}{6} + 0 \times \frac{1}{3} + 1 \times \frac{1}{6} + 3 \times \frac{1}{6}$$

$$= -\frac{2}{6} + 0 + \frac{1}{6} + \frac{3}{6} = \frac{-2 + 0 + 1 + 3}{6} = \frac{2}{6} = \frac{1}{3}$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = \left(-2 - \frac{1}{3}\right)^2 \times \frac{1}{6} + \left(0 - \frac{1}{3}\right)^2 \times \frac{1}{3} + \left(1 - \frac{1}{3}\right)^2 \times \frac{1}{6} + \left(3 - \frac{1}{3}\right)^2 \times \frac{1}{6}$$

$$= \left(-\frac{7}{3}\right)^2 \times \frac{1}{6} + \left(-\frac{1}{3}\right)^2 \times \frac{1}{3} + \left(\frac{2}{3}\right)^2 \times \frac{1}{6} + \left(\frac{8}{3}\right)^2 \times \frac{1}{6}$$

$$= \frac{49}{9} \times \frac{1}{6} + \frac{1}{9} \times \frac{1}{3} + \frac{4}{9} \times \frac{1}{6} + \frac{64}{9} \times \frac{1}{6}$$

$$= \frac{49}{54} + \frac{1}{27} + \frac{4}{54} + \frac{64}{54} = \frac{49 + 2 + 4 + 64}{54} = \frac{119}{54}$$

**第3步：** 求 $E(Y)$ 和 $D(Y)$
> 📌 运用知识点：线性性质

$$E(Y) = 2E(X) + 1 = 2 \times \frac{1}{3} + 1 = \frac{2}{3} + 1 = \frac{5}{3}$$

$$D(Y) = 2^2 \cdot D(X) = 4 \times \frac{119}{54} = \frac{476}{54} = \frac{238}{27}$$

**💡 解题思路总结：** 已知分布列求 $E(X)$ 和 $D(X)$ 直接代入定义公式。线性变换 $Y = aX + b$ 利用性质 $E(Y) = aE(X) + b$，$D(Y) = a^2 D(X)$，无需重新列分布列。
