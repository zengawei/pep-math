---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 2
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - probability-addition-multiplication
source: "人教A版2019"
references: "选择性必修第三册 P35 复习参考题 第2题"
---

**题目：** 甲、乙两人独立地破译一个密码，甲能破译的概率为 $0.6$，乙能破译的概率为 $0.5$。求：

（1）密码能被破译的概率；

（2）恰有一人破译密码的概率。

---

**解答：**

**第1步：** 求密码能被破译的概率
> 📌 运用知识点：独立事件的概率

设事件 $A$ = "甲破译"，事件 $B$ = "乙破译"，则 $P(A) = 0.6$，$P(B) = 0.5$。

密码能被破译即至少有一人破译，用对立事件法：

$$P(\text{被破译}) = 1 - P(\overline{A}) \cdot P(\overline{B}) = 1 - (1 - 0.6)(1 - 0.5) = 1 - 0.4 \times 0.5 = 1 - 0.2 = 0.8$$

**第2步：** 求恰有一人破译的概率
> 📌 运用知识点：互斥事件与独立事件

恰有一人破译包含两种互斥情况：

$$P(\text{恰一人}) = P(A)P(\overline{B}) + P(\overline{A})P(B) = 0.6 \times 0.5 + 0.4 \times 0.5 = 0.3 + 0.2 = 0.5$$

**⚠️ 易错提醒：** "至少一人破译"用对立事件 $1 - P(\overline{A} \cdot \overline{B})$ 计算最简便，不要误用 $P(A) + P(B)$（这会重复计算两人都破译的情况）。

**💡 解题思路总结：** "至少"类问题优先用对立事件法。"恰有"类问题需枚举所有互斥情况，利用独立性分别计算每种情况的概率再相加。
