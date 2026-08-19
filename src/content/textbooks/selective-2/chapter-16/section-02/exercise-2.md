---
type: exercise
textbook: selective-2
chapter: 16
section: 2
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "教材P115"
---

**题目：** 从7名男生、5名女生中选4人。要求恰有2名女生，有多少种选法？

---

**解答：**

**第1步：** 分析题意
> 📌 运用知识点：组合、分步计数原理

从7名男生、5名女生中选4人，要求恰有2名女生，即选2名女生和2名男生。

**第2步：** 计算选女生的方法数
> 📌 运用知识点：组合数公式

从5名女生中选2名：

$$\mathrm{C}_5^2 = \frac{5 \times 4}{2 \times 1} = 10$$

**第3步：** 计算选男生的方法数
> 📌 运用知识点：组合数公式

从7名男生中选2名：

$$\mathrm{C}_7^2 = \frac{7 \times 6}{2 \times 1} = 21$$

**第4步：** 由分步计数原理求总数
> 📌 运用知识点：分步计数原理

$$N = \mathrm{C}_5^2 \times \mathrm{C}_7^2 = 10 \times 21 = 210$$

$$\boxed{共有\ 210\ 种选法}$$

**💡 解题思路总结：** "恰有"型问题，先确定每类各选几个，再分别用组合数计算，最后用分步计数原理相乘。
