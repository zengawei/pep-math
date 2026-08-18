---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 3
difficulty: medium
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
source: "自编"
references: "课标17.2.3"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{8}$ | $\dfrac{3}{8}$ | $a$ | $\dfrac{1}{8}$ |

(1) 求 $a$ 的值。

(2) 求 $X$ 的数学期望 $E(X)$。

(3) 若 $Y = 2X + 1$，求 $E(Y)$。

---

**解答：**

**第1步：** 利用归一性求 $a$
> 📌 运用知识点：分布列的性质——所有概率之和为 $1$

$$\frac{1}{8} + \frac{3}{8} + a + \frac{1}{8} = 1$$

$$a + \frac{5}{8} = 1$$

$$a = \frac{3}{8}$$

**第2步：** 求数学期望 $E(X)$
> 📌 运用知识点：离散型随机变量的数学期望公式 $E(X) = \sum x_i p_i$

$$E(X) = 0 \times \frac{1}{8} + 1 \times \frac{3}{8} + 2 \times \frac{3}{8} + 3 \times \frac{1}{8}$$

$$= 0 + \frac{3}{8} + \frac{6}{8} + \frac{3}{8}$$

$$= \frac{12}{8} = \frac{3}{2}$$

**第3步：** 求 $E(Y)$
> 📌 运用知识点：数学期望的线性性质 $E(aX + b) = aE(X) + b$

$$E(Y) = E(2X + 1) = 2E(X) + 1 = 2 \times \frac{3}{2} + 1 = 3 + 1 = 4$$

**结论：** $a = \dfrac{3}{8}$，$E(X) = \dfrac{3}{2}$，$E(Y) = 4$。

**💡 解题思路总结：** 求含参数分布列的期望分三步走：①用归一性求出参数；②代入期望公式 $E(X) = \sum x_i p_i$；③利用期望的线性性质 $E(aX+b) = aE(X)+b$ 求相关随机变量的期望。
