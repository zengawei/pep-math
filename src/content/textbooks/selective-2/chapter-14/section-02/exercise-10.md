---
type: exercise
textbook: selective-2
chapter: 14
section: 2
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P13 练习C 第2题"
---

**题目：** 已知等比数列 $\{a_n\}$ 中，$a_1 + a_2 + a_3 = 7$，$a_1 \cdot a_2 \cdot a_3 = 8$，求公比 $q$ 和前 $n$ 项和 $S_n$。

---

**解答：**

**第1步：** 利用等比数列性质求 $a_2$
> 📌 运用知识点：等比数列的性质

在等比数列中，$a_1 \cdot a_3 = a_2^2$（因为 $a_1 = \dfrac{a_2}{q}$，$a_3 = a_2 q$，所以 $a_1 \cdot a_3 = \dfrac{a_2}{q} \cdot a_2 q = a_2^2$）。

因此：

$$a_1 \cdot a_2 \cdot a_3 = a_2^2 \cdot a_2 = a_2^3 = 8$$

$$a_2 = 2$$

**第2步：** 求 $a_1$ 和 $a_3$
> 📌 运用知识点：等比数列的通项关系

由 $a_2 = 2$，代入 $a_1 + a_2 + a_3 = 7$：

$$a_1 + 2 + a_3 = 7 \implies a_1 + a_3 = 5$$

又 $a_1 \cdot a_3 = a_2^2 = 4$。

因此 $a_1$ 和 $a_3$ 是方程 $t^2 - 5t + 4 = 0$ 的两个根。

解方程：

$$(t - 1)(t - 4) = 0 \implies t = 1 \text{ 或 } t = 4$$

**情况一：** $a_1 = 1$，$a_3 = 4$

$$q = \dfrac{a_2}{a_1} = \dfrac{2}{1} = 2$$

**情况二：** $a_1 = 4$，$a_3 = 1$

$$q = \dfrac{a_2}{a_1} = \dfrac{2}{4} = \dfrac{1}{2}$$

**第3步：** 分别求前 $n$ 项和 $S_n$
> 📌 运用知识点：等比数列前 $n$ 项和公式

**情况一：** $a_1 = 1$，$q = 2$

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q} = \dfrac{1 \times (1 - 2^n)}{1 - 2} = \dfrac{1 - 2^n}{-1} = 2^n - 1$$

**情况二：** $a_1 = 4$，$q = \dfrac{1}{2}$

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q} = \dfrac{4\left(1 - \left(\dfrac{1}{2}\right)^n\right)}{1 - \dfrac{1}{2}} = \dfrac{4\left(1 - \dfrac{1}{2^n}\right)}{\dfrac{1}{2}} = 8\left(1 - \dfrac{1}{2^n}\right) = 8 - 2^{3-n}$$

**⚠️ 易错提醒：** 本题有两组解，不要遗漏。$a_1$ 和 $a_3$ 是方程的两个根，需要分别讨论两种情况。另外，利用 $a_1 \cdot a_3 = a_2^2$ 是等比数列的重要性质，要熟练掌握。

**💡 解题思路总结：** 等比数列中涉及三项之和与三项之积时，核心技巧是利用 $a_1 \cdot a_3 = a_2^2$ 先求出中间项 $a_2$，再将 $a_1$、$a_3$ 转化为韦达定理的根与系数关系求解。注意分类讨论，不要遗漏解。

$$\boxed{q = 2, \; S_n = 2^n - 1 \quad \text{或} \quad q = \dfrac{1}{2}, \; S_n = 8 - 2^{3-n}}$$
