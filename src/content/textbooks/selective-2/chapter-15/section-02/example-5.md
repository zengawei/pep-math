---
type: example
textbook: selective-2
chapter: 15
section: 2
number: 5
knowledge_points:
  - derivative-extrema
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P40 例5"
---

**例题：** 已知 $f(x) = ax^3 + bx^2 + cx$ 在 $x = 1$ 处取得极大值 $f(1) = 2$，在 $x = 3$ 处取得极小值，求 $a, b, c$ 的值及极小值。

---

**解答：**

**第1步：** 求导数并利用极值点条件
> 📌 运用知识点：导数与极值

$f'(x) = 3ax^2 + 2bx + c$

$x = 1$ 和 $x = 3$ 是极值点，即 $f'(1) = 0$ 且 $f'(3) = 0$。

由韦达定理：$1 + 3 = -\dfrac{2b}{3a} \implies b = -6a$

$1 \times 3 = \dfrac{c}{3a} \implies c = 9a$

**第2步：** 利用 $f(1) = 2$ 求 $a$
> 📌 运用知识点：导数与极值

$f(1) = a + b + c = a - 6a + 9a = 4a = 2 \implies a = \dfrac{1}{2}$

所以 $b = -6 \times \dfrac{1}{2} = -3$，$c = 9 \times \dfrac{1}{2} = \dfrac{9}{2}$

**第3步：** 求极小值
> 📌 运用知识点：导数与极值

$f(x) = \dfrac{1}{2}x^3 - 3x^2 + \dfrac{9}{2}x$

$f'(x) = \dfrac{3}{2}x^2 - 6x + \dfrac{9}{2} = \dfrac{3}{2}(x^2 - 4x + 3) = \dfrac{3}{2}(x - 1)(x - 3)$

极小值 $f(3) = \dfrac{1}{2}(27) - 3(9) + \dfrac{9}{2}(3) = \dfrac{27}{2} - 27 + \dfrac{27}{2} = 27 - 27 = 0$

**结论：** $a = \dfrac{1}{2}$，$b = -3$，$c = \dfrac{9}{2}$，极小值为 $f(3) = 0$。

**💡 解题思路总结：** 已知两个极值点和一个极值，可以建立三个方程求三个未知数。韦达定理是处理极值点问题的利器——将极值点转化为 $f'(x) = 0$ 的根，利用根与系数的关系简化运算。
