---
type: exercise
textbook: required-1
chapter: 5
section: 2
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P131 练习 第8题"
---

**题目：** 已知 $\tan\alpha = 2$，求下列各式的值：(1) $\dfrac{\sin\alpha + \cos\alpha}{\sin\alpha - \cos\alpha}$；(2) $\sin\alpha \cdot \cos\alpha$。

---

**解答：**

**第1步：** 求 $\dfrac{\sin\alpha + \cos\alpha}{\sin\alpha - \cos\alpha}$
> 📌 运用知识点：同角关系——齐次式转化

分子分母同除以 $\cos\alpha$（$\cos\alpha \neq 0$，因为 $\tan\alpha = 2$ 存在）：

$\dfrac{\sin\alpha + \cos\alpha}{\sin\alpha - \cos\alpha} = \dfrac{\frac{\sin\alpha}{\cos\alpha} + 1}{\frac{\sin\alpha}{\cos\alpha} - 1} = \dfrac{\tan\alpha + 1}{\tan\alpha - 1} = \dfrac{2 + 1}{2 - 1} = \dfrac{3}{1} = 3$

**第2步：** 求 $\sin\alpha \cdot \cos\alpha$
> 📌 运用知识点：同角关系

方法：将 $\sin\alpha \cdot \cos\alpha$ 的分子分母同除以 $\sin^2\alpha + \cos^2\alpha = 1$：

$\sin\alpha \cdot \cos\alpha = \dfrac{\sin\alpha \cdot \cos\alpha}{\sin^2\alpha + \cos^2\alpha}$

分子分母同除以 $\cos^2\alpha$：

$= \dfrac{\tan\alpha}{\tan^2\alpha + 1} = \dfrac{2}{2^2 + 1} = \dfrac{2}{5}$

**⚠️ 易错提醒：** 齐次式的关键技巧是分子分母同除以 $\cos\alpha$ 或 $\cos^2\alpha$，转化为只含 $\tan\alpha$ 的表达式。注意第(2)题分母是 $1 = \sin^2\alpha + \cos^2\alpha$，不是随意添加的。

**💡 解题思路总结：** 已知 $\tan\alpha$ 求含 $\sin\alpha$、$\cos\alpha$ 的表达式：(1) 若为齐次式（分子分母次数相同），同除以 $\cos^n\alpha$ 转化为 $\tan\alpha$ 的表达式；(2) 若非齐次式，利用 $\sin^2\alpha + \cos^2\alpha = 1$ 构造齐次式。
