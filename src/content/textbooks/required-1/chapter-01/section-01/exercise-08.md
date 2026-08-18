---
type: exercise
textbook: required-1
chapter: 1
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P11 练习2"
---

**题目：** 已知全集 $U = \mathbb{R}$，集合 $A = \{x \mid x < -1\}$，$B = \{x \mid x \geqslant 2\}$。

求：(1) $A \cap B$；(2) $A \cup B$；(3) $\complement_U(A \cup B)$。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集的定义

$A = \{x \mid x < -1\}$，$B = \{x \mid x \geqslant 2\}$。

$A$ 中的元素都小于 $-1$，$B$ 中的元素都大于等于 $2$，没有公共元素。

$$A \cap B = \varnothing$$

**第2步：** 求 $A \cup B$
> 📌 运用知识点：并集的定义

$$A \cup B = \{x \mid x < -1 \text{ 或 } x \geqslant 2\}$$

**第3步：** 求 $\complement_U(A \cup B)$
> 📌 运用知识点：补集的定义

$\complement_U(A \cup B)$ 是全集 $\mathbb{R}$ 中不属于 $A \cup B$ 的元素组成的集合。

不属于 $A \cup B$ 即不满足 "$x < -1$ 或 $x \geqslant 2$"，也就是 $-1 \leqslant x < 2$。

$$\complement_U(A \cup B) = \{x \mid -1 \leqslant x < 2\}$$

**⚠️ 易错提醒：** 求补集时注意端点的开闭：$x < -1$ 的否定是 $x \geqslant -1$，$x \geqslant 2$ 的否定是 $x < 2$，端点符号要取反。

**💡 解题思路总结：** 对于不等式型集合的运算，可以借助数轴直观分析。补集就是对全集取"反面"，注意端点开闭的变化。
