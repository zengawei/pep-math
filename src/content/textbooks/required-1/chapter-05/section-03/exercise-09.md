---
type: exercise
textbook: required-1
chapter: 5
section: 3
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - trig-function
  - trig-graph
source: "人教A版2019"
references: "必修第一册 P143 练习 第9题"
---

**题目：** 判断函数 $f(x) = \sin 2x$ 的奇偶性，并求其最小正周期。

---

**解答：**

**第1步：** 判断奇偶性
> 📌 运用知识点：函数奇偶性的定义

$f(x)$ 的定义域为 $\mathbb{R}$，关于原点对称。

$f(-x) = \sin(2 \times (-x)) = \sin(-2x) = -\sin 2x = -f(x)$

因为 $f(-x) = -f(x)$ 对所有 $x \in \mathbb{R}$ 成立，所以 $f(x) = \sin 2x$ 是奇函数。

**第2步：** 求最小正周期
> 📌 运用知识点：周期公式

$T = \dfrac{2\pi}{|\omega|} = \dfrac{2\pi}{2} = \pi$

所以 $f(x) = \sin 2x$ 的最小正周期为 $\pi$。

**第3步：** 验证周期性
> 📌 运用知识点：周期函数定义

$f(x + \pi) = \sin 2(x + \pi) = \sin(2x + 2\pi) = \sin 2x = f(x)$

验证完毕，$T = \pi$ 确实是周期。

**⚠️ 易错提醒：** 判断奇偶性必须先验证定义域关于原点对称。$\sin(-2x) = -\sin 2x$ 利用了正弦函数是奇函数的性质，不要写成 $\sin(-2x) = \sin 2x$。

**💡 解题思路总结：** 判断三角函数奇偶性：(1) 检查定义域是否关于原点对称；(2) 计算 $f(-x)$ 与 $f(x)$ 的关系；(3) $f(-x) = f(x)$ 为偶函数，$f(-x) = -f(x)$ 为奇函数。
