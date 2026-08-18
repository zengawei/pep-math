---
type: exercise
textbook: required-1
chapter: 3
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - function-concept
source: "人教A版2019"
references: "必修第一册 P56-P85 复习"
---

**题目：** 已知函数 $f(x) = \begin{cases} x + 2, & x \leq -1 \\ x^2, & -1 < x < 1 \\ 2 - x, & x \geq 1 \end{cases}$

(1) 求 $f\left(f\left(-\frac{3}{2}\right)\right)$ 的值；

(2) 若 $f(a) = \frac{1}{2}$，求 $a$ 的所有可能值。

---

**解答：**

**第1步：** 求 $f\left(-\frac{3}{2}\right)$
> 📌 运用知识点：分段函数

$-\frac{3}{2} \leq -1$，使用第一段：$f\left(-\frac{3}{2}\right) = -\frac{3}{2} + 2 = \frac{1}{2}$

**第2步：** 求 $f\left(f\left(-\frac{3}{2}\right)\right) = f\left(\frac{1}{2}\right)$
> 📌 运用知识点：分段函数

$-1 < \frac{1}{2} < 1$，使用第二段：$f\left(\frac{1}{2}\right) = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$

所以 $f\left(f\left(-\frac{3}{2}\right)\right) = \frac{1}{4}$。

**第3步：** 解 $f(a) = \frac{1}{2}$
> 📌 运用知识点：分段函数与方程

**情况一：** $a \leq -1$ 时，$a + 2 = \frac{1}{2}$，$a = -\frac{3}{2}$。$-\frac{3}{2} \leq -1$ ✓

**情况二：** $-1 < a < 1$ 时，$a^2 = \frac{1}{2}$，$a = \pm\frac{\sqrt{2}}{2}$。

$\frac{\sqrt{2}}{2} \approx 0.71 \in (-1, 1)$ ✓，$-\frac{\sqrt{2}}{2} \approx -0.71 \in (-1, 1)$ ✓

**情况三：** $a \geq 1$ 时，$2 - a = \frac{1}{2}$，$a = \frac{3}{2}$。$\frac{3}{2} \geq 1$ ✓

$a$ 的所有可能值为 $-\frac{3}{2}$，$\frac{\sqrt{2}}{2}$，$-\frac{\sqrt{2}}{2}$，$\frac{3}{2}$。

**⚠️ 易错提醒：** 每种情况解出 $a$ 后必须验证是否在对应区间内。容易漏掉某个情况或忘记验证。

**💡 解题思路总结：** 分段函数解方程需要分情况讨论，每种情况解出后要验证是否在对应区间内。
