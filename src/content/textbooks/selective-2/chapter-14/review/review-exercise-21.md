---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 21
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P17 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \dfrac{1}{(2n-1)(2n+1)}$，求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 对通项进行裂项分解
> 📌 运用知识点：裂项相消法

设：

$$\frac{1}{(2n-1)(2n+1)} = \frac{A}{2n-1} + \frac{B}{2n+1}$$

通分得 $1 = A(2n+1) + B(2n-1)$。

令 $2n - 1 = 0$ 即 $n = \frac{1}{2}$：$1 = A \times 2$，所以 $A = \frac{1}{2}$。

令 $2n + 1 = 0$ 即 $n = -\frac{1}{2}$：$1 = B \times (-2)$，所以 $B = -\frac{1}{2}$。

因此：

$$a_n = \frac{1}{2}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)$$

**第2步：** 展开求和并化简
> 📌 运用知识点：裂项相消法

$$S_n = \frac{1}{2}\sum_{k=1}^{n}\left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$$

展开：

$$S_n = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{7}\right) + \cdots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)\right]$$

中间项全部消去：

$$S_n = \frac{1}{2}\left(1 - \frac{1}{2n+1}\right) = \frac{1}{2} \cdot \frac{2n}{2n+1} = \frac{n}{2n+1}$$

**⚠️ 易错提醒：** 分母是 $(2n-1)(2n+1)$ 时，裂项系数是 $\frac{1}{2}$（因为两个因式之差为2），不要漏掉这个系数。验证：$\frac{1}{2}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right) = \frac{1}{2} \cdot \frac{2}{(2n-1)(2n+1)} = \frac{1}{(2n-1)(2n+1)}$ ✓

**💡 解题思路总结：** 对于 $a_n = \frac{1}{(an+b)(an+b+d)}$ 型的裂项，一般公式为 $\frac{1}{d}\left(\frac{1}{an+b} - \frac{1}{an+b+d}\right)$，其中 $d$ 是两个因式的差。掌握这个规律可以快速写出裂项结果。
