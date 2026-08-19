---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 10
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P19 复习参考题"
---

**题目：** 在等比数列 $\{a_n\}$ 中，$a_1 = 2$，$q = 3$，求前 $6$ 项的和 $S_6$。

---

**解答：**

**第1步：** 选择求和公式
> 📌 运用知识点：等比数列前n项和

当 $q \neq 1$ 时，等比数列前 $n$ 项和公式为：

$$S_n = \frac{a_1(1 - q^n)}{1 - q}$$

**第2步：** 代入计算
> 📌 运用知识点：等比数列前n项和

将 $a_1 = 2$，$q = 3$，$n = 6$ 代入：

$$S_6 = \frac{2 \times (1 - 3^6)}{1 - 3} = \frac{2 \times (1 - 729)}{-2} = \frac{2 \times (-728)}{-2} = 728$$

**⚠️ 易错提醒：** 等比数列求和公式中，$q \neq 1$ 是前提条件。当 $q = 1$ 时，$S_n = na_1$。另外注意 $3^6 = 729$ 的计算不要出错。

**💡 解题思路总结：** 等比数列求和时，先判断 $q$ 是否为 $1$，再选用对应公式。注意公式中 $1-q^n$ 与 $1-q$ 的符号要一致。
