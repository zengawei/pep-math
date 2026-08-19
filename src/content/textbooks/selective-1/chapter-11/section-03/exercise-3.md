---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 3
difficulty: hard
category: practice
group: A
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "课标11.3.2"
---

**题目：** 在正三棱柱 $ABC\text{-}A'B'C'$ 中，所有棱长均为 $2$。以底面中心为原点建立空间直角坐标系，求平面 $A'BC$ 的法向量。

---

**解答：**

**第1步：** 建立坐标系确定各点
> 📌 运用知识点：用向量证明平行与垂直

取底面正三角形 $ABC$ 中心为原点。设 $BC$ 沿 $x$ 轴方向。

$B(-1, -\frac{\sqrt{3}}{3}, 0)$，$C(1, -\frac{\sqrt{3}}{3}, 0)$，$A(0, \frac{2\sqrt{3}}{3}, 0)$

$A'(0, \frac{2\sqrt{3}}{3}, 2)$

**第2步：** 求平面内两个向量
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{BC} = (2, 0, 0)$

$\overrightarrow{BA'} = (1, \sqrt{3}, 2)$

**第3步：** 设法向量 $\vec{n} = (x, y, z)$，列方程
> 📌 运用知识点：用向量证明平行与垂直

$\vec{n} \cdot \overrightarrow{BC} = 2x = 0 \Rightarrow x = 0$

$\vec{n} \cdot \overrightarrow{BA'} = y\sqrt{3} + 2z = 0 \Rightarrow y = -\frac{2z}{\sqrt{3}}$

取 $z = \sqrt{3}$，则 $y = -2$。

所以法向量 $\vec{n} = (0, -2, \sqrt{3})$。

**💡 解题思路总结：** 求法向量的步骤：① 找平面内两个不共线向量；② 设法向量 $(x,y,z)$；③ 列两个垂直方程；④ 令一个分量为特定值求解。
