---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P72 练习A 第4题"
---

**题目：** 已知 $(1 + x)^n$ 展开式中所有二项式系数之和为 $256$。

(1) 求 $n$ 的值。

(2) 求展开式中二项式系数最大的项。

---

**解答：**

**第1步：** 求 $n$ 的值
> 📌 运用知识点：二项式系数之和

二项式系数之和等于 $2^n$（令 $x = 1$）：

$$2^n = 256 = 2^8$$

解得 $n = 8$。

**第2步：** 确定二项式系数最大的项
> 📌 运用知识点：二项式系数的性质

$n = 8$ 为偶数，二项式系数 $\binom{8}{k}$ 在 $k = \dfrac{8}{2} = 4$ 时取最大值。

$$\binom{8}{4} = \frac{8 \times 7 \times 6 \times 5}{4 \times 3 \times 2 \times 1} = 70$$

所以二项式系数最大的项为第 $5$ 项：

$$T_5 = \binom{8}{4} x^4 = 70x^4$$

**⚠️ 易错提醒：** "二项式系数最大"与"系数最大"不同。二项式系数只看 $\binom{n}{k}$，不考虑 $a, b$ 中的系数。当 $n$ 为偶数时，中间一项（$k = n/2$）的二项式系数最大。

**💡 解题思路总结：** 二项式系数之和 $= 2^n$ 可反求 $n$。二项式系数最大项：$n$ 偶数→中间一项；$n$ 奇数→中间两项。
