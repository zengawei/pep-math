---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
  - arithmetic-sequence
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P20 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 满足 $a_1 = 2$，$a_{n+1} = \dfrac{a_n}{a_n + 1}$（$n \geqslant 1$）。

（1）求数列 $\{a_n\}$ 的通项公式；

（2）求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 取倒数转化递推关系
> 📌 运用知识点：递推数列求通项

对 $a_{n+1} = \dfrac{a_n}{a_n + 1}$ 两边取倒数：

$$\frac{1}{a_{n+1}} = \frac{a_n + 1}{a_n} = 1 + \frac{1}{a_n}$$

设 $b_n = \dfrac{1}{a_n}$，则：

$$b_{n+1} = b_n + 1$$

即 $\{b_n\}$ 是公差为 $1$ 的等差数列。

$$b_1 = \frac{1}{a_1} = \frac{1}{2}$$

$$b_n = \frac{1}{2} + (n-1) \cdot 1 = n - \frac{1}{2} = \frac{2n - 1}{2}$$

因此：

$$a_n = \frac{1}{b_n} = \frac{2}{2n - 1}$$

**第2步：** 用裂项法求 $S_n$
> 📌 运用知识点：裂项相消法

$$a_n = \frac{2}{2n-1}$$

直接裂项：注意到

$$\frac{2}{2n-1} \text{ 本身不能直接裂项为相邻项之差}$$

但我们可以直接写出前 $n$ 项和：

$$S_n = \frac{2}{1} + \frac{2}{3} + \frac{2}{5} + \cdots + \frac{2}{2n-1} = 2\sum_{k=1}^{n}\frac{1}{2k-1}$$

这个和没有简单的封闭形式，但可以表示为：

$$S_n = 2\left(1 + \frac{1}{3} + \frac{1}{5} + \cdots + \frac{1}{2n-1}\right)$$

利用调和级数的性质，可以写成：

$$S_n = 2\left(H_{2n} - \frac{1}{2}H_n\right)$$

其中 $H_n = 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}$。

更直接地，保留求和形式：

$$S_n = 2\sum_{k=1}^{n}\frac{1}{2k-1}$$

**验证：** $a_1 = \frac{2}{1} = 2$ ✓；$a_2 = \frac{2}{2 \cdot 2 - 1} = \frac{2}{3}$，而 $\frac{a_1}{a_1 + 1} = \frac{2}{3}$ ✓。

$S_1 = 2$，$S_2 = 2 + \frac{2}{3} = \frac{8}{3}$。

**⚠️ 易错提醒：** 取倒数是处理 $a_{n+1} = \frac{a_n}{a_n + c}$ 型递推的标准方法。容易犯的错误是忘记验证 $a_n \neq 0$（本题 $a_1 = 2 > 0$，递推保持正值，所以取倒数合法）。另外，$\sum \frac{1}{2k-1}$ 没有像裂项那样的简洁封闭形式，不要强行裂项。

**💡 解题思路总结：** 分式递推 $a_{n+1} = \frac{a_n}{a_n + c}$ 型，取倒数后化为等差数列是标准套路。本题的通项 $a_n = \frac{2}{2n-1}$ 求和时，由于各项为奇数倒数，不存在简洁的封闭形式，保留求和符号即可。考试中此类题通常第一问求通项是重点。
