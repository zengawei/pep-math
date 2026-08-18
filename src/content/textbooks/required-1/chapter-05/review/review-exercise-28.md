---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P150 复习题 第28题"
---

**题目：** 已知方程 $\sin x = a$（$-1 \leq a \leq 1$），在 $[0, 2\pi]$ 上有两个不同的解 $x_1$ 和 $x_2$，证明：$x_1 + x_2 = \pi$（当 $a > 0$ 时）或 $x_1 + x_2 = 3\pi$（当 $a < 0$ 时）。

---

**解答：**

**第1步：** 分析 $a > 0$ 的情况
> 📌 运用知识点：正弦函数的对称性

当 $a > 0$ 时，$\sin x = a$ 在 $[0, 2\pi]$ 上的两个解分别在第一象限和第二象限。

设 $x_1$ 在第一象限（$0 < x_1 < \dfrac{\pi}{2}$），则 $x_2 = \pi - x_1$（第二象限）。

$x_1 + x_2 = x_1 + (\pi - x_1) = \pi$

**第2步：** 分析 $a < 0$ 的情况
> 📌 运用知识点：正弦函数的对称性

当 $a < 0$ 时，$\sin x = a$ 在 $[0, 2\pi]$ 上的两个解分别在第三象限和第四象限。

设 $x_1$ 在第三象限（$\pi < x_1 < \dfrac{3\pi}{2}$），则 $x_2 = 2\pi - (x_1 - \pi) = 3\pi - x_1$（第四象限）。

验证：$\sin(3\pi - x_1) = \sin(\pi + (2\pi - x_1))$

更直接地：$\sin x_2 = \sin(3\pi - x_1) = \sin(\pi - (x_1 - \pi))$... 

利用对称性：$\sin x = a < 0$ 在第三、四象限的解关于 $x = \dfrac{3\pi}{2}$ 对称。

$x_1 + x_2 = 2 \times \dfrac{3\pi}{2} = 3\pi$

**第3步：** 特殊情况
> 📌 运用知识点：边界情况

当 $a = 0$ 时，$\sin x = 0$ 在 $[0, 2\pi]$ 上有三个解（$0, \pi, 2\pi$），不满足"两个不同解"的条件。

当 $a = 1$ 或 $a = -1$ 时，各只有一个解，也不满足条件。

所以 $a \neq 0$ 且 $|a| \neq 1$。

**⚠️ 易错提醒：** 注意 $\sin x = a$ 在 $[0, 2\pi]$ 上恰好有两个解的条件是 $-1 < a < 1$ 且 $a \neq 0$。对称轴分别是 $x = \dfrac{\pi}{2}$（$a > 0$）和 $x = \dfrac{3\pi}{2}$（$a < 0$）。

**💡 解题思路总结：** $\sin x = a$ 的解的对称性：(1) $a > 0$ 时两解关于 $x = \dfrac{\pi}{2}$ 对称，$x_1 + x_2 = \pi$；(2) $a < 0$ 时两解关于 $x = \dfrac{3\pi}{2}$ 对称，$x_1 + x_2 = 3\pi$。
