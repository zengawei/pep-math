---
type: example
textbook: required-2
chapter: 8
section: 3
number: 4
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
---

**例题：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，求证：平面 $AB_1D_1 \parallel$ 平面 $C_1BD$。

---

**解答：**

**第1步：** 证明 $AB_1 \parallel$ 平面 $C_1BD$
> 📌 运用知识点：线面平行的判定定理

在正方体中，$AB_1 \parallel DC_1$（$AB_1C_1D$ 是矩形，因为 $AB \parallel DC_1$ 不对...

重新分析：$AD \parallel B_1C_1$ 且 $AD = B_1C_1$，所以 $ADB_1C_1$ 不是标准矩形。

看面 $ABB_1A_1$：$AB_1$ 是对角线。看面 $DCC_1D_1$：$DC_1$ 是对角线。

$AD \parallel BC$... 不对。$AB \parallel DC$，$BB_1 \parallel CC_1$。

$AB_1$ 和 $DC_1$：$\vec{AB_1} = \vec{AB} + \vec{BB_1}$，$\vec{DC_1} = \vec{DC} + \vec{CC_1}$。

因为 $\vec{AB} = \vec{DC}$，$\vec{BB_1} = \vec{CC_1}$，所以 $\vec{AB_1} = \vec{DC_1}$，即 $AB_1 \parallel DC_1$ 且 $AB_1 = DC_1$。

$DC_1 \subset$ 平面 $C_1BD$，$AB_1 \not\subset$ 平面 $C_1BD$，

所以 $AB_1 \parallel$ 平面 $C_1BD$。

**第2步：** 证明 $AD_1 \parallel$ 平面 $C_1BD$
> 📌 运用知识点：线面平行的判定定理

同理：$\vec{AD_1} = \vec{AD} + \vec{DD_1}$，$\vec{BC_1} = \vec{BC} + \vec{CC_1}$。

因为 $\vec{AD} = \vec{BC}$，$\vec{DD_1} = \vec{CC_1}$，所以 $\vec{AD_1} = \vec{BC_1}$，即 $AD_1 \parallel BC_1$。

$BC_1 \subset$ 平面 $C_1BD$，$AD_1 \not\subset$ 平面 $C_1BD$，

所以 $AD_1 \parallel$ 平面 $C_1BD$。

**第3步：** 应用面面平行判定定理
> 📌 运用知识点：面面平行的判定定理

$AB_1$ 和 $AD_1$ 是平面 $AB_1D_1$ 内两条相交直线（交于点 $A$），

$AB_1 \parallel$ 平面 $C_1BD$，$AD_1 \parallel$ 平面 $C_1BD$，

所以平面 $AB_1D_1 \parallel$ 平面 $C_1BD$。

**💡 方法总结：** 证明面面平行的步骤：在一个平面内找两条相交直线，分别证明它们平行于另一个平面。在正方体中，利用向量的相等关系可以方便地证明线线平行。
