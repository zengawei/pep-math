---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P73 练习B 第3题"
---

**题目：** 求 $\left(x + \dfrac{1}{x^2}\right)^9$ 展开式中的有理项。

---

**解答：**

**第1步：** 写出通项
> 📌 运用知识点：二项式定理

$$T_{r+1} = \binom{9}{r} x^{9-r} \cdot \left(\frac{1}{x^2}\right)^r = \binom{9}{r} x^{9-r} \cdot x^{-2r} = \binom{9}{r} x^{9-3r}$$

其中 $r = 0, 1, 2, \ldots, 9$。

**第2步：** 确定有理项的条件
> 📌 运用知识点：二项式定理

有理项要求 $x$ 的指数为整数。$9 - 3r$ 对任意整数 $r$ 都是整数，所以展开式中每一项的 $x$ 的指数均为整数。

因此展开式的**所有项**都是有理项，共 $10$ 项。

若题目要求的是常数项（$x$ 的指数为 $0$）：

$$9 - 3r = 0 \implies r = 3$$

$$T_4 = \binom{9}{3} = 84$$

**⚠️ 易错提醒：** "有理项"的含义需根据题目语境理解。在含根式或分数的展开式中，有理项通常指 $x$ 的指数为整数的项。本题由于 $9-3r$ 恒为整数，所有项均为有理项。

**💡 解题思路总结：** 求有理项→写出通项→令 $x$ 的指数为整数→确定满足条件的 $r$ 值→逐一计算。
