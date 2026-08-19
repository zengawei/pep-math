---
type: example
textbook: selective-2
chapter: 16
section: 3
number: 2
knowledge_points:
  - binomial-theorem
source: "人教A版2019"
references: "选择性必修第二册 P70 例2"
---

**例题：** 求 $\left(x - \dfrac{2}{x}\right)^6$ 展开式中的常数项。

---

**解答：**

**第1步：** 写出通项
> 📌 运用知识点：二项式定理

$$T_{r+1} = \binom{6}{r} x^{6-r} \left(-\frac{2}{x}\right)^r = \binom{6}{r} \cdot (-2)^r \cdot x^{6-r} \cdot x^{-r} = \binom{6}{r} \cdot (-2)^r \cdot x^{6-2r}$$

**第2步：** 确定常数项对应的 $r$
> 📌 运用知识点：二项式定理

令 $6 - 2r = 0$，解得 $r = 3$。

**第3步：** 代入计算
> 📌 运用知识点：二项式定理

$$T_4 = \binom{6}{3} \cdot (-2)^3 = 20 \times (-8) = -160$$

所以展开式中的常数项为 $\mathbf{-160}$。

**💡 解题思路总结：** 求常数项→写通项→令 $x$ 的指数为 $0$→解出 $r$→代入计算。注意 $(-2)^r$ 中负号的幂次。
