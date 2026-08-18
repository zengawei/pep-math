---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P115 复习29"
---

**题目：** 已知函数 $f(x) = 4^x - 2^{x+1} + 3$，求 $f(x)$ 在 $[-1, 1]$ 上的值域。

---

**解答：**

**第1步：** 换元
> 📌 运用知识点：指数函数图象与性质

令 $t = 2^x$，因为 $x \in [-1, 1]$，所以 $t \in \left[\frac{1}{2}, 2\right]$。

$f(x) = t^2 - 2t + 3 = (t-1)^2 + 2$

**第2步：** 求二次函数在闭区间上的值域
> 📌 运用知识点：指数函数图象与性质

$g(t) = (t-1)^2 + 2$，对称轴 $t = 1 \in \left[\frac{1}{2}, 2\right]$

$g(1) = 2$（最小值）

$g\left(\frac{1}{2}\right) = \frac{1}{4} - 1 + 3 = \frac{9}{4}$

$g(2) = 4 - 4 + 3 = 3$

最大值为 $3$。

值域为 $[2, 3]$。

**⚠️ 易错提醒：** 换元后注意新变量的取值范围，二次函数最值要比较端点和顶点。

**💡 解题思路总结：** 指数型函数值域：换元转化为二次函数，在闭区间上比较端点值和顶点值。
