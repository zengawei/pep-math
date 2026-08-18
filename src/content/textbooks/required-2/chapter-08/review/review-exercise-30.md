---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - solid-geometry-basics
  - solid-surface-area-volume
  - perpendicular-judgment
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 一个几何体的三视图如下：正视图是底为 $4$、高为 $3$ 的矩形，侧视图是底为 $4$、高为 $3$ 的矩形，俯视图是边长为 $4$ 的正方形。

(1) 判断该几何体的形状，并求其体积。

(2) 在该几何体中，求证：对角线 $AC_1 \perp BD$（设几何体为 $ABCD\text{-}A_1B_1C_1D_1$，$ABCD$ 为下底面）。

---

**解答：**

**第1步：** 由三视图还原几何体
> 📌 运用知识点：三视图

正视图和侧视图都是矩形，俯视图是正方形，该几何体是**正四棱柱**（底面为正方形的直棱柱）。

底面边长 $= 4$，高 $= 3$。

$V = 4^2 \times 3 = 48$

**第2步：** 证明 $AC_1 \perp BD$
> 📌 运用知识点：线面垂直

以 $A$ 为原点建系：$A(0,0,0)$，$B(4,0,0)$，$C(4,4,0)$，$D(0,4,0)$

$A_1(0,0,3)$，$B_1(4,0,3)$，$C_1(4,4,3)$，$D_1(0,4,3)$

$\vec{AC_1} = (4, 4, 3)$，$\vec{BD} = (-4, 4, 0)$

$\vec{AC_1} \cdot \vec{BD} = -16 + 16 + 0 = 0$

所以 $AC_1 \perp BD$。

**第3步：** 几何法验证
> 📌 运用知识点：线面垂直的判定

在正方形 $ABCD$ 中，$AC \perp BD$。

$CC_1 \perp$ 底面 $ABCD$，$BD \subset$ 底面 $ABCD$，所以 $CC_1 \perp BD$。

$AC$ 和 $CC_1$ 是平面 $ACC_1$ 内两条相交直线，$BD \perp AC$ 且 $BD \perp CC_1$，

所以 $BD \perp$ 平面 $ACC_1$。

$AC_1 \subset$ 平面 $ACC_1$，所以 $BD \perp AC_1$。

**💡 易错提醒：** 三视图还原几何体时，注意正视图的高是棱柱的高，俯视图的边长是底面边长。

**💡 解题思路总结：** 综合题融合三视图、体积计算和垂直证明。先用三视图确定几何体，再用坐标法或传统法证明垂直关系。
