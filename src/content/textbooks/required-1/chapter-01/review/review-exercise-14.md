---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - set-concept
source: "人教A版2019"
references: "必修第一册 P7 复习"
---

**题目：** 已知集合 $A = \{1, 2, a^2 - a\}$，若 $2 \in A$，求实数 $a$ 的值。

---

**解答：**

**第1步：** 分析 $2 \in A$ 的含义
> 📌 运用知识点：元素与集合的关系、互异性

$2 \in A$，而 $A = \{1, 2, a^2 - a\}$。

因为 $2$ 已经在 $A$ 中列出，所以 $a^2 - a$ 不能等于已有的元素（互异性），即 $a^2 - a \neq 1$ 且 $a^2 - a \neq 2$。

但 $2 \in A$ 已经满足（$2$ 是 $A$ 的元素之一），所以只需确保 $a^2 - a$ 不使集合出现重复元素。

**第2步：** 排除 $a^2 - a$ 等于已有元素的情况
> 📌 运用知识点：互异性

**$a^2 - a = 1$：** $a^2 - a - 1 = 0$，$a = \dfrac{1 \pm \sqrt{5}}{2}$。

此时 $A = \{1, 2, 1\}$，元素 $1$ 重复，违反互异性。所以 $a \neq \dfrac{1 \pm \sqrt{5}}{2}$。

**$a^2 - a = 2$：** $a^2 - a - 2 = 0$，$(a - 2)(a + 1) = 0$，$a = 2$ 或 $a = -1$。

此时 $A = \{1, 2, 2\}$，元素 $2$ 重复，违反互异性。所以 $a \neq 2$ 且 $a \neq -1$。

**第3步：** 确定结果

$a$ 的取值范围为除以上值外的所有实数：

$$a \in \mathbb{R} \text{ 且 } a \neq \dfrac{1 + \sqrt{5}}{2},\ a \neq \dfrac{1 - \sqrt{5}}{2},\ a \neq 2,\ a \neq -1$$

**⚠️ 易错提醒：** 题目说 $2 \in A$ 已经成立（$2$ 已在集合中），关键是利用互异性排除使第三个元素与前两个重复的 $a$ 值。

**💡 解题思路总结：** 已知元素属于集合时，先确认元素对应哪个位置，再利用互异性排除不合法的值。
