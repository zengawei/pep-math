---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 3
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - binomial-theorem
source: "人教A版2019"
references: "选择性必修第二册 P72 练习A 第3题"
---

**题目：**

(1) 求 $\left(2x - \dfrac{1}{x}\right)^6$ 展开式中的第 $4$ 项。

(2) 求 $(1 + 2x)^7$ 展开式中 $x^2$ 的系数。

---

**解答：**

**第1步：** 求第 $4$ 项
> 📌 运用知识点：二项式定理

$\left(2x - \dfrac{1}{x}\right)^6$ 的通项为

$$T_{r+1} = \binom{6}{r} (2x)^{6-r} \left(-\frac{1}{x}\right)^r = \binom{6}{r} \cdot 2^{6-r} \cdot (-1)^r \cdot x^{6-r} \cdot x^{-r} = \binom{6}{r} \cdot 2^{6-r} \cdot (-1)^r \cdot x^{6-2r}$$

第 $4$ 项即 $r = 3$：

$$T_4 = \binom{6}{3} \cdot 2^3 \cdot (-1)^3 \cdot x^{6-6} = 20 \times 8 \times (-1) \times x^0 = -160$$

**第2步：** 求 $x^2$ 的系数
> 📌 运用知识点：二项式定理

$(1 + 2x)^7$ 的通项为

$$T_{r+1} = \binom{7}{r} \cdot 1^{7-r} \cdot (2x)^r = \binom{7}{r} \cdot 2^r \cdot x^r$$

要求 $x^2$ 的系数，令 $r = 2$：

$$T_3 = \binom{7}{2} \cdot 2^2 \cdot x^2 = 21 \times 4 \times x^2 = 84x^2$$

所以 $x^2$ 的系数为 $\mathbf{84}$。

**⚠️ 易错提醒：** 第(1)题中 $(-1)^r$ 不要遗漏——负号的幂次取决于 $r$。$r = 3$ 时 $(-1)^3 = -1$，结果为负。

**💡 解题思路总结：** 通项公式 $T_{r+1} = \binom{n}{r}a^{n-r}b^r$ 是二项式定理的核心工具。注意将 $a, b$ 的系数和符号都纳入计算。
