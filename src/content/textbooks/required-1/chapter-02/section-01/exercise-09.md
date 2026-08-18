---
type: exercise
textbook: required-1
chapter: 2
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - inequality-properties
source: "人教A版2019"
references: "必修第一册 P29 习题 第9题"
---

**题目：** 用作差法证明：若 $a > b > 0$，则 $\sqrt{a} > \sqrt{b}$。

---

**解答：**

**第1步：** 作差
> 📌 运用知识点：不等式的性质（作差法）

$$\sqrt{a} - \sqrt{b}$$

**第2步：** 有理化
> 📌 运用知识点：不等式的性质

将差值有理化（分子有理化）：

$$\sqrt{a} - \sqrt{b} = \frac{(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b})}{\sqrt{a} + \sqrt{b}} = \frac{a - b}{\sqrt{a} + \sqrt{b}}$$

**第3步：** 判断正负
> 📌 运用知识点：不等式的性质

因为 $a > b > 0$，所以：
- 分子：$a - b > 0$
- 分母：$\sqrt{a} + \sqrt{b} > 0$

正数除以正数为正数，所以 $\frac{a - b}{\sqrt{a} + \sqrt{b}} > 0$。

即 $\sqrt{a} - \sqrt{b} > 0$，故 $\sqrt{a} > \sqrt{b}$。

**⚠️ 易错提醒：** 作差后直接判断 $\sqrt{a} - \sqrt{b}$ 的正负比较困难，需要有理化转化为容易判断的形式。

**💡 解题思路总结：** 作差法遇到根号时，常用"分子有理化"技巧：$\sqrt{a} - \sqrt{b} = \frac{a-b}{\sqrt{a}+\sqrt{b}}$。将根号差转化为有理式，便于判断正负。
