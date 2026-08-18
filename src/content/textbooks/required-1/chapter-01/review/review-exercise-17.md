---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P14 复习"
---

**题目：** 已知集合 $A = \{x \mid -1 < x < 4\}$，$B = \{x \mid 2a \leqslant x \leqslant a + 3\}$。

(1) 当 $a = 1$ 时，求 $A \cap B$ 和 $A \cup B$；

(2) 若 $B \subseteq A$，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 第 (1) 题——$a = 1$ 时求运算
> 📌 运用知识点：交集与并集

当 $a = 1$ 时，$B = \{x \mid 2 \leqslant x \leqslant 4\}$。

$A = \{x \mid -1 < x < 4\}$。

$$A \cap B = \{x \mid 2 \leqslant x < 4\}$$

$$A \cup B = \{x \mid -1 < x \leqslant 4\}$$

**第2步：** 第 (2) 题——$B = \varnothing$ 的情况
> 📌 运用知识点：空集

当 $2a > a + 3$，即 $a > 3$ 时，$B = \varnothing \subseteq A$。✓

**第3步：** 第 (2) 题——$B \neq \varnothing$ 的情况
> 📌 运用知识点：子集与区间的关系

当 $a \leqslant 3$ 时，$B \neq \varnothing$。要使 $B \subseteq A$，需要：

$$\begin{cases} 2a > -1 \\ a + 3 < 4 \end{cases}$$

由 $2a > -1$，得 $a > -\dfrac{1}{2}$。

由 $a + 3 < 4$，得 $a < 1$。

结合 $a \leqslant 3$，得 $-\dfrac{1}{2} < a < 1$。

**第4步：** 汇总结果

$a > 3$ 或 $-\dfrac{1}{2} < a < 1$。

$$a \in \left(-\dfrac{1}{2}, 1\right) \cup (3, +\infty)$$

**⚠️ 易错提醒：** $B \subseteq A$ 时，先讨论 $B = \varnothing$（$a > 3$），再讨论 $B \neq \varnothing$ 时端点的严格不等号（$A$ 的端点是开的）。

**💡 解题思路总结：** 含参区间包含问题：①讨论空集；②非空时利用数轴确定端点关系；③注意开闭区间的影响。
