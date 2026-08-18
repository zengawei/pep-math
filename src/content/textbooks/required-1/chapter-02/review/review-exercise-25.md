---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - inequality-properties
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P55 复习题 第25题"
---

**题目：** 已知 $a > b > c > 0$，求证：$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} \geq a + b + c$。

---

**解答：**

**第1步：** 作差
> 📌 运用知识点：不等式的性质

$$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} - (a + b + c) = \left(\frac{a^2}{b} - a\right) + \left(\frac{b^2}{c} - b\right) + \left(\frac{c^2}{a} - c\right)$$

$$= \frac{a^2 - ab}{b} + \frac{b^2 - bc}{c} + \frac{c^2 - ac}{a} = \frac{a(a-b)}{b} + \frac{b(b-c)}{c} + \frac{c(c-a)}{a}$$

**第2步：** 重新组合
> 📌 运用知识点：基本不等式

另一种方法：对每一项用基本不等式的变形。

$$\frac{a^2}{b} + b \geq 2a \quad \text{（基本不等式）}$$
$$\frac{b^2}{c} + c \geq 2b$$
$$\frac{c^2}{a} + a \geq 2c$$

**第3步：** 三式相加
> 📌 运用知识点：基本不等式

$$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} + a + b + c \geq 2a + 2b + 2c$$

$$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} \geq a + b + c$$

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$\frac{a^2}{b} = b$，$\frac{b^2}{c} = c$，$\frac{c^2}{a} = a$，即 $a = b = c$。

但题目条件 $a > b > c > 0$ 排除了等号，所以严格不等号成立：

$$\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} > a + b + c$$

**⚠️ 易错提醒：** 本题的关键技巧是对 $\frac{a^2}{b}$ 和 $b$ 配对使用基本不等式，而不是直接对原式作差。

**💡 解题思路总结：** 证明分式不等式时，常用"配对法"：将 $\frac{x^2}{y}$ 与 $y$ 配对，利用 $\frac{x^2}{y} + y \geq 2x$（基本不等式），然后累加。
