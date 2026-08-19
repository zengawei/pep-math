---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
  - arithmetic-sequence
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P20 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的前 $n$ 项和为 $S_n$，且满足 $S_n = 2a_n - 1$（$n \geqslant 1$）。

（1）求数列 $\{a_n\}$ 的通项公式；

（2）设 $b_n = \dfrac{a_n}{S_n \cdot S_{n+1}}$，求数列 $\{b_n\}$ 的前 $n$ 项和 $T_n$。

---

**解答：**

**第1步：** 利用 $S_n$ 与 $a_n$ 的关系求通项
> 📌 运用知识点：递推数列求通项

当 $n \geqslant 2$ 时：$a_n = S_n - S_{n-1}$

由 $S_n = 2a_n - 1$ 得 $a_n = \dfrac{S_n + 1}{2}$，同理 $a_{n-1} = \dfrac{S_{n-1} + 1}{2}$。

又 $a_n = S_n - S_{n-1}$，代入 $S_n = 2a_n - 1$：

$$S_n = 2(S_n - S_{n-1}) - 1 \implies S_n = 2S_n - 2S_{n-1} - 1$$

$$S_n = 2S_{n-1} + 1$$

当 $n = 1$ 时：$S_1 = 2a_1 - 1 = 2S_1 - 1$，解得 $S_1 = 1$，即 $a_1 = 1$。

由 $S_n = 2S_{n-1} + 1$，两边加 $1$：

$$S_n + 1 = 2(S_{n-1} + 1)$$

设 $c_n = S_n + 1$，则 $c_n = 2c_{n-1}$，$c_1 = S_1 + 1 = 2$。

所以 $c_n = 2 \cdot 2^{n-1} = 2^n$，即 $S_n = 2^n - 1$。

因此 $a_n = S_n - S_{n-1} = (2^n - 1) - (2^{n-1} - 1) = 2^{n-1}$（$n \geqslant 2$）。

验证 $a_1 = 1 = 2^0$ ✓，故 $a_n = 2^{n-1}$。

**第2步：** 用裂项法求 $T_n$
> 📌 运用知识点：裂项相消法

$$b_n = \frac{a_n}{S_n \cdot S_{n+1}} = \frac{2^{n-1}}{(2^n - 1)(2^{n+1} - 1)}$$

注意到 $2^{n-1} = \frac{1}{2} \cdot 2^n = \frac{1}{2}[(2^{n+1} - 1) - (2^n - 1)]$，因此：

$$b_n = \frac{1}{2} \cdot \frac{(2^{n+1} - 1) - (2^n - 1)}{(2^n - 1)(2^{n+1} - 1)} = \frac{1}{2}\left(\frac{1}{2^n - 1} - \frac{1}{2^{n+1} - 1}\right)$$

裂项相消：

$$T_n = \frac{1}{2}\left[\left(\frac{1}{2^1 - 1} - \frac{1}{2^2 - 1}\right) + \left(\frac{1}{2^2 - 1} - \frac{1}{2^3 - 1}\right) + \cdots + \left(\frac{1}{2^n - 1} - \frac{1}{2^{n+1} - 1}\right)\right]$$

$$T_n = \frac{1}{2}\left(1 - \frac{1}{2^{n+1} - 1}\right) = \frac{1}{2} \cdot \frac{2^{n+1} - 2}{2^{n+1} - 1} = \frac{2^n - 1}{2^{n+1} - 1}$$

**⚠️ 易错提醒：** 由 $S_n = 2a_n - 1$ 求通项时，需要分 $n = 1$ 和 $n \geqslant 2$ 讨论。$n = 1$ 时直接用 $S_1 = a_1$ 求值；$n \geqslant 2$ 时用 $a_n = S_n - S_{n-1}$。最后要验证 $a_1$ 是否符合通项公式。裂项时，关键是发现分子 $2^{n-1}$ 恰好是分母两个因式之差的一半。

**💡 解题思路总结：** $S_n$ 与 $a_n$ 的关系题，核心操作是 $a_n = S_n - S_{n-1}$（$n \geqslant 2$），将问题转化为关于 $S_n$ 的递推。构造 $S_n + c$ 为等比数列是处理 $S_n = aS_{n-1} + b$ 型递推的标准方法。第二问的裂项需要观察分子与分母因式的关系。
