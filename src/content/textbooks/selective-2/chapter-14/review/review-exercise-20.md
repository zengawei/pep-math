---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P17 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \dfrac{1}{n(n+1)}$，求数列 $\{a_n\}$ 的前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 对通项进行裂项分解
> 📌 运用知识点：裂项相消法

将 $a_n$ 分解为部分分式：

$$a_n = \frac{1}{n(n+1)} = \frac{A}{n} + \frac{B}{n+1}$$

通分得 $1 = A(n+1) + Bn$。令 $n = 0$ 得 $A = 1$；令 $n = -1$ 得 $B = -1$。

所以：

$$a_n = \frac{1}{n} - \frac{1}{n+1}$$

**第2步：** 逐项展开并相消求和
> 📌 运用知识点：裂项相消法

$$S_n = \sum_{k=1}^{n} a_k = \sum_{k=1}^{n}\left(\frac{1}{k} - \frac{1}{k+1}\right)$$

展开各项：

$$S_n = \left(\frac{1}{1} - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$

中间项依次相消，仅剩首尾两项：

$$S_n = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

**⚠️ 易错提醒：** 裂项相消法的关键是正确拆分部分分式，拆分后务必验证：$\frac{1}{n} - \frac{1}{n+1} = \frac{n+1-n}{n(n+1)} = \frac{1}{n(n+1)}$。展开时不要跳步，确认中间项确实全部消去，只剩第一项的正部和最后一项的负部。

**💡 解题思路总结：** 裂项相消法适用于通项为 $\frac{1}{f(n) \cdot f(n+1)}$ 形式的数列求和。核心思想是将每一项拆成两项之差，使求和时中间项逐对消去。这是数列求和中最常用的技巧之一。
