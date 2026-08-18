---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - exponential-function
source: "人教A版2019"
references: "必修第一册 P109 练习2"
---

**题目：** 某企业2020年的年产值为200万元，若年产值每年增长10%，问至少经过几年年产值才能达到400万元？（参考数据：$\lg 2 \approx 0.301$）

---

**解答：**

**第1步：** 建立模型
> 📌 运用知识点：指数型函数应用

$n$ 年后产值 $y = 200 \times 1.1^n$

**第2步：** 列不等式
> 📌 运用知识点：指数型函数应用

$200 \times 1.1^n \geq 400$

$1.1^n \geq 2$

两边取对数：$n \lg 1.1 \geq \lg 2$

$\lg 1.1 \approx 0.0414$

$n \geq \frac{0.301}{0.0414} \approx 7.27$

所以至少经过8年。

**⚠️ 易错提醒：** "至少几年"意味着向上取整，$7.27$ 年要取 $8$ 年。

**💡 解题思路总结：** 指数增长求时间：列不等式→取对数→解出 $n$→向上取整。
