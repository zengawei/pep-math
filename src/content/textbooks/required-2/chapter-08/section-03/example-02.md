---
type: example
textbook: required-2
chapter: 8
section: 3
number: 2
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
---

**例题：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，$E$、$F$ 分别是 $AB$、$BC$ 的中点。求证：$EF \parallel A_1C_1$，并求异面直线 $A_1D$ 与 $EF$ 所成的角。

---

**解答：**

**第1步：** 证明 $EF \parallel A_1C_1$
> 📌 运用知识点：三角形中位线定理

在 $\triangle ABC$ 中，$E$、$F$ 分别是 $AB$、$BC$ 的中点。

由中位线定理：$EF \parallel AC$，$EF = \frac{1}{2}AC$。

在正方体中，$AC \parallel A_1C_1$（$ACC_1A_1$ 是矩形），

所以 $EF \parallel A_1C_1$。

**第2步：** 求异面直线 $A_1D$ 与 $EF$ 所成的角
> 📌 运用知识点：异面直线所成的角

$EF \parallel AC$，所以 $A_1D$ 与 $EF$ 所成的角等于 $A_1D$ 与 $AC$ 所成的角。

设正方体棱长为 $2$。$A_1(0,0,2)$，$D(0,2,0)$，$A(0,0,0)$，$C(2,2,0)$。

$\vec{A_1D} = (0,2,-2)$，$\vec{AC} = (2,2,0)$

$\cos\theta = \frac{|\vec{A_1D} \cdot \vec{AC}|}{|\vec{A_1D}||\vec{AC}|} = \frac{|0 + 4 + 0|}{\sqrt{8} \times \sqrt{8}} = \frac{4}{8} = \frac{1}{2}$

$\theta = 60°$

异面直线 $A_1D$ 与 $EF$ 所成的角为 $60°$。

**💡 方法总结：** 求异面直线所成的角，关键是"平移"——将其中一条直线平移（或找平行线），使两条直线相交，然后求交角。常用三角形中位线、平行四边形等找平行线。
