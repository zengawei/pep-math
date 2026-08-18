---
type: example
textbook: required-1
chapter: 1
section: 1
number: 4
knowledge_points:
  - set-concept
  - set-operations
source: "人教A版2019"
references: "必修第一册 P14 例6"
---

**例题：** 已知集合 $A = \{x \mid x^2 - 2x - 3 = 0\}$，$B = \{x \mid ax - 1 = 0\}$，若 $B \subseteq A$，求实数 $a$ 的值。

---

**解答：**

**第1步：** 确定集合 $A$
> 📌 运用知识点：列举法

解方程 $x^2 - 2x - 3 = 0$：

$(x - 3)(x + 1) = 0$，$x = 3$ 或 $x = -1$。

$$A = \{-1, 3\}$$

**第2步：** 分析 $B \subseteq A$ 的含义
> 📌 运用知识点：子集的定义

$B \subseteq A$ 意味着 $B$ 的元素只能取自 $\{-1, 3\}$。

$B$ 的可能情况：$B = \varnothing$，$B = \{-1\}$，$B = \{3\}$。

**第3步：** 分类讨论

**情况一：** $B = \varnothing$

当 $a = 0$ 时，方程 $ax - 1 = 0$ 变为 $-1 = 0$，无解，$B = \varnothing$。

$B \subseteq A$ 成立。✓

**情况二：** $B = \{-1\}$

$-1$ 是方程 $ax - 1 = 0$ 的根：$a \times (-1) - 1 = 0$，$a = -1$。

验证：当 $a = -1$ 时，$-x - 1 = 0$，$x = -1$，$B = \{-1\} \subseteq A$。✓

**情况三：** $B = \{3\}$

$3$ 是方程 $ax - 1 = 0$ 的根：$3a - 1 = 0$，$a = \dfrac{1}{3}$。

验证：当 $a = \dfrac{1}{3}$ 时，$\dfrac{1}{3}x - 1 = 0$，$x = 3$，$B = \{3\} \subseteq A$。✓

**第4步：** 汇总结果

$$a = 0 \text{ 或 } a = -1 \text{ 或 } a = \dfrac{1}{3}$$

**⚠️ 易错提醒：** $B \subseteq A$ 时，$B = \varnothing$ 是必须讨论的情况。本题中 $a = 0$ 使方程退化为无解，容易被遗漏。

**💡 解题思路总结：** 含参数的集合包含关系问题：①先确定已知集合；②根据包含关系列出参数的可能情况；③特别注意 $B = \varnothing$ 的情形；④每种情况都要代回验证。
