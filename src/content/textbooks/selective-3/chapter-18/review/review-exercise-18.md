---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 18
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - regression-analysis
  - correlation-analysis
source: "人教A版2019"
references: "选择性必修第三册 P64 复习参考题 第18题"
---

**题目：** 某地连续 $7$ 天的最高气温 $x$（°C）与冰淇淋销量 $y$（箱）的数据如下：

| $x$ | $22$ | $25$ | $27$ | $29$ | $31$ | $33$ | $35$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $20$ | $30$ | $35$ | $42$ | $50$ | $55$ | $63$ |

已知 $\sum_{i=1}^{7} x_i = 202$，$\sum_{i=1}^{7} y_i = 295$，$\sum_{i=1}^{7} x_i y_i = 9058$，$\sum_{i=1}^{7} x_i^2 = 6064$。

（1）求 $y$ 关于 $x$ 的线性回归方程；

（2）预测最高气温为 $37$°C 时的冰淇淋销量。

---

**解答：**

**第1步：** 计算平均值
> 📌 运用知识点：回归分析

$$\overline{x} = \frac{202}{7}, \quad \overline{y} = \frac{295}{7}$$

**第2步：** 求回归系数
> 📌 运用知识点：最小二乘法

$$\hat{b} = \frac{\sum x_i y_i - n\overline{x}\,\overline{y}}{\sum x_i^2 - n\overline{x}^2} = \frac{9058 - 7 \times \frac{202}{7} \times \frac{295}{7}}{6064 - 7 \times \left(\frac{202}{7}\right)^2}$$

$$= \frac{9058 - \frac{202 \times 295}{7}}{6064 - \frac{202^2}{7}} = \frac{9058 - \frac{59590}{7}}{6064 - \frac{40804}{7}}$$

$$= \frac{\frac{63406 - 59590}{7}}{\frac{42448 - 40804}{7}} = \frac{3816}{1644} = \frac{3816}{1644}$$

化简：$\gcd(3816, 1644)$。$3816 = 2 \times 1644 + 528$。$1644 = 3 \times 528 + 60$。$528 = 8 \times 60 + 48$。$60 = 1 \times 48 + 12$。$48 = 4 \times 12$。所以 $\gcd = 12$。

$$\hat{b} = \frac{3816}{1644} = \frac{318}{137} \approx 2.32$$

$$\hat{a} = \overline{y} - \hat{b}\,\overline{x} = \frac{295}{7} - \frac{318}{137} \times \frac{202}{7} = \frac{295}{7} - \frac{318 \times 202}{137 \times 7} = \frac{295 \times 137 - 318 \times 202}{7 \times 137}$$

$$= \frac{40415 - 64236}{959} = \frac{-23821}{959} \approx -24.84$$

回归方程：$\hat{y} \approx 2.32x - 24.84$

**第3步：** 预测
> 📌 运用知识点：回归方程的应用

当 $x = 37$ 时：

$$\hat{y} = 2.32 \times 37 - 24.84 = 85.84 - 24.84 = 61$$

预测冰淇淋销量约为 $61$ 箱。

**⚠️ 易错提醒：** 计算量较大时，要仔细核对每一步的数值运算。回归方程的预测值只在数据范围内较可靠，外推太远（如 $x = 50$）可能不准确。

**💡 解题思路总结：** 回归分析的标准流程：计算基本统计量 → 代入最小二乘公式 → 写出回归方程 → 进行预测。计算时注意分数的化简。
