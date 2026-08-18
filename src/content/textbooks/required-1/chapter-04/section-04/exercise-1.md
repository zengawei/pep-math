---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 1
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - function-application
  - exponential-function
source: "人教A版2019"
references: "课标4.4.1"
---

**题目：** 某城市 2020 年底人口为 500 万，假设人口以每年 1.2% 的速率增长，问至少经过多少年人口将超过 600 万？（参考数据：$\lg 1.2 \approx 0.0792$，$\lg 6 \approx 0.7782$，$\lg 5 \approx 0.6990$）

---

**解答：**

**第1步：** 建立指数增长模型
> 📌 运用知识点：函数应用

设经过 $n$ 年后人口为 $y$ 万，

$y = 500 \times (1 + 0.012)^n = 500 \times 1.012^n$

**第2步：** 解不等式
> 📌 运用知识点：指数与对数运算

$500 \times 1.012^n > 600$

$1.012^n > 1.2$

$n \lg 1.012 > \lg 1.2$

$n > \frac{\lg 1.2}{\lg 1.012}$

$\lg 1.2 = \lg\frac{6}{5} = \lg 6 - \lg 5 = 0.7782 - 0.6990 = 0.0792$

$\lg 1.012 \approx 0.00518$（近似）

$n > \frac{0.0792}{0.00518} \approx 15.3$

所以至少经过 16 年。

**💡 解题思路总结：** 增长率问题用指数模型 $y = a(1+r)^n$，解指数不等式用取对数的方法。
