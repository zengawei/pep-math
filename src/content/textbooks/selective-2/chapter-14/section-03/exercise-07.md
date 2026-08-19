---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P18 练习B 第7题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \dfrac{1}{n(n+1)}$，求前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 对通项进行裂项分解
> 📌 运用知识点：裂项相消法

将 $a_n = \dfrac{1}{n(n+1)}$ 进行部分分式分解：

$$\dfrac{1}{n(n+1)} = \dfrac{A}{n} + \dfrac{B}{n+1}$$

通分得 $1 = A(n+1) + Bn$。

令 $n = 0$：$A = 1$；令 $n = -1$：$B = -1$。

因此：

$$a_n = \dfrac{1}{n} - \dfrac{1}{n+1}$$

**第2步：** 逐项展开，利用相消求和
> 📌 运用知识点：裂项相消法

$$S_n = \left(\dfrac{1}{1} - \dfrac{1}{2}\right) + \left(\dfrac{1}{2} - \dfrac{1}{3}\right) + \left(\dfrac{1}{3} - \dfrac{1}{4}\right) + \cdots + \left(\dfrac{1}{n} - \dfrac{1}{n+1}\right)$$

观察发现，从第二项起，每一项的 $\dfrac{1}{k}$ 都与前一项的 $-\dfrac{1}{k}$ 抵消，最终只剩下首尾两项：

$$S_n = 1 - \dfrac{1}{n+1} = \dfrac{n+1-1}{n+1} = \dfrac{n}{n+1}$$

$$= \boxed{\dfrac{n}{n+1}}$$

**⚠️ 易错提醒：** 裂项时要验证分解的正确性：$\dfrac{1}{n} - \dfrac{1}{n+1} = \dfrac{(n+1)-n}{n(n+1)} = \dfrac{1}{n(n+1)}$，确认无误。相消时不要漏掉首项或末项的残留部分。

**💡 解题思路总结：** 当通项为 $\dfrac{1}{f(n) \cdot f(n+1)}$ 的形式时，考虑**裂项相消法**：将通项分解为 $\dfrac{1}{f(n)} - \dfrac{1}{f(n+1)}$，展开后中间项逐对抵消，最终只剩首尾少数几项。这是处理分式型通项求和的核心方法。
