---
type: exercise
textbook: selective-3
chapter: 18
section: 1
number: 13
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - regression-analysis
  - correlation-analysis
source: "人教A版2019"
references: "选择性必修第三册 P48 练习C 第13题"
---

**题目：** 已知变量 $x$ 与 $y$ 的 $n$ 组观测数据 $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$ 的线性回归方程为 $\hat{y} = \hat{b}x + \hat{a}$。

(1) 证明：回归直线必过点 $(\bar{x}, \bar{y})$；

(2) 若某组数据的回归方程为 $\hat{y} = 2x + \hat{a}$，且 $\bar{x} = 3$，$\bar{y} = 8$，求 $\hat{a}$ 的值；

(3) 在 (2) 的条件下，若还知道 $\sum_{i=1}^{n}x_i^2 = 50$，$\sum_{i=1}^{n}x_i y_i = 80$，$n = 5$，验证 $\hat{b} = 2$ 是否正确。

---

**解答：**

**第1步：** 证明回归直线过 $(\bar{x}, \bar{y})$
> 📌 运用知识点：回归直线的性质

由最小二乘法，$\hat{a} = \bar{y} - \hat{b}\bar{x}$。

将 $x = \bar{x}$ 代入回归方程：

$$\hat{y} = \hat{b}\bar{x} + \hat{a} = \hat{b}\bar{x} + (\bar{y} - \hat{b}\bar{x}) = \bar{y}$$

因此回归直线必过点 $(\bar{x}, \bar{y})$。$\blacksquare$

**第2步：** 求 $\hat{a}$
> 📌 运用知识点：回归直线过样本中心点

由 (1) 的结论，回归直线过 $(\bar{x}, \bar{y}) = (3, 8)$，代入 $\hat{y} = 2x + \hat{a}$：

$$8 = 2 \times 3 + \hat{a}$$

$$\hat{a} = 8 - 6 = \boxed{2}$$

所以回归方程为 $\hat{y} = 2x + 2$。

**第3步：** 验证 $\hat{b} = 2$
> 📌 运用知识点：最小二乘法公式

由公式：

$$\hat{b} = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2} = \frac{80 - 5 \times 3 \times 8}{50 - 5 \times 9} = \frac{80 - 120}{50 - 45} = \frac{-40}{5} = -8$$

计算得 $\hat{b} = -8 \neq 2$，说明题目给定的 $\hat{b} = 2$ **不正确**。

实际上，由 $\hat{b} = -8$，$\hat{a} = \bar{y} - \hat{b}\bar{x} = 8 - (-8) \times 3 = 8 + 24 = 32$。

正确的回归方程为 $\hat{y} = -8x + 32$。

验证：将 $x = \bar{x} = 3$ 代入，$\hat{y} = -8 \times 3 + 32 = -24 + 32 = 8 = \bar{y}$。✓

**⚠️ 易错提醒：** 回归直线过 $(\bar{x}, \bar{y})$ 这一性质非常重要，可以用来快速求未知参数。但要注意，利用这一性质求出的参数必须与最小二乘法公式一致——如果题目给出的条件互相矛盾，需要通过计算来检验。

**💡 解题思路总结：** 回归直线过样本中心点 $(\bar{x}, \bar{y})$ 是线性回归的基本性质，在解题中经常用到。当已知回归方程的部分参数和样本均值时，可以直接利用此性质求未知参数。同时，最小二乘法公式是检验参数正确性的根本依据。
