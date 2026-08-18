---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a} = (1, \sqrt{3})$，$\vec{b} = (-\sqrt{3}, 1)$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角 $\theta$。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$ 和模
> 📌 运用知识点：向量的数量积——坐标运算

$\vec{a} \cdot \vec{b} = 1 \times (-\sqrt{3}) + \sqrt{3} \times 1 = -\sqrt{3} + \sqrt{3} = 0$

$|\vec{a}| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$

$|\vec{b}| = \sqrt{(-\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = 2$

**第2步：** 求夹角
> 📌 运用知识点：向量夹角公式

$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{0}{2 \times 2} = 0$$

因为 $\theta \in [0°, 180°]$，所以 $\theta = 90°$。

**💡 易错提醒：** $\vec{a} \cdot \vec{b} = 0$ 说明两向量垂直，夹角为 $90°$。注意计算 $1 \times (-\sqrt{3})$ 时不要漏掉负号。

**💡 解题思路总结：** 用坐标公式计算数量积和模，再用 $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ 求夹角。
