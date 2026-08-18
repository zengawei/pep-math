---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $|\vec{a}| = 2$，$|\vec{b}| = 3$，$(\vec{a} + \vec{b}) \perp (\vec{a} - \vec{b})$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 利用垂直条件
> 📌 运用知识点：向量垂直

$(\vec{a} + \vec{b}) \perp (\vec{a} - \vec{b}) \Rightarrow (\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = 0$

$|\vec{a}|^2 - |\vec{b}|^2 = 0$

$4 - 9 = -5 \neq 0$

这说明条件矛盾。重新审视：

$(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = |\vec{a}|^2 - \vec{a} \cdot \vec{b} + \vec{b} \cdot \vec{a} - |\vec{b}|^2 = |\vec{a}|^2 - |\vec{b}|^2 = 4 - 9 = -5$

因为 $-5 \neq 0$，所以 $(\vec{a} + \vec{b})$ 与 $(\vec{a} - \vec{b})$ 不可能垂直。

**修正：** 此题条件 $|\vec{a}| = 2$，$|\vec{b}| = 3$ 与 $(\vec{a} + \vec{b}) \perp (\vec{a} - \vec{b})$ 矛盾。$(\vec{a} + \vec{b}) \perp (\vec{a} - \vec{b})$ 等价于 $|\vec{a}| = |\vec{b}|$。

**重新理解题意：** 若改为 $(\vec{a} + 2\vec{b}) \perp (2\vec{a} - \vec{b})$：

$(\vec{a} + 2\vec{b}) \cdot (2\vec{a} - \vec{b}) = 2|\vec{a}|^2 - \vec{a} \cdot \vec{b} + 4\vec{a} \cdot \vec{b} - 2|\vec{b}|^2 = 2|\vec{a}|^2 + 3\vec{a} \cdot \vec{b} - 2|\vec{b}|^2 = 0$

$8 + 3\vec{a} \cdot \vec{b} - 18 = 0$，$\vec{a} \cdot \vec{b} = \frac{10}{3}$

$\cos\theta = \frac{10/3}{2 \times 3} = \frac{10}{18} = \frac{5}{9}$

$\theta = \arccos\frac{5}{9}$

**💡 易错提醒：** $(\vec{a} + \vec{b}) \perp (\vec{a} - \vec{b})$ 等价于 $|\vec{a}| = |\vec{b}|$，当模不等时不可能垂直。

**💡 解题思路总结：** 展开垂直条件，利用数量积和模的关系求夹角。
