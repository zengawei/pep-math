---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 13
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

**题目：** 已知集合 $A = \{x \mid x^2 - 5x + 6 = 0\}$，$B = \{x \mid mx - 6 = 0\}$，若 $B \subseteq A$，求实数 $m$ 的值。

---

**解答：**

**第1步：** 确定集合 $A$
> 📌 运用知识点：列举法

解方程 $x^2 - 5x + 6 = 0$：

$(x - 2)(x - 3) = 0$，$x = 2$ 或 $x = 3$。

$$A = \{2, 3\}$$

**第2步：** 分析 $B \subseteq A$
> 📌 运用知识点：子集的定义

$B \subseteq A$ 意味着 $B$ 的元素只能取自 $\{2, 3\}$。

$B$ 的可能情况：$\varnothing$、$\{2\}$、$\{3\}$。

**第3步：** 分类讨论

**情况一：** $B = \varnothing$

当 $m = 0$ 时，方程 $mx - 6 = 0$ 变为 $-6 = 0$，无解，$B = \varnothing \subseteq A$。✓

**情况二：** $B = \{2\}$

$2$ 是方程 $mx - 6 = 0$ 的根：$2m - 6 = 0$，$m = 3$。

验证：$3x - 6 = 0$，$x = 2$，$B = \{2\} \subseteq A$。✓

**情况三：** $B = \{3\}$

$3$ 是方程 $mx - 6 = 0$ 的根：$3m - 6 = 0$，$m = 2$。

验证：$2x - 6 = 0$，$x = 3$，$B = \{3\} \subseteq A$。✓

**第4步：** 汇总结果

$$m = 0 \text{ 或 } m = 2 \text{ 或 } m = 3$$

**⚠️ 易错提醒：** $m = 0$ 使方程退化（不是关于 $x$ 的一次方程），导致 $B = \varnothing$，这种情况极易遗漏。

**💡 解题思路总结：** 含参集合包含问题：①化简已知集合；②讨论 $B = \varnothing$；③讨论 $B$ 为 $A$ 的各非空子集；④代回验证。
