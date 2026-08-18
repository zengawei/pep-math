---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - vector-dot-product
  - vector-addition-subtraction
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 在平面直角坐标系 $xOy$ 中，已知点 $A(1, 0)$，$B(0, 1)$。$P$ 是直线 $y = x$ 上的一个动点。

(1) 若 $\overrightarrow{PA} \cdot \overrightarrow{PB} = 0$，求 $P$ 的坐标；

(2) 求 $|\overrightarrow{PA}|^2 + |\overrightarrow{PB}|^2$ 的最小值。

---

**解答：**

**第1步：** (1) 设 $P(t, t)$
> 📌 运用知识点：向量的坐标

$\overrightarrow{PA} = (1 - t, -t)$，$\overrightarrow{PB} = (-t, 1 - t)$

$\overrightarrow{PA} \cdot \overrightarrow{PB} = (1-t)(-t) + (-t)(1-t) = -t(1-t) - t(1-t) = -2t(1-t) = 0$

$t = 0$ 或 $t = 1$。

$P$ 的坐标为 $(0, 0)$ 或 $(1, 1)$。

**第2步：** (2) 求最小值
> 📌 运用知识点：向量的模——二次函数

$|\overrightarrow{PA}|^2 = (1-t)^2 + t^2 = 1 - 2t + 2t^2$

$|\overrightarrow{PB}|^2 = t^2 + (1-t)^2 = 1 - 2t + 2t^2$

$|\overrightarrow{PA}|^2 + |\overrightarrow{PB}|^2 = 2(1 - 2t + 2t^2) = 4t^2 - 4t + 2 = 4(t - \frac{1}{2})^2 + 1$

当 $t = \frac{1}{2}$ 时取最小值 $1$。

**💡 易错提醒：** 动点 $P$ 在 $y = x$ 上，设 $P(t, t)$ 将问题转化为关于 $t$ 的函数。

**💡 解题思路总结：** 设参数将向量问题转化为函数最值问题，用配方法求最小值。
