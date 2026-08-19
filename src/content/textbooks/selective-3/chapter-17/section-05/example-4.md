---
type: example
textbook: selective-3
chapter: 17
section: 5
number: 4
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P38 例4"
---

**例题：** 某工厂生产的钢管内径（单位：$\text{mm}$）服从正态分布 $X \sim N(50, 1^2)$。

(1) 求钢管内径在 $(49, 51]$ 范围内的概率。

(2) 若抽检 $1000$ 根钢管，估计内径不在 $(47, 53]$ 范围内的约有多少根。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 50$，$\sigma = 1$。

**第2步：** 求 $P(49 < X \leqslant 51)$
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - \sigma = 49, \quad \mu + \sigma = 51$$

$$P(49 < X \leqslant 51) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**第3步：** 求不在 $(47, 53]$ 范围内的数量
> 📌 运用知识点：$3\sigma$ 原则、对立事件

$$\mu - 3\sigma = 47, \quad \mu + 3\sigma = 53$$

$$P(47 < X \leqslant 53) = P(\mu - 3\sigma < X \leqslant \mu + 3\sigma) \approx 0.9973$$

不在范围内的概率：

$$P(X \leqslant 47 \text{ 或 } X > 53) = 1 - 0.9973 = 0.0027$$

估计数量：

$$1000 \times 0.0027 = 2.7 \approx 3 \text{（根）}$$

**💡 解题思路总结：** "不在范围内"用对立事件 $1 - P(\text{范围内})$。$3\sigma$ 原则中，$(\mu-3\sigma, \mu+3\sigma]$ 覆盖约 $99.73\%$ 的数据，超出范围的仅约 $0.27\%$。
