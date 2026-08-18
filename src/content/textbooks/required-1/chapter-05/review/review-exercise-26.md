---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P150 复习题 第26题"
---

**题目：** 已知函数 $y = A\sin(\omega x + \varphi)$（$A > 0$，$\omega > 0$，$|\varphi| < \dfrac{\pi}{2}$）的图象相邻两条对称轴之间的距离为 $\dfrac{\pi}{2}$，且图象过点 $\left(\dfrac{\pi}{6}, 2\right)$，该点为最高点。求函数的解析式。

---

**解答：**

**第1步：** 确定 $\omega$
> 📌 运用知识点：对称轴间距与周期的关系

相邻两条对称轴之间的距离为半个周期：

$\dfrac{T}{2} = \dfrac{\pi}{2}$，$T = \pi$

$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi} = 2$

**第2步：** 确定 $A$ 和 $\varphi$
> 📌 运用知识点：最高点条件

最高点纵坐标为 $2$，所以 $A = 2$。

最高点处 $\sin\left(2 \times \dfrac{\pi}{6} + \varphi\right) = 1$

$\sin\left(\dfrac{\pi}{3} + \varphi\right) = 1$

$\dfrac{\pi}{3} + \varphi = \dfrac{\pi}{2}$

$\varphi = \dfrac{\pi}{2} - \dfrac{\pi}{3} = \dfrac{\pi}{6}$

验证：$|\varphi| = \dfrac{\pi}{6} < \dfrac{\pi}{2}$，满足。

所以 $y = 2\sin\left(2x + \dfrac{\pi}{6}\right)$。

**⚠️ 易错提醒：** 相邻对称轴间距 $= \dfrac{T}{2}$（不是 $T$）。最高点处相位 $= \dfrac{\pi}{2} + 2k\pi$，取 $k=0$ 即可。

**💡 解题思路总结：** 由图象信息求解析式：(1) 对称轴间距 $= \dfrac{T}{2}$ 求 $T$ 和 $\omega$；(2) 最高点纵坐标 $= A$；(3) 代入最高点求 $\varphi$。
