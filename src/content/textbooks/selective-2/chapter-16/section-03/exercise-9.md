---
type: exercise
textbook: selective-2
chapter: 16
section: 3
number: 9
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "选择性必修第二册 P74 练习C 第1题"
---

**题目：** 已知 $(1 - 2x)^7 = a_0 + a_1 x + a_2 x^2 + \cdots + a_7 x^7$，求：

(1) $a_0$ 的值。

(2) $a_1 + a_2 + \cdots + a_7$ 的值。

(3) $a_0 + a_2 + a_4 + a_6$ 的值。

---

**解答：**

**第1步：** 求 $a_0$
> 📌 运用知识点：二项式定理（赋值法）

令 $x = 0$：

$$(1 - 0)^7 = a_0 \implies a_0 = 1$$

**第2步：** 求 $a_1 + a_2 + \cdots + a_7$
> 📌 运用知识点：二项式定理（赋值法）

令 $x = 1$：

$$(1 - 2)^7 = a_0 + a_1 + a_2 + \cdots + a_7 = (-1)^7 = -1$$

所以

$$a_1 + a_2 + \cdots + a_7 = -1 - a_0 = -1 - 1 = -2$$

**第3步：** 求 $a_0 + a_2 + a_4 + a_6$
> 📌 运用知识点：二项式定理（赋值法）

令 $x = -1$：

$$(1 + 2)^7 = a_0 - a_1 + a_2 - a_3 + a_4 - a_5 + a_6 - a_7 = 3^7 = 2187$$

将 $x = 1$ 和 $x = -1$ 的结果相加：

$$(a_0 + a_1 + \cdots + a_7) + (a_0 - a_1 + a_2 - \cdots - a_7) = -1 + 2187 = 2186$$

左边 $= 2(a_0 + a_2 + a_4 + a_6)$，所以

$$a_0 + a_2 + a_4 + a_6 = \frac{2186}{2} = 1093$$

**⚠️ 易错提醒：** 赋值法是二项式定理的重要技巧。"偶数项系数和"的求法：令 $x = 1$ 和 $x = -1$ 的结果相加除以 $2$。不要忘记除以 $2$。

**💡 解题思路总结：** 求展开式系数和→赋值法。$x = 0$ 求常数项；$x = 1$ 求全部系数和；$x = -1$ 配合 $x = 1$ 可分离奇偶项系数和。
