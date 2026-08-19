---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 1
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-theorem
source: "人教A版2019"
references: "课标16.3.1"
---

**题目：**

(1) 展开 $(1+x)^6$，并求第 $4$ 项。

(2) 求 $(x+2)^5$ 展开式中 $x^3$ 的系数。

---

**解答：**

**第1步：** 展开 $(1+x)^6$，求第 $4$ 项
> 📌 运用知识点：二项式定理

由二项式定理，$(1+x)^6$ 的通项为

$$T_{r+1} = \binom{6}{r} \cdot 1^{6-r} \cdot x^r = \binom{6}{r} x^r$$

第 $4$ 项即 $r = 3$：

$$T_4 = \binom{6}{3} x^3 = 20x^3$$

**第2步：** 求 $(x+2)^5$ 展开式中 $x^3$ 的系数
> 📌 运用知识点：二项式定理

由二项式定理，$(x+2)^5$ 的通项为

$$T_{r+1} = \binom{5}{r} x^{5-r} \cdot 2^r$$

要求 $x^3$ 的系数，令 $5 - r = 3$，解得 $r = 2$。

$$T_3 = \binom{5}{2} x^3 \cdot 2^2 = 10 \times 4 \times x^3 = 40x^3$$

所以 $x^3$ 的系数为 $\mathbf{40}$。

**💡 解题思路总结：** 二项式定理的核心工具是通项公式 $T_{r+1} = \binom{n}{r}a^{n-r}b^r$。求特定项时，先写出通项，再根据要求（某次幂、某项）确定 $r$ 的值，代入计算即可。

