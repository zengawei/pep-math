---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 15
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - ellipse-properties
  - ellipse-definition
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P102 复习参考题 第15题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{16} + \dfrac{y^2}{4} = 1$ 的两个焦点为 $F_1, F_2$，点 $P$ 在椭圆上，且 $\angle F_1PF_2 = 90°$。求 $\triangle F_1PF_2$ 的面积。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：椭圆的几何性质

$a^2 = 16, b^2 = 4, c^2 = 12$。$a = 4, c = 2\sqrt{3}$。

$|PF_1| + |PF_2| = 2a = 8$。

**第2步：** 利用直角条件
> 📌 运用知识点：椭圆的定义

设 $|PF_1| = m, |PF_2| = n$。

$m + n = 8$，$m^2 + n^2 = |F_1F_2|^2 = (2c)^2 = 48$。

$(m + n)^2 = m^2 + 2mn + n^2 = 64$

$48 + 2mn = 64$，$mn = 8$。

**第3步：** 求面积
> 📌 运用知识点：椭圆的几何性质

$$S = \frac{1}{2}mn\sin 90° = \frac{1}{2} \times 8 = 4$$

**⚠️ 易错提醒：** 椭圆焦点三角形面积公式：当 $\angle F_1PF_2 = \theta$ 时，$S = b^2\tan\frac{\theta}{2}$。本题 $S = 4\tan 45° = 4$，与计算一致。

**💡 解题思路总结：** 焦点三角形问题：利用 $m + n = 2a$ 和余弦定理（或直角条件）联立，求 $mn$，再算面积。
