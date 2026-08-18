---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P142 练习 第8题"
---

**题目：** 下图是函数 $y = A\sin(\omega x + \varphi)$（$A > 0$，$\omega > 0$，$|\varphi| < \dfrac{\pi}{2}$）的图象，已知图象过最高点 $\left(\dfrac{\pi}{6}, 2\right)$，相邻最低点为 $\left(\dfrac{2\pi}{3}, -2\right)$，求该函数的解析式。

---

**解答：**

**第1步：** 确定振幅 $A$
> 📌 运用知识点：振幅的定义

最高点的 $y$ 值为 $2$，最低点的 $y$ 值为 $-2$。

$A = \dfrac{y_{\max} - y_{\min}}{2} = \dfrac{2 - (-2)}{2} = 2$

**第2步：** 确定 $\omega$
> 📌 运用知识点：周期与 $\omega$ 的关系

最高点到相邻最低点的水平距离为半个周期：

$\dfrac{T}{2} = \dfrac{2\pi}{3} - \dfrac{\pi}{6} = \dfrac{4\pi}{6} - \dfrac{\pi}{6} = \dfrac{3\pi}{6} = \dfrac{\pi}{2}$

$T = \pi$

$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi} = 2$

**第3步：** 确定初相 $\varphi$
> 📌 运用知识点：代入已知点求解

将最高点 $\left(\dfrac{\pi}{6}, 2\right)$ 代入 $y = 2\sin(2x + \varphi)$：

$2 = 2\sin\left(2 \times \dfrac{\pi}{6} + \varphi\right)$

$\sin\left(\dfrac{\pi}{3} + \varphi\right) = 1$

$\dfrac{\pi}{3} + \varphi = \dfrac{\pi}{2} + 2k\pi$

$\varphi = \dfrac{\pi}{2} - \dfrac{\pi}{3} = \dfrac{\pi}{6}$

验证：$|\varphi| = \dfrac{\pi}{6} < \dfrac{\pi}{2}$，满足条件。

所以函数解析式为 $y = 2\sin\left(2x + \dfrac{\pi}{6}\right)$。

**⚠️ 易错提醒：** 最高点到相邻最低点的距离是半个周期（不是整个周期）。求 $\varphi$ 时注意利用条件 $|\varphi| < \dfrac{\pi}{2}$ 确定 $k$ 的值。

**💡 解题思路总结：** 由图象信息求 $y = A\sin(\omega x + \varphi)$ 的解析式：(1) $A$ 由最值确定；(2) $T$ 由相邻最高（低）点间距或最高到最低点间距确定，再求 $\omega$；(3) 代入特殊点求 $\varphi$。
