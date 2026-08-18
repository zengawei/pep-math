---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a} = (\cos\theta, \sin\theta)$，$\vec{b} = (\sqrt{3}, -1)$。求 $|2\vec{a} - \vec{b}|$ 的最大值和最小值。

---

**解答：**

**第1步：** 计算 $|2\vec{a} - \vec{b}|^2$
> 📌 运用知识点：向量的数量积

$2\vec{a} - \vec{b} = (2\cos\theta - \sqrt{3}, 2\sin\theta + 1)$

$|2\vec{a} - \vec{b}|^2 = (2\cos\theta - \sqrt{3})^2 + (2\sin\theta + 1)^2$

$= 4\cos^2\theta - 4\sqrt{3}\cos\theta + 3 + 4\sin^2\theta + 4\sin\theta + 1$

$= 4(\cos^2\theta + \sin^2\theta) - 4\sqrt{3}\cos\theta + 4\sin\theta + 4$

$= 4 - 4\sqrt{3}\cos\theta + 4\sin\theta + 4$

$= 8 + 4(\sin\theta - \sqrt{3}\cos\theta)$

**第2步：** 利用辅助角公式
> 📌 运用知识点：三角函数

$\sin\theta - \sqrt{3}\cos\theta = 2\sin(\theta - \frac{\pi}{3})$

$|2\vec{a} - \vec{b}|^2 = 8 + 8\sin(\theta - \frac{\pi}{3})$

因为 $\sin(\theta - \frac{\pi}{3}) \in [-1, 1]$：

最大值：$8 + 8 = 16$，$|2\vec{a} - \vec{b}|_{\max} = 4$

最小值：$8 - 8 = 0$，$|2\vec{a} - \vec{b}|_{\min} = 0$

**💡 易错提醒：** 展开后利用 $\cos^2\theta + \sin^2\theta = 1$ 化简，再用辅助角公式求最值。

**💡 解题思路总结：** 展开模的平方，利用三角恒等式化简为 $A + B\sin(\theta + \varphi)$ 的形式求最值。
