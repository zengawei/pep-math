---
type: exercise
textbook: selective-3
chapter: 17
section: 1
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - probability-addition-multiplication
source: "人教A版2019"
references: "人教A版选择性必修第三册 P12 练习A 第3题"
---

**题目：** 甲袋中有 $3$ 个白球和 $2$ 个红球，乙袋中有 $2$ 个白球和 $3$ 个红球。现从甲、乙两袋中各随机取出 $1$ 个球。

(1) 求取出的 $2$ 个球都是白球的概率。

(2) 求取出的 $2$ 个球颜色相同的概率。

---

**解答：**

**第1步：** 求取出的 $2$ 个球都是白球的概率
> 📌 运用知识点：独立事件的乘法公式

设事件 $A$ = "从甲袋取出白球"，事件 $B$ = "从乙袋取出白球"。由于从两袋中各取一球互不影响，$A$ 与 $B$ 相互独立。

$$P(A) = \frac{3}{5}, \quad P(B) = \frac{2}{5}$$

$$P(AB) = P(A) \cdot P(B) = \frac{3}{5} \times \frac{2}{5} = \frac{6}{25}$$

**第2步：** 求取出的 $2$ 个球颜色相同的概率
> 📌 运用知识点：互斥事件的加法公式

"颜色相同"包含两种互斥情况：①都是白球；②都是红球。

设事件 $C$ = "都是红球"，则：

$$P(C) = P(\overline{A}) \cdot P(\overline{B}) = \frac{2}{5} \times \frac{3}{5} = \frac{6}{25}$$

"颜色相同"的概率：

$$P = P(AB) + P(C) = \frac{6}{25} + \frac{6}{25} = \frac{12}{25}$$

**⚠️ 易错提醒：** 从两个不同的袋中取球是独立事件（互不影响），不是从同一个袋中取球。不要混淆"独立"与"互斥"的概念。

**💡 解题思路总结：** 从不同容器中分别取球，各次取球相互独立，用乘法公式求联合概率。"颜色相同"需分"都白"和"都红"两种互斥情况，再用加法公式合并。
