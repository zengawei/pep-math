---
type: exercise
textbook: selective-1
chapter: 13
section: 3
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - conic-section-line
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P85 练习B 第3题"
---

**题目：** 已知抛物线 $y^2 = 2x$，直线 $y = x - 1$ 与抛物线交于 $A, B$ 两点，$O$ 为原点。证明：$OA \perp OB$。

---

**解答：**

**第1步：** 联立方程
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = x - 1$ 代入 $y^2 = 2x$：

$(x - 1)^2 = 2x$

$x^2 - 2x + 1 = 2x$

$x^2 - 4x + 1 = 0$

由韦达定理：$x_1 + x_2 = 4$，$x_1 x_2 = 1$

**第2步：** 求 $y_1 y_2$
> 📌 运用知识点：直线与圆锥曲线的位置关系

$y_1 y_2 = (x_1 - 1)(x_2 - 1) = x_1 x_2 - (x_1 + x_2) + 1 = 1 - 4 + 1 = -2$

**第3步：** 验证垂直
> 📌 运用知识点：直线与圆锥曲线的位置关系

$\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = 1 + (-2) = -1$

等等，$-1 \neq 0$，说明 $OA$ 与 $OB$ 不垂直。让我重新检查。

实际上 $\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = 1 - 2 = -1 \neq 0$

这说明题目条件需要修正。让我用另一种方式：

$y_1 y_2$ 也可以直接计算：将 $x = y + 1$ 代入 $y^2 = 2x$：

$y^2 = 2(y + 1)$

$y^2 - 2y - 2 = 0$

$y_1 y_2 = -2$，$y_1 + y_2 = 2$

$x_1 x_2 = \dfrac{y_1^2}{2} \cdot \dfrac{y_2^2}{2} = \dfrac{(y_1 y_2)^2}{4} = \dfrac{4}{4} = 1$

$\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = 1 + (-2) = -1 \neq 0$

$OA$ 与 $OB$ 不垂直。题目条件有误，应改为直线 $y = x - 2$。

验证：$y = x - 2$ 代入 $y^2 = 2x$：$(x-2)^2 = 2x$，$x^2 - 6x + 4 = 0$

$x_1 x_2 = 4$，$y_1 y_2 = (x_1-2)(x_2-2) = x_1x_2 - 2(x_1+x_2) + 4 = 4 - 12 + 4 = -4$

$\overrightarrow{OA} \cdot \overrightarrow{OB} = 4 + (-4) = 0$ ✓

因此，当直线为 $y = x - 2$ 时，$OA \perp OB$ 成立。

**修正后的题目：** 已知抛物线 $y^2 = 2x$，直线 $y = x - 2$ 与抛物线交于 $A, B$ 两点，$O$ 为原点。证明：$OA \perp OB$。

**证明：**

联立 $y = x - 2$ 与 $y^2 = 2x$，得 $x^2 - 6x + 4 = 0$

$x_1 + x_2 = 6$，$x_1 x_2 = 4$

$y_1 y_2 = (x_1 - 2)(x_2 - 2) = x_1 x_2 - 2(x_1 + x_2) + 4 = 4 - 12 + 4 = -4$

$\overrightarrow{OA} \cdot \overrightarrow{OB} = x_1 x_2 + y_1 y_2 = 4 + (-4) = 0$

所以 $OA \perp OB$。$\blacksquare$

**⚠️ 易错提醒：** 证明垂直即证明向量点积为零。联立时注意韦达定理的正确使用，计算 $y_1 y_2$ 时要用 $x_i$ 的关系转化。

**💡 解题思路总结：** 证明 $OA \perp OB$ 即证 $x_1 x_2 + y_1 y_2 = 0$。通过联立方程和韦达定理，将 $x_1 x_2$ 和 $y_1 y_2$ 用系数表示，验证其和为零。
