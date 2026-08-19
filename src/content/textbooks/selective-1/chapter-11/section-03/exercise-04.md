---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P23 练习A 第1题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点，$\overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AA'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。求证：$\overrightarrow{A'C} \perp \overrightarrow{BD}$。

---

**解答：**

**第1步：** 确定各点坐标并求向量
> 📌 运用知识点：用向量证明平行与垂直

$A(0,0,0)$，$B(1,0,0)$，$C(1,1,0)$，$D(0,1,0)$，$A'(0,0,1)$

$$\overrightarrow{A'C} = C - A' = (1, 1, -1)$$

$$\overrightarrow{BD} = D - B = (-1, 1, 0)$$

**第2步：** 计算数量积
> 📌 运用知识点：用向量证明平行与垂直

$$\overrightarrow{A'C} \cdot \overrightarrow{BD} = 1 \times (-1) + 1 \times 1 + (-1) \times 0 = -1 + 1 + 0 = 0$$

所以 $\overrightarrow{A'C} \perp \overrightarrow{BD}$。

**⚠️ 易错提醒：** 证明垂直只需验证数量积为零，不需要求模。注意坐标计算时不要搞错正负号。

**💡 解题思路总结：** 用向量证明两直线垂直的步骤：① 建立坐标系；② 写出两点坐标求向量；③ 验证数量积为零。
