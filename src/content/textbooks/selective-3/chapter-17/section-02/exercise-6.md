---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P23 练习A 第3题"
---

**题目：** 已知离散型随机变量 $X$ 的分布列为：

| $X$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{10}$ | $\dfrac{3}{10}$ | $a$ | $\dfrac{1}{5}$ |

(1) 求 $a$ 的值。

(2) 求 $P(X \leqslant 2)$。

---

**解答：**

**第1步：** 利用归一性求 $a$
> 📌 运用知识点：分布列的性质——所有概率之和为 $1$

$$\frac{1}{10} + \frac{3}{10} + a + \frac{1}{5} = 1$$

$$a + \frac{1}{10} + \frac{3}{10} + \frac{2}{10} = 1$$

$$a + \frac{6}{10} = 1$$

$$a = \frac{4}{10} = \frac{2}{5}$$

**第2步：** 求 $P(X \leqslant 2)$
> 📌 运用知识点：概率的加法法则

$$P(X \leqslant 2) = P(X = 1) + P(X = 2) = \frac{1}{10} + \frac{3}{10} = \frac{4}{10} = \frac{2}{5}$$

**⚠️ 易错提醒：** 求 $a$ 后应验证 $a > 0$（非负性）。本题 $a = \frac{2}{5} > 0$，满足要求。

**💡 解题思路总结：** 分布列含未知参数时，利用归一性 $\sum p_i = 1$ 列方程求解。求 $P(X \leqslant k)$ 时将对应概率逐项相加即可。
