---
type: example
textbook: selective-1
chapter: 11
section: 3
number: 6
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P28 例6"
---

**例题：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $D$ 为原点建立空间直角坐标系。求二面角 $A'\text{-}BD\text{-}C'$ 的余弦值。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量求空间角

$D(0,0,0)$，$B(1,1,0)$，$A'(1,0,1)$，$C'(0,1,1)$

棱为 $BD$，$\overrightarrow{BD} = (-1, -1, 0)$。

**第2步：** 求两个半平面内垂直于棱的向量
> 📌 运用知识点：用向量求空间角

**半平面 $A'BD$：** 取 $\overrightarrow{BA'} = (0, -1, 1)$。

减去沿 $\overrightarrow{BD}$ 方向的投影：

$$\text{proj}_{\overrightarrow{BD}} \overrightarrow{BA'} = \frac{\overrightarrow{BA'} \cdot \overrightarrow{BD}}{|\overrightarrow{BD}|^2} \overrightarrow{BD} = \frac{0 + 1 + 0}{2}(-1, -1, 0) = \left(-\frac{1}{2}, -\frac{1}{2}, 0\right)$$

$$\vec{u_1} = \overrightarrow{BA'} - \text{proj} = \left(\frac{1}{2}, -\frac{1}{2}, 1\right)$$

**半平面 $C'BD$：** 取 $\overrightarrow{BC'} = (-1, 0, 1)$。

$$\text{proj}_{\overrightarrow{BD}} \overrightarrow{BC'} = \frac{1 + 0 + 0}{2}(-1, -1, 0) = \left(-\frac{1}{2}, -\frac{1}{2}, 0\right)$$

$$\vec{u_2} = \overrightarrow{BC'} - \text{proj} = \left(-\frac{1}{2}, \frac{1}{2}, 1\right)$$

**第3步：** 求二面角的余弦值
> 📌 运用知识点：用向量求空间角

$$\vec{u_1} \cdot \vec{u_2} = \frac{1}{2} \times \left(-\frac{1}{2}\right) + \left(-\frac{1}{2}\right) \times \frac{1}{2} + 1 \times 1 = -\frac{1}{4} - \frac{1}{4} + 1 = \frac{1}{2}$$

$$|\vec{u_1}| = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}}, \quad |\vec{u_2}| = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}}$$

$$\cos\theta = \frac{\vec{u_1} \cdot \vec{u_2}}{|\vec{u_1}||\vec{u_2}|} = \frac{\frac{1}{2}}{\frac{3}{2}} = \frac{1}{3}$$

所以二面角 $A'\text{-}BD\text{-}C'$ 的余弦值为 $\frac{1}{3}$。

**💡 解题思路总结：** 求二面角的向量方法（投影法）：① 确定棱的方向向量；② 在两个半平面内各取一个向量，减去沿棱方向的投影，得到垂直于棱的分量；③ 求这两个垂直分量的夹角。也可以用两个平面的法向量来求二面角。
