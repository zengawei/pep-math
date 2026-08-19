---
type: exercise
textbook: selective-1
chapter: 13
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - ellipse-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P63 练习B 第1题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$（$a > b > 0$）的离心率 $e = \dfrac{\sqrt{3}}{2}$，椭圆上的点到右焦点的最短距离为 $1$，求椭圆的方程。

---

**解答：**

**第1步：** 利用离心率建立关系
> 📌 运用知识点：椭圆的几何性质

$e = \dfrac{c}{a} = \dfrac{\sqrt{3}}{2}$，所以 $c = \dfrac{\sqrt{3}}{2}a$

$b^2 = a^2 - c^2 = a^2 - \dfrac{3}{4}a^2 = \dfrac{1}{4}a^2$

**第2步：** 利用最短距离条件
> 📌 运用知识点：椭圆的几何性质

椭圆上的点到右焦点的距离为 $|PF_2| = a - ex_0$，当 $x_0 = a$（右顶点）时取最小值：

$|PF_2|_{\min} = a - ea = a - \dfrac{\sqrt{3}}{2}a = a\left(1 - \dfrac{\sqrt{3}}{2}\right) = 1$

$a = \dfrac{1}{1 - \dfrac{\sqrt{3}}{2}} = \dfrac{2}{2 - \sqrt{3}} = \dfrac{2(2 + \sqrt{3})}{(2 - \sqrt{3})(2 + \sqrt{3})} = \dfrac{2(2 + \sqrt{3})}{4 - 3} = 2(2 + \sqrt{3}) = 4 + 2\sqrt{3}$

**第3步：** 求 $a^2$ 和 $b^2$
> 📌 运用知识点：椭圆的几何性质

$a = 4 + 2\sqrt{3}$

$a^2 = (4 + 2\sqrt{3})^2 = 16 + 16\sqrt{3} + 12 = 28 + 16\sqrt{3}$

$b^2 = \dfrac{1}{4}a^2 = 7 + 4\sqrt{3}$

椭圆方程为：$\dfrac{x^2}{28 + 16\sqrt{3}} + \dfrac{y^2}{7 + 4\sqrt{3}} = 1$

**⚠️ 易错提醒：** 椭圆上的点到右焦点的最短距离是 $a - c$（右顶点到右焦点），不是 $a - c$ 的绝对值或其他表达式。要分清"到左焦点"和"到右焦点"的最短距离分别在哪个顶点取到。

**💡 解题思路总结：** 椭圆上点到焦点的距离范围：到右焦点 $|PF_2| = a - ex_0 \in [a-c, a+c]$。结合离心率和最短距离条件可求出 $a, b, c$。
