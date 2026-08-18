---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - geometric-sequence
source: "自编"
references: "课标14.3.2"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_1 + a_3 = 10$，$a_2 + a_4 = 20$。

(1) 求公比 $q$；

(2) 求前 $5$ 项和 $S_5$。

---

**解答：**

**第1步：** 利用等比数列性质求公比
> 📌 运用知识点：等比数列通项公式

设首项为 $a_1$，公比为 $q$，则：

$$a_1 + a_3 = a_1 + a_1 q^2 = a_1(1 + q^2) = 10 \quad \cdots (1)$$

$$a_2 + a_4 = a_1 q + a_1 q^3 = a_1 q(1 + q^2) = 20 \quad \cdots (2)$$

$(2) \div (1)$ 得：

$$\frac{a_1 q(1 + q^2)}{a_1(1 + q^2)} = \frac{20}{10}$$

$$q = 2$$

**第2步：** 求首项 $a_1$
> 📌 运用知识点：等比数列通项公式

将 $q = 2$ 代入 $(1)$：

$$a_1(1 + 4) = 10 \implies a_1 = 2$$

**第3步：** 求 $S_5$
> 📌 运用知识点：等比数列前 $n$ 项和

$$S_5 = \frac{a_1(1 - q^5)}{1 - q} = \frac{2 \times (1 - 2^5)}{1 - 2} = \frac{2 \times (1 - 32)}{-1} = \frac{2 \times (-31)}{-1} = 62$$

**💡 解题思路总结：** 当已知条件涉及等比数列的多项组合时，将各项用 $a_1$ 和 $q$ 表示后做除法，可以巧妙消去公共因子，直接求出公比。

