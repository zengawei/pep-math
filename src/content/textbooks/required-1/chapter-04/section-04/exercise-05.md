---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P108 练习2"
---

**题目：** 一种放射性物质每年衰减为原来的80%，现有该物质1000克，问多少年后剩余量不超过100克？（参考数据：$\lg 8 \approx 0.903$）

---

**解答：**

**第1步：** 建立衰减模型
> 📌 运用知识点：指数型函数应用

$n$ 年后剩余量 $M(n) = 1000 \times 0.8^n$

**第2步：** 列不等式求解
> 📌 运用知识点：指数型函数应用

$1000 \times 0.8^n \leq 100$

$0.8^n \leq 0.1$

两边取常用对数：$n \lg 0.8 \leq \lg 0.1 = -1$

$\lg 0.8 = \lg \frac{8}{10} = \lg 8 - 1 \approx 0.903 - 1 = -0.097$

$n \geq \frac{-1}{-0.097} \approx 10.3$

因为 $n$ 为正整数，所以 $n \geq 11$，即11年后剩余量不超过100克。

**⚠️ 易错提醒：** $\lg 0.8 < 0$，除以负数时不等号方向要改变。

**💡 解题思路总结：** 衰减模型 $M = M_0 \cdot q^n$（$0 < q < 1$），解指数不等式用对数。
