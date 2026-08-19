---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P20 复习参考题"
---

**题目：** 求数列 $1 \times 2, 2 \times 3, 3 \times 4, \cdots, n(n+1), \cdots$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 写出通项公式并展开
> 📌 运用知识点：数列求和

数列的通项公式为 $a_n = n(n+1) = n^2 + n$。

因此前 $n$ 项和为：

$$S_n = \sum_{k=1}^{n} k(k+1) = \sum_{k=1}^{n} (k^2 + k) = \sum_{k=1}^{n} k^2 + \sum_{k=1}^{n} k$$

**第2步：** 利用求和公式计算
> 📌 运用知识点：数列求和

利用公式 $\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ 和 $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$：

$$S_n = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$$

$$= \frac{n(n+1)}{6} \left[(2n+1) + 3\right] = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}$$

**⚠️ 易错提醒：** 将通项拆分为 $n^2 + n$ 后分组求和，注意提取公因式 $\frac{n(n+1)}{6}$ 时的化简过程，不要算错。

**💡 解题思路总结：** 当通项为多项式形式时，可将各项拆分后利用已知求和公式（如 $\sum k^2$、$\sum k$）分组求和。
