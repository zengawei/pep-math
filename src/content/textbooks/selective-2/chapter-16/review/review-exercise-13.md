---
type: exercise
textbook: selective-2
chapter: 16
section: 0
number: 13
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - binomial-theorem
  - binomial-properties
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P85 复习参考题"
---

**题目：** 已知 $(1-2x)^7 = a_0 + a_1 x + a_2 x^2 + \cdots + a_7 x^7$，求：

（1）$a_0$ 的值；

（2）$a_1 + a_2 + \cdots + a_7$ 的值。

---

**解答：**

**第1步：** 求 $a_0$ 的值
> 📌 运用知识点：二项式定理

令 $x = 0$，代入等式左边：

$$(1 - 2 \times 0)^7 = 1^7 = 1$$

代入等式右边：

$$a_0 + a_1 \cdot 0 + a_2 \cdot 0^2 + \cdots + a_7 \cdot 0^7 = a_0$$

所以 $a_0 = 1$。

**第2步：** 求 $a_1 + a_2 + \cdots + a_7$ 的值
> 📌 运用知识点：二项式系数性质

令 $x = 1$，代入等式：

$$(1 - 2 \times 1)^7 = (1-2)^7 = (-1)^7 = -1$$

右边为：

$$a_0 + a_1 + a_2 + \cdots + a_7 = -1$$

由第1步知 $a_0 = 1$，所以：

$$a_1 + a_2 + \cdots + a_7 = -1 - a_0 = -1 - 1 = -2$$

**⚠️ 易错提醒：** "赋值法"是求二项式展开各项系数之和的核心方法。令 $x=0$ 求常数项 $a_0$，令 $x=1$ 求所有系数之和。注意 $a_1 + a_2 + \cdots + a_7$ 不包含 $a_0$，需要减去 $a_0$。另外，本题中 $a_0 = C_7^0 \cdot 1^7 \cdot (-2x)^0\big|_{x=0} = 1$，不要将二项式系数与项的系数混淆。

**💡 解题思路总结：** 对于 $(a+bx)^n$ 的展开式求系数问题，常用"赋值法"：
- 令 $x = 0$：得常数项 $a_0$；
- 令 $x = 1$：得所有系数之和 $a_0 + a_1 + \cdots + a_n$；
- 令 $x = -1$：得交错系数之和 $a_0 - a_1 + a_2 - \cdots$。

根据题目需要灵活选取赋值，是解决此类问题的关键技巧。
