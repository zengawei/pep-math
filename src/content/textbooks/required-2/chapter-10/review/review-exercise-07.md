---
type: exercise
textbook: required-2
chapter: 10
section: 0
number: 7
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 从一副扑克牌（$52$ 张，不含大小王）中随机抽 $1$ 张，求抽到 $K$ 或红牌的概率。

---

**解答：**

**第1步：** 确定各事件
> 📌 运用知识点：随机事件的概率

$K$ 有 $4$ 张，红牌有 $26$ 张，$K$ 中的红牌（红心 $K$、方块 $K$）有 $2$ 张。

$P(K) = \frac{4}{52}$，$P(\text{红牌}) = \frac{26}{52}$，$P(K \cap \text{红牌}) = \frac{2}{52}$

**第2步：** 利用加法公式
> 📌 运用知识点：随机事件的概率

$P(K \cup \text{红牌}) = P(K) + P(\text{红牌}) - P(K \cap \text{红牌}) = \frac{4+26-2}{52} = \frac{28}{52} = \frac{7}{13}$

**💡 易错提醒：** $K$ 和红牌不互斥（有 $2$ 张红色 $K$），不能直接相加，需减去交集。

**💡 解题思路总结：** 不互斥事件：$P(A \cup B) = P(A) + P(B) - P(A \cap B)$。
