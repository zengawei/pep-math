---
type: exercise
textbook: selective-1
chapter: 12
section: 3
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - line-circle-position
  - circle-circle-position
  - line-equation-application
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P52 练习C 第12题"
---

**题目：** 已知圆 $C_1: (x - 1)^2 + (y - 2)^2 = 4$ 和圆 $C_2: (x - 4)^2 + (y - 2)^2 = 9$。

(1) 判断两圆的位置关系；

(2) 若直线 $l: y = x + m$ 与两圆都相交，且被两圆截得的弦长相等，求 $m$ 的值。

---

**解答：**

**第1步：** 确定两圆圆心和半径
> 📌 运用知识点：圆与圆的位置关系

$C_1(1, 2)$，$r_1 = 2$；$C_2(4, 2)$，$r_2 = 3$。

$|C_1C_2| = \sqrt{(4-1)^2 + (2-2)^2} = 3$

$r_2 - r_1 = 1$，$r_1 + r_2 = 5$

$r_2 - r_1 < |C_1C_2| < r_1 + r_2$（$1 < 3 < 5$）

两圆相交。

**第2步：** 计算弦长
> 📌 运用知识点：直线与圆的位置关系

直线 $x - y + m = 0$

$d_1 = \dfrac{|1 - 2 + m|}{\sqrt{2}} = \dfrac{|m - 1|}{\sqrt{2}}$

$d_2 = \dfrac{|4 - 2 + m|}{\sqrt{2}} = \dfrac{|m + 2|}{\sqrt{2}}$

弦长相等：$2\sqrt{r_1^2 - d_1^2} = 2\sqrt{r_2^2 - d_2^2}$

$r_1^2 - d_1^2 = r_2^2 - d_2^2$

$4 - \dfrac{(m-1)^2}{2} = 9 - \dfrac{(m+2)^2}{2}$

$\dfrac{(m+2)^2 - (m-1)^2}{2} = 5$

$(m+2)^2 - (m-1)^2 = 10$

$(m^2 + 4m + 4) - (m^2 - 2m + 1) = 10$

$6m + 3 = 10$

$m = \dfrac{7}{6}$

**第3步：** 验证
> 📌 运用知识点：直线与圆的位置关系

$m = \dfrac{7}{6}$ 时：

$d_1 = \dfrac{|7/6 - 1|}{\sqrt{2}} = \dfrac{1/6}{\sqrt{2}} = \dfrac{1}{6\sqrt{2}}$

$d_2 = \dfrac{|7/6 + 2|}{\sqrt{2}} = \dfrac{19/6}{\sqrt{2}} = \dfrac{19}{6\sqrt{2}}$

需 $d_1 < r_1$：$\dfrac{1}{6\sqrt{2}} < 2$ ✓

需 $d_2 < r_2$：$\dfrac{19}{6\sqrt{2}} = \dfrac{19}{8.485} \approx 2.24 < 3$ ✓

弦长 $= 2\sqrt{4 - \dfrac{1}{72}} = 2\sqrt{\dfrac{287}{72}}$

验证 $2\sqrt{9 - \dfrac{361}{72}} = 2\sqrt{\dfrac{648 - 361}{72}} = 2\sqrt{\dfrac{287}{72}}$ ✓

**⚠️ 易错提醒：** 弦长相等不等于距离相等！两圆半径不同时，弦长相等意味着 $r_1^2 - d_1^2 = r_2^2 - d_2^2$，不是 $d_1 = d_2$。

**💡 解题思路总结：** 直线与两圆截得等长弦的问题，利用弦长公式建立等式。注意弦长相等 $\Leftrightarrow r^2 - d^2$ 相等，而非 $d$ 相等。最后务必验证直线与两圆都相交。
