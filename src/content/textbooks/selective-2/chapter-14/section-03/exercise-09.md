---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 9
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - sequence-sum-methods
source: "人教A版2019"
references: "选择性必修第二册 P19 练习C 第9题"
---

**题目：** 已知数列 $\{a_n\}$ 的通项公式为 $a_n = \dfrac{1}{(2n-1)(2n+1)}$，求前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 对通项进行裂项分解
> 📌 运用知识点：裂项相消法

将 $a_n = \dfrac{1}{(2n-1)(2n+1)}$ 进行部分分式分解：

$$\dfrac{1}{(2n-1)(2n+1)} = \dfrac{A}{2n-1} + \dfrac{B}{2n+1}$$

通分得 $1 = A(2n+1) + B(2n-1)$。

令 $2n-1 = 0$（即 $n = \dfrac{1}{2}$）：$1 = A \cdot 2 \implies A = \dfrac{1}{2}$。

令 $2n+1 = 0$（即 $n = -\dfrac{1}{2}$）：$1 = B \cdot (-2) \implies B = -\dfrac{1}{2}$。

因此：

$$a_n = \dfrac{1}{2}\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)$$

**第2步：** 逐项展开，利用相消求和
> 📌 运用知识点：裂项相消法

$$S_n = \dfrac{1}{2}\left[\left(\dfrac{1}{1} - \dfrac{1}{3}\right) + \left(\dfrac{1}{3} - \dfrac{1}{5}\right) + \left(\dfrac{1}{5} - \dfrac{1}{7}\right) + \cdots + \left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)\right]$$

中间项逐对抵消，只剩首尾：

$$S_n = \dfrac{1}{2}\left(1 - \dfrac{1}{2n+1}\right)$$

**第3步：** 化简最终结果
> 📌 运用知识点：裂项相消法

$$S_n = \dfrac{1}{2} \cdot \dfrac{2n+1-1}{2n+1} = \dfrac{1}{2} \cdot \dfrac{2n}{2n+1} = \dfrac{n}{2n+1}$$

$$= \boxed{\dfrac{n}{2n+1}}$$

**验证：** 当 $n=1$ 时，$S_1 = \dfrac{1}{3}$，而 $a_1 = \dfrac{1}{1 \times 3} = \dfrac{1}{3}$，正确。当 $n=2$ 时，$S_2 = \dfrac{2}{5}$，而 $a_1 + a_2 = \dfrac{1}{3} + \dfrac{1}{15} = \dfrac{5+1}{15} = \dfrac{6}{15} = \dfrac{2}{5}$，正确。

**⚠️ 易错提醒：** 裂项时注意分母中 $2n-1$ 和 $2n+1$ 的差为 $2$，因此前面的系数是 $\dfrac{1}{2}$，不要忘记提取。相消后不要遗漏外层的 $\dfrac{1}{2}$。

**💡 解题思路总结：** 对于 $a_n = \dfrac{1}{(an+b)(an+b+d)}$ 型通项，裂项公式为 $\dfrac{1}{d}\left(\dfrac{1}{an+b} - \dfrac{1}{an+b+d}\right)$。本题中 $d = 2$，展开后中间项全部抵消，这是**裂项相消法**的典型应用。
