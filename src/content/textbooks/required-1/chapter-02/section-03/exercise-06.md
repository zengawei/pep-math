---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 6
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P47 练习 第6题"
---

**题目：** 用基本不等式证明：对任意正数 $a, b, c$，有 $(a+b)(b+c)(c+a) \geq 8abc$。

---

**解答：**

**第1步：** 对每个因子应用基本不等式
> 📌 运用知识点：基本不等式

因为 $a, b, c > 0$，由基本不等式：

$$a + b \geq 2\sqrt{ab}$$
$$b + c \geq 2\sqrt{bc}$$
$$c + a \geq 2\sqrt{ca}$$

**第2步：** 三式相乘
> 📌 运用知识点：基本不等式

因为各因子均为正数，三式相乘（正数不等式可以相乘）：

$$(a+b)(b+c)(c+a) \geq 2\sqrt{ab} \cdot 2\sqrt{bc} \cdot 2\sqrt{ca}$$

$$= 8\sqrt{ab \cdot bc \cdot ca} = 8\sqrt{a^2b^2c^2} = 8abc$$

**第3步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立条件：$a = b$，$b = c$，$c = a$，即 $a = b = c$。

所以 $(a+b)(b+c)(c+a) \geq 8abc$，等号在 $a = b = c$ 时成立。

**⚠️ 易错提醒：** 多个不等式相乘时，要确保每个不等式两边都是正数，且等号可以同时成立。

**💡 解题思路总结：** 对多个因子分别应用基本不等式，再相乘。关键是每个不等式的等号条件要一致（本题都要求两变量相等，最终 $a = b = c$）。
