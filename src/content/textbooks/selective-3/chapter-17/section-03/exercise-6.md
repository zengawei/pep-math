---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P33 练习A 第3题"
---

**题目：** 设 $X \sim B(4, 0.5)$，求 $X$ 的分布列，并验证概率之和为 $1$。

---

**解答：**

**第1步：** 逐一计算各概率
> 📌 运用知识点：二项分布的概率计算

$$P(X = k) = \binom{4}{k}(0.5)^k(0.5)^{4-k} = \binom{4}{k}(0.5)^4 = \binom{4}{k} \times \frac{1}{16}$$

$$P(X = 0) = \binom{4}{0} \times \frac{1}{16} = \frac{1}{16}$$

$$P(X = 1) = \binom{4}{1} \times \frac{1}{16} = \frac{4}{16} = \frac{1}{4}$$

$$P(X = 2) = \binom{4}{2} \times \frac{1}{16} = \frac{6}{16} = \frac{3}{8}$$

$$P(X = 3) = \binom{4}{3} \times \frac{1}{16} = \frac{4}{16} = \frac{1}{4}$$

$$P(X = 4) = \binom{4}{4} \times \frac{1}{16} = \frac{1}{16}$$

分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{16}$ | $\dfrac{1}{4}$ | $\dfrac{3}{8}$ | $\dfrac{1}{4}$ | $\dfrac{1}{16}$ |

**第2步：** 验证概率之和
> 📌 运用知识点：分布列的归一性

$$\frac{1}{16} + \frac{4}{16} + \frac{6}{16} + \frac{4}{16} + \frac{1}{16} = \frac{16}{16} = 1 \quad \checkmark$$

**⚠️ 易错提醒：** 当 $p = 0.5$ 时，$(0.5)^k(0.5)^{n-k} = (0.5)^n$ 是常数，分布列的系数就是组合数 $\binom{n}{k}$。这正好对应二项式展开 $(1+1)^n = \sum \binom{n}{k}$。

**💡 解题思路总结：** $B(n, 0.5)$ 是特殊的二项分布，概率计算简化为 $\binom{n}{k} \cdot \frac{1}{2^n}$。验证归一性时利用二项式定理 $\sum \binom{n}{k} = 2^n$。
