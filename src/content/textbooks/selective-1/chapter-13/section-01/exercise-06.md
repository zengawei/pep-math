---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - ellipse-definition
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P61 练习A 第6题"
---

**题目：** 求焦点在 $x$ 轴上，焦距为 $4$，且经过点 $(3, 1)$ 的椭圆的标准方程。

---

**解答：**

**第1步：** 确定 $c$
> 📌 运用知识点：椭圆的定义与标准方程

焦距 $2c = 4$，所以 $c = 2$，$c^2 = 4$。

**第2步：** 设方程并代入
> 📌 运用知识点：椭圆的定义与标准方程

焦点在 $x$ 轴上，设椭圆方程为 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）。

$b^2 = a^2 - c^2 = a^2 - 4$

代入点 $(3, 1)$：

$\dfrac{9}{a^2} + \dfrac{1}{a^2 - 4} = 1$

**第3步：** 解方程
> 📌 运用知识点：椭圆的定义与标准方程

设 $t = a^2$（$t > 4$）：

$\dfrac{9}{t} + \dfrac{1}{t - 4} = 1$

$9(t - 4) + t = t(t - 4)$

$9t - 36 + t = t^2 - 4t$

$t^2 - 14t + 36 = 0$

$t = \dfrac{14 \pm \sqrt{196 - 144}}{2} = \dfrac{14 \pm \sqrt{52}}{2} = 7 \pm \sqrt{13}$

因为 $t > 4$，$7 - \sqrt{13} \approx 7 - 3.6 = 3.4 < 4$，舍去。

$t = 7 + \sqrt{13}$，$a^2 = 7 + \sqrt{13}$，$b^2 = 3 + \sqrt{13}$

**第4步：** 写出方程
> 📌 运用知识点：椭圆的定义与标准方程

$\dfrac{x^2}{7 + \sqrt{13}} + \dfrac{y^2}{3 + \sqrt{13}} = 1$

**⚠️ 易错提醒：** 解出 $a^2$ 后要检验 $a^2 > c^2$（即 $b^2 > 0$），不合条件的根要舍去。

**💡 解题思路总结：** 已知焦点位置和焦距，设出含一个未知量 $a^2$ 的方程，代入已知点坐标解方程即可。注意检验 $a^2 > c^2$。
