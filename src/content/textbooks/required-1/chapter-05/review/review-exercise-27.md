---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 27
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P150 复习题 第27题"
---

**题目：** 已知函数 $f(x) = 2\sin\left(2x + \dfrac{\pi}{6}\right)$，求 $f(x)$ 在区间 $\left[-\dfrac{\pi}{6}, \dfrac{\pi}{3}\right]$ 上的最大值和最小值。

---

**解答：**

**第1步：** 确定整体范围
> 📌 运用知识点：复合函数的变量替换

当 $x \in \left[-\dfrac{\pi}{6}, \dfrac{\pi}{3}\right]$ 时：

$2x \in \left[-\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right]$

$2x + \dfrac{\pi}{6} \in \left[-\dfrac{\pi}{3} + \dfrac{\pi}{6}, \dfrac{2\pi}{3} + \dfrac{\pi}{6}\right] = \left[-\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$

**第2步：** 分析 $\sin$ 在 $\left[-\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$ 上的最值
> 📌 运用知识点：正弦函数在指定区间的值域

在 $\left[-\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right]$ 上：
- $\sin t$ 在 $\left[-\dfrac{\pi}{6}, \dfrac{\pi}{2}\right]$ 上递增，在 $\left[\dfrac{\pi}{2}, \dfrac{5\pi}{6}\right]$ 上递减
- 最大值：$\sin\dfrac{\pi}{2} = 1$（在 $t = \dfrac{\pi}{2}$ 处取到）
- 最小值：比较端点 $\sin\left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}$ 和 $\sin\dfrac{5\pi}{6} = \dfrac{1}{2}$

最小值为 $-\dfrac{1}{2}$。

**第3步：** 求 $f(x)$ 的最值
> 📌 运用知识点：乘以振幅

$f(x)_{\max} = 2 \times 1 = 2$

$f(x)_{\min} = 2 \times \left(-\dfrac{1}{2}\right) = -1$

**⚠️ 易错提醒：** 求闭区间上最值时，要比较区间内极值点和端点处的函数值。$\sin\dfrac{5\pi}{6} = \sin\dfrac{\pi}{6} = \dfrac{1}{2}$（不是 $-\dfrac{1}{2}$）。

**💡 解题思路总结：** 求三角函数在闭区间上的最值：(1) 确定整体范围；(2) 分析 $\sin$ 在该范围内的单调性和极值；(3) 比较极值点和端点值。
