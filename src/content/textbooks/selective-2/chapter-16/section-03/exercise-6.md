---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 6
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P73 练习B 第1题"
---

**题目：** 已知 $\left(x^2 - \dfrac{1}{x}\right)^n$ 展开式中第 $3$ 项的二项式系数为 $45$。

(1) 求 $n$ 的值。

(2) 求展开式中含 $x^3$ 的项。

---

**解答：**

**第1步：** 求 $n$ 的值
> 📌 运用知识点：二项式定理

第 $3$ 项即 $r = 2$，其二项式系数为 $\binom{n}{2}$：

$$\binom{n}{2} = 45$$

$$\frac{n(n-1)}{2} = 45$$

$$n(n-1) = 90$$

$$n^2 - n - 90 = 0$$

$$(n-10)(n+9) = 0$$

解得 $n = 10$（$n = -9$ 舍去）。

**第2步：** 写出通项
> 📌 运用知识点：二项式定理

$\left(x^2 - \dfrac{1}{x}\right)^{10}$ 的通项为

$$T_{r+1} = \binom{10}{r} (x^2)^{10-r} \left(-\frac{1}{x}\right)^r = \binom{10}{r} \cdot (-1)^r \cdot x^{20-2r} \cdot x^{-r} = \binom{10}{r} \cdot (-1)^r \cdot x^{20-3r}$$

**第3步：** 求含 $x^3$ 的项
> 📌 运用知识点：二项式定理

令 $20 - 3r = 3$，解得 $r = \dfrac{17}{3}$。

由于 $r$ 不是整数，所以展开式中**不含** $x^3$ 的项。

**⚠️ 易错提醒：** 解出 $r$ 后必须验证 $r$ 是否为非负整数。若 $r$ 不是整数，说明展开式中不存在该次幂的项。这是常见陷阱。

**💡 解题思路总结：** 求特定次幂的项→写出通项→令指数等于目标值→解出 $r$→验证 $r$ 为非负整数→代入计算。若 $r$ 非整数则该项不存在。
