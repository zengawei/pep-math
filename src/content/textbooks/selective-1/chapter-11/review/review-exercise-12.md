---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 12
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P20 复习参考题 第12题"
---

**题目：** 在正四面体 $ABCD$ 中（棱长为 $1$），$E$ 为 $BC$ 的中点，求 $\overrightarrow{AE}$ 与 $\overrightarrow{CD}$ 所成角的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

取 $BC$ 中点为 $E$，以 $E$ 为原点。设 $B\left(-\dfrac{1}{2}, 0, 0\right)$，$C\left(\dfrac{1}{2}, 0, 0\right)$。

由正四面体性质，$A$ 在 $BC$ 的中垂面上，$D$ 也在 $BC$ 的中垂面上。

$A\left(0, \dfrac{\sqrt{3}}{2}, 0\right)$（在 $xy$ 平面内使 $AB = 1$）。

设 $D\left(0, y_D, z_D\right)$，由 $DB = DC = DA = 1$：

$y_D = \dfrac{\sqrt{3}}{6}$，$z_D = \dfrac{\sqrt{6}}{3}$。

**第2步：** 求向量
> 📌 运用知识点：用向量计算角

$$\overrightarrow{AE} = E - A = \left(0, -\frac{\sqrt{3}}{2}, 0\right)$$

$$\overrightarrow{CD} = D - C = \left(-\frac{1}{2}, \frac{\sqrt{3}}{6}, \frac{\sqrt{6}}{3}\right)$$

**第3步：** 计算夹角
> 📌 运用知识点：用向量计算角

$$\overrightarrow{AE} \cdot \overrightarrow{CD} = 0 + \left(-\frac{\sqrt{3}}{2}\right)\left(\frac{\sqrt{3}}{6}\right) + 0 = -\frac{3}{12} = -\frac{1}{4}$$

$$|\overrightarrow{AE}| = \frac{\sqrt{3}}{2}, \quad |\overrightarrow{CD}| = \sqrt{\frac{1}{4} + \frac{3}{36} + \frac{6}{9}} = \sqrt{\frac{1}{4} + \frac{1}{12} + \frac{2}{3}} = \sqrt{\frac{3+1+8}{12}} = 1$$

$$\cos\theta = \frac{|\overrightarrow{AE} \cdot \overrightarrow{CD}|}{|\overrightarrow{AE}||\overrightarrow{CD}|} = \frac{\frac{1}{4}}{\frac{\sqrt{3}}{2} \times 1} = \frac{1}{4} \times \frac{2}{\sqrt{3}} = \frac{1}{2\sqrt{3}} = \frac{\sqrt{3}}{6}$$

异面直线所成角 $\theta = \arccos\dfrac{\sqrt{3}}{6}$。

**⚠️ 易错提醒：** 异面直线所成角取绝对值后求反余弦，范围为 $(0°, 90°]$。建系时要仔细验证各点坐标满足距离条件。

**💡 解题思路总结：** 正四面体问题建系是关键，利用对称性简化坐标。异面直线所成角用向量夹角公式，注意取绝对值保证结果为锐角或直角。
