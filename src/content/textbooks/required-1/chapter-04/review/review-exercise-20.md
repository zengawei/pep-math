---
type: exercise
textbook: required-1
chapter: 4
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - exponential-function
  - logarithmic-function
source: "人教A版2019"
references: "必修第一册 P114 复习20"
---

**题目：** 已知 $3^a = 5^b = \sqrt{15}$，求 $\frac{1}{a} + \frac{1}{b}$ 的值。

---

**解答：**

**第1步：** 转化为对数
> 📌 运用知识点：指数函数图象与性质

$a = \log_3 \sqrt{15}$，$b = \log_5 \sqrt{15}$

**第2步：** 求倒数
> 📌 运用知识点：换底公式

$\frac{1}{a} = \log_{\sqrt{15}} 3$，$\frac{1}{b} = \log_{\sqrt{15}} 5$

**第3步：** 求和

$\frac{1}{a} + \frac{1}{b} = \log_{\sqrt{15}} 3 + \log_{\sqrt{15}} 5 = \log_{\sqrt{15}} 15 = \log_{\sqrt{15}} (\sqrt{15})^2 = 2$

**⚠️ 易错提醒：** $\frac{1}{\log_x y} = \log_y x$，同底对数相加等于真数相乘。

**💡 解题思路总结：** 利用换底推论将倒数转化为对数，再合并求值。
