---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P23 复习参考题 第17题"
---

**题目：** 在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 为矩形，$PA \perp$ 底面 $ABCD$，$PA = AB = 1$，$AD = 2$，$E$ 为 $PD$ 的中点。求直线 $CE$ 与平面 $PAB$ 所成角的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AD}$、$\overrightarrow{AP}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(1,0,0)$，$C(1,2,0)$，$D(0,2,0)$，$P(0,0,1)$，$E\left(0, 1, \dfrac{1}{2}\right)$。

**第2步：** 求相关向量
> 📌 运用知识点：用向量计算角

$\overrightarrow{CE} = E - C = (-1, -1, \frac{1}{2})$。

平面 $PAB$ 包含 $\overrightarrow{AB} = (1, 0, 0)$ 和 $\overrightarrow{AP} = (0, 0, 1)$。

平面 $PAB$ 的法向量：$\vec{n} = \overrightarrow{AB} \times \overrightarrow{AP} = (0, -1, 0)$，即 $\vec{n} = (0, 1, 0)$。

**第3步：** 计算线面角
> 📌 运用知识点：用向量计算角

设直线 $CE$ 与平面 $PAB$ 所成角为 $\alpha$，则：

$$\sin\alpha = \frac{|\overrightarrow{CE} \cdot \vec{n}|}{|\overrightarrow{CE}||\vec{n}|} = \frac{|(-1)(0) + (-1)(1) + \frac{1}{2}(0)|}{\sqrt{1 + 1 + \frac{1}{4}} \cdot 1} = \frac{1}{\sqrt{\frac{9}{4}}} = \frac{1}{\frac{3}{2}} = \frac{2}{3}$$

所以 $\alpha = \arcsin\dfrac{2}{3}$。

**⚠️ 易错提醒：** 线面角的公式是 $\sin\alpha = \dfrac{|\vec{d} \cdot \vec{n}|}{|\vec{d}||\vec{n}|}$（用方向向量与法向量），不是用余弦。线面角与向量-法向量夹角互余。

**💡 解题思路总结：** 求线面角：先求直线的方向向量和平面的法向量，再用 $\sin\alpha = \frac{|\vec{d} \cdot \vec{n}|}{|\vec{d}||\vec{n}|}$ 计算。注意线面角范围是 $[0°, 90°]$。
