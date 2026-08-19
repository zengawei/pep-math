---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 13
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P65 练习C 第2题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）经过点 $\left(1, \dfrac{3}{2}\right)$，离心率为 $\dfrac{1}{2}$。

(1) 求椭圆 $C$ 的方程；

(2) 设直线 $l: y = kx + m$ 与椭圆 $C$ 交于 $A, B$ 两点（$A, B$ 不是椭圆的顶点），若 $k_{OA} \cdot k_{OB} = -\dfrac{3}{4}$（$O$ 为原点），求 $m$ 的取值范围。

---

**解答：**

**第1步：** 求椭圆方程
> 📌 运用知识点：椭圆的定义与标准方程

$e = \dfrac{c}{a} = \dfrac{1}{2}$，$c = \dfrac{a}{2}$，$b^2 = a^2 - c^2 = \dfrac{3}{4}a^2$

代入点 $\left(1, \dfrac{3}{2}\right)$：

$\dfrac{1}{a^2} + \dfrac{9/4}{3a^2/4} = \dfrac{1}{a^2} + \dfrac{9}{4} \cdot \dfrac{4}{3a^2} = \dfrac{1}{a^2} + \dfrac{3}{a^2} = \dfrac{4}{a^2} = 1$

$a^2 = 4$，$b^2 = 3$

椭圆方程：$\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$

**第2步：** 联立直线与椭圆
> 📌 运用知识点：直线与圆锥曲线的位置关系

将 $y = kx + m$ 代入 $\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$：

$3x^2 + 4(kx + m)^2 = 12$

$(3 + 4k^2)x^2 + 8kmx + 4m^2 - 12 = 0$

由韦达定理：$x_1 + x_2 = \dfrac{-8km}{3 + 4k^2}$，$x_1 x_2 = \dfrac{4m^2 - 12}{3 + 4k^2}$

**第3步：** 利用斜率之积条件
> 📌 运用知识点：直线与圆锥曲线的位置关系

$k_{OA} \cdot k_{OB} = \dfrac{y_1}{x_1} \cdot \dfrac{y_2}{x_2} = \dfrac{y_1 y_2}{x_1 x_2} = -\dfrac{3}{4}$

$y_1 y_2 = (kx_1 + m)(kx_2 + m) = k^2 x_1 x_2 + km(x_1 + x_2) + m^2$

$= k^2 \cdot \dfrac{4m^2 - 12}{3 + 4k^2} + km \cdot \dfrac{-8km}{3 + 4k^2} + m^2$

$= \dfrac{k^2(4m^2 - 12) - 8k^2m^2 + m^2(3 + 4k^2)}{3 + 4k^2}$

$= \dfrac{4k^2m^2 - 12k^2 - 8k^2m^2 + 3m^2 + 4k^2m^2}{3 + 4k^2}$

$= \dfrac{-12k^2 + 3m^2}{3 + 4k^2} = \dfrac{3(m^2 - 4k^2)}{3 + 4k^2}$

$\dfrac{y_1 y_2}{x_1 x_2} = \dfrac{3(m^2 - 4k^2)}{4m^2 - 12} = -\dfrac{3}{4}$

$\dfrac{m^2 - 4k^2}{4m^2 - 12} = -\dfrac{1}{4}$

$4(m^2 - 4k^2) = -(4m^2 - 12)$

$4m^2 - 16k^2 = -4m^2 + 12$

$8m^2 = 16k^2 + 12$

$m^2 = 2k^2 + \dfrac{3}{2}$

**第4步：** 确定 $m$ 的范围
> 📌 运用知识点：圆锥曲线的最值问题

需要满足：① 判别式 $\Delta > 0$；② $m^2 = 2k^2 + \dfrac{3}{2} \geqslant \dfrac{3}{2}$

$\Delta = 64k^2m^2 - 4(3 + 4k^2)(4m^2 - 12) > 0$

$= 64k^2m^2 - 4(12m^2 - 36 + 16k^2m^2 - 48k^2)$

$= 64k^2m^2 - 48m^2 + 144 - 64k^2m^2 + 192k^2$

$= -48m^2 + 144 + 192k^2 > 0$

代入 $m^2 = 2k^2 + \dfrac{3}{2}$：

$-48\left(2k^2 + \dfrac{3}{2}\right) + 144 + 192k^2 > 0$

$-96k^2 - 72 + 144 + 192k^2 > 0$

$96k^2 + 72 > 0$

此式恒成立。

又 $A, B$ 不是顶点，需排除 $m$ 使交点为 $(\pm 2, 0)$ 或 $(0, \pm\sqrt{3})$ 的情况。

当交点为 $(\pm 2, 0)$ 时：$0 = \pm 2k + m$，$m = \mp 2k$，$m^2 = 4k^2$，而 $m^2 = 2k^2 + \frac{3}{2}$，得 $2k^2 = \frac{3}{2}$，$k^2 = \frac{3}{4}$，$m^2 = 3$，$m = \pm\sqrt{3}$。

$m$ 的取值范围为 $m \in \left(-\sqrt{\dfrac{3}{2}}, -\sqrt{3}\right) \cup \left(-\sqrt{3}, \sqrt{3}\right) \cup \left(\sqrt{3}, \sqrt{\dfrac{3}{2}}\right)$... 

实际上 $m^2 \geqslant \frac{3}{2}$，$m \geqslant \sqrt{\frac{3}{2}}$ 或 $m \leqslant -\sqrt{\frac{3}{2}}$，排除 $m = \pm\sqrt{3}$。

$m$ 的取值范围为 $\left(-\infty, -\sqrt{3}\right) \cup \left(-\sqrt{3}, -\dfrac{\sqrt{6}}{2}\right] \cup \left[\dfrac{\sqrt{6}}{2}, \sqrt{3}\right) \cup \left(\sqrt{3}, +\infty\right)$

等等，$m^2 \geqslant \frac{3}{2}$ 意味着 $|m| \geqslant \frac{\sqrt{6}}{2}$，排除 $m = \pm\sqrt{3}$。

$m$ 的取值范围为 $\left(-\infty, -\sqrt{3}\right) \cup \left(-\sqrt{3}, -\dfrac{\sqrt{6}}{2}\right] \cup \left[\dfrac{\sqrt{6}}{2}, \sqrt{3}\right) \cup \left(\sqrt{3}, +\infty\right)$

**⚠️ 易错提醒：** ① 利用 $k_{OA} \cdot k_{OB}$ 时注意 $x_1, x_2 \neq 0$（$A, B$ 不在 $y$ 轴上）；② 判别式 $\Delta > 0$ 不能遗漏；③ "不是顶点"的条件需要排除特殊情况。

**💡 解题思路总结：** 椭圆综合题的标准流程：① 由条件求方程；② 联立直线与椭圆得韦达定理；③ 将几何条件（斜率之积）转化为代数关系；④ 利用判别式和限制条件确定参数范围。
