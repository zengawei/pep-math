---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 3
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 甲、乙两人独立地破译一个密码，甲能破译的概率为 $0.6$，乙能破译的概率为 $0.5$。求：

(1) 两人都能破译的概率；(2) 至少有一人能破译的概率。

---

**解答：**

**第1步：** 求两人都能破译的概率
> 📌 运用知识点：事件的相互独立性

甲、乙独立工作，设 $A$ = "甲破译"，$B$ = "乙破译"。

$P(A) = 0.6$，$P(B) = 0.5$

$P(AB) = P(A) \times P(B) = 0.6 \times 0.5 = 0.3$

**第2步：** 求至少有一人能破译的概率
> 📌 运用知识点：事件的相互独立性

"至少一人破译"的对立事件是"两人都不能破译"。

$P(\bar{A}) = 1 - 0.6 = 0.4$，$P(\bar{B}) = 1 - 0.5 = 0.5$

$P(\bar{A}\bar{B}) = P(\bar{A}) \times P(\bar{B}) = 0.4 \times 0.5 = 0.2$

$P(\text{至少一人破译}) = 1 - P(\bar{A}\bar{B}) = 1 - 0.2 = 0.8$

**💡 易错提醒：** "至少有一个"类问题通常用对立事件（"一个都没有"）来算更简便。注意独立性判断：甲是否破译不影响乙是否破译，才能用乘法公式。

**💡 解题思路总结：** 独立事件同时发生用乘法 $P(AB) = P(A) \cdot P(B)$；"至少一个"问题优先用对立事件：$P(\text{至少一个}) = 1 - P(\text{都没有})$。
