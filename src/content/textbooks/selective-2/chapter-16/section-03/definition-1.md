---
type: definition
textbook: selective-2
chapter: 16
section: 3
name: 二项式定理
related_knowledge_points:
  - binomial-theorem
  - binomial-properties
---

**定义（精确表述）：** 对任意正整数 $n$，有

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n$$

这个公式叫做**二项式定理**。右边的多项式叫做 $(a+b)^n$ 的二项展开式。

**通项公式：** 展开式的第 $r+1$ 项（$r = 0, 1, 2, \ldots, n$）为

$$T_{r+1} = \binom{n}{r} a^{n-r} b^r$$

其中 $\binom{n}{r}$ 叫做**二项式系数**。

**重要性质：**

1. **对称性：** $\binom{n}{k} = \binom{n}{n-k}$，即与首末两端"等距离"的两项的二项式系数相等。
2. **系数之和：** 所有二项式系数之和为 $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$。
3. **奇偶项系数和：** 奇数项的二项式系数之和等于偶数项的二项式系数之和，均为 $2^{n-1}$，即 $\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots = \binom{n}{1} + \binom{n}{3} + \binom{n}{5} + \cdots = 2^{n-1}$。
4. **杨辉三角：** 二项式系数表（杨辉三角）中，每行两端都是 $1$，中间每个数等于它肩上两数之和，即 $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$。

**通俗解释：** 二项式定理就是展开 $(a+b)^n$ 的万能公式。展开后每一项的系数就是组合数 $\binom{n}{k}$——从 $n$ 个括号里选 $k$ 个取 $b$、其余取 $a$ 的方案数。记住通项公式 $T_{r+1} = \binom{n}{r}a^{n-r}b^r$，就能直接写出任意一项，不需要把整个展开式都算出来。

