---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 28
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - conic-section-optimization
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P28 复习参考题 第28题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $1$，$P$ 为对角线 $BD'$ 上的动点。求 $PA + PC'$ 的最小值。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向。

$A(1, 0, 0)$，$C'(0, 1, 1)$，$B(1, 1, 0)$，$D'(0, 0, 1)$。

$P$ 在 $BD'$ 上：$\overrightarrow{BP} = t\overrightarrow{BD'} = t(-1, -1, 1)$，$P = (1-t, 1-t, t)$，$t \in [0, 1]$。

**第2步：** 表达距离之和
> 📌 运用知识点：空间向量的坐标表示

$$PA = \sqrt{(1-t-1)^2 + (1-t)^2 + t^2} = \sqrt{t^2 + (1-t)^2 + t^2} = \sqrt{3t^2 - 2t + 1}$$

$$PC' = \sqrt{(1-t)^2 + (1-t-1)^2 + (t-1)^2} = \sqrt{(1-t)^2 + t^2 + (1-t)^2} = \sqrt{3t^2 - 4t + 2}$$

**第3步：** 求最小值
> 📌 运用知识点：空间向量的运算

注意到 $A(1,0,0)$ 和 $C'(0,1,1)$ 关于 $BD'$ 的位置关系。

$BD'$ 的中点为 $M\left(\dfrac{1}{2}, \dfrac{1}{2}, \dfrac{1}{2}\right)$。

$MA = \sqrt{\dfrac{1}{4} + \dfrac{1}{4} + \dfrac{1}{4}} = \dfrac{\sqrt{3}}{2}$。

$MC' = \sqrt{\dfrac{1}{4} + \dfrac{1}{4} + \dfrac{1}{4}} = \dfrac{\sqrt{3}}{2}$。

由对称性，$A$ 和 $C'$ 到 $BD'$ 上任意一点的距离之和在 $P$ 为中点时取最小值：

$PA + PC' \geq 2 \times \dfrac{\sqrt{3}}{2} = \sqrt{3}$。

但需要验证这是否为最小值。当 $t = \dfrac{1}{2}$ 时：

$PA = \sqrt{\dfrac{3}{4} - 1 + 1} = \sqrt{\dfrac{3}{4}} = \dfrac{\sqrt{3}}{2}$。

$PC' = \sqrt{\dfrac{3}{4} - 2 + 2} = \dfrac{\sqrt{3}}{2}$。

$PA + PC' = \sqrt{3}$。

用导数验证：设 $f(t) = \sqrt{3t^2 - 2t + 1} + \sqrt{3t^2 - 4t + 2}$。

$f'(t) = \dfrac{6t - 2}{2\sqrt{3t^2 - 2t + 1}} + \dfrac{6t - 4}{2\sqrt{3t^2 - 4t + 2}} = 0$。

当 $t = \dfrac{1}{2}$ 时：$\dfrac{1}{2 \cdot \frac{\sqrt{3}}{2}} + \dfrac{-1}{2 \cdot \frac{\sqrt{3}}{2}} = \dfrac{1}{\sqrt{3}} - \dfrac{1}{\sqrt{3}} = 0$ ✓。

所以最小值为 $\sqrt{3}$。

**⚠️ 易错提醒：** 动点最值问题不能仅凭直觉判断，需要用导数或不等式严格验证。对称性可以猜测极值点，但必须验证。

**💡 解题思路总结：** 空间中的最值问题：建系 → 用参数表示目标函数 → 求导或利用不等式求最值。对称性是重要的分析工具。
