---
type: example
textbook: required-1
chapter: 5
section: 3
number: 5
difficulty: hard
category: example
group: A
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P143 例5"
---

**题目：** 已知函数 $y = A\sin(\omega x + \varphi)$（$A > 0$，$\omega > 0$，$|\varphi| < \dfrac{\pi}{2}$）的图象的一个最高点为 $(2, \sqrt{2})$，由这个最高点到相邻最低点，图象与 $x$ 轴交于点 $(6, 0)$，求此函数的解析式。

---

**解答：**

**第1步：** 确定 $A$
> 📌 运用知识点：振幅

最高点纵坐标为 $\sqrt{2}$，所以 $A = \sqrt{2}$。

**第2步：** 确定 $\omega$
> 📌 运用知识点：周期的几何意义

从最高点到相邻与 $x$ 轴的交点（下降段），水平距离为 $\dfrac{T}{4}$。

$\dfrac{T}{4} = 6 - 2 = 4$

$T = 16$

$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{16} = \dfrac{\pi}{8}$

**第3步：** 确定 $\varphi$
> 📌 运用知识点：代入最高点条件

最高点处 $\sin(\omega x + \varphi) = 1$，即 $\omega x + \varphi = \dfrac{\pi}{2} + 2k\pi$。

代入 $(2, \sqrt{2})$：

$\dfrac{\pi}{8} \times 2 + \varphi = \dfrac{\pi}{2} + 2k\pi$

$\dfrac{\pi}{4} + \varphi = \dfrac{\pi}{2}$（取 $k = 0$）

$\varphi = \dfrac{\pi}{2} - \dfrac{\pi}{4} = \dfrac{\pi}{4}$

验证：$|\varphi| = \dfrac{\pi}{4} < \dfrac{\pi}{2}$，满足条件。

所以 $y = \sqrt{2}\sin\left(\dfrac{\pi}{8}x + \dfrac{\pi}{4}\right)$。

**⚠️ 易错提醒：** 从最高点到相邻零点（下降段）是 $\dfrac{T}{4}$（不是 $\dfrac{T}{2}$）。最高点处相位为 $\dfrac{\pi}{2} + 2k\pi$，不是 $0$ 或 $\pi$。

**💡 解题思路总结：** 由图象信息求解析式：(1) $A$ 由最高点纵坐标确定；(2) 利用最高点与相邻零点的距离确定 $T$（距离 $= \dfrac{T}{4}$）；(3) 代入最高点条件求 $\varphi$。
