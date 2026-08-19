---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - derivative-concept
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P32 练习C 第2题"
---

**题目：** 已知 $f(x) = x^3 + ax^2 + bx + 1$，且 $f'(1) = 0$，$f'(2) = 0$，求 $a, b$ 的值。

---

**解答：**

**第1步：** 求导函数
> 📌 运用知识点：导数运算法则

$$f'(x) = 3x^2 + 2ax + b$$

**第2步：** 利用 $f'(1) = 0$ 建立方程
> 📌 运用知识点：导数的概念——导数值条件

$$f'(1) = 3(1)^2 + 2a(1) + b = 0$$

$$3 + 2a + b = 0 \implies 2a + b = -3 \quad \cdots (1)$$

**第3步：** 利用 $f'(2) = 0$ 建立方程
> 📌 运用知识点：导数的概念——导数值条件

$$f'(2) = 3(2)^2 + 2a(2) + b = 0$$

$$12 + 4a + b = 0 \implies 4a + b = -12 \quad \cdots (2)$$

**第4步：** 联立方程组求解
> 📌 运用知识点：导数运算法则

$(2) - (1)$：$2a = -9 \implies a = -\dfrac{9}{2}$

代入 $(1)$：$2 \times \left(-\dfrac{9}{2}\right) + b = -3 \implies -9 + b = -3 \implies b = 6$

**验证：** $f'(x) = 3x^2 - 9x + 6 = 3(x^2 - 3x + 2) = 3(x-1)(x-2)$

$f'(1) = 0$ ✓，$f'(2) = 0$ ✓

$$\boxed{a = -\dfrac{9}{2}, \quad b = 6}$$

**⚠️ 易错提醒：** $f'(1) = 0$ 和 $f'(2) = 0$ 说明 $x = 1$ 和 $x = 2$ 是导函数的两个零点。代入时注意 $f'(x) = 3x^2 + 2ax + b$ 中 $2a$ 是 $x^2$ 项系数的一半乘以 $2$，不要遗漏系数。

**💡 解题思路总结：** 已知导函数在某些点的值，代入即可建立关于参数的方程组。本题本质是利用导数值条件反求原函数中的未知参数，是导数运算的逆向应用。
