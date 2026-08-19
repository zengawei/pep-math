---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 8
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第8题"
---

**题目：** 已知随机变量 $X$ 的分布表如下：

| $X$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $0.1$ | $0.3$ | $0.4$ | $0.2$ |

求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 计算数学期望 $E(X)$
> 📌 运用知识点：数学期望

$$E(X) = (-1) \times 0.1 + 0 \times 0.3 + 1 \times 0.4 + 2 \times 0.2$$

$$= -0.1 + 0 + 0.4 + 0.4 = 0.7$$

**第2步：** 计算 $E(X^2)$
> 📌 运用知识点：方差

$$E(X^2) = (-1)^2 \times 0.1 + 0^2 \times 0.3 + 1^2 \times 0.4 + 2^2 \times 0.2$$

$$= 1 \times 0.1 + 0 + 1 \times 0.4 + 4 \times 0.2 = 0.1 + 0.4 + 0.8 = 1.3$$

**第3步：** 计算方差 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = E(X^2) - [E(X)]^2 = 1.3 - 0.7^2 = 1.3 - 0.49 = 0.81$$

**⚠️ 易错提醒：** 计算 $E(X^2)$ 时，是先将 $X$ 的每个取值**平方**再乘以概率，不是把概率平方。方差公式 $D(X) = E(X^2) - [E(X)]^2$ 中，$[E(X)]^2$ 是先求期望再平方。

**💡 解题思路总结：** 求方差的常用方法：先算 $E(X)$ 和 $E(X^2)$，再用 $D(X) = E(X^2) - [E(X)]^2$。这比直接用 $D(X) = \sum [x_i - E(X)]^2 p_i$ 计算更简便。
