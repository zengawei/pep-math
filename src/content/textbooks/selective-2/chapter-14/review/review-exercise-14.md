---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P21 复习参考题"
---

**题目：** 已知等差数列 $\{a_n\}$ 的前 $n$ 项和为 $S_n$，且 $S_4 = 10$，$S_8 = 36$。

（1）求通项公式 $a_n$；

（2）求 $\dfrac{S_n}{n}$ 的最小值。

---

**解答：**

**第1步：** 利用前n项和公式列方程组
> 📌 运用知识点：等差数列前n项和

由 $S_n = na_1 + \dfrac{n(n-1)}{2}d$：

$$S_4 = 4a_1 + 6d = 10 \quad \cdots (1)$$
$$S_8 = 8a_1 + 28d = 36 \quad \cdots (2)$$

$(2) - 2 \times (1)$：

$$8a_1 + 28d - 8a_1 - 12d = 36 - 20 \implies 16d = 16 \implies d = 1$$

代入 $(1)$：$4a_1 + 6 = 10 \implies a_1 = 1$

**第2步：** 写出通项公式
> 📌 运用知识点：等差数列

$$a_n = 1 + (n-1) \times 1 = n$$

**第3步：** 求 $\dfrac{S_n}{n}$ 的最小值
> 📌 运用知识点：等差数列前n项和

$$S_n = n \times 1 + \frac{n(n-1)}{2} \times 1 = n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$$

$$\frac{S_n}{n} = \frac{n+1}{2}$$

因为 $n \in \mathbb{N}^*$，当 $n = 1$ 时，$\dfrac{S_n}{n}$ 取最小值：

$$\frac{S_1}{1} = \frac{1+1}{2} = 1$$

**⚠️ 易错提醒：** $\dfrac{S_n}{n}$ 本身也构成等差数列（首项为 $a_1$，公差为 $\dfrac{d}{2}$）。本题中 $d > 0$，所以 $\dfrac{S_n}{n}$ 单调递增，最小值在 $n=1$ 处取得。

**💡 解题思路总结：** 已知 $S_n$ 的两个值可列方程组求 $a_1$ 和 $d$。$\dfrac{S_n}{n}$ 的单调性取决于 $d$ 的正负，$d > 0$ 时递增，$d < 0$ 时需找最小值点。
