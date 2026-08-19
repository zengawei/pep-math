---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P36 练习B 第1题"
---

**题目：** 某学生在一次考试中遇到 $5$ 道选择题，每道题有 $4$ 个选项，其中只有 $1$ 个正确。该学生对每道题都能独立地排除 $2$ 个错误选项，然后在剩余 $2$ 个选项中随机选择。

(1) 求该学生答对题数 $X$ 的分布列。

(2) 求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 确定每题答对的概率
> 📌 运用知识点：古典概型

每道题排除 $2$ 个错误选项后，在剩余 $2$ 个选项中随机选择，答对概率为 $p = \dfrac{1}{2}$。

**第2步：** 判断分布类型
> 📌 运用知识点：二项分布的判定

$5$ 道题各自独立，每题答对概率均为 $\dfrac{1}{2}$，因此 $X \sim B\left(5, \dfrac{1}{2}\right)$。

**第3步：** 写出分布列
> 📌 运用知识点：二项分布的概率计算

$$P(X = k) = \binom{5}{k}\left(\frac{1}{2}\right)^k\left(\frac{1}{2}\right)^{5-k} = \binom{5}{k}\left(\frac{1}{2}\right)^5 = \frac{\binom{5}{k}}{32}$$

| $X$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{32}$ | $\dfrac{5}{32}$ | $\dfrac{10}{32}$ | $\dfrac{10}{32}$ | $\dfrac{5}{32}$ | $\dfrac{1}{32}$ |

**第4步：** 求 $E(X)$ 和 $D(X)$
> 📌 运用知识点：二项分布的期望和方差公式

$$E(X) = np = 5 \times \frac{1}{2} = \frac{5}{2} = 2.5$$

$$D(X) = np(1-p) = 5 \times \frac{1}{2} \times \frac{1}{2} = \frac{5}{4} = 1.25$$

**⚠️ 易错提醒：** 本题的关键是从题意中提取出每题答对的概率。"排除 $2$ 个错误选项后在剩余 $2$ 个中随机选"意味着答对概率为 $\frac{1}{2}$，不是 $\frac{1}{4}$。

**💡 解题思路总结：** 考试题中先分析每题的答对概率，再判断是否满足二项分布条件（独立 + 等概率），最后直接用公式求期望和方差。
