---
type: example
textbook: selective-3
chapter: 17
section: 4
number: 2
knowledge_points:
  - hypergeometric-distribution
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P22 例2"
---

**例题：** 一个袋中有 $7$ 个球，其中 $4$ 个红球、$3$ 个白球。从中不放回地随机取出 $3$ 个球，设取到的红球数为 $X$。求 $X$ 的分布列。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：超几何分布

$N = 7$，$M = 4$（红球），$n = 3$。$X$ 的可能取值为 $0, 1, 2, 3$。

$\mathrm{C}_7^3 = 35$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布的概率公式

$$P(X = 0) = \frac{\mathrm{C}_4^0 \cdot \mathrm{C}_3^3}{35} = \frac{1 \times 1}{35} = \frac{1}{35}$$

$$P(X = 1) = \frac{\mathrm{C}_4^1 \cdot \mathrm{C}_3^2}{35} = \frac{4 \times 3}{35} = \frac{12}{35}$$

$$P(X = 2) = \frac{\mathrm{C}_4^2 \cdot \mathrm{C}_3^1}{35} = \frac{6 \times 3}{35} = \frac{18}{35}$$

$$P(X = 3) = \frac{\mathrm{C}_4^3 \cdot \mathrm{C}_3^0}{35} = \frac{4 \times 1}{35} = \frac{4}{35}$$

验证：$\dfrac{1 + 12 + 18 + 4}{35} = \dfrac{35}{35} = 1$ ✓

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{35}$ | $\dfrac{12}{35}$ | $\dfrac{18}{35}$ | $\dfrac{4}{35}$ |

**💡 解题思路总结：** 不放回摸球 → 超几何分布。分子 = "从红球取 $k$ 个" × "从白球取 $3-k$ 个"，分母 = "从全部取 $3$ 个"。
