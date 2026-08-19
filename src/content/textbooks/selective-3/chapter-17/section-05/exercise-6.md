---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P37 练习A 第4题"
---

**题目：** 设 $X \sim N(5, \sigma^2)$，已知 $P(X < 3) = 0.1$，求 $P(X > 7)$。

---

**解答：**

**第1步：** 分析对称关系
> 📌 运用知识点：正态曲线的对称性

$\mu = 5$。注意到 $3$ 和 $7$ 关于 $\mu = 5$ 对称：

$$5 - 3 = 2, \quad 7 - 5 = 2$$

即 $3 = \mu - 2$，$7 = \mu + 2$。

**第2步：** 利用对称性
> 📌 运用知识点：正态曲线的对称性

由正态曲线关于 $x = \mu$ 对称：

$$P(X > \mu + a) = P(X < \mu - a)$$

取 $a = 2$：

$$P(X > 7) = P(X < 3) = 0.1$$

**⚠️ 易错提醒：** 利用对称性时，关键是验证两个点关于 $\mu$ 对称（即到 $\mu$ 的距离相等）。不要直接假设 $P(X > a) = P(X < b)$，必须确认 $a + b = 2\mu$。

**💡 解题思路总结：** 正态分布的对称性：$P(X > \mu + a) = P(X < \mu - a)$。当已知一侧概率时，对称另一侧的概率相等。
