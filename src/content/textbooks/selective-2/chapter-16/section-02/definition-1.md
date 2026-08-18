---
type: definition
textbook: selective-2
chapter: 16
section: 2
name: 组合与组合数
related_knowledge_points:
  - combination
---

**定义（精确表述）：** 一般地，从 $n$ 个不同元素中取出 $m$（$m \leqslant n$）个元素作为一组，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个**组合**。

从 $n$ 个不同元素中取出 $m$ 个元素的所有组合的个数，叫做从 $n$ 个不同元素中取出 $m$ 个元素的**组合数**，记作 $\mathrm{C}_n^m$（或 $\binom{n}{m}$）。

**组合数公式：**

$$\mathrm{C}_n^m = \frac{n!}{m!(n-m)!} = \frac{n(n-1)(n-2)\cdots(n-m+1)}{m!}$$

其中 $n, m \in \mathbb{N}^*$，且 $m \leqslant n$。规定 $\mathrm{C}_n^0 = 1$。

**组合数的性质：**

1. **对称性：** $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$

2. **帕斯卡恒等式（杨辉三角递推关系）：** $\mathrm{C}_{n+1}^m = \mathrm{C}_n^{m-1} + \mathrm{C}_n^m$

**通俗解释：** 组合就是"选人组队"——只关心选了谁，不关心顺序。比如从甲、乙、丙三人中选两人组队，选"甲乙"和选"乙甲"是同一种组合，因为队员一样。组合数就是数一数有多少种不同的"队伍"。
