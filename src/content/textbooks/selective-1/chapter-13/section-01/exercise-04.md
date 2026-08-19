---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P61 练习A 第4题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{16} + \dfrac{y^2}{9} = 1$，$F_1$ 为左焦点，$P$ 为椭圆上的点，求 $|PF_1|$ 的取值范围。

---

**解答：**

**第1步：** 确定基本量
> 📌 运用知识点：椭圆的几何性质

$a^2 = 16$，$b^2 = 9$，$c^2 = a^2 - b^2 = 7$

$a = 4$，$c = \sqrt{7}$

**第2步：** 利用焦半径公式
> 📌 运用知识点：椭圆的几何性质

设 $P(x_0, y_0)$，则 $-a \leqslant x_0 \leqslant a$，即 $-4 \leqslant x_0 \leqslant 4$。

左焦半径公式：$|PF_1| = a + ex_0 = 4 + \dfrac{\sqrt{7}}{4}x_0$

当 $x_0 = -4$ 时，$|PF_1|_{\min} = 4 - \sqrt{7}$

当 $x_0 = 4$ 时，$|PF_1|_{\max} = 4 + \sqrt{7}$

**第3步：** 写出取值范围
> 📌 运用知识点：椭圆的几何性质

$|PF_1|$ 的取值范围为 $[4 - \sqrt{7},\; 4 + \sqrt{7}]$

**⚠️ 易错提醒：** 焦半径公式 $|PF_1| = a + ex_0$ 中，$x_0$ 是点 $P$ 的横坐标，注意符号。左焦点对应"$+$"号，右焦点对应"$-$"号，不要记反。

**💡 解题思路总结：** 椭圆上点到焦点的距离（焦半径）可以用 $|PF| = a \pm ex_0$ 表示，利用 $x_0 \in [-a, a]$ 即可求出焦半径的取值范围。
