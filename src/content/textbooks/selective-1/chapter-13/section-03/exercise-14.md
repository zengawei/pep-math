---
type: exercise
textbook: selective-1
chapter: 13
section: 3
number: 14
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-optimization
  - parabola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P87 练习C 第3题"
---

**题目：** 已知抛物线 $y^2 = 4x$，$A, B$ 是抛物线上的两点，且 $OA \perp OB$（$O$ 为原点）。

(1) 证明：直线 $AB$ 过定点；

(2) 求 $\triangle AOB$ 面积的最小值。

---

**解答：**

**第1步：** 设点坐标
> 📌 运用知识点：抛物线的几何性质

设 $A(t_1^2, 2t_1)$，$B(t_2^2, 2t_2)$（参数化 $y^2 = 4x$：$x = t^2, y = 2t$）

$\overrightarrow{OA} = (t_1^2, 2t_1)$，$\overrightarrow{OB} = (t_2^2, 2t_2)$

$\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$：

$t_1^2 t_2^2 + 4t_1 t_2 = 0$

$t_1 t_2(t_1 t_2 + 4) = 0$

$t_1 t_2 \neq 0$（否则 $A$ 或 $B$ 为原点），所以 $t_1 t_2 = -4$

**第2步：** 求直线 $AB$ 的方程
> 📌 运用知识点：直线与圆锥曲线的位置关系

$k_{AB} = \dfrac{2t_1 - 2t_2}{t_1^2 - t_2^2} = \dfrac{2}{t_1 + t_2}$

直线 $AB$：$y - 2t_1 = \dfrac{2}{t_1 + t_2}(x - t_1^2)$

$y = \dfrac{2}{t_1 + t_2}x - \dfrac{2t_1^2}{t_1 + t_2} + 2t_1$

$= \dfrac{2}{t_1 + t_2}x + \dfrac{2t_1(t_1 + t_2) - 2t_1^2}{t_1 + t_2}$

$= \dfrac{2}{t_1 + t_2}x + \dfrac{2t_1 t_2}{t_1 + t_2}$

$= \dfrac{2}{t_1 + t_2}x + \dfrac{2(-4)}{t_1 + t_2}$

$= \dfrac{2}{t_1 + t_2}(x - 4)$

直线 $AB$ 过定点 $(4, 0)$。$\blacksquare$

**第3步：** 求面积
> 📌 运用知识点：圆锥曲线的最值问题

$S_{\triangle AOB} = \dfrac{1}{2}|OA| \cdot |OB|$（因为 $OA \perp OB$）

$|OA|^2 = t_1^4 + 4t_1^2 = t_1^2(t_1^2 + 4)$

$|OB|^2 = t_2^4 + 4t_2^2 = t_2^2(t_2^2 + 4)$

$S^2 = \dfrac{1}{4}|OA|^2 |OB|^2 = \dfrac{1}{4}t_1^2 t_2^2 (t_1^2 + 4)(t_2^2 + 4)$

$t_1 t_2 = -4$，$t_1^2 t_2^2 = 16$

$(t_1^2 + 4)(t_2^2 + 4) = t_1^2 t_2^2 + 4(t_1^2 + t_2^2) + 16 = 16 + 4(t_1^2 + t_2^2) + 16 = 32 + 4(t_1^2 + t_2^2)$

由均值不等式：$t_1^2 + t_2^2 \geqslant 2|t_1 t_2| = 8$

$(t_1^2 + 4)(t_2^2 + 4) \geqslant 32 + 32 = 64$

$S^2 \geqslant \dfrac{1}{4} \times 16 \times 64 = 256$

$S \geqslant 16$

等号成立条件：$t_1^2 = t_2^2$，即 $t_1 = -t_2$（因为 $t_1 t_2 = -4 < 0$）

$t_1 = 2, t_2 = -2$（或反之），$A(4, 4), B(4, -4)$

验证：$\overrightarrow{OA} \cdot \overrightarrow{OB} = 16 - 16 = 0$ ✓

$S = \dfrac{1}{2} \times \sqrt{32} \times \sqrt{32} = \dfrac{1}{2} \times 32 = 16$ ✓

**⚠️ 易错提醒：** ① 参数化 $y^2 = 4x$ 为 $(t^2, 2t)$ 可以简化计算；② 证明过定点时，将 $t_1 t_2 = -4$ 代入直线方程是关键步骤；③ 求面积最小值时用均值不等式，注意等号成立条件。

**💡 解题思路总结：** 抛物线上两点的垂直条件 $OA \perp OB$ 转化为参数关系 $t_1 t_2 = -4$，由此证明直线过定点 $(4, 0)$，再用均值不等式求面积最小值。
