---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 14
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - probability-addition-multiplication
  - conditional-probability
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第14题"
---

**题目：** 甲袋中有 $2$ 个红球和 $3$ 个白球，乙袋中有 $4$ 个红球和 $1$ 个白球。从甲袋中随机取 $1$ 个球放入乙袋，再从乙袋中随机取 $1$ 个球。

（1）求从乙袋中取出红球的概率；

（2）已知从乙袋中取出的是红球，求从甲袋中取出的也是红球的概率。

---

**解答：**

**第1步：** 求从乙袋中取出红球的概率
> 📌 运用知识点：全概率公式

设事件 $A$ = "从甲袋取出红球"，事件 $B$ = "从乙袋取出红球"。

$$P(A) = \frac{2}{5}, \quad P(\overline{A}) = \frac{3}{5}$$

从甲取红球放入乙后，乙袋有 $5$ 红 $1$ 白共 $6$ 球；从甲取白球放入乙后，乙袋有 $4$ 红 $2$ 白共 $6$ 球。

$$P(B|A) = \frac{5}{6}, \quad P(B|\overline{A}) = \frac{4}{6} = \frac{2}{3}$$

由全概率公式：

$$P(B) = P(A)P(B|A) + P(\overline{A})P(B|\overline{A}) = \frac{2}{5} \times \frac{5}{6} + \frac{3}{5} \times \frac{4}{6} = \frac{10}{30} + \frac{12}{30} = \frac{22}{30} = \frac{11}{15}$$

**第2步：** 求条件概率
> 📌 运用知识点：贝叶斯公式

$$P(A|B) = \frac{P(A)P(B|A)}{P(B)} = \frac{\frac{2}{5} \times \frac{5}{6}}{\frac{11}{15}} = \frac{\frac{10}{30}}{\frac{11}{15}} = \frac{1}{3} \times \frac{15}{11} = \frac{5}{11}$$

**⚠️ 易错提醒：** 从甲袋取球放入乙袋后，乙袋的组成发生了变化，所以 $P(B|A)$ 和 $P(B|\overline{A})$ 的分母都是 $6$（乙袋变为6个球），而不是原来的 $5$。

**💡 解题思路总结：** 分步操作中的概率问题，先分析每步操作对后续的影响，再用全概率公式和贝叶斯公式求解。关键是正确写出各条件概率。
