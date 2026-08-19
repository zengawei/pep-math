---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P23 复习参考题 第18题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，$E, F$ 分别为 $BB'$ 和 $DD'$ 的中点。证明：$A, E, C', F$ 四点共面。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设棱长为 $2$。

$A(2, 0, 0)$，$E(2, 2, 1)$，$C'(0, 2, 2)$，$F(0, 0, 1)$。

**第2步：** 验证共面
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{AE} = (0, 2, 1), \quad \overrightarrow{AC'} = (-2, 2, 2), \quad \overrightarrow{AF} = (-2, 0, 1)$$

四点共面等价于三个向量共面，即混合积为零：

$$\overrightarrow{AE} \cdot (\overrightarrow{AC'} \times \overrightarrow{AF}) = \begin{vmatrix} 0 & 2 & 1 \\ -2 & 2 & 2 \\ -2 & 0 & 1 \end{vmatrix}$$

$$= 0(2-0) - 2(-2+4) + 1(0+4) = 0 - 4 + 4 = 0$$

混合积为零，所以 $A, E, C', F$ 四点共面。

**第3步：** 补充验证
> 📌 运用知识点：空间向量基本定理

也可验证 $\overrightarrow{AC'} = \overrightarrow{AE} + \overrightarrow{AF}$：

$(0, 2, 1) + (-2, 0, 1) = (-2, 2, 2) = \overrightarrow{AC'}$ ✓

这直接说明 $\overrightarrow{AC'}$ 可由 $\overrightarrow{AE}$ 和 $\overrightarrow{AF}$ 线性表示，四点共面。

**⚠️ 易错提醒：** 四点共面有两种验证方法：混合积为零，或一个向量可被另外两个线性表示。计算行列式时注意符号。

**💡 解题思路总结：** 证明四点共面的核心是验证三个向量共面。混合积法和线性表示法本质相同，可根据计算方便选择。
