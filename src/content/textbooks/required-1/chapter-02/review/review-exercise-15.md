---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P52 复习题 第15题"
---

**题目：** 已知 $x > 0$，$y > 0$，且 $x + 2y = 1$，求 $\frac{1}{x} + \frac{1}{y}$ 的最小值。

---

**解答：**

**第1步：** "1的代换"
> 📌 运用知识点：基本不等式

$$\frac{1}{x} + \frac{1}{y} = \left(\frac{1}{x} + \frac{1}{y}\right)(x + 2y) = 1 + \frac{2y}{x} + \frac{x}{y} + 2 = 3 + \frac{2y}{x} + \frac{x}{y}$$

**第2步：** 应用基本不等式
> 📌 运用知识点：基本不等式

$$\frac{2y}{x} + \frac{x}{y} \geq 2\sqrt{\frac{2y}{x} \cdot \frac{x}{y}} = 2\sqrt{2}$$

所以 $\frac{1}{x} + \frac{1}{y} \geq 3 + 2\sqrt{2}$。

**第3步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$\frac{2y}{x} = \frac{x}{y}$，即 $x^2 = 2y^2$，$x = \sqrt{2}y$。

代入 $x + 2y = 1$：$\sqrt{2}y + 2y = 1$，$y = \frac{1}{\sqrt{2} + 2} = \frac{2 - \sqrt{2}}{2}$，$x = \sqrt{2} - 1$。

两个值均为正数，等号可以取到。

所以 $\frac{1}{x} + \frac{1}{y}$ 的最小值为 $3 + 2\sqrt{2}$。

**⚠️ 易错提醒：** "1的代换"后展开，注意各项系数。$\left(\frac{1}{x} + \frac{1}{y}\right)(x + 2y) = 1 + \frac{2y}{x} + \frac{x}{y} + 2$，不要漏项。

**💡 解题思路总结：** 已知 $ax + by = 1$，求 $\frac{1}{x} + \frac{1}{y}$ 的最小值：用"1的代换"展开后，对交叉项用基本不等式。
