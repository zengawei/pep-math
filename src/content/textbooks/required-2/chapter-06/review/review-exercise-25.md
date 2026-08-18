---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$ 是两个非零向量，且 $|\vec{a}| = 1$，$|\vec{b}| = 2$，$\vec{a}$ 与 $\vec{b}$ 的夹角为 $\frac{\pi}{3}$。求 $|t\vec{a} + \vec{b}|$ 的最小值及此时 $t$ 的值。

---

**解答：**

**第1步：** 展开 $|t\vec{a} + \vec{b}|^2$
> 📌 运用知识点：向量的数量积

$|t\vec{a} + \vec{b}|^2 = t^2|\vec{a}|^2 + 2t\vec{a} \cdot \vec{b} + |\vec{b}|^2$

$\vec{a} \cdot \vec{b} = 1 \times 2 \times \cos\frac{\pi}{3} = 2 \times \frac{1}{2} = 1$

$|t\vec{a} + \vec{b}|^2 = t^2 + 2t + 4$

**第2步：** 求最小值
> 📌 运用知识点：二次函数

$f(t) = t^2 + 2t + 4 = (t + 1)^2 + 3$

当 $t = -1$ 时，$f(t)$ 取最小值 $3$。

$|t\vec{a} + \vec{b}|$ 的最小值为 $\sqrt{3}$，此时 $t = -1$。

**💡 易错提醒：** 将 $|t\vec{a} + \vec{b}|^2$ 展开为关于 $t$ 的二次函数，用配方法求最小值。

**💡 解题思路总结：** 向量模的最值问题转化为二次函数最值。先展开，再配方。
