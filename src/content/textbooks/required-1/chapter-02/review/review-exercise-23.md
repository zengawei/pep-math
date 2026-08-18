---
type: exercise
textbook: required-1
chapter: 2
section: 0
number: 23
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P54 复习题 第23题"
---

**题目：** 已知 $x > 0$，$y > 0$，且 $2x + 8y - xy = 0$，求 $x + y$ 的最小值。

---

**解答：**

**第1步：** 由约束条件解出一个变量
> 📌 运用知识点：基本不等式

由 $2x + 8y - xy = 0$：

$x(2 - y) = -8y$

$x(y - 2) = 8y$

因为 $x > 0, y > 0$，需要 $y - 2 > 0$，即 $y > 2$。

$$x = \frac{8y}{y - 2}$$

**第2步：** 代入目标函数
> 📌 运用知识点：基本不等式

$$x + y = \frac{8y}{y - 2} + y$$

令 $t = y - 2 > 0$，$y = t + 2$：

$$x + y = \frac{8(t + 2)}{t} + t + 2 = 8 + \frac{16}{t} + t + 2 = 10 + t + \frac{16}{t}$$

**第3步：** 应用基本不等式
> 📌 运用知识点：基本不等式

$$t + \frac{16}{t} \geq 2\sqrt{t \cdot \frac{16}{t}} = 2 \times 4 = 8$$

所以 $x + y \geq 10 + 8 = 18$。

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立：$t = \frac{16}{t}$，$t^2 = 16$，$t = 4$。

$y = 6$，$x = \frac{8 \times 6}{4} = 12$。

验证：$2(12) + 8(6) - 12 \times 6 = 24 + 48 - 72 = 0$。✓

所以 $x + y$ 的最小值为 $18$。

**⚠️ 易错提醒：** 由约束条件解出变量时要注意定义域（$y > 2$）。换元后利用基本不等式求最值。

**💡 解题思路总结：** 约束最值问题：①由约束条件解出一个变量 ②代入目标函数 ③换元后用基本不等式。关键是换元 $t = y - 2$ 使表达式化为 $t + \frac{k}{t}$ 的形式。
