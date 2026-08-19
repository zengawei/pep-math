---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 29
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - geometric-sequence
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P21 复习参考题"
---

**题目：** 已知等差数列 $\{a_n\}$ 中，$a_3 = 5$，$a_7 = 13$。

（1）求 $\{a_n\}$ 的通项公式；

（2）设 $b_n = \dfrac{1}{a_n \cdot a_{n+1}}$，证明：$b_1 + b_2 + \cdots + b_n < \dfrac{1}{2}$。

---

**解答：**

**第1步：** 求通项公式
> 📌 运用知识点：等差数列

设首项为 $a_1$，公差为 $d$。

$$a_3 = a_1 + 2d = 5 \quad \cdots (1)$$
$$a_7 = a_1 + 6d = 13 \quad \cdots (2)$$

$(2) - (1)$：$4d = 8$，所以 $d = 2$。

代入 $(1)$：$a_1 = 5 - 4 = 1$。

通项公式：$a_n = 1 + (n-1) \times 2 = 2n - 1$。

**第2步：** 对 $b_n$ 进行裂项分解
> 📌 运用知识点：裂项相消法

$$b_n = \frac{1}{a_n \cdot a_{n+1}} = \frac{1}{(2n-1)(2n+1)}$$

因为 $(2n+1) - (2n-1) = 2$，所以：

$$b_n = \frac{1}{2}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)$$

**第3步：** 求和并证明不等式
> 📌 运用知识点：裂项相消法

$$\sum_{k=1}^{n} b_k = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{7}\right) + \cdots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)\right]$$

中间项全部消去：

$$\sum_{k=1}^{n} b_k = \frac{1}{2}\left(1 - \frac{1}{2n+1}\right) = \frac{n}{2n+1}$$

因为 $\dfrac{1}{2n+1} > 0$ 对所有正整数 $n$ 成立，所以：

$$\sum_{k=1}^{n} b_k = \frac{1}{2}\left(1 - \frac{1}{2n+1}\right) < \frac{1}{2}$$

不等式得证。

**⚠️ 易错提醒：** 裂项时系数是 $\frac{1}{2}$（因为两个因式之差为 $2$），不要漏掉。证明不等式时，关键是利用精确和 $\frac{1}{2}\left(1 - \frac{1}{2n+1}\right)$ 直接看出它严格小于 $\frac{1}{2}$，不需要放缩。另外要注意 $b_n > 0$（因为 $a_n = 2n-1 > 0$），所以部分和单调递增，上界为 $\frac{1}{2}$。

**💡 解题思路总结：** 等差数列与不等式证明的综合题，核心路径为：求通项 → 裂项求和 → 利用精确表达式证不等式。裂项相消给出了精确的部分和公式，不等式自然成立。这类"证明 $T_n < C$"的题目，先求精确和再比较是最可靠的方法。
