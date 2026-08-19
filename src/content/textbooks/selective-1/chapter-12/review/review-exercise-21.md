---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - line-circle-position
  - coordinate-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P65 复习参考题 第21题"
---

**题目：** 已知圆 $C: x^2 + y^2 = 4$ 和直线 $l: y = x + m$。当 $m$ 为何值时，圆 $C$ 上有且仅有两点到直线 $l$ 的距离等于 $1$？

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：直线与圆的位置关系

圆上有两点到直线距离为 $1$，等价于与 $l$ 平行且距离为 $1$ 的两条直线中，一条与圆相交（两个交点），另一条与圆不相交或相切。

与 $l$ 平行且距离为 $1$ 的直线：$y = x + m \pm \dfrac{\sqrt{2}}{2} \cdot \sqrt{2}$，即 $y = x + m \pm \sqrt{2}$。

不对，距离为 $1$ 的平行线：$x - y + m \pm \sqrt{2} = 0$，即 $y = x + m \pm \sqrt{2}$。

**第2步：** 计算条件
> 📌 运用知识点：直线与圆的位置关系

圆心 $O(0,0)$ 到 $l: x - y + m = 0$ 的距离 $d = \dfrac{|m|}{\sqrt{2}}$。

两条平行线到圆心的距离分别为 $d_1 = d - 1$ 和 $d_2 = d + 1$（或 $d_1 = 1 - d$）。

要有恰好两个点到 $l$ 距离为 $1$，需要：一条平行线与圆相交，另一条不相交。

即 $d_1 < 2$ 且 $d_2 \geq 2$（其中 $d_1 < d_2$）。

$\dfrac{|m|}{\sqrt{2}} - 1 < 2$ 且 $\dfrac{|m|}{\sqrt{2}} + 1 \geq 2$。

$|m| < 3\sqrt{2}$ 且 $|m| \geq \sqrt{2}$。

**第3步：** 得出结论
> 📌 运用知识点：坐标法

$\sqrt{2} \leq |m| < 3\sqrt{2}$，即 $m \in (-3\sqrt{2}, -\sqrt{2}] \cup [\sqrt{2}, 3\sqrt{2})$。

**⚠️ 易错提醒：** 此类问题要转化为平行线与圆的位置关系。注意等号条件：$d_2 = 2$ 时相切，切点到 $l$ 距离恰好为 $1$，也算一个点。

**💡 解题思路总结：** "圆上到直线距离为定值的点的个数"问题：转化为两条平行线与圆的交点个数问题。
