---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知向量 $\vec{a} = (m, 1)$，$\vec{b} = (1, m)$。若 $\vec{a}$ 与 $\vec{b}$ 的夹角为锐角，求 $m$ 的取值范围。

---

**解答：**

**第1步：** 利用锐角条件
> 📌 运用知识点：向量夹角——锐角条件

夹角为锐角 $\Leftrightarrow$ $\cos\theta > 0$ 且 $\theta \neq 0$（即不共线同向）。

$\vec{a} \cdot \vec{b} > 0$ 且 $\vec{a}$ 与 $\vec{b}$ 不同向。

**第2步：** 计算数量积
> 📌 运用知识点：向量的数量积

$\vec{a} \cdot \vec{b} = m \times 1 + 1 \times m = 2m > 0$，$m > 0$

**第3步：** 排除共线情况
> 📌 运用知识点：向量共线

$\vec{a}$ 与 $\vec{b}$ 共线：$m \times m - 1 \times 1 = 0$，$m^2 = 1$，$m = 1$ 或 $m = -1$。

$m = 1$ 时 $\vec{a} = (1, 1) = \vec{b}$，同向，夹角为 $0$（不是锐角），排除。

$m = -1$ 时不满足 $m > 0$，已在范围外。

所以 $m$ 的取值范围是 $m > 0$ 且 $m \neq 1$，即 $(0, 1) \cup (1, +\infty)$。

**💡 易错提醒：** 锐角要求 $\cos\theta > 0$ 且 $\theta \neq 0$。$m = 1$ 时两向量相等，夹角为 $0°$，不是锐角，要排除。

**💡 解题思路总结：** 夹角为锐角 $\Leftrightarrow$ 数量积 $> 0$ 且不共线同向。
