---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 3
difficulty: hard
category: practice
group: A
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "课标14.3.3"
---

**题目：** 求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$，其中 $a_n = n \cdot 2^n$。

---

**解答：**

**第1步：** 写出 $S_n$ 的展开式
> 📌 运用知识点：错位相减法

$$S_n = 1 \cdot 2^1 + 2 \cdot 2^2 + 3 \cdot 2^3 + \cdots + n \cdot 2^n \quad \cdots (1)$$

**第2步：** 乘以公比后错位
> 📌 运用知识点：错位相减法

将 $(1)$ 式两边乘以 $2$：

$$2S_n = 1 \cdot 2^2 + 2 \cdot 2^3 + 3 \cdot 2^4 + \cdots + n \cdot 2^{n+1} \quad \cdots (2)$$

**第3步：** 错位相减
> 📌 运用知识点：错位相减法

用 $(2) - (1)$：

$$2S_n - S_n = n \cdot 2^{n+1} - \left(1 \cdot 2^1 + 1 \cdot 2^2 + 1 \cdot 2^3 + \cdots + 1 \cdot 2^n\right)$$

即：

$$S_n = n \cdot 2^{n+1} - \left(2^1 + 2^2 + 2^3 + \cdots + 2^n\right)$$

**第4步：** 求等比数列的和
> 📌 运用知识点：等比数列前 $n$ 项和

括号内是首项为 $2$、公比为 $2$ 的等比数列前 $n$ 项和：

$$2^1 + 2^2 + \cdots + 2^n = \frac{2(1 - 2^n)}{1 - 2} = \frac{2(2^n - 1)}{1} = 2^{n+1} - 2$$

**第5步：** 代入化简
> 📌 运用知识点：错位相减法

$$S_n = n \cdot 2^{n+1} - (2^{n+1} - 2) = n \cdot 2^{n+1} - 2^{n+1} + 2$$

$$\boxed{S_n = (n - 1) \cdot 2^{n+1} + 2}$$

**验证：** $n = 1$ 时，$S_1 = 0 \cdot 4 + 2 = 2 = 1 \cdot 2^1$ ✓；$n = 2$ 时，$S_2 = 1 \cdot 8 + 2 = 10 = 2 + 8$ ✓

**💡 解题思路总结：** 当 $a_n = (\text{等差}) \times (\text{等比})$ 时，使用**错位相减法**：写出 $S_n$，乘以等比部分的公比，两式相减使中间部分化为等比数列求和。这是高考高频考点。

