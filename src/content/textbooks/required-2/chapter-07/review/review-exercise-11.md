---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 11
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $z = \frac{1 - i}{1 + i}$，求 $z^{2024}$。

---

**解答：**

**第1步：** 化简 $z$
> 📌 运用知识点：复数的除法

$$z = \frac{1 - i}{1 + i} = \frac{(1 - i)(1 - i)}{(1 + i)(1 - i)} = \frac{1 - 2i + i^2}{1 - i^2} = \frac{-2i}{2} = -i$$

**第2步：** 计算 $z^{2024}$
> 📌 运用知识点：虚数单位的幂

$z^{2024} = (-i)^{2024} = ((-i)^4)^{506}$

$(-i)^2 = i^2 = -1$，$(-i)^4 = 1$

$z^{2024} = 1^{506} = 1$

**💡 易错提醒：** 先化简 $z = -i$，再利用幂的周期性。$(-i)^4 = 1$。

**💡 解题思路总结：** 先除法化简，再利用 $i$ 的幂的周期性求高次幂。
