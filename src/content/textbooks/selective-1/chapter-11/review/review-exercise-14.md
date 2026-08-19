---
type: exercise
textbook: selective-1
chapter: 11
section: 0
number: 14
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
  - vector-prove-parallel-perpendicular
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P21 复习参考题 第14题"
---

**题目：** 如图，在四棱锥 $P\text{-}ABCD$ 中，底面 $ABCD$ 为正方形，$PA \perp$ 底面 $ABCD$，$PA = AB = 2$，$E$ 为 $PD$ 的中点。

(1) 证明：$PB \parallel$ 平面 $ACE$。

(2) 求平面 $ACE$ 的一个法向量。

---

**解答：**

**第1步：** 建立坐标系
> 📌 运用知识点：空间向量的坐标表示

以 $A$ 为原点，$\overrightarrow{AB}$、$\overrightarrow{AD}$、$\overrightarrow{AP}$ 分别为 $x, y, z$ 轴正方向。

$A(0,0,0)$，$B(2,0,0)$，$C(2,2,0)$，$D(0,2,0)$，$P(0,0,2)$，$E(0,1,1)$。

**第2步：** 证明 $PB \parallel$ 平面 $ACE$
> 📌 运用知识点：用向量证明平行与垂直

$\overrightarrow{PB} = (2, 0, -2)$。平面 $ACE$ 内两个向量：$\overrightarrow{AC} = (2, 2, 0)$，$\overrightarrow{AE} = (0, 1, 1)$。

设 $\overrightarrow{PB} = \lambda\overrightarrow{AC} + \mu\overrightarrow{AE}$，即 $(2, 0, -2) = \lambda(2, 2, 0) + \mu(0, 1, 1)$。

$$\begin{cases} 2\lambda = 2 \\ 2\lambda + \mu = 0 \\ \mu = -2 \end{cases}$$

解得 $\lambda = 1$，$\mu = -2$，验证：$2(1) + (-2) = 0$ ✓，$(-2) = -2$ ✓。

所以 $\overrightarrow{PB}$ 可由 $\overrightarrow{AC}$ 和 $\overrightarrow{AE}$ 线性表示，即 $\overrightarrow{PB}$ 在平面 $ACE$ 的方向内。又 $P$ 不在平面 $ACE$ 上，所以 $PB \parallel$ 平面 $ACE$。

**第3步：** 求法向量
> 📌 运用知识点：空间向量的坐标表示

设法向量 $\vec{n} = (x, y, z)$，则 $\vec{n} \cdot \overrightarrow{AC} = 0$，$\vec{n} \cdot \overrightarrow{AE} = 0$：

$$\begin{cases} 2x + 2y = 0 \\ y + z = 0 \end{cases}$$

取 $x = 1$，则 $y = -1$，$z = 1$。法向量 $\vec{n} = (1, -1, 1)$。

**⚠️ 易错提醒：** 证明线面平行时，除了验证方向向量在平面方向内，还需说明直线上的点不在平面上。求法向量时自由变量的取值可以任意（非零），结果不唯一。

**💡 解题思路总结：** 向量法证明线面平行：将直线方向向量用平面内两个不共线向量表示。求法向量：设法向量为 $(x,y,z)$，与平面内两个不共线向量数量积为零，解方程组。
