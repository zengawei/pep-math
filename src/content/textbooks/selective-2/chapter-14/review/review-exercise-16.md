---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P15 复习参考题"
---

**题目：** 已知等差数列 $\{a_n\}$ 中，$a_1 = 25$，公差 $d = -4$。

（1）求前 $n$ 项和 $S_n$ 的最大值，以及取得最大值时 $n$ 的值；

（2）求 $|a_1| + |a_2| + |a_3| + \cdots + |a_n|$ 的表达式。

---

**解答：**

**第1步：** 求 $S_n$ 的表达式并分析最值
> 📌 运用知识点：等差数列前n项和

等差数列前 $n$ 项和公式：

$$S_n = na_1 + \frac{n(n-1)}{2}d = 25n + \frac{n(n-1)}{2} \times (-4) = 25n - 2n^2 + 2n = -2n^2 + 27n$$

将 $S_n$ 视为关于 $n$ 的二次函数：

$$S_n = -2\left(n - \frac{27}{4}\right)^2 + \frac{729}{8}$$

因为 $n$ 为正整数，$\frac{27}{4} = 6.75$，所以当 $n = 7$ 时，$S_n$ 取最大值：

$$S_7 = -2 \times 49 + 27 \times 7 = -98 + 189 = 91$$

**第2步：** 分析 $a_n$ 的正负分界
> 📌 运用知识点：等差数列通项公式

通项公式：$a_n = 25 + (n-1)(-4) = 29 - 4n$

令 $a_n \geqslant 0$，即 $29 - 4n \geqslant 0$，解得 $n \leqslant 7.25$。

所以当 $n \leqslant 7$ 时，$a_n > 0$；当 $n \geqslant 8$ 时，$a_n < 0$。

**第3步：** 求绝对值之和的表达式
> 📌 运用知识点：等差数列前n项和

当 $n \leqslant 7$ 时，所有项非负：

$$|a_1| + |a_2| + \cdots + |a_n| = S_n = -2n^2 + 27n$$

当 $n \geqslant 8$ 时，前7项为正，第8项起为负：

$$|a_1| + |a_2| + \cdots + |a_n| = S_7 + (-1)(S_n - S_7) = 2S_7 - S_n = 182 - (-2n^2 + 27n) = 2n^2 - 27n + 182$$

综上：

$$|a_1| + |a_2| + \cdots + |a_n| = \begin{cases} -2n^2 + 27n, & n \leqslant 7 \\ 2n^2 - 27n + 182, & n \geqslant 8 \end{cases}$$

**⚠️ 易错提醒：** 求 $S_n$ 最值时，不能直接用二次函数顶点公式就结束，必须验证 $n$ 取最近的正整数。另外求绝对值之和时，要注意分界点的判断——令 $a_n = 0$ 求出的 $n$ 不一定是整数，需要取整后判断。

**💡 解题思路总结：** 等差数列前 $n$ 项和的最值问题，核心方法有两种：一是将 $S_n$ 化为关于 $n$ 的二次函数求最值；二是找到正负项的分界点，当所有非负项都取到时和最大。绝对值求和的关键是确定正负分界，分段处理。
