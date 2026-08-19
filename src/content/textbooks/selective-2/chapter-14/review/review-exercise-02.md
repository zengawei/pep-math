---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 2
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P15 复习参考题"
---

**题目：** 已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n = n^2 + 2n$，求数列的通项公式 $a_n$。

---

**解答：**

**第1步：** 利用 $S_n$ 与 $a_n$ 的关系求通项
> 📌 运用知识点：数列概念

当 $n \geqslant 2$ 时：

$$a_n = S_n - S_{n-1} = (n^2 + 2n) - [(n-1)^2 + 2(n-1)]$$

$$= n^2 + 2n - (n^2 - 2n + 1 + 2n - 2) = n^2 + 2n - n^2 + 1 = 2n + 1$$

**第2步：** 验证 $n = 1$ 的情况
> 📌 运用知识点：数列概念

当 $n = 1$ 时：

$$a_1 = S_1 = 1^2 + 2 \times 1 = 3$$

将 $n = 1$ 代入 $2n + 1 = 3$，与 $a_1 = 3$ 一致。

因此，数列的通项公式为：

$$a_n = 2n + 1 \quad (n \in \mathbb{N}^*)$$

**⚠️ 易错提醒：** 由 $S_n$ 求 $a_n$ 时，必须分 $n = 1$ 和 $n \geqslant 2$ 两种情况讨论，最后验证 $n = 1$ 时 $a_1 = S_1$ 是否与通项公式一致。若不一致，需分段表示。

**💡 解题思路总结：** 已知 $S_n$ 求通项公式的标准方法：$a_n = S_n - S_{n-1}$（$n \geqslant 2$），再单独计算 $a_1 = S_1$ 并验证能否统一。
