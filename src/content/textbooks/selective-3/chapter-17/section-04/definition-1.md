---
type: definition
textbook: selective-3
chapter: 17
section: 4
name: 均值与方差
related_knowledge_points:
  - expected-value-variance
---

**定义（精确表述）：** 设离散型随机变量 $X$ 的分布列为

$$P(X = x_i) = p_i, \quad i = 1, 2, \ldots, n$$

**均值（数学期望）：**

$$E(X) = \sum_{i=1}^{n} x_i p_i = x_1 p_1 + x_2 p_2 + \cdots + x_n p_n$$

**方差：**

$$D(X) = \sum_{i=1}^{n} (x_i - E(X))^2 p_i$$

方差的等价计算公式：

$$D(X) = E(X^2) - [E(X)]^2$$

**标准差：** $\sigma(X) = \sqrt{D(X)}$

**性质：**

- $E(aX + b) = aE(X) + b$（$a, b$ 为常数）
- $D(aX + b) = a^2 D(X)$（$a, b$ 为常数）

**通俗解释：**

- **均值** $E(X)$ 反映的是随机变量取值的**"平均水平"**，是各取值以概率为权重的加权平均。例如多次射击的平均环数就接近 $E(X)$。
- **方差** $D(X)$ 反映的是随机变量取值相对于均值的**"波动程度"**。方差越大，说明取值越分散、越不稳定；方差越小，说明取值越集中在均值附近、越稳定。
