---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - curve-equation-method
  - ellipse-definition
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P104 复习参考题 第20题"
---

**题目：** 已知动点 $P$ 到定点 $F(1, 0)$ 的距离与到直线 $x = 4$ 的距离之比为 $\dfrac{1}{2}$。

(1) 求动点 $P$ 的轨迹方程。

(2) 设轨迹为曲线 $C$，过 $F$ 的直线交 $C$ 于 $A, B$ 两点，求 $|AB|$ 的最小值。

---

**解答：**

**第1步：** 列方程
> 📌 运用知识点：求曲线方程的方法

设 $P(x, y)$：

$$\frac{\sqrt{(x-1)^2 + y^2}}{|x - 4|} = \frac{1}{2}$$

$4[(x-1)^2 + y^2] = (x - 4)^2$

$4x^2 - 8x + 4 + 4y^2 = x^2 - 8x + 16$

$3x^2 + 4y^2 = 12$

$$\frac{x^2}{4} + \frac{y^2}{3} = 1$$

**第2步：** 求 $|AB|$ 最小值
> 📌 运用知识点：圆锥曲线与直线的位置关系

$a = 2, b = \sqrt{3}, c = 1$。$F(1, 0)$ 是右焦点。

当 $AB$ 垂直于 $x$ 轴时（通径），$|AB|$ 最短：

$$|AB|_{\min} = \frac{2b^2}{a} = \frac{6}{2} = 3$$

**⚠️ 易错提醒：** 距离比为常数（小于1）的轨迹是椭圆。焦点弦中通径最短（对椭圆而言，过焦点的弦中通径最短）。

**💡 解题思路总结：** 距离比定义可直接识别圆锥曲线类型。椭圆通径长 $\frac{2b^2}{a}$ 是最短的焦点弦。
