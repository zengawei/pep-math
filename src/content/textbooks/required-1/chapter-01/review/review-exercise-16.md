---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-concept
  - set-representation
source: "人教A版2019"
references: "必修第一册 P5 复习"
---

**题目：** 已知集合 $A = \{x \in \mathbb{Z} \mid \dfrac{6}{3 - x} \in \mathbb{N}^*\}$，用列举法表示集合 $A$。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：描述法、自然数集

$\dfrac{6}{3 - x} \in \mathbb{N}^*$，即 $\dfrac{6}{3 - x}$ 是正整数。

所以 $3 - x$ 必须是 $6$ 的正因数。

**第2步：** 找出 $6$ 的正因数
> 📌 运用知识点：列举法

$6$ 的正因数为 $1, 2, 3, 6$。

**第3步：** 逐一求 $x$

$3 - x = 1 \Rightarrow x = 2$

$3 - x = 2 \Rightarrow x = 1$

$3 - x = 3 \Rightarrow x = 0$

$3 - x = 6 \Rightarrow x = -3$

验证：$x = 2, 1, 0, -3$ 都是整数，满足 $x \in \mathbb{Z}$。

$$A = \{-3, 0, 1, 2\}$$

**⚠️ 易错提醒：** $\mathbb{N}^*$ 是正整数集（不含 $0$），所以 $3 - x$ 只能取 $6$ 的正因数，不能取负因数。

**💡 解题思路总结：** 描述法转列举法：先分析条件（$\dfrac{6}{3-x}$ 为正整数 $\Leftrightarrow$ $3-x$ 为 $6$ 的正因数），再逐一求值。
