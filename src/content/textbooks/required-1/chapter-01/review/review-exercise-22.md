---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 22
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P20 复习B组"
---

**题目：** 已知集合 $A = \{x \mid -2 \leqslant x \leqslant 5\}$，$B = \{x \mid m - 1 \leqslant x \leqslant 2m + 1\}$。

(1) 若 $A \cap B = B$，求 $m$ 的取值范围；

(2) 若 $A \cup B = A$，求 $m$ 的取值范围。

---

**解答：**

**第1步：** 分析第 (1) 题条件
> 📌 运用知识点：交集与子集的关系

$A \cap B = B$ 等价于 $B \subseteq A$。

**第2步：** 第 (1) 题——$B = \varnothing$
> 📌 运用知识点：空集

当 $m - 1 > 2m + 1$，即 $m < -2$ 时，$B = \varnothing \subseteq A$。✓

**第3步：** 第 (1) 题——$B \neq \varnothing$
> 📌 运用知识点：子集与区间

当 $m \geqslant -2$ 时，$B \neq \varnothing$。要使 $B \subseteq A$：

$$\begin{cases} m - 1 \geqslant -2 \\ 2m + 1 \leqslant 5 \end{cases}$$

$m \geqslant -1$ 且 $m \leqslant 2$。

结合 $m \geqslant -2$，得 $-1 \leqslant m \leqslant 2$。

**第4步：** 第 (1) 题汇总

$m < -2$ 或 $-1 \leqslant m \leqslant 2$。

$$m \in (-\infty, -2) \cup [-1, 2]$$

**第5步：** 分析第 (2) 题条件
> 📌 运用知识点：并集与子集的关系

$A \cup B = A$ 等价于 $B \subseteq A$，与第 (1) 题条件相同。

$$m \in (-\infty, -2) \cup [-1, 2]$$

**⚠️ 易错提醒：** $A \cap B = B \Leftrightarrow B \subseteq A$ 和 $A \cup B = A \Leftrightarrow B \subseteq A$，这两个等价关系要牢记。两小题答案相同，但推理过程不同。

**💡 解题思路总结：** 集合等式转包含关系：$A \cap B = B \Leftrightarrow A \cup B = A \Leftrightarrow B \subseteq A$。含参区间包含问题先讨论空集。
