---
type: exercise
textbook: required-1
chapter: 3
section: 2
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P70 练习"
---

**题目：** 判断下列函数的奇偶性：

(1) $f(x) = x^4 - 2x^2 + 1$；

(2) $f(x) = x^3 + x^2$。

---

**解答：**

**第1步：** 判断 (1) 的奇偶性
> 📌 运用知识点：函数奇偶性的定义

定义域为 $\mathbb{R}$，关于原点对称。✓

$f(-x) = (-x)^4 - 2(-x)^2 + 1 = x^4 - 2x^2 + 1 = f(x)$

因为 $f(-x) = f(x)$，所以 $f(x) = x^4 - 2x^2 + 1$ 为**偶函数**。

**第2步：** 判断 (2) 的奇偶性
> 📌 运用知识点：函数奇偶性的定义

定义域为 $\mathbb{R}$，关于原点对称。✓

$f(-x) = (-x)^3 + (-x)^2 = -x^3 + x^2$

$f(-x) \neq f(x)$（不是偶函数）

$f(-x) \neq -f(x)$（因为 $-f(x) = -x^3 - x^2 \neq -x^3 + x^2$，不是奇函数）

所以 $f(x) = x^3 + x^2$ **既不是奇函数也不是偶函数**。

**⚠️ 易错提醒：** 判断奇偶性必须先检查定义域是否关于原点对称。对于(2)，不能因为含有 $x^3$（奇次项）就判断为奇函数，需要整体检验。

**💡 解题思路总结：** 判断奇偶性的步骤：①检查定义域是否关于原点对称（不对称则非奇非偶）；②计算 $f(-x)$；③比较 $f(-x)$ 与 $f(x)$、$-f(x)$ 的关系。
