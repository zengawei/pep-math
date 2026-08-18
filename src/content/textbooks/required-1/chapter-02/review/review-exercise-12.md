---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P52 复习题 第12题"
---

**题目：** 已知 $a, b, c$ 为正数，求证：$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \geq 3$。

---

**解答：**

**第1步：** 应用基本不等式
> 📌 运用知识点：基本不等式

因为 $a, b, c > 0$，$\frac{a}{b} > 0$，$\frac{b}{c} > 0$，$\frac{c}{a} > 0$。

由三元基本不等式（AM-GM不等式）：

$$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \geq 3\sqrt[3]{\frac{a}{b} \cdot \frac{b}{c} \cdot \frac{c}{a}} = 3\sqrt[3]{1} = 3$$

**第2步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$\frac{a}{b} = \frac{b}{c} = \frac{c}{a}$。

由 $\frac{a}{b} = \frac{b}{c}$ 得 $ac = b^2$；由 $\frac{b}{c} = \frac{c}{a}$ 得 $ab = c^2$。

解得 $a = b = c$。

**⚠️ 易错提醒：** 三元 AM-GM 不等式：$x + y + z \geq 3\sqrt[3]{xyz}$（$x, y, z > 0$）。关键是三个因子的积为定值。

**💡 解题思路总结：** 当三个正数的积为 $1$（或定值）时，可以用三元 AM-GM 不等式直接求和的最小值。
