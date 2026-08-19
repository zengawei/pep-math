---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence
source: "人教A版2019"
references: "选择性必修第二册 P4 练习A 第4题"
---

**题目：** 在等比数列 $\{a_n\}$ 中，已知 $a_1 = 3$，$q = 2$，求 $a_6$ 和前 $4$ 项和 $S_4$。

---

**解答：**

**第1步：** 利用等比数列通项公式求 $a_6$
> 📌 运用知识点：等比数列通项公式

等比数列的通项公式为：

$$a_n = a_1 \cdot q^{n-1}$$

将 $a_1 = 3$，$q = 2$，$n = 6$ 代入：

$$a_6 = 3 \times 2^{6-1} = 3 \times 2^5 = 3 \times 32 = 96$$

**第2步：** 利用等比数列前 $n$ 项和公式求 $S_4$
> 📌 运用知识点：等比数列前 $n$ 项和公式

当 $q \neq 1$ 时，等比数列前 $n$ 项和公式为：

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q}$$

将 $a_1 = 3$，$q = 2$，$n = 4$ 代入：

$$S_4 = \dfrac{3 \times (1 - 2^4)}{1 - 2} = \dfrac{3 \times (1 - 16)}{-1} = \dfrac{3 \times (-15)}{-1} = \dfrac{-45}{-1} = 45$$

验证：$a_1 = 3$，$a_2 = 6$，$a_3 = 12$，$a_4 = 24$，$S_4 = 3 + 6 + 12 + 24 = 45$ ✓

$$\boxed{a_6 = 96，S_4 = 45}$$

**⚠️ 易错提醒：** 使用求和公式时，注意 $q \neq 1$ 的前提条件。本题 $q = 2 \neq 1$，可以直接使用公式。计算 $2^4 = 16$ 时不要误算为 $2^4 = 8$。

**💡 解题思路总结：** 等比数列的基本量运算需要熟练掌握两个核心公式：通项公式 $a_n = a_1 \cdot q^{n-1}$ 和前 $n$ 项和公式 $S_n = \dfrac{a_1(1-q^n)}{1-q}$。求和后可用逐项相加验证结果。
