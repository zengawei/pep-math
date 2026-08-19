---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 18
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

**题目：** 已知等比数列 $\{a_n\}$ 的前 $n$ 项和为 $S_n$，且 $S_3 = 7$，$S_6 = 63$。

（1）求 $\{a_n\}$ 的通项公式；

（2）设 $b_n = \log_2 a_n$，求数列 $\{b_n\}$ 的前 $n$ 项和 $T_n$。

---

**解答：**

**第1步：** 求首项和公比
> 📌 运用知识点：等比数列前n项和

设首项为 $a_1$，公比为 $q$（$q \neq 1$，因为 $S_3 \neq 3a_1$ 可验证）。

$$S_3 = a_1 \cdot \frac{1 - q^3}{1 - q} = 7 \quad \cdots (1)$$

$$S_6 = a_1 \cdot \frac{1 - q^6}{1 - q} = 63 \quad \cdots (2)$$

利用 $\frac{S_6}{S_3} = \frac{1 - q^6}{1 - q^3} = 1 + q^3$：

$$\frac{63}{7} = 1 + q^3 \implies q^3 = 8 \implies q = 2$$

代入 $(1)$：$a_1 \cdot \frac{1 - 8}{1 - 2} = a_1 \times 7 = 7$，所以 $a_1 = 1$。

通项公式：$a_n = 1 \times 2^{n-1} = 2^{n-1}$。

**第2步：** 求 $T_n$
> 📌 运用知识点：等差数列前n项和

$$b_n = \log_2 a_n = \log_2 2^{n-1} = n - 1$$

所以 $\{b_n\}$ 是以 $b_1 = 0$ 为首项、公差为 $1$ 的等差数列。

$$T_n = \sum_{k=1}^{n}(k-1) = 0 + 1 + 2 + \cdots + (n-1) = \frac{n(n-1)}{2}$$

**⚠️ 易错提醒：** 求等比数列时，$\frac{S_6}{S_3} = 1 + q^3$ 这个性质非常重要，它来自 $1 - q^6 = (1 - q^3)(1 + q^3)$。不要直接硬算两个方程联立，利用这个比例关系可以大幅简化计算。另外要注意验证 $q \neq 1$。

**💡 解题思路总结：** 已知 $S_m$ 和 $S_{2m}$ 求等比数列参数时，利用 $\frac{S_{2m}}{S_m} = 1 + q^m$ 是标准技巧。第二问通过取对数将等比转化为等差，体现了等比与等差之间的内在联系。
