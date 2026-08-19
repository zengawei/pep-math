---
type: exercise
textbook: selective-2
chapter: 15
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - derivative-extrema
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P55 复习参考题"
---

**题目：** 已知函数 $f(x) = x^3 - 3ax^2 + 3bx$ 的极大值为 $f(1) = 2$，极小值为 $f(x_0)$，求 $a$，$b$ 的值及极小值。

---

**解答：**

**第1步：** 利用极值条件建立方程
> 📌 运用知识点：极值点处导数为零

对 $f(x)$ 求导：

$$f'(x) = 3x^2 - 6ax + 3b = 3(x^2 - 2ax + b)$$

因为 $x = 1$ 是极大值点，所以 $f'(1) = 0$：

$$1 - 2a + b = 0 \implies b = 2a - 1 \quad \cdots (1)$$

又 $f(1) = 2$：

$$1 - 3a + 3b = 2 \implies 3b - 3a = 1 \quad \cdots (2)$$

**第2步：** 解方程组
> 📌 运用知识点：代数运算

将 $(1)$ 代入 $(2)$：

$$3(2a - 1) - 3a = 1 \implies 6a - 3 - 3a = 1 \implies 3a = 4 \implies a = \frac{4}{3}$$

代入 $(1)$：$b = 2 \times \frac{4}{3} - 1 = \frac{5}{3}$

**第3步：** 求极小值并验证
> 📌 运用知识点：极值的判定与计算

当 $a = \frac{4}{3}$，$b = \frac{5}{3}$ 时：

$$f'(x) = 3\left(x^2 - \frac{8}{3}x + \frac{5}{3}\right) = 3(x - 1)\left(x - \frac{5}{3}\right)$$

- 当 $x < 1$ 时，$f'(x) > 0$；
- 当 $1 < x < \frac{5}{3}$ 时，$f'(x) < 0$；
- 当 $x > \frac{5}{3}$ 时，$f'(x) > 0$。

$x = 1$ 处导数由正变负，是极大值点 ✓；$x = \frac{5}{3}$ 处导数由负变正，是极小值点。

极小值为：

$$f\left(\frac{5}{3}\right) = \left(\frac{5}{3}\right)^3 - 3 \times \frac{4}{3} \times \left(\frac{5}{3}\right)^2 + 3 \times \frac{5}{3} \times \frac{5}{3} = \frac{125}{27} - \frac{300}{27} + \frac{225}{27} = \frac{50}{27}$$

所以 $a = \frac{4}{3}$，$b = \frac{5}{3}$，极小值为 $\frac{50}{27}$。

**⚠️ 易错提醒：** ①求出参数后忘记验证 $x=1$ 确实是极大值点（导数由正变负）；②计算 $f\left(\frac{5}{3}\right)$ 时容易在分数运算中出错，建议通分后统一计算。

**💡 解题思路总结：** 已知极值点和极值求参数，利用 $f'(x_0) = 0$ 和 $f(x_0) = y_0$ 列方程组。求出参数后，将 $f'(x)$ 因式分解，通过列表分析导数符号变化来确定所有极值点，最后代入求极小值。
