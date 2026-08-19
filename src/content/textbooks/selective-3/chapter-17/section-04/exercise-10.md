---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - binomial-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P27 练习B 第2题"
---

**题目：** 某批产品共 $100$ 件，其中次品 $10$ 件。

(1) 从中不放回地抽取 $5$ 件，求恰好有 $1$ 件次品的概率 $P_1$（用超几何分布）。

(2) 若有放回地抽取 $5$ 件，求恰好有 $1$ 件次品的概率 $P_2$（用二项分布）。

(3) 比较 $P_1$ 和 $P_2$，说明超几何分布与二项分布的关系。

---

**解答：**

**第1步：** 用超几何分布求 $P_1$
> 📌 运用知识点：超几何分布

$N = 100$，$M = 10$，$n = 5$。

$$P_1 = P(X = 1) = \frac{\mathrm{C}_{10}^1 \cdot \mathrm{C}_{90}^4}{\mathrm{C}_{100}^5}$$

$\mathrm{C}_{10}^1 = 10$

$\mathrm{C}_{90}^4 = \dfrac{90 \times 89 \times 88 \times 87}{24} = 2555190$

$\mathrm{C}_{100}^5 = \dfrac{100 \times 99 \times 98 \times 97 \times 96}{120} = 75287520$

$$P_1 = \frac{10 \times 2555190}{75287520} = \frac{25551900}{75287520} \approx 0.3394$$

**第2步：** 用二项分布求 $P_2$
> 📌 运用知识点：二项分布

有放回抽样，$X \sim B(5, 0.1)$。

$$P_2 = P(X = 1) = \binom{5}{1}(0.1)^1(0.9)^4 = 5 \times 0.1 \times 0.6561 = 0.32805$$

**第3步：** 比较分析
> 📌 运用知识点：超几何分布与二项分布的关系

$P_1 \approx 0.3394$，$P_2 \approx 0.3281$。两者接近但不完全相同。

当总体 $N$ 很大时（本题 $N = 100$），不放回抽样与有放回抽样的结果差异很小。当 $N \to \infty$ 时，超几何分布趋近于二项分布。

**⚠️ 易错提醒：** 超几何分布（不放回）和二项分布（有放回）是不同的模型，但在总体很大时结果近似相等。不要混淆两者的适用条件。

**💡 解题思路总结：** 当 $N$ 很大、$n$ 相对较小时，不放回抽样可近似为有放回抽样，超几何分布近似为二项分布。这是两种分布之间的重要联系。
