---
type: exercise
textbook: required-2
chapter: 6
section: 4
number: 10
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$ 是两个非零向量，且 $|\vec{a}| = |\vec{b}| = |\vec{a} - \vec{b}|$。求：

(1) $\vec{a}$ 与 $\vec{b}$ 的夹角；

(2) $\vec{a}$ 与 $\vec{a} + \vec{b}$ 的夹角。

---

**解答：**

**第1步：** 求 $\vec{a}$ 与 $\vec{b}$ 的夹角
> 📌 运用知识点：向量的数量积

设 $|\vec{a}| = |\vec{b}| = |\vec{a} - \vec{b}| = m$（$m > 0$）。

$|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 - 2\vec{a} \cdot \vec{b} + |\vec{b}|^2$

$m^2 = m^2 - 2\vec{a} \cdot \vec{b} + m^2$

$\vec{a} \cdot \vec{b} = \frac{m^2}{2}$

$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{m^2/2}{m \cdot m} = \frac{1}{2}$$

所以 $\theta = 60°$。

**第2步：** 求 $\vec{a}$ 与 $\vec{a} + \vec{b}$ 的夹角
> 📌 运用知识点：向量夹角公式

先求 $|\vec{a} + \vec{b}|$：

$|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a} \cdot \vec{b} + |\vec{b}|^2 = m^2 + m^2 + m^2 = 3m^2$

$|\vec{a} + \vec{b}| = \sqrt{3}m$

再求 $\vec{a} \cdot (\vec{a} + \vec{b})$：

$\vec{a} \cdot (\vec{a} + \vec{b}) = |\vec{a}|^2 + \vec{a} \cdot \vec{b} = m^2 + \frac{m^2}{2} = \frac{3m^2}{2}$

$$\cos\alpha = \frac{\vec{a} \cdot (\vec{a} + \vec{b})}{|\vec{a}||\vec{a} + \vec{b}|} = \frac{3m^2/2}{m \cdot \sqrt{3}m} = \frac{3}{2\sqrt{3}} = \frac{\sqrt{3}}{2}$$

所以 $\alpha = 30°$。

**💡 易错提醒：** 求两个向量夹角时，要正确计算分子（数量积）和分母（两个模的乘积）。注意 $|\vec{a} + \vec{b}|$ 需要先展开求平方。

**💡 解题思路总结：** 利用 $|\vec{a} - \vec{b}|^2$ 的展开式求 $\vec{a} \cdot \vec{b}$，再用夹角公式。几何上，$|\vec{a}| = |\vec{b}| = |\vec{a} - \vec{b}|$ 说明 $\vec{a}$、$\vec{b}$、$\vec{a} - \vec{b}$ 构成等边三角形。
