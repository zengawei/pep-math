---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 32
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
  - probability-addition-multiplication
source: "人教A版2019"
references: "选择性必修第三册 P40 复习参考题 第32题"
---

**题目：** 某射手进行射击训练，每次射击击中目标的概率为 $p$（$0 < p < 1$），各次射击相互独立。已知该射手在 $4$ 次射击中恰好击中 $2$ 次的概率为 $\dfrac{8}{27}$。

（1）求 $p$ 的值；

（2）在（1）的条件下，求该射手在 $6$ 次射击中至少击中 $2$ 次的概率。

---

**解答：**

**第1步：** 利用已知条件求 $p$
> 📌 运用知识点：二项分布

设击中次数 $X \sim B(4, p)$。

$$P(X = 2) = \binom{4}{2} p^2 (1-p)^2 = 6p^2(1-p)^2 = \frac{8}{27}$$

$$p^2(1-p)^2 = \frac{8}{27 \times 6} = \frac{8}{162} = \frac{4}{81}$$

$$[p(1-p)]^2 = \frac{4}{81}$$

$$p(1-p) = \frac{2}{9}$$

（取正值，因为 $0 < p < 1$，$p(1-p) > 0$）

设 $p(1-p) = \frac{2}{9}$，即 $p - p^2 = \frac{2}{9}$，整理得：

$$9p^2 - 9p + 2 = 0$$

$$p = \frac{9 \pm \sqrt{81 - 72}}{18} = \frac{9 \pm 3}{18}$$

$$p = \frac{12}{18} = \frac{2}{3} \quad \text{或} \quad p = \frac{6}{18} = \frac{1}{3}$$

**第2步：** 求至少击中 $2$ 次的概率
> 📌 运用知识点：二项分布

以 $p = \frac{2}{3}$ 为例（$p = \frac{1}{3}$ 同理可算）。$X \sim B(6, \frac{2}{3})$。

$$P(X \geqslant 2) = 1 - P(X = 0) - P(X = 1)$$

$$P(X = 0) = \left(\frac{1}{3}\right)^6 = \frac{1}{729}$$

$$P(X = 1) = \binom{6}{1}\left(\frac{2}{3}\right)^1\left(\frac{1}{3}\right)^5 = 6 \times \frac{2}{3} \times \frac{1}{243} = \frac{12}{729}$$

$$P(X \geqslant 2) = 1 - \frac{1}{729} - \frac{12}{729} = 1 - \frac{13}{729} = \frac{716}{729}$$

**⚠️ 易错提醒：** $p(1-p) = \frac{2}{9}$ 是关于 $p$ 的二次方程，有两个解 $p = \frac{2}{3}$ 和 $p = \frac{1}{3}$，两个解都满足条件（对称性）。"至少2次"用对立事件 $1 - P(X=0) - P(X=1)$ 计算最简便。

**💡 解题思路总结：** 已知二项分布某概率值反求参数 $p$，关键是建立关于 $p$ 的方程并求解。"至少"问题用对立事件法。
