---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 19
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P24 复习参考题 第19题"
---

**题目：** 在三棱锥 $P\text{-}ABC$ 中，$PA \perp$ 平面 $ABC$，$\angle BAC = 90°$，$PA = AB = AC = 2$。求异面直线 $PA$ 与 $BC$ 所成角的大小。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AC}$、$\overrightarrow{AP}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(2,0,0)$，$C(0,2,0)$，$P(0,0,2)$。

**第2步：** 求方向向量
> 📌 运用知识点：用向量计算角

$$\overrightarrow{PA} = (0, 0, -2), \quad \overrightarrow{BC} = (-2, 2, 0)$$

**第3步：** 计算夹角
> 📌 运用知识点：用向量计算角

$$\cos\theta = \frac{|\overrightarrow{PA} \cdot \overrightarrow{BC}|}{|\overrightarrow{PA}||\overrightarrow{BC}|} = \frac{|0 + 0 + 0|}{2 \cdot 2\sqrt{2}} = 0$$

所以异面直线 $PA$ 与 $BC$ 所成角为 $90°$。

**⚠️ 易错提醒：** 当数量积为零时，异面直线所成角为 $90°$。注意异面直线所成角取绝对值，公式中分子要加绝对值符号。

**💡 解题思路总结：** 当一条直线垂直于某平面时，它与该平面内任何直线都垂直。本题 $PA \perp$ 平面 $ABC$，$BC$ 在平面 $ABC$ 内，所以 $PA \perp BC$。向量法验证了这一几何结论。
