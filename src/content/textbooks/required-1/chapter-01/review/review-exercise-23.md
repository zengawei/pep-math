---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 23
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - set-concept
  - set-representation
source: "人教A版2019"
references: "必修第一册 P20 复习B组"
---

**题目：** 设集合 $A = \{a, a + d, a + 2d\}$，$B = \{a, aq, aq^2\}$，其中 $a \neq 0$，$d \neq 0$。若 $A = B$，求 $q$ 的值。

---

**解答：**

**第1步：** 利用集合相等分析
> 📌 运用知识点：集合相等、互异性

$A = B$，且两个集合都含有元素 $a$。

$A$ 的剩余元素 $\{a + d, a + 2d\}$ 与 $B$ 的剩余元素 $\{aq, aq^2\}$ 对应相等。

**第2步：** 分类讨论对应关系

**情况一：** $a + d = aq$ 且 $a + 2d = aq^2$

由第一式：$d = a(q - 1)$。

代入第二式：$a + 2a(q - 1) = aq^2$

$a[1 + 2(q - 1)] = aq^2$

$a(2q - 1) = aq^2$

因为 $a \neq 0$，两边除以 $a$：

$2q - 1 = q^2$

$q^2 - 2q + 1 = 0$

$(q - 1)^2 = 0$，$q = 1$。

但 $q = 1$ 时 $B = \{a, a, a\}$，违反互异性。舍去。

**情况二：** $a + d = aq^2$ 且 $a + 2d = aq$

由第一式：$d = a(q^2 - 1)$。

代入第二式：$a + 2a(q^2 - 1) = aq$

$a[1 + 2q^2 - 2] = aq$

$a(2q^2 - 1) = aq$

$2q^2 - 1 = q$

$2q^2 - q - 1 = 0$

$(2q + 1)(q - 1) = 0$

$q = -\dfrac{1}{2}$ 或 $q = 1$。

$q = 1$ 舍去（同上）。

$q = -\dfrac{1}{2}$ 时验证：

$d = a\left(\dfrac{1}{4} - 1\right) = -\dfrac{3a}{4}$

$A = \left\{a, a - \dfrac{3a}{4}, a - \dfrac{6a}{4}\right\} = \left\{a, \dfrac{a}{4}, -\dfrac{a}{2}\right\}$

$B = \left\{a, -\dfrac{a}{2}, -\dfrac{a}{2} \times \left(-\dfrac{1}{2}\right)\right\} = \left\{a, -\dfrac{a}{2}, \dfrac{a}{4}\right\}$

$A = B$ ✓，且 $d = -\dfrac{3a}{4} \neq 0$ ✓，互异性满足 ✓。

$$q = -\dfrac{1}{2}$$

**⚠️ 易错提醒：** 集合相等时元素的对应关系可能有多种情况，需要分类讨论。每种情况都要验证互异性。

**💡 解题思路总结：** 集合相等 + 等差/等比结构：①去掉公共元素后分类讨论对应关系；②解方程求参数；③代回验证互异性和题设条件。
