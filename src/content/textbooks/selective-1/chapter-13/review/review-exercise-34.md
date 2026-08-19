---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 34
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - conic-section-line
  - conic-section-summary
  - curve-equation-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P113 复习参考题 第34题"
---

**题目：** 已知椭圆 $C: \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的离心率为 $\dfrac{1}{2}$，右焦点到右顶点的距离为 $1$。

(1) 求椭圆 $C$ 的方程。

(2) 设 $A, B$ 分别为椭圆的左、右顶点，$P$ 是椭圆上异于 $A, B$ 的点。直线 $PA$ 交直线 $x = 4$ 于点 $M$，直线 $PB$ 交直线 $x = 4$ 于点 $N$。证明：以 $MN$ 为直径的圆过定点。

---

**解答：**

**第1步：** 求椭圆方程
> 📌 运用知识点：求曲线方程的方法

$e = \dfrac{c}{a} = \dfrac{1}{2}$，$c = \dfrac{a}{2}$。

右焦点到右顶点距离 $= a - c = a - \dfrac{a}{2} = \dfrac{a}{2} = 1$，$a = 2$。

$c = 1$，$b^2 = 4 - 1 = 3$。

椭圆方程：$\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$。

**第2步：** 证明圆过定点
> 📌 运用知识点：圆锥曲线的综合应用

$A(-2, 0), B(2, 0)$。设 $P(x_0, y_0)$，$\dfrac{x_0^2}{4} + \dfrac{y_0^2}{3} = 1$。

直线 $PA$：$y = \dfrac{y_0}{x_0 + 2}(x + 2)$。交 $x = 4$：$M\left(4, \dfrac{6y_0}{x_0 + 2}\right)$。

直线 $PB$：$y = \dfrac{y_0}{x_0 - 2}(x - 2)$。交 $x = 4$：$N\left(4, \dfrac{2y_0}{x_0 - 2}\right)$。

以 $MN$ 为直径的圆过定点 $Q$，则 $\overrightarrow{QM} \cdot \overrightarrow{QN} = 0$。

设 $Q(t, s)$。$MN$ 在直线 $x = 4$ 上，$M, N$ 的 $y$ 坐标之积：

$y_M \cdot y_N = \dfrac{6y_0}{x_0 + 2} \cdot \dfrac{2y_0}{x_0 - 2} = \dfrac{12y_0^2}{x_0^2 - 4}$

由椭圆方程 $y_0^2 = 3\left(1 - \dfrac{x_0^2}{4}\right) = \dfrac{3(4 - x_0^2)}{4}$：

$y_M \cdot y_N = \dfrac{12 \cdot \frac{3(4 - x_0^2)}{4}}{x_0^2 - 4} = \dfrac{9(4 - x_0^2)}{x_0^2 - 4} = -9$

以 $MN$ 为直径的圆：$(x - 4)^2 + (y - y_M)(y - y_N) = 0$。

展开：$(x - 4)^2 + y^2 - (y_M + y_N)y + y_M y_N = 0$。

$(x - 4)^2 + y^2 - (y_M + y_N)y - 9 = 0$。

令 $y = 0$：$(x - 4)^2 = 9$，$x = 7$ 或 $x = 1$。

定点 $(1, 0)$ 和 $(7, 0)$。

注意 $(1, 0)$ 恰好是右焦点 $F_2$。

**⚠️ 易错提醒：** $y_M \cdot y_N = -9$ 是关键化简结果，与 $P$ 的位置无关。以 $MN$ 为直径的圆过 $x$ 轴上的两个定点。

**💡 解题思路总结：** 证明圆过定点：求出圆的方程（含参数），令参数消去后找固定交点。$y_M \cdot y_N$ 为常数是关键。
