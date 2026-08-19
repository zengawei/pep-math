---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 12
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P17 练习C 第2题"
---

**题目：** 在正方体 $ABCD\text{-}A'B'C'D'$ 中，棱长为 $2$。以 $D$ 为原点，$\overrightarrow{DA}, \overrightarrow{DC}, \overrightarrow{DD'}$ 分别为 $x, y, z$ 轴正方向建立空间直角坐标系。点 $E$ 是棱 $BB'$ 的中点，点 $F$ 是棱 $C'D'$ 的中点。

(1) 写出 $E, F$ 的坐标；

(2) 求 $\overrightarrow{EF}$ 的模；

(3) 求 $\overrightarrow{EF}$ 与 $\overrightarrow{DA}$ 的夹角的余弦值。

---

**解答：**

**第1步：** 确定各点坐标
> 📌 运用知识点：空间向量的坐标运算

以 $D$ 为原点，棱长为 $2$：

$D(0,0,0)$，$A(2,0,0)$，$B(2,2,0)$，$C(0,2,0)$

$D'(0,0,2)$，$A'(2,0,2)$，$B'(2,2,2)$，$C'(0,2,2)$

$E$ 是 $BB'$ 的中点：$E = \frac{B + B'}{2} = \frac{(2,2,0) + (2,2,2)}{2} = (2, 2, 1)$

$F$ 是 $C'D'$ 的中点：$F = \frac{C' + D'}{2} = \frac{(0,2,2) + (0,0,2)}{2} = (0, 1, 2)$

**第2步：** 求 $\overrightarrow{EF}$ 的模
> 📌 运用知识点：空间向量的坐标运算

$$\overrightarrow{EF} = F - E = (0-2, 1-2, 2-1) = (-2, -1, 1)$$

$$|\overrightarrow{EF}| = \sqrt{(-2)^2 + (-1)^2 + 1^2} = \sqrt{4 + 1 + 1} = \sqrt{6}$$

**第3步：** 求夹角余弦
> 📌 运用知识点：空间向量的坐标运算

$\overrightarrow{DA} = (2, 0, 0)$，$|\overrightarrow{DA}| = 2$。

$$\overrightarrow{EF} \cdot \overrightarrow{DA} = (-2) \times 2 + (-1) \times 0 + 1 \times 0 = -4$$

$$\cos\theta = \frac{\overrightarrow{EF} \cdot \overrightarrow{DA}}{|\overrightarrow{EF}||\overrightarrow{DA}|} = \frac{-4}{\sqrt{6} \times 2} = \frac{-4}{2\sqrt{6}} = -\frac{2}{\sqrt{6}} = -\frac{\sqrt{6}}{3}$$

**⚠️ 易错提醒：** 建立坐标系时要明确各轴正方向对应的向量。求中点坐标时是两端点坐标的算术平均值。

**💡 解题思路总结：** 在正方体中建立坐标系后，所有点的坐标都可以直接写出。然后一切归结为坐标运算：向量 = 终点 - 起点，模 = 各分量平方和的算术平方根。
