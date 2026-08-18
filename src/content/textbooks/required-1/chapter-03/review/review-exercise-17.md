---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知 $f(x) = ax^3 + bx + 2$，且 $f(-3) = -5$，求 $f(3)$ 的值。

---

**解答：**

**第1步：** 构造奇函数
> 📌 运用知识点：函数奇偶性

令 $g(x) = f(x) - 2 = ax^3 + bx$

$g(-x) = a(-x)^3 + b(-x) = -ax^3 - bx = -(ax^3 + bx) = -g(x)$

所以 $g(x)$ 为奇函数。

**第2步：** 利用奇函数性质
> 📌 运用知识点：奇偶性的应用

$g(-3) = f(-3) - 2 = -5 - 2 = -7$

因为 $g(x)$ 为奇函数：$g(3) = -g(-3) = -(-7) = 7$

**第3步：** 求 $f(3)$
> 📌 运用知识点：函数的概念

$f(3) = g(3) + 2 = 7 + 2 = 9$

**⚠️ 易错提醒：** 关键是发现 $f(x) - 2 = ax^3 + bx$ 是奇函数。不要试图直接求 $a, b$ 的值（条件不足）。

**💡 解题思路总结：** 当函数可以分解为"奇函数 + 常数"的形式时，利用奇函数的对称性可以在不知道具体参数的情况下求出函数值。
