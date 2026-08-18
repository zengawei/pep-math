---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 17
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 已知 $z = \frac{(1 + i)^2 (2 - i)}{1 + 2i}$，求 $|z|$。

---

**解答：**

**第1步：** 计算 $(1 + i)^2$
> 📌 运用知识点：复数的乘方

$(1 + i)^2 = 2i$

**第2步：** 计算分子
> 📌 运用知识点：复数的乘法

$(1 + i)^2(2 - i) = 2i(2 - i) = 4i - 2i^2 = 4i + 2 = 2 + 4i$

**第3步：** 计算 $z$ 并求模
> 📌 运用知识点：复数的除法与模

$$z = \frac{2 + 4i}{1 + 2i} = \frac{2(1 + 2i)}{1 + 2i} = 2$$

$|z| = 2$

**💡 易错提醒：** 分子 $2 + 4i = 2(1 + 2i)$ 恰好是分母的倍数，可以直接约分。也可以利用 $|z| = \frac{|分子|}{|分母|}$ 直接求模。

**💡 解题思路总结：** 逐步化简复数表达式。也可用模的性质 $|z| = \frac{|1+i|^2 \cdot |2-i|}{|1+2i|} = \frac{2 \times \sqrt{5}}{\sqrt{5}} = 2$。
