---
type: definition
textbook: selective-2
chapter: 14
section: 2
name: 等差数列
related_knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
---

**定义（精确表述）：** 如果一个数列从第二项起，每一项与前一项的差都等于同一个常数 $d$，即 $a_{n+1} - a_n = d$（$n \in \mathbb{N}^*$），则称这个数列为**等差数列**，常数 $d$ 称为**公差**。

**通项公式：** $a_n = a_1 + (n-1)d$

**前 $n$ 项和公式：**
$$S_n = \frac{n(a_1 + a_n)}{2} = na_1 + \frac{n(n-1)}{2}d$$

**通俗解释：** 等差数列就是"每次增加同样多数"的数列。比如 $2, 5, 8, 11, \ldots$，每次增加 $3$，公差就是 $3$。求和时可以用**高斯求和法**（倒序相加法）：把数列正着写一遍、倒着写一遍，对应项相加都等于 $a_1 + a_n$，共 $n$ 项，所以总和为 $\dfrac{n(a_1 + a_n)}{2}$。

