---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "自编"
references: "课标17.5.2"
---

**题目：** 某工厂生产的零件长度（单位：$\text{mm}$）服从正态分布 $X \sim N(50, 0.5^2)$。

(1) 求零件长度在 $(49, 51]$ 范围内的概率；

(2) 若质检抽检 $1000$ 个零件，估计长度超出 $(48.5, 51.5]$ 的零件约有多少个？

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

由 $X \sim N(50, 0.5^2)$ 知 $\mu = 50$，$\sigma = 0.5$。

**第2步：** 求 $P(49 < X \leqslant 51)$
> 📌 运用知识点：$3\sigma$ 原则

计算：

$$\mu - 2\sigma = 50 - 2 \times 0.5 = 49$$

$$\mu + 2\sigma = 50 + 2 \times 0.5 = 51$$

由 $3\sigma$ 原则：

$$P(49 < X \leqslant 51) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**第3步：** 求 $P(X \leqslant 48.5 \text{ 或 } X > 51.5)$
> 📌 运用知识点：$3\sigma$ 原则、正态曲线的对称性

计算：

$$\mu - 3\sigma = 50 - 3 \times 0.5 = 48.5$$

$$\mu + 3\sigma = 50 + 3 \times 0.5 = 51.5$$

由 $3\sigma$ 原则：

$$P(48.5 < X \leqslant 51.5) = P(\mu - 3\sigma < X \leqslant \mu + 3\sigma) \approx 0.9973$$

因此：

$$P(X \leqslant 48.5 \text{ 或 } X > 51.5) = 1 - 0.9973 = 0.0027$$

**第4步：** 估计超出范围的零件数

$$1000 \times 0.0027 = 2.7 \approx 3 \text{（个）}$$

**💡 解题思路总结：** 实际应用中，先将区间端点表示为 $\mu \pm k\sigma$ 的形式，利用 $3\sigma$ 原则求出概率。对于"超出范围"的问题，用 $1$ 减去区间内概率即可。最后用概率乘以总数得到估计值。
