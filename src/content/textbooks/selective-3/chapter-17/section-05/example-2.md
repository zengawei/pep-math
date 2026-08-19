---
type: example
textbook: selective-3
chapter: 17
section: 5
number: 2
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P35 例2"
---

**例题：** 设 $X \sim N(4, 3^2)$，利用 $3\sigma$ 原则求下列概率：

(1) $P(1 < X \leqslant 7)$；

(2) $P(-2 < X \leqslant 10)$。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 4$，$\sigma = 3$。

**第2步：** 求 $P(1 < X \leqslant 7)$
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - \sigma = 4 - 3 = 1, \quad \mu + \sigma = 4 + 3 = 7$$

$$P(1 < X \leqslant 7) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**第3步：** 求 $P(-2 < X \leqslant 10)$
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - 2\sigma = 4 - 6 = -2, \quad \mu + 2\sigma = 4 + 6 = 10$$

$$P(-2 < X \leqslant 10) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**💡 解题思路总结：** 将区间端点表示为 $\mu \pm k\sigma$ 的形式后，直接查 $3\sigma$ 原则的已知概率值。$k = 1$ 对应 $0.6827$，$k = 2$ 对应 $0.9545$，$k = 3$ 对应 $0.9973$。
