---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 3
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - conditional-probability
source: "人教A版2019"
references: "选择性必修第三册 P35 复习参考题 第3题"
---

**题目：** 一个袋中装有 $5$ 个红球和 $3$ 个白球，从中不放回地依次摸出 $2$ 个球。已知第 $1$ 次摸出的是红球，求第 $2$ 次摸出的也是红球的概率。

---

**解答：**

**第1步：** 确定条件概率的样本空间
> 📌 运用知识点：条件概率

已知第1次摸出红球，此时袋中剩余 $4$ 个红球和 $3$ 个白球，共 $7$ 个球。

**第2步：** 计算条件概率
> 📌 运用知识点：条件概率公式

在第1次摸出红球的条件下，第2次摸出红球的概率为：

$$P = \frac{4}{7}$$

**验证（用条件概率公式）：**

$$P(\text{第1次红}) = \frac{5}{8}$$

$$P(\text{第1次红且第2次红}) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$$

$$P(\text{第2次红} \mid \text{第1次红}) = \frac{P(\text{两次都红})}{P(\text{第1次红})} = \frac{\frac{5}{14}}{\frac{5}{8}} = \frac{5}{14} \times \frac{8}{5} = \frac{4}{7}$$

两种方法结果一致。

**⚠️ 易错提醒：** 不放回抽样中，已知前一次结果后，后续概率的样本空间发生了变化（总数减1，对应颜色减1），不要仍用原来的 $5/8$ 计算。

**💡 解题思路总结：** 条件概率可以直接缩小样本空间来计算（更直观），也可以用公式 $P(B|A) = \frac{P(AB)}{P(A)}$ 计算。不放回抽样问题中，缩小样本空间法通常更简便。
