---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 6
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P11 复习"
---

**题目：** 已知全集 $U = \{1, 2, 3, 4, 5, 6\}$，$A = \{1, 3, 5\}$，求 $\complement_U A$ 和 $A \cup (\complement_U A)$。

---

**解答：**

**第1步：** 求 $\complement_U A$
> 📌 运用知识点：补集的定义

$\complement_U A$ 是 $U$ 中不属于 $A$ 的元素组成的集合。

$U$ 中不属于 $A = \{1, 3, 5\}$ 的元素为 $2, 4, 6$。

$$\complement_U A = \{2, 4, 6\}$$

**第2步：** 求 $A \cup (\complement_U A)$
> 📌 运用知识点：并集与补集的关系

$$A \cup (\complement_U A) = \{1, 3, 5\} \cup \{2, 4, 6\} = \{1, 2, 3, 4, 5, 6\} = U$$

这验证了性质：$A \cup (\complement_U A) = U$。

**⚠️ 易错提醒：** 补集一定相对于全集而言，要写清楚 $\complement_U A$ 中的 $U$。

**💡 解题思路总结：** 补集的基本性质：$A \cup (\complement_U A) = U$，$A \cap (\complement_U A) = \varnothing$。
