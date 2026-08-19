---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 23
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - regression-analysis
  - correlation-analysis
  - sample-estimate-population
source: "人教A版2019"
references: "选择性必修第三册 P65 复习参考题 第23题"
---

**题目：** 某城市统计了近 $10$ 年的绿化面积 $x$（公顷）与空气质量优良天数 $y$（天），得到以下数据：

$\sum_{i=1}^{10} x_i = 500$，$\sum_{i=1}^{10} y_i = 2900$，$\sum_{i=1}^{10} x_i^2 = 30000$，$\sum_{i=1}^{10} y_i^2 = 856000$，$\sum_{i=1}^{10} x_i y_i = 152000$。

（1）求 $y$ 关于 $x$ 的线性回归方程；

（2）求相关系数 $r$（精确到 $0.001$），并判断线性相关程度；

（3）若该城市计划将绿化面积增加到 $60$ 公顷，预测空气质量优良天数。

---

**解答：**

**第1步：** 求回归方程
> 📌 运用知识点：最小二乘法

$$\overline{x} = \frac{500}{10} = 50, \quad \overline{y} = \frac{2900}{10} = 290$$

$$\hat{b} = \frac{152000 - 10 \times 50 \times 290}{30000 - 10 \times 2500} = \frac{152000 - 145000}{30000 - 25000} = \frac{7000}{5000} = 1.4$$

$$\hat{a} = 290 - 1.4 \times 50 = 290 - 70 = 220$$

回归方程：$\hat{y} = 1.4x + 220$

**第2步：** 求相关系数
> 📌 运用知识点：相关系数

$$r = \frac{\sum x_i y_i - n\overline{x}\,\overline{y}}{\sqrt{(\sum x_i^2 - n\overline{x}^2)(\sum y_i^2 - n\overline{y}^2)}} = \frac{7000}{\sqrt{5000 \times (856000 - 10 \times 84100)}}$$

$$= \frac{7000}{\sqrt{5000 \times (856000 - 841000)}} = \frac{7000}{\sqrt{5000 \times 15000}} = \frac{7000}{\sqrt{75000000}}$$

$$= \frac{7000}{8660.3} \approx 0.808$$

$r \approx 0.808$，说明 $y$ 与 $x$ 之间有较强的正线性相关关系。

**第3步：** 预测
> 📌 运用知识点：回归方程的应用

当 $x = 60$ 时：

$$\hat{y} = 1.4 \times 60 + 220 = 84 + 220 = 304$$

预测空气质量优良天数约为 $304$ 天。

**⚠️ 易错提醒：** $r \approx 0.808$ 说明线性相关性较强，但不是特别强（$r > 0.9$ 才算很强）。预测时注意：$x = 60$ 已超出原有数据范围（$\overline{x} = 50$），外推预测的可靠性会降低。

**💡 解题思路总结：** 本题综合了回归方程、相关系数和预测三个考点。回归方程用于建立预测模型，相关系数用于评价模型的可靠性，预测时注意外推的风险。
