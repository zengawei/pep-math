---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P58 复习参考题"
---

**题目：** 已知函数 $f(x) = x^3 - ax^2 + 1$（$a \in \mathbb{R}$），讨论 $f(x)$ 的单调性。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性的关系

$$f'(x) = 3x^2 - 2ax = x(3x - 2a)$$

**第2步：** 分类讨论 $f'(x) = 0$ 的根
> 📌 运用知识点：导数与单调性的关系

令 $f'(x) = 0$，得 $x = 0$ 或 $x = \dfrac{2a}{3}$。

需要对 $a$ 的取值进行分类讨论：

**情况一：$a = 0$ 时**

$f'(x) = 3x^2 \geqslant 0$（仅在 $x=0$ 时等号成立）。

$f(x)$ 在 $\mathbb{R}$ 上单调递增。

**情况二：$a > 0$ 时**

$\dfrac{2a}{3} > 0$，两个零点为 $x_1 = 0 < x_2 = \dfrac{2a}{3}$。

$f'(x) = 3x\left(x - \dfrac{2a}{3}\right)$，开口向上：

- 当 $x \in (-\infty, 0)$ 时，$f'(x) > 0$，$f(x)$ 单调递增；
- 当 $x \in \left(0, \dfrac{2a}{3}\right)$ 时，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x \in \left(\dfrac{2a}{3}, +\infty\right)$ 时，$f'(x) > 0$，$f(x)$ 单调递增。

**情况三：$a < 0$ 时**

$\dfrac{2a}{3} < 0$，两个零点为 $x_1 = \dfrac{2a}{3} < x_2 = 0$。

- 当 $x \in \left(-\infty, \dfrac{2a}{3}\right)$ 时，$f'(x) > 0$，$f(x)$ 单调递增；
- 当 $x \in \left(\dfrac{2a}{3}, 0\right)$ 时，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x \in (0, +\infty)$ 时，$f'(x) > 0$，$f(x)$ 单调递增。

**第3步：** 总结
> 📌 运用知识点：导数与单调性的关系

- 当 $a = 0$ 时，$f(x)$ 在 $\mathbb{R}$ 上单调递增；
- 当 $a > 0$ 时，$f(x)$ 在 $(-\infty, 0)$ 和 $\left(\dfrac{2a}{3}, +\infty\right)$ 上单调递增，在 $\left(0, \dfrac{2a}{3}\right)$ 上单调递减；
- 当 $a < 0$ 时，$f(x)$ 在 $\left(-\infty, \dfrac{2a}{3}\right)$ 和 $(0, +\infty)$ 上单调递增，在 $\left(\dfrac{2a}{3}, 0\right)$ 上单调递减。

**⚠️ 易错提醒：** ①含参讨论必须考虑 $a=0$、$a>0$、$a<0$ 三种情况，$a=0$ 时两个零点重合，$f'(x) \geqslant 0$ 恒成立；②$a>0$ 和 $a<0$ 时两个零点的大小关系不同，直接影响单调区间的书写；③不要忘记 $a=0$ 的情况，这是最容易遗漏的。

**💡 解题思路总结：** 含参单调性讨论的核心是分析 $f'(x)=0$ 的根。对于 $f'(x) = x(3x-2a)$，两个根分别是 $0$ 和 $\frac{2a}{3}$，需要根据参数 $a$ 的取值讨论两根的大小关系（$a=0$ 时重合，$a>0$ 和 $a<0$ 时大小关系相反），从而确定不同的单调区间。
