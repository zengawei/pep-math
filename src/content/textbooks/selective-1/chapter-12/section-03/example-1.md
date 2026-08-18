---
type: example
textbook: selective-1
chapter: 12
section: 3
number: 1
knowledge_points:
  - line-circle-position
source: "人教A版2019"
references: "待补充"
---

**例题：** 已知直线 $l: 2x - y + 1 = 0$ 与圆 $C: (x - 1)^2 + (y - 2)^2 = 5$ 相交于 $A, B$ 两点，求弦长 $|AB|$ 和弦的中点 $M$ 的坐标。

**解答：**

**第1步：** 确定圆心和半径
> 📌 运用知识点：直线与圆的位置关系

圆心 $C(1, 2)$，半径 $r = \sqrt{5}$。

**第2步：** 计算圆心到直线的距离
> 📌 运用知识点：直线与圆的位置关系

$d = \dfrac{|2 \times 1 - 2 + 1|}{\sqrt{4 + 1}} = \dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$

**第3步：** 求弦长
> 📌 运用知识点：直线与圆的位置关系

$|AB| = 2\sqrt{r^2 - d^2} = 2\sqrt{5 - \dfrac{1}{5}} = 2\sqrt{\dfrac{24}{5}} = 2 \times \dfrac{2\sqrt{6}}{\sqrt{5}} = \dfrac{4\sqrt{30}}{5}$

**第4步：** 求弦的中点
> 📌 运用知识点：直线与圆的位置关系

弦的中点 $M$ 在过圆心且垂直于 $l$ 的直线上。

$l$ 的斜率为 $2$，垂直线的斜率为 $-\dfrac{1}{2}$。

过圆心 $(1, 2)$ 的垂直线：$y - 2 = -\dfrac{1}{2}(x - 1)$，即 $x + 2y - 5 = 0$。

联立 $\begin{cases} 2x - y + 1 = 0 \\ x + 2y - 5 = 0 \end{cases}$

由第一式 $y = 2x + 1$，代入第二式：$x + 2(2x + 1) - 5 = 0$

$5x - 3 = 0$，$x = \dfrac{3}{5}$

$y = 2 \times \dfrac{3}{5} + 1 = \dfrac{11}{5}$

弦的中点 $M\left(\dfrac{3}{5}, \dfrac{11}{5}\right)$。
