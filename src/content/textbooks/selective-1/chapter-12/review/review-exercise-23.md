---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - circle-equation
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P66 复习参考题 第23题"
---

**题目：** 已知圆 $C$ 与 $y$ 轴相切，圆心在直线 $x - 3y = 0$ 上，且被直线 $x - y = 0$ 截得的弦长为 $2\sqrt{7}$。求圆 $C$ 的方程。

---

**解答：**

**第1步：** 设圆心坐标
> 📌 运用知识点：圆的方程

圆心在 $x - 3y = 0$ 上，设圆心 $C(3t, t)$。

圆与 $y$ 轴相切，半径 $r = |3t|$。

**第2步：** 利用弦长条件
> 📌 运用知识点：直线与圆的位置关系

圆心到直线 $x - y = 0$ 的距离：

$$d = \frac{|3t - t|}{\sqrt{2}} = \frac{2|t|}{\sqrt{2}} = \sqrt{2}|t|$$

弦长 $= 2\sqrt{r^2 - d^2} = 2\sqrt{9t^2 - 2t^2} = 2\sqrt{7t^2} = 2\sqrt{7}|t|$。

由 $2\sqrt{7}|t| = 2\sqrt{7}$，得 $|t| = 1$，$t = \pm 1$。

**第3步：** 写出方程
> 📌 运用知识点：圆的方程

$t = 1$：圆心 $(3, 1)$，$r = 3$，$(x - 3)^2 + (y - 1)^2 = 9$。

$t = -1$：圆心 $(-3, -1)$，$r = 3$，$(x + 3)^2 + (y + 1)^2 = 9$。

**⚠️ 易错提醒：** 圆与 $y$ 轴相切时半径等于圆心横坐标的绝对值。注意 $t$ 有正负两个值，对应两个圆。

**💡 解题思路总结：** 求圆方程：根据条件设参数表示圆心 → 用弦长公式列方程 → 解参数。注意多解情况。
