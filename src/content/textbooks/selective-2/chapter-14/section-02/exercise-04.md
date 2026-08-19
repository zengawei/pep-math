---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P11 练习A 第1题"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_1 = 1$，$q = -2$，求 $a_8$ 和前 $6$ 项和 $S_6$。

---

**解答：**

**第1步：** 求 $a_8$ 的值
> 📌 运用知识点：等比数列通项公式

等比数列的通项公式为：

$$a_n = a_1 \cdot q^{n-1}$$

将 $a_1 = 1$，$q = -2$，$n = 8$ 代入：

$$a_8 = 1 \times (-2)^{8-1} = (-2)^7 = -128$$

**第2步：** 求前 $6$ 项和 $S_6$
> 📌 运用知识点：等比数列前 $n$ 项和公式

等比数列前 $n$ 项和公式（$q \neq 1$）为：

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q}$$

将 $a_1 = 1$，$q = -2$，$n = 6$ 代入：

$$S_6 = \dfrac{1 \times (1 - (-2)^6)}{1 - (-2)} = \dfrac{1 - 64}{1 + 2} = \dfrac{-63}{3} = -21$$

**⚠️ 易错提醒：** 公比 $q = -2$ 为负数，计算 $(-2)^6$ 时注意偶数次幂为正数，$(-2)^6 = 64$ 而非 $-64$。分母 $1 - q = 1 - (-2) = 3$，不要漏掉负号。

**💡 解题思路总结：** 本题直接运用等比数列的通项公式和前 $n$ 项和公式求解。关键在于准确代入公比 $q = -2$ 并注意负数的幂运算符号：奇数次幂为负，偶数次幂为正。

$$\boxed{a_8 = -128, \quad S_6 = -21}$$
