---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P74 练习C 第2题"
---

**题目：** 已知 $\left(\sqrt{x} + \dfrac{2}{x}\right)^n$ 展开式中第 $5$ 项的二项式系数与第 $3$ 项的二项式系数之比为 $14:3$。

(1) 求 $n$ 的值。

(2) 求展开式中的常数项。

---

**解答：**

**第1步：** 建立方程
> 📌 运用知识点：二项式定理

第 $5$ 项的二项式系数为 $\binom{n}{4}$，第 $3$ 项的二项式系数为 $\binom{n}{2}$。

$$\frac{\binom{n}{4}}{\binom{n}{2}} = \frac{14}{3}$$

**第2步：** 化简求解
> 📌 运用知识点：组合数公式

$$\frac{\binom{n}{4}}{\binom{n}{2}} = \frac{\frac{n(n-1)(n-2)(n-3)}{4!}}{\frac{n(n-1)}{2!}} = \frac{(n-2)(n-3)}{4 \times 3} = \frac{(n-2)(n-3)}{12}$$

所以

$$\frac{(n-2)(n-3)}{12} = \frac{14}{3}$$

$$(n-2)(n-3) = 56$$

$$n^2 - 5n + 6 = 56$$

$$n^2 - 5n - 50 = 0$$

$$(n-10)(n+5) = 0$$

解得 $n = 10$（$n = -5$ 舍去）。

**第3步：** 写出通项
> 📌 运用知识点：二项式定理

$\left(\sqrt{x} + \dfrac{2}{x}\right)^{10}$ 的通项为

$$T_{r+1} = \binom{10}{r} (\sqrt{x})^{10-r} \left(\frac{2}{x}\right)^r = \binom{10}{r} \cdot 2^r \cdot x^{\frac{10-r}{2}} \cdot x^{-r} = \binom{10}{r} \cdot 2^r \cdot x^{\frac{10-3r}{2}}$$

**第4步：** 求常数项
> 📌 运用知识点：二项式定理

常数项要求 $x$ 的指数为 $0$：

$$\frac{10 - 3r}{2} = 0 \implies 10 - 3r = 0 \implies r = \frac{10}{3}$$

$r$ 不是整数，所以展开式中**没有常数项**。

**⚠️ 易错提醒：** 化简 $\dfrac{\binom{n}{4}}{\binom{n}{2}}$ 时要仔细约分。另外，最终 $r$ 不是整数意味着常数项不存在——这种情况在考试中也是可能的答案。

**💡 解题思路总结：** 利用二项式系数之比建立方程求 $n$，再写通项求特定项。注意验证 $r$ 是否为非负整数。
