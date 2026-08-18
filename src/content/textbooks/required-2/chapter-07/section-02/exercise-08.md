---
type: exercise
textbook: required-2
chapter: 7
section: 2
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $z = 1 + i$，求 $\frac{z^2 - 2z}{z - 1}$ 的值。

---

**解答：**

**第1步：** 计算 $z^2$ 和 $2z$
> 📌 运用知识点：复数的乘方

$z^2 = (1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$

$2z = 2(1 + i) = 2 + 2i$

**第2步：** 计算分子和分母
> 📌 运用知识点：复数的减法

分子：$z^2 - 2z = 2i - (2 + 2i) = 2i - 2 - 2i = -2$

分母：$z - 1 = (1 + i) - 1 = i$

**第3步：** 计算结果
> 📌 运用知识点：复数的除法

$$\frac{z^2 - 2z}{z - 1} = \frac{-2}{i} = \frac{-2 \cdot (-i)}{i \cdot (-i)} = \frac{2i}{-i^2} = \frac{2i}{1} = 2i$$

**💡 易错提醒：** $\frac{1}{i} = \frac{-i}{i \cdot (-i)} = \frac{-i}{1} = -i$。除以 $i$ 时分子分母同乘 $-i$。

**💡 解题思路总结：** 先算 $z^2$，再逐步计算分子分母，最后做除法。除以 $i$ 的技巧：分子分母同乘 $-i$。
