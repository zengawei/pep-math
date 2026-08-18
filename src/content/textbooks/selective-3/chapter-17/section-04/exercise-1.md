---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - expected-value-variance
source: "人教A版2019"
references: "课标17.4.1"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $0.1$ | $0.3$ | $0.4$ | $0.2$ |

(1) 求 $E(X)$；

(2) 求 $D(X)$。

---

**解答：**

**第1步：** 求 $E(X)$
> 📌 运用知识点：均值公式 $E(X) = \sum x_i p_i$

$$E(X) = 0 \times 0.1 + 1 \times 0.3 + 2 \times 0.4 + 3 \times 0.2$$

$$= 0 + 0.3 + 0.8 + 0.6 = 1.7$$

**第2步：** 求 $D(X)$
> 📌 运用知识点：方差公式 $D(X) = \sum (x_i - E(X))^2 p_i$

$$D(X) = (0 - 1.7)^2 \times 0.1 + (1 - 1.7)^2 \times 0.3 + (2 - 1.7)^2 \times 0.4 + (3 - 1.7)^2 \times 0.2$$

$$= 2.89 \times 0.1 + 0.49 \times 0.3 + 0.09 \times 0.4 + 1.69 \times 0.2$$

$$= 0.289 + 0.147 + 0.036 + 0.338 = 0.81$$

**💡 解题思路总结：** 已知分布列时，直接按定义公式逐项计算即可。求均值用 $E(X) = \sum x_i p_i$，求方差用 $D(X) = \sum (x_i - E(X))^2 p_i$。计算时注意不要遗漏任何一项。
