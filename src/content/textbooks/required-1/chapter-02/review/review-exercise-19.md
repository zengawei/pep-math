---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P53 复习题 第19题"
---

**题目：** 已知 $a > 0$，$b > 0$，且 $ab - a - 2b = 0$，求 $a + b$ 的最小值。

---

**解答：**

**第1步：** 由约束条件求一个变量
> 📌 运用知识点：基本不等式

由 $ab - a - 2b = 0$：

$a(b - 1) = 2b$

因为 $b > 0$ 且 $a > 0$，需要 $b - 1 > 0$（否则 $a \leq 0$），即 $b > 1$。

$$a = \frac{2b}{b - 1}$$

**第2步：** 代入目标函数
> 📌 运用知识点：基本不等式

$$a + b = \frac{2b}{b - 1} + b$$

令 $t = b - 1 > 0$，$b = t + 1$：

$$a + b = \frac{2(t+1)}{t} + t + 1 = 2 + \frac{2}{t} + t + 1 = 3 + t + \frac{2}{t}$$

**第3步：** 应用基本不等式
> 📌 运用知识点：基本不等式

$$t + \frac{2}{t} \geq 2\sqrt{t \cdot \frac{2}{t}} = 2\sqrt{2}$$

所以 $a + b \geq 3 + 2\sqrt{2}$。

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$t = \frac{2}{t}$，$t^2 = 2$，$t = \sqrt{2}$。

$b = \sqrt{2} + 1$，$a = \frac{2(\sqrt{2}+1)}{\sqrt{2}} = \sqrt{2}(\sqrt{2}+1) / 1 = 2 + \sqrt{2}$。

验证：$ab = (2+\sqrt{2})(\sqrt{2}+1) = 2\sqrt{2} + 2 + 2 + \sqrt{2} = 4 + 3\sqrt{2}$。

$a + 2b = 2 + \sqrt{2} + 2\sqrt{2} + 2 = 4 + 3\sqrt{2}$。✓

所以 $a + b$ 的最小值为 $3 + 2\sqrt{2}$。

**⚠️ 易错提醒：** 由约束条件解出一个变量后代入目标函数，再换元用基本不等式。注意检验定义域（$b > 1$）。

**💡 解题思路总结：** 带约束的最值问题：①由约束条件解出一个变量 ②代入目标函数 ③换元后用基本不等式求最值。
