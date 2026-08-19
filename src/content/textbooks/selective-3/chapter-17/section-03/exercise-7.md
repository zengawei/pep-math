---
type: exercise
textbook: selective-3
chapter: 17
section: 3
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P34 练习A 第4题"
---

**题目：** 设 $X \sim B(6, 0.3)$，求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：二项分布的期望公式 $E(X) = np$

$$E(X) = np = 6 \times 0.3 = 1.8$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：二项分布的方差公式 $D(X) = np(1-p)$

$$D(X) = np(1-p) = 6 \times 0.3 \times 0.7 = 1.26$$

**⚠️ 易错提醒：** 二项分布的方差公式是 $D(X) = np(1-p)$，不是 $np^2$ 或 $np$。注意 $(1-p)$ 这个因子不能遗漏。

**💡 解题思路总结：** 已知 $X \sim B(n, p)$，直接用公式 $E(X) = np$ 和 $D(X) = np(1-p)$，无需列分布列再逐项计算。
