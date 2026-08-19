---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 7
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
source: "人教A版2019"
references: "选择性必修第二册 P5 练习B 第7题"
---

**题目：** 已知等差数列 $\{a_n\}$ 中，$a_5 = 11$，$a_8 = 20$，求公差 $d$ 和通项公式 $a_n$。

---

**解答：**

**第1步：** 利用已知条件求公差 $d$
> 📌 运用知识点：等差数列通项公式的变形应用

由等差数列通项公式 $a_n = a_1 + (n-1)d$，可得：

$$a_5 = a_1 + 4d = 11 \quad \cdots (1)$$

$$a_8 = a_1 + 7d = 20 \quad \cdots (2)$$

用 $(2) - (1)$ 消去 $a_1$：

$$a_8 - a_5 = (a_1 + 7d) - (a_1 + 4d) = 3d$$

$$20 - 11 = 3d \implies 3d = 9 \implies d = 3$$

**第2步：** 求首项 $a_1$ 并写出通项公式
> 📌 运用知识点：等差数列通项公式

将 $d = 3$ 代入 $(1)$ 式：

$$a_1 + 4 \times 3 = 11 \implies a_1 + 12 = 11 \implies a_1 = -1$$

因此通项公式为：

$$a_n = a_1 + (n-1)d = -1 + (n-1) \times 3 = -1 + 3n - 3 = 3n - 4$$

验证：$a_5 = 3 \times 5 - 4 = 11$ ✓，$a_8 = 3 \times 8 - 4 = 20$ ✓

$$\boxed{d = 3，a_n = 3n - 4}$$

**⚠️ 易错提醒：** 利用两项之差求公差时，注意 $a_m - a_k = (m-k)d$，即 $a_8 - a_5 = (8-5)d = 3d$，不要误写为 $a_8 - a_5 = 8d - 5d$ 以外的形式。求 $a_1$ 时注意符号运算。

**💡 解题思路总结：** 已知等差数列中两项的值求公差和通项公式，核心方法是列方程组。利用 $a_m - a_k = (m-k)d$ 可直接消去 $a_1$ 求出 $d$，再回代求 $a_1$，最后写出通项公式。
