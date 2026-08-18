---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 19
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - complex-number-concept
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $z = a + bi$（$a, b \in \mathbb{R}$），$\frac{z}{1 + i}$ 是实数，且 $|z - 2| = |z + 2|$。求 $z$。

---

**解答：**

**第1步：** 利用 $|z - 2| = |z + 2|$ 条件
> 📌 运用知识点：复数的模

$|z - 2| = |(a - 2) + bi| = \sqrt{(a-2)^2 + b^2}$

$|z + 2| = |(a + 2) + bi| = \sqrt{(a+2)^2 + b^2}$

$(a-2)^2 + b^2 = (a+2)^2 + b^2$

$a^2 - 4a + 4 = a^2 + 4a + 4$

$-8a = 0$，$a = 0$

**第2步：** 利用 $\frac{z}{1+i}$ 是实数的条件
> 📌 运用知识点：复数的除法

$a = 0$，$z = bi$

$$\frac{z}{1 + i} = \frac{bi}{1 + i} = \frac{bi(1 - i)}{(1 + i)(1 - i)} = \frac{bi - bi^2}{2} = \frac{b + bi}{2} = \frac{b}{2} + \frac{b}{2}i$$

这是实数 $\Rightarrow$ 虚部为 $0$：$\frac{b}{2} = 0$，$b = 0$

所以 $z = 0$。

但 $z = 0$ 时 $\frac{z}{1+i} = 0$ 是实数 ✓，$|0 - 2| = |0 + 2| = 2$ ✓。

$z = 0$

**💡 易错提醒：** $|z - 2| = |z + 2|$ 说明 $z$ 到 $2$ 和 $-2$ 的距离相等，即 $z$ 在虚轴上（$a = 0$）。

**💡 解题思路总结：** 先用模条件确定实部，再用除法条件确定虚部。
