---
type: exercise
textbook: required-2
chapter: 10
section: 1
number: 4
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - random-event-probability
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 掷一枚骰子，设事件 $A$ = "出现偶数点"，事件 $B$ = "出现 $3$ 的倍数"。求 $P(A)$，$P(B)$，$P(A \cup B)$。

---

**解答：**

**第1步：** 求 $P(A)$
> 📌 运用知识点：随机事件的概率

样本空间 $\Omega = \{1, 2, 3, 4, 5, 6\}$

$A = \{2, 4, 6\}$，$P(A) = \frac{3}{6} = \frac{1}{2}$

**第2步：** 求 $P(B)$
> 📌 运用知识点：随机事件的概率

$B = \{3, 6\}$，$P(B) = \frac{2}{6} = \frac{1}{3}$

**第3步：** 求 $P(A \cup B)$
> 📌 运用知识点：随机事件的概率

$A \cup B = \{2, 3, 4, 6\}$，$P(A \cup B) = \frac{4}{6} = \frac{2}{3}$

验证：$A \cap B = \{6\}$，$P(A \cap B) = \frac{1}{6}$

$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{1}{2} + \frac{1}{3} - \frac{1}{6} = \frac{2}{3}$ ✓

**💡 易错提醒：** 事件 $A$ 和 $B$ 不互斥时，$P(A \cup B) = P(A) + P(B) - P(A \cap B)$，不能直接相加。

**💡 解题思路总结：** 古典概型中先列出事件包含的基本事件，再计算概率。注意判断事件是否互斥。
