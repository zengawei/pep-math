---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - space-vector-fundamental-theorem
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P13 练习A 第3题"
---

**题目：** 判断下列各组向量是否能作为空间的一个基底：

(1) $\vec{a} = (1, 0, 0)$，$\vec{b} = (0, 1, 0)$，$\vec{c} = (0, 0, 1)$；

(2) $\vec{a} = (1, 2, 3)$，$\vec{b} = (2, 4, 6)$，$\vec{c} = (0, 1, 0)$。

---

**解答：**

**第1步：** 判断 (1)
> 📌 运用知识点：空间向量基本定理

$\vec{a}, \vec{b}, \vec{c}$ 分别是 $x, y, z$ 轴方向的单位向量，显然不共面（它们线性无关），所以能作为空间的一个基底。这其实就是标准基底 $\{\vec{i}, \vec{j}, \vec{k}\}$。

**第2步：** 判断 (2)
> 📌 运用知识点：空间向量基本定理

检查 $\vec{a}$ 与 $\vec{b}$ 的关系：$\vec{b} = (2, 4, 6) = 2(1, 2, 3) = 2\vec{a}$。

因为 $\vec{b} = 2\vec{a}$，所以 $\vec{a}$ 与 $\vec{b}$ 共线，三个向量共面，不能作为空间的基底。

**⚠️ 易错提醒：** 空间基底要求三个向量不共面（线性无关）。如果其中任意两个向量共线，则三个向量一定共面，不能构成基底。

**💡 解题思路总结：** 判断三个向量能否作为基底，关键是判断它们是否共面。如果其中两个向量共线（成比例），则三向量共面，不能作基底。
