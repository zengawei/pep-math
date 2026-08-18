---
type: exercise
textbook: required-1
chapter: 5
section: 2
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P150 复习题 第10题"
---

**题目：** 已知 $\sin\alpha + \cos\alpha = \dfrac{1}{5}$，且 $0 < \alpha < \pi$，求 $\tan\alpha$ 的值。

---

**解答：**

**第1步：** 利用平方关系求 $\sin\alpha \cdot \cos\alpha$
> 📌 运用知识点：同角关系 $(\sin\alpha + \cos\alpha)^2 = 1 + 2\sin\alpha\cos\alpha$

$(\sin\alpha + \cos\alpha)^2 = \dfrac{1}{25}$

$\sin^2\alpha + 2\sin\alpha\cos\alpha + \cos^2\alpha = \dfrac{1}{25}$

$1 + 2\sin\alpha\cos\alpha = \dfrac{1}{25}$

$2\sin\alpha\cos\alpha = \dfrac{1}{25} - 1 = -\dfrac{24}{25}$

$\sin\alpha\cos\alpha = -\dfrac{12}{25}$

**第2步：** 判断 $\alpha$ 所在象限
> 📌 运用知识点：象限判断

因为 $\sin\alpha\cos\alpha = -\dfrac{12}{25} < 0$，且 $0 < \alpha < \pi$（即 $\sin\alpha > 0$），

所以 $\cos\alpha < 0$，$\alpha$ 在第二象限。

**第3步：** 求 $\sin\alpha - \cos\alpha$
> 📌 运用知识点：同角关系

$(\sin\alpha - \cos\alpha)^2 = 1 - 2\sin\alpha\cos\alpha = 1 - 2\left(-\dfrac{12}{25}\right) = 1 + \dfrac{24}{25} = \dfrac{49}{25}$

因为 $\sin\alpha > 0$，$\cos\alpha < 0$，所以 $\sin\alpha - \cos\alpha > 0$。

$\sin\alpha - \cos\alpha = \dfrac{7}{5}$

**第4步：** 求 $\sin\alpha$、$\cos\alpha$ 和 $\tan\alpha$
> 📌 运用知识点：方程组求解

联立：
$\sin\alpha + \cos\alpha = \dfrac{1}{5}$
$\sin\alpha - \cos\alpha = \dfrac{7}{5}$

两式相加：$2\sin\alpha = \dfrac{8}{5}$，$\sin\alpha = \dfrac{4}{5}$

两式相减：$2\cos\alpha = -\dfrac{6}{5}$，$\cos\alpha = -\dfrac{3}{5}$

$\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha} = \dfrac{\frac{4}{5}}{-\frac{3}{5}} = -\dfrac{4}{3}$

**⚠️ 易错提醒：** 由 $(\sin\alpha - \cos\alpha)^2$ 开方时需要判断正负。本题中 $\sin\alpha > 0$ 且 $\cos\alpha < 0$，所以 $\sin\alpha - \cos\alpha > 0$，取正值。

**💡 解题思路总结：** 已知 $\sin\alpha + \cos\alpha$ 的值，求三角函数：(1) 平方得 $\sin\alpha\cos\alpha$；(2) 判断象限确定各函数符号；(3) 求 $\sin\alpha - \cos\alpha$；(4) 联立方程组解出 $\sin\alpha$ 和 $\cos\alpha$。
