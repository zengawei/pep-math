---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 25
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P107 复习参考题 第25题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{3} + y^2 = 1$，$A, B$ 是椭圆上关于原点对称的两点，$P$ 是椭圆上异于 $A, B$ 的点。求 $k_{PA} \cdot k_{PB}$ 的值。

---

**解答：**

**第1步：** 设坐标
> 📌 运用知识点：圆锥曲线与直线的位置关系

设 $A(x_0, y_0)$，则 $B(-x_0, -y_0)$。$P(x, y)$ 在椭圆上。

$\dfrac{x_0^2}{3} + y_0^2 = 1$，$\dfrac{x^2}{3} + y^2 = 1$。

**第2步：** 计算斜率积
> 📌 运用知识点：椭圆的几何性质

$$k_{PA} \cdot k_{PB} = \frac{y - y_0}{x - x_0} \cdot \frac{y + y_0}{x + x_0} = \frac{y^2 - y_0^2}{x^2 - x_0^2}$$

由椭圆方程：$y^2 = 1 - \dfrac{x^2}{3}$，$y_0^2 = 1 - \dfrac{x_0^2}{3}$。

$$y^2 - y_0^2 = -\frac{x^2 - x_0^2}{3}$$

$$k_{PA} \cdot k_{PB} = \frac{-\frac{x^2 - x_0^2}{3}}{x^2 - x_0^2} = -\frac{1}{3}$$

**⚠️ 易错提醒：** 结果是常数 $-\dfrac{b^2}{a^2} = -\dfrac{1}{3}$，与 $P$ 的位置无关。这是椭圆的重要性质：椭圆上任意点与关于中心对称的两点连线的斜率之积为 $-\frac{b^2}{a^2}$。

**💡 解题思路总结：** 椭圆上关于中心对称的两点与第三点连线斜率之积为常数 $-\frac{b^2}{a^2}$。用坐标代入化简即可证明。
