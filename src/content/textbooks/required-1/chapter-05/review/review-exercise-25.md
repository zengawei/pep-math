---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P149 复习题 第25题"
---

**题目：** 已知 $\sin\alpha + \cos\alpha = \dfrac{1}{5}$，$0 < \alpha < \pi$，求 $\tan\alpha$ 的值。

---

**解答：**

**第1步：** 平方求 $\sin\alpha\cos\alpha$
> 📌 运用知识点：$(\sin\alpha + \cos\alpha)^2 = 1 + 2\sin\alpha\cos\alpha$

$\left(\dfrac{1}{5}\right)^2 = 1 + 2\sin\alpha\cos\alpha$

$\dfrac{1}{25} = 1 + 2\sin\alpha\cos\alpha$

$\sin\alpha\cos\alpha = \dfrac{1}{2}\left(\dfrac{1}{25} - 1\right) = \dfrac{1}{2} \times \left(-\dfrac{24}{25}\right) = -\dfrac{12}{25}$

**第2步：** 判断象限
> 📌 运用知识点：象限分析

$\sin\alpha\cos\alpha < 0$，且 $0 < \alpha < \pi$（$\sin\alpha > 0$），所以 $\cos\alpha < 0$，$\alpha$ 在第二象限。

**第3步：** 求 $\sin\alpha - \cos\alpha$
> 📌 运用知识点：$(\sin\alpha - \cos\alpha)^2 = 1 - 2\sin\alpha\cos\alpha$

$(\sin\alpha - \cos\alpha)^2 = 1 - 2\left(-\dfrac{12}{25}\right) = 1 + \dfrac{24}{25} = \dfrac{49}{25}$

因为 $\sin\alpha > 0$，$\cos\alpha < 0$，所以 $\sin\alpha - \cos\alpha > 0$。

$\sin\alpha - \cos\alpha = \dfrac{7}{5}$

**第4步：** 解方程组
> 📌 运用知识点：联立方程

$\sin\alpha + \cos\alpha = \dfrac{1}{5}$ ...①
$\sin\alpha - \cos\alpha = \dfrac{7}{5}$ ...②

①+②：$2\sin\alpha = \dfrac{8}{5}$，$\sin\alpha = \dfrac{4}{5}$

①-②：$2\cos\alpha = -\dfrac{6}{5}$，$\cos\alpha = -\dfrac{3}{5}$

$\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha} = \dfrac{\frac{4}{5}}{-\frac{3}{5}} = -\dfrac{4}{3}$

**⚠️ 易错提醒：** 开方时必须根据象限判断正负。第二象限 $\sin > 0$，$\cos < 0$，所以 $\sin\alpha - \cos\alpha > 0$。

**💡 解题思路总结：** 已知 $\sin\alpha + \cos\alpha$ 和范围求 $\tan\alpha$：(1) 平方求 $\sin\alpha\cos\alpha$；(2) 判断象限；(3) 求 $\sin\alpha - \cos\alpha$；(4) 联立解出 $\sin\alpha$、$\cos\alpha$；(5) 求 $\tan\alpha$。
