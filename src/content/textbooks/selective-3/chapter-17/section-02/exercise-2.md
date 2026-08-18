---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - distribution-table
source: "自编"
references: "课标17.2.2"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $-1$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{6}$ | $a$ | $\dfrac{1}{3}$ | $2a$ |

(1) 求 $a$ 的值。

(2) 求 $P(X \geqslant 1)$。

---

**解答：**

**第1步：** 利用归一性求 $a$
> 📌 运用知识点：分布列的性质——所有概率之和为 $1$

由分布列的性质，所有概率之和等于 $1$：

$$\frac{1}{6} + a + \frac{1}{3} + 2a = 1$$

合并同类项：

$$3a + \frac{1}{6} + \frac{1}{3} = 1$$

$$3a + \frac{1}{6} + \frac{2}{6} = 1$$

$$3a + \frac{3}{6} = 1$$

$$3a + \frac{1}{2} = 1$$

$$3a = \frac{1}{2}$$

$$a = \frac{1}{6}$$

**第2步：** 验证非负性
> 📌 运用知识点：分布列的性质——概率非负

$a = \dfrac{1}{6} > 0$，$2a = \dfrac{1}{3} > 0$，所有概率均为正数，满足非负性。$\checkmark$

**第3步：** 求 $P(X \geqslant 1)$
> 📌 运用知识点：概率的加法法则

$$P(X \geqslant 1) = P(X = 1) + P(X = 2) = \frac{1}{3} + 2 \times \frac{1}{6} = \frac{1}{3} + \frac{1}{3} = \frac{2}{3}$$

**结论：** $a = \dfrac{1}{6}$，$P(X \geqslant 1) = \dfrac{2}{3}$。

**💡 解题思路总结：** 已知分布列含未知参数时，利用分布列的归一性（$\sum p_i = 1$）列方程求解。求出参数后别忘了验证非负性。
