---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P26 复习参考题 第23题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，$E$ 为 $CC'$ 的中点。求平面 $A'BE$ 与平面 $ABCD$ 所成二面角的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设棱长为 $2$。

$A(2, 0, 0)$，$B(2, 2, 0)$，$A'(2, 0, 2)$，$E(0, 2, 1)$。

**第2步：** 求平面 $A'BE$ 的法向量
> 📌 运用知识点：空间向量的坐标表示

$\overrightarrow{BA'} = (0, -2, 2)$，$\overrightarrow{BE} = (-2, 0, 1)$。

设法向量 $\vec{n} = (x, y, z)$：

$$\begin{cases} -2y + 2z = 0 \\ -2x + z = 0 \end{cases}$$

取 $z = 2$，则 $y = 2$，$x = 1$。$\vec{n} = (1, 2, 2)$。

**第3步：** 计算二面角
> 📌 运用知识点：用向量计算角

平面 $ABCD$ 的法向量 $\vec{n_0} = (0, 0, 1)$。

$$\cos\theta = \frac{|\vec{n} \cdot \vec{n_0}|}{|\vec{n}||\vec{n_0}|} = \frac{2}{\sqrt{1+4+4} \cdot 1} = \frac{2}{3}$$

二面角大小为 $\arccos\dfrac{2}{3}$。

**⚠️ 易错提醒：** 求二面角时注意判断锐钝。法向量方向的选择可能导致求出的是二面角或其补角。本题中平面 $A'BE$ 从底面翻起，二面角为锐角。

**💡 解题思路总结：** 求平面与底面所成二面角：先求两个平面的法向量，再用夹角公式。底面法向量通常就是 $(0,0,1)$，计算较简便。
