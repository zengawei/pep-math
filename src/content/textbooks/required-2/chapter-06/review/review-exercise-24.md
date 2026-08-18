---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在四边形 $ABCD$ 中，$\overrightarrow{AB} = \vec{a}$，$\overrightarrow{BC} = \vec{b}$，$\overrightarrow{CD} = \vec{c}$，$\overrightarrow{DA} = \vec{d}$。已知 $\vec{a} + \vec{b} + \vec{c} + \vec{d} = \vec{0}$，$\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{c} \cdot \vec{d} = \vec{d} \cdot \vec{a}$，判断四边形 $ABCD$ 的形状。

---

**解答：**

**第1步：** 分析内积条件
> 📌 运用知识点：向量的数量积

由 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c}$：$\vec{b} \cdot (\vec{a} - \vec{c}) = 0$，即 $\vec{b} \perp (\vec{a} - \vec{c})$。

由 $\vec{c} \cdot \vec{d} = \vec{d} \cdot \vec{a}$：$\vec{d} \cdot (\vec{c} - \vec{a}) = 0$，即 $\vec{d} \perp (\vec{a} - \vec{c})$。

**第2步：** 推导平行四边形
> 📌 运用知识点：向量平行

$\vec{b}$ 和 $\vec{d}$ 都与 $(\vec{a} - \vec{c})$ 垂直。在平面内，两个向量都与同一非零向量垂直，则它们平行。

所以 $\vec{b} \parallel \vec{d}$，即 $BC \parallel DA$。

同理可证 $\vec{a} \parallel \vec{c}$，即 $AB \parallel CD$。

四边形 $ABCD$ 是平行四边形。

**第3步：** 进一步判断
> 📌 运用知识点：向量垂直

在平行四边形中 $\vec{c} = -\vec{a}$，$\vec{d} = -\vec{b}$。

$\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{b} \cdot (-\vec{a}) = -\vec{a} \cdot \vec{b}$

所以 $\vec{a} \cdot \vec{b} = -\vec{a} \cdot \vec{b}$，$\vec{a} \cdot \vec{b} = 0$，即 $\vec{a} \perp \vec{b}$。

邻边垂直的平行四边形是矩形。

四边形 $ABCD$ 是矩形。

**💡 易错提醒：** 利用闭合条件 $\vec{c} = -\vec{a}$，$\vec{d} = -\vec{b}$ 简化内积条件是关键一步。

**💡 解题思路总结：** 先从内积条件推出平行，再从平行四边形性质推出垂直，最终判断为矩形。
