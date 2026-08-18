---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P147 复习题 第12题"
---

**题目：** 求函数 $y = 2\sin\left(3x + \dfrac{\pi}{6}\right)$ 的单调递减区间。

---

**解答：**

**第1步：** 确定递减条件
> 📌 运用知识点：正弦函数的单调递减区间

$y = \sin t$ 在 $t \in \left[\dfrac{\pi}{2} + 2k\pi, \dfrac{3\pi}{2} + 2k\pi\right]$（$k \in \mathbb{Z}$）上单调递减。

令 $t = 3x + \dfrac{\pi}{6}$，需：

$\dfrac{\pi}{2} + 2k\pi \leq 3x + \dfrac{\pi}{6} \leq \dfrac{3\pi}{2} + 2k\pi$

**第2步：** 解不等式
> 📌 运用知识点：解三角不等式

$\dfrac{\pi}{2} - \dfrac{\pi}{6} + 2k\pi \leq 3x \leq \dfrac{3\pi}{2} - \dfrac{\pi}{6} + 2k\pi$

$\dfrac{\pi}{3} + 2k\pi \leq 3x \leq \dfrac{4\pi}{3} + 2k\pi$

$\dfrac{\pi}{9} + \dfrac{2k\pi}{3} \leq x \leq \dfrac{4\pi}{9} + \dfrac{2k\pi}{3}$

所以单调递减区间为 $\left[\dfrac{\pi}{9} + \dfrac{2k\pi}{3}, \dfrac{4\pi}{9} + \dfrac{2k\pi}{3}\right]$（$k \in \mathbb{Z}$）。

**⚠️ 易错提醒：** 正弦函数的递减区间是 $\left[\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$（不是 $\left[0, \pi\right]$）。除以 $3$ 时每一项都要除。

**💡 解题思路总结：** 求 $y = A\sin(\omega x + \varphi)$ 的单调区间：令整体在 $\sin$ 的单调区间内，解出 $x$。$\omega > 0$ 时不等号方向不变。
