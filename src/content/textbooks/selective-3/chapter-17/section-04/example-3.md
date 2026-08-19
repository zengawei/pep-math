---
type: example
textbook: selective-3
chapter: 17
section: 4
number: 3
knowledge_points:
  - hypergeometric-distribution
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P24 例3"
---

**例题：** 某工厂生产了 $50$ 件产品，其中 $5$ 件是次品。质检部门从中不放回地随机抽检 $3$ 件，若发现次品则整批产品需要复检。设抽到的次品数为 $X$。

(1) 求 $X$ 的分布列。

(2) 求该批产品需要复检的概率。

---

**解答：**

**第1步：** 确定分布类型
> 📌 运用知识点：超几何分布

$N = 50$，$M = 5$（次品），$n = 3$。$X$ 的可能取值为 $0, 1, 2, 3$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布的概率公式

$\mathrm{C}_{50}^3 = \dfrac{50 \times 49 \times 48}{6} = 19600$。

$$P(X = 0) = \frac{\mathrm{C}_5^0 \cdot \mathrm{C}_{45}^3}{19600} = \frac{1 \times 14190}{19600} = \frac{14190}{19600} \approx 0.7240$$

$$P(X = 1) = \frac{\mathrm{C}_5^1 \cdot \mathrm{C}_{45}^2}{19600} = \frac{5 \times 990}{19600} = \frac{4950}{19600} \approx 0.2526$$

$$P(X = 2) = \frac{\mathrm{C}_5^2 \cdot \mathrm{C}_{45}^1}{19600} = \frac{10 \times 45}{19600} = \frac{450}{19600} \approx 0.0230$$

$$P(X = 3) = \frac{\mathrm{C}_5^3 \cdot \mathrm{C}_{45}^0}{19600} = \frac{10}{19600} \approx 0.0005$$

**第3步：** 求需要复检的概率
> 📌 运用知识点：对立事件

需要复检即 $X \geqslant 1$：

$$P(X \geqslant 1) = 1 - P(X = 0) \approx 1 - 0.7240 = 0.2760$$

**💡 解题思路总结：** 质检问题中，"发现次品"即"至少 $1$ 件次品"，用对立事件 $1 - P(X = 0)$ 最简便。超几何分布在大总体中计算组合数时，注意化简。
