---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - geometric-sequence
source: "人教A版2019"
references: "选择性必修第二册 P6 练习B 第8题"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_2 = 6$，$a_5 = 162$，求公比 $q$ 和通项公式 $a_n$。

---

**解答：**

**第1步：** 利用已知条件求公比 $q$
> 📌 运用知识点：等比数列通项公式的变形应用

由等比数列通项公式 $a_n = a_1 \cdot q^{n-1}$，可得：

$$a_2 = a_1 \cdot q = 6 \quad \cdots (1)$$

$$a_5 = a_1 \cdot q^4 = 162 \quad \cdots (2)$$

用 $\dfrac{(2)}{(1)}$ 消去 $a_1$：

$$\dfrac{a_5}{a_2} = \dfrac{a_1 \cdot q^4}{a_1 \cdot q} = q^3$$

$$q^3 = \dfrac{162}{6} = 27 \implies q = \sqrt[3]{27} = 3$$

**第2步：** 求首项 $a_1$ 并写出通项公式
> 📌 运用知识点：等比数列通项公式

将 $q = 3$ 代入 $(1)$ 式：

$$a_1 \times 3 = 6 \implies a_1 = 2$$

因此通项公式为：

$$a_n = a_1 \cdot q^{n-1} = 2 \times 3^{n-1}$$

验证：$a_2 = 2 \times 3^1 = 6$ ✓，$a_5 = 2 \times 3^4 = 2 \times 81 = 162$ ✓

$$\boxed{q = 3，a_n = 2 \cdot 3^{n-1}}$$

**⚠️ 易错提醒：** 等比数列中 $\dfrac{a_m}{a_k} = q^{m-k}$，本题 $\dfrac{a_5}{a_2} = q^{5-2} = q^3$，注意指数的计算。另外 $q^3 = 27$ 在实数范围内只有一个解 $q = 3$，不需要考虑负值（因为 $27 > 0$）。

**💡 解题思路总结：** 已知等比数列中两项的值求公比和通项公式，核心方法是两式相除消去 $a_1$，利用 $\dfrac{a_m}{a_k} = q^{m-k}$ 求出 $q$，再回代求 $a_1$。
