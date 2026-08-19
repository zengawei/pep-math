---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 10
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P19 复习参考题 第10题"
---

**题目：** 已知 $A(1, 2, 3)$，$B(3, 4, 5)$，$C(2, 5, 4)$，求：

(1) $\triangle ABC$ 的面积；

(2) 点 $A$ 到直线 $BC$ 的距离。

---

**解答：**

**第1步：** 求相关向量
> 📌 运用知识点：空间向量的坐标表示

$$\overrightarrow{AB} = (2, 2, 2), \quad \overrightarrow{AC} = (1, 3, 1)$$

$$\overrightarrow{BC} = C - B = (-1, 1, -1)$$

**第2步：** 计算面积
> 📌 运用知识点：空间向量的运算

$$\overrightarrow{AB} \cdot \overrightarrow{AC} = 2 \times 1 + 2 \times 3 + 2 \times 1 = 10$$

$$|\overrightarrow{AB}| = \sqrt{4 + 4 + 4} = 2\sqrt{3}, \quad |\overrightarrow{AC}| = \sqrt{1 + 9 + 1} = \sqrt{11}$$

$$\cos A = \frac{10}{2\sqrt{3} \cdot \sqrt{11}} = \frac{10}{2\sqrt{33}} = \frac{5}{\sqrt{33}}$$

$$\sin A = \sqrt{1 - \frac{25}{33}} = \sqrt{\frac{8}{33}} = \frac{2\sqrt{2}}{\sqrt{33}}$$

$$S_{\triangle ABC} = \frac{1}{2}|\overrightarrow{AB}||\overrightarrow{AC}|\sin A = \frac{1}{2} \cdot 2\sqrt{3} \cdot \sqrt{11} \cdot \frac{2\sqrt{2}}{\sqrt{33}} = \frac{1}{2} \cdot 2\sqrt{33} \cdot \frac{2\sqrt{2}}{\sqrt{33}} = 2\sqrt{2}$$

**第3步：** 求点 $A$ 到直线 $BC$ 的距离
> 📌 运用知识点：空间向量的坐标表示

利用面积公式 $S = \dfrac{1}{2} |BC| \cdot d$，其中 $d$ 为点 $A$ 到直线 $BC$ 的距离。

$$|BC| = \sqrt{1 + 1 + 1} = \sqrt{3}$$

$$d = \frac{2S}{|BC|} = \frac{2 \times 2\sqrt{2}}{\sqrt{3}} = \frac{4\sqrt{2}}{\sqrt{3}} = \frac{4\sqrt{6}}{3}$$

**⚠️ 易错提醒：** 空间三角形面积不能直接用平面公式，需要先求出夹角的正弦值。求点到直线距离时，利用面积与底的关系是简便方法。

**💡 解题思路总结：** 空间三角形面积可用 $S = \frac{1}{2}|\vec{u}||\vec{v}|\sin\theta$ 计算。点到直线距离可通过面积反推，也可用向量投影法。
