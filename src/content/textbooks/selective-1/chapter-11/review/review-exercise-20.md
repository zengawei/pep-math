---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P24 复习参考题 第20题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，$M$ 为 $A'B'$ 的中点。求二面角 $M\text{-}AC\text{-}B$ 的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设棱长为 $2$。

$A(2, 0, 0)$，$C(0, 2, 0)$，$B(2, 2, 0)$，$M(2, 1, 2)$。

**第2步：** 求两个半平面的法向量
> 📌 运用知识点：用向量计算角

棱 $\overrightarrow{AC} = (-2, 2, 0)$。

平面 $MAC$：$\overrightarrow{AM} = (0, 1, 2)$，$\overrightarrow{AC} = (-2, 2, 0)$。

设法向量 $\vec{n_1} = (x, y, z)$：
$$\begin{cases} -2x + 2y = 0 \\ y + 2z = 0 \end{cases}$$

取 $z = 1$，则 $y = -2$，$x = -2$。$\vec{n_1} = (-2, -2, 1)$，即 $\vec{n_1} = (2, 2, -1)$。

平面 $BAC$（即底面）：法向量 $\vec{n_2} = (0, 0, 1)$。

**第3步：** 计算二面角
> 📌 运用知识点：用向量计算角

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|-1|}{\sqrt{4+4+1} \cdot 1} = \frac{1}{3}$$

二面角 $M\text{-}AC\text{-}B$ 的大小为 $\arccos\dfrac{1}{3}$。

**⚠️ 易错提醒：** 求二面角时，法向量方向的选择会影响夹角是二面角还是其补角。需要结合几何直观判断二面角是锐角还是钝角。本题 $M$ 在上方，二面角为锐角。

**💡 解题思路总结：** 二面角问题关键是准确求出两个半平面的法向量。建系后按步骤求法向量，再用夹角公式，最后判断锐钝。
