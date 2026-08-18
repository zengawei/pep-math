---
type: exercise
textbook: required-1
chapter: 5
section: 1
number: 10
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - angle-concept
source: "人教A版2019"
references: "必修第一册 P150 复习题 第10题"
---

**题目：** 已知扇形的周长为 $C$（$C > 0$），当扇形的圆心角 $\alpha$ 取何值时，扇形的面积最大？并证明你的结论。

---

**解答：**

**第1步：** 建立面积关于半径的函数
> 📌 运用知识点：扇形周长与面积公式

设扇形半径为 $r$，弧长为 $l$，圆心角为 $\alpha$（弧度制）。

周长：$C = 2r + l$，所以 $l = C - 2r$。

面积：$S = \dfrac{1}{2}lr = \dfrac{1}{2}(C - 2r)r = \dfrac{C}{2}r - r^2$

**第2步：** 配方求最值
> 📌 运用知识点：二次函数配方法

$S = -r^2 + \dfrac{C}{2}r = -\left(r^2 - \dfrac{C}{2}r\right) = -\left(r - \dfrac{C}{4}\right)^2 + \dfrac{C^2}{16}$

当 $r = \dfrac{C}{4}$ 时，$S_{\max} = \dfrac{C^2}{16}$。

**第3步：** 求对应的圆心角
> 📌 运用知识点：弧长公式

此时 $l = C - 2 \times \dfrac{C}{4} = C - \dfrac{C}{2} = \dfrac{C}{2}$

$\alpha = \dfrac{l}{r} = \dfrac{\frac{C}{2}}{\frac{C}{4}} = 2 \text{ (rad)}$

**验证约束条件：** 需要 $r > 0$ 且 $l > 0$，即 $0 < r < \dfrac{C}{2}$。而 $r = \dfrac{C}{4}$ 满足此条件。

**结论：** 当圆心角 $\alpha = 2\text{ rad}$ 时，扇形面积最大，最大面积为 $\dfrac{C^2}{16}$。

**⚠️ 易错提醒：** 证明题需要完整的推导过程，不能直接给出结论。注意验证 $r = \dfrac{C}{4}$ 在允许范围内（$0 < r < \dfrac{C}{2}$）。

**💡 解题思路总结：** 扇形面积最值问题的通用方法：(1) 利用周长条件消去一个变量；(2) 将面积表示为单变量函数；(3) 用配方法求最值；(4) 验证变量范围。结论：当 $\alpha = 2\text{ rad}$ 时面积最大。
