---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - normal-distribution
  - discrete-random-variable
source: "人教A版2019"
references: "人教A版选择性必修第三册 P39 练习B 第3题"
---

**题目：** 某班级 $50$ 名同学的数学考试成绩近似服从正态分布 $X \sim N(75, 5^2)$。

(1) 估计成绩在 $70$ 分以上的人数。

(2) 估计成绩在 $(70, 80]$ 范围内的人数。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 75$，$\sigma = 5$。

**第2步：** 估计 $70$ 分以上的人数
> 📌 运用知识点：正态曲线的对称性

$$\mu - \sigma = 75 - 5 = 70$$

由对称性：

$$P(X > 70) = P(X > \mu - \sigma) = P(X \leqslant \mu + \sigma) = P(X \leqslant 80)$$

又由 $3\sigma$ 原则：

$$P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

由对称性，$P(X > \mu + \sigma) = P(X < \mu - \sigma) = \dfrac{1 - 0.6827}{2} = 0.15865$。

$$P(X > 70) = 1 - P(X \leqslant 70) = 1 - P(X < \mu - \sigma) = 1 - 0.15865 = 0.84135$$

估计人数：$50 \times 0.84135 \approx 42$（人）。

**第3步：** 估计 $(70, 80]$ 范围内的人数
> 📌 运用知识点：$3\sigma$ 原则

$(70, 80] = (\mu - \sigma, \mu + \sigma]$。

$$P(70 < X \leqslant 80) \approx 0.6827$$

估计人数：$50 \times 0.6827 \approx 34$（人）。

**⚠️ 易错提醒：** 第(1)问中 $P(X > 70)$ 不是 $0.6827$。$0.6827$ 是 $(\mu-\sigma, \mu+\sigma]$ 的概率，而 $P(X > \mu-\sigma)$ 还包括 $\mu+\sigma$ 以上的部分。

**💡 解题思路总结：** 利用对称性和 $3\sigma$ 原则的组合：$P(X > \mu - \sigma) = 0.5 + \frac{0.6827}{2} \approx 0.8413$。
