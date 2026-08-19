---
type: exercise
textbook: selective-3
chapter: 17
section: 2
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
  - expected-value-variance
source: "人教A版2019"
references: "人教A版选择性必修第三册 P25 练习B 第1题"
---

**题目：** 一个盒中有 $3$ 个合格品和 $2$ 个不合格品。从中不放回地随机取出 $2$ 个产品，设 $X$ 为取出的不合格品个数。

(1) 求 $X$ 的分布列。

(2) 求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 确定 $X$ 的可能取值
> 📌 运用知识点：离散型随机变量

不合格品共 $2$ 个，取出 $2$ 个产品，$X$ 的可能取值为 $0, 1, 2$。

**第2步：** 计算各概率
> 📌 运用知识点：古典概型、组合数

从 $5$ 个产品中取 $2$ 个，共 $\mathrm{C}_5^2 = 10$ 种取法。

$$P(X = 0) = \frac{\mathrm{C}_2^0 \cdot \mathrm{C}_3^2}{\mathrm{C}_5^2} = \frac{1 \times 3}{10} = \frac{3}{10}$$

$$P(X = 1) = \frac{\mathrm{C}_2^1 \cdot \mathrm{C}_3^1}{\mathrm{C}_5^2} = \frac{2 \times 3}{10} = \frac{6}{10} = \frac{3}{5}$$

$$P(X = 2) = \frac{\mathrm{C}_2^2 \cdot \mathrm{C}_3^0}{\mathrm{C}_5^2} = \frac{1 \times 1}{10} = \frac{1}{10}$$

分布列为：

| $X$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{3}{10}$ | $\dfrac{3}{5}$ | $\dfrac{1}{10}$ |

**第3步：** 求 $E(X)$
> 📌 运用知识点：数学期望公式

$$E(X) = 0 \times \frac{3}{10} + 1 \times \frac{3}{5} + 2 \times \frac{1}{10} = 0 + \frac{3}{5} + \frac{2}{10} = \frac{6}{10} + \frac{2}{10} = \frac{8}{10} = \frac{4}{5}$$

**第4步：** 求 $D(X)$
> 📌 运用知识点：方差公式

$$D(X) = \left(0 - \frac{4}{5}\right)^2 \times \frac{3}{10} + \left(1 - \frac{4}{5}\right)^2 \times \frac{3}{5} + \left(2 - \frac{4}{5}\right)^2 \times \frac{1}{10}$$

$$= \frac{16}{25} \times \frac{3}{10} + \frac{1}{25} \times \frac{3}{5} + \frac{36}{25} \times \frac{1}{10}$$

$$= \frac{48}{250} + \frac{3}{125} + \frac{36}{250} = \frac{48}{250} + \frac{6}{250} + \frac{36}{250} = \frac{90}{250} = \frac{9}{25}$$

**⚠️ 易错提醒：** 求方差时计算量较大，建议先通分再计算，避免小数运算带来的精度问题。

**💡 解题思路总结：** 不放回抽样 → 先建分布列（组合数求概率），再按定义公式求 $E(X)$ 和 $D(X)$。注意验证概率之和为 $1$。
