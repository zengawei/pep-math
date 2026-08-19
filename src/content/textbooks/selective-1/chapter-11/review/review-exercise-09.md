---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 9
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P19 复习参考题 第9题"
---

**题目：** 已知 $|\vec{a}| = 2$，$|\vec{b}| = 3$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $60°$，求 $|\vec{a} + \vec{b}|$ 和 $|\vec{a} - \vec{b}|$。

---

**解答：**

**第1步：** 计算 $|\vec{a} + \vec{b}|$
> 📌 运用知识点：空间向量的运算

$$|\vec{a} + \vec{b}|^2 = (\vec{a} + \vec{b}) \cdot (\vec{a} + \vec{b}) = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$$

其中 $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 60° = 2 \times 3 \times \dfrac{1}{2} = 3$。

$$|\vec{a} + \vec{b}|^2 = 4 + 2 \times 3 + 9 = 19$$

所以 $|\vec{a} + \vec{b}| = \sqrt{19}$。

**第2步：** 计算 $|\vec{a} - \vec{b}|$
> 📌 运用知识点：空间向量的运算

$$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = 4 - 6 + 9 = 7$$

所以 $|\vec{a} - \vec{b}| = \sqrt{7}$。

**⚠️ 易错提醒：** 展开 $|\vec{a} \pm \vec{b}|^2$ 时注意中间项的符号。$|\vec{a} + \vec{b}|^2$ 中间项为 $+2\vec{a}\cdot\vec{b}$，$|\vec{a} - \vec{b}|^2$ 中间项为 $-2\vec{a}\cdot\vec{b}$。

**💡 解题思路总结：** 已知模和夹角求和（差）向量的模，核心公式是 $|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a}\cdot\vec{b} + |\vec{b}|^2$，先算数量积再代入。
