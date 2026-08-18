---
type: exercise
textbook: required-2
chapter: 6
section: 2
number: 9
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $|\vec{a}| = 3$，$|\vec{b}| = 4$，求 $|\vec{a} + \vec{b}|$ 的取值范围。

---

**解答：**

**第1步：** 利用向量模的不等式
> 📌 运用知识点：向量的加法——三角不等式

由三角不等式：

$$\big||\vec{a}| - |\vec{b}|\big| \leq |\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$$

**第2步：** 代入计算
> 📌 运用知识点：向量的模

$$\big|3 - 4\big| \leq |\vec{a} + \vec{b}| \leq 3 + 4$$

$$1 \leq |\vec{a} + \vec{b}| \leq 7$$

当 $\vec{a}$ 与 $\vec{b}$ 反向时取等号 $|\vec{a} + \vec{b}| = 1$；当 $\vec{a}$ 与 $\vec{b}$ 同向时取等号 $|\vec{a} + \vec{b}| = 7$。

所以 $|\vec{a} + \vec{b}|$ 的取值范围是 $[1, 7]$。

**💡 易错提醒：** 三角不等式 $|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$ 中等号成立条件是 $\vec{a}$ 与 $\vec{b}$ 同向。不要忽略下界 $\big||\vec{a}| - |\vec{b}|\big|$。

**💡 解题思路总结：** 向量模的取值范围问题，利用三角不等式 $\big||\vec{a}| - |\vec{b}|\big| \leq |\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$ 求解。
