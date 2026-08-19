---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 30
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-calculate-angle
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P28 复习参考题 第30题"
---

**题目：** 在正四面体 $ABCD$ 中，棱长为 $2$，$E, F$ 分别为 $AB, CD$ 的中点。

(1) 求 $EF$ 的长度。

(2) 求异面直线 $AD$ 与 $EF$ 所成角的余弦值。

(3) 求平面 $ACD$ 与平面 $BCD$ 所成二面角的余弦值。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

取 $CD$ 中点 $F$ 为原点。$\overrightarrow{FC}$ 为 $x$ 轴，$\overrightarrow{FB}$ 为 $y$ 轴，竖直方向为 $z$ 轴。

$C(1, 0, 0)$，$D(-1, 0, 0)$。

$B$ 在 $CD$ 的中垂面上，$BF = \sqrt{BC^2 - FC^2} = \sqrt{4 - 1} = \sqrt{3}$。$B(0, \sqrt{3}, 0)$。

$A$ 满足 $AC = AD = AB = 2$。设 $A(0, y_A, z_A)$：

$AC^2 = 1 + y_A^2 + z_A^2 = 4 \Rightarrow y_A^2 + z_A^2 = 3$。

$AB^2 = 0 + (y_A - \sqrt{3})^2 + z_A^2 = 4 \Rightarrow y_A^2 - 2\sqrt{3}y_A + 3 + z_A^2 = 4$。

$3 - 2\sqrt{3}y_A + 3 = 4 \Rightarrow y_A = \dfrac{\sqrt{3}}{3}$，$z_A = \sqrt{3 - \frac{1}{3}} = \sqrt{\dfrac{8}{3}} = \dfrac{2\sqrt{6}}{3}$。

$A\left(0, \dfrac{\sqrt{3}}{3}, \dfrac{2\sqrt{6}}{3}\right)$。

$E$ 为 $AB$ 中点：$E\left(0, \dfrac{\frac{\sqrt{3}}{3} + \sqrt{3}}{2}, \dfrac{\sqrt{6}}{3}\right) = \left(0, \dfrac{2\sqrt{3}}{3}, \dfrac{\sqrt{6}}{3}\right)$。

**第2步：** 求 $EF$ 和异面直线夹角
> 📌 运用知识点：用向量计算角

$\overrightarrow{EF} = F - E = \left(0, -\dfrac{2\sqrt{3}}{3}, -\dfrac{\sqrt{6}}{3}\right)$。

$$|EF| = \sqrt{0 + \frac{12}{9} + \frac{6}{9}} = \sqrt{\frac{18}{9}} = \sqrt{2}$$

$\overrightarrow{AD} = D - A = \left(-1, -\dfrac{\sqrt{3}}{3}, -\dfrac{2\sqrt{6}}{3}\right)$。

$$\overrightarrow{AD} \cdot \overrightarrow{EF} = 0 + \frac{2\sqrt{3}}{3} \cdot \frac{\sqrt{3}}{3} + \frac{2\sqrt{6}}{3} \cdot \frac{\sqrt{6}}{3} = \frac{2}{3} + \frac{4}{3} = 2$$

$$|\overrightarrow{AD}| = 2, \quad |\overrightarrow{EF}| = \sqrt{2}$$

$$\cos\theta = \frac{|\overrightarrow{AD} \cdot \overrightarrow{EF}|}{|\overrightarrow{AD}||\overrightarrow{EF}|} = \frac{2}{2\sqrt{2}} = \frac{\sqrt{2}}{2}$$

异面直线所成角为 $45°$。

**第3步：** 求二面角
> 📌 运用知识点：用向量计算角

平面 $ACD$：$\overrightarrow{CA} = \left(-1, \dfrac{\sqrt{3}}{3}, \dfrac{2\sqrt{6}}{3}\right)$，$\overrightarrow{CD} = (-2, 0, 0)$。

法向量 $\vec{n_1}$：$\vec{n_1} \cdot \overrightarrow{CD} = 0 \Rightarrow x = 0$；$\vec{n_1} \cdot \overrightarrow{CA} = 0 \Rightarrow \dfrac{\sqrt{3}}{3}y + \dfrac{2\sqrt{6}}{3}z = 0$。

取 $y = 2\sqrt{6}$，$z = -\sqrt{3}$。$\vec{n_1} = (0, 2\sqrt{6}, -\sqrt{3})$。

平面 $BCD$（底面）法向量 $\vec{n_2} = (0, 0, 1)$。

$$\cos\theta = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}||\vec{n_2}|} = \frac{\sqrt{3}}{\sqrt{24 + 3}} = \frac{\sqrt{3}}{\sqrt{27}} = \frac{\sqrt{3}}{3\sqrt{3}} = \frac{1}{3}$$

二面角余弦值为 $\dfrac{1}{3}$。

**⚠️ 易错提醒：** 正四面体建系需要仔细计算各点坐标，每一步都要验证距离条件。异面直线夹角取绝对值。

**💡 解题思路总结：** 正四面体问题利用对称性建系，将几何量转化为向量运算。对棱中点连线长为 $\frac{\sqrt{2}}{2}a$，二面角余弦为 $\frac{1}{3}$ 是正四面体的基本性质。
