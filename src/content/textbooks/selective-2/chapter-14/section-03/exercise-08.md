---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P18 练习B 第8题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = (2n-1) \cdot 3^n$，求前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 写出 $S_n$ 和 $3S_n$ 的展开式
> 📌 运用知识点：错位相减法

$$S_n = 1 \cdot 3 + 3 \cdot 3^2 + 5 \cdot 3^3 + \cdots + (2n-1) \cdot 3^n \quad \cdots (1)$$

将 $(1)$ 式两边同乘以公比 $3$：

$$3S_n = 1 \cdot 3^2 + 3 \cdot 3^3 + 5 \cdot 3^4 + \cdots + (2n-1) \cdot 3^{n+1} \quad \cdots (2)$$

**第2步：** 错位相减
> 📌 运用知识点：错位相减法

用 $(2) - (1)$，将相同幂次的项对齐相减：

$$3S_n - S_n = -1 \cdot 3 + (1-3) \cdot 3^2 + (3-5) \cdot 3^3 + \cdots + [(2n-3)-(2n-1)] \cdot 3^n + (2n-1) \cdot 3^{n+1}$$

$$2S_n = (2n-1) \cdot 3^{n+1} - 3 - 2 \cdot 3^2 - 2 \cdot 3^3 - \cdots - 2 \cdot 3^n$$

$$2S_n = (2n-1) \cdot 3^{n+1} - 3 - 2(3^2 + 3^3 + \cdots + 3^n)$$

**第3步：** 计算中间等比数列的和
> 📌 运用知识点：等比数列求和

$3^2 + 3^3 + \cdots + 3^n$ 是首项为 $9$、公比为 $3$、共 $n-1$ 项的等比数列：

$$3^2 + 3^3 + \cdots + 3^n = \dfrac{9(3^{n-1} - 1)}{3 - 1} = \dfrac{9(3^{n-1} - 1)}{2} = \dfrac{3^{n+1} - 9}{2}$$

**第4步：** 代入化简
> 📌 运用知识点：错位相减法

$$2S_n = (2n-1) \cdot 3^{n+1} - 3 - 2 \cdot \dfrac{3^{n+1} - 9}{2}$$

$$= (2n-1) \cdot 3^{n+1} - 3 - (3^{n+1} - 9)$$

$$= (2n-1) \cdot 3^{n+1} - 3^{n+1} + 6$$

$$= (2n-2) \cdot 3^{n+1} + 6$$

$$S_n = (n-1) \cdot 3^{n+1} + 3$$

$$= \boxed{(n-1) \cdot 3^{n+1} + 3}$$

**验证：** 当 $n=1$ 时，$S_1 = 0 \cdot 9 + 3 = 3 = 1 \cdot 3$，正确。当 $n=2$ 时，$S_2 = 1 \cdot 27 + 3 = 30$，而 $1 \cdot 3 + 3 \cdot 9 = 3 + 27 = 30$，正确。

**⚠️ 易错提醒：** 错位相减时，对齐的是**相同幂次**的项，不要搞错对应关系。中间等比数列的项数是 $n-1$（从 $3^2$ 到 $3^n$），不要误算为 $n$。最后除以 $2$ 时不要遗漏。

**💡 解题思路总结：** 当通项为"等差 $\times$ 等比"的形式（即 $a_n = (\text{关于}n\text{的一次式}) \times q^n$）时，使用**错位相减法**：写出 $S_n$，乘以公比 $q$ 得到 $qS_n$，两式相减后中间部分化为等比数列求和，最终解出 $S_n$。
