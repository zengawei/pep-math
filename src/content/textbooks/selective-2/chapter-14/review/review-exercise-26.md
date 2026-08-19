---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P19 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$a_{n+1} = 2a_n + 2^n$（$n \geqslant 1$）。

（1）求数列 $\{a_n\}$ 的通项公式；

（2）求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 通过换元求通项公式
> 📌 运用知识点：递推数列求通项

将递推式 $a_{n+1} = 2a_n + 2^n$ 两边同除以 $2^{n+1}$：

$$\frac{a_{n+1}}{2^{n+1}} = \frac{a_n}{2^n} + \frac{1}{2}$$

设 $b_n = \dfrac{a_n}{2^n}$，则：

$$b_{n+1} = b_n + \frac{1}{2}$$

即 $\{b_n\}$ 是公差为 $\dfrac{1}{2}$ 的等差数列。

$$b_1 = \frac{a_1}{2^1} = \frac{1}{2}$$

$$b_n = \frac{1}{2} + (n-1) \cdot \frac{1}{2} = \frac{n}{2}$$

因此：

$$a_n = 2^n \cdot b_n = 2^n \cdot \frac{n}{2} = n \cdot 2^{n-1}$$

**第2步：** 用错位相减法求 $S_n$
> 📌 运用知识点：错位相减法

$$S_n = \sum_{k=1}^{n} k \cdot 2^{k-1} = 1 \cdot 2^0 + 2 \cdot 2^1 + 3 \cdot 2^2 + \cdots + n \cdot 2^{n-1}$$

$$2S_n = 1 \cdot 2^1 + 2 \cdot 2^2 + 3 \cdot 2^3 + \cdots + n \cdot 2^n$$

$(2S_n - S_n)$，即 $(2) - (1)$：

$$S_n = -1 \cdot 2^0 + (1-2) \cdot 2^1 \text{ 的相反处理——}$$

更清晰地，用 $S_n - 2S_n$：

$$-S_n = 2^0 + 2^1 + 2^2 + \cdots + 2^{n-1} - n \cdot 2^n$$

$$-S_n = \frac{1 - 2^n}{1 - 2} - n \cdot 2^n = 2^n - 1 - n \cdot 2^n = (1-n) \cdot 2^n - 1$$

$$S_n = (n-1) \cdot 2^n + 1$$

**验证：** $n = 1$ 时，$S_1 = 0 + 1 = 1 = a_1$ ✓；$n = 2$ 时，$S_2 = 1 \cdot 4 + 1 = 5 = 1 + 2 \cdot 2 = 5$ ✓。

**⚠️ 易错提醒：** 递推式 $a_{n+1} = pa_n + q^n$ 型，两边同除以 $q^{n+1}$ 是标准换元方法。容易犯的错误是除以 $2^n$ 而非 $2^{n+1}$，导致等差关系不简洁。另外错位相减时注意 $a_n = n \cdot 2^{n-1}$ 的指数是 $n-1$ 而非 $n$。

**💡 解题思路总结：** 递推数列求通项的核心是"换元化归"——通过适当变换将非齐次递推转化为等差或等比数列。$a_{n+1} = pa_n + q^n$ 型两边除以 $q^{n+1}$ 令 $b_n = \frac{a_n}{q^n}$ 是经典方法。求和时通项为 $n \cdot 2^{n-1}$ 形式，适用错位相减法。
