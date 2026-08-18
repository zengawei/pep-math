---
type: definition
textbook: selective-2
chapter: 14
section: 3
name: 等比数列
related_knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
  - sequence-sum-methods
---

**定义（精确表述）：** 如果一个数列从第2项起，每一项与它的前一项的比都等于同一个非零常数 $q$，则这个数列叫做等比数列。这个常数 $q$ 叫做等比数列的公比。

**通项公式：** $a_n = a_1 \cdot q^{n-1}$（$a_1 \neq 0$，$q \neq 0$）

**前 $n$ 项和公式：**

$$S_n = \begin{cases} na_1, & q = 1 \\ \dfrac{a_1(1 - q^n)}{1 - q}, & q \neq 1 \end{cases}$$

也常写成 $S_n = \dfrac{a_1 - a_n q}{1 - q}$（$q \neq 1$）。

**通俗解释：** 等比数列就是"每次乘以同一个数"的数列——从第一项开始，后一项总是前一项的 $q$ 倍。比如 $1, 3, 9, 27, \ldots$ 就是公比为 $3$ 的等比数列。求和时使用"错位相减法"：把 $S_n$ 乘以 $q$ 后与原式相减，中间项全部消去，只剩首尾两项，从而得到求和公式。

