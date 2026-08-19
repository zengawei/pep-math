---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - expected-value-variance
  - binomial-distribution
source: "人教A版2019"
references: "选择性必修第三册 P39 复习参考题 第21题"
---

**题目：** 设 $X \sim B(n, p)$，已知 $E(X) = 6$，$D(X) = 3$。

（1）求 $n$ 和 $p$ 的值；

（2）求 $P(X = 3)$。

---

**解答：**

**第1步：** 利用期望和方差求参数
> 📌 运用知识点：二项分布的参数

由二项分布的性质：

$$E(X) = np = 6 \quad \cdots (1)$$

$$D(X) = np(1-p) = 3 \quad \cdots (2)$$

$(2) \div (1)$：

$$\frac{np(1-p)}{np} = \frac{3}{6} \implies 1 - p = \frac{1}{2} \implies p = \frac{1}{2}$$

代入 $(1)$：$n \times \frac{1}{2} = 6 \implies n = 12$。

**第2步：** 求 $P(X = 3)$
> 📌 运用知识点：二项分布

$X \sim B(12, \frac{1}{2})$，所以：

$$P(X = 3) = \binom{12}{3}\left(\frac{1}{2}\right)^3\left(\frac{1}{2}\right)^9 = \binom{12}{3}\left(\frac{1}{2}\right)^{12}$$

$$\binom{12}{3} = \frac{12 \times 11 \times 10}{3 \times 2 \times 1} = 220$$

$$P(X = 3) = \frac{220}{4096} = \frac{55}{1024}$$

**⚠️ 易错提醒：** 由 $E(X)$ 和 $D(X)$ 反求参数时，用 $\frac{D(X)}{E(X)} = 1 - p$ 这个技巧可以快速求出 $p$，再代回求 $n$。注意验证 $n$ 是否为正整数、$p \in (0, 1)$。

**💡 解题思路总结：** 已知二项分布的期望和方差反求参数，核心方程组为 $np = E(X)$，$np(1-p) = D(X)$，两式相除消去 $n$ 即可求出 $p$。
