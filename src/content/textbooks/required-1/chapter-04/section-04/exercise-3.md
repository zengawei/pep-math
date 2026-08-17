---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - function-application
  - exponential-function
source: "自编"
references: "课标4.4.1"
---

**题目：** 一种放射性物质每年衰减为上一年的 $90\%$。若初始质量为 $100$ g，问至少经过多少年剩余质量不超过 $30$ g？（参考数据：$\lg 3 \approx 0.4771$，$\lg 0.9 \approx -0.0458$）

---

**解答：**

**第1步：** 建立指数衰减模型
> 📌 运用知识点：函数应用

设经过 $n$ 年后剩余质量为 $y$ g，

$y = 100 \times 0.9^n$

**第2步：** 解不等式
> 📌 运用知识点：指数与对数运算

$100 \times 0.9^n \leq 30$

$0.9^n \leq 0.3$

$n \lg 0.9 \leq \lg 0.3$

因为 $\lg 0.9 < 0$，所以 $n \geq \frac{\lg 0.3}{\lg 0.9}$

$\lg 0.3 = \lg 3 - 1 = 0.4771 - 1 = -0.5229$

$n \geq \frac{-0.5229}{-0.0458} \approx 11.4$

所以至少经过 12 年。

**💡 解题思路总结：** 衰减问题用指数模型 $y = a(1-r)^n$。注意除以负数时不等号变向。
