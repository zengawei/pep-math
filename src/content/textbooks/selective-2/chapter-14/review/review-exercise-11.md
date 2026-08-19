---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 11
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P20 复习参考题"
---

**题目：** 在等比数列 $\{a_n\}$ 中，$S_3 = 7$，$S_6 = 63$，求 $a_1$ 和 $q$。

---

**解答：**

**第1步：** 利用等比数列前n项和的性质
> 📌 运用知识点：等比数列前n项和

在等比数列中，$S_n$，$S_{2n} - S_n$，$S_{3n} - S_{2n}$ 成等比数列（公比仍为 $q^n$）。

因此 $S_3$，$S_6 - S_3$ 成等比关系：

$$\frac{S_6 - S_3}{S_3} = q^3$$

**第2步：** 代入求解
> 📌 运用知识点：等比数列前n项和

$$q^3 = \frac{63 - 7}{7} = \frac{56}{7} = 8 \implies q = 2$$

由 $S_3 = \dfrac{a_1(1 - q^3)}{1 - q}$，代入 $q = 2$，$S_3 = 7$：

$$7 = \frac{a_1(1 - 8)}{1 - 2} = \frac{-7a_1}{-1} = 7a_1 \implies a_1 = 1$$

因此，$a_1 = 1$，$q = 2$。

**⚠️ 易错提醒：** 等比数列中 $S_n, S_{2n}-S_n, S_{3n}-S_{2n}$ 成等比数列，公比为 $q^n$。此性质要求 $S_n \neq 0$。注意与等差数列的对应性质区分。

**💡 解题思路总结：** 利用等比数列前 $n$ 项和的分段性质，由 $S_n$ 和 $S_{2n}$ 可快速求出 $q^n$，进而求 $q$ 和 $a_1$。
