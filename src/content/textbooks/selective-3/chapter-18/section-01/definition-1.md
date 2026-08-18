---
type: definition
textbook: selective-3
chapter: 18
section: 1
name: 回归分析
related_knowledge_points:
  - regression-analysis
  - correlation-analysis
---

**定义（精确表述）：** 回归分析是对具有相关关系的两个变量进行统计分析的方法。设有 $n$ 对观测数据 $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$，若 $y$ 与 $x$ 之间近似存在线性关系，则用**线性回归方程**

$$\hat{y} = \hat{b}x + \hat{a}$$

来描述这种关系，其中 $\hat{b}$、$\hat{a}$ 由**最小二乘法**确定：

$$\hat{b} = \frac{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})^2} = \frac{\displaystyle\sum_{i=1}^{n}x_i y_i - n\bar{x}\bar{y}}{\displaystyle\sum_{i=1}^{n}x_i^2 - n\bar{x}^2}$$

$$\hat{a} = \bar{y} - \hat{b}\bar{x}$$

其中 $\bar{x} = \dfrac{1}{n}\displaystyle\sum_{i=1}^{n}x_i$，$\bar{y} = \dfrac{1}{n}\displaystyle\sum_{i=1}^{n}y_i$。

**相关指数 $R^2$（决定系数）：**

$$R^2 = 1 - \frac{\displaystyle\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{\displaystyle\sum_{i=1}^{n}(y_i - \bar{y})^2} = 1 - \frac{SS_{\text{残}}}{SS_{\text{总}}}$$

$R^2$ 越接近 $1$，说明回归直线对数据的拟合程度越好，即 $y$ 的变化中能被 $x$ 解释的比例越大。

**通俗解释：** 回归分析就是"找一条最合适的直线来描述两个变量之间的关系"。最小二乘法的意思是：让所有数据点到这条直线的纵向距离的平方和最小，这样直线就尽可能靠近每一个点。$R^2$ 衡量的是"这条直线拟合得好不好"——$R^2$ 越接近 $1$，说明直线越能代表数据的趋势；$R^2$ 越接近 $0$，说明直线拟合效果越差。
