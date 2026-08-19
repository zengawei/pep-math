---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "人教A版2019"
references: "课标14.1.2"
---

**题目：** 已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$a_{n+1} = \dfrac{a_n}{1 + a_n}$（$n \in \mathbb{N}^*$）。

(1) 求 $a_2, a_3, a_4$ 的值。

(2) 根据 (1) 的结果，猜想数列 $\{a_n\}$ 的通项公式。

---

**解答：**

**第1步：** 逐项计算
> 📌 运用知识点：递推公式

由 $a_1 = 1$，$a_{n+1} = \dfrac{a_n}{1 + a_n}$：

$$a_2 = \frac{a_1}{1 + a_1} = \frac{1}{1 + 1} = \frac{1}{2}$$

$$a_3 = \frac{a_2}{1 + a_2} = \frac{\dfrac{1}{2}}{1 + \dfrac{1}{2}} = \frac{\dfrac{1}{2}}{\dfrac{3}{2}} = \frac{1}{3}$$

$$a_4 = \frac{a_3}{1 + a_3} = \frac{\dfrac{1}{3}}{1 + \dfrac{1}{3}} = \frac{\dfrac{1}{3}}{\dfrac{4}{3}} = \frac{1}{4}$$

**第2步：** 猜想通项公式
> 📌 运用知识点：数列通项公式的猜想

观察计算结果：

$$a_1 = 1 = \frac{1}{1}, \quad a_2 = \frac{1}{2}, \quad a_3 = \frac{1}{3}, \quad a_4 = \frac{1}{4}$$

由此猜想数列的通项公式为：

$$\boxed{a_n = \frac{1}{n}}$$

**💡 解题思路总结：** 利用递推公式求数列各项时，只需将前一项的值代入递推关系即可。猜想通项公式时，将各项写成统一形式，观察分子分母的规律。注意：猜想出的公式需要用数学归纳法证明（后续章节学习）。

