---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-equation
source: "人教A版2019"
references: "必修第一册 P53 复习题 第16题"
---

**题目：** 解关于 $x$ 的不等式 $x^2 - (2a+1)x + a(a+1) < 0$。

---

**解答：**

**第1步：** 因式分解
> 📌 运用知识点：一元二次方程

$x^2 - (2a+1)x + a(a+1) = 0$

注意到 $a + (a+1) = 2a + 1$，$a \cdot (a+1) = a(a+1)$。

所以 $(x - a)(x - (a+1)) = 0$，两根为 $x_1 = a$，$x_2 = a + 1$。

**第2步：** 比较两根大小
> 📌 运用知识点：一元二次不等式

$x_2 - x_1 = (a+1) - a = 1 > 0$

所以 $a < a + 1$ 恒成立（无需分类讨论）。

**第3步：** 确定解集
> 📌 运用知识点：一元二次不等式

$a = 1 > 0$，开口向上。$< 0$ 取中间。

解集为 $(a, a+1)$。

**⚠️ 易错提醒：** 本题两根之差为 $1 > 0$，所以 $a < a+1$ 恒成立，不需要分类讨论。但要注意识别因式分解的模式。

**💡 解题思路总结：** 含参不等式：先求根（用参数表示），再比较根的大小。如果根的大小关系确定（如本题），则不需要分类讨论。
