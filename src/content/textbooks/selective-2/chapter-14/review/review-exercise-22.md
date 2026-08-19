---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P18 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = n \cdot 2^n$，求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 写出 $S_n$ 和 $2S_n$ 的表达式
> 📌 运用知识点：错位相减法

$$S_n = 1 \cdot 2^1 + 2 \cdot 2^2 + 3 \cdot 2^3 + \cdots + n \cdot 2^n \quad \cdots (1)$$

将等式两边同乘以公比 $2$：

$$2S_n = 1 \cdot 2^2 + 2 \cdot 2^3 + 3 \cdot 2^4 + \cdots + n \cdot 2^{n+1} \quad \cdots (2)$$

**第2步：** 两式相减并化简
> 📌 运用知识点：错位相减法

用 $(1) - (2)$：

$$S_n - 2S_n = 1 \cdot 2^1 + (2-1) \cdot 2^2 + (3-2) \cdot 2^3 + \cdots + [n-(n-1)] \cdot 2^n - n \cdot 2^{n+1}$$

$$-S_n = 2^1 + 2^2 + 2^3 + \cdots + 2^n - n \cdot 2^{n+1}$$

其中 $2^1 + 2^2 + \cdots + 2^n$ 是首项为 $2$、公比为 $2$ 的等比数列前 $n$ 项和：

$$2^1 + 2^2 + \cdots + 2^n = \frac{2(1 - 2^n)}{1 - 2} = 2(2^n - 1) = 2^{n+1} - 2$$

代入得：

$$-S_n = 2^{n+1} - 2 - n \cdot 2^{n+1} = (1 - n) \cdot 2^{n+1} - 2$$

$$S_n = (n - 1) \cdot 2^{n+1} + 2$$

**验证：** 当 $n = 1$ 时，$S_1 = 0 \cdot 4 + 2 = 2 = 1 \cdot 2^1$ ✓；当 $n = 2$ 时，$S_2 = 1 \cdot 8 + 2 = 10 = 2 + 8 = 10$ ✓。

**⚠️ 易错提醒：** 错位相减法中，两式相减时对齐方式至关重要——$(1)$ 的第 $k$ 项 $k \cdot 2^k$ 要与 $(2)$ 的第 $k$ 项 $k \cdot 2^{k+1}$ 对齐相减，得到 $(k - k) \cdot 2^{k+1}$ 的形式。实际上更直观的做法是将 $(2)$ 整体右移一项对齐，使得同次幂的系数相减后为 $1$。最后一定要验证 $n=1, 2$ 的结果。

**💡 解题思路总结：** 错位相减法适用于通项为"等差 × 等比"形式的数列求和，即 $a_n = (an+b) \cdot q^n$。步骤为：写出 $S_n$，乘以公比 $q$ 得 $qS_n$，两式相减后中间部分化为等比数列求和，最后解出 $S_n$。
