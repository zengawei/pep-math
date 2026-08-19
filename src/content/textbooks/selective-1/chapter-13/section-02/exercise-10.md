---
type: exercise
textbook: selective-1
chapter: 13
section: 2
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - hyperbola-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P74 练习B 第3题"
---

**题目：** 已知双曲线 $\dfrac{x^2}{4} - y^2 = 1$ 的两个焦点为 $F_1, F_2$，$P$ 为双曲线上的点，且 $\angle F_1PF_2 = 90°$，求 $\triangle F_1PF_2$ 的面积。

---

**解答：**

**第1步：** 确定基本量
> 📌 运用知识点：双曲线的几何性质

$a^2 = 4$，$b^2 = 1$，$c^2 = a^2 + b^2 = 5$

$a = 2$，$c = \sqrt{5}$，$|F_1F_2| = 2\sqrt{5}$

**第2步：** 利用双曲线定义
> 📌 运用知识点：双曲线的定义与标准方程

$||PF_1| - |PF_2|| = 2a = 4$

设 $|PF_1| = m$，$|PF_2| = n$，则 $|m - n| = 4$

**第3步：** 利用勾股定理
> 📌 运用知识点：双曲线的几何性质

$\angle F_1PF_2 = 90°$，由勾股定理：

$m^2 + n^2 = |F_1F_2|^2 = 20$

$(m - n)^2 = m^2 - 2mn + n^2 = 16$

$20 - 2mn = 16$

$mn = 2$

**第4步：** 求面积
> 📌 运用知识点：双曲线的几何性质

$S = \dfrac{1}{2}mn\sin 90° = \dfrac{1}{2} \times 2 \times 1 = 1$

**⚠️ 易错提醒：** 双曲线焦点三角形中用 $|m - n| = 2a$（不是 $m + n = 2a$），这是与椭圆的根本区别。另外要验证 $P$ 点确实存在：$m, n > 0$ 且满足三角不等式。

**💡 解题思路总结：** 双曲线焦点三角形面积：① 定义 $|m - n| = 2a$；② 勾股定理 $m^2 + n^2 = 4c^2$；③ 联立求 $mn$；④ $S = \frac{1}{2}mn\sin\theta$。
