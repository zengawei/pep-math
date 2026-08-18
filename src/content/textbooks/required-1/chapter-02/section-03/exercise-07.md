---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P47 练习 第7题"
---

**题目：** 已知 $x < 0$，求 $x + \frac{1}{x}$ 的最大值。

---

**解答：**

**第1步：** 变量替换
> 📌 运用知识点：基本不等式

因为 $x < 0$，令 $t = -x > 0$，则 $x = -t$。

$$x + \frac{1}{x} = -t + \frac{1}{-t} = -t - \frac{1}{t} = -\left(t + \frac{1}{t}\right)$$

**第2步：** 对 $t + \frac{1}{t}$ 应用基本不等式
> 📌 运用知识点：基本不等式

因为 $t > 0$，$\frac{1}{t} > 0$，由基本不等式：

$$t + \frac{1}{t} \geq 2\sqrt{t \cdot \frac{1}{t}} = 2$$

所以 $-\left(t + \frac{1}{t}\right) \leq -2$。

即 $x + \frac{1}{x} \leq -2$。

**第3步：** 验证等号成立条件
> 📌 运用知识点：基本不等式

等号成立：$t = \frac{1}{t}$，$t = 1$，即 $x = -1$。

所以 $x + \frac{1}{x}$ 的最大值为 $-2$，在 $x = -1$ 时取得。

**⚠️ 易错提醒：** 当变量为负数时，不能直接应用基本不等式。必须先通过换元转化为正数情况。负数时 $x + \frac{1}{x}$ 有最大值（而非最小值）。

**💡 解题思路总结：** 基本不等式要求各项为正。当变量为负时，令 $t = -x > 0$ 进行转化。注意符号变化：原来求最大值变为求 $t + \frac{1}{t}$ 的最小值后取负。
