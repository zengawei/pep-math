---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P25 练习B 第1题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点，$\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AA'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。$E$ 是 $BB'$ 的中点。求证：$D'E \perp AC$。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：用向量证明平行与垂直

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$

$D'(0,1,1)$，$B'(1,0,1)$

$E$ 是 $BB'$ 的中点：$E = \frac{B + B'}{2} = \left(1, 0, \frac{1}{2}\right)$

**第2步：** 求向量并验证垂直
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{D'E} = E - D' = \left(1, -1, -\frac{1}{2}\right)$$

$$\overrightarrow{AC} = C - A = (1, 1, 0)$$

$$\overrightarrow{D'E} \cdot \overrightarrow{AC} = 1 \times 1 + (-1) \times 1 + \left(-\frac{1}{2}\right) \times 0 = 1 - 1 + 0 = 0$$

因为 $\overrightarrow{D'E} \cdot \overrightarrow{AC} = 0$，所以 $D'E \perp AC$。

**⚠️ 易错提醒：** 求中点坐标时是两端点坐标的算术平均值。计算数量积时注意每一项的正负号。

**💡 解题思路总结：** 证明两直线垂直只需验证方向向量的数量积为零。建系后一切归结为坐标运算。
