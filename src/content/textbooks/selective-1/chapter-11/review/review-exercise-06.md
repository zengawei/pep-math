---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 6
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - vector-calculate-angle
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P17 复习参考题 第6题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，求异面直线 $AC$ 与 $BD'$ 所成角的大小。

---

**解答：**

**第1步：** 建立坐标系并求方向向量
> 📌 运用知识点：用向量计算角

以 $D$ 为原点，$\overrightarrow{DA}$、$\overrightarrow{DC}$、$\overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向，设棱长为 $1$。

$A(1, 0, 0)$，$C(0, 1, 0)$，$B(1, 1, 0)$，$D'(0, 0, 1)$。

$$\overrightarrow{AC} = (-1, 1, 0), \quad \overrightarrow{BD'} = (-1, -1, 1)$$

**第2步：** 计算夹角
> 📌 运用知识点：用向量计算角

$$\cos\langle\overrightarrow{AC}, \overrightarrow{BD'}\rangle = \frac{\overrightarrow{AC} \cdot \overrightarrow{BD'}}{|\overrightarrow{AC}| \cdot |\overrightarrow{BD'}|} = \frac{(-1)(-1) + 1 \times (-1) + 0 \times 1}{\sqrt{2} \cdot \sqrt{3}} = \frac{1 - 1 + 0}{\sqrt{6}} = 0$$

**第3步：** 得出结论
> 📌 运用知识点：用向量计算角

因为 $\cos\langle\overrightarrow{AC}, \overrightarrow{BD'}\rangle = 0$，所以异面直线 $AC$ 与 $BD'$ 所成角为 $90°$，即 $AC \perp BD'$。

**⚠️ 易错提醒：** 异面直线所成角取锐角或直角，范围为 $(0°, 90°]$。当向量夹角余弦为负时，异面直线所成角应取其补角。本题余弦为 $0$，恰好为直角。

**💡 解题思路总结：** 求异面直线所成角的标准方法：建系 → 求方向向量 → 代入夹角公式 → 注意取锐角或直角。
