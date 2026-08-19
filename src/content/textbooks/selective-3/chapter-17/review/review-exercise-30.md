---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
  - normal-distribution
source: "人教A版2019"
references: "选择性必修第三册 P40 复习参考题 第30题"
---

**题目：** 某工厂生产的一种零件，其质量指标 $X$ 服从正态分布 $N(50, 9)$。

（1）若从该厂生产的零件中随机抽取 $100$ 个，设质量指标在 $(47, 53]$ 范围内的零件数为 $Y$，求 $E(Y)$（已知 $P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$）；

（2）若从该厂随机抽取 $3$ 个零件，求质量指标在 $(47, 53]$ 范围内的零件数 $Z$ 的分布表和 $E(Z)$。

---

**解答：**

**第1步：** 求单个零件指标在 $(47, 53]$ 的概率
> 📌 运用知识点：正态分布

$\mu = 50$，$\sigma = 3$。$47 = \mu - \sigma$，$53 = \mu + \sigma$。

$$p = P(47 < X \leqslant 53) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**第2步：** 求 $E(Y)$
> 📌 运用知识点：二项分布的期望

$Y$ 是 $100$ 个零件中指标在范围内的个数，$Y \sim B(100, p)$。

$$E(Y) = 100 \times 0.6827 = 68.27$$

**第3步：** 求 $Z$ 的分布表
> 📌 运用知识点：二项分布

$Z \sim B(3, p)$，其中 $p \approx 0.6827$。

$$P(Z = 0) = (1-p)^3 \approx 0.3173^3 \approx 0.03196$$

$$P(Z = 1) = 3p(1-p)^2 \approx 3 \times 0.6827 \times 0.3173^2 \approx 0.20665$$

$$P(Z = 2) = 3p^2(1-p) \approx 3 \times 0.6827^2 \times 0.3173 \approx 0.44365$$

$$P(Z = 3) = p^3 \approx 0.6827^3 \approx 0.31774$$

分布表：

| $Z$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\approx 0.032$ | $\approx 0.207$ | $\approx 0.444$ | $\approx 0.318$ |

**第4步：** 求 $E(Z)$
> 📌 运用知识点：二项分布的期望

$$E(Z) = 3p = 3 \times 0.6827 = 2.0481$$

**⚠️ 易错提醒：** 第（1）问中 $Y$ 是 $100$ 个零件中满足条件的个数，每个零件是否满足条件是独立的（样本量大时可近似），所以 $Y \sim B(100, p)$。小数计算时保留足够精度。

**💡 解题思路总结：** 正态分布 + 二项分布的综合问题：先用正态分布求单个事件概率 $p$，再将 $p$ 作为二项分布的参数。这是高考中常见的"正态+二项"联合考法。
