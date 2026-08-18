---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 3
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
source: "人教A版2019"
references: "课标17.1.3"
---

**题目：** 甲、乙两人独立地解答同一道数学题。甲解出这道题的概率为 $0.8$，乙解出这道题的概率为 $0.6$。

(1) 求两人都解出这道题的概率。

(2) 求至少有一人解出这道题的概率。

(3) 在已知至少有一人解出的条件下，求两人都解出的概率。

---

**解答：**

**第1步：** 求两人都解出的概率
> 📌 运用知识点：独立事件的乘法公式

设事件 $A$ = "甲解出"，事件 $B$ = "乙解出"。因为甲、乙独立解题，所以 $A$ 与 $B$ 相互独立：

$$P(AB) = P(A) \cdot P(B) = 0.8 \times 0.6 = 0.48$$

**第2步：** 求至少有一人解出的概率
> 📌 运用知识点：对立事件、概率加法公式

设事件 $C$ = "至少有一人解出"，则 $\overline{C}$ = "两人都未解出"。

$$P(\overline{A}) = 1 - 0.8 = 0.2, \quad P(\overline{B}) = 1 - 0.6 = 0.4$$

因为 $\overline{A}$ 与 $\overline{B}$ 也相互独立：

$$P(\overline{C}) = P(\overline{A} \cdot \overline{B}) = P(\overline{A}) \cdot P(\overline{B}) = 0.2 \times 0.4 = 0.08$$

$$P(C) = 1 - P(\overline{C}) = 1 - 0.08 = 0.92$$

**第3步：** 在至少有一人解出的条件下，两人都解出的概率
> 📌 运用知识点：条件概率

注意 $AB \subseteq C$（两人都解出 $\Rightarrow$ 至少有一人解出），所以 $AB \cap C = AB$。由条件概率公式：

$$P(AB|C) = \frac{P(AB \cap C)}{P(C)} = \frac{P(AB)}{P(C)} = \frac{0.48}{0.92} = \frac{48}{92} = \frac{12}{23} \approx 0.522$$

所以在已知至少有一人解出的条件下，两人都解出的概率约为 $52.2\%$。

**💡 解题思路总结：** "至少有一个"类问题常用对立事件法（$P = 1 - P(\text{都不})$）简化计算。条件概率中注意判断事件的包含关系——"都解出"是"至少一人解出"的子事件，因此交集就是"都解出"本身。
