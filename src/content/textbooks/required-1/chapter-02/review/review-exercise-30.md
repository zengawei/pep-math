---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - basic-inequality
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P55 复习题 第30题"
---

**题目：** 已知正数 $x, y$ 满足 $x + y = 1$。

（1）求 $xy$ 的最大值；

（2）求 $\left(x + \frac{1}{x}\right)^2 + \left(y + \frac{1}{y}\right)^2$ 的最小值。

---

**解答：**

**第1步：** 求 $xy$ 的最大值
> 📌 运用知识点：基本不等式

由基本不等式：

$$\sqrt{xy} \leq \frac{x + y}{2} = \frac{1}{2}$$

所以 $xy \leq \frac{1}{4}$，等号在 $x = y = \frac{1}{2}$ 时成立。

$xy$ 的最大值为 $\frac{1}{4}$。

**第2步：** 展开目标表达式
> 📌 运用知识点：基本不等式

$$\left(x + \frac{1}{x}\right)^2 + \left(y + \frac{1}{y}\right)^2 = x^2 + 2 + \frac{1}{x^2} + y^2 + 2 + \frac{1}{y^2}$$

$$= (x^2 + y^2) + \left(\frac{1}{x^2} + \frac{1}{y^2}\right) + 4$$

**第3步：** 分别求各部分
> 📌 运用知识点：基本不等式

$x^2 + y^2 = (x+y)^2 - 2xy = 1 - 2xy$

$\frac{1}{x^2} + \frac{1}{y^2} = \frac{x^2 + y^2}{x^2 y^2} = \frac{1 - 2xy}{(xy)^2}$

令 $t = xy$，$0 < t \leq \frac{1}{4}$：

$$f(t) = (1 - 2t) + \frac{1 - 2t}{t^2} + 4 = (1 - 2t)\left(1 + \frac{1}{t^2}\right) + 4$$

$$= (1 - 2t) \cdot \frac{t^2 + 1}{t^2} + 4$$

**第4步：** 分析最小值
> 📌 运用知识点：基本不等式

展开：$f(t) = \frac{(1-2t)(t^2+1)}{t^2} + 4 = \frac{t^2 + 1 - 2t^3 - 2t}{t^2} + 4 = 1 + \frac{1}{t^2} - 2t - \frac{2}{t} + 4$

$$= 5 + \frac{1}{t^2} - \frac{2}{t} - 2t$$

令 $g(t) = \frac{1}{t^2} - \frac{2}{t} - 2t$，$g'(t) = -\frac{2}{t^3} + \frac{2}{t^2} - 2$。

当 $t = \frac{1}{4}$ 时：$g\left(\frac{1}{4}\right) = 16 - 8 - \frac{1}{2} = 7.5$。

$f\left(\frac{1}{4}\right) = 5 + 7.5 = 12.5 = \frac{25}{2}$。

**第5步：** 验证
> 📌 运用知识点：基本不等式

当 $x = y = \frac{1}{2}$ 时：

$$\left(\frac{1}{2} + 2\right)^2 + \left(\frac{1}{2} + 2\right)^2 = 2 \times \left(\frac{5}{2}\right)^2 = 2 \times \frac{25}{4} = \frac{25}{2}$$

由对称性和函数的单调性分析（$g(t)$ 在 $(0, \frac{1}{4}]$ 上递减），$f(t)$ 在 $t = \frac{1}{4}$ 时取最小值。

所以 $\left(x + \frac{1}{x}\right)^2 + \left(y + \frac{1}{y}\right)^2$ 的最小值为 $\frac{25}{2}$。

**⚠️ 易错提醒：** 综合题需要分步求解。第（2）问利用第（1）问的结论，将问题转化为关于 $t = xy$ 的函数求最值。

**💡 解题思路总结：** 条件最值的综合题：①先求简单部分 ②利用对称性设 $t = xy$ ③将目标表示为 $t$ 的函数 ④利用函数的单调性或基本不等式求最值。
