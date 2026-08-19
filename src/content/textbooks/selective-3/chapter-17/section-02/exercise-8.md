---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 8
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P24 练习A 第5题"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | $\dfrac{1}{4}$ |

求 $D(X)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：数学期望公式

$$E(X) = 0 \times \frac{1}{4} + 1 \times \frac{1}{2} + 2 \times \frac{1}{4} = 0 + \frac{1}{2} + \frac{1}{2} = 1$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：方差公式 $D(X) = \sum (x_i - E(X))^2 p_i$

$$D(X) = (0 - 1)^2 \times \frac{1}{4} + (1 - 1)^2 \times \frac{1}{2} + (2 - 1)^2 \times \frac{1}{4}$$

$$= 1 \times \frac{1}{4} + 0 \times \frac{1}{2} + 1 \times \frac{1}{4} = \frac{1}{4} + 0 + \frac{1}{4} = \frac{1}{2}$$

**⚠️ 易错提醒：** 方差公式中 $(x_i - E(X))^2$ 要先算偏差再平方，不要漏掉平方。中间项 $(1-1)^2 = 0$ 不能遗漏。

**💡 解题思路总结：** 求方差分两步：先求 $E(X)$，再代入方差公式 $D(X) = \sum (x_i - E(X))^2 p_i$。也可以使用简化公式 $D(X) = E(X^2) - [E(X)]^2$。
