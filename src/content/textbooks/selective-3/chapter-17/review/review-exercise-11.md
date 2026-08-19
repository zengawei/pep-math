---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 11
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第11题"
---

**题目：** 设随机变量 $X \sim N(3, 4)$，求：

（1）$P(X \leqslant 3)$；

（2）$P(1 < X \leqslant 5)$；

（3）$P(X > 7)$。

---

**解答：**

**第1步：** 求 $P(X \leqslant 3)$
> 📌 运用知识点：正态分布

$X \sim N(3, 4)$，即 $\mu = 3$，$\sigma^2 = 4$，$\sigma = 2$。

由正态分布的对称性，$P(X \leqslant \mu) = 0.5$，所以：

$$P(X \leqslant 3) = P(X \leqslant \mu) = 0.5$$

**第2步：** 求 $P(1 < X \leqslant 5)$
> 📌 运用知识点：正态分布

注意 $1 = \mu - \sigma = 3 - 2$，$5 = \mu + \sigma = 3 + 2$。

由 $P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$：

$$P(1 < X \leqslant 5) \approx 0.6827$$

**第3步：** 求 $P(X > 7)$
> 📌 运用知识点：正态分布

$7 = \mu + 2\sigma = 3 + 4$。

由 $P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$：

$$P(X > 7) = P(X > \mu + 2\sigma) = \frac{1 - P(\mu - 2\sigma < X \leqslant \mu + 2\sigma)}{2} = \frac{1 - 0.9545}{2} = 0.02275$$

**⚠️ 易错提醒：** $N(3, 4)$ 中 $4$ 是方差 $\sigma^2$，不是标准差 $\sigma$。$\sigma = 2$。利用对称性时，要注意 $P(X > \mu + k\sigma) = \frac{1 - P(\mu - k\sigma < X \leqslant \mu + k\sigma)}{2}$。

**💡 解题思路总结：** 正态分布 $N(\mu, \sigma^2)$ 的三个常用概率：$P(\mu-\sigma < X \leqslant \mu+\sigma) \approx 0.6827$，$P(\mu-2\sigma < X \leqslant \mu+2\sigma) \approx 0.9545$，$P(\mu-3\sigma < X \leqslant \mu+3\sigma) \approx 0.9973$。结合对称性可求各种区间概率。
