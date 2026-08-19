---
type: exercise
textbook: selective-2
chapter: 14
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - arithmetic-sequence
  - geometric-sequence
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P19 复习参考题"
---

**题目：** 已知等差数列 $\{a_n\}$ 的公差 $d \neq 0$，且 $a_1, a_3, a_9$ 成等比数列。

（1）求 $\dfrac{a_1}{d}$ 的值；

（2）求 $\dfrac{a_1 + a_3 + a_9}{a_2 + a_4 + a_{10}}$ 的值。

---

**解答：**

**第1步：** 利用等比中项条件建立方程
> 📌 运用知识点：等比数列

$a_1, a_3, a_9$ 成等比数列，则 $a_3^2 = a_1 \cdot a_9$。

用 $a_1$ 和 $d$ 表示：

$$a_3 = a_1 + 2d, \quad a_9 = a_1 + 8d$$

代入等比中项条件：

$$(a_1 + 2d)^2 = a_1(a_1 + 8d)$$

展开：

$$a_1^2 + 4a_1 d + 4d^2 = a_1^2 + 8a_1 d$$

化简：

$$4d^2 = 4a_1 d$$

因为 $d \neq 0$，两边除以 $4d$：

$$d = a_1 \implies \frac{a_1}{d} = 1$$

**第2步：** 求比值
> 📌 运用知识点：等差数列

由 $a_1 = d$，可写出各项：

$$a_1 = d, \quad a_2 = 2d, \quad a_3 = 3d, \quad a_4 = 4d, \quad a_9 = 9d, \quad a_{10} = 10d$$

分子：$a_1 + a_3 + a_9 = d + 3d + 9d = 13d$

分母：$a_2 + a_4 + a_{10} = 2d + 4d + 10d = 16d$

$$\frac{a_1 + a_3 + a_9}{a_2 + a_4 + a_{10}} = \frac{13d}{16d} = \frac{13}{16}$$

**⚠️ 易错提醒：** 由 $4d^2 = 4a_1 d$ 化简时，不能直接约去 $d$ 而不说明 $d \neq 0$。题目已给出 $d \neq 0$ 的条件，但解题过程中要明确写出这个前提。另外，$a_1 = 0$ 时 $a_3 = 0$，等比数列公比不存在，因此 $a_1 = d \neq 0$ 也是隐含条件。

**💡 解题思路总结：** 等差与等比综合题的核心是将所有量用 $a_1$ 和 $d$ 表示，然后利用等比中项条件 $b^2 = ac$ 建立方程。本题条件简洁，最终 $a_1 = d$ 使所有项都是 $d$ 的倍数，比值与 $d$ 无关。
