---
type: exercise
textbook: selective-1
chapter: 12
section: 3
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P50 练习A 第7题"
---

**题目：** 直线 $l: x - y + 1 = 0$ 与圆 $C: x^2 + y^2 = 2$ 相交于 $A, B$ 两点，求 $\triangle AOB$ 的面积（$O$ 为原点）。

---

**解答：**

**第1步：** 确定圆心和半径
> 📌 运用知识点：直线与圆的位置关系

圆心 $O(0, 0)$，半径 $r = \sqrt{2}$。

**第2步：** 计算圆心到直线的距离
> 📌 运用知识点：直线与圆的位置关系

$d = \dfrac{|0 - 0 + 1|}{\sqrt{1 + 1}} = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$

$d = \dfrac{\sqrt{2}}{2} < \sqrt{2} = r$，直线与圆相交 ✓

**第3步：** 求弦长
> 📌 运用知识点：直线与圆的位置关系

$|AB| = 2\sqrt{r^2 - d^2} = 2\sqrt{2 - \dfrac{1}{2}} = 2\sqrt{\dfrac{3}{2}} = \sqrt{6}$

**第4步：** 求面积
> 📌 运用知识点：直线与圆的位置关系

$\triangle AOB$ 中，底为 $|AB| = \sqrt{6}$，高为 $d = \dfrac{\sqrt{2}}{2}$。

$S = \dfrac{1}{2} \times |AB| \times d = \dfrac{1}{2} \times \sqrt{6} \times \dfrac{\sqrt{2}}{2} = \dfrac{\sqrt{12}}{4} = \dfrac{2\sqrt{3}}{4} = \dfrac{\sqrt{3}}{2}$

**⚠️ 易错提醒：** 求三角形面积时，高是圆心（原点）到直线的距离 $d$，底是弦长 $|AB|$。不要将 $d$ 与弦长混淆。

**💡 解题思路总结：** 求直线截圆所得弦与圆心构成的三角形面积：$S = \dfrac{1}{2} \times 2\sqrt{r^2 - d^2} \times d = d\sqrt{r^2 - d^2}$。
