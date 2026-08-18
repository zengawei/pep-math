---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a} = (\cos\alpha, \sin\alpha)$，$\vec{b} = (\cos\beta, \sin\beta)$，求 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 计算 $|\vec{a} - \vec{b}|^2$
> 📌 运用知识点：向量的数量积

$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$

$|\vec{a}|^2 = \cos^2\alpha + \sin^2\alpha = 1$

$|\vec{b}|^2 = \cos^2\beta + \sin^2\beta = 1$

$\vec{a} \cdot \vec{b} = \cos\alpha\cos\beta + \sin\alpha\sin\beta = \cos(\alpha - \beta)$

**第2步：** 代入化简
> 📌 运用知识点：三角恒等式

$|\vec{a} - \vec{b}|^2 = 1 - 2\cos(\alpha - \beta) + 1 = 2 - 2\cos(\alpha - \beta)$

$|\vec{a} - \vec{b}| = \sqrt{2 - 2\cos(\alpha - \beta)}$

利用半角公式：$2 - 2\cos(\alpha - \beta) = 4\sin^2\frac{\alpha - \beta}{2}$

$|\vec{a} - \vec{b}| = 2\left|\sin\frac{\alpha - \beta}{2}\right|$

**💡 易错提醒：** $\vec{a} \cdot \vec{b} = \cos(\alpha - \beta)$ 是余弦差角公式。最终结果取绝对值。

**💡 解题思路总结：** 单位向量的模为 $1$，利用数量积的三角形式化简。
