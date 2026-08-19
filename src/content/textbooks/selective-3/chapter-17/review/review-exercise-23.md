---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "选择性必修第三册 P39 复习参考题 第23题"
---

**题目：** 某品牌灯泡的使用寿命 $X$（单位：小时）服从正态分布 $N(1000, 400)$。

（1）求灯泡使用寿命在 $960$ 小时到 $1040$ 小时之间的概率；

（2）若要求灯泡使用寿命在 $960$ 小时以上的概率不低于 $0.9$，问该灯泡的期望寿命至少应为多少小时？（已知 $P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$）

---

**解答：**

**第1步：** 求 $P(960 < X \leqslant 1040)$
> 📌 运用知识点：正态分布

$X \sim N(1000, 400)$，$\mu = 1000$，$\sigma = 20$。

$960 = \mu - 2\sigma$，$1040 = \mu + 2\sigma$。

$$P(960 < X \leqslant 1040) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**第2步：** 分析期望寿命
> 📌 运用知识点：正态分布的应用

设新的期望寿命为 $\mu'$，标准差 $\sigma = 20$ 不变。

要求 $P(X > 960) \geqslant 0.9$。

$P(X > 960) = P\left(\frac{X - \mu'}{20} > \frac{960 - \mu'}{20}\right)$

设 $Z = \frac{X - \mu'}{20} \sim N(0, 1)$，则需 $P\left(Z > \frac{960 - \mu'}{20}\right) \geqslant 0.9$。

即 $P\left(Z \leqslant \frac{960 - \mu'}{20}\right) \leqslant 0.1$。

由正态分布对称性，$P(Z \leqslant -1.28) \approx 0.1$，所以：

$$\frac{960 - \mu'}{20} \leqslant -1.28 \implies 960 - \mu' \leqslant -25.6 \implies \mu' \geqslant 985.6$$

期望寿命至少应为 $985.6$ 小时。

**⚠️ 易错提醒：** 第（2）问需要利用标准正态分布的分位数。$P(Z \leqslant -z_0) = 0.1$ 时 $z_0 \approx 1.28$，这个值需要查表或已知。

**💡 解题思路总结：** 正态分布的实际应用问题，需要将实际问题转化为标准化形式 $Z = \frac{X-\mu}{\sigma}$，再利用标准正态分布表或已知概率值求解。
