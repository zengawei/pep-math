---
type: exercise
textbook: required-2
chapter: 7
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 若 $(1 + i)^n$ 是实数，求正整数 $n$ 的最小值。

---

**解答：**

**第1步：** 计算 $(1 + i)$ 的幂
> 📌 运用知识点：复数的乘方

$(1 + i)^2 = 1 + 2i + i^2 = 2i$（虚数）

$(1 + i)^4 = ((1+i)^2)^2 = (2i)^2 = -4$（实数）

**第2步：** 验证更小的值
> 📌 运用知识点：逐一验证

$n = 1$：$(1+i)^1 = 1 + i$（虚数）

$n = 2$：$(1+i)^2 = 2i$（虚数）

$n = 3$：$(1+i)^3 = (1+i)^2(1+i) = 2i(1+i) = -2 + 2i$（虚数）

$n = 4$：$(1+i)^4 = -4$（实数）✓

所以正整数 $n$ 的最小值为 $4$。

**💡 易错提醒：** $(1+i)^2 = 2i$ 是常用结论。$(1+i)^4 = -4$ 也是常用结论。

**💡 解题思路总结：** 逐一计算 $(1+i)$ 的各次幂，找到第一个实数结果。
