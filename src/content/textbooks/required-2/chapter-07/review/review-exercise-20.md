---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 20
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - complex-number-concept
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知复数 $z$ 满足 $|z - 1 - i| = 1$，求 $|z|$ 的最大值和最小值。

---

**解答：**

**第1步：** 几何意义分析
> 📌 运用知识点：复数的模——几何意义

$|z - 1 - i| = 1$ 表示复平面上以 $(1, 1)$ 为圆心、$1$ 为半径的圆。

$|z|$ 表示圆上的点到原点 $(0, 0)$ 的距离。

**第2步：** 求最值
> 📌 运用知识点：几何关系

原点到圆心 $(1, 1)$ 的距离为 $d = \sqrt{1^2 + 1^2} = \sqrt{2}$。

$|z|$ 的最大值 $= d + r = \sqrt{2} + 1$

$|z|$ 的最小值 $= d - r = \sqrt{2} - 1$

**验证：** 设 $z = (1 + \cos\theta) + (1 + \sin\theta)i$

$|z|^2 = (1 + \cos\theta)^2 + (1 + \sin\theta)^2 = 3 + 2\cos\theta + 2\sin\theta = 3 + 2\sqrt{2}\sin(\theta + \frac{\pi}{4})$

最大值 $= 3 + 2\sqrt{2} = (\sqrt{2} + 1)^2$，$|z|_{\max} = \sqrt{2} + 1$ ✓

最小值 $= 3 - 2\sqrt{2} = (\sqrt{2} - 1)^2$，$|z|_{\min} = \sqrt{2} - 1$ ✓

**💡 易错提醒：** $|z - z_0| = r$ 表示以 $z_0$ 为圆心、$r$ 为半径的圆。$|z|$ 的最值等于圆心到原点的距离加减半径。

**💡 解题思路总结：** 利用复数模的几何意义，将问题转化为圆上的点到原点的距离的最值。
