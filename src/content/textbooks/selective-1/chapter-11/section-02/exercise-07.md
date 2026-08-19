---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P14 练习A 第4题"
---

**题目：** 已知 $\vec{a} = (2, -3, 1)$，$\vec{b} = (-1, 1, -2)$，求：

(1) $|\vec{a}|$ 和 $|\vec{b}|$；

(2) $\vec{a}$ 与 $\vec{b}$ 的夹角 $\theta$ 的余弦值。

---

**解答：**

**第1步：** 求 $|\vec{a}|$ 和 $|\vec{b}|$
> 📌 运用知识点：空间向量的坐标运算

$$|\vec{a}| = \sqrt{2^2 + (-3)^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}$$

$$|\vec{b}| = \sqrt{(-1)^2 + 1^2 + (-2)^2} = \sqrt{1 + 1 + 4} = \sqrt{6}$$

**第2步：** 计算 $\vec{a} \cdot \vec{b}$
> 📌 运用知识点：空间向量的坐标运算

$$\vec{a} \cdot \vec{b} = 2 \times (-1) + (-3) \times 1 + 1 \times (-2) = -2 - 3 - 2 = -7$$

**第3步：** 求夹角余弦
> 📌 运用知识点：空间向量的坐标运算

$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{-7}{\sqrt{14} \times \sqrt{6}} = \frac{-7}{\sqrt{84}} = \frac{-7}{2\sqrt{21}} = -\frac{7\sqrt{21}}{42} = -\frac{\sqrt{21}}{6}$$

**⚠️ 易错提醒：** 夹角余弦为负值说明夹角是钝角（大于 $90°$），这是完全正常的。不要看到负值就认为算错了。

**💡 解题思路总结：** 用坐标求夹角的标准步骤：① 求各向量的模；② 求数量积；③ 代入 $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$。
