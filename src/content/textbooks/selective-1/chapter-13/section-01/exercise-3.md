---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 3
difficulty: hard
category: practice
is_exam_question: false
knowledge_points:
  - ellipse-definition
  - ellipse-properties
source: "人教A版2019"
references: "课标13.1.2"
---

**题目：** 已知椭圆 $\dfrac{x^2}{16} + \dfrac{y^2}{7} = 1$ 的两个焦点为 $F_1, F_2$，$P$ 为椭圆上的点，且 $\angle F_1PF_2 = 60°$，求 $\triangle F_1PF_2$ 的面积。

---

**解答：**

**第1步：** 确定基本量
> 📌 运用知识点：椭圆的几何性质

$a^2 = 16$，$b^2 = 7$，$c^2 = a^2 - b^2 = 9$

$a = 4$，$c = 3$，$|F_1F_2| = 2c = 6$

**第2步：** 利用椭圆定义
> 📌 运用知识点：椭圆的定义与标准方程

$|PF_1| + |PF_2| = 2a = 8$

设 $|PF_1| = m$，$|PF_2| = n$，则 $m + n = 8$。

**第3步：** 利用余弦定理
> 📌 运用知识点：椭圆的几何性质

在 $\triangle F_1PF_2$ 中，由余弦定理：

$|F_1F_2|^2 = m^2 + n^2 - 2mn\cos 60°$

$36 = m^2 + n^2 - mn$

又 $(m + n)^2 = m^2 + 2mn + n^2 = 64$

所以 $m^2 + n^2 = 64 - 2mn$

代入：$36 = 64 - 2mn - mn = 64 - 3mn$

$3mn = 28$，$mn = \dfrac{28}{3}$

**第4步：** 求面积
> 📌 运用知识点：椭圆的几何性质

$S = \dfrac{1}{2}mn\sin 60° = \dfrac{1}{2} \times \dfrac{28}{3} \times \dfrac{\sqrt{3}}{2} = \dfrac{7\sqrt{3}}{3}$

**💡 解题思路总结：** 椭圆焦点三角形问题的核心工具：① 椭圆定义 $|PF_1| + |PF_2| = 2a$；② 余弦定理；③ 面积公式 $S = \frac{1}{2}|PF_1||PF_2|\sin\theta$。
