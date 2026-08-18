---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 9
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $|\vec{a}| = 1$，$|\vec{b}| = 2$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$。求 $|\vec{a} + \vec{b}|$ 和 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 求 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：向量的数量积——定义

$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 60° = 1 \times 2 \times \frac{1}{2} = 1$$

**第2步：** 求 $|\vec{a} + \vec{b}|$
> 📌 运用知识点：向量的数量积——模的平方

$$|\vec{a} + \vec{b}|^2 = (\vec{a} + \vec{b}) \cdot (\vec{a} + \vec{b}) = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 1 + 2 + 4 = 7$$

$$|\vec{a} + \vec{b}| = \sqrt{7}$$

**第3步：** 求 $|\vec{a} - \vec{b}|$
> 📌 运用知识点：向量的数量积——模的平方

$$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 1 - 2 + 4 = 3$$

$$|\vec{a} - \vec{b}| = \sqrt{3}$$

**💡 易错提醒：** $|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$，中间项是 $2\vec{a} \cdot \vec{b}$ 而不是 $2|\vec{a}||\vec{b}|$。

**💡 解题思路总结：** 求向量和（差）的模，先求模的平方展开式，利用 $|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$。
