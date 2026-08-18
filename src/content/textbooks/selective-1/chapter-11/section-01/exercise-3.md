---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 3
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "课标11.1.2"
---

**题目：** 已知空间向量 $\vec{a}, \vec{b}$ 满足 $|\vec{a}| = 2$，$|\vec{b}| = 3$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$，求 $|\vec{a} + \vec{b}|$ 和 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：空间向量的运算

$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 60° = 2 \times 3 \times \frac{1}{2} = 3$

**第2步：** 求 $|\vec{a} + \vec{b}|$
> 📌 运用知识点：空间向量的运算

$|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 4 + 6 + 9 = 19$

$|\vec{a} + \vec{b}| = \sqrt{19}$

**第3步：** 求 $|\vec{a} - \vec{b}|$
> 📌 运用知识点：空间向量的运算

$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 4 - 6 + 9 = 7$

$|\vec{a} - \vec{b}| = \sqrt{7}$

**💡 解题思路总结：** 求向量和（差）的模，利用 $|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$ 展开计算。
