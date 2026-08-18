---
type: example
textbook: required-1
chapter: 2
section: 1
number: 4
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P29"
---

**例题：** 已知 $a > b > 1$，用作商法比较 $a^a$ 与 $b^b$ 的大小。

**解答：**

**第1步：** 作商
> 📌 运用知识点：不等式的性质（作商法）

因为 $a > b > 1$，所以 $a^a > 0$，$b^b > 0$。作商：

$$\frac{a^a}{b^b}$$

**第2步：** 变形分析
> 📌 运用知识点：不等式的性质

将商式拆分：

$$\frac{a^a}{b^b} = \frac{a^a}{b^a} \cdot \frac{b^a}{b^b} = \left(\frac{a}{b}\right)^a \cdot b^{a-b}$$

**第3步：** 判断各因子
> 📌 运用知识点：不等式的性质

因为 $a > b > 1$：
- $\frac{a}{b} > 1$，$a > 0$，所以 $\left(\frac{a}{b}\right)^a > 1$
- $b > 1$，$a - b > 0$，所以 $b^{a-b} > 1$

因此 $\frac{a^a}{b^b} > 1 \times 1 = 1$。

**第4步：** 得出结论
> 📌 运用知识点：不等式的性质

因为 $\frac{a^a}{b^b} > 1$ 且 $b^b > 0$，所以 $a^a > b^b$。

**⚠️ 易错提醒：** 作商法适用于两个正数的比较。关键是将商式变形为容易判断与 $1$ 的大小的形式。
