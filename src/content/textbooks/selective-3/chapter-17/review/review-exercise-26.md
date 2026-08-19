---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 26
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P39 复习参考题 第26题"
---

**题目：** 某地区有 $10000$ 人参加某项体检。已知某指标 $X$ 服从正态分布 $N(120, 25)$（单位：mmHg）。

（1）求该指标在 $110$ 到 $130$ 之间的人数（已知 $P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$）；

（2）若该指标超过 $135$ mmHg 为偏高，估计偏高的人数（已知 $P(\mu - 3\sigma < X \leqslant \mu + 3\sigma) \approx 0.9973$）。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布

$\mu = 120$，$\sigma^2 = 25$，$\sigma = 5$。

$110 = \mu - 2\sigma$，$130 = \mu + 2\sigma$。

**第2步：** 求 $110$ 到 $130$ 之间的人数
> 📌 运用知识点：正态分布

$$P(110 < X \leqslant 130) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

人数约为 $10000 \times 0.9545 = 9545$（人）。

**第3步：** 求偏高人数
> 📌 运用知识点：正态分布

$135 = \mu + 3\sigma = 120 + 15$。

$$P(X > 135) = P(X > \mu + 3\sigma) = \frac{1 - P(\mu - 3\sigma < X \leqslant \mu + 3\sigma)}{2} = \frac{1 - 0.9973}{2} = 0.00135$$

偏高人数约为 $10000 \times 0.00135 \approx 14$（人）（取整）。

**⚠️ 易错提醒：** 超过 $135$ 即 $X > 135$，利用对称性时只取一侧尾部概率，要除以 $2$。人数需取整。

**💡 解题思路总结：** 正态分布的实际应用：将数值转化为 $\mu \pm k\sigma$ 形式，利用已知概率值求区间概率，再乘以总人数得到估计值。
