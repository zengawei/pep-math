---
type: exercise
textbook: required-2
chapter: 8
section: 0
number: 6
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - spatial-position-relation
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，指出下列各对直线的位置关系（平行、相交或异面）：

(1) $AB$ 与 $CD$

(2) $AB$ 与 $C_1D_1$

(3) $AB$ 与 $CC_1$

(4) $AB_1$ 与 $BC_1$

---

**解答：**

**第1步：** 判断 (1) 和 (2)
> 📌 运用知识点：空间两条直线的位置关系

(1) $AB$ 与 $CD$：在正方形 $ABCD$ 中，$AB \parallel CD$。**平行**。

(2) $AB$ 与 $C_1D_1$：$AB \parallel CD \parallel C_1D_1$，所以 $AB \parallel C_1D_1$。**平行**。

**第2步：** 判断 (3) 和 (4)
> 📌 运用知识点：空间两条直线的位置关系

(3) $AB$ 与 $CC_1$：$AB$ 在底面内，$CC_1$ 是侧棱，两线不平行也不相交。**异面**。

(4) $AB_1$ 与 $BC_1$：两线交于点 $B_1$... 不对。$AB_1$ 过 $A$ 和 $B_1$，$BC_1$ 过 $B$ 和 $C_1$。

设正方体棱长为 $1$：$A(0,0,0)$，$B(1,0,0)$，$B_1(1,0,1)$，$C_1(1,1,1)$

$\vec{AB_1} = (1,0,1)$，$\vec{BC_1} = (0,1,1)$

两线不平行（方向向量不成比例）。检查是否相交：$A + s(1,0,1) = B + t(0,1,1)$

$s = 1$，$0 = t$，$s = t$ → $1 = 0$，矛盾。不相交。

**异面**。

**💡 易错提醒：** 判断异面直线时，需要同时验证不平行和不相交。可以用坐标法辅助判断。

**💡 解题思路总结：** 空间两直线位置关系的判断：先看是否平行（方向向量是否成比例），再看是否相交（是否有公共点），否则为异面。
