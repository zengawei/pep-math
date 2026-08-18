---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 21
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

**题目：** 已知集合 $A = \{x \mid x^2 - ax + a^2 - 19 = 0\}$，$B = \{x \mid x^2 - 5x + 6 = 0\}$，$C = \{x \mid x^2 + 2x - 8 = 0\}$。

若 $A \cap B \neq \varnothing$ 且 $A \cap C = \varnothing$，求实数 $a$ 的值。

---

**解答：**

**第1步：** 确定集合 $B$ 和 $C$
> 📌 运用知识点：列举法

$B$：$x^2 - 5x + 6 = 0$，$(x-2)(x-3) = 0$，$B = \{2, 3\}$。

$C$：$x^2 + 2x - 8 = 0$，$(x+4)(x-2) = 0$，$C = \{-4, 2\}$。

**第2步：** 分析条件
> 📌 运用知识点：交集

$A \cap B \neq \varnothing$：$A$ 与 $B$ 有公共元素，即 $2 \in A$ 或 $3 \in A$。

$A \cap C = \varnothing$：$A$ 与 $C$ 无公共元素，即 $-4 \notin A$ 且 $2 \notin A$。

**第3步：** 综合两个条件
> 📌 运用知识点：逻辑推理

由 $A \cap C = \varnothing$，得 $2 \notin A$。

由 $A \cap B \neq \varnothing$ 且 $2 \notin A$，得 $3 \in A$。

**第4步：** 利用 $3 \in A$ 求 $a$
> 📌 运用知识点：元素与集合的关系

$3$ 是方程 $x^2 - ax + a^2 - 19 = 0$ 的根：

$9 - 3a + a^2 - 19 = 0$

$a^2 - 3a - 10 = 0$

$(a - 5)(a + 2) = 0$

$a = 5$ 或 $a = -2$。

**第5步：** 验证
> 📌 运用知识点：互异性、交集

**$a = 5$：** 方程为 $x^2 - 5x + 6 = 0$，$A = \{2, 3\}$。

但 $2 \in A$，而 $2 \in C$，所以 $A \cap C \neq \varnothing$。矛盾，舍去。

**$a = -2$：** 方程为 $x^2 + 2x - 15 = 0$，$(x+5)(x-3) = 0$，$A = \{-5, 3\}$。

$A \cap B = \{3\} \neq \varnothing$ ✓

$A \cap C = \varnothing$（$-5 \notin C$，$3 \notin C$）✓

$$a = -2$$

**⚠️ 易错提醒：** 求出 $a$ 后必须代回验证所有条件。$a = 5$ 看似满足但导致 $A \cap C \neq \varnothing$，需要排除。

**💡 解题思路总结：** 多条件集合问题：①先化简已知集合；②利用条件间的逻辑关系缩小范围；③求出参数后代回逐一验证。
