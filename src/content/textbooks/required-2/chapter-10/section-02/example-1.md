---
type: example
textbook: required-2
chapter: 10
section: 2
number: 1
knowledge_points:
  - event-independence
  - random-event-probability
---

**例题：** 某电路系统中有两个元件 $A, B$ 独立工作。$A$ 正常工作的概率为 $0.9$，$B$ 正常工作的概率为 $0.8$。求：

(1) 两个元件都正常工作的概率；
(2) 至少有一个元件正常工作的概率。

**解答：**

**第1步：** (1) 都正常工作
> 📌 运用知识点：事件的相互独立性

$A, B$ 独立工作，$P(AB) = P(A) \times P(B) = 0.9 \times 0.8 = 0.72$

**第2步：** (2) 至少一个正常
> 📌 运用知识点：随机事件与概率

对立事件：两个都不正常。

$P(\bar{A}\bar{B}) = P(\bar{A}) \times P(\bar{B}) = 0.1 \times 0.2 = 0.02$

$P(\text{至少一个正常}) = 1 - 0.02 = 0.98$
