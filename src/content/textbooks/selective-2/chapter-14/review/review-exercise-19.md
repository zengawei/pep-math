---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P16 复习参考题"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_1 + a_3 = 10$，$a_4 + a_6 = \frac{5}{4}$。

（1）求公比 $q$ 和通项公式 $a_n$；

（2）求前 $n$ 项和 $S_n$，并判断是否存在正整数 $n$ 使得 $S_n > 16$。

---

**解答：**

**第1步：** 利用等比数列性质求公比
> 📌 运用知识点：等比数列

注意到 $a_4 + a_6 = a_1 q^3 + a_3 q^3 = q^3(a_1 + a_3)$，因此：

$$q^3 = \frac{a_4 + a_6}{a_1 + a_3} = \frac{\frac{5}{4}}{10} = \frac{1}{8}$$

所以 $q = \frac{1}{2}$。

由 $a_1 + a_3 = a_1 + a_1 q^2 = a_1(1 + q^2) = a_1\left(1 + \frac{1}{4}\right) = \frac{5}{4}a_1 = 10$

解得 $a_1 = 8$。

通项公式：$a_n = 8 \times \left(\frac{1}{2}\right)^{n-1} = 2^{3} \times 2^{-(n-1)} = 2^{4-n}$。

**第2步：** 求 $S_n$ 并判断
> 📌 运用知识点：等比数列前n项和

$$S_n = \frac{a_1(1 - q^n)}{1 - q} = \frac{8\left(1 - \left(\frac{1}{2}\right)^n\right)}{1 - \frac{1}{2}} = 16\left(1 - \frac{1}{2^n}\right) = 16 - \frac{16}{2^n}$$

因为 $\frac{16}{2^n} > 0$ 对所有正整数 $n$ 成立，所以 $S_n < 16$ 恒成立。

因此不存在正整数 $n$ 使得 $S_n > 16$。

事实上，$\lim_{n \to \infty} S_n = 16$，即 $S_n$ 单调递增趋向于 $16$。

**⚠️ 易错提醒：** 看到 $a_4 + a_6$ 与 $a_1 + a_3$ 的关系时，关键是发现下标差为3，从而提取公因子 $q^3$。不要急于设两个未知数联立方程。另外，判断 $S_n > 16$ 时，要注意 $S_n = 16 - \frac{16}{2^n}$ 的表达式直接说明 $S_n$ 恒小于 $16$。

**💡 解题思路总结：** 等比数列中，若两组项的下标差相同（如 $a_4, a_6$ 与 $a_1, a_3$ 的下标差都是2），则它们的和之比等于 $q$ 的下标差次幂。这是等比数列的核心性质之一。无穷递缩等比级数的和 $S = \frac{a_1}{1-q}$ 给出了上界。
