---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 9
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P19 复习参考题"
---

**题目：** 在等比数列 $\{a_n\}$ 中，$a_3 = 12$，$a_6 = 96$，求首项 $a_1$ 和公比 $q$。

---

**解答：**

**第1步：** 利用等比数列通项公式建立方程组
> 📌 运用知识点：等比数列

由通项公式 $a_n = a_1 \cdot q^{n-1}$：

$$a_3 = a_1 \cdot q^2 = 12 \quad \cdots (1)$$
$$a_6 = a_1 \cdot q^5 = 96 \quad \cdots (2)$$

**第2步：** 求公比和首项
> 📌 运用知识点：等比数列

$(2) \div (1)$：

$$\frac{a_1 \cdot q^5}{a_1 \cdot q^2} = \frac{96}{12} \implies q^3 = 8 \implies q = 2$$

将 $q = 2$ 代入 $(1)$：

$$a_1 \times 4 = 12 \implies a_1 = 3$$

因此，$a_1 = 3$，$q = 2$。

**⚠️ 易错提醒：** 两式相除时，等比数列中 $a_1 \neq 0$，$q \neq 0$，所以可以安全地做除法。另外 $q^3 = 8$ 在实数范围内只有唯一解 $q = 2$。

**💡 解题思路总结：** 已知等比数列中两项的值，利用通项公式列方程组，两式相除消去 $a_1$ 可先求 $q$，再回代求 $a_1$。
