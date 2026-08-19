---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P24 练习A 第3题"
---

**题目：** 一个盒中有 $5$ 个红球和 $3$ 个白球。从中不放回地随机取出 $2$ 个球，设取到的红球数为 $X$。求 $X$ 的分布列。

---

**解答：**

**第1步：** 确定参数和 $X$ 的可能取值
> 📌 运用知识点：超几何分布

$N = 8$，$M = 5$（红球），$n = 2$。$X$ 的可能取值为 $0, 1, 2$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布的概率公式

$\mathrm{C}_8^2 = 28$。

$$P(X = 0) = \frac{\mathrm{C}_5^0 \cdot \mathrm{C}_3^2}{\mathrm{C}_8^2} = \frac{1 \times 3}{28} = \frac{3}{28}$$

$$P(X = 1) = \frac{\mathrm{C}_5^1 \cdot \mathrm{C}_3^1}{\mathrm{C}_8^2} = \frac{5 \times 3}{28} = \frac{15}{28}$$

$$P(X = 2) = \frac{\mathrm{C}_5^2 \cdot \mathrm{C}_3^0}{\mathrm{C}_8^2} = \frac{10 \times 1}{28} = \frac{10}{28} = \frac{5}{14}$$

**第3步：** 验证并写出分布列

$$\frac{3}{28} + \frac{15}{28} + \frac{10}{28} = \frac{28}{28} = 1 \quad \checkmark$$

| $X$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{3}{28}$ | $\dfrac{15}{28}$ | $\dfrac{5}{14}$ |

**⚠️ 易错提醒：** 注意 $X$ 的取值范围受限于 $\min(n, M)$ 和 $\max(0, n - (N - M))$。本题 $X$ 最大为 $\min(2, 5) = 2$，最小为 $\max(0, 2 - 3) = 0$。

**💡 解题思路总结：** 超几何分布建分布列：逐一计算 $P(X=k)$，最后用概率之和为 $1$ 验证。
