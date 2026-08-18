---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 11
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P15 复习"
---

**题目：** 已知全集 $U = \{1, 2, 3, 4, 5, 6, 7\}$，$A = \{1, 3, 5, 7\}$，$B = \{2, 3, 5\}$。

求：(1) $A \cap B$；(2) $A \cup B$；(3) $\complement_U(A \cap B)$；(4) $(\complement_U A) \cup (\complement_U B)$。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集

$$A \cap B = \{3, 5\}$$

**第2步：** 求 $A \cup B$
> 📌 运用知识点：并集

$$A \cup B = \{1, 2, 3, 5, 7\}$$

**第3步：** 求 $\complement_U(A \cap B)$
> 📌 运用知识点：补集

$U$ 中不属于 $\{3, 5\}$ 的元素：

$$\complement_U(A \cap B) = \{1, 2, 4, 6, 7\}$$

**第4步：** 求 $(\complement_U A) \cup (\complement_U B)$
> 📌 运用知识点：De Morgan 定律

$\complement_U A = \{2, 4, 6\}$，$\complement_U B = \{1, 4, 6, 7\}$。

$$(\complement_U A) \cup (\complement_U B) = \{1, 2, 4, 6, 7\}$$

**验证：** $(\complement_U A) \cup (\complement_U B) = \complement_U(A \cap B) = \{1, 2, 4, 6, 7\}$ ✓（De Morgan 定律）

**⚠️ 易错提醒：** 补集运算要相对于全集 $U$，不能遗漏或多加元素。

**💡 解题思路总结：** 集合运算按步骤进行，先算括号内再算括号外。De Morgan 定律可用来验证。
