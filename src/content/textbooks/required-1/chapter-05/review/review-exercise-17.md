---
type: exercise
textbook: required-1
chapter: 5
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - trig-function
source: "人教A版2019"
references: "必修第一册 P148 复习题 第17题"
---

**题目：** 化简：$\dfrac{\sin(\pi - \alpha) \cdot \cos(2\pi - \alpha)}{\tan(-\alpha + \pi)}$

---

**解答：**

**第1步：** 利用诱导公式化简各部分
> 📌 运用知识点：诱导公式

$\sin(\pi - \alpha) = \sin\alpha$

$\cos(2\pi - \alpha) = \cos(-\alpha) = \cos\alpha$

$\tan(-\alpha + \pi) = \tan(\pi - \alpha) = -\tan\alpha$

**第2步：** 代入化简
> 📌 运用知识点：分式化简

原式 $= \dfrac{\sin\alpha \cdot \cos\alpha}{-\tan\alpha} = \dfrac{\sin\alpha \cdot \cos\alpha}{-\dfrac{\sin\alpha}{\cos\alpha}} = \sin\alpha \cdot \cos\alpha \times \left(-\dfrac{\cos\alpha}{\sin\alpha}\right) = -\cos^2\alpha$

**⚠️ 易错提醒：** $\tan(\pi - \alpha) = -\tan\alpha$（不是 $\tan\alpha$）。$\cos(2\pi - \alpha) = \cos(-\alpha) = \cos\alpha$（余弦是偶函数）。化简时注意 $\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$。

**💡 解题思路总结：** 化简三角表达式：(1) 用诱导公式将各部分化为基本形式；(2) 将 $\tan$ 化为 $\sin/\cos$；(3) 约分化简。
