---
type: example
textbook: selective-2
chapter: 14
section: 3
number: 1
knowledge_points:
  - geometric-sequence
  - geometric-sequence-sum
---

**例题：** 已知等比数列 $\{a_n\}$ 中，$a_1 + a_3 = 10$，$a_2 + a_4 = 20$，求 $S_5$。

**解答：**

**第1步：** 用 $a_1$ 和 $q$ 表示已知条件
> 📌 运用知识点：等比数列通项公式

$$a_1 + a_3 = a_1 + a_1 q^2 = a_1(1 + q^2) = 10 \quad \cdots (1)$$

$$a_2 + a_4 = a_1 q + a_1 q^3 = a_1 q(1 + q^2) = 20 \quad \cdots (2)$$

**第2步：** 两式相除求公比
> 📌 运用知识点：等比数列通项公式

$(2) \div (1)$：

$$q = \frac{a_1 q(1 + q^2)}{a_1(1 + q^2)} = \frac{20}{10} = 2$$

**第3步：** 求首项
> 📌 运用知识点：等比数列通项公式

代入 $(1)$：$a_1(1 + 4) = 10$，解得 $a_1 = 2$。

**第4步：** 计算 $S_5$
> 📌 运用知识点：等比数列前 $n$ 项和

$$S_5 = \frac{a_1(1 - q^5)}{1 - q} = \frac{2 \times (1 - 32)}{1 - 2} = \frac{-62}{-1} = 62$$

