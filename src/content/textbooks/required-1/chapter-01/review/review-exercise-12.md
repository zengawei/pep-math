---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 12
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P12 复习"
---

**题目：** 已知全集 $U = \mathbb{R}$，$A = \{x \mid -1 \leqslant x < 3\}$，$B = \{x \mid 0 < x \leqslant 5\}$。

求：(1) $A \cap B$；(2) $A \cup B$；(3) $\complement_U A$；(4) $(\complement_U A) \cap B$。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集

取同时满足 $-1 \leqslant x < 3$ 和 $0 < x \leqslant 5$ 的部分。

$$A \cap B = \{x \mid 0 < x < 3\}$$

**第2步：** 求 $A \cup B$
> 📌 运用知识点：并集

取满足 $-1 \leqslant x < 3$ 或 $0 < x \leqslant 5$ 的部分。

$$A \cup B = \{x \mid -1 \leqslant x \leqslant 5\}$$

**第3步：** 求 $\complement_U A$
> 📌 运用知识点：补集

$$\complement_U A = \{x \mid x < -1 \text{ 或 } x \geqslant 3\}$$

**第4步：** 求 $(\complement_U A) \cap B$
> 📌 运用知识点：交集与补集的综合

取同时满足 "$x < -1$ 或 $x \geqslant 3$" 和 "$0 < x \leqslant 5$" 的部分。

$x < -1$ 与 $0 < x \leqslant 5$ 无交集。

$x \geqslant 3$ 与 $0 < x \leqslant 5$ 的交集为 $3 \leqslant x \leqslant 5$。

$$(\complement_U A) \cap B = \{x \mid 3 \leqslant x \leqslant 5\}$$

**⚠️ 易错提醒：** 端点开闭要特别注意：$A$ 中 $-1$ 是闭的、$3$ 是开的，取补后 $-1$ 变开、$3$ 变闭。

**💡 解题思路总结：** 不等式型集合运算借助数轴分析，特别注意端点开闭的变化。
