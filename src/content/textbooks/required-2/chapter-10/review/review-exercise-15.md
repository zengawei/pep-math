---
type: exercise
textbook: required-2
chapter: 10
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 某射手每次射击命中目标的概率为 $0.6$，各次射击相互独立。求该射手射击 $3$ 次，至少命中 $1$ 次的概率。

---

**解答：**

**第1步：** 利用对立事件
> 📌 运用知识点：事件的相互独立性

对立事件："$3$ 次都没命中"

$P(\text{3次都不中}) = (1-0.6)^3 = 0.4^3 = 0.064$

$P(\text{至少1次命中}) = 1 - 0.064 = 0.936$

**💡 易错提醒：** 多次独立重复试验中，$n$ 次都不发生的概率为 $(1-p)^n$。

**💡 解题思路总结：** $n$ 次独立重复试验中至少一次发生的概率：$P = 1 - (1-p)^n$。
