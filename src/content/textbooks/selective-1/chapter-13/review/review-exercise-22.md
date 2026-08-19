---
type: exercise
textbook: selective-1
chapter: 13
section: 0
number: 22
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - ellipse-properties
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P105 复习参考题 第22题"
---

**题目：** 已知椭圆 $\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$，$F_1, F_2$ 为其两个焦点，$P$ 为椭圆上的点。求 $|PF_1| \cdot |PF_2|$ 的最大值。

---

**解答：**

**第1步：** 建立关系
> 📌 运用知识点：椭圆的几何性质

$a = 2, b = \sqrt{3}, c = 1$。

$|PF_1| + |PF_2| = 4$。

**第2步：** 利用均值不等式
> 📌 运用知识点：圆锥曲线中的最值问题

设 $m = |PF_1|, n = |PF_2|$，$m + n = 4$。

$$mn \leq \left(\frac{m + n}{2}\right)^2 = 4$$

等号成立条件：$m = n = 2$，即 $P$ 在短轴端点。

验证：$P(0, \sqrt{3})$ 时，$|PF_1| = \sqrt{1 + 3} = 2$，$|PF_2| = 2$。$mn = 4$ ✓。

**⚠️ 易错提醒：** 均值不等式 $mn \leq \left(\frac{m+n}{2}\right)^2$ 的等号条件是 $m = n$。需要验证 $m = n$ 时 $P$ 确实在椭圆上。

**💡 解题思路总结：** 椭圆上点到两焦点距离的积：利用 $m + n = 2a$ 和均值不等式。最大值在短轴端点取到，为 $a^2$。
