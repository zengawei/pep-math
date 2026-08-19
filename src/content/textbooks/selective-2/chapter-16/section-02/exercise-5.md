---
type: exercise
textbook: selective-2
chapter: 16
section: 2
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - combination
source: "人教A版2019"
references: "选择性必修第二册 P64 练习A 第5题"
---

**题目：** 从 $4$ 名男生和 $3$ 名女生中选 $3$ 人参加活动，要求恰有 $1$ 名女生，有多少种选法？

---

**解答：**

**第1步：** 分析题意
> 📌 运用知识点：组合、分步计数原理

"恰有 $1$ 名女生"意味着选 $1$ 名女生和 $2$ 名男生。

**第2步：** 选女生
> 📌 运用知识点：组合数公式

从 $3$ 名女生中选 $1$ 名：

$$\mathrm{C}_3^1 = 3$$

**第3步：** 选男生
> 📌 运用知识点：组合数公式

从 $4$ 名男生中选 $2$ 名：

$$\mathrm{C}_4^2 = \frac{4 \times 3}{2 \times 1} = 6$$

**第4步：** 由分步计数原理汇总
> 📌 运用知识点：分步计数原理

$$N = \mathrm{C}_3^1 \times \mathrm{C}_4^2 = 3 \times 6 = 18 \text{（种）}$$

**⚠️ 易错提醒：** "恰有"型问题直接分步计算即可，不需要用间接法。注意区分"恰有"（恰好）和"至少"（不少于）——前者直接算，后者通常间接法更简便。

**💡 解题思路总结：** "恰有 $k$ 名某类"→分别从各类中选取指定数量，再用乘法原理相乘。
