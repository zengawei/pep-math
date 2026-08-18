---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 6
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 甲、乙、丙三人独立地向同一目标射击，甲命中概率为 $0.7$，乙命中概率为 $0.6$，丙命中概率为 $0.5$。求目标被命中的概率。

---

**解答：**

**第1步：** 利用对立事件
> 📌 运用知识点：事件的相互独立性

"目标被命中"的对立事件是"三人都未命中"。

$P(\text{甲不中}) = 1 - 0.7 = 0.3$

$P(\text{乙不中}) = 1 - 0.6 = 0.4$

$P(\text{丙不中}) = 1 - 0.5 = 0.5$

**第2步：** 计算
> 📌 运用知识点：事件的相互独立性

三人独立射击，$P(\text{都不中}) = 0.3 \times 0.4 \times 0.5 = 0.06$

$P(\text{目标被命中}) = 1 - 0.06 = 0.94$

**💡 易错提醒：** 多人独立射击时，"目标被命中" = "至少一人命中"，用对立事件法最简便。

**💡 解题思路总结：** 多个独立事件的"至少"问题：$P(\text{至少一个发生}) = 1 - P(\text{都不发生})$。
