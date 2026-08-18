---
type: example
textbook: required-2
chapter: 8
section: 4
number: 2
knowledge_points:
  - perpendicular-judgment
source: "人教A版2019"
---

**例题：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，求证：$A_1C \perp BC_1$。

---

**解答：**

**第1步：** 证明 $BC_1 \perp$ 平面 $A_1B_1CD$... 换一种方法。
> 📌 运用知识点：线面垂直的判定

设正方体棱长为 $a$，以 $B$ 为原点建立坐标系：

$B(0,0,0)$，$A(a,0,0)$，$C(0,a,0)$，$D(a,a,0)$

$B_1(0,0,a)$，$A_1(a,0,a)$，$C_1(0,a,a)$，$D_1(a,a,a)$

**第2步：** 用向量法验证
> 📌 运用知识点：向量的数量积

$\vec{A_1C} = C - A_1 = (-a, a, -a)$

$\vec{BC_1} = C_1 - B = (0, a, a)$

$\vec{A_1C} \cdot \vec{BC_1} = (-a)(0) + (a)(a) + (-a)(a) = 0 + a^2 - a^2 = 0$

所以 $A_1C \perp BC_1$。

**💡 方法总结：** 在正方体中证明线线垂直，建立空间直角坐标系后用向量数量积验证是最直接的方法。关键是正确建立坐标系并写出各点坐标。
