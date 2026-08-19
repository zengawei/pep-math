---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 27
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P108 复习参考题 第27题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{4} + y^2 = 1$，$P$ 是椭圆上的点。求 $P$ 到直线 $x - y + 4 = 0$ 的距离的最小值。

---

**解答：**

**第1步：** 参数化
> 📌 运用知识点：圆锥曲线中的最值问题

设 $P(2\cos\theta, \sin\theta)$。

$$d = \frac{|2\cos\theta - \sin\theta + 4|}{\sqrt{2}}$$

**第2步：** 求最小值
> 📌 运用知识点：圆锥曲线中的最值问题

$2\cos\theta - \sin\theta = \sqrt{5}\cos(\theta + \varphi)$，其中 $\tan\varphi = \dfrac{1}{2}$。

$2\cos\theta - \sin\theta \in [-\sqrt{5}, \sqrt{5}]$。

$2\cos\theta - \sin\theta + 4 \in [4 - \sqrt{5}, 4 + \sqrt{5}]$。

因为 $4 - \sqrt{5} > 0$，所以 $|2\cos\theta - \sin\theta + 4|$ 的最小值为 $4 - \sqrt{5}$。

$$d_{\min} = \frac{4 - \sqrt{5}}{\sqrt{2}} = \frac{(4 - \sqrt{5})\sqrt{2}}{2} = \frac{4\sqrt{2} - \sqrt{10}}{2}$$

**⚠️ 易错提醒：** 椭圆上的点用参数方程 $(a\cos\theta, b\sin\theta)$ 表示，将距离问题转化为三角函数最值。辅助角公式 $A\cos\theta + B\sin\theta = \sqrt{A^2+B^2}\cos(\theta - \varphi)$。

**💡 解题思路总结：** 椭圆上点到直线距离的最值：参数化 → 辅助角公式 → 求三角函数最值。
