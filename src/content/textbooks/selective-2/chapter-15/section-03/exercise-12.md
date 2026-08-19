---
type: exercise
textbook: selective-2
chapter: 15
section: 3
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - derivative-applications
  - derivative-max-min
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P52 练习C 第2题"
---

**题目：** 设函数 $f(x) = x e^x - a(x + 1)$，若 $f(x) \geq 0$ 对 $x \in [0, 1]$ 恒成立，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 分析 $x = 0$ 的条件
> 📌 运用知识点：导数的应用——恒成立问题

$f(0) = 0 \cdot e^0 - a(0 + 1) = -a \geq 0 \implies a \leq 0$

**第2步：** 当 $a \leq 0$ 时，证明 $f(x) \geq 0$ 在 $[0, 1]$ 上恒成立
> 📌 运用知识点：导数的应用——恒成立问题

$f'(x) = e^x + xe^x - a = (1 + x)e^x - a$

当 $a \leq 0$ 时，因为 $(1+x)e^x > 0$（$x \in [0,1]$），所以 $f'(x) = (1+x)e^x - a > 0$。

因此 $f(x)$ 在 $[0, 1]$ 上单调递增。

**第3步：** 利用单调性得出结论
> 📌 运用知识点：导数与最值

$f(x)$ 在 $[0, 1]$ 上单调递增，最小值为 $f(0) = -a$。

当 $a \leq 0$ 时，$f(0) = -a \geq 0$，所以 $f(x) \geq f(0) \geq 0$ 在 $[0, 1]$ 上恒成立。

**第4步：** 当 $a > 0$ 时验证不成立
> 📌 运用知识点：导数的应用——恒成立问题

当 $a > 0$ 时，$f(0) = -a < 0$，不满足 $f(x) \geq 0$。

$$\boxed{a \leq 0}$$

**⚠️ 易错提醒：** 先从特殊值 $x = 0$ 入手得到 $a \leq 0$ 的必要条件，再验证充分性。$f'(x) = (xe^x)' - 0 = e^x + xe^x = (1+x)e^x$，不要遗漏乘法法则。当 $a \leq 0$ 时 $-a \geq 0$，所以 $f'(x) > 0$。

**💡 解题思路总结：** 恒成立问题先从端点或特殊值入手缩小参数范围（必要条件），再验证充分性。本题的突破口是 $x = 0$ 时 $f(0) = -a \geq 0$，直接得到 $a \leq 0$。
