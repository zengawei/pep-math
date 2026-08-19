---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 12
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - regression-analysis
source: "人教A版2019"
references: "选择性必修第三册 P63 复习参考题 第12题"
---

**题目：** 某地区连续 $6$ 个月的月均温度 $x$（°C）与某产品销量 $y$（万件）的数据如下：

| $x$ | $5$ | $8$ | $12$ | $15$ | $20$ | $25$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $12$ | $10$ | $8$ | $7$ | $5$ | $3$ |

（1）求 $y$ 关于 $x$ 的线性回归方程 $\hat{y} = \hat{b}x + \hat{a}$；

（2）预测月均温度为 $30$°C 时的产品销量。

（参考数据：$\sum_{i=1}^{6} x_i y_i = 558$，$\sum_{i=1}^{6} x_i^2 = 1479$）

---

**解答：**

**第1步：** 计算基本量
> 📌 运用知识点：回归分析

$$\overline{x} = \frac{5 + 8 + 12 + 15 + 20 + 25}{6} = \frac{85}{6}$$

$$\overline{y} = \frac{12 + 10 + 8 + 7 + 5 + 3}{6} = \frac{45}{6} = \frac{15}{2}$$

**第2步：** 求回归系数
> 📌 运用知识点：最小二乘法

$$\hat{b} = \frac{\sum x_i y_i - n\overline{x}\,\overline{y}}{\sum x_i^2 - n\overline{x}^2} = \frac{558 - 6 \times \frac{85}{6} \times \frac{15}{2}}{1479 - 6 \times \left(\frac{85}{6}\right)^2}$$

$$= \frac{558 - 85 \times \frac{15}{2}}{1479 - \frac{85^2}{6}} = \frac{558 - \frac{1275}{2}}{1479 - \frac{7225}{6}}$$

$$= \frac{\frac{1116 - 1275}{2}}{\frac{8874 - 7225}{6}} = \frac{\frac{-159}{2}}{\frac{1649}{6}} = \frac{-159}{2} \times \frac{6}{1649} = \frac{-159 \times 3}{1649} = \frac{-477}{1649}$$

化简：$\gcd(477, 1649)$。$477 = 3 \times 159 = 3 \times 3 \times 53$。$1649 = 53 \times 31$。

$$\hat{b} = \frac{-477}{1649} = \frac{-9 \times 53}{31 \times 53} = -\frac{9}{31} \approx -0.29$$

$$\hat{a} = \overline{y} - \hat{b}\,\overline{x} = \frac{15}{2} - \left(-\frac{9}{31}\right) \times \frac{85}{6} = \frac{15}{2} + \frac{9 \times 85}{31 \times 6} = \frac{15}{2} + \frac{765}{186} = \frac{15}{2} + \frac{255}{62}$$

$$= \frac{15 \times 31 + 255}{62} = \frac{465 + 255}{62} = \frac{720}{62} = \frac{360}{31} \approx 11.61$$

回归方程：$\hat{y} = -\frac{9}{31}x + \frac{360}{31}$

**第3步：** 预测
> 📌 运用知识点：回归方程的应用

当 $x = 30$ 时：

$$\hat{y} = -\frac{9}{31} \times 30 + \frac{360}{31} = \frac{-270 + 360}{31} = \frac{90}{31} \approx 2.90 \text{（万件）}$$

**⚠️ 易错提醒：** 计算过程中分数运算较多，注意通分和化简。回归系数为负值说明温度与销量呈负相关——温度越高，销量越低，符合生活常识。

**💡 解题思路总结：** 回归方程的计算需要仔细处理分数运算。可以利用 $\hat{a} = \overline{y} - \hat{b}\overline{x}$ 和回归直线过 $(\overline{x}, \overline{y})$ 来验证结果。
