---
type: exercise
textbook: selective-1
chapter: 12
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - line-circle-position
  - coordinate-method
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P63 复习参考题 第17题"
---

**题目：** 已知圆 $C: x^2 + y^2 - 6x - 8y + 21 = 0$，直线 $l: kx - y - 2k + 3 = 0$。

(1) 证明：无论 $k$ 取何值，直线 $l$ 与圆 $C$ 总有两个交点。

(2) 求直线 $l$ 被圆 $C$ 截得的最短弦长。

---

**解答：**

**第1步：** 化圆的标准式
> 📌 运用知识点：圆的方程

$(x - 3)^2 + (y - 4)^2 = 9 + 16 - 21 = 4$。

圆心 $C(3, 4)$，半径 $r = 2$。

**第2步：** 分析直线特征
> 📌 运用知识点：直线方程的应用

$l: k(x - 2) - y + 3 = 0$，即直线恒过定点 $(2, 3)$。

验证：$(2 - 3)^2 + (3 - 4)^2 = 1 + 1 = 2 < 4$，定点在圆内。

因此直线 $l$ 总与圆 $C$ 相交，有两个交点。

**第3步：** 求最短弦长
> 📌 运用知识点：直线与圆的位置关系

弦长 $L = 2\sqrt{r^2 - d^2}$，$d$ 为圆心到直线的距离。$L$ 最短 $\Leftrightarrow$ $d$ 最大。

圆心 $C(3, 4)$ 到定点 $M(2, 3)$ 的距离 $|CM| = \sqrt{1 + 1} = \sqrt{2}$。

当 $l \perp CM$ 时，$d$ 取最大值 $\sqrt{2}$。

$$L_{\min} = 2\sqrt{4 - 2} = 2\sqrt{2}$$

**⚠️ 易错提醒：** 直线过圆内定点时必与圆相交。最短弦出现在直线与圆心到定点连线垂直时。

**💡 解题思路总结：** 含参直线过定点问题：提取参数整理为关于参数的方程。最短弦长利用 $d_{\max} = |CM|$ 求解。
