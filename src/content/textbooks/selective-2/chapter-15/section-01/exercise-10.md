---
type: exercise
textbook: selective-2
chapter: 15
section: 1
number: 10
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - derivative-concept
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P30 练习B 第4题"
---

**题目：** 已知曲线 $y = x^2 + ax + b$ 在点 $(1, 2)$ 处的切线斜率为 $3$，求 $a$ 的值及切线方程。

---

**解答：**

**第1步：** 利用切点在曲线上建立方程
> 📌 运用知识点：导数的概念——切线斜率与导数的关系

点 $(1, 2)$ 在曲线 $y = x^2 + ax + b$ 上，代入得：

$$2 = 1^2 + a \cdot 1 + b \implies a + b = 1 \quad \cdots (1)$$

**第2步：** 利用切线斜率条件求 $a$
> 📌 运用知识点：导数的概念——导数的几何意义

$y' = 2x + a$

在 $x = 1$ 处的切线斜率为 $3$，即 $y'(1) = 3$：

$$2 \times 1 + a = 3 \implies a = 1$$

**第3步：** 求 $b$ 并写出切线方程
> 📌 运用知识点：导数的概念——切线方程

由 $(1)$ 式：$1 + b = 1 \implies b = 0$

切线斜率 $k = 3$，切点 $(1, 2)$，切线方程为：

$$y - 2 = 3(x - 1) \implies y = 3x - 1$$

**⚠️ 易错提醒：** 本题有两个条件：①切点在曲线上（用于建立 $a, b$ 的关系）；②切线斜率已知（用于确定 $a$ 的值）。两个条件缺一不可，不要遗漏任何一个。

**💡 解题思路总结：** "切点在曲线上"给出函数值条件，"切线斜率"给出导数值条件。两个条件联立可以解出未知参数。这是导数几何意义的经典应用。
