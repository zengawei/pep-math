---
type: example
textbook: selective-3
chapter: 17
section: 4
number: 4
knowledge_points:
  - hypergeometric-distribution
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P25 例4"
---

**例题：** 从 $10$ 张奖券中（其中 $3$ 张有奖、$7$ 张无奖）不放回地随机购买 $2$ 张，设中奖张数为 $X$。求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 求 $X$ 的分布列
> 📌 运用知识点：超几何分布

$N = 10$，$M = 3$，$n = 2$。$\mathrm{C}_{10}^2 = 45$。

$$P(X = 0) = \frac{\mathrm{C}_3^0 \cdot \mathrm{C}_7^2}{45} = \frac{21}{45} = \frac{7}{15}$$

$$P(X = 1) = \frac{\mathrm{C}_3^1 \cdot \mathrm{C}_7^1}{45} = \frac{21}{45} = \frac{7}{15}$$

$$P(X = 2) = \frac{\mathrm{C}_3^2 \cdot \mathrm{C}_7^0}{45} = \frac{3}{45} = \frac{1}{15}$$

**第2步：** 求 $E(X)$
> 📌 运用知识点：数学期望公式

$$E(X) = 0 \times \frac{7}{15} + 1 \times \frac{7}{15} + 2 \times \frac{1}{15} = \frac{7}{15} + \frac{2}{15} = \frac{9}{15} = \frac{3}{5}$$

验证：$E(X) = n \cdot \dfrac{M}{N} = 2 \times \dfrac{3}{10} = \dfrac{3}{5}$ ✓

**第3步：** 求 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = \left(0 - \frac{3}{5}\right)^2 \times \frac{7}{15} + \left(1 - \frac{3}{5}\right)^2 \times \frac{7}{15} + \left(2 - \frac{3}{5}\right)^2 \times \frac{1}{15}$$

$$= \frac{9}{25} \times \frac{7}{15} + \frac{4}{25} \times \frac{7}{15} + \frac{49}{25} \times \frac{1}{15}$$

$$= \frac{63}{375} + \frac{28}{375} + \frac{49}{375} = \frac{140}{375} = \frac{28}{75}$$

**💡 解题思路总结：** 超几何分布的期望 $E(X) = n \cdot \frac{M}{N}$ 可直接用公式验证。方差需要按定义逐项计算，也可用 $D(X) = E(X^2) - [E(X)]^2$ 简化。
