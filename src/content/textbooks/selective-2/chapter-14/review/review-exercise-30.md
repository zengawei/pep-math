---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - geometric-sequence
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P22 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的前 $n$ 项和为 $S_n$，$a_1 = 1$，且对任意正整数 $n$，都有 $a_{n+1} = 2S_n + 1$。

（1）求数列 $\{a_n\}$ 的通项公式；

（2）设 $b_n = \dfrac{n}{a_n}$，证明：$b_1 + b_2 + \cdots + b_n < \dfrac{9}{4}$。

---

**解答：**

**第1步：** 利用 $S_n$ 与 $a_n$ 的关系求通项
> 📌 运用知识点：递推数列求通项

已知 $a_{n+1} = 2S_n + 1 \quad \cdots (1)$

当 $n \geqslant 2$ 时：$a_n = 2S_{n-1} + 1 \quad \cdots (2)$

$(1) - (2)$：

$$a_{n+1} - a_n = 2(S_n - S_{n-1}) = 2a_n$$

$$a_{n+1} = 3a_n \quad (n \geqslant 2)$$

当 $n = 1$ 时：$a_2 = 2S_1 + 1 = 2 \times 1 + 1 = 3$。

又 $\dfrac{a_2}{a_1} = \dfrac{3}{1} = 3$，所以 $n = 1$ 时也满足 $a_{n+1} = 3a_n$。

因此 $\{a_n\}$ 是以 $1$ 为首项、$3$ 为公比的等比数列：

$$a_n = 3^{n-1}$$

**第2步：** 写出 $T_n$ 的表达式
> 📌 运用知识点：错位相减法

$$b_n = \frac{n}{a_n} = \frac{n}{3^{n-1}}$$

$$T_n = \sum_{k=1}^{n} \frac{k}{3^{k-1}} = \frac{1}{3^0} + \frac{2}{3^1} + \frac{3}{3^2} + \cdots + \frac{n}{3^{n-1}} \quad \cdots (3)$$

两边乘以 $\dfrac{1}{3}$：

$$\frac{1}{3}T_n = \frac{1}{3^1} + \frac{2}{3^2} + \frac{3}{3^3} + \cdots + \frac{n}{3^n} \quad \cdots (4)$$

**第3步：** 两式相减求 $T_n$
> 📌 运用知识点：错位相减法

$(3) - (4)$：

$$T_n - \frac{1}{3}T_n = 1 + \left(\frac{2}{3} - \frac{1}{3}\right) + \left(\frac{3}{3^2} - \frac{2}{3^2}\right) + \cdots + \left(\frac{n}{3^{n-1}} - \frac{n-1}{3^{n-1}}\right) - \frac{n}{3^n}$$

$$\frac{2}{3}T_n = 1 + \frac{1}{3} + \frac{1}{3^2} + \cdots + \frac{1}{3^{n-1}} - \frac{n}{3^n}$$

其中 $1 + \frac{1}{3} + \frac{1}{3^2} + \cdots + \frac{1}{3^{n-1}}$ 是首项为 $1$、公比为 $\frac{1}{3}$ 的等比数列前 $n$ 项和：

$$\sum_{k=0}^{n-1} \frac{1}{3^k} = \frac{1 - \frac{1}{3^n}}{1 - \frac{1}{3}} = \frac{3}{2}\left(1 - \frac{1}{3^n}\right)$$

代入：

$$\frac{2}{3}T_n = \frac{3}{2}\left(1 - \frac{1}{3^n}\right) - \frac{n}{3^n} = \frac{3}{2} - \frac{3}{2 \cdot 3^n} - \frac{n}{3^n} = \frac{3}{2} - \frac{3 + 2n}{2 \cdot 3^n}$$

$$T_n = \frac{3}{2} \cdot \frac{3}{2} - \frac{3}{2} \cdot \frac{3 + 2n}{2 \cdot 3^n} = \frac{9}{4} - \frac{3(2n+3)}{4 \cdot 3^n} = \frac{9}{4} - \frac{2n+3}{4 \cdot 3^{n-1}}$$

**第4步：** 证明不等式
> 📌 运用知识点：数列综合

因为 $n$ 为正整数，$2n + 3 > 0$ 且 $3^{n-1} > 0$，所以：

$$\frac{2n+3}{4 \cdot 3^{n-1}} > 0$$

因此：

$$T_n = \frac{9}{4} - \frac{2n+3}{4 \cdot 3^{n-1}} < \frac{9}{4}$$

不等式得证。

**验证：** $T_1 = 1 < \frac{9}{4}$ ✓；$T_2 = 1 + \frac{2}{3} = \frac{5}{3} \approx 1.67 < 2.25$ ✓。

**⚠️ 易错提醒：** 由 $a_{n+1} = 2S_n + 1$ 求通项时，两式相减得到 $a_{n+1} = 3a_n$ 仅对 $n \geqslant 2$ 成立，必须单独验证 $n = 1$ 的情况（即 $a_2 = 3a_1$ 是否成立）。错位相减时，公比为 $\frac{1}{3}$，相减后中间部分共 $n-1$ 项等比数列加上首项 $1$，总共 $n$ 项。最后除以 $\frac{2}{3}$ 时注意系数运算。

**💡 解题思路总结：** 本题综合了递推数列求通项（$S_n$ 与 $a_n$ 关系型）、错位相减法求和、以及不等式证明三个核心考点。关键路径：$a_{n+1} = 2S_n + 1$ 通过相减化为等比递推 → $b_n = \frac{n}{3^{n-1}}$ 是"等差 × 等比"型用错位相减 → 精确和 $T_n = \frac{9}{4} - \frac{2n+3}{4 \cdot 3^{n-1}}$ 直接说明 $T_n < \frac{9}{4}$。
