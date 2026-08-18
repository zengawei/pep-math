---
type: example
textbook: required-1
chapter: 5
section: 1
number: 5
difficulty: hard
category: example
group: A
is_exam_question: false
knowledge_points:
  - angle-concept
source: "人教A版2019"
references: "必修第一册 P124 例5"
---

**题目：** 已知扇形的周长为 $16\text{ cm}$，求当圆心角 $\alpha$ 为多少弧度时，扇形的面积取最大值，并求最大面积。

---

**解答：**

**第1步：** 建立变量关系
> 📌 运用知识点：扇形周长公式

设半径为 $r$，弧长为 $l$。

周长 $C = 2r + l = 16$，所以 $l = 16 - 2r$。

约束条件：$r > 0$ 且 $l > 0$，即 $0 < r < 8$。

**第2步：** 建立面积函数
> 📌 运用知识点：扇形面积公式

$S = \dfrac{1}{2}lr = \dfrac{1}{2}(16 - 2r)r = 8r - r^2$

**第3步：** 配方求最值
> 📌 运用知识点：二次函数配方法

$S = -(r^2 - 8r) = -(r^2 - 8r + 16 - 16) = -(r - 4)^2 + 16$

当 $r = 4\text{ cm}$ 时（满足 $0 < r < 8$），$S$ 取最大值 $16\text{ cm}^2$。

**第4步：** 求对应的圆心角
> 📌 运用知识点：弧长公式

$l = 16 - 2 \times 4 = 8\text{ cm}$

$\alpha = \dfrac{l}{r} = \dfrac{8}{4} = 2\text{ (rad)}$

**结论：** 当 $\alpha = 2\text{ rad}$ 时，扇形面积最大，最大面积为 $16\text{ cm}^2$。

**⚠️ 易错提醒：** 不要忘记验证 $r = 4$ 在允许范围 $(0, 8)$ 内。这类最值问题的结论具有一般性：对任意周长 $C$，当 $\alpha = 2\text{ rad}$ 时面积最大。

**💡 解题思路总结：** 扇形最值问题的解题框架：(1) 用周长条件消元，将面积表示为单变量函数；(2) 配方法求二次函数最值；(3) 验证变量范围；(4) 回代求圆心角。
