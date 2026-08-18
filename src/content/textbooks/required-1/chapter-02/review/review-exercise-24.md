---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 24
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - quadratic-inequality
  - quadratic-equation
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P54 复习题 第24题"
---

**题目：** 已知关于 $x$ 的方程 $x^2 + (m-1)x + 1 = 0$ 有两个正根，求 $m$ 的取值范围。

---

**解答：**

**第1步：** 列出条件
> 📌 运用知识点：一元二次方程

方程有两个正根，需要同时满足：
1. $\Delta \geq 0$（有两个实根）
2. $x_1 + x_2 > 0$（两根之和为正）
3. $x_1 \cdot x_2 > 0$（两根之积为正）

**第2步：** 逐一求解
> 📌 运用知识点：一元二次方程

条件1：$\Delta = (m-1)^2 - 4 \geq 0$

$(m-1)^2 \geq 4$

$m - 1 \geq 2$ 或 $m - 1 \leq -2$

$m \geq 3$ 或 $m \leq -1$

条件2：$x_1 + x_2 = -(m-1) = 1 - m > 0$

$m < 1$

条件3：$x_1 \cdot x_2 = 1 > 0$（恒成立）

**第3步：** 取交集
> 📌 运用知识点：一元二次不等式

条件1：$m \geq 3$ 或 $m \leq -1$

条件2：$m < 1$

取交集：$m \leq -1$。

所以 $m$ 的取值范围为 $(-\infty, -1]$。

**第4步：** 验证
> 📌 运用知识点：一元二次方程

取 $m = -1$：$x^2 - 2x + 1 = 0$，$(x-1)^2 = 0$，$x = 1 > 0$。✓（重根为正）

取 $m = -3$：$x^2 - 4x + 1 = 0$，$x = 2 \pm \sqrt{3}$，两根均为正。✓

**⚠️ 易错提醒：** "两个正根"需要三个条件同时满足：$\Delta \geq 0$、和为正、积为正。不要遗漏 $\Delta \geq 0$（允许重根）。

**💡 解题思路总结：** 方程根的正负问题用韦达定理：$x_1 + x_2 = -\frac{b}{a}$，$x_1 x_2 = \frac{c}{a}$。结合 $\Delta \geq 0$ 列出条件组，取交集。
