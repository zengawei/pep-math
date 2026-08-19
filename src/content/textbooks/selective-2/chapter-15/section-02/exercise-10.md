---
type: exercise
textbook: selective-2
chapter: 15
section: 2
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-extrema
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P40 练习B 第4题"
---

**题目：** 已知函数 $f(x) = x^3 + ax^2 + bx + c$ 在 $x = 1$ 处取极大值，在 $x = 3$ 处取极小值，求 $a, b$ 的值。

---

**解答：**

**第1步：** 求导数
> 📌 运用知识点：导数与极值

$f'(x) = 3x^2 + 2ax + b$

**第2步：** 利用极值点条件列方程
> 📌 运用知识点：导数与极值

$x = 1$ 和 $x = 3$ 是极值点，即 $f'(1) = 0$ 且 $f'(3) = 0$。

也就是说 $x = 1$ 和 $x = 3$ 是方程 $3x^2 + 2ax + b = 0$ 的两个根。

**第3步：** 利用韦达定理求解
> 📌 运用知识点：导数与极值

由韦达定理：

$$x_1 + x_2 = 1 + 3 = -\frac{2a}{3} \implies 4 = -\frac{2a}{3} \implies a = -6$$

$$x_1 \cdot x_2 = 1 \times 3 = \frac{b}{3} \implies 3 = \frac{b}{3} \implies b = 9$$

**第4步：** 验证
> 📌 运用知识点：导数与极值

$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$

在 $x = 1$ 处：$f'(x)$ 由正变负 → 极大值 ✓

在 $x = 3$ 处：$f'(x)$ 由负变正 → 极小值 ✓

$$\boxed{a = -6, \quad b = 9}$$

**⚠️ 易错提醒：** 极值点就是 $f'(x) = 0$ 的根，但 $f'(x_0) = 0$ 不一定是极值点（还需验证符号变化）。韦达定理中注意系数：$3x^2 + 2ax + b = 0$ 的两根之和为 $-\frac{2a}{3}$，两根之积为 $\frac{b}{3}$。

**💡 解题思路总结：** 已知极值点求参数，核心是将极值点转化为 $f'(x) = 0$ 的根，利用韦达定理或直接代入建立方程组。最后一定要验证符号变化方向是否符合题意。
