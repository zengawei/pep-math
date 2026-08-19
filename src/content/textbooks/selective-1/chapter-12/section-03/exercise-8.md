---
type: exercise
textbook: selective-1
chapter: 12
section: 3
number: 8
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - line-circle-position
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P51 练习B 第8题"
---

**题目：** 已知圆 $C: (x - 2)^2 + (y - 3)^2 = 9$，直线 $l: y = kx + 1$。当 $k$ 为何值时，直线 $l$ 被圆截得的弦长等于 $4$？

---

**解答：**

**第1步：** 确定圆心和半径
> 📌 运用知识点：直线与圆的位置关系

圆心 $C(2, 3)$，半径 $r = 3$。

**第2步：** 利用弦长公式
> 📌 运用知识点：直线与圆的位置关系

弦长 $= 2\sqrt{r^2 - d^2} = 4$

$\sqrt{9 - d^2} = 2$

$9 - d^2 = 4$

$d^2 = 5$，$d = \sqrt{5}$

**第3步：** 用距离公式列方程
> 📌 运用知识点：直线与圆的位置关系

直线 $kx - y + 1 = 0$

$d = \dfrac{|2k - 3 + 1|}{\sqrt{k^2 + 1}} = \dfrac{|2k - 2|}{\sqrt{k^2 + 1}} = \sqrt{5}$

$(2k - 2)^2 = 5(k^2 + 1)$

$4k^2 - 8k + 4 = 5k^2 + 5$

$k^2 + 8k + 1 = 0$

$k = \dfrac{-8 \pm \sqrt{64 - 4}}{2} = \dfrac{-8 \pm \sqrt{60}}{2} = \dfrac{-8 \pm 2\sqrt{15}}{2} = -4 \pm \sqrt{15}$

**⚠️ 易错提醒：** 由弦长反推 $d$ 时，$d = \sqrt{r^2 - \left(\dfrac{\text{弦长}}{2}\right)^2}$，不要搞混公式。解出 $k$ 后应验证 $d < r$：$d = \sqrt{5} < 3$ ✓

**💡 解题思路总结：** 已知弦长求参数：先用弦长公式 $2\sqrt{r^2 - d^2} = \text{弦长}$ 求出 $d$，再用圆心到直线的距离公式列方程求参数。
