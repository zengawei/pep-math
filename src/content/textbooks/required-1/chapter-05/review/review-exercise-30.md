---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P150 复习题 第30题"
---

**题目：** 某城市一天中气温变化近似满足函数 $T(t) = 20 + 8\sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right)$（$t$ 为时间，$0 \leq t \leq 24$，$t = 0$ 表示凌晨 $0:00$，$T$ 的单位为 $°\text{C}$）。

(1) 求该城市这一天的最高气温和最低气温，以及分别出现在什么时刻。

(2) 求气温在 $24°\text{C}$ 以上的时间段。

---

**解答：**

**第1步：** 求最高和最低气温
> 📌 运用知识点：三角函数的最值

$-1 \leq \sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right) \leq 1$

$T_{\max} = 20 + 8 \times 1 = 28\text{ (°C)}$

$T_{\min} = 20 + 8 \times (-1) = 12\text{ (°C)}$

**第2步：** 求取最值的时刻
> 📌 运用知识点：三角方程求解

最高温：$\sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right) = 1$

$\dfrac{\pi}{12}t - \dfrac{\pi}{2} = \dfrac{\pi}{2}$

$\dfrac{\pi}{12}t = \pi$

$t = 12$（即中午 $12:00$）

最低温：$\sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right) = -1$

$\dfrac{\pi}{12}t - \dfrac{\pi}{2} = -\dfrac{\pi}{2}$

$\dfrac{\pi}{12}t = 0$

$t = 0$（即凌晨 $0:00$）

**第3步：** 求气温在 $24°\text{C}$ 以上的时间段
> 📌 运用知识点：解三角不等式

$T(t) > 24$

$20 + 8\sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right) > 24$

$\sin\left(\dfrac{\pi}{12}t - \dfrac{\pi}{2}\right) > \dfrac{1}{2}$

令 $u = \dfrac{\pi}{12}t - \dfrac{\pi}{2}$，当 $t \in [0, 24]$ 时：

$u \in \left[-\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$

$\sin u > \dfrac{1}{2}$ 在 $\left[-\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$ 内的解为 $u \in \left(\dfrac{\pi}{6}, \dfrac{5\pi}{6}\right)$

$\dfrac{\pi}{6} < \dfrac{\pi}{12}t - \dfrac{\pi}{2} < \dfrac{5\pi}{6}$

$\dfrac{\pi}{6} + \dfrac{\pi}{2} < \dfrac{\pi}{12}t < \dfrac{5\pi}{6} + \dfrac{\pi}{2}$

$\dfrac{2\pi}{3} < \dfrac{\pi}{12}t < \dfrac{4\pi}{3}$

$8 < t < 16$

所以气温在 $24°\text{C}$ 以上的时间段为 $8:00$ 到 $16:00$。

**⚠️ 易错提醒：** 注意 $u$ 的范围是 $\left[-\dfrac{\pi}{2}, \dfrac{3\pi}{2}\right]$（不是 $[0, 2\pi]$）。$\sin u > \dfrac{1}{2}$ 的解是开区间（不含端点），对应时间也是开区间。

**💡 解题思路总结：** 三角函数实际应用题：(1) 利用最值公式求极值和时刻；(2) 解三角不等式确定满足条件的时间段；(3) 注意变量替换后范围的变化。
