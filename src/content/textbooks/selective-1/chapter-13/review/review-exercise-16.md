---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - hyperbola-properties
  - hyperbola-definition
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P102 复习参考题 第16题"
---

**题目：** 已知双曲线 $\dfrac{x^2}{4} - y^2 = 1$ 的两个焦点为 $F_1, F_2$，点 $P$ 在双曲线上，且 $|PF_1| \cdot |PF_2| = 8$。求 $\angle F_1PF_2$ 的大小。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：双曲线的几何性质

$a^2 = 4, b^2 = 1, c^2 = 5$。$a = 2, c = \sqrt{5}$。

$||PF_1| - |PF_2|| = 2a = 4$。

**第2步：** 利用余弦定理
> 📌 运用知识点：双曲线的定义

设 $|PF_1| = m, |PF_2| = n$，$|m - n| = 4$，$mn = 8$。

$(m - n)^2 = m^2 - 2mn + n^2 = 16$

$m^2 + n^2 = 16 + 16 = 32$

$|F_1F_2|^2 = 4c^2 = 20$

由余弦定理：

$$\cos\angle F_1PF_2 = \frac{m^2 + n^2 - |F_1F_2|^2}{2mn} = \frac{32 - 20}{16} = \frac{12}{16} = \frac{3}{4}$$

$\angle F_1PF_2 = \arccos\dfrac{3}{4}$。

**⚠️ 易错提醒：** 双曲线中是 $|m - n| = 2a$（不是 $m + n$）。$(m - n)^2 = m^2 - 2mn + n^2$，展开时注意符号。

**💡 解题思路总结：** 双曲线焦点三角形：$|m - n| = 2a$ 和 $mn$ 已知，用余弦定理求角。
