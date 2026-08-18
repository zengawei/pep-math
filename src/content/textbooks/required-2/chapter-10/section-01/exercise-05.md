---
type: exercise
textbook: required-2
chapter: 10
section: 1
number: 5
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 一个袋中装有 $2$ 个红球和 $3$ 个白球，从中随机取出 $1$ 个球。设事件 $A$ = "取出红球"，事件 $B$ = "取出白球"。判断 $A$ 与 $B$ 的关系，并求 $P(A)$ 和 $P(B)$。

---

**解答：**

**第1步：** 判断事件关系
> 📌 运用知识点：随机事件的概率

$A$ 与 $B$ 不能同时发生（$A \cap B = \emptyset$），所以 $A$ 与 $B$ 互斥。

又 $A \cup B$ 为必然事件（取出的球一定是红色或白色），所以 $A$ 与 $B$ 互为对立事件。

**第2步：** 求概率
> 📌 运用知识点：随机事件的概率

$P(A) = \frac{2}{5}$，$P(B) = \frac{3}{5}$

验证：$P(A) + P(B) = \frac{2}{5} + \frac{3}{5} = 1$ ✓

**💡 易错提醒：** 对立事件一定是互斥事件，但互斥事件不一定是对立事件。对立事件要求 $A \cap B = \emptyset$ 且 $A \cup B = \Omega$。

**💡 解题思路总结：** 对立事件满足：$P(A) + P(\bar{A}) = 1$，即 $P(\bar{A}) = 1 - P(A)$。
