---
type: exercise
textbook: selective-2
chapter: 14
section: 1
number: 9
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - sequence-concept
source: "人教A版2019"
references: "选择性必修第二册 P7 练习C 第9题"
---

**题目：** 已知数列 $\{a_n\}$ 满足 $a_1 = 1$，$a_{n+1} = \dfrac{1}{1 + a_n}$（$n \in \mathbb{N}^*$）。

(1) 求 $a_2, a_3, a_4$ 的值；

(2) 证明：对任意 $n \in \mathbb{N}^*$，都有 $a_n > 0$。

---

**解答：**

**第1步：** 利用递推公式逐项求值
> 📌 运用知识点：递推公式

已知 $a_1 = 1$，递推关系为 $a_{n+1} = \dfrac{1}{1 + a_n}$。

当 $n = 1$ 时：

$$a_2 = \dfrac{1}{1 + a_1} = \dfrac{1}{1 + 1} = \dfrac{1}{2}$$

当 $n = 2$ 时：

$$a_3 = \dfrac{1}{1 + a_2} = \dfrac{1}{1 + \dfrac{1}{2}} = \dfrac{1}{\dfrac{3}{2}} = \dfrac{2}{3}$$

当 $n = 3$ 时：

$$a_4 = \dfrac{1}{1 + a_3} = \dfrac{1}{1 + \dfrac{2}{3}} = \dfrac{1}{\dfrac{5}{3}} = \dfrac{3}{5}$$

**第2步：** 用数学归纳法证明 $a_n > 0$
> 📌 运用知识点：数学归纳法在数列中的应用

**证明：**（数学归纳法）

**（i）基础步骤：** 当 $n = 1$ 时，$a_1 = 1 > 0$，命题成立。

**（ii）归纳步骤：** 假设当 $n = k$（$k \in \mathbb{N}^*$）时命题成立，即 $a_k > 0$。

则当 $n = k + 1$ 时：

$$a_{k+1} = \dfrac{1}{1 + a_k}$$

由于 $a_k > 0$（归纳假设），所以 $1 + a_k > 1 > 0$，从而：

$$a_{k+1} = \dfrac{1}{1 + a_k} > 0$$

即当 $n = k + 1$ 时命题也成立。

由（i）（ii）可知，对任意 $n \in \mathbb{N}^*$，都有 $a_n > 0$。$\blacksquare$

$$\boxed{a_2 = \dfrac{1}{2}，a_3 = \dfrac{2}{3}，a_4 = \dfrac{3}{5}}$$

**⚠️ 易错提醒：** 计算 $a_3$ 和 $a_4$ 时涉及分数嵌套运算，注意 $\dfrac{1}{1 + \frac{1}{2}} = \dfrac{1}{\frac{3}{2}} = \dfrac{2}{3}$，不要将分母的加法与分数运算搞混。数学归纳法证明时，归纳假设的使用要明确写出：由 $a_k > 0$ 推出 $1 + a_k > 0$，从而 $a_{k+1} > 0$。

**💡 解题思路总结：** 分式递推数列的求值关键是逐步代入，注意分数运算的准确性。证明数列各项恒正时，数学归纳法是标准方法：先验证初始值，再利用递推关系和归纳假设完成递推。
