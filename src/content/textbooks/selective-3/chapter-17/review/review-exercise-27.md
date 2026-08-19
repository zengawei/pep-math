---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 27
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - probability-addition-multiplication
  - conditional-probability
source: "人教A版2019"
references: "选择性必修第三册 P39 复习参考题 第27题"
---

**题目：** 甲、乙、丙三人独立地向同一目标射击，命中率分别为 $0.5$、$0.6$、$0.7$。

（1）求目标被击中的概率；

（2）若目标被击中，求恰有两人命中的概率。

---

**解答：**

**第1步：** 求目标被击中的概率
> 📌 运用知识点：独立事件与对立事件

设事件 $A, B, C$ 分别为甲、乙、丙命中目标。

$$P(\overline{A}) = 0.5, \quad P(\overline{B}) = 0.4, \quad P(\overline{C}) = 0.3$$

目标未被击中即三人都未命中：

$$P(\overline{A} \cdot \overline{B} \cdot \overline{C}) = 0.5 \times 0.4 \times 0.3 = 0.06$$

$$P(\text{被击中}) = 1 - 0.06 = 0.94$$

**第2步：** 求恰有两人命中的概率
> 📌 运用知识点：互斥事件的加法

恰有两人命中有三种互斥情况：

$$P(\text{恰两人}) = P(AB\overline{C}) + P(A\overline{B}C) + P(\overline{A}BC)$$

$$= 0.5 \times 0.6 \times 0.3 + 0.5 \times 0.4 \times 0.7 + 0.5 \times 0.6 \times 0.7$$

$$= 0.09 + 0.14 + 0.21 = 0.44$$

**⚠️ 易错提醒：** "恰有两人命中"要枚举所有三种组合（甲乙中丙不中、甲丙中乙不中、乙丙中甲不中），不要遗漏任何一种。

**💡 解题思路总结：** 多人独立射击问题：至少一人命中用对立事件法，恰有 $k$ 人命中需枚举所有 $\binom{n}{k}$ 种组合，利用独立性分别计算后相加。
