---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-properties
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知 $a^{-\frac{1}{2}} < 2$，其中 $a > 0$，求 $a$ 的取值范围。

---

**解答：**

**第1步：** 化简不等式
> 📌 运用知识点：幂运算

$a^{-\frac{1}{2}} = \frac{1}{a^{\frac{1}{2}}} = \frac{1}{\sqrt{a}}$

不等式变为 $\frac{1}{\sqrt{a}} < 2$

**第2步：** 求解
> 📌 运用知识点：不等式的性质

因为 $a > 0$，$\sqrt{a} > 0$，两边乘以 $\sqrt{a}$：

$1 < 2\sqrt{a}$

$\sqrt{a} > \frac{1}{2}$

两边平方：$a > \frac{1}{4}$

结合 $a > 0$：$a > \frac{1}{4}$

$a$ 的取值范围为 $\left(\frac{1}{4}, +\infty\right)$。

**第3步：** 验证
> 📌 运用知识点：检验

取 $a = 1$：$1^{-1/2} = 1 < 2$ ✓

取 $a = \frac{1}{4}$：$\left(\frac{1}{4}\right)^{-1/2} = 4^{1/2} = 2$，不满足 $< 2$ ✓（边界值正确排除）

**⚠️ 易错提醒：** $\sqrt{a} > \frac{1}{2}$ 两边平方时，因为两边都为正，不等号方向不变。

**💡 解题思路总结：** 幂值不等式：先将负指数化为正指数，再利用不等式性质求解。注意定义域的限制。
