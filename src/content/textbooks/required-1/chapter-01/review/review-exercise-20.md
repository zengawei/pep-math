---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P15 复习"
---

**题目：** 已知全集 $U = \{x \mid -5 \leqslant x \leqslant 5\}$，$A = \{x \mid -3 \leqslant x < -1\}$，$B = \{x \mid -1 < x \leqslant 3\}$。

求：(1) $A \cup B$；(2) $A \cap B$；(3) $\complement_U A$；(4) $(\complement_U A) \cap B$。

---

**解答：**

**第1步：** 求 $A \cup B$
> 📌 运用知识点：并集

$A$ 覆盖 $[-3, -1)$，$B$ 覆盖 $(-1, 3]$，中间缺 $x = -1$。

$$A \cup B = \{x \mid -3 \leqslant x \leqslant 3,\ x \neq -1\}$$

**第2步：** 求 $A \cap B$
> 📌 运用知识点：交集

$A$ 中 $x < -1$，$B$ 中 $x > -1$，没有公共元素。

$$A \cap B = \varnothing$$

**第3步：** 求 $\complement_U A$
> 📌 运用知识点：补集

$U$ 中不属于 $A = [-3, -1)$ 的部分：

$$\complement_U A = \{x \mid -5 \leqslant x < -3 \text{ 或 } -1 \leqslant x \leqslant 5\}$$

**第4步：** 求 $(\complement_U A) \cap B$
> 📌 运用知识点：交集

取同时满足 "$-5 \leqslant x < -3$ 或 $-1 \leqslant x \leqslant 5$" 和 "$-1 < x \leqslant 3$" 的部分。

$-5 \leqslant x < -3$ 与 $-1 < x \leqslant 3$ 无交集。

$-1 \leqslant x \leqslant 5$ 与 $-1 < x \leqslant 3$ 的交集为 $-1 < x \leqslant 3$。

$$(\complement_U A) \cap B = \{x \mid -1 < x \leqslant 3\} = B$$

**⚠️ 易错提醒：** $A$ 和 $B$ 在 $x = -1$ 处都是开区间，所以 $A \cup B$ 中 $x = -1$ 不在并集中。

**💡 解题思路总结：** 端点分析是关键。借助数轴标注各集合的范围，特别注意"断点"（如 $x = -1$）。
