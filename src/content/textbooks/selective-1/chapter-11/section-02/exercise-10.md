---
type: exercise
textbook: selective-1
chapter: 11
section: 2
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - space-vector-coordinate
source: "人教A版2019"
references: "人教A版2019 选择性必修第一册 P15 练习B 第3题"
---

**题目：** 已知 $A(1, 0, 0)$，$B(0, 1, 0)$，$C(0, 0, 1)$，$D(1, 1, 2)$。判断 $\overrightarrow{AD}$ 能否用 $\overrightarrow{AB}, \overrightarrow{AC}$ 线性表示。若能，求出表示式；若不能，说明理由。

---

**解答：**

**第1步：** 计算各向量坐标
> 📌 运用知识点：空间向量的坐标运算

$$\overrightarrow{AB} = (-1, 1, 0), \quad \overrightarrow{AC} = (-1, 0, 1), \quad \overrightarrow{AD} = (0, 1, 2)$$

**第2步：** 设 $\overrightarrow{AD} = \lambda \overrightarrow{AB} + \mu \overrightarrow{AC}$，列方程
> 📌 运用知识点：空间向量的坐标运算

$$(0, 1, 2) = \lambda(-1, 1, 0) + \mu(-1, 0, 1) = (-\lambda - \mu, \lambda, \mu)$$

对应分量：
$$\begin{cases} -\lambda - \mu = 0 \\ \lambda = 1 \\ \mu = 2 \end{cases}$$

**第3步：** 验证一致性
> 📌 运用知识点：空间向量的坐标运算

由第 (2) 式 $\lambda = 1$，第 (3) 式 $\mu = 2$，代入第 (1) 式：$-1 - 2 = -3 \neq 0$。

方程组无解，所以 $\overrightarrow{AD}$ 不能用 $\overrightarrow{AB}, \overrightarrow{AC}$ 线性表示。

这说明 $D$ 不在平面 $ABC$ 内，即 $A, B, C, D$ 四点不共面。

**⚠️ 易错提醒：** 两个向量只能表示它们所张成平面内的向量。如果方程组出现矛盾，说明目标向量不在该平面内。

**💡 解题思路总结：** 判断一个向量能否用两个向量线性表示，就是判断三个向量是否共面。设出系数列方程组，若有解则可表示，若矛盾则不可表示。
