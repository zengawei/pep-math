---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 1
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "课标17.5.1"
---

**题目：** 设随机变量 $X \sim N(3, 4)$，利用 $3\sigma$ 原则求 $P(-1 < X \leqslant 7)$。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

由 $X \sim N(3, 4)$ 知 $\mu = 3$，$\sigma^2 = 4$，即 $\sigma = 2$。

**第2步：** 将区间与 $\mu \pm k\sigma$ 对应
> 📌 运用知识点：正态曲线的对称性

计算：

$$\mu - 2\sigma = 3 - 2 \times 2 = -1$$

$$\mu + 2\sigma = 3 + 2 \times 2 = 7$$

因此 $(-1, 7] = (\mu - 2\sigma, \mu + 2\sigma]$。

**第3步：** 利用 $3\sigma$ 原则求概率

由 $3\sigma$ 原则：

$$P(-1 < X \leqslant 7) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**💡 解题思路总结：** 已知 $X \sim N(\mu, \sigma^2)$，先识别 $\mu$ 和 $\sigma$，再将所求区间的端点表示为 $\mu \pm k\sigma$ 的形式，直接利用 $3\sigma$ 原则的已知概率值即可。
