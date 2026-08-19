---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - probability-addition-multiplication
source: "人教A版2019"
references: "人教A版选择性必修第三册 P13 练习A 第4题"
---

**题目：** 甲、乙、丙三人独立地破译一份密码。甲、乙、丙各自独立破译出密码的概率分别为 $\dfrac{1}{3}$、$\dfrac{1}{4}$、$\dfrac{1}{5}$。

(1) 求三人都破译出密码的概率。

(2) 求密码被破译（至少有一人破译出）的概率。

---

**解答：**

**第1步：** 求三人都破译出密码的概率
> 📌 运用知识点：独立事件的乘法公式

设事件 $A, B, C$ 分别为"甲、乙、丙破译出密码"。三人独立破译，$A, B, C$ 相互独立。

$$P(ABC) = P(A) \cdot P(B) \cdot P(C) = \frac{1}{3} \times \frac{1}{4} \times \frac{1}{5} = \frac{1}{60}$$

**第2步：** 求至少有一人破译出密码的概率
> 📌 运用知识点：对立事件

"至少有一人破译"的对立事件是"三人都未破译"。

$$P(\overline{A}) = 1 - \frac{1}{3} = \frac{2}{3}, \quad P(\overline{B}) = 1 - \frac{1}{4} = \frac{3}{4}, \quad P(\overline{C}) = 1 - \frac{1}{5} = \frac{4}{5}$$

三人都未破译的概率（独立性）：

$$P(\overline{A} \cdot \overline{B} \cdot \overline{C}) = \frac{2}{3} \times \frac{3}{4} \times \frac{4}{5} = \frac{24}{60} = \frac{2}{5}$$

至少有一人破译的概率：

$$P = 1 - P(\overline{A} \cdot \overline{B} \cdot \overline{C}) = 1 - \frac{2}{5} = \frac{3}{5}$$

**⚠️ 易错提醒：** "至少有一个"类问题一定要用对立事件法 $1 - P(\text{都不})$，不要直接分类讨论，否则容易遗漏或重复。

**💡 解题思路总结：** 多人独立完成任务的问题，"都完成"用乘法公式，"至少一个完成"用对立事件 $1 - P(\text{都不完成})$。独立性保证各事件概率可以直接相乘。
