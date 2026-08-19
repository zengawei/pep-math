---
type: exercise
textbook: selective-2
chapter: 16
section: 1
number: 2
difficulty: medium
category: practice
group: A
is_exam_question: false
knowledge_points:
  - permutation
source: "人教A版2019"
references: "课标16.2.1"
---

**题目：** $5$ 人站成一排，其中甲必须站在中间，有多少种排法？

---

**解答：**

**第1步：** 确定甲的位置
> 📌 运用知识点：排列

$5$ 人站一排，中间位置是第 $3$ 个。甲必须站中间，所以甲的位置已确定，只有 $1$ 种方法。

**第2步：** 排列其余 $4$ 人
> 📌 运用知识点：排列

剩下 $4$ 人站在其余 $4$ 个位置，是全排列：

$$A_4^4 = 4! = 4 \times 3 \times 2 \times 1 = 24 \text{（种）}$$

**💡 解题思路总结：** 有特殊要求的元素优先安排（"特殊元素优先法"）。甲固定后，问题转化为剩余 $4$ 人的全排列。

