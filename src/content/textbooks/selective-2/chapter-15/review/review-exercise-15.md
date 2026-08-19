---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-monotonicity
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P58 复习参考题"
---

**题目：** 已知函数 $f(x) = x^3 - ax$（$a > 0$），讨论 $f(x)$ 的单调性。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与单调性的关系

$$f'(x) = 3x^2 - a$$

**第2步：** 分析 $f'(x)$ 的符号（含参讨论）
> 📌 运用知识点：导数与单调性的关系

因为 $a > 0$，令 $f'(x) = 0$：

$$3x^2 - a = 0 \implies x^2 = \frac{a}{3} \implies x = \pm\sqrt{\frac{a}{3}}$$

设 $x_1 = -\sqrt{\dfrac{a}{3}}$，$x_2 = \sqrt{\dfrac{a}{3}}$。

$f'(x) = 3x^2 - a$ 是开口向上的二次函数，因此：

- 当 $x \in \left(-\infty, -\sqrt{\dfrac{a}{3}}\right)$ 时，$f'(x) > 0$，$f(x)$ 单调递增；
- 当 $x \in \left(-\sqrt{\dfrac{a}{3}}, \sqrt{\dfrac{a}{3}}\right)$ 时，$f'(x) < 0$，$f(x)$ 单调递减；
- 当 $x \in \left(\sqrt{\dfrac{a}{3}}, +\infty\right)$ 时，$f'(x) > 0$，$f(x)$ 单调递增。

**第3步：** 总结结论
> 📌 运用知识点：导数与单调性的关系

当 $a > 0$ 时：
- $f(x)$ 的单调递增区间为 $\left(-\infty, -\sqrt{\dfrac{a}{3}}\right)$ 和 $\left(\sqrt{\dfrac{a}{3}}, +\infty\right)$；
- $f(x)$ 的单调递减区间为 $\left(-\sqrt{\dfrac{a}{3}}, \sqrt{\dfrac{a}{3}}\right)$。

**⚠️ 易错提醒：** ①含参问题中，$a>0$ 时 $3x^2-a=0$ 有两个实根，不要漏掉负根；②根号下 $\frac{a}{3}$ 的书写要规范，不要写成 $\sqrt{a}/3$（虽然数值相同但表达不规范）；③注意 $f'(x) = 3x^2 - a$ 中 $3 > 0$，开口向上，所以两根之间 $f'(x) < 0$。

**💡 解题思路总结：** 含参数的单调性讨论，关键是分析 $f'(x) = 0$ 的根的情况。当 $a > 0$ 时，$3x^2 - a = 0$ 有两个不等实根，利用二次函数开口方向判断各区间导数的正负。此类题目要注意分类讨论的完整性。
