---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 11
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P63 练习B 第4题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$ 的两个焦点为 $F_1, F_2$，$P$ 为椭圆上的点，且 $\angle F_1PF_2 = 90°$，求 $\triangle F_1PF_2$ 的面积。

---

**解答：**

**第1步：** 确定基本量
> 📌 运用知识点：椭圆的几何性质

$a^2 = 9$，$b^2 = 4$，$c^2 = a^2 - b^2 = 5$

$a = 3$，$c = \sqrt{5}$，$|F_1F_2| = 2\sqrt{5}$

**第2步：** 利用椭圆定义
> 📌 运用知识点：椭圆的定义与标准方程

$|PF_1| + |PF_2| = 2a = 6$

设 $|PF_1| = m$，$|PF_2| = n$，则 $m + n = 6$

**第3步：** 利用勾股定理
> 📌 运用知识点：椭圆的几何性质

$\angle F_1PF_2 = 90°$，由勾股定理：

$m^2 + n^2 = |F_1F_2|^2 = (2\sqrt{5})^2 = 20$

又 $(m + n)^2 = m^2 + 2mn + n^2 = 36$

$20 + 2mn = 36$

$mn = 8$

**第4步：** 求面积
> 📌 运用知识点：椭圆的几何性质

$S = \dfrac{1}{2}mn\sin 90° = \dfrac{1}{2} \times 8 \times 1 = 4$

**⚠️ 易错提醒：** 焦点三角形中 $\angle F_1PF_2 = 90°$ 时用勾股定理，不是余弦定理的一般形式。另外要验证这样的点 $P$ 确实存在：需 $m, n > 0$ 且满足三角形不等式。

**💡 解题思路总结：** 椭圆焦点三角形面积问题：① 定义 $m + n = 2a$；② 勾股定理（或余弦定理）得 $m^2 + n^2$；③ 联立求 $mn$；④ 面积 $S = \frac{1}{2}mn\sin\theta$。
