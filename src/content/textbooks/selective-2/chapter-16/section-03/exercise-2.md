---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - binomial-properties
source: "自编"
references: "课标16.3.2"
---

**题目：** 已知 $\left(x + \dfrac{1}{x}\right)^n$ 展开式中所有二项式系数之和为 $64$，求展开式中的常数项。

---

**解答：**

**第1步：** 求 $n$ 的值
> 📌 运用知识点：二项式系数之和

二项式系数之和等于 $2^n$（令 $a = 1, b = 1$ 即可得到），所以

$$2^n = 64 = 2^6$$

解得 $n = 6$。

**第2步：** 写出通项
> 📌 运用知识点：二项式定理

$\left(x + \dfrac{1}{x}\right)^6$ 的通项为

$$T_{r+1} = \binom{6}{r} x^{6-r} \cdot \left(\frac{1}{x}\right)^r = \binom{6}{r} x^{6-r} \cdot x^{-r} = \binom{6}{r} x^{6-2r}$$

**第3步：** 求常数项
> 📌 运用知识点：二项式定理

常数项要求 $x$ 的指数为 $0$，令

$$6 - 2r = 0 \implies r = 3$$

代入得常数项为

$$T_4 = \binom{6}{3} = 20$$

所以展开式中的常数项为 $\mathbf{20}$。

**💡 解题思路总结：** "二项式系数之和为 $2^n$"是二项式定理的重要性质，常用于反求 $n$。求常数项的关键是写出通项后令 $x$ 的指数等于 $0$，解出 $r$ 再代入计算。

