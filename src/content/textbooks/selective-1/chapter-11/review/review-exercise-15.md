---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P22 复习参考题 第15题"
---

**题目：** 在长方体 $ABCD\text{-}A'B'C'D'$ 中，$AB = 2$，$AD = 1$，$AA' = 2$。求二面角 $A'\text{-}BD\text{-}A$ 的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AD}$、$\overrightarrow{AA'}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(2,0,0)$，$D(0,1,0)$，$A'(0,0,2)$。

**第2步：** 求两个半平面的法向量
> 📌 运用知识点：用向量计算角

二面角 $A'\text{-}BD\text{-}A$ 的棱为 $BD$。

$\overrightarrow{BD} = (-2, 1, 0)$。

平面 $A'BD$：包含 $\overrightarrow{BD} = (-2, 1, 0)$ 和 $\overrightarrow{BA'} = (-2, 0, 2)$。

设法向量 $\vec{n_1} = (x, y, z)$：
$$\begin{cases} -2x + y = 0 \\ -2x + 2z = 0 \end{cases}$$

取 $x = 1$，则 $y = 2$，$z = 1$，$\vec{n_1} = (1, 2, 1)$。

平面 $ABD$：即底面 $xy$ 平面，法向量 $\vec{n_2} = (0, 0, 1)$。

**第3步：** 计算二面角
> 📌 运用知识点：用向量计算角

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{|1|}{\sqrt{6} \cdot 1} = \frac{1}{\sqrt{6}} = \frac{\sqrt{6}}{6}$$

二面角 $A'\text{-}BD\text{-}A$ 的大小为 $\arccos\dfrac{\sqrt{6}}{6}$。

**⚠️ 易错提醒：** 二面角的大小需要判断是锐角还是钝角。两个法向量的夹角可能等于二面角，也可能是其补角，需要结合几何直观判断。本题中 $A'$ 在底面上方，二面角为锐角。

**💡 解题思路总结：** 求二面角的标准方法：分别求两个半平面的法向量，再用法向量的夹角公式。注意判断二面角是锐角还是钝角。
