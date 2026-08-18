---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P148 复习题 第16题"
---

**题目：** 已知 $\tan\alpha = 2$，求 $\sin\alpha \cdot \cos\alpha$ 的值。

---

**解答：**

**第1步：** 构造齐次式
> 📌 运用知识点：利用 $1 = \sin^2\alpha + \cos^2\alpha$

$\sin\alpha \cdot \cos\alpha = \dfrac{\sin\alpha \cdot \cos\alpha}{1} = \dfrac{\sin\alpha \cdot \cos\alpha}{\sin^2\alpha + \cos^2\alpha}$

**第2步：** 分子分母同除以 $\cos^2\alpha$
> 📌 运用知识点：齐次式转化

$= \dfrac{\dfrac{\sin\alpha \cdot \cos\alpha}{\cos^2\alpha}}{\dfrac{\sin^2\alpha + \cos^2\alpha}{\cos^2\alpha}} = \dfrac{\tan\alpha}{\tan^2\alpha + 1} = \dfrac{2}{2^2 + 1} = \dfrac{2}{5}$

**⚠️ 易错提醒：** 分子分母同除以 $\cos^2\alpha$ 时，分子 $\sin\alpha\cos\alpha \div \cos^2\alpha = \tan\alpha$（不是 $\tan^2\alpha$）。

**💡 解题思路总结：** 已知 $\tan\alpha$ 求 $\sin\alpha\cos\alpha$：用 $\sin^2\alpha + \cos^2\alpha = 1$ 做分母，构造二次齐次式，再除以 $\cos^2\alpha$ 转化为 $\tan\alpha$。
