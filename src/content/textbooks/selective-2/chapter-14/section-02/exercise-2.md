---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "课标14.2.2"
---

**题目：** 在等差数列 $\{a_n\}$ 中，已知 $a_3 = 7$，$a_7 = 19$。

(1) 求首项 $a_1$ 和公差 $d$；

(2) 求前 $20$ 项和 $S_{20}$。

---

**解答：**

**第1步：** 利用通项公式列方程组
> 📌 运用知识点：等差数列通项公式

由 $a_n = a_1 + (n-1)d$，得：

$$\begin{cases} a_3 = a_1 + 2d = 7 \quad \cdots (1) \\ a_7 = a_1 + 6d = 19 \quad \cdots (2) \end{cases}$$

**第2步：** 解方程组求 $a_1$ 和 $d$
> 📌 运用知识点：等差数列通项公式

$(2) - (1)$：$4d = 12$，解得 $d = 3$。

代入 $(1)$：$a_1 + 2 \times 3 = 7$，解得 $a_1 = 1$。

**第3步：** 求前 $20$ 项和
> 📌 运用知识点：等差数列前 $n$ 项和

$$S_{20} = 20a_1 + \frac{20 \times 19}{2}d = 20 \times 1 + 190 \times 3 = 20 + 570 = 590$$

**💡 解题思路总结：** 已知等差数列中某两项的值，利用通项公式列方程组是求 $a_1$ 和 $d$ 的基本方法。求出 $a_1$、$d$ 后直接代入求和公式即可。

