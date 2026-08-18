---
type: example
textbook: required-1
chapter: 1
section: 1
number: 3
knowledge_points:
  - set-operations
source: "人教A版2019"
references: "必修第一册 P10 例4"
---

**例题：** 已知全集 $U = \{1, 2, 3, 4, 5, 6, 7, 8\}$，$A = \{1, 2, 3, 5\}$，$B = \{2, 4, 6\}$。

求：(1) $A \cap B$；(2) $A \cup B$；(3) $\complement_U A$；(4) $\complement_U B$；(5) $(\complement_U A) \cap (\complement_U B)$。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集的定义

$A$ 和 $B$ 的公共元素为 $2$。

$$A \cap B = \{2\}$$

**第2步：** 求 $A \cup B$
> 📌 运用知识点：并集的定义

取 $A$ 和 $B$ 的全部元素（不重复）。

$$A \cup B = \{1, 2, 3, 4, 5, 6\}$$

**第3步：** 求 $\complement_U A$ 和 $\complement_U B$
> 📌 运用知识点：补集的定义

$\complement_U A$：$U$ 中不属于 $A$ 的元素。

$$\complement_U A = \{4, 6, 7, 8\}$$

$\complement_U B$：$U$ 中不属于 $B$ 的元素。

$$\complement_U B = \{1, 3, 5, 7, 8\}$$

**第4步：** 求 $(\complement_U A) \cap (\complement_U B)$
> 📌 运用知识点：交集与补集的综合运算

$$(\complement_U A) \cap (\complement_U B) = \{4, 6, 7, 8\} \cap \{1, 3, 5, 7, 8\} = \{7, 8\}$$

**验证（De Morgan 定律）：** $(\complement_U A) \cap (\complement_U B) = \complement_U(A \cup B) = \{7, 8\}$ ✓

**💡 解题思路总结：** 集合的交、并、补运算可以借助 Venn 图辅助理解。De Morgan 定律：$\complement_U(A \cup B) = (\complement_U A) \cap (\complement_U B)$，$\complement_U(A \cap B) = (\complement_U A) \cup (\complement_U B)$，可以用来验证结果。
