---
type: exercise
textbook: required-2
chapter: 10
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - random-event-probability
  - event-independence
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 甲袋中有 $3$ 个白球和 $2$ 个红球，乙袋中有 $2$ 个白球和 $3$ 个红球。从两袋中各取 $1$ 个球。

(1) 求取出的 $2$ 个球都是白球的概率；

(2) 求取出的 $2$ 个球颜色相同的概率。

---

**解答：**

**第1步：** (1) 都是白球
> 📌 运用知识点：事件的相互独立性

从甲取白球概率 $= \frac{3}{5}$，从乙取白球概率 $= \frac{2}{5}$

$P(\text{都白}) = \frac{3}{5} \times \frac{2}{5} = \frac{6}{25}$

**第2步：** (2) 颜色相同
> 📌 运用知识点：事件的相互独立性

"都白"和"都红"互斥。

$P(\text{都红}) = \frac{2}{5} \times \frac{3}{5} = \frac{6}{25}$

$P(\text{颜色相同}) = \frac{6}{25} + \frac{6}{25} = \frac{12}{25}$

**💡 易错提醒：** 从两袋各取一球是独立事件，用乘法；"颜色相同"包含"都白"和"都红"两种互斥情况。

**💡 解题思路总结：** 独立事件乘法 + 互斥事件加法综合。
