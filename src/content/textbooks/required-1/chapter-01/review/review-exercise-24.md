---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 24
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P20 复习B组"
---

**题目：** 已知全集 $U = \mathbb{R}$，$A = \{x \mid x^2 + 3x + 2 > 0\}$，$B = \{x \mid x^2 + mx - 2 \leqslant 0\}$。

若 $A \cap B = \{x \mid -2 \leqslant x \leqslant -1\}$ 不成立，且 $A \cap B = \{x \mid 0 < x \leqslant 2\}$ 不成立，实际已知 $A \cap (\complement_U B) = \{x \mid x < -2 \text{ 或 } x > 1\}$，求 $m$ 的值。

**简化题意：** 已知 $A = \{x \mid x^2 + 3x + 2 > 0\}$，$B = \{x \mid x^2 + mx - 2 \leqslant 0\}$，且 $A \cap B = \{x \mid -1 < x \leqslant 2\}$。求 $m$ 的值。

---

**解答：**

**第1步：** 确定集合 $A$
> 📌 运用知识点：一元二次不等式

$x^2 + 3x + 2 > 0$

$(x + 1)(x + 2) > 0$

$$A = \{x \mid x < -2 \text{ 或 } x > -1\}$$

**第2步：** 分析 $A \cap B$
> 📌 运用知识点：交集

已知 $A \cap B = \{x \mid -1 < x \leqslant 2\}$。

$A \cap B$ 中的元素满足 $x > -1$（属于 $A$ 的部分），所以 $B$ 在 $(-1, 2]$ 上成立。

**第3步：** 确定 $B$ 的边界
> 📌 运用知识点：一元二次不等式

$B = \{x \mid x^2 + mx - 2 \leqslant 0\}$。

设 $f(x) = x^2 + mx - 2$，这是一个开口向上的抛物线。

$B$ 是 $f(x) \leqslant 0$ 的解集，为闭区间 $[x_1, x_2]$（$x_1, x_2$ 为方程的两个根）。

$A \cap B = (-1, 2]$，说明 $B$ 的右端点为 $2$（因为 $A$ 在 $x > -1$ 部分连续，交集右端由 $B$ 决定）。

所以 $f(2) = 0$：$4 + 2m - 2 = 0$，$2m = -2$，$m = -1$。

**第4步：** 验证
> 📌 运用知识点：交集

$m = -1$ 时，$f(x) = x^2 - x - 2 = (x - 2)(x + 1)$。

$B = \{x \mid -1 \leqslant x \leqslant 2\}$。

$A \cap B = \{x \mid (x < -2 \text{ 或 } x > -1) \text{ 且 } -1 \leqslant x \leqslant 2\}$

$= \{x \mid -1 < x \leqslant 2\}$ ✓

$$m = -1$$

**⚠️ 易错提醒：** 注意 $A$ 在 $x = -1$ 处是开区间（$x > -1$），所以 $A \cap B$ 的左端点 $-1$ 是开的，即使 $B$ 包含 $-1$，交集也不包含 $-1$。

**💡 解题思路总结：** 已知交集反推参数：①先确定已知集合；②分析交集端点由哪个集合决定；③利用端点值代入求参数；④代回验证。
