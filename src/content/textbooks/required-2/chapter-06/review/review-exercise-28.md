---
type: exercise
textbook: required-2
chapter: 6
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - vector-scalar-multiplication
  - vector-dot-product
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $\vec{a}$、$\vec{b}$、$\vec{c}$ 是同一平面内的三个向量，其中 $\vec{a} = (1, 2)$。

(1) 若 $|\vec{c}| = 2\sqrt{5}$，且 $\vec{c} \parallel \vec{a}$，求 $\vec{c}$ 的坐标。

(2) 若 $|\vec{b}| = \frac{\sqrt{5}}{2}$，且 $\vec{a} + 2\vec{b}$ 与 $2\vec{a} - \vec{b}$ 垂直，求 $\vec{a}$ 与 $\vec{b}$ 的夹角。

---

**解答：**

**第1步：** (1) 求 $\vec{c}$
> 📌 运用知识点：向量共线

$\vec{c} \parallel \vec{a}$，设 $\vec{c} = k\vec{a} = (k, 2k)$。

$|\vec{c}| = \sqrt{k^2 + 4k^2} = \sqrt{5k^2} = \sqrt{5}|k| = 2\sqrt{5}$

$|k| = 2$，$k = 2$ 或 $k = -2$。

$\vec{c} = (2, 4)$ 或 $\vec{c} = (-2, -4)$。

**第2步：** (2) 利用垂直条件
> 📌 运用知识点：向量垂直

$(\vec{a} + 2\vec{b}) \cdot (2\vec{a} - \vec{b}) = 0$

$2|\vec{a}|^2 + 3\vec{a} \cdot \vec{b} - 2|\vec{b}|^2 = 0$

$|\vec{a}|^2 = 5$，$|\vec{b}|^2 = \frac{5}{4}$

$10 + 3\vec{a} \cdot \vec{b} - \frac{5}{2} = 0$

$\vec{a} \cdot \vec{b} = -\frac{5}{2}$

**第3步：** 求夹角
> 📌 运用知识点：向量夹角公式

$$\cos\theta = \frac{-5/2}{\sqrt{5} \times \frac{\sqrt{5}}{2}} = \frac{-5/2}{5/2} = -1$$

$\theta = 180°$

**💡 易错提醒：** 第(2)问中展开垂直条件时，注意系数：$(\vec{a}+2\vec{b})\cdot(2\vec{a}-\vec{b}) = 2|\vec{a}|^2 + 3\vec{a}\cdot\vec{b} - 2|\vec{b}|^2$。

**💡 解题思路总结：** 共线用参数法，垂直展开数量积为零，再求夹角。
