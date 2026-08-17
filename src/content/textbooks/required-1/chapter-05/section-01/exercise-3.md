---
type: exercise
textbook: required-1
chapter: 5
section: 1
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - angle-concept
source: "自编"
references: "课标5.1.1"
---

**题目：** 已知扇形的周长为 $10$ cm，求当圆心角为多少弧度时，扇形面积最大。

---

**解答：**

**第1步：** 建立关系式
> 📌 运用知识点：角的概念与弧度制

设扇形半径为 $r$，弧长为 $l$，则周长 $2r + l = 10$，即 $l = 10 - 2r$。

**第2步：** 表示面积
> 📌 运用知识点：角的概念与弧度制

$S = \frac{1}{2}lr = \frac{1}{2}(10 - 2r)r = 5r - r^2 = -(r - \frac{5}{2})^2 + \frac{25}{4}$

**第3步：** 求最大值
> 📌 运用知识点：基本不等式

当 $r = \frac{5}{2}$ 时，$S$ 取最大值 $\frac{25}{4}$ cm²。

此时 $l = 10 - 5 = 5$，$\alpha = \frac{l}{r} = \frac{5}{\frac{5}{2}} = 2$ rad。

**💡 解题思路总结：** 扇形最值问题：先用周长条件消元，再用二次函数求最值。
