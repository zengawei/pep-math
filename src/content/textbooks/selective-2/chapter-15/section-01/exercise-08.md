---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P30 练习B 第2题"
---

**题目：** 求函数 $f(x) = \sin\left(2x + \dfrac{\pi}{3}\right)$ 的导数。

---

**解答：**

**第1步：** 识别复合函数结构
> 📌 运用知识点：导数运算法则——复合函数求导（链式法则）

$f(x) = \sin\left(2x + \dfrac{\pi}{3}\right)$ 是复合函数，外层函数为 $y = \sin u$，内层函数为 $u = 2x + \dfrac{\pi}{3}$。

链式法则：$f'(x) = y'_u \cdot u'_x$

**第2步：** 分别求外层和内层的导数
> 📌 运用知识点：导数运算法则——复合函数求导（链式法则）

外层：$(\sin u)' = \cos u = \cos\left(2x + \dfrac{\pi}{3}\right)$

内层：$\left(2x + \dfrac{\pi}{3}\right)' = 2$

**第3步：** 代入链式法则
> 📌 运用知识点：导数运算法则——复合函数求导（链式法则）

$$f'(x) = \cos\left(2x + \frac{\pi}{3}\right) \cdot 2 = 2\cos\left(2x + \frac{\pi}{3}\right)$$

**⚠️ 易错提醒：** 链式法则中不要忘记乘以内层函数的导数。常见错误是只对外层求导就结束，漏乘了内层导数 $2$。

**💡 解题思路总结：** 复合函数求导的关键是"层层剥洋葱"——从最外层开始，逐层向内求导，每层的导数相乘。对于 $\sin(ax+b)$ 型函数，结果为 $a\cos(ax+b)$。
