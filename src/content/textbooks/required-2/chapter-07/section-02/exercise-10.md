---
type: exercise
textbook: required-2
chapter: 7
section: 2
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $z = \frac{1 + i}{1 - i}$，求 $z^{2024} + z^{2025} + z^{2026}$ 的值。

---

**解答：**

**第1步：** 化简 $z$
> 📌 运用知识点：复数的除法

$$z = \frac{1 + i}{1 - i} = \frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + 2i + i^2}{1 - i^2} = \frac{2i}{2} = i$$

**第2步：** 计算各幂次
> 📌 运用知识点：虚数单位的幂

$z = i$

$i$ 的幂以 $4$ 为周期：$i^1 = i$，$i^2 = -1$，$i^3 = -i$，$i^4 = 1$

$2024 = 4 \times 506$，所以 $i^{2024} = (i^4)^{506} = 1$

$2025 = 4 \times 506 + 1$，所以 $i^{2025} = i$

$2026 = 4 \times 506 + 2$，所以 $i^{2026} = i^2 = -1$

**第3步：** 求和
> 📌 运用知识点：复数的加法

$z^{2024} + z^{2025} + z^{2026} = 1 + i + (-1) = i$

**💡 易错提醒：** 先化简 $z = i$，再利用 $i$ 的幂的周期性。$2024$ 除以 $4$ 的余数决定幂的值。

**💡 解题思路总结：** 先化简复数，再利用 $i$ 的幂的周期性（周期为 $4$）求高次幂。
