---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 13
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第13题"
---

**题目：** 设 $X \sim B(10, 0.6)$，求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：二项分布的期望

二项分布 $X \sim B(n, p)$ 的期望公式为 $E(X) = np$。

$$E(X) = 10 \times 0.6 = 6$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：二项分布的方差

二项分布 $X \sim B(n, p)$ 的方差公式为 $D(X) = np(1-p)$。

$$D(X) = 10 \times 0.6 \times (1 - 0.6) = 10 \times 0.6 \times 0.4 = 2.4$$

**⚠️ 易错提醒：** 二项分布的方差公式是 $np(1-p)$，不是 $np$。$(1-p)$ 因子不能遗漏。

**💡 解题思路总结：** 二项分布 $B(n, p)$ 的期望和方差是公式型结论：$E(X) = np$，$D(X) = np(1-p)$。识别出二项分布后可直接套用公式，无需从分布表出发计算。
