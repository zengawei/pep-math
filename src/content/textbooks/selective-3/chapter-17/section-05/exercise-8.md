---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P38 练习B 第1题"
---

**题目：** 设 $X \sim N(3, 2^2)$，利用 $3\sigma$ 原则求：

(1) $P(-1 < X \leqslant 7)$；

(2) $P(X > 9)$。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 3$，$\sigma = 2$。

**第2步：** 求 $P(-1 < X \leqslant 7)$
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - 2\sigma = 3 - 4 = -1, \quad \mu + 2\sigma = 3 + 4 = 7$$

$$P(-1 < X \leqslant 7) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**第3步：** 求 $P(X > 9)$
> 📌 运用知识点：$3\sigma$ 原则、对称性

$$\mu + 3\sigma = 3 + 6 = 9$$

由 $3\sigma$ 原则：

$$P(\mu - 3\sigma < X \leqslant \mu + 3\sigma) \approx 0.9973$$

$$P(X > \mu + 3\sigma) = \frac{1 - 0.9973}{2} = \frac{0.0027}{2} = 0.00135$$

（利用对称性，两侧尾部面积相等。）

$$P(X > 9) \approx 0.00135$$

**⚠️ 易错提醒：** 求单侧尾部概率时，要用 $\frac{1 - P(\mu - k\sigma < X \leqslant \mu + k\sigma)}{2}$，不要漏掉除以 $2$。

**💡 解题思路总结：** 区间概率直接用 $3\sigma$ 原则。单侧尾部概率 = 两侧尾部总面积的一半 = $\frac{1 - \text{区间概率}}{2}$。
