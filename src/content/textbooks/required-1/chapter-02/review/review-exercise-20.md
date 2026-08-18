---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 20
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - quadratic-inequality
source: "人教A版2019"
references: "必修第一册 P53 复习题 第20题"
---

**题目：** 已知不等式 $x^2 - 2kx + k + 6 \geq 0$ 对一切实数 $x$ 恒成立，求 $k$ 的取值范围。

---

**解答：**

**第1步：** 分析恒成立条件
> 📌 运用知识点：一元二次不等式

$x^2 - 2kx + k + 6 \geq 0$ 对一切 $x \in \mathbb{R}$ 恒成立。

因为 $a = 1 > 0$（开口向上），需要 $\Delta \leq 0$。

**第2步：** 计算判别式
> 📌 运用知识点：一元二次方程

$\Delta = (-2k)^2 - 4(k + 6) = 4k^2 - 4k - 24$

要求 $\Delta \leq 0$：

$$4k^2 - 4k - 24 \leq 0$$

$$k^2 - k - 6 \leq 0$$

**第3步：** 求解
> 📌 运用知识点：一元二次不等式

$k^2 - k - 6 = 0$

$(k - 3)(k + 2) = 0$

$k_1 = 3$，$k_2 = -2$

$a = 1 > 0$，$\leq 0$ 取中间：$-2 \leq k \leq 3$。

所以 $k$ 的取值范围为 $[-2, 3]$。

**⚠️ 易错提醒：** "恒成立"且含等号（$\geq 0$），所以 $\Delta \leq 0$（允许 $\Delta = 0$）。不要写成 $\Delta < 0$。

**💡 解题思路总结：** $ax^2 + bx + c \geq 0$ 恒成立（$a > 0$）$\Leftrightarrow$ $\Delta \leq 0$。将条件转化为关于参数的不等式，再求解。
