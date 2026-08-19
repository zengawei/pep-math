---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P6 练习B 第2题"
---

**题目：** 已知空间向量 $\vec{a}, \vec{b}$ 满足 $|\vec{a}| = 2$，$|\vec{b}| = 1$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$。求：

(1) $|\vec{a} + 2\vec{b}|$；

(2) $(\vec{a} + \vec{b}) \cdot (\vec{a} - 3\vec{b})$。

---

**解答：**

**第1步：** 计算 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：空间向量的运算

$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 60° = 2 \times 1 \times \frac{1}{2} = 1$$

**第2步：** 求 $|\vec{a} + 2\vec{b}|$
> 📌 运用知识点：空间向量的运算

$$|\vec{a} + 2\vec{b}|^2 = (\vec{a} + 2\vec{b}) \cdot (\vec{a} + 2\vec{b}) = |\vec{a}|^2 + 4\vec{a} \cdot \vec{b} + 4|\vec{b}|^2$$

$$= 4 + 4 \times 1 + 4 \times 1 = 12$$

所以 $|\vec{a} + 2\vec{b}| = 2\sqrt{3}$。

**第3步：** 求 $(\vec{a} + \vec{b}) \cdot (\vec{a} - 3\vec{b})$
> 📌 运用知识点：空间向量的运算

$$(\vec{a} + \vec{b}) \cdot (\vec{a} - 3\vec{b}) = |\vec{a}|^2 - 3\vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{b} - 3|\vec{b}|^2$$

$$= 4 - 3 \times 1 + 1 - 3 \times 1 = 4 - 3 + 1 - 3 = -1$$

**⚠️ 易错提醒：** 展开向量运算时要逐项计算，不要遗漏交叉项。$(\vec{a} + \vec{b}) \cdot (\vec{a} - 3\vec{b})$ 展开后有四项，不是三项。

**💡 解题思路总结：** 向量模的平方等于自身与自身的数量积，即 $|\vec{v}|^2 = \vec{v} \cdot \vec{v}$。向量混合运算可以像多项式一样展开，但要注意数量积的交换律。
