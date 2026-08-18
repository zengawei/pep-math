---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P7 复习"
---

**题目：** 已知集合 $A = \{x \mid x = 3k, k \in \mathbb{Z}\}$，$B = \{x \mid x = 6k, k \in \mathbb{Z}\}$。

判断 $A$ 与 $B$ 的包含关系，并说明理由。

---

**解答：**

**第1步：** 分析集合 $A$ 和 $B$ 的含义
> 📌 运用知识点：描述法

$A = \{x \mid x = 3k, k \in \mathbb{Z}\}$ 是所有 $3$ 的倍数组成的集合：

$$A = \{\ldots, -9, -6, -3, 0, 3, 6, 9, \ldots\}$$

$B = \{x \mid x = 6k, k \in \mathbb{Z}\}$ 是所有 $6$ 的倍数组成的集合：

$$B = \{\ldots, -12, -6, 0, 6, 12, \ldots\}$$

**第2步：** 判断包含关系
> 📌 运用知识点：子集

$B$ 中的元素 $6k = 3 \times (2k)$，因为 $2k$ 是整数，所以 $6k$ 也是 $3$ 的倍数。

即 $B$ 的每个元素都属于 $A$，所以 $B \subseteq A$。

但 $3 \in A$（$k = 1$），$3 \notin B$（$3$ 不是 $6$ 的倍数），所以 $B \neq A$。

$$B \subsetneq A$$

**⚠️ 易错提醒：** 判断 $B \subseteq A$ 时，要证明 $B$ 的"任意"元素都属于 $A$；判断 $B \subsetneq A$ 时，还要举出 $A$ 中不属于 $B$ 的反例。

**💡 解题思路总结：** 判断数集的包含关系：①理解集合的含义（哪些数）；②证明包含（任意元素验证）；③举反例证明真子集。
