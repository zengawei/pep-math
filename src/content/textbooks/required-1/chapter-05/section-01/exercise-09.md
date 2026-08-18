---
type: exercise
textbook: required-1
chapter: 5
section: 1
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - angle-concept
source: "人教A版2019"
references: "必修第一册 P123 练习 第9题"
---

**题目：** 已知扇形的周长为 $20\text{ cm}$，求当圆心角 $\alpha$ 为多少弧度时，扇形面积最大？最大面积是多少？

---

**解答：**

**第1步：** 建立关系式
> 📌 运用知识点：弧长公式与扇形周长

设扇形半径为 $r$，弧长为 $l$，则周长 $C = 2r + l = 20$，所以 $l = 20 - 2r$。

由弧长公式 $l = \alpha r$，得 $\alpha r = 20 - 2r$，即 $\alpha = \dfrac{20 - 2r}{r}$。

**第2步：** 建立面积函数并求最值
> 📌 运用知识点：扇形面积公式与二次函数最值

$S = \dfrac{1}{2}lr = \dfrac{1}{2}(20 - 2r)r = 10r - r^2 = -(r^2 - 10r) = -(r - 5)^2 + 25$

当 $r = 5\text{ cm}$ 时，$S$ 取最大值 $25\text{ cm}^2$。

此时 $l = 20 - 2 \times 5 = 10\text{ cm}$，$\alpha = \dfrac{l}{r} = \dfrac{10}{5} = 2\text{ (rad)}$。

**⚠️ 易错提醒：** 注意约束条件：$r > 0$ 且 $l > 0$，即 $0 < r < 10$。$r = 5$ 在此范围内，所以可以取到最大值。不要忘记求对应的 $\alpha$ 值。

**💡 解题思路总结：** 扇形最值问题的关键是将面积表示为单一变量的函数（通常选 $r$），然后用配方法或判别式法求最值。注意检验变量范围。
