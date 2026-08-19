---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P29 练习C 第1题"
---

**题目：** 某游戏规定：参与者从一个装有 $5$ 个红球和 $5$ 个白球的箱中不放回地摸出 $3$ 个球。每摸到 $1$ 个红球得 $10$ 分，每摸到 $1$ 个白球扣 $5$ 分。设 $X$ 为摸出的红球个数，$Y$ 为总得分。

(1) 求 $X$ 的分布列。

(2) 求 $Y$ 关于 $X$ 的表达式，并求 $E(Y)$。

(3) 从期望的角度分析，参与此游戏是否划算（即 $E(Y)$ 是否大于 $0$）？

---

**解答：**

**第1步：** 求 $X$ 的分布列
> 📌 运用知识点：超几何分布

总体 $N = 10$，红球 $M = 5$，不放回抽取 $n = 3$。$X$ 服从超几何分布：

$$P(X = k) = \frac{\mathrm{C}_5^k \cdot \mathrm{C}_5^{3-k}}{\mathrm{C}_{10}^3}, \quad k = 0, 1, 2, 3$$

其中 $\mathrm{C}_{10}^3 = 120$。

$$P(X = 0) = \frac{\mathrm{C}_5^0 \cdot \mathrm{C}_5^3}{120} = \frac{1 \times 10}{120} = \frac{1}{12}$$

$$P(X = 1) = \frac{\mathrm{C}_5^1 \cdot \mathrm{C}_5^2}{120} = \frac{5 \times 10}{120} = \frac{5}{12}$$

$$P(X = 2) = \frac{\mathrm{C}_5^2 \cdot \mathrm{C}_5^1}{120} = \frac{10 \times 5}{120} = \frac{5}{12}$$

$$P(X = 3) = \frac{\mathrm{C}_5^3 \cdot \mathrm{C}_5^0}{120} = \frac{10 \times 1}{120} = \frac{1}{12}$$

分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{12}$ | $\dfrac{5}{12}$ | $\dfrac{5}{12}$ | $\dfrac{1}{12}$ |

**第2步：** 建立 $Y$ 关于 $X$ 的表达式并求 $E(Y)$
> 📌 运用知识点：数学期望的线性性质

摸出 $X$ 个红球，则白球为 $3 - X$ 个。

$$Y = 10X - 5(3 - X) = 10X - 15 + 5X = 15X - 15$$

先求 $E(X)$：

$$E(X) = 0 \times \frac{1}{12} + 1 \times \frac{5}{12} + 2 \times \frac{5}{12} + 3 \times \frac{1}{12} = \frac{0 + 5 + 10 + 3}{12} = \frac{18}{12} = \frac{3}{2}$$

由期望的线性性质：

$$E(Y) = E(15X - 15) = 15E(X) - 15 = 15 \times \frac{3}{2} - 15 = \frac{45}{2} - 15 = \frac{15}{2} = 7.5$$

**第3步：** 分析是否划算
> 📌 运用知识点：数学期望的实际意义

$E(Y) = 7.5 > 0$，说明从期望角度看，参与此游戏平均每次可得 $7.5$ 分，参与是划算的。

**⚠️ 易错提醒：** 建立 $Y$ 与 $X$ 的关系时，白球个数是 $3 - X$（不是固定的），得分 = 红球得分 $-$ 白球扣分，不要遗漏白球的扣分。

**💡 解题思路总结：** 游戏得分问题：先用超几何分布建分布列，再将总得分表示为 $X$ 的线性函数，利用 $E(aX+b) = aE(X)+b$ 快速求期望。最后用 $E(Y)$ 的正负判断是否划算。
