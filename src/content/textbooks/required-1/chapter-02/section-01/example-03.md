---
type: example
textbook: required-1
chapter: 2
section: 1
number: 3
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P28"
---

**例题：** 已知 $1 \leq a + b \leq 4$，$-1 \leq a - b \leq 2$，求 $2a + b$ 的取值范围。

**解答：**

**第1步：** 将 $2a + b$ 表示为已知量的线性组合
> 📌 运用知识点：不等式的性质

设 $2a + b = m(a + b) + n(a - b)$，展开得：

$$2a + b = (m + n)a + (m - n)b$$

比较系数：$m + n = 2$，$m - n = 1$。

解得 $m = \frac{3}{2}$，$n = \frac{1}{2}$。

所以 $2a + b = \frac{3}{2}(a + b) + \frac{1}{2}(a - b)$。

**第2步：** 利用不等式性质求范围
> 📌 运用知识点：不等式的性质

由 $1 \leq a + b \leq 4$，两边乘以 $\frac{3}{2}$（正数，不变号）：

$$\frac{3}{2} \leq \frac{3}{2}(a + b) \leq 6$$

由 $-1 \leq a - b \leq 2$，两边乘以 $\frac{1}{2}$（正数，不变号）：

$$-\frac{1}{2} \leq \frac{1}{2}(a - b) \leq 1$$

**第3步：** 相加得结果
> 📌 运用知识点：不等式的性质

$$\frac{3}{2} + \left(-\frac{1}{2}\right) \leq 2a + b \leq 6 + 1$$

即 $1 \leq 2a + b \leq 7$。

**⚠️ 易错提醒：** 不能先分别求 $a, b$ 的范围再代入。因为 $a, b$ 不是独立变量，直接求范围会扩大。必须将目标表达式表示为已知不等式的线性组合。
