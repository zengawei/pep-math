---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 17.3"
---

**题目：** 一批产品共 $20$ 件，其中 $5$ 件是次品，$15$ 件是正品。从中**不放回**地随机抽取 $4$ 件，设抽到的次品数为 $X$。

(1) 求 $X$ 的分布列。

(2) 求抽到的次品数不少于 $2$ 件的概率 $P(X \geqslant 2)$。

---

**解答：**

**第1步：** 确定 $X$ 的分布类型
> 📌 运用知识点：超几何分布的判定

总体 $N = 20$ 件产品，其中次品 $M = 5$ 件，不放回抽取 $n = 4$ 件。由于是**不放回抽样**，且总体有限，$X$ 服从超几何分布。

$$P(X = k) = \frac{\dbinom{5}{k} \dbinom{15}{4-k}}{\dbinom{20}{4}}, \quad k = 0, 1, 2, 3, 4$$

其中 $\dbinom{20}{4} = \dfrac{20 \times 19 \times 18 \times 17}{4 \times 3 \times 2 \times 1} = 4845$。

**第2步：** 逐一计算各概率

$$P(X = 0) = \frac{\dbinom{5}{0}\dbinom{15}{4}}{\dbinom{20}{4}} = \frac{1 \times 1365}{4845} = \frac{1365}{4845} = \frac{91}{323}$$

$$P(X = 1) = \frac{\dbinom{5}{1}\dbinom{15}{3}}{\dbinom{20}{4}} = \frac{5 \times 455}{4845} = \frac{2275}{4845} = \frac{455}{969}$$

$$P(X = 2) = \frac{\dbinom{5}{2}\dbinom{15}{2}}{\dbinom{20}{4}} = \frac{10 \times 105}{4845} = \frac{1050}{4845} = \frac{70}{323}$$

$$P(X = 3) = \frac{\dbinom{5}{3}\dbinom{15}{1}}{\dbinom{20}{4}} = \frac{10 \times 15}{4845} = \frac{150}{4845} = \frac{10}{323}$$

$$P(X = 4) = \frac{\dbinom{5}{4}\dbinom{15}{0}}{\dbinom{20}{4}} = \frac{5 \times 1}{4845} = \frac{5}{4845} = \frac{1}{969}$$

分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{91}{323}$ | $\dfrac{455}{969}$ | $\dfrac{70}{323}$ | $\dfrac{10}{323}$ | $\dfrac{1}{969}$ |

**验证：** $\dfrac{91}{323} + \dfrac{455}{969} + \dfrac{70}{323} + \dfrac{10}{323} + \dfrac{1}{969} = \dfrac{273 + 455 + 210 + 30 + 1}{969} = \dfrac{969}{969} = 1$ ✓

**第3步：** 求 $P(X \geqslant 2)$

$$P(X \geqslant 2) = P(X = 2) + P(X = 3) + P(X = 4) = \frac{70}{323} + \frac{10}{323} + \frac{1}{969}$$

通分（公分母 $969$）：

$$= \frac{210}{969} + \frac{30}{969} + \frac{1}{969} = \frac{241}{969}$$

**💡 解题思路总结：** "有限总体 + 不放回抽样 + 分类计数"→ 超几何分布。计算时注意组合数的化简，最后用概率之和为 $1$ 来验证。
