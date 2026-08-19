---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 4
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - conditional-probability
  - probability-addition-multiplication
source: "人教A版2019"
references: "选择性必修第三册 P35 复习参考题 第4题"
---

**题目：** 掷两颗骰子，已知第一颗骰子的点数为 $3$，求两颗骰子点数之和大于 $8$ 的概率。

---

**解答：**

**第1步：** 确定条件事件
> 📌 运用知识点：条件概率

已知第一颗骰子点数为 $3$，要使点数之和大于 $8$，即第二颗骰子点数 $y$ 满足 $3 + y > 8$，即 $y > 5$。

**第2步：** 计算概率
> 📌 运用知识点：古典概型

$y$ 的可能取值为 $1, 2, 3, 4, 5, 6$（等可能），满足 $y > 5$ 的只有 $y = 6$。

$$P = \frac{1}{6}$$

**⚠️ 易错提醒：** 条件概率中，样本空间已缩小为"第一颗为3"的6种情况，不是在全部36种情况中计算。不要混淆条件概率与无条件概率。

**💡 解题思路总结：** 已知某个条件后，直接在缩小的样本空间中分析满足要求的事件数，这是计算条件概率最直观的方法。
