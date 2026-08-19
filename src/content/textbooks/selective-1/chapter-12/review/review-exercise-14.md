---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - line-circle-position
  - circle-equation
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P61 复习参考题 第14题"
---

**题目：** 求经过点 $P(2, 3)$ 且与圆 $C: (x - 1)^2 + (y - 1)^2 = 2$ 相切的直线方程。

---

**解答：**

**第1步：** 判断点与圆的关系
> 📌 运用知识点：直线与圆的位置关系

$(2-1)^2 + (3-1)^2 = 1 + 4 = 5 > 2$，点 $P$ 在圆外。

**第2步：** 设切线方程
> 📌 运用知识点：直线与圆的位置关系

设切线斜率为 $k$，切线方程 $y - 3 = k(x - 2)$，即 $kx - y + 3 - 2k = 0$。

圆心 $C(1, 1)$ 到切线的距离等于半径 $\sqrt{2}$：

$$\frac{|k \cdot 1 - 1 + 3 - 2k|}{\sqrt{k^2 + 1}} = \sqrt{2}$$

$$\frac{|2 - k|}{\sqrt{k^2 + 1}} = \sqrt{2}$$

$$(2 - k)^2 = 2(k^2 + 1)$$

$$4 - 4k + k^2 = 2k^2 + 2$$

$$k^2 + 4k - 2 = 0$$

$$k = \frac{-4 \pm \sqrt{16 + 8}}{2} = \frac{-4 \pm 2\sqrt{6}}{2} = -2 \pm \sqrt{6}$$

**第3步：** 写出切线方程
> 📌 运用知识点：直线与圆的位置关系

两条切线方程为 $y - 3 = (-2 + \sqrt{6})(x - 2)$ 和 $y - 3 = (-2 - \sqrt{6})(x - 2)$。

**⚠️ 易错提醒：** 点在圆外时有两条切线。设斜率时要检验斜率不存在的情况（$x = 2$ 是否与圆相切：$d = \frac{|2-1|}{1} = 1 \neq \sqrt{2}$，不是切线）。

**💡 解题思路总结：** 过圆外一点求切线：设斜率 → 圆心到直线距离等于半径 → 解方程求斜率。注意检验斜率不存在的情况。
