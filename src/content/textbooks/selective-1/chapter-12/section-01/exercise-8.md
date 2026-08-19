---
type: exercise
textbook: selective-1
chapter: 12
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - line-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P34 练习B 第8题"
---

**题目：** 已知直线 $l$ 过点 $P(1, 2)$，且与两坐标轴围成的三角形面积为 $4$，求直线 $l$ 的方程。

---

**解答：**

**第1步：** 设直线方程
> 📌 运用知识点：直线的方程

设直线在 $x$ 轴、$y$ 轴上的截距分别为 $a$、$b$（$a \neq 0$，$b \neq 0$），则直线方程为 $\dfrac{x}{a} + \dfrac{y}{b} = 1$。

**第2步：** 列方程组
> 📌 运用知识点：直线的方程

直线过 $P(1, 2)$：$\dfrac{1}{a} + \dfrac{2}{b} = 1$ ……①

三角形面积：$\dfrac{1}{2}|a||b| = 4$，即 $|ab| = 8$ ……②

**第3步：** 求解
> 📌 运用知识点：直线的方程

由①得 $b = \dfrac{2a}{a - 1}$，代入②：

$\left|a \cdot \dfrac{2a}{a - 1}\right| = 8$，即 $\dfrac{2a^2}{|a - 1|} = 8$，$a^2 = 4|a - 1|$

**当 $a > 1$ 时：** $a^2 = 4a - 4$，$a^2 - 4a + 4 = 0$，$(a - 2)^2 = 0$，$a = 2$，$b = 4$。

直线方程：$\dfrac{x}{2} + \dfrac{y}{4} = 1$，即 $2x + y - 4 = 0$。

**当 $a < 1$ 且 $a \neq 0$ 时：** $a^2 = -4a + 4$，$a^2 + 4a - 4 = 0$，$a = -2 \pm 2\sqrt{2}$。

取 $a = -2 + 2\sqrt{2}$（$< 1$）：$b = \dfrac{2(-2 + 2\sqrt{2})}{-3 + 2\sqrt{2}} = \dfrac{-4 + 4\sqrt{2}}{-3 + 2\sqrt{2}} \cdot \dfrac{-3 - 2\sqrt{2}}{-3 - 2\sqrt{2}} = \dfrac{(-4+4\sqrt{2})(-3-2\sqrt{2})}{9-8} = 12 + 8\sqrt{2} - 12\sqrt{2} - 16 = -4 - 4\sqrt{2}$

取 $a = -2 - 2\sqrt{2}$：$b = \dfrac{2(-2-2\sqrt{2})}{-3-2\sqrt{2}} = \dfrac{-4-4\sqrt{2}}{-3-2\sqrt{2}} \cdot \dfrac{-3+2\sqrt{2}}{-3+2\sqrt{2}} = \dfrac{(-4-4\sqrt{2})(-3+2\sqrt{2})}{1} = 12 - 8\sqrt{2} + 12\sqrt{2} - 16 = -4 + 4\sqrt{2}$

直线方程：$\dfrac{x}{-2-2\sqrt{2}} + \dfrac{y}{-4+4\sqrt{2}} = 1$。

**⚠️ 易错提醒：** 本题容易遗漏解。设截距式时必须讨论 $a$ 的正负（即 $|a-1|$ 的取值），同时要注意直线不能过原点（否则构不成三角形）。

**💡 解题思路总结：** 截距式结合面积条件列方程组，注意绝对值的讨论。解含参数的直线方程问题时，要全面考虑各种情况。
