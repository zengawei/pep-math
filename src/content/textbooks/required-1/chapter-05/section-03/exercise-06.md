---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P140 练习 第6题"
---

**题目：** 求函数 $y = 2\sin\left(\dfrac{x}{2} + \dfrac{\pi}{6}\right)$ 的单调递增区间。

---

**解答：**

**第1步：** 确定单调递增条件
> 📌 运用知识点：正弦函数的单调性

$y = \sin t$ 在 $t \in \left[-\dfrac{\pi}{2} + 2k\pi, \dfrac{\pi}{2} + 2k\pi\right]$（$k \in \mathbb{Z}$）上单调递增。

令 $t = \dfrac{x}{2} + \dfrac{\pi}{6}$，则需：

$-\dfrac{\pi}{2} + 2k\pi \leq \dfrac{x}{2} + \dfrac{\pi}{6} \leq \dfrac{\pi}{2} + 2k\pi$

**第2步：** 解不等式
> 📌 运用知识点：解三角不等式

$-\dfrac{\pi}{2} - \dfrac{\pi}{6} + 2k\pi \leq \dfrac{x}{2} \leq \dfrac{\pi}{2} - \dfrac{\pi}{6} + 2k\pi$

$-\dfrac{2\pi}{3} + 2k\pi \leq \dfrac{x}{2} \leq \dfrac{\pi}{3} + 2k\pi$

$-\dfrac{4\pi}{3} + 4k\pi \leq x \leq \dfrac{2\pi}{3} + 4k\pi$

所以单调递增区间为 $\left[-\dfrac{4\pi}{3} + 4k\pi, \dfrac{2\pi}{3} + 4k\pi\right]$（$k \in \mathbb{Z}$）。

**⚠️ 易错提醒：** 解不等式时注意 $\omega = \dfrac{1}{2} > 0$，不等号方向不变。如果 $\omega < 0$，需要先提取负号转化为正的情况。不要忘记 $k \in \mathbb{Z}$。

**💡 解题思路总结：** 求 $y = A\sin(\omega x + \varphi)$ 的单调区间：令整体 $\omega x + \varphi$ 在 $\sin$ 的单调区间内，解出 $x$ 的范围。注意 $\omega$ 的正负和 $k \in \mathbb{Z}$。
