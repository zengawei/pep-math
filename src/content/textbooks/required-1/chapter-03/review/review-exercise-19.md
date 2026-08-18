---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知幂函数 $f(x) = (m^2 - 5m + 7) \cdot x^{m - 2}$ 是偶函数，求 $m$ 的值。

---

**解答：**

**第1步：** 利用幂函数定义
> 📌 运用知识点：幂函数的概念

幂函数的系数必须为 $1$：

$m^2 - 5m + 7 = 1$

$m^2 - 5m + 6 = 0$

$(m - 2)(m - 3) = 0$

$m = 2$ 或 $m = 3$

**第2步：** 逐一验证
> 📌 运用知识点：幂函数的性质

**当 $m = 2$ 时：** 指数 $= 2 - 2 = 0$，$f(x) = x^0 = 1$（$x \neq 0$）。

$f(-x) = 1 = f(x)$，是偶函数。✓

**当 $m = 3$ 时：** 指数 $= 3 - 2 = 1$，$f(x) = x$。

$f(-x) = -x = -f(x)$，是奇函数，不是偶函数。✗

所以 $m = 2$。

**⚠️ 易错提醒：** 求出 $m$ 的候选值后必须逐一验证。$m = 3$ 时得到的是奇函数，不满足题意。

**💡 解题思路总结：** 幂函数综合题：①先用系数为 $1$ 的条件确定参数候选值；②再根据性质条件筛选。
