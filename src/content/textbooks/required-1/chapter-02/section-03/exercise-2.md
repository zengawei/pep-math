---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 2
difficulty: medium
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "自编"
references: "课标2.3.1"
---

**题目：** 已知 $x > 1$，求 $x + \frac{4}{x-1}$ 的最小值。

---

**解答：**

**第1步：** 变量替换
> 📌 运用知识点：基本不等式

令 $t = x - 1 > 0$，则 $x = t + 1$。

$x + \frac{4}{x-1} = t + 1 + \frac{4}{t} = t + \frac{4}{t} + 1$

**第2步：** 对 $t + \frac{4}{t}$ 应用基本不等式
> 📌 运用知识点：基本不等式

$t + \frac{4}{t} \geq 2\sqrt{t \cdot \frac{4}{t}} = 2 \times 2 = 4$

所以 $x + \frac{4}{x-1} \geq 4 + 1 = 5$

**第3步：** 验证等号成立条件
> 📌 运用知识点：基本不等式

等号成立：$t = \frac{4}{t}$，$t^2 = 4$，$t = 2$（$t > 0$）。

即 $x = 3$ 时取等号。最小值为 $5$。

**⚠️ 易错提醒：** 当不能直接凑出"积为定值"的形式时，考虑换元或拆项。
