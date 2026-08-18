---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
source: "人教A版2019"
references: "课标14.3.1"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_1 = 2$，公比 $q = 3$。

(1) 求通项公式 $a_n$；

(2) 求前 $5$ 项和 $S_5$。

---

**解答：**

**第1步：** 求通项公式
> 📌 运用知识点：等比数列通项公式

由等比数列通项公式 $a_n = a_1 \cdot q^{n-1}$，代入 $a_1 = 2$，$q = 3$：

$$a_n = 2 \cdot 3^{n-1}$$

**第2步：** 求前 $5$ 项和
> 📌 运用知识点：等比数列前 $n$ 项和

因为 $q = 3 \neq 1$，使用公式 $S_n = \dfrac{a_1(1 - q^n)}{1 - q}$：

$$S_5 = \frac{2 \times (1 - 3^5)}{1 - 3} = \frac{2 \times (1 - 243)}{-2} = \frac{2 \times (-242)}{-2} = 242$$

**验证：** $a_1 + a_2 + a_3 + a_4 + a_5 = 2 + 6 + 18 + 54 + 162 = 242$ ✓

**💡 解题思路总结：** 等比数列的基本计算，关键是熟记通项公式 $a_n = a_1 q^{n-1}$ 和前 $n$ 项和公式，注意 $q \neq 1$ 的条件。

