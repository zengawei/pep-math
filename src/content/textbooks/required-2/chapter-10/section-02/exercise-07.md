---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 7
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 抛掷一枚硬币 $3$ 次，设每次正面朝上的概率为 $\frac{1}{2}$，各次结果相互独立。求：

(1) $3$ 次都是正面朝上的概率；

(2) 至少有一次正面朝上的概率。

---

**解答：**

**第1步：** (1) $3$ 次都正面朝上
> 📌 运用知识点：事件的相互独立性

$P(\text{3次正面}) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$

**第2步：** (2) 至少一次正面朝上
> 📌 运用知识点：事件的相互独立性

对立事件："$3$ 次都是反面朝上"

$P(\text{3次反面}) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$

$P(\text{至少1次正面}) = 1 - \frac{1}{8} = \frac{7}{8}$

**💡 易错提醒：** 多次独立重复试验中，$n$ 次都发生的概率为 $p^n$。"至少一次"用对立事件法。

**💡 解题思路总结：** 独立重复试验：$P(n\text{次都发生}) = p^n$；$P(\text{至少一次}) = 1 - (1-p)^n$。
