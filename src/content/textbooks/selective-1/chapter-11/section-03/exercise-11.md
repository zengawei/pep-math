---
type: exercise
textbook: selective-1
chapter: 11
section: 3
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P27 练习C 第1题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$。以 $A$ 为原点建立空间直角坐标系。求直线 $A'C$ 与平面 $ABCD$ 所成角的大小。

---

**解答：**

**第1步：** 确定相关向量
> 📌 运用知识点：用向量求空间角

$A(0,0,0)$，$C(1,1,0)$，$A'(0,0,1)$

$$\overrightarrow{A'C} = (1, 1, -1)$$

平面 $ABCD$ 即 $xOy$ 平面，其法向量为 $\vec{n} = (0, 0, 1)$。

**第2步：** 求直线与平面所成角
> 📌 运用知识点：用向量求空间角

设直线 $A'C$ 与平面 $ABCD$ 所成角为 $\alpha$，则：

$$\sin\alpha = \frac{|\overrightarrow{A'C} \cdot \vec{n}|}{|\overrightarrow{A'C}||\vec{n}|} = \frac{|1 \times 0 + 1 \times 0 + (-1) \times 1|}{\sqrt{3} \times 1} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

$$\alpha = \arcsin\frac{\sqrt{3}}{3}$$

**⚠️ 易错提醒：** 直线与平面所成角 $\alpha$ 满足 $\sin\alpha = |\cos\langle\vec{v}, \vec{n}\rangle|$（$\vec{v}$ 是方向向量，$\vec{n}$ 是法向量），不是直接等于夹角。直线与平面所成角的范围是 $[0°, 90°]$。

**💡 解题思路总结：** 直线与平面所成角公式：$\sin\alpha = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{n}||\vec{v}|}$，其中 $\vec{v}$ 是直线方向向量，$\vec{n}$ 是平面法向量。
