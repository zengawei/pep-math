---
type: example
textbook: selective-3
chapter: 17
section: 5
number: 1
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "待补充"
---

**例题：** 某次考试成绩 $X \sim N(100, 10^2)$。

(1) 求 $P(90 < X \leqslant 110)$；

(2) 已知 $P(X > a) = 0.8413$，求 $a$ 的值。

（参考数据：$P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$，$P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$）

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

由 $X \sim N(100, 10^2)$ 知 $\mu = 100$，$\sigma = 10$。

**第2步：** 求 $P(90 < X \leqslant 110)$
> 📌 运用知识点：$3\sigma$ 原则

计算：

$$\mu - \sigma = 100 - 10 = 90$$

$$\mu + \sigma = 100 + 10 = 110$$

因此：

$$P(90 < X \leqslant 110) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**第3步：** 分析 $P(X > a) = 0.8413$
> 📌 运用知识点：正态曲线的对称性

因为 $P(X > a) = 0.8413 > 0.5$，所以 $a < \mu = 100$。

由正态曲线关于 $x = \mu$ 对称，有：

$$P(X > \mu) = 0.5$$

$$P(X > a) = P(X > \mu) + P(a < X \leqslant \mu) = 0.5 + P(a < X \leqslant \mu)$$

所以：

$$P(a < X \leqslant \mu) = 0.8413 - 0.5 = 0.3413$$

**第4步：** 利用已知数据确定 $a$
> 📌 运用知识点：$3\sigma$ 原则

由对称性，$P(\mu - \sigma < X \leqslant \mu) = \dfrac{1}{2} P(\mu - \sigma < X \leqslant \mu + \sigma) = \dfrac{0.6827}{2} \approx 0.3413$。

因此 $a = \mu - \sigma = 100 - 10 = 90$。

**💡 解题思路总结：** 第 (1) 问直接将区间端点与 $\mu \pm \sigma$ 对应即可。第 (2) 问的关键是利用正态曲线的对称性：先判断 $a$ 在均值左侧还是右侧，再将概率分解为 $0.5$ 加上（或减去）半个区间的概率，最后与 $3\sigma$ 原则的数据对照确定 $a$ 的值。
