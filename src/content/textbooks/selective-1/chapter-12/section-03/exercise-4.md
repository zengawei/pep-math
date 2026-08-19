---
type: exercise
textbook: selective-1
chapter: 12
section: 3
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P50 练习A 第4题"
---

**题目：** 判断直线 $l: 2x + y - 5 = 0$ 与圆 $C: (x - 1)^2 + (y - 2)^2 = 4$ 的位置关系。如果相交，求交点坐标。

---

**解答：**

**第1步：** 确定圆心和半径
> 📌 运用知识点：直线与圆的位置关系

圆心 $C(1, 2)$，半径 $r = 2$。

**第2步：** 计算圆心到直线的距离
> 📌 运用知识点：直线与圆的位置关系

$d = \dfrac{|2 \times 1 + 2 - 5|}{\sqrt{4 + 1}} = \dfrac{|-1|}{\sqrt{5}} = \dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$

**第3步：** 比较 $d$ 与 $r$
> 📌 运用知识点：直线与圆的位置关系

$d = \dfrac{\sqrt{5}}{5} \approx 0.447 < 2 = r$

所以直线与圆相交。

**第4步：** 求交点坐标
> 📌 运用知识点：直线与圆的位置关系

由 $2x + y - 5 = 0$ 得 $y = 5 - 2x$，代入圆的方程：

$(x - 1)^2 + (5 - 2x - 2)^2 = 4$

$(x - 1)^2 + (3 - 2x)^2 = 4$

$x^2 - 2x + 1 + 9 - 12x + 4x^2 = 4$

$5x^2 - 14x + 6 = 0$

$x = \dfrac{14 \pm \sqrt{196 - 120}}{10} = \dfrac{14 \pm \sqrt{76}}{10} = \dfrac{14 \pm 2\sqrt{19}}{10} = \dfrac{7 \pm \sqrt{19}}{5}$

$y = 5 - 2x = 5 - \dfrac{14 \pm 2\sqrt{19}}{5} = \dfrac{25 - 14 \mp 2\sqrt{19}}{5} = \dfrac{11 \mp 2\sqrt{19}}{5}$

交点为 $\left(\dfrac{7 + \sqrt{19}}{5}, \dfrac{11 - 2\sqrt{19}}{5}\right)$ 和 $\left(\dfrac{7 - \sqrt{19}}{5}, \dfrac{11 + 2\sqrt{19}}{5}\right)$。

**⚠️ 易错提醒：** 判断位置关系用 $d$ 与 $r$ 比较即可，但求交点需要联立方程组。代入消元时注意符号运算的准确性。

**💡 解题思路总结：** 直线与圆的位置关系判断：$d < r$ 相交，$d = r$ 相切，$d > r$ 相离。求交点坐标用代入法联立直线与圆的方程。
