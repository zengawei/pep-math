---
type: exercise
textbook: required-2
chapter: 10
section: 2
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 某系统由两个独立工作的元件 $A, B$ 组成。$A$ 正常工作的概率为 $0.95$，$B$ 正常工作的概率为 $0.90$。

(1) 求系统正常工作的概率（$A, B$ 都正常时系统才正常，即串联）；

(2) 若改为并联（$A, B$ 至少一个正常时系统正常），求系统正常工作的概率。

---

**解答：**

**第1步：** (1) 串联系统
> 📌 运用知识点：事件的相互独立性

串联需要 $A, B$ 都正常：

$P(\text{串联正常}) = P(A) \times P(B) = 0.95 \times 0.90 = 0.855$

**第2步：** (2) 并联系统
> 📌 运用知识点：事件的相互独立性

并联需要至少一个正常，对立事件为"都不正常"：

$P(\text{都不正常}) = (1-0.95) \times (1-0.90) = 0.05 \times 0.10 = 0.005$

$P(\text{并联正常}) = 1 - 0.005 = 0.995$

**💡 易错提醒：** 串联和并联的概率计算不同：串联用乘法（都要正常），并联用对立事件法（至少一个正常）。

**💡 解题思路总结：** 系统可靠性：串联 $P = P(A) \cdot P(B)$；并联 $P = 1 - P(\bar{A}) \cdot P(\bar{B})$。
