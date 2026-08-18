---
type: exercise
textbook: required-1
chapter: 2
section: 3
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - basic-inequality
source: "人教A版2019"
references: "必修第一册 P49 习题 第9题"
---

**题目：** 用基本不等式证明：对任意正数 $a, b$，有 $a^4 + b^4 \geq a^3b + ab^3$。

---

**解答：**

**第1步：** 作差分析
> 📌 运用知识点：基本不等式

$$a^4 + b^4 - a^3b - ab^3 = a^3(a - b) - b^3(a - b) = (a^3 - b^3)(a - b)$$

**第2步：** 判断差值的正负
> 📌 运用知识点：基本不等式

$(a^3 - b^3)(a - b)$：

当 $a > b$ 时：$a^3 > b^3$（立方保序），$a - b > 0$，乘积 $> 0$。

当 $a < b$ 时：$a^3 < b^3$，$a - b < 0$，乘积 $> 0$。

当 $a = b$ 时：乘积 $= 0$。

所以 $(a^3 - b^3)(a - b) \geq 0$，即 $a^4 + b^4 \geq a^3b + ab^3$。

**第3步：** 用基本不等式的另一种证法
> 📌 运用知识点：基本不等式

也可以分组使用基本不等式：

$$a^4 + a^4 + a^4 + b^4 \geq 4\sqrt[4]{a^{12}b^4} = 4a^3b$$

即 $3a^4 + b^4 \geq 4a^3b$。

同理 $a^4 + 3b^4 \geq 4ab^3$。

两式相加：$4a^4 + 4b^4 \geq 4a^3b + 4ab^3$，即 $a^4 + b^4 \geq a^3b + ab^3$。

**第4步：** 验证等号条件
> 📌 运用知识点：基本不等式

等号成立条件：$a = b$。

**⚠️ 易错提醒：** 本题可以用多种方法证明。作差法更直接，基本不等式法需要巧妙地分组。

**💡 解题思路总结：** 证明对称不等式时，作差法和基本不等式法都是有效工具。基本不等式法的关键是合理分组，使各项的积为定值。
