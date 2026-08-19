---
type: example
textbook: selective-2
chapter: 16
section: 3
number: 3
knowledge_points:
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P71 例3"
---

**例题：** 已知 $(1 + x)^n$ 的展开式中，第 $2$ 项与第 $4$ 项的二项式系数相等，求 $n$ 的值。

---

**解答：**

**第1步：** 列出等式
> 📌 运用知识点：二项式定理

第 $2$ 项的二项式系数为 $\binom{n}{1}$，第 $4$ 项的二项式系数为 $\binom{n}{3}$。

$$\binom{n}{1} = \binom{n}{3}$$

**第2步：** 利用对称性求解
> 📌 运用知识点：组合数的对称性

由对称性 $\binom{n}{a} = \binom{n}{n-a}$ 可知 $a + b = n$（当 $a \neq b$ 时），所以

$$1 + 3 = n \implies n = 4$$

**验证：** $\binom{4}{1} = 4$，$\binom{4}{3} = 4$。✓

**💡 解题思路总结：** 二项式系数相等→利用对称性 $\binom{n}{a} = \binom{n}{n-a}$，即 $a + b = n$。这是组合数对称性的直接应用。
