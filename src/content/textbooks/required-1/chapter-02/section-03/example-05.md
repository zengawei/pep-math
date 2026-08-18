---
type: example
textbook: required-1
chapter: 2
section: 3
number: 5
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P48"
---

**例题：** 已知 $a, b, c$ 为正数，且 $a + b + c = 1$。用两种方法证明：$\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \geq 9$。

**解答：**

**方法一：利用基本不等式**

**第1步：** 通分
> 📌 运用知识点：基本不等式

$$\frac{1}{a} + \frac{1}{b} + \frac{1}{c} = \frac{bc + ac + ab}{abc}$$

**第2步：** 利用 $a + b + c = 1$
> 📌 运用知识点：基本不等式

$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca) = 1$$

又 $a^2 + b^2 + c^2 \geq ab + bc + ca$（可由 $(a-b)^2+(b-c)^2+(c-a)^2 \geq 0$ 推出），

所以 $3(ab + bc + ca) \leq 1$，即 $ab + bc + ca \leq \frac{1}{3}$。

**第3步：** 求 $abc$ 的最大值
> 📌 运用知识点：基本不等式

由基本不等式：$\sqrt[3]{abc} \leq \frac{a+b+c}{3} = \frac{1}{3}$

所以 $abc \leq \frac{1}{27}$。

**第4步：** 综合
> 📌 运用知识点：基本不等式

这个方法不够直接，换用更简洁的方法。

**方法二："1的代换"**

**第1步：** 将 $1$ 代换
> 📌 运用知识点：基本不等式

$$\frac{1}{a} + \frac{1}{b} + \frac{1}{c} = \frac{a+b+c}{a} + \frac{a+b+c}{b} + \frac{a+b+c}{c}$$

$$= 3 + \frac{b}{a} + \frac{c}{a} + \frac{a}{b} + \frac{c}{b} + \frac{a}{c} + \frac{b}{c}$$

**第2步：** 配对使用基本不等式
> 📌 运用知识点：基本不等式

$$\frac{b}{a} + \frac{a}{b} \geq 2, \quad \frac{c}{a} + \frac{a}{c} \geq 2, \quad \frac{c}{b} + \frac{b}{c} \geq 2$$

所以 $\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \geq 3 + 2 + 2 + 2 = 9$。

**第3步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$a = b$，$a = c$，$b = c$，即 $a = b = c = \frac{1}{3}$。

**⚠️ 易错提醒：** "1的代换"是处理条件最值问题的核心技巧。将 $\frac{1}{a}$ 写成 $\frac{a+b+c}{a}$，展开后配对使用基本不等式。
