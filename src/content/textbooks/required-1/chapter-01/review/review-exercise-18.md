---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P11 复习"
---

**题目：** 已知全集 $U = \mathbb{R}$，$A = \{x \mid x^2 - 4x + 3 < 0\}$，$B = \{x \mid x^2 - 2x - 8 \leqslant 0\}$。

求：(1) $A$；(2) $A \cap B$；(3) $\complement_U(A \cup B)$。

---

**解答：**

**第1步：** 求集合 $A$
> 📌 运用知识点：一元二次不等式

$x^2 - 4x + 3 < 0$

$(x - 1)(x - 3) < 0$

$$A = \{x \mid 1 < x < 3\}$$

**第2步：** 求集合 $B$
> 📌 运用知识点：一元二次不等式

$x^2 - 2x - 8 \leqslant 0$

$(x - 4)(x + 2) \leqslant 0$

$$B = \{x \mid -2 \leqslant x \leqslant 4\}$$

**第3步：** 求 $A \cap B$
> 📌 运用知识点：交集

取同时满足 $1 < x < 3$ 和 $-2 \leqslant x \leqslant 4$ 的部分。

$$A \cap B = \{x \mid 1 < x < 3\} = A$$

（因为 $A \subseteq B$）

**第4步：** 求 $\complement_U(A \cup B)$
> 📌 运用知识点：并集与补集

$A \cup B = \{x \mid -2 \leqslant x \leqslant 4\} = B$（因为 $A \subseteq B$）。

$$\complement_U(A \cup B) = \{x \mid x < -2 \text{ 或 } x > 4\}$$

**⚠️ 易错提醒：** 解一元二次不等式时注意开口方向和端点开闭。当 $A \subseteq B$ 时，$A \cap B = A$，$A \cup B = B$。

**💡 解题思路总结：** 先解不等式确定各集合，再借助数轴求交并补运算。
