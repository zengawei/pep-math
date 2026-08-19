---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 5
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - regression-analysis
source: "人教A版2019"
references: "选择性必修第三册 P60 复习参考题 第5题"
---

**题目：** 某工厂记录了 $5$ 天的产量 $y$（件）与用电量 $x$（度）的数据如下：

| $x$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $10$ | $15$ | $20$ | $25$ | $30$ |

（1）求 $y$ 关于 $x$ 的线性回归方程；

（2）估计用电量为 $8$ 度时的产量。

---

**解答：**

**第1步：** 计算基本量
> 📌 运用知识点：回归分析

$$\overline{x} = \frac{2+3+4+5+6}{5} = 4, \quad \overline{y} = \frac{10+15+20+25+30}{5} = 20$$

$$\sum_{i=1}^{5} x_i y_i = 2 \times 10 + 3 \times 15 + 4 \times 20 + 5 \times 25 + 6 \times 30 = 20 + 45 + 80 + 125 + 180 = 450$$

$$\sum_{i=1}^{5} x_i^2 = 4 + 9 + 16 + 25 + 36 = 90$$

**第2步：** 求回归系数
> 📌 运用知识点：最小二乘法

$$\hat{b} = \frac{\sum x_i y_i - n\overline{x}\,\overline{y}}{\sum x_i^2 - n\overline{x}^2} = \frac{450 - 5 \times 4 \times 20}{90 - 5 \times 16} = \frac{450 - 400}{90 - 80} = \frac{50}{10} = 5$$

$$\hat{a} = \overline{y} - \hat{b}\,\overline{x} = 20 - 5 \times 4 = 0$$

线性回归方程为：$\hat{y} = 5x$

**第3步：** 预测
> 📌 运用知识点：回归方程的应用

当 $x = 8$ 时：$\hat{y} = 5 \times 8 = 40$（件）

估计用电量为 $8$ 度时，产量约为 $40$ 件。

**⚠️ 易错提醒：** 回归直线一定过样本中心点 $(\overline{x}, \overline{y}) = (4, 20)$，可以此验证：$\hat{y} = 5 \times 4 = 20$ ✓。回归方程只能用于估计，不能给出精确值。

**💡 解题思路总结：** 线性回归方程的求解步骤：①算 $\overline{x}, \overline{y}$；②算 $\sum x_i y_i$ 和 $\sum x_i^2$；③代入最小二乘公式求 $\hat{b}$ 和 $\hat{a}$。回归直线过点 $(\overline{x}, \overline{y})$。
