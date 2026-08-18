---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 7
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $|\vec{a}| = 2$，$|\vec{b}| = 1$，$(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = 3$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** 展开数量积
> 📌 运用知识点：向量的数量积——运算律

$$(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = \vec{a} \cdot \vec{a} - \vec{a} \cdot \vec{b} + \vec{b} \cdot \vec{a} - \vec{b} \cdot \vec{b} = |\vec{a}|^2 - |\vec{b}|^2$$

**第2步：** 代入求值
> 📌 运用知识点：向量的数量积

$|\vec{a}|^2 - |\vec{b}|^2 = 4 - 1 = 3$

验证：$3 = 3$ ✓

这说明条件 $(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = 3$ 对任意夹角的 $\vec{a}$、$\vec{b}$ 都成立（只要模为 $2$ 和 $1$）。

实际上，$(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = |\vec{a}|^2 - |\vec{b}|^2$ 与夹角无关。

题目条件不足以唯一确定夹角，需要补充条件。

重新审视题目：由 $|\vec{a}|^2 - |\vec{b}|^2 = 3$ 恒成立，此条件对夹角无约束。若题目意图为求夹角，需额外信息。

**修正理解：** 若条件改为 $(\vec{a} + \vec{b}) \cdot (\vec{a} + 2\vec{b}) = 3$：

$(\vec{a} + \vec{b}) \cdot (\vec{a} + 2\vec{b}) = |\vec{a}|^2 + 3\vec{a} \cdot \vec{b} + 2|\vec{b}|^2 = 4 + 3\vec{a} \cdot \vec{b} + 2 = 6 + 3\vec{a} \cdot \vec{b} = 3$

$\vec{a} \cdot \vec{b} = -1$

$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{-1}{2 \times 1} = -\frac{1}{2}$

$\theta = 120°$

**💡 易错提醒：** $(\vec{a} + \vec{b}) \cdot (\vec{a} - \vec{b}) = |\vec{a}|^2 - |\vec{b}|^2$ 是一个恒等式（平方差公式），与夹角无关。

**💡 解题思路总结：** 展开数量积时利用分配律，注意 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$，交叉项相消。
