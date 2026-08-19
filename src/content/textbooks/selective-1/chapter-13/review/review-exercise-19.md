---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P104 复习参考题 第19题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{2} + y^2 = 1$，过点 $M(1, 0)$ 的直线 $l$ 与椭圆交于 $A, B$ 两点。若 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$（$O$ 为原点），求直线 $l$ 的方程。

---

**解答：**

**第1步：** 设直线
> 📌 运用知识点：圆锥曲线与直线的位置关系

$l$ 过 $M(1, 0)$，设 $x = my + 1$。

代入 $\dfrac{x^2}{2} + y^2 = 1$：

$(my + 1)^2 + 2y^2 = 2$

$(m^2 + 2)y^2 + 2my - 1 = 0$

$y_1 + y_2 = \dfrac{-2m}{m^2 + 2}$，$y_1 y_2 = \dfrac{-1}{m^2 + 2}$。

**第2步：** 利用垂直条件
> 📌 运用知识点：圆锥曲线与直线的位置关系

$\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = 0$。

$x_1 x_2 = (my_1 + 1)(my_2 + 1) = m^2 y_1 y_2 + m(y_1 + y_2) + 1$

$= m^2 \cdot \dfrac{-1}{m^2 + 2} + m \cdot \dfrac{-2m}{m^2 + 2} + 1 = \dfrac{-m^2 - 2m^2 + m^2 + 2}{m^2 + 2} = \dfrac{-2m^2 + 2}{m^2 + 2}$

$x_1 x_2 + y_1 y_2 = \dfrac{-2m^2 + 2}{m^2 + 2} + \dfrac{-1}{m^2 + 2} = \dfrac{-2m^2 + 1}{m^2 + 2} = 0$

$-2m^2 + 1 = 0$，$m^2 = \dfrac{1}{2}$，$m = \pm\dfrac{\sqrt{2}}{2}$。

**第3步：** 写出方程
> 📌 运用知识点：圆锥曲线与直线的位置关系

$x = \pm\dfrac{\sqrt{2}}{2}y + 1$，即 $y = \pm\sqrt{2}(x - 1)$。

直线方程：$\sqrt{2}x - y - \sqrt{2} = 0$ 或 $\sqrt{2}x + y - \sqrt{2} = 0$。

**⚠️ 易错提醒：** $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$ 表示 $OA \perp OB$。设直线 $x = my + 1$ 可以包含斜率不存在的情况（$m = 0$ 时为 $x = 1$）。

**💡 解题思路总结：** 垂直条件转化为坐标关系：$x_1 x_2 + y_1 y_2 = 0$，再用韦达定理代入化简。
