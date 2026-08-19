---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P73 练习B 第2题"
---

**题目：** 已知 $(1 + 2x)^n$ 展开式中所有项的系数之和为 $729$，求展开式中二项式系数最大的项。

---

**解答：**

**第1步：** 求 $n$ 的值
> 📌 运用知识点：系数之和

所有项的系数之和，令 $x = 1$：

$$(1 + 2 \times 1)^n = 3^n = 729 = 3^6$$

解得 $n = 6$。

**第2步：** 确定二项式系数最大的项
> 📌 运用知识点：二项式系数的性质

$n = 6$ 为偶数，二项式系数 $\binom{6}{k}$ 在 $k = \dfrac{6}{2} = 3$ 时最大。

$$\binom{6}{3} = 20$$

**第3步：** 求该项
> 📌 运用知识点：二项式定理

第 $4$ 项（$r = 3$）：

$$T_4 = \binom{6}{3} (2x)^3 = 20 \times 8x^3 = 160x^3$$

所以二项式系数最大的项为 $T_4 = 160x^3$。

**⚠️ 易错提醒：** "所有项的系数之和"是令 $x = 1$ 代入（包含 $a, b$ 中的系数），而"二项式系数之和"是 $2^n$（只看 $\binom{n}{k}$）。两者不同，不要混淆。

**💡 解题思路总结：** 系数之和→令 $x = 1$ 代入求 $n$。二项式系数最大项→$n$ 偶取中间一项，$n$ 奇取中间两项。
