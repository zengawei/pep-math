---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P36 练习A 第2题"
---

**题目：** 设 $X \sim N(1, 4)$，利用 $3\sigma$ 原则求 $P(-1 < X \leqslant 3)$。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 1$，$\sigma^2 = 4$，$\sigma = 2$。

**第2步：** 将区间端点表示为 $\mu \pm k\sigma$
> 📌 运用知识点：正态曲线的对称性

$$\mu - \sigma = 1 - 2 = -1$$

$$\mu + \sigma = 1 + 2 = 3$$

因此 $(-1, 3] = (\mu - \sigma, \mu + \sigma]$。

**第3步：** 利用 $3\sigma$ 原则
> 📌 运用知识点：$3\sigma$ 原则

$$P(-1 < X \leqslant 3) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**⚠️ 易错提醒：** $3\sigma$ 原则中三个常用概率值：$P(\mu-\sigma < X \leqslant \mu+\sigma) \approx 0.6827$，$P(\mu-2\sigma < X \leqslant \mu+2\sigma) \approx 0.9545$，$P(\mu-3\sigma < X \leqslant \mu+3\sigma) \approx 0.9973$。不要记混。

**💡 解题思路总结：** 先将区间端点表示为 $\mu \pm k\sigma$ 的形式，确定 $k$ 的值，再直接查 $3\sigma$ 原则的对应概率值。
