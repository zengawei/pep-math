---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P149 复习题 第24题"
---

**题目：** 利用三角函数线，求满足 $\cos x \geq -\dfrac{1}{2}$ 且 $x \in [0, 2\pi]$ 的 $x$ 的取值范围。

---

**解答：**

**第1步：** 找等号成立的角
> 📌 运用知识点：余弦函数值

$\cos x = -\dfrac{1}{2}$ 在 $[0, 2\pi]$ 内的解为 $x = \dfrac{2\pi}{3}$ 和 $x = \dfrac{4\pi}{3}$。

**第2步：** 确定满足条件的范围
> 📌 运用知识点：余弦函数图象

在 $[0, 2\pi]$ 上，$\cos x$ 的变化趋势：
- $x = 0$ 时 $\cos x = 1$
- $x$ 从 $0$ 到 $\pi$，$\cos x$ 从 $1$ 递减到 $-1$
- $x$ 从 $\pi$ 到 $2\pi$，$\cos x$ 从 $-1$ 递增到 $1$

$\cos x \geq -\dfrac{1}{2}$ 的范围：
- $x \in \left[0, \dfrac{2\pi}{3}\right]$（$\cos x$ 从 $1$ 降到 $-\dfrac{1}{2}$）
- $x \in \left[\dfrac{4\pi}{3}, 2\pi\right]$（$\cos x$ 从 $-\dfrac{1}{2}$ 升到 $1$）

合并得：$x \in \left[0, \dfrac{2\pi}{3}\right] \cup \left[\dfrac{4\pi}{3}, 2\pi\right]$

**⚠️ 易错提醒：** $\cos x = -\dfrac{1}{2}$ 在 $[0, 2\pi]$ 内有两个解：$\dfrac{2\pi}{3}$（第二象限）和 $\dfrac{4\pi}{3}$（第三象限）。不要遗漏。

**💡 解题思路总结：** 解三角不等式：(1) 找等号成立的角；(2) 根据函数单调性确定满足不等式的区间；(3) 写出并集。
