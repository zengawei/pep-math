---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P103 复习参考题 第17题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{4} + y^2 = 1$，直线 $l: y = x + 1$ 与椭圆交于 $A, B$ 两点。求 $|AB|$。

---

**解答：**

**第1步：** 联立方程
> 📌 运用知识点：圆锥曲线与直线的位置关系

将 $y = x + 1$ 代入 $\dfrac{x^2}{4} + y^2 = 1$：

$$\frac{x^2}{4} + (x + 1)^2 = 1$$

$$x^2 + 4(x^2 + 2x + 1) = 4$$

$$5x^2 + 8x = 0$$

$$x(5x + 8) = 0$$

$x_1 = 0, x_2 = -\dfrac{8}{5}$。

**第2步：** 求交点
> 📌 运用知识点：圆锥曲线与直线的位置关系

$A(0, 1)$，$B\left(-\dfrac{8}{5}, -\dfrac{3}{5}\right)$。

**第3步：** 计算弦长
> 📌 运用知识点：圆锥曲线与直线的位置关系

$$|AB| = \sqrt{\left(\frac{8}{5}\right)^2 + \left(1 + \frac{3}{5}\right)^2} = \sqrt{\frac{64}{25} + \frac{64}{25}} = \sqrt{\frac{128}{25}} = \frac{8\sqrt{2}}{5}$$

或用弦长公式：$|AB| = \sqrt{1 + k^2} \cdot |x_1 - x_2| = \sqrt{2} \cdot \dfrac{8}{5} = \dfrac{8\sqrt{2}}{5}$。

**⚠️ 易错提醒：** 弦长公式 $|AB| = \sqrt{1 + k^2}|x_1 - x_2|$ 中 $k$ 是直线斜率。联立时注意化简。

**💡 解题思路总结：** 直线与椭圆相交：联立方程 → 韦达定理 → 弦长公式。这是圆锥曲线的基本题型。
