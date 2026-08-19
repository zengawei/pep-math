---
type: exercise
textbook: selective-2
chapter: 14
section: 3
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - geometric-sequence-sum
source: "人教A版2019"
references: "选择性必修第二册 P17 练习A 第5题"
---

**题目：** 在等比数列 $\{a_n\}$ 中，$a_1 = 5$，$q = \dfrac{1}{2}$，求前 $4$ 项和 $S_4$。

---

**解答：**

**第1步：** 确定已知量并选择求和公式
> 📌 运用知识点：等比数列前 $n$ 项和公式

已知 $a_1 = 5$，$q = \dfrac{1}{2}$，$n = 4$。

因为 $q \neq 1$，使用等比数列前 $n$ 项和公式：

$$S_n = \dfrac{a_1(1 - q^n)}{1 - q}$$

**第2步：** 代入数据计算
> 📌 运用知识点：等比数列前 $n$ 项和公式

将 $a_1 = 5$，$q = \dfrac{1}{2}$，$n = 4$ 代入公式：

$$S_4 = \dfrac{5\left[1 - \left(\dfrac{1}{2}\right)^4\right]}{1 - \dfrac{1}{2}}$$

$$= \dfrac{5\left(1 - \dfrac{1}{16}\right)}{\dfrac{1}{2}}$$

$$= \dfrac{5 \times \dfrac{15}{16}}{\dfrac{1}{2}}$$

$$= 5 \times \dfrac{15}{16} \times 2$$

$$= \dfrac{75}{8}$$

$$= \boxed{\dfrac{75}{8}}$$

**⚠️ 易错提醒：** 计算 $q^n$ 时注意 $\left(\dfrac{1}{2}\right)^4 = \dfrac{1}{16}$，不要误算为 $\dfrac{1}{8}$。除以分数时，要乘以它的倒数。

**💡 解题思路总结：** 等比数列求和的关键是判断 $q$ 是否为 $1$：$q = 1$ 时 $S_n = na_1$；$q \neq 1$ 时使用 $S_n = \dfrac{a_1(1-q^n)}{1-q}$。代入时注意分数运算的准确性。
