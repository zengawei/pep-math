---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 8
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P7 复习"
---

**题目：** 写出集合 $\{a, b, c\}$ 的所有子集和真子集。

---

**解答：**

**第1步：** 列出所有子集
> 📌 运用知识点：子集的概念

集合 $\{a, b, c\}$ 有 $2^3 = 8$ 个子集：

含 $0$ 个元素：$\varnothing$

含 $1$ 个元素：$\{a\}$，$\{b\}$，$\{c\}$

含 $2$ 个元素：$\{a, b\}$，$\{a, c\}$，$\{b, c\}$

含 $3$ 个元素：$\{a, b, c\}$

**第2步：** 列出所有真子集
> 📌 运用知识点：真子集的概念

真子集是除了集合本身以外的子集，共 $2^3 - 1 = 7$ 个：

$$\varnothing,\ \{a\},\ \{b\},\ \{c\},\ \{a, b\},\ \{a, c\},\ \{b, c\}$$

**⚠️ 易错提醒：** 空集 $\varnothing$ 是任何集合的子集，也是任何非空集合的真子集。不要遗漏。

**💡 解题思路总结：** $n$ 个元素的集合有 $2^n$ 个子集，$2^n - 1$ 个真子集。按元素个数分类列举，不重不漏。
