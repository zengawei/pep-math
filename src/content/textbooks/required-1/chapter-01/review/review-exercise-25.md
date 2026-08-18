---
type: exercise
textbook: required-1
chapter: 1
section: 0
number: 25
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - set-concept
  - set-representation
  - set-operations
source: "人教A版2019"
references: "必修第一册 P21 复习B组"
---

**题目：** 设集合 $A = \{(x, y) \mid y = x^2, x \in \mathbb{R}\}$，$B = \{(x, y) \mid y = x + 2, x \in \mathbb{R}\}$。

(1) 求 $A \cap B$；

(2) 说明 $A \cap B$ 中元素的几何意义。

---

**解答：**

**第1步：** 求 $A \cap B$
> 📌 运用知识点：交集

$A \cap B$ 中的元素 $(x, y)$ 同时满足 $y = x^2$ 和 $y = x + 2$。

联立方程：$x^2 = x + 2$

$x^2 - x - 2 = 0$

$(x - 2)(x + 1) = 0$

$x = 2$ 或 $x = -1$。

$x = 2$ 时，$y = 4$；$x = -1$ 时，$y = 1$。

$$A \cap B = \{(-1, 1), (2, 4)\}$$

**第2步：** 几何意义
> 📌 运用知识点：集合的几何解释

集合 $A$ 表示抛物线 $y = x^2$ 上所有点的集合。

集合 $B$ 表示直线 $y = x + 2$ 上所有点的集合。

$A \cap B$ 表示抛物线与直线的交点，即 $(-1, 1)$ 和 $(2, 4)$。

**验证：**

点 $(-1, 1)$：$(-1)^2 = 1$ ✓，$-1 + 2 = 1$ ✓

点 $(2, 4)$：$2^2 = 4$ ✓，$2 + 2 = 4$ ✓

**⚠️ 易错提醒：** 这里的集合元素是有序数对 $(x, y)$，不是单个数。求交集就是求联立方程组的解。

**💡 解题思路总结：** 点集（有序数对的集合）的交集对应几何图形的交点。将集合语言转化为方程（组）是解题的关键。
