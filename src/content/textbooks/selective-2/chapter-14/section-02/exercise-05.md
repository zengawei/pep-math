---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P11 练习A 第2题"
---

**题目：** 在等差数列 $\{a_n\}$ 中，$a_1 = 2$，$d = -1$，求前 $n$ 项和 $S_n$ 的最大值及对应的 $n$ 值。

---

**解答：**

**第1步：** 写出通项公式 $a_n$
> 📌 运用知识点：等差数列通项公式

等差数列的通项公式为：

$$a_n = a_1 + (n-1)d$$

将 $a_1 = 2$，$d = -1$ 代入：

$$a_n = 2 + (n-1) \times (-1) = 2 - n + 1 = 3 - n$$

**第2步：** 确定 $a_n \geq 0$ 的范围
> 📌 运用知识点：等差数列前 $n$ 项和的最值

由于公差 $d = -1 < 0$，数列递减，当 $a_n \geq 0$ 时，$S_n$ 仍在增大；当 $a_n < 0$ 时，$S_n$ 开始减小。因此 $S_n$ 的最大值出现在最后一个非负项处。

令 $a_n \geq 0$：

$$3 - n \geq 0 \implies n \leq 3$$

所以：
- $a_1 = 2 > 0$
- $a_2 = 1 > 0$
- $a_3 = 0$
- $a_4 = -1 < 0$

由于 $a_3 = 0$，加入 $a_3$ 不改变和的值，因此 $S_2 = S_3$，$S_n$ 在 $n = 2$ 或 $n = 3$ 时取最大值。

**第3步：** 计算 $S_n$ 的最大值
> 📌 运用知识点：等差数列前 $n$ 项和公式

$$S_2 = a_1 + a_2 = 2 + 1 = 3$$

$$S_3 = a_1 + a_2 + a_3 = 2 + 1 + 0 = 3$$

**⚠️ 易错提醒：** 当 $a_n = 0$ 时（本题 $a_3 = 0$），$S_n$ 在相邻两个 $n$ 值处同时取最大值，即 $S_2 = S_3$。不要遗漏 $n = 2$ 或 $n = 3$ 中的任何一个。

**💡 解题思路总结：** 对于公差为负的等差数列，求 $S_n$ 最大值的方法是：先求通项公式，再找出使 $a_n \geq 0$ 的最大 $n$ 值，此时 $S_n$ 取最大值。若某项恰好为零，则 $n$ 和 $n-1$ 均对应最大值。

$$\boxed{S_n \text{ 的最大值为 } 3，\text{对应的 } n \text{ 值为 } 2 \text{ 或 } 3}$$
