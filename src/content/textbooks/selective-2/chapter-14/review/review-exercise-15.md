---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P22 复习参考题"
---

**题目：** 已知等比数列 $\{a_n\}$ 的前 $n$ 项和为 $S_n$，$a_1 = 1$，$S_3 = 7$。

（1）求公比 $q$ 和通项公式 $a_n$；

（2）设 $b_n = a_n + n$，求数列 $\{b_n\}$ 的前 $n$ 项和 $T_n$。

---

**解答：**

**第1步：** 求公比 $q$
> 📌 运用知识点：等比数列

当 $q \neq 1$ 时：

$$S_3 = \frac{a_1(1 - q^3)}{1 - q} = \frac{1 - q^3}{1 - q} = 1 + q + q^2 = 7$$

$$q^2 + q - 6 = 0 \implies (q + 3)(q - 2) = 0$$

所以 $q = 2$ 或 $q = -3$。

**第2步：** 写出通项公式
> 📌 运用知识点：等比数列

当 $q = 2$ 时：$a_n = 2^{n-1}$

当 $q = -3$ 时：$a_n = (-3)^{n-1}$

**第3步：** 求 $T_n$（以 $q = 2$ 为例）
> 📌 运用知识点：等比数列前n项和、数列求和

当 $q = 2$ 时，$b_n = 2^{n-1} + n$。

$$T_n = \sum_{k=1}^{n} (2^{k-1} + k) = \sum_{k=1}^{n} 2^{k-1} + \sum_{k=1}^{n} k$$

$$= \frac{1 \times (2^n - 1)}{2 - 1} + \frac{n(n+1)}{2} = 2^n - 1 + \frac{n(n+1)}{2}$$

同理，当 $q = -3$ 时：

$$T_n = \frac{1 - (-3)^n}{1 - (-3)} + \frac{n(n+1)}{2} = \frac{1 - (-3)^n}{4} + \frac{n(n+1)}{2}$$

**⚠️ 易错提醒：** 求 $q$ 时不要遗漏 $q = -3$ 的解。对 $\{b_n\}$ 求和时，要将其拆分为等比部分和等差部分分别求和（分组求和法），不要试图直接对 $b_n$ 用某个单一公式。

**💡 解题思路总结：** 等比数列求公比时，利用 $S_n$ 的展开式 $1 + q + q^2 + \cdots$ 列方程。对于由等比和等差组合而成的数列，采用分组求和法分别计算各部分的和再相加。
