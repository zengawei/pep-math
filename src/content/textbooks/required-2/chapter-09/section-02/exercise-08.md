---
type: exercise
textbook: required-2
chapter: 9
section: 2
number: 8
difficulty: medium
category: practice
is_exam_question: false
knowledge_points:
  - sample-estimate-population
source: "人教A版2019"
references: "人教A版2019"
---

**题目：** 一组数据 $x_1, x_2, \cdots, x_{10}$ 的平均数为 $\bar{x} = 5$，方差 $s^2 = 3$。

(1) 求数据 $x_1+1, x_2+1, \cdots, x_{10}+1$ 的平均数和方差；

(2) 求数据 $2x_1, 2x_2, \cdots, 2x_{10}$ 的平均数和方差。

---

**解答：**

**第1步：** (1) 每个数据加 $1$
> 📌 运用知识点：用样本估计总体

新数据每个值加 $1$，平均数也加 $1$：$\bar{x}' = 5 + 1 = 6$

方差不变（数据整体平移不影响波动程度）：$s'^2 = 3$

**第2步：** (2) 每个数据乘以 $2$
> 📌 运用知识点：用样本估计总体

新数据每个值乘以 $2$，平均数也乘以 $2$：$\bar{x}'' = 5 \times 2 = 10$

方差变为原来的 $2^2 = 4$ 倍：$s''^2 = 4 \times 3 = 12$

**💡 易错提醒：** 数据变换规律：①每个数据加常数 $a$，平均数加 $a$，方差不变；②每个数据乘以常数 $b$，平均数乘以 $b$，方差乘以 $b^2$。

**💡 解题思路总结：** 若 $y_i = ax_i + b$，则 $\bar{y} = a\bar{x} + b$，$s_y^2 = a^2 s_x^2$。
