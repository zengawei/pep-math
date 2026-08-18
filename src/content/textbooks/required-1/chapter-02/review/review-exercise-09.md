---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 9
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P51 复习题 第9题"
---

**题目：** 已知正数 $x, y$ 满足 $x + y = 2$，求 $\left(1 + \frac{1}{x}\right)\left(1 + \frac{1}{y}\right)$ 的最小值。

---

**解答：**

**第1步：** 展开
> 📌 运用知识点：基本不等式

$$\left(1 + \frac{1}{x}\right)\left(1 + \frac{1}{y}\right) = 1 + \frac{1}{x} + \frac{1}{y} + \frac{1}{xy} = 1 + \frac{x + y}{xy} + \frac{1}{xy} = 1 + \frac{2}{xy} + \frac{1}{xy} = 1 + \frac{3}{xy}$$

**第2步：** 求 $xy$ 的最大值
> 📌 运用知识点：基本不等式

由基本不等式：$\sqrt{xy} \leq \frac{x+y}{2} = 1$，所以 $xy \leq 1$。

**第3步：** 求最小值
> 📌 运用知识点：基本不等式

因为 $xy \leq 1$ 且 $xy > 0$，所以 $\frac{3}{xy} \geq 3$。

$$1 + \frac{3}{xy} \geq 1 + 3 = 4$$

等号成立：$x = y = 1$。

所以 $\left(1 + \frac{1}{x}\right)\left(1 + \frac{1}{y}\right)$ 的最小值为 $4$。

**⚠️ 易错提醒：** 展开后利用 $x + y = 2$ 代入化简是关键步骤。注意 $\frac{1}{xy}$ 在 $xy$ 最大时取最小值。

**💡 解题思路总结：** 条件最值问题：先展开化简，再利用已知条件（和为定值）求积的范围，最终转化为求最值。
