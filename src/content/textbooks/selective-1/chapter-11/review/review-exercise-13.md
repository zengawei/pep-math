---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-fundamental-theorem
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P21 复习参考题 第13题"
---

**题目：** 在空间四边形 $OABC$ 中，$OA = a$，$OB = b$，$OC = c$，且 $\angle AOB = \angle BOC = \angle AOC = 60°$。设 $M$ 为 $AB$ 的中点，$N$ 为 $OC$ 的中点。

(1) 用 $\vec{a} = \overrightarrow{OA}$，$\vec{b} = \overrightarrow{OB}$，$\vec{c} = \overrightarrow{OC}$ 表示 $\overrightarrow{MN}$。

(2) 若 $a = b = c = 2$，求 $|\overrightarrow{MN}|$。

---

**解答：**

**第1步：** 表示 $\overrightarrow{MN}$
> 📌 运用知识点：空间向量基本定理

$$\overrightarrow{OM} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB}) = \frac{1}{2}(\vec{a} + \vec{b})$$

$$\overrightarrow{ON} = \frac{1}{2}\vec{c}$$

$$\overrightarrow{MN} = \overrightarrow{ON} - \overrightarrow{OM} = \frac{1}{2}\vec{c} - \frac{1}{2}(\vec{a} + \vec{b}) = -\frac{1}{2}\vec{a} - \frac{1}{2}\vec{b} + \frac{1}{2}\vec{c}$$

**第2步：** 计算 $|\overrightarrow{MN}|$
> 📌 运用知识点：空间向量的运算

已知 $|\vec{a}| = |\vec{b}| = |\vec{c}| = 2$，且 $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{a} \cdot \vec{c} = 2 \times 2 \times \cos 60° = 2$。

$$|\overrightarrow{MN}|^2 = \frac{1}{4}|\vec{a} + \vec{b} - \vec{c}|^2 = \frac{1}{4}(|\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 + 2\vec{a}\cdot\vec{b} - 2\vec{a}\cdot\vec{c} - 2\vec{b}\cdot\vec{c})$$

$$= \frac{1}{4}(4 + 4 + 4 + 4 - 4 - 4) = \frac{1}{4} \times 8 = 2$$

所以 $|\overrightarrow{MN}| = \sqrt{2}$。

**⚠️ 易错提醒：** 展开 $|\vec{a} + \vec{b} - \vec{c}|^2$ 时，交叉项的符号容易出错。$(\vec{a} + \vec{b} - \vec{c})^2$ 中 $\vec{a}\cdot\vec{b}$ 系数为 $+2$，$\vec{a}\cdot\vec{c}$ 和 $\vec{b}\cdot\vec{c}$ 系数为 $-2$。

**💡 解题思路总结：** 用基向量表示目标向量时，关键是找到中间路径。展开模的平方时，要仔细处理每一项的符号。
