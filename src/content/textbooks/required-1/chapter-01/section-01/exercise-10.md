---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P15 习题1.1 B组"
---

**题目：** 已知集合 $A = \{x \mid -2 \leqslant x \leqslant 5\}$，$B = \{x \mid m + 1 \leqslant x \leqslant 2m - 1\}$。

(1) 若 $B \subseteq A$，求实数 $m$ 的取值范围；

(2) 若 $A \cap B = \varnothing$，求实数 $m$ 的取值范围。

---

**解答：**

**第1步：** 第 (1) 题——$B \subseteq A$ 的情况一：$B = \varnothing$
> 📌 运用知识点：子集的定义、空集的性质

当 $m + 1 > 2m - 1$，即 $m < 2$ 时，$B = \varnothing$。

空集是任何集合的子集，所以 $B \subseteq A$ 成立。✓

**第2步：** 第 (1) 题——$B \subseteq A$ 的情况二：$B \neq \varnothing$
> 📌 运用知识点：子集的定义

当 $m \geqslant 2$ 时，$B \neq \varnothing$。

要使 $B \subseteq A$，需要：

$$\begin{cases} m + 1 \geqslant -2 \\ 2m - 1 \leqslant 5 \end{cases}$$

由 $m + 1 \geqslant -2$，得 $m \geqslant -3$。

由 $2m - 1 \leqslant 5$，得 $m \leqslant 3$。

结合 $m \geqslant 2$，得 $2 \leqslant m \leqslant 3$。

**第3步：** 第 (1) 题汇总

综合两种情况，$m < 2$ 或 $2 \leqslant m \leqslant 3$，即 $m \leqslant 3$。

$$m \in (-\infty, 3]$$

**第4步：** 第 (2) 题——$A \cap B = \varnothing$ 的情况一：$B = \varnothing$
> 📌 运用知识点：空集的性质

当 $m < 2$ 时，$B = \varnothing$，$A \cap B = \varnothing$ 成立。✓

**第5步：** 第 (2) 题——$A \cap B = \varnothing$ 的情况二：$B \neq \varnothing$
> 📌 运用知识点：交集的定义

当 $m \geqslant 2$ 时，$B \neq \varnothing$，要使 $A \cap B = \varnothing$，需要 $B$ 完全在 $A$ 的左侧或右侧。

**$B$ 在 $A$ 左侧：** $2m - 1 < -2$，即 $m < -\dfrac{1}{2}$，与 $m \geqslant 2$ 矛盾。

**$B$ 在 $A$ 右侧：** $m + 1 > 5$，即 $m > 4$。结合 $m \geqslant 2$，得 $m > 4$。

**第6步：** 第 (2) 题汇总

综合两种情况，$m < 2$ 或 $m > 4$。

$$m \in (-\infty, 2) \cup (4, +\infty)$$

**⚠️ 易错提醒：** 含参数的区间集合问题，必须先讨论 $B = \varnothing$ 的情况（即区间左端大于右端），这是最容易遗漏的情况。

**💡 解题思路总结：** 含参数区间集合问题，分三步：①讨论空集情况；②非空时利用数轴分析包含/不相交关系；③合并结果。数形结合是关键。
