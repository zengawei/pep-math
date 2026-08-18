---
type: example
textbook: selective-2
chapter: 14
section: 1
number: 1
knowledge_points:
  - sequence-concept
source: "人教A版2019"
references: "待补充"
---

**例题：** 已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n = 2n^2 + 3n$，求通项公式 $a_n$。

**解答：**

**第1步：** 利用 $a_n = S_n - S_{n-1}$ 求 $a_n$（$n \geqslant 2$）
> 📌 运用知识点：前 $n$ 项和与通项的关系

当 $n \geqslant 2$ 时：

$$a_n = S_n - S_{n-1} = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]$$

展开计算：

$$= 2n^2 + 3n - [2(n^2 - 2n + 1) + 3n - 3]$$

$$= 2n^2 + 3n - (2n^2 - 4n + 2 + 3n - 3)$$

$$= 2n^2 + 3n - 2n^2 + 4n - 2 - 3n + 3$$

$$= 4n + 1$$

**第2步：** 验证 $n = 1$ 的情况
> 📌 运用知识点：通项公式的完整性检验

当 $n = 1$ 时：

$$a_1 = S_1 = 2 \times 1^2 + 3 \times 1 = 5$$

将 $n = 1$ 代入 $a_n = 4n + 1$：

$$4 \times 1 + 1 = 5 = a_1$$

验证通过，$n = 1$ 时也满足 $a_n = 4n + 1$。

**结论：** 数列 $\{a_n\}$ 的通项公式为 $a_n = 4n + 1$（$n \in \mathbb{N}^*$）。

> ⚠️ **注意：** 由 $S_n$ 求 $a_n$ 时，必须分 $n = 1$ 和 $n \geqslant 2$ 两种情况讨论。若 $n = 1$ 时 $a_1$ 的值恰好满足 $n \geqslant 2$ 时的公式，则可以统一写出通项公式；若不满足，则需要分段表示。

