---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P24 练习A 第4题"
---

**题目：** 已知 $X$ 服从超几何分布 $H(8, 3, 4)$（即总体 $N = 8$，特殊类 $M = 3$，抽取 $n = 4$），$X$ 的分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{14}$ | $\dfrac{4}{7}$ | $\dfrac{3}{7}$ | $\dfrac{1}{14}$ |

求 $E(X)$。

---

**解答：**

**第1步：** 代入期望公式
> 📌 运用知识点：数学期望公式

$$E(X) = 0 \times \frac{1}{14} + 1 \times \frac{4}{7} + 2 \times \frac{3}{7} + 3 \times \frac{1}{14}$$

$$= 0 + \frac{4}{7} + \frac{6}{7} + \frac{3}{14}$$

通分为 $14$：

$$= \frac{8}{14} + \frac{12}{14} + \frac{3}{14} = \frac{23}{14}$$

**验证：** 超几何分布的期望公式 $E(X) = n \cdot \dfrac{M}{N} = 4 \times \dfrac{3}{8} = \dfrac{12}{8} = \dfrac{3}{2} = \dfrac{21}{14}$。

等等，让我重新计算：

$$E(X) = 0 + \frac{4}{7} + \frac{6}{7} + \frac{3}{14} = \frac{8 + 12 + 3}{14} = \frac{23}{14}$$

但 $n \cdot \frac{M}{N} = 4 \times \frac{3}{8} = \frac{3}{2}$。

让我重新验证分布列。$\mathrm{C}_8^4 = 70$。

$P(X=0) = \frac{\mathrm{C}_3^0 \mathrm{C}_5^4}{70} = \frac{5}{70} = \frac{1}{14}$ ✓

$P(X=1) = \frac{\mathrm{C}_3^1 \mathrm{C}_5^3}{70} = \frac{3 \times 10}{70} = \frac{30}{70} = \frac{3}{7}$

题目中给的 $P(X=1) = \frac{4}{7}$ 有误，应为 $\frac{3}{7}$。重新计算：

$$E(X) = 0 \times \frac{1}{14} + 1 \times \frac{3}{7} + 2 \times \frac{3}{7} + 3 \times \frac{1}{14} = \frac{3}{7} + \frac{6}{7} + \frac{3}{14} = \frac{6+12+3}{14} = \frac{21}{14} = \frac{3}{2}$$

与公式 $E(X) = \frac{3}{2}$ 一致。

**⚠️ 易错提醒：** 使用超几何分布期望公式 $E(X) = n \cdot \frac{M}{N}$ 可以快速验证结果。如果分布列中某个概率值有误，期望计算结果将与公式不符。

**💡 解题思路总结：** 超几何分布的期望可以直接用公式 $E(X) = n \cdot \frac{M}{N}$ 计算，也可以用分布列按定义逐项计算，两者结果一致。
