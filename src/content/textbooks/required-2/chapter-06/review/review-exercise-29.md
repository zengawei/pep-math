---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 设 $\vec{a} = (1 + \cos\alpha, \sin\alpha)$，$\vec{b} = (1 - \cos\beta, \sin\beta)$，$\vec{c} = (1, 0)$，其中 $\alpha \in (0, \pi)$，$\beta \in (0, \pi)$。$\vec{a}$ 与 $\vec{c}$ 的夹角为 $\theta_1$，$\vec{b}$ 与 $\vec{c}$ 的夹角为 $\theta_2$。已知 $\theta_1 - \theta_2 = \frac{\pi}{6}$，求 $\sin\frac{\alpha - \beta}{2}$ 的值。

---

**解答：**

**第1步：** 求 $\theta_1$ 和 $\theta_2$
> 📌 运用知识点：向量夹角

$|\vec{a}| = \sqrt{(1+\cos\alpha)^2 + \sin^2\alpha} = \sqrt{2 + 2\cos\alpha} = 2\cos\frac{\alpha}{2}$（$\alpha \in (0,\pi)$，$\cos\frac{\alpha}{2} > 0$）

$\vec{a} \cdot \vec{c} = 1 + \cos\alpha = 2\cos^2\frac{\alpha}{2}$

$\cos\theta_1 = \frac{2\cos^2\frac{\alpha}{2}}{2\cos\frac{\alpha}{2}} = \cos\frac{\alpha}{2}$

因为 $\frac{\alpha}{2} \in (0, \frac{\pi}{2})$，$\theta_1 = \frac{\alpha}{2}$。

同理：$|\vec{b}| = \sqrt{2 - 2\cos\beta} = 2\sin\frac{\beta}{2}$

$\vec{b} \cdot \vec{c} = 1 - \cos\beta = 2\sin^2\frac{\beta}{2}$

$\cos\theta_2 = \frac{2\sin^2\frac{\beta}{2}}{2\sin\frac{\beta}{2}} = \sin\frac{\beta}{2} = \cos(\frac{\pi}{2} - \frac{\beta}{2})$

$\theta_2 = \frac{\pi}{2} - \frac{\beta}{2}$

**第2步：** 利用条件求值
> 📌 运用知识点：三角函数

$\theta_1 - \theta_2 = \frac{\alpha}{2} - (\frac{\pi}{2} - \frac{\beta}{2}) = \frac{\alpha + \beta}{2} - \frac{\pi}{2} = \frac{\pi}{6}$

$\frac{\alpha + \beta}{2} = \frac{2\pi}{3}$

题目要求 $\sin\frac{\alpha - \beta}{2}$，但由已知只能确定 $\frac{\alpha + \beta}{2}$。

重新审视：若条件为 $\theta_1 - \theta_2 = \frac{\pi}{6}$，则 $\frac{\alpha + \beta}{2} = \frac{2\pi}{3}$。

此条件无法唯一确定 $\sin\frac{\alpha - \beta}{2}$。若补充条件或理解为求 $\cos\frac{\alpha+\beta}{2}$：

$\cos\frac{\alpha + \beta}{2} = \cos\frac{2\pi}{3} = -\frac{1}{2}$

**💡 易错提醒：** 利用半角公式化简模和数量积是本题关键。注意 $\alpha \in (0, \pi)$ 时 $\cos\frac{\alpha}{2} > 0$。

**💡 解题思路总结：** 用半角公式化简向量夹角，将几何条件转化为三角方程。
