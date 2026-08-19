---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P65 练习C 第1题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{4} + y^2 = 1$，直线 $l$ 过点 $M(0, 1)$ 与椭圆交于 $A, B$ 两点。若 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$（$O$ 为原点），求直线 $l$ 的方程。

---

**解答：**

**第1步：** 设直线方程并联立
> 📌 运用知识点：直线与圆锥曲线的位置关系

直线 $l$ 过 $M(0, 1)$，设 $l: y = kx + 1$（先考虑斜率存在的情况）。

代入 $\dfrac{x^2}{4} + y^2 = 1$：

$\dfrac{x^2}{4} + (kx + 1)^2 = 1$

$\dfrac{x^2}{4} + k^2x^2 + 2kx + 1 = 1$

$\left(\dfrac{1}{4} + k^2\right)x^2 + 2kx = 0$

$x\left[\left(\dfrac{1}{4} + k^2\right)x + 2k\right] = 0$

**第2步：** 求交点坐标
> 📌 运用知识点：直线与圆锥曲线的位置关系

$x_1 = 0$（对应 $M(0, 1)$ 本身），$x_2 = \dfrac{-2k}{\frac{1}{4} + k^2} = \dfrac{-8k}{1 + 4k^2}$

但 $A, B$ 是不同于 $M$ 的两点，说明直线与椭圆有两个不同交点。重新审视：$M(0,1)$ 在椭圆上（代入验证 $\frac{0}{4}+1=1$），所以 $M$ 本身就是一个交点。

因此 $A$ 或 $B$ 之一是 $M(0,1)$。设 $A = M(0, 1)$，$B(x_2, y_2)$。

$\overrightarrow{OA} = (0, 1)$，$\overrightarrow{OB} = (x_2, y_2)$

$\overrightarrow{OA} \cdot \overrightarrow{OB} = 0 \times x_2 + 1 \times y_2 = y_2 = 0$

**第3步：** 求 $B$ 和直线方程
> 📌 运用知识点：直线与圆锥曲线的位置关系

$y_2 = 0$，代入椭圆：$\dfrac{x_2^2}{4} = 1$，$x_2 = \pm 2$

$B(2, 0)$ 或 $B(-2, 0)$

当 $B(2, 0)$ 时：$l$ 过 $(0, 1)$ 和 $(2, 0)$，$k = \dfrac{0-1}{2-0} = -\dfrac{1}{2}$，$l: y = -\dfrac{1}{2}x + 1$

当 $B(-2, 0)$ 时：$l$ 过 $(0, 1)$ 和 $(-2, 0)$，$k = \dfrac{0-1}{-2-0} = \dfrac{1}{2}$，$l: y = \dfrac{1}{2}x + 1$

**第4步：** 验证
> 📌 运用知识点：直线与圆锥曲线的位置关系

验证 $l: y = -\dfrac{1}{2}x + 1$：代入椭圆，$\dfrac{x^2}{4} + \left(-\dfrac{x}{2}+1\right)^2 = 1$

$\dfrac{x^2}{4} + \dfrac{x^2}{4} - x + 1 = 1$，$\dfrac{x^2}{2} - x = 0$，$x(x-2)=0$

$x = 0$ 或 $x = 2$，交点为 $(0,1)$ 和 $(2,0)$，$\overrightarrow{OA}\cdot\overrightarrow{OB} = 0\times2 + 1\times0 = 0$ ✓

直线 $l$ 的方程为 $y = -\dfrac{1}{2}x + 1$ 或 $y = \dfrac{1}{2}x + 1$。

**⚠️ 易错提醒：** 注意 $M(0,1)$ 在椭圆上，所以直线与椭圆的两个交点中有一个就是 $M$ 本身。要先判断点与椭圆的位置关系，否则容易误设两个未知交点导致计算复杂化。

**💡 解题思路总结：** 处理直线与椭圆交点问题时，先判断已知点是否在椭圆上。若在，则该点本身就是一个交点，可大幅简化计算。向量点积为零即垂直条件，可转化为坐标关系。
