---
type: exercise
textbook: selective-1
chapter: 12
section: 1
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - line-equation
  - line-inclination-slope
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P35 练习C 第11题"
---

**题目：** 已知直线 $l$ 过点 $P(2, 1)$，且与 $x$ 轴正半轴、$y$ 轴正半轴分别交于 $A$、$B$ 两点。求 $|PA| \cdot |PB|$ 的最小值及此时直线 $l$ 的方程。

---

**解答：**

**第1步：** 设直线方程
> 📌 运用知识点：直线的方程

设直线 $l$ 的斜率为 $k$（$k < 0$，因为与两轴正半轴相交），则 $y - 1 = k(x - 2)$。

令 $y = 0$：$x = 2 - \dfrac{1}{k}$，所以 $A\left(2 - \dfrac{1}{k}, 0\right)$。

令 $x = 0$：$y = 1 - 2k$，所以 $B(0, 1 - 2k)$。

因为 $A$ 在 $x$ 轴正半轴：$2 - \dfrac{1}{k} > 0$，因为 $k < 0$，$-\dfrac{1}{k} > 0$，成立。

因为 $B$ 在 $y$ 轴正半轴：$1 - 2k > 0$，因为 $k < 0$，成立。

**第2步：** 计算 $|PA| \cdot |PB|$
> 📌 运用知识点：直线的方程

$|PA| = \sqrt{\left(-\dfrac{1}{k}\right)^2 + (-1)^2} = \sqrt{\dfrac{1}{k^2} + 1} = \dfrac{\sqrt{1 + k^2}}{|k|} = -\dfrac{\sqrt{1 + k^2}}{k}$（$k < 0$）

$|PB| = \sqrt{(-2)^2 + (-2k)^2} = \sqrt{4 + 4k^2} = 2\sqrt{1 + k^2}$

$|PA| \cdot |PB| = -\dfrac{\sqrt{1 + k^2}}{k} \cdot 2\sqrt{1 + k^2} = -\dfrac{2(1 + k^2)}{k}$

**第3步：** 求最小值
> 📌 运用知识点：直线的倾斜角与斜率

设 $t = -k > 0$：

$|PA| \cdot |PB| = \dfrac{2(1 + t^2)}{t} = 2\left(t + \dfrac{1}{t}\right) \geq 2 \times 2 = 4$

等号成立：$t = \dfrac{1}{t}$，$t = 1$，即 $k = -1$。

**第4步：** 写出直线方程
> 📌 运用知识点：直线的方程

$k = -1$ 时：$y - 1 = -(x - 2)$，即 $x + y - 3 = 0$。

$|PA| \cdot |PB|$ 的最小值为 $4$。

**⚠️ 易错提醒：** 设斜率时要明确 $k < 0$ 的限制条件。利用基本不等式求最值时，要验证等号成立条件是否在定义域内。

**💡 解题思路总结：** 将几何量用参数（斜率 $k$）表示，转化为函数最值问题。基本不等式 $t + \dfrac{1}{t} \geq 2$ 是处理此类最值的常用工具。
