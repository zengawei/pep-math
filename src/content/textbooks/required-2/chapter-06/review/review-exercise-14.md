---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $|\vec{a}| = 1$，$|\vec{b}| = \sqrt{2}$，$\vec{a} \perp (\vec{a} - \vec{b})$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 利用垂直条件
> 📌 运用知识点：向量垂直

$\vec{a} \perp (\vec{a} - \vec{b}) \Rightarrow \vec{a} \cdot (\vec{a} - \vec{b}) = 0$

$|\vec{a}|^2 - \vec{a} \cdot \vec{b} = 0$

$1 - \vec{a} \cdot \vec{b} = 0$，$\vec{a} \cdot \vec{b} = 1$

**第2步：** 求夹角
> 📌 运用知识点：向量夹角公式

$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{1}{1 \times \sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$

$\theta = 45°$

**💡 易错提醒：** $\vec{a} \cdot (\vec{a} - \vec{b}) = |\vec{a}|^2 - \vec{a} \cdot \vec{b}$，展开时注意分配律。

**💡 解题思路总结：** 垂直条件转化为数量积为零，展开后求出 $\vec{a} \cdot \vec{b}$，再用夹角公式。
