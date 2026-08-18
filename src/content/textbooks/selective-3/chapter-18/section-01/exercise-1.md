---
type: exercise
textbook: selective-3
chapter: 18
section: 1
number: 1
difficulty: basic
category: practice
is_exam_question: false
knowledge_points:
  - regression-analysis
source: "人教A版2019"
references: "课标18.1.1"
---

**题目：** 某研究机构对某地区5户家庭的月收入 $x$（单位：千元）与月消费支出 $y$（单位：千元）进行了调查，数据如下表：

| $x$ | 3 | 4 | 5 | 6 | 7 |
|-----|---|---|---|---|---|
| $y$ | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 |

(1) 求 $y$ 关于 $x$ 的线性回归方程 $\hat{y} = \hat{b}x + \hat{a}$；

(2) 估计月收入为 $10$ 千元的家庭的月消费支出。

---

**解答：**

**第1步：** 计算基本统计量
> 📌 运用知识点：均值计算

$$\bar{x} = \frac{3 + 4 + 5 + 6 + 7}{5} = \frac{25}{5} = 5$$

$$\bar{y} = \frac{2.0 + 2.5 + 3.0 + 3.5 + 4.0}{5} = \frac{15.0}{5} = 3.0$$

**第2步：** 计算 $\hat{b}$
> 📌 运用知识点：最小二乘法公式

先计算所需各项：

$$\sum_{i=1}^{5}x_i^2 = 9 + 16 + 25 + 36 + 49 = 135$$

$$\sum_{i=1}^{5}x_i y_i = 3 \times 2.0 + 4 \times 2.5 + 5 \times 3.0 + 6 \times 3.5 + 7 \times 4.0 = 6.0 + 10.0 + 15.0 + 21.0 + 28.0 = 80.0$$

代入公式：

$$\hat{b} = \frac{\displaystyle\sum_{i=1}^{5}x_i y_i - 5\bar{x}\bar{y}}{\displaystyle\sum_{i=1}^{5}x_i^2 - 5\bar{x}^2} = \frac{80.0 - 5 \times 5 \times 3.0}{135 - 5 \times 25} = \frac{80.0 - 75.0}{135 - 125} = \frac{5.0}{10} = 0.5$$

**第3步：** 计算 $\hat{a}$
> 📌 运用知识点：最小二乘法公式

$$\hat{a} = \bar{y} - \hat{b}\bar{x} = 3.0 - 0.5 \times 5 = 3.0 - 2.5 = 0.5$$

所以线性回归方程为：

$$\boxed{\hat{y} = 0.5x + 0.5}$$

**第4步：** 预测 $x = 10$ 时的 $y$
> 📌 运用知识点：回归方程的预测应用

将 $x = 10$ 代入回归方程：

$$\hat{y} = 0.5 \times 10 + 0.5 = 5.5$$

估计月收入为 $10$ 千元的家庭的月消费支出为 $\boxed{5.5}$ 千元。

**💡 解题思路总结：** 求线性回归方程的关键是利用最小二乘法公式计算 $\hat{b}$ 和 $\hat{a}$。先算均值 $\bar{x}$、$\bar{y}$，再算 $\sum x_i^2$ 和 $\sum x_i y_i$，代入公式即可。回归方程建好后，将新的 $x$ 值代入即可进行预测。
