---
type: example
textbook: selective-2
chapter: 16
section: 3
number: 1
knowledge_points:
  - binomial-theorem
  - binomial-properties
---

**例题：** 求 $\left(x + \dfrac{1}{x}\right)^{10}$ 展开式中的常数项。

**解答：**

**第1步：** 写出通项
> 📌 运用知识点：二项式定理

$\left(x + \dfrac{1}{x}\right)^{10}$ 的通项为

$$T_{r+1} = \binom{10}{r} x^{10-r} \cdot \left(\frac{1}{x}\right)^r = \binom{10}{r} x^{10-r} \cdot x^{-r} = \binom{10}{r} x^{10-2r}$$

**第2步：** 确定常数项对应的 $r$
> 📌 运用知识点：二项式定理

常数项要求 $x$ 的指数为 $0$，令

$$10 - 2r = 0 \implies r = 5$$

**第3步：** 计算常数项
> 📌 运用知识点：二项式定理

$$T_6 = \binom{10}{5} = \frac{10!}{5! \cdot 5!} = \frac{10 \times 9 \times 8 \times 7 \times 6}{5 \times 4 \times 3 \times 2 \times 1} = 252$$

所以展开式中的常数项为 $\mathbf{252}$。

