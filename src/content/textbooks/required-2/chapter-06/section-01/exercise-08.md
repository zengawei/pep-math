---
type: exercise
textbook: required-2
chapter: 6
section: 1
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-concept
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知向量 $\vec{a}$、$\vec{b}$、$\vec{c}$ 在平面内，满足 $\vec{a} \parallel \vec{b}$，$\vec{b} \parallel \vec{c}$，且 $\vec{b} \neq \vec{0}$。

(1) 证明：$\vec{a} \parallel \vec{c}$。

(2) 如果去掉条件 $\vec{b} \neq \vec{0}$，结论还成立吗？请说明理由。

---

**解答：**

**第1步：** 证明 $\vec{a} \parallel \vec{c}$（$\vec{b} \neq \vec{0}$）
> 📌 运用知识点：平面向量的概念——平行向量

因为 $\vec{a} \parallel \vec{b}$ 且 $\vec{b} \neq \vec{0}$，所以 $\vec{a}$ 与 $\vec{b}$ 方向相同或相反。

因为 $\vec{b} \parallel \vec{c}$ 且 $\vec{b} \neq \vec{0}$，所以 $\vec{c}$ 与 $\vec{b}$ 方向相同或相反。

因此 $\vec{a}$ 与 $\vec{c}$ 都与 $\vec{b}$ 方向相同或相反，从而 $\vec{a}$ 与 $\vec{c}$ 方向相同或相反。

所以 $\vec{a} \parallel \vec{c}$。

**第2步：** 讨论去掉 $\vec{b} \neq \vec{0}$ 的情况
> 📌 运用知识点：平面向量的概念——零向量

不成立。

反例：设 $\vec{b} = \vec{0}$，$\vec{a} = (1, 0)$，$\vec{c} = (0, 1)$。

因为零向量与任意向量平行，所以 $\vec{a} \parallel \vec{0}$ 成立，$\vec{0} \parallel \vec{c}$ 也成立。

但 $\vec{a} = (1, 0)$ 与 $\vec{c} = (0, 1)$ 不平行。

所以去掉条件 $\vec{b} \neq \vec{0}$ 后，结论不一定成立。

**💡 易错提醒：** 零向量与任意向量平行，这使得平行关系在涉及零向量时不具有传递性。在证明平行向量传递性时，必须排除零向量的情况。

**💡 解题思路总结：** 平行向量的传递性需要中间向量非零。涉及零向量时要特别注意，因为零向量的方向是任意的，会破坏传递性。
