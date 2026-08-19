---
type: exercise
textbook: selective-1
chapter: 11
section: 1
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - space-vector-operations
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P7 练习C 第1题"
---

**题目：** 在空间四边形 $OABC$ 中，$OA, OB, OC$ 两两垂直，且 $OA = 3$，$OB = 4$，$OC = 5$。设 $\overrightarrow{OA} = \vec{a}$，$\overrightarrow{OB} = \vec{b}$，$\overrightarrow{OC} = \vec{c}$。点 $G$ 是三角形 $ABC$ 的重心。

(1) 用 $\vec{a}, \vec{b}, \vec{c}$ 表示 $\overrightarrow{OG}$；

(2) 求 $|\overrightarrow{OG}|$。

---

**解答：**

**第1步：** 利用重心性质表示 $\overrightarrow{OG}$
> 📌 运用知识点：空间向量的运算

三角形 $ABC$ 的重心 $G$ 满足：

$$\overrightarrow{OG} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC}) = \frac{1}{3}(\vec{a} + \vec{b} + \vec{c})$$

**第2步：** 计算 $|\overrightarrow{OG}|$
> 📌 运用知识点：空间向量的运算

由于 $OA, OB, OC$ 两两垂直，$\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{a} \cdot \vec{c} = 0$。

$$|\overrightarrow{OG}|^2 = \frac{1}{9}|\vec{a} + \vec{b} + \vec{c}|^2 = \frac{1}{9}(|\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2)$$

$$= \frac{1}{9}(9 + 16 + 25) = \frac{50}{9}$$

$$|\overrightarrow{OG}| = \frac{5\sqrt{2}}{3}$$

**⚠️ 易错提醒：** 三角形重心的位置向量公式是三个顶点位置向量的算术平均值 $\frac{1}{3}(\vec{r_1} + \vec{r_2} + \vec{r_3})$，不要和 $\frac{1}{2}$ 混淆。

**💡 解题思路总结：** 当三条棱两两垂直时，基向量的数量积为零，展开模的平方时交叉项全部消去，只剩下各分量模的平方和。
