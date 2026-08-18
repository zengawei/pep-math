---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 3
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "课标11.2.1"
---

**题目：** 已知 $\vec{a} = (1, 2, -2)$，$\vec{b} = (2, -1, 1)$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$ 和 $|\vec{a}|, |\vec{b}|$
> 📌 运用知识点：空间向量的坐标运算

$\vec{a} \cdot \vec{b} = 1 \times 2 + 2 \times (-1) + (-2) \times 1 = 2 - 2 - 2 = -2$

$|\vec{a}| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1+4+4} = 3$

$|\vec{b}| = \sqrt{2^2 + (-1)^2 + 1^2} = \sqrt{4+1+1} = \sqrt{6}$

**第2步：** 代入夹角公式
> 📌 运用知识点：空间向量的坐标运算

$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{-2}{3\sqrt{6}} = -\frac{\sqrt{6}}{9}$

$\theta = \arccos\left(-\frac{\sqrt{6}}{9}\right)$

**💡 解题思路总结：** 利用 $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ 求夹角，注意结果范围是 $[0°, 180°]$。
