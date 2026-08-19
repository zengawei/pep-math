---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 5
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - permutation
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P76 复习参考题"
---

**题目：** 计算排列数 $A_5^3$ 和 $A_7^4$ 的值。

---

**解答：**

**第1步：** 计算 $A_5^3$
> 📌 运用知识点：排列数公式

根据排列数公式 $A_n^m = n(n-1)(n-2)\cdots(n-m+1)$：

$$A_5^3 = 5 \times 4 \times 3 = 60$$

**第2步：** 计算 $A_7^4$
> 📌 运用知识点：排列数公式

$$A_7^4 = 7 \times 6 \times 5 \times 4 = 840$$

所以 $A_5^3 = 60$，$A_7^4 = 840$。

**⚠️ 易错提醒：** 排列数 $A_n^m$ 是从 $n$ 开始连续递减连乘 $m$ 个因数，不要搞错因数个数。例如 $A_5^3$ 是从 $5$ 开始连乘 $3$ 个数：$5 \times 4 \times 3$，而非 $5 \times 4 \times 3 \times 2 \times 1$（那是 $5!$）。

**💡 解题思路总结：** 排列数公式 $A_n^m = \dfrac{n!}{(n-m)!}$ 也可以写成从 $n$ 起连乘 $m$ 个递减整数的形式。计算时注意确认 $n$ 和 $m$ 的值，从 $n$ 开始往下乘 $m$ 个因数即可。
