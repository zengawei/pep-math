---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "选择性必修第三册 P38 复习参考题 第18题"
---

**题目：** 某次考试的成绩 $X \sim N(70, 100)$（单位：分），已知 $P(60 < X \leqslant 80) \approx 0.6827$，$P(50 < X \leqslant 90) \approx 0.9545$。

（1）求成绩在 $80$ 分以上的概率；

（2）若共有 $1000$ 名学生参加考试，估计成绩在 $90$ 分以上的人数。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布

$X \sim N(70, 100)$，即 $\mu = 70$，$\sigma^2 = 100$，$\sigma = 10$。

注意 $80 = \mu + \sigma$，$90 = \mu + 2\sigma$。

**第2步：** 求 $P(X > 80)$
> 📌 运用知识点：正态分布的对称性

$$P(X > 80) = P(X > \mu + \sigma) = \frac{1 - P(\mu - \sigma < X \leqslant \mu + \sigma)}{2} = \frac{1 - 0.6827}{2} = \frac{0.3173}{2} = 0.15865$$

**第3步：** 估计 $90$ 分以上的人数
> 📌 运用知识点：正态分布

$$P(X > 90) = P(X > \mu + 2\sigma) = \frac{1 - P(\mu - 2\sigma < X \leqslant \mu + 2\sigma)}{2} = \frac{1 - 0.9545}{2} = 0.02275$$

估计人数为 $1000 \times 0.02275 \approx 23$（人）。

**⚠️ 易错提醒：** $N(70, 100)$ 中 $100$ 是方差 $\sigma^2$，所以 $\sigma = 10$。$80$ 分对应 $\mu + \sigma$，$90$ 分对应 $\mu + 2\sigma$，不要搞混。

**💡 解题思路总结：** 正态分布的概率计算核心是利用对称性和已知的标准概率值。将实际问题中的数值转化为 $\mu \pm k\sigma$ 的形式是关键步骤。
