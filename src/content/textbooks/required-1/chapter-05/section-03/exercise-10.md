---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P150 复习题 第10题"
---

**题目：** 已知函数 $f(x) = A\sin(\omega x + \varphi)$（$A > 0$，$\omega > 0$，$0 < \varphi < \pi$）的周期为 $\pi$，且图象过点 $\left(\dfrac{\pi}{12}, \sqrt{3}\right)$，该点为函数的一个最高点。求 $f(x)$ 的解析式，并求 $f(x)$ 在 $\left[0, \dfrac{\pi}{2}\right]$ 上的值域。

---

**解答：**

**第1步：** 确定 $\omega$ 和 $A$
> 📌 运用知识点：周期公式与振幅

$T = \pi$，$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi} = 2$

最高点纵坐标为 $\sqrt{3}$，所以 $A = \sqrt{3}$。

**第2步：** 确定 $\varphi$
> 📌 运用知识点：代入特殊点

$\left(\dfrac{\pi}{12}, \sqrt{3}\right)$ 是最高点，代入 $f(x) = \sqrt{3}\sin(2x + \varphi)$：

$\sqrt{3} = \sqrt{3}\sin\left(2 \times \dfrac{\pi}{12} + \varphi\right)$

$\sin\left(\dfrac{\pi}{6} + \varphi\right) = 1$

$\dfrac{\pi}{6} + \varphi = \dfrac{\pi}{2} + 2k\pi$

$\varphi = \dfrac{\pi}{3} + 2k\pi$

因为 $0 < \varphi < \pi$，取 $k = 0$，$\varphi = \dfrac{\pi}{3}$。

所以 $f(x) = \sqrt{3}\sin\left(2x + \dfrac{\pi}{3}\right)$。

**第3步：** 求在 $\left[0, \dfrac{\pi}{2}\right]$ 上的值域
> 📌 运用知识点：复合函数值域

当 $x \in \left[0, \dfrac{\pi}{2}\right]$ 时：

$2x + \dfrac{\pi}{3} \in \left[\dfrac{\pi}{3}, \pi + \dfrac{\pi}{3}\right] = \left[\dfrac{\pi}{3}, \dfrac{4\pi}{3}\right]$

在 $\left[\dfrac{\pi}{3}, \dfrac{4\pi}{3}\right]$ 上：
- 当 $2x + \dfrac{\pi}{3} = \dfrac{\pi}{2}$ 时，$\sin$ 取最大值 $1$，$f(x) = \sqrt{3}$
- 当 $2x + \dfrac{\pi}{3} = \dfrac{4\pi}{3}$ 时，$\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}$，$f(x) = \sqrt{3} \times \left(-\dfrac{\sqrt{3}}{2}\right) = -\dfrac{3}{2}$

所以值域为 $\left[-\dfrac{3}{2}, \sqrt{3}\right]$。

**⚠️ 易错提醒：** 求值域时关键是确定整体 $\omega x + \varphi$ 的范围，再分析 $\sin$ 在该范围内的取值。注意 $\dfrac{4\pi}{3}$ 在第三象限，$\sin\dfrac{4\pi}{3} = -\sin\dfrac{\pi}{3} = -\dfrac{\sqrt{3}}{2}$。

**💡 解题思路总结：** 求三角函数在闭区间上的值域：(1) 确定整体 $\omega x + \varphi$ 的范围；(2) 分析 $\sin$ 在该范围内的最大最小值；(3) 乘以 $A$ 得到最终值域。
