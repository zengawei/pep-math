---
type: example
textbook: selective-3
chapter: 17
section: 5
number: 3
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P36 例3"
---

**例题：** 设 $X \sim N(10, 2^2)$，已知 $P(X < 8) = 0.1587$，求 $P(X > 12)$ 和 $P(8 < X \leqslant 12)$。

---

**解答：**

**第1步：** 分析对称关系
> 📌 运用知识点：正态曲线的对称性

$\mu = 10$，$\sigma = 2$。

$8 = \mu - \sigma = 10 - 2$，$12 = \mu + \sigma = 10 + 2$。

$8$ 和 $12$ 关于 $\mu = 10$ 对称。

**第2步：** 求 $P(X > 12)$
> 📌 运用知识点：正态曲线的对称性

由对称性：

$$P(X > 12) = P(X > \mu + \sigma) = P(X < \mu - \sigma) = P(X < 8) = 0.1587$$

**第3步：** 求 $P(8 < X \leqslant 12)$
> 📌 运用知识点：概率的运算

$$P(8 < X \leqslant 12) = 1 - P(X \leqslant 8) - P(X > 12)$$

$$= 1 - 0.1587 - 0.1587 = 1 - 0.3174 = 0.6826$$

验证：$P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$，与计算结果一致 ✓

**💡 解题思路总结：** 利用对称性 $P(X > \mu + a) = P(X < \mu - a)$ 可以互相推导两侧概率。区间概率 = $1 - $ 两侧尾部概率之和。
