---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 4
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 甲、乙两人独立地破译一个密码，甲能破译的概率为 $0.6$，乙能破译的概率为 $0.5$。求：

(1) 两人都能破译的概率；

(2) 密码被破译的概率。

---

**解答：**

**第1步：** (1) 两人都能破译
> 📌 运用知识点：事件的相互独立性

甲、乙独立工作，

$P(\text{都破译}) = P(A) \times P(B) = 0.6 \times 0.5 = 0.3$

**第2步：** (2) 密码被破译
> 📌 运用知识点：事件的相互独立性

"密码被破译" = "至少一人破译"

对立事件："两人都没破译"

$P(\text{都没破译}) = (1-0.6) \times (1-0.5) = 0.4 \times 0.5 = 0.2$

$P(\text{密码被破译}) = 1 - 0.2 = 0.8$

**💡 易错提醒：** "密码被破译"不等于"两人都破译"，而是"至少一人破译"。用对立事件法更简便。

**💡 解题思路总结：** 独立事件中，"至少"问题用对立事件法：$P(\text{至少一个发生}) = 1 - P(\text{都不发生})$。
