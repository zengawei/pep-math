---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-fundamental-theorem
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P25 复习参考题 第21题"
---

**题目：** 已知空间向量 $\vec{a}, \vec{b}, \vec{c}$ 两两夹角均为 $60°$，且 $|\vec{a}| = 1$，$|\vec{b}| = 2$，$|\vec{c}| = 3$。求 $|\vec{a} + \vec{b} + \vec{c}|$。

---

**解答：**

**第1步：** 计算各数量积
> 📌 运用知识点：空间向量的运算

$$\vec{a} \cdot \vec{b} = 1 \times 2 \times \cos 60° = 1$$

$$\vec{b} \cdot \vec{c} = 2 \times 3 \times \cos 60° = 3$$

$$\vec{a} \cdot \vec{c} = 1 \times 3 \times \cos 60° = \frac{3}{2}$$

**第2步：** 展开模的平方
> 📌 运用知识点：空间向量的运算

$$|\vec{a} + \vec{b} + \vec{c}|^2 = |\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{a}\cdot\vec{c})$$

$$= 1 + 4 + 9 + 2\left(1 + 3 + \frac{3}{2}\right) = 14 + 2 \times \frac{11}{2} = 14 + 11 = 25$$

所以 $|\vec{a} + \vec{b} + \vec{c}| = 5$。

**⚠️ 易错提醒：** 展开三个向量和的模的平方时，交叉项有 $3$ 对（不是 $2$ 对），每对系数为 $2$。即 $2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{a}\cdot\vec{c})$，不要遗漏。

**💡 解题思路总结：** 多个向量和的模，通过展开平方转化为各向量模的平方和加上交叉项的数量积。关键是准确计算每个数量积。
