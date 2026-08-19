---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P27 练习C 第2题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $D$ 为原点建立空间直角坐标系。求二面角 $A'\text{-}BD\text{-}A$ 的余弦值。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量求空间角

$D(0,0,0)$，$A(1,0,0)$，$B(1,1,0)$

$A'(1,0,1)$

**第2步：** 求两个半平面内垂直于棱的向量
> 📌 运用知识点：用向量求空间角

二面角 $A'\text{-}BD\text{-}A$ 的棱为 $BD$。

$\overrightarrow{BD} = (-1, -1, 0)$

**半平面 $A'BD$：** 取 $\overrightarrow{BA'} = (0, -1, 1)$。

求 $\overrightarrow{BA'}$ 在 $\overrightarrow{BD}$ 方向上的投影分量并减去，得到垂直于 $BD$ 的分量：

$$\text{proj}_{\overrightarrow{BD}} \overrightarrow{BA'} = \frac{\overrightarrow{BA'} \cdot \overrightarrow{BD}}{|\overrightarrow{BD}|^2} \overrightarrow{BD} = \frac{0 + 1 + 0}{2}(-1, -1, 0) = \frac{1}{2}(-1, -1, 0) = \left(-\frac{1}{2}, -\frac{1}{2}, 0\right)$$

$$\vec{u_1} = \overrightarrow{BA'} - \text{proj} = \left(\frac{1}{2}, -\frac{1}{2}, 1\right)$$

**半平面 $ABD$：** 取 $\overrightarrow{BA} = (0, -1, 0)$。

$$\text{proj}_{\overrightarrow{BD}} \overrightarrow{BA} = \frac{0 + 1 + 0}{2}(-1, -1, 0) = \left(-\frac{1}{2}, -\frac{1}{2}, 0\right)$$

$$\vec{u_2} = \overrightarrow{BA} - \text{proj} = \left(\frac{1}{2}, -\frac{1}{2}, 0\right)$$

**第3步：** 求二面角
> 📌 运用知识点：用向量求空间角

$$\vec{u_1} \cdot \vec{u_2} = \frac{1}{4} + \frac{1}{4} + 0 = \frac{1}{2}$$

$$|\vec{u_1}| = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}}$$

$$|\vec{u_2}| = \sqrt{\frac{1}{4} + \frac{1}{4}} = \sqrt{\frac{1}{2}}$$

$$\cos\theta = \frac{\vec{u_1} \cdot \vec{u_2}}{|\vec{u_1}||\vec{u_2}|} = \frac{\frac{1}{2}}{\sqrt{\frac{3}{2}} \times \sqrt{\frac{1}{2}}} = \frac{\frac{1}{2}}{\frac{\sqrt{3}}{2}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

所以二面角 $A'\text{-}BD\text{-}A$ 的余弦值为 $\frac{\sqrt{3}}{3}$。

**⚠️ 易错提醒：** 求二面角时，需要在两个半平面内分别找垂直于棱的向量。用投影法去除沿棱方向的分量，确保两个向量都垂直于棱。

**💡 解题思路总结：** 求二面角的向量方法：① 确定棱的方向向量；② 在两个半平面内各取一个向量，减去沿棱方向的投影，得到垂直于棱的分量；③ 求这两个垂直分量的夹角即为二面角。
