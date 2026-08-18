---
type: example
textbook: required-1
chapter: 5
section: 2
number: 5
difficulty: hard
category: example
group: A
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P132 例5"
---

**题目：** 求证：$\dfrac{1 + \tan\alpha}{1 - \tan\alpha} = \dfrac{\cos\alpha + \sin\alpha}{\cos\alpha - \sin\alpha}$

---

**解答：**

**第1步：** 处理左边
> 📌 运用知识点：$\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$

左边 $= \dfrac{1 + \tan\alpha}{1 - \tan\alpha} = \dfrac{1 + \dfrac{\sin\alpha}{\cos\alpha}}{1 - \dfrac{\sin\alpha}{\cos\alpha}}$

**第2步：** 化简
> 📌 运用知识点：分式化简

分子分母同乘以 $\cos\alpha$：

$= \dfrac{\cos\alpha \cdot \left(1 + \dfrac{\sin\alpha}{\cos\alpha}\right)}{\cos\alpha \cdot \left(1 - \dfrac{\sin\alpha}{\cos\alpha}\right)} = \dfrac{\cos\alpha + \sin\alpha}{\cos\alpha - \sin\alpha} =$ 右边

所以等式成立。

**⚠️ 易错提醒：** 证明等式时要注意隐含条件：$\cos\alpha \neq 0$（否则 $\tan\alpha$ 不存在），且 $\cos\alpha - \sin\alpha \neq 0$（即 $\tan\alpha \neq 1$）。化简时分子分母同乘 $\cos\alpha$ 是常用技巧。

**💡 解题思路总结：** 三角恒等式证明的常用方法：(1) 将 $\tan$ 化为 $\sin$ 和 $\cos$（切化弦）；(2) 分子分母同乘某式消去分式；(3) 从复杂的一边化向简单的一边。
