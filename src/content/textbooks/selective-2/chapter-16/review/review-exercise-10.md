---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 10
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - binomial-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P82 复习参考题"
---

**题目：** 在 $(1+x)^{10}$ 的展开式中，哪一项的二项式系数最大？最大的二项式系数是多少？

---

**解答：**

**第1步：** 确定二项式系数的最大值位置
> 📌 运用知识点：二项式系数性质

$(1+x)^{10}$ 的展开式中，第 $r+1$ 项的二项式系数为 $C_{10}^r$。

因为 $n = 10$ 为偶数，根据二项式系数的性质，当 $r = \dfrac{n}{2} = 5$ 时，二项式系数最大。

**第2步：** 计算最大的二项式系数
> 📌 运用知识点：二项式系数性质

$$C_{10}^5 = \frac{10 \times 9 \times 8 \times 7 \times 6}{5 \times 4 \times 3 \times 2 \times 1} = \frac{30240}{120} = 252$$

所以第6项（$r=5$）的二项式系数最大，最大的二项式系数为 $252$。

**⚠️ 易错提醒：** 注意区分"二项式系数"和"项的系数"。二项式系数专指 $C_n^r$，只与 $n$ 和 $r$ 有关；而"项的系数"还包括 $a$ 和 $b$ 的幂次带来的系数。本题问的是二项式系数，不需要考虑 $x$ 的幂次。

**💡 解题思路总结：** 二项式系数 $C_n^r$ 的最大值规律：当 $n$ 为偶数时，中间一项 $r = \dfrac{n}{2}$ 的二项式系数最大；当 $n$ 为奇数时，中间两项 $r = \dfrac{n-1}{2}$ 和 $r = \dfrac{n+1}{2}$ 的二项式系数相等且最大。
