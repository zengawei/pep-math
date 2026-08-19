---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P25 练习B 第3题"
---

**题目：** 在正四棱柱 $ABCD\text{-}A'B'C'D'$ 中，底面边长 $AB = 2$，高 $AA' = 4$。以 $D$ 为原点建立空间直角坐标系。求平面 $A'BD$ 的一个法向量。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量证明平行与垂直

$D(0,0,0)$，$A(2,0,0)$，$B(2,2,0)$

$D'(0,0,4)$，$A'(2,0,4)$

**第2步：** 求平面内两个向量
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{DA'} = (2, 0, 4), \quad \overrightarrow{DB} = (2, 2, 0)$$

**第3步：** 设法向量 $\vec{n} = (x, y, z)$，列方程求解
> 📌 运用知识点：用向量证明平行与垂直

$$\vec{n} \cdot \overrightarrow{DA'} = 2x + 4z = 0 \Rightarrow x = -2z$$

$$\vec{n} \cdot \overrightarrow{DB} = 2x + 2y = 0 \Rightarrow y = -x = 2z$$

取 $z = 1$，则 $x = -2$，$y = 2$。

所以平面 $A'BD$ 的一个法向量为 $\vec{n} = (-2, 2, 1)$。

**验证：** $\vec{n} \cdot \overrightarrow{DA'} = -4 + 0 + 4 = 0$ ✓，$\vec{n} \cdot \overrightarrow{DB} = -4 + 4 + 0 = 0$ ✓

**⚠️ 易错提醒：** 法向量不唯一，任何非零倍数都是法向量。求法向量时令一个分量为特定值（通常取 $1$ 或使结果为整数），得到"一个"法向量即可。

**💡 解题思路总结：** 求平面法向量的步骤：① 找平面内两个不共线向量；② 设法向量 $(x,y,z)$；③ 列两个垂直方程；④ 令一个分量为特定值求解另外两个。
