---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P29 习题 第8题"
---

**题目：** 已知 $-2 < a < 3$，$1 < b < 4$，求 $\frac{a}{b}$ 的取值范围。

---

**解答：**

**第1步：** 求 $\frac{1}{b}$ 的范围
> 📌 运用知识点：不等式的性质

因为 $1 < b < 4$，且 $b > 0$，取倒数（正数取倒数变号）：
$$\frac{1}{4} < \frac{1}{b} < 1$$

**第2步：** 求 $a \cdot \frac{1}{b}$ 的范围
> 📌 运用知识点：不等式的性质

需要分 $a$ 的正负讨论。

**情况一：** 当 $0 \leq a < 3$ 时，$a \geq 0$，$\frac{1}{b} > 0$。

$a \cdot \frac{1}{b}$ 的最小值趋向 $0 \times \frac{1}{4} = 0$（但 $a$ 可以接近 $0$），
最大值趋向 $3 \times 1 = 3$（但不取等）。

实际上，当 $a \in [0, 3)$ 时，$\frac{a}{b} \in \left[0, 3\right)$。

**情况二：** 当 $-2 < a < 0$ 时，$a < 0$，$\frac{1}{b} > 0$，所以 $\frac{a}{b} < 0$。

$|a| \in (0, 2)$，$\frac{1}{b} \in \left(\frac{1}{4}, 1\right)$，

$\frac{|a|}{b} \in \left(0, 2\right)$，所以 $\frac{a}{b} \in (-2, 0)$。

**第3步：** 合并结果
> 📌 运用知识点：不等式的性质

综合两种情况：$\frac{a}{b} \in (-2, 3)$。

验证：$\frac{a}{b}$ 可以无限接近 $-2$（$a \to -2, b \to 1$），可以无限接近 $3$（$a \to 3, b \to 1$）。

所以 $\frac{a}{b}$ 的取值范围为 $(-2, 3)$。

**⚠️ 易错提醒：** 不能直接用 $a$ 的范围除以 $b$ 的范围。求商的范围需要先求除数倒数的范围，再分正负讨论后用乘法性质。

**💡 解题思路总结：** 求 $\frac{a}{b}$ 的范围：①先求 $\frac{1}{b}$ 的范围 ②将 $a$ 分正负讨论 ③分别用乘法性质求范围 ④合并。核心是不能直接"除"不等式。
