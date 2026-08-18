---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 3
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - arithmetic-sequence-sum
source: "人教A版2019"
references: "课标14.2.3"
---

**题目：** 已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n = 3n^2 - 2n$，求通项公式 $a_n$。

---

**解答：**

**第1步：** 当 $n \geqslant 2$ 时，利用 $a_n = S_n - S_{n-1}$ 求通项
> 📌 运用知识点：等差数列前 $n$ 项和与通项的关系

当 $n \geqslant 2$ 时：

$$a_n = S_n - S_{n-1} = (3n^2 - 2n) - [3(n-1)^2 - 2(n-1)]$$

展开 $(n-1)$ 的部分：

$$3(n-1)^2 - 2(n-1) = 3(n^2 - 2n + 1) - 2n + 2 = 3n^2 - 6n + 3 - 2n + 2 = 3n^2 - 8n + 5$$

因此：

$$a_n = (3n^2 - 2n) - (3n^2 - 8n + 5) = 6n - 5$$

**第2步：** 验证 $n = 1$ 的情形
> 📌 运用知识点：等差数列前 $n$ 项和与通项的关系

当 $n = 1$ 时：

$$a_1 = S_1 = 3 \times 1^2 - 2 \times 1 = 1$$

将 $n = 1$ 代入 $6n - 5$：$6 \times 1 - 5 = 1 = a_1$，与 $S_1$ 一致。

**第3步：** 写出结论

$$a_n = 6n - 5 \quad (n \in \mathbb{N}^*)$$

**💡 解题思路总结：** 由 $S_n$ 求 $a_n$ 时，必须分 $n = 1$ 和 $n \geqslant 2$ 两种情况讨论。若 $n = 1$ 时 $a_1$ 也满足 $n \geqslant 2$ 时的表达式，则可以统一写出通项公式；若不满足，则需分段表示。本题中 $S_n$ 是关于 $n$ 的二次函数且常数项为 $0$，因此 $\{a_n\}$ 是等差数列。

