---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 4
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - discrete-random-variable
source: "人教A版2019"
references: "人教A版选择性必修第三册 P22 练习A 第1题"
---

**题目：** 同时抛掷 $3$ 枚硬币，设 $X$ 为正面朝上的枚数。

(1) 写出 $X$ 的所有可能取值。

(2) 求 $X$ 的分布列。

---

**解答：**

**第1步：** 确定 $X$ 的所有可能取值
> 📌 运用知识点：离散型随机变量的概念

抛掷 $3$ 枚硬币，正面朝上的枚数 $X$ 的可能取值为 $0, 1, 2, 3$。

**第2步：** 计算各取值的概率
> 📌 运用知识点：古典概型、组合数

抛掷 $3$ 枚硬币，共有 $2^3 = 8$ 种等可能结果。

$$P(X = 0) = \frac{\mathrm{C}_3^0}{8} = \frac{1}{8}$$

$$P(X = 1) = \frac{\mathrm{C}_3^1}{8} = \frac{3}{8}$$

$$P(X = 2) = \frac{\mathrm{C}_3^2}{8} = \frac{3}{8}$$

$$P(X = 3) = \frac{\mathrm{C}_3^3}{8} = \frac{1}{8}$$

**第3步：** 验证并写出分布列

$$\frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = 1 \quad \checkmark$$

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{8}$ | $\dfrac{3}{8}$ | $\dfrac{3}{8}$ | $\dfrac{1}{8}$ |

**⚠️ 易错提醒：** 不要遗漏 $X=0$ 的情况。$X$ 的取值包括从 $0$ 到 $n$ 的所有整数。

**💡 解题思路总结：** 抛硬币问题中，正面朝上的枚数服从二项分布（等概率 $p=0.5$ 的特殊情形）。用组合数 $\mathrm{C}_n^k$ 计算恰好 $k$ 枚正面朝上的取法数，再除以总结果数 $2^n$。
