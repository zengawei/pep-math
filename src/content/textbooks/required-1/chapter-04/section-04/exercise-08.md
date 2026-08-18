---
type: exercise
textbook: required-1
chapter: 4
section: 4
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P110 练习1"
---

**题目：** 某药品的浓度 $C$（mg/L）随时间 $t$（小时）的变化规律为 $C = 4 \times 0.8^t$。求：(1) 服药后3小时的药品浓度；(2) 药品浓度降到1 mg/L以下需要多长时间？

---

**解答：**

**第1步：** 求 $t = 3$ 时的浓度
> 📌 运用知识点：指数型函数应用

$C(3) = 4 \times 0.8^3 = 4 \times 0.512 = 2.048$（mg/L）

**第2步：** 解不等式
> 📌 运用知识点：指数型函数应用

$4 \times 0.8^t < 1$

$0.8^t < 0.25$

两边取对数：$t \lg 0.8 < \lg 0.25 = \lg \frac{1}{4} = -2\lg 2 \approx -0.602$

$\lg 0.8 \approx -0.097$

$t > \frac{-0.602}{-0.097} \approx 6.2$

所以约6.2小时后浓度降到1 mg/L以下。

**⚠️ 易错提醒：** $\lg 0.8 < 0$，两边除以负数时不等号变向。

**💡 解题思路总结：** 衰减模型的实际应用：直接代入求值和解指数不等式两步走。
