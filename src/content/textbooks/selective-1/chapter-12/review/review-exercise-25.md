---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - line-circle-position
  - coordinate-method
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P67 复习参考题 第25题"
---

**题目：** 已知圆 $C: x^2 + y^2 - 2x + 4y - 4 = 0$，是否存在斜率为 $1$ 的直线 $l$，使得 $l$ 被圆 $C$ 截得的弦 $AB$ 满足以 $AB$ 为直径的圆过原点？若存在，求出 $l$ 的方程。

---

**解答：**

**第1步：** 化圆的标准式
> 📌 运用知识点：圆的方程

$(x - 1)^2 + (y + 2)^2 = 9$，圆心 $C(1, -2)$，$r = 3$。

**第2步：** 设直线方程
> 📌 运用知识点：直线与圆的位置关系

设 $l: y = x + m$，即 $x - y + m = 0$。

圆心到 $l$ 的距离 $d = \dfrac{|1 + 2 + m|}{\sqrt{2}} = \dfrac{|3 + m|}{\sqrt{2}}$。

需 $d < 3$，即 $|3 + m| < 3\sqrt{2}$。

联立 $y = x + m$ 与 $(x-1)^2 + (y+2)^2 = 9$：

$(x-1)^2 + (x + m + 2)^2 = 9$

$2x^2 + 2(m+1)x + m^2 + 4m - 4 = 0$

设 $A(x_1, y_1)$，$B(x_2, y_2)$。

$x_1 + x_2 = -(m+1)$，$x_1 x_2 = \dfrac{m^2 + 4m - 4}{2}$。

**第3步：** 利用条件求解
> 📌 运用知识点：直线与圆的位置关系

以 $AB$ 为直径的圆过原点，则 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$：

$x_1 x_2 + y_1 y_2 = 0$

$y_1 y_2 = (x_1 + m)(x_2 + m) = x_1 x_2 + m(x_1 + x_2) + m^2$

$x_1 x_2 + y_1 y_2 = 2x_1 x_2 + m(x_1 + x_2) + m^2 = (m^2 + 4m - 4) + m(-(m+1)) + m^2$

$= m^2 + 4m - 4 - m^2 - m + m^2 = m^2 + 3m - 4 = 0$

$(m + 4)(m - 1) = 0$，$m = -4$ 或 $m = 1$。

验证 $d < 3$：$m = -4$ 时 $d = \dfrac{1}{\sqrt{2}} < 3$ ✓；$m = 1$ 时 $d = \dfrac{4}{\sqrt{2}} = 2\sqrt{2} < 3$ ✓。

$l: y = x - 4$ 或 $y = x + 1$。

**⚠️ 易错提醒：** "以 $AB$ 为直径的圆过原点"等价于 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$（不是 $OA \perp OB$ 的斜率关系，因为可能涉及斜率不存在）。最后要验证判别式大于零。

**💡 解题思路总结：** 综合性问题：设直线 → 联立韦达定理 → 将几何条件转化为代数方程 → 求解并验证。
