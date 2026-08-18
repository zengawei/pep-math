---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-function
source: "人教A版2019"
references: "必修第一册 P53 复习题 第18题"
---

**题目：** 若函数 $f(x) = x^2 - 2mx + m + 2$ 的值恒非负，求 $m$ 的取值范围。

---

**解答：**

**第1步：** 分析条件
> 📌 运用知识点：二次函数

$f(x) \geq 0$ 对一切实数 $x$ 恒成立，即抛物线始终在 $x$ 轴上方或与 $x$ 轴相切。

因为 $a = 1 > 0$（开口向上），需要 $\Delta \leq 0$。

**第2步：** 计算判别式
> 📌 运用知识点：一元二次方程

$\Delta = (-2m)^2 - 4 \times 1 \times (m + 2) = 4m^2 - 4m - 8$

要求 $\Delta \leq 0$：

$$4m^2 - 4m - 8 \leq 0$$

$$m^2 - m - 2 \leq 0$$

**第3步：** 求解
> 📌 运用知识点：一元二次不等式

$m^2 - m - 2 = 0$

$(m - 2)(m + 1) = 0$

$m_1 = 2$，$m_2 = -1$

$a = 1 > 0$，$\leq 0$ 取中间：$-1 \leq m \leq 2$。

所以 $m$ 的取值范围为 $[-1, 2]$。

**⚠️ 易错提醒：** "恒非负"意味着 $f(x) \geq 0$（允许等于 $0$），所以 $\Delta \leq 0$（不是 $\Delta < 0$）。$\Delta = 0$ 时函数恰好有一个零点，但该点函数值为 $0$，仍满足"非负"。

**💡 解题思路总结：** $f(x) \geq 0$ 恒成立的条件（$a > 0$）：$\Delta \leq 0$。$f(x) > 0$ 恒成立的条件（$a > 0$）：$\Delta < 0$。
