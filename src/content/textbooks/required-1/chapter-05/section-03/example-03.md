---
type: example
textbook: required-1
chapter: 5
section: 3
number: 3
difficulty: basic
category: example
group: A
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P137 例3"
---

**题目：** 用五点法画出函数 $y = \sin(2x)$ 在一个周期内的图象。

---

**解答：**

**第1步：** 确定周期和五个关键点
> 📌 运用知识点：五点法

$T = \dfrac{2\pi}{2} = \pi$

令 $t = 2x$，当 $t$ 取 $0, \dfrac{\pi}{2}, \pi, \dfrac{3\pi}{2}, 2\pi$ 时，$\sin t$ 分别取 $0, 1, 0, -1, 0$。

对应 $x = \dfrac{t}{2}$：

| $x$ | $0$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{2}$ | $\dfrac{3\pi}{4}$ | $\pi$ |
|-----|-----|-------------------|-------------------|---------------------|-------|
| $y$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

**第2步：** 描点连线
> 📌 运用知识点：正弦函数图象

在坐标系中标出五个关键点：

$(0, 0)$，$\left(\dfrac{\pi}{4}, 1\right)$，$\left(\dfrac{\pi}{2}, 0\right)$，$\left(\dfrac{3\pi}{4}, -1\right)$，$(\pi, 0)$

用光滑曲线连接这五个点，得到 $y = \sin(2x)$ 在 $[0, \pi]$ 上的图象。

**⚠️ 易错提醒：** 五点法中 $x$ 的值是 $t/\omega$，不要直接写 $t$ 的值。注意 $y = \sin(2x)$ 的周期是 $\pi$（不是 $2\pi$），所以一个完整周期只需画 $[0, \pi]$。

**💡 解题思路总结：** 五点法画 $y = \sin(\omega x)$ 的图象：(1) 求周期 $T$；(2) 令整体 $\omega x$ 取 $0, \dfrac{\pi}{2}, \pi, \dfrac{3\pi}{2}, 2\pi$；(3) 解出 $x$ 并列表；(4) 描点连线。
