---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 2
difficulty: basic
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "自编"
references: "课标15.1.2"
---

**题目：** 求下列函数的导数：

(1) $f(x) = 3x^4 - 2x^2 + 5x - 1$

(2) $f(x) = \sin x + e^x$

(3) $f(x) = x^2 \ln x$

(4) $f(x) = e^{3x+1}$

---

**解答：**

**第1步：** 求 (1) 的导数
> 📌 运用知识点：导数运算法则——幂函数求导公式、加减法则

$$f'(x) = 3 \cdot 4x^3 - 2 \cdot 2x + 5 - 0 = 12x^3 - 4x + 5$$

**第2步：** 求 (2) 的导数
> 📌 运用知识点：导数运算法则——三角函数和指数函数求导公式、加法法则

$$f'(x) = \cos x + e^x$$

**第3步：** 求 (3) 的导数
> 📌 运用知识点：导数运算法则——乘法法则

设 $u = x^2$，$v = \ln x$，则 $u' = 2x$，$v' = \dfrac{1}{x}$。

$$f'(x) = (x^2)' \cdot \ln x + x^2 \cdot (\ln x)' = 2x \ln x + x^2 \cdot \frac{1}{x} = 2x \ln x + x$$

**第4步：** 求 (4) 的导数
> 📌 运用知识点：导数运算法则——复合函数求导（链式法则）

设 $u = 3x + 1$，则 $f(x) = e^u$。

$$f'(x) = e^{3x+1} \cdot (3x+1)' = 3e^{3x+1}$$

**💡 解题思路总结：** 求导时先判断函数类型：多项式逐项求导；和差分别求导；乘积用乘法法则；复合函数用链式法则"由外到内"逐层求导再相乘。
