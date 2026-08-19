---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - coordinate-method
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P69 复习参考题 第29题"
---

**题目：** 已知圆 $C: x^2 + y^2 - 4x - 6y + 12 = 0$，点 $P(a, b)$ 在圆外，过 $P$ 作圆的两条切线，切点为 $A, B$，且 $|PA| = |PB| = 3$。

(1) 求 $a, b$ 满足的关系式。

(2) 若 $P$ 在直线 $x + y = 8$ 上，求 $P$ 的坐标。

---

**解答：**

**第1步：** 化标准式
> 📌 运用知识点：圆的方程

$(x - 2)^2 + (y - 3)^2 = 1$，圆心 $C(2, 3)$，$r = 1$。

**第2步：** 建立关系
> 📌 运用知识点：直线与圆的位置关系

切线长 $|PA| = \sqrt{|PC|^2 - r^2} = \sqrt{(a-2)^2 + (b-3)^2 - 1} = 3$。

$(a - 2)^2 + (b - 3)^2 = 10$。

**第3步：** 联立求解
> 📌 运用知识点：坐标法

$P$ 在 $x + y = 8$ 上：$b = 8 - a$。

$(a - 2)^2 + (5 - a)^2 = 10$

$a^2 - 4a + 4 + 25 - 10a + a^2 = 10$

$2a^2 - 14a + 19 = 0$

$a = \dfrac{14 \pm \sqrt{196 - 152}}{4} = \dfrac{14 \pm \sqrt{44}}{4} = \dfrac{14 \pm 2\sqrt{11}}{4} = \dfrac{7 \pm \sqrt{11}}{2}$

$P\left(\dfrac{7 + \sqrt{11}}{2}, \dfrac{9 - \sqrt{11}}{2}\right)$ 或 $P\left(\dfrac{7 - \sqrt{11}}{2}, \dfrac{9 + \sqrt{11}}{2}\right)$。

**⚠️ 易错提醒：** 切线长公式 $|PA| = \sqrt{|PC|^2 - r^2}$ 要记牢。联立求解时注意判别式大于零（有两个解）。

**💡 解题思路总结：** 切线长问题：切线长、圆心距、半径构成直角三角形。将几何条件转化为代数方程是解析几何的核心思想。
