---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 3
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P16 复习参考题 第3题"
---

**题目：** 已知 $\vec{a} = (1, 2, -1)$，$\vec{b} = (-1, 1, 2)$，求：

(1) $\vec{a} + \vec{b}$ 和 $\vec{a} - \vec{b}$；

(2) $\vec{a} \cdot \vec{b}$；

(3) $\vec{a}$ 与 $\vec{b}$ 的夹角 $\theta$。

---

**解答：**

**第1步：** 计算向量的和与差
> 📌 运用知识点：空间向量的坐标表示

$$\vec{a} + \vec{b} = (1 + (-1), 2 + 1, -1 + 2) = (0, 3, 1)$$

$$\vec{a} - \vec{b} = (1 - (-1), 2 - 1, -1 - 2) = (2, 1, -3)$$

**第2步：** 计算数量积
> 📌 运用知识点：空间向量的坐标表示

$$\vec{a} \cdot \vec{b} = 1 \times (-1) + 2 \times 1 + (-1) \times 2 = -1 + 2 - 2 = -1$$

**第3步：** 计算夹角
> 📌 运用知识点：空间向量的坐标表示

$$|\vec{a}| = \sqrt{1^2 + 2^2 + (-1)^2} = \sqrt{6}$$

$$|\vec{b}| = \sqrt{(-1)^2 + 1^2 + 2^2} = \sqrt{6}$$

$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{-1}{\sqrt{6} \times \sqrt{6}} = \frac{-1}{6}$$

所以 $\theta = \arccos\left(-\dfrac{1}{6}\right)$。

**⚠️ 易错提醒：** 计算夹角时注意 $\cos\theta$ 的范围是 $[-1, 1]$，夹角 $\theta \in [0, \pi]$。当 $\cos\theta < 0$ 时夹角为钝角，不要误写为锐角。

**💡 解题思路总结：** 空间向量的坐标运算按分量逐一进行。求夹角的标准流程：先算数量积和各自的模，再代入夹角公式。
