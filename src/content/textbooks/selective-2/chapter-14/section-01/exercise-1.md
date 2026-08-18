---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 1
difficulty: basic
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "自编"
references: "课标14.1.1"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \dfrac{n}{n+1}$。

(1) 求该数列的前 $5$ 项。

(2) 判断该数列的增减性，并说明理由。

---

**解答：**

**第1步：** 求前5项
> 📌 运用知识点：数列的通项公式

将 $n = 1, 2, 3, 4, 5$ 分别代入 $a_n = \dfrac{n}{n+1}$：

$$a_1 = \frac{1}{2}, \quad a_2 = \frac{2}{3}, \quad a_3 = \frac{3}{4}, \quad a_4 = \frac{4}{5}, \quad a_5 = \frac{5}{6}$$

**第2步：** 判断增减性
> 📌 运用知识点：数列的增减性判断

**方法：作差法。** 计算 $a_{n+1} - a_n$：

$$a_{n+1} - a_n = \frac{n+1}{n+2} - \frac{n}{n+1} = \frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)} = \frac{n^2 + 2n + 1 - n^2 - 2n}{(n+1)(n+2)} = \frac{1}{(n+1)(n+2)}$$

因为 $n \in \mathbb{N}^*$，所以 $(n+1)(n+2) > 0$，从而 $a_{n+1} - a_n > 0$，即 $a_{n+1} > a_n$。

所以数列 $\{a_n\}$ 是**递增数列**。

**💡 解题思路总结：** 已知通项公式求各项，直接代入即可。判断增减性用"作差法"——计算 $a_{n+1} - a_n$ 并判断其正负，这是最基本的方法。

