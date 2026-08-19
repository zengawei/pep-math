---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 26
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - coordinate-method
  - line-equation-application
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P67 复习参考题 第26题"
---

**题目：** 已知点 $M(x, y)$ 到点 $F(2, 0)$ 的距离与到直线 $x = 8$ 的距离之比为 $\dfrac{1}{2}$。

(1) 求点 $M$ 的轨迹方程；

(2) 设轨迹上两点 $A, B$ 满足 $\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$，求 $|AB|$ 的最小值。

---

**解答：**

**第1步：** 列方程求轨迹
> 📌 运用知识点：坐标法

$$\frac{\sqrt{(x-2)^2 + y^2}}{|x - 8|} = \frac{1}{2}$$

$4[(x-2)^2 + y^2] = (x-8)^2$

$4x^2 - 16x + 16 + 4y^2 = x^2 - 16x + 64$

$3x^2 + 4y^2 = 48$

$$\frac{x^2}{16} + \frac{y^2}{12} = 1$$

轨迹为椭圆。

**第2步：** 求 $|AB|$ 最小值
> 📌 运用知识点：坐标法

$\overrightarrow{OA} \cdot \overrightarrow{OB} = 0$ 表示 $OA \perp OB$。

设 $A(r_1\cos\theta, r_1\sin\theta)$，$B(-r_2\sin\theta, r_2\cos\theta)$。

代入椭圆方程：$\dfrac{r_1^2\cos^2\theta}{16} + \dfrac{r_1^2\sin^2\theta}{12} = 1$，$r_1^2 = \dfrac{48}{3\cos^2\theta + 4}$。

同理 $r_2^2 = \dfrac{48}{3\sin^2\theta + 4}$。

$$|AB|^2 = r_1^2 + r_2^2 = 48\left(\frac{1}{3\cos^2\theta + 4} + \frac{1}{3\sin^2\theta + 4}\right)$$

设 $u = \cos^2\theta$：

$$|AB|^2 = 48\left(\frac{1}{3u + 4} + \frac{1}{7 - 3u}\right) = 48 \cdot \frac{11}{(3u+4)(7-3u)}$$

分母 $(3u+4)(7-3u) = -9u^2 + 9u + 28$，当 $u = \dfrac{1}{2}$ 时取最大值 $\dfrac{9}{4} + \dfrac{9}{2} + 28 = \dfrac{121}{4}$。

$|AB|^2_{\min} = \dfrac{48 \times 11}{\frac{121}{4}} = \dfrac{48 \times 44}{121} = \dfrac{2112}{121}$。

$|AB|_{\min} = \dfrac{8\sqrt{33}}{11}$。

不对，重新计算：$(3u+4)(7-3u)$ 在 $u = \frac{1}{2}$ 时 $= \frac{11}{2} \cdot \frac{11}{2} = \frac{121}{4}$。

$|AB|^2 = \frac{48 \times 11}{121/4} = \frac{48 \times 44}{121} = \frac{2112}{121}$。

$|AB|_{\min} = \frac{\sqrt{2112}}{11} = \frac{8\sqrt{33}}{11}$。

**⚠️ 易错提醒：** 椭圆上两点满足 $OA \perp OB$ 的问题，用极坐标参数化是有效方法。求最值时注意分母函数的极值。

**💡 解题思路总结：** 轨迹问题用距离比列方程。椭圆上垂直弦的最值问题用极坐标参数化，转化为三角函数的最值。
