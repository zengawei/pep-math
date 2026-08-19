---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - geometric-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P12 练习B 第2题"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$S_3 = 7$，$S_6 = 63$，求 $a_1$ 和公比 $q$。

---

**解答：**

**第1步：** 利用 $S_6$ 与 $S_3$ 的比值求 $q$
> 📌 运用知识点：等比数列前 $n$ 项和公式

等比数列前 $n$ 项和公式（$q \neq 1$）为：

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q}$$

计算 $\dfrac{S_6}{S_3}$：

$$\dfrac{S_6}{S_3} = \dfrac{\dfrac{a_1(1 - q^6)}{1 - q}}{\dfrac{a_1(1 - q^3)}{1 - q}} = \dfrac{1 - q^6}{1 - q^3}$$

利用因式分解 $1 - q^6 = (1 - q^3)(1 + q^3)$：

$$\dfrac{S_6}{S_3} = \dfrac{(1 - q^3)(1 + q^3)}{1 - q^3} = 1 + q^3$$

代入已知值：

$$\dfrac{63}{7} = 1 + q^3 \implies 9 = 1 + q^3 \implies q^3 = 8 \implies q = 2$$

**第2步：** 求 $a_1$
> 📌 运用知识点：等比数列前 $n$ 项和公式

将 $q = 2$ 代入 $S_3 = 7$：

$$S_3 = \dfrac{a_1(1 - 2^3)}{1 - 2} = \dfrac{a_1(1 - 8)}{-1} = \dfrac{-7a_1}{-1} = 7a_1$$

$$7a_1 = 7 \implies a_1 = 1$$

**⚠️ 易错提醒：** 化简 $\dfrac{S_6}{S_3}$ 时，需要用到因式分解 $1 - q^6 = (1 - q^3)(1 + q^3)$，不要直接展开计算。另外，$q^3 = 8$ 在实数范围内只有唯一解 $q = 2$，不要遗漏或多加解。

**💡 解题思路总结：** 已知 $S_m$ 和 $S_{2m}$ 求等比数列参数时，利用 $\dfrac{S_{2m}}{S_m} = 1 + q^m$ 这一技巧可以快速求出公比 $q$，再代回原式求 $a_1$。这比联立方程组要简洁得多。

$$\boxed{a_1 = 1, \quad q = 2}$$
