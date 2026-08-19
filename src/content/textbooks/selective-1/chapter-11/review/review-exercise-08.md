---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 8
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P18 复习参考题 第8题"
---

**题目：** 已知 $\vec{a} = (1, 2, 3)$，$\vec{b} = (x, -1, 1)$，若 $\vec{a} \perp \vec{b}$，求 $x$ 的值。

---

**解答：**

**第1步：** 利用垂直条件列方程
> 📌 运用知识点：用向量证明平行与垂直

$\vec{a} \perp \vec{b}$ 等价于 $\vec{a} \cdot \vec{b} = 0$：

$$\vec{a} \cdot \vec{b} = 1 \cdot x + 2 \cdot (-1) + 3 \cdot 1 = x - 2 + 3 = x + 1 = 0$$

**第2步：** 求解
> 📌 运用知识点：空间向量的坐标表示

解得 $x = -1$。

验证：$\vec{b} = (-1, -1, 1)$，$\vec{a} \cdot \vec{b} = -1 - 2 + 3 = 0$。✓

**⚠️ 易错提醒：** 垂直条件是数量积为零，不是对应分量成比例。平行是分量成比例，垂直是数量积为零，两者不要混淆。

**💡 解题思路总结：** 空间向量垂直的充要条件是数量积为零。将数量积按坐标展开即可得到关于未知量的方程，这是最基本的向量坐标应用。
