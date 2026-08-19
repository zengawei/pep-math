---
type: exercise
textbook: selective-3
chapter: 18
section: 0
number: 4
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - correlation-analysis
source: "人教A版2019"
references: "选择性必修第三册 P60 复习参考题 第4题"
---

**题目：** 某研究收集了 $5$ 组数据 $(x_i, y_i)$，如下表所示：

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $2$ | $4$ | $5$ | $7$ | $7$ |

（1）画出散点图，判断 $x$ 与 $y$ 之间是否具有线性相关关系；

（2）求相关系数 $r$（精确到 $0.01$），并判断相关程度。

---

**解答：**

**第1步：** 判断相关关系
> 📌 运用知识点：相关分析

观察数据变化趋势：$x$ 增大时，$y$ 也呈增大趋势。散点图中各点大致分布在一条直线附近，说明 $x$ 与 $y$ 之间具有较好的正线性相关关系。

**第2步：** 计算相关系数
> 📌 运用知识点：相关系数

$$\overline{x} = \frac{1+2+3+4+5}{5} = 3, \quad \overline{y} = \frac{2+4+5+7+7}{5} = 5$$

$$\sum_{i=1}^{5} x_i y_i = 1 \times 2 + 2 \times 4 + 3 \times 5 + 4 \times 7 + 5 \times 7 = 2 + 8 + 15 + 28 + 35 = 88$$

$$\sum_{i=1}^{5} x_i^2 = 1 + 4 + 9 + 16 + 25 = 55$$

$$\sum_{i=1}^{5} y_i^2 = 4 + 16 + 25 + 49 + 49 = 143$$

$$r = \frac{\sum x_i y_i - n\overline{x}\,\overline{y}}{\sqrt{(\sum x_i^2 - n\overline{x}^2)(\sum y_i^2 - n\overline{y}^2)}} = \frac{88 - 5 \times 3 \times 5}{\sqrt{(55 - 45)(143 - 125)}}$$

$$= \frac{88 - 75}{\sqrt{10 \times 18}} = \frac{13}{\sqrt{180}} = \frac{13}{13.42} \approx 0.97$$

**第3步：** 判断相关程度
> 📌 运用知识点：相关系数

$r \approx 0.97$，接近 $1$，说明 $x$ 与 $y$ 之间有很强的正线性相关关系。

**⚠️ 易错提醒：** 相关系数公式中分子是 $\sum x_i y_i - n\overline{x}\,\overline{y}$，不是 $\sum x_i y_i - \overline{x}\,\overline{y}$（要乘以 $n$）。$|r|$ 越接近 $1$，线性相关性越强。

**💡 解题思路总结：** 相关系数 $r$ 是衡量两个变量线性相关程度的指标：$|r|$ 接近 $1$ 表示强相关，接近 $0$ 表示弱相关。$r > 0$ 为正相关，$r < 0$ 为负相关。
