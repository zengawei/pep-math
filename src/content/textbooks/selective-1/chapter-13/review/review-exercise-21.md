---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P105 复习参考题 第21题"
---

**题目：** 已知双曲线 $\dfrac{x^2}{4} - \dfrac{y^2}{5} = 1$，过点 $M(2, 1)$ 作直线 $l$ 与双曲线交于 $A, B$ 两点，且 $M$ 为 $AB$ 的中点。求直线 $l$ 的方程。

---

**解答：**

**第1步：** 中点弦的斜率
> 📌 运用知识点：圆锥曲线与直线的位置关系

设 $A(x_1, y_1), B(x_2, y_2)$。

$\dfrac{x_1^2}{4} - \dfrac{y_1^2}{5} = 1$，$\dfrac{x_2^2}{4} - \dfrac{y_2^2}{5} = 1$。

两式相减：$\dfrac{x_1^2 - x_2^2}{4} - \dfrac{y_1^2 - y_2^2}{5} = 0$。

$$\frac{(x_1 + x_2)(x_1 - x_2)}{4} = \frac{(y_1 + y_2)(y_1 - y_2)}{5}$$

$M(2, 1)$ 为中点：$x_1 + x_2 = 4, y_1 + y_2 = 2$。

$$\frac{4(x_1 - x_2)}{4} = \frac{2(y_1 - y_2)}{5}$$

$$k = \frac{y_1 - y_2}{x_1 - x_2} = \frac{5}{2}$$

**第2步：** 写出方程
> 📌 运用知识点：圆锥曲线与直线的位置关系

$y - 1 = \dfrac{5}{2}(x - 2)$，即 $5x - 2y - 8 = 0$。

**第3步：** 验证
> 📌 运用知识点：圆锥曲线与直线的位置关系

需验证直线与双曲线确实有两个交点（判别式 $> 0$）。

代入 $y = \dfrac{5x - 8}{2}$ 到双曲线方程，验证 $\Delta > 0$。

**⚠️ 易错提醒：** 中点弦问题用"点差法"：两方程相减，利用中点坐标求斜率。最后要验证直线与曲线确实有两个交点。

**💡 解题思路总结：** 中点弦的"点差法"：代入两方程 → 相减 → 代入中点坐标 → 求斜率。这是处理中点弦问题的标准方法。
