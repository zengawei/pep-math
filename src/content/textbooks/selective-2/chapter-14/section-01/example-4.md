---
type: example
textbook: selective-2
chapter: 14
section: 1
number: 4
knowledge_points:
  - geometric-sequence
source: "人教A版2019"
references: "选择性必修第二册 P6 例4"
---

**例题：** 已知等比数列 $\{a_n\}$ 的各项均为正数，且 $a_1 a_9 = 4$，求 $\log_2 a_1 + \log_2 a_2 + \cdots + \log_2 a_9$ 的值。

---

**解答：**

**第1步：** 利用对数运算法则合并
> 📌 运用知识点：对数运算性质

由对数的加法性质 $\log_b x + \log_b y = \log_b(xy)$，得：

$$\log_2 a_1 + \log_2 a_2 + \cdots + \log_2 a_9 = \log_2(a_1 \cdot a_2 \cdot a_3 \cdots a_9)$$

**第2步：** 利用等比数列性质求乘积
> 📌 运用知识点：等比数列的对称性质

在等比数列中，下标之和相等的两项之积相等，即：

$$a_1 \cdot a_9 = a_2 \cdot a_8 = a_3 \cdot a_7 = a_4 \cdot a_6 = a_5^2$$

已知 $a_1 a_9 = 4$，所以 $a_5^2 = 4$。

由于各项均为正数，$a_5 > 0$，因此 $a_5 = 2$。

前 $9$ 项的乘积为：

$$a_1 \cdot a_2 \cdots a_9 = (a_1 \cdot a_9)(a_2 \cdot a_8)(a_3 \cdot a_7)(a_4 \cdot a_6) \cdot a_5 = 4 \times 4 \times 4 \times 4 \times 2 = 4^4 \times 2 = 256 \times 2 = 512$$

也可以更简洁地计算：

$$a_1 \cdot a_2 \cdots a_9 = (a_5^2)^4 \cdot a_5 = a_5^9 = 2^9 = 512$$

**第3步：** 计算最终结果

$$\log_2(a_1 \cdot a_2 \cdots a_9) = \log_2 2^9 = 9$$

$$\boxed{9}$$

**💡 解题思路总结：** 本题综合考查等比数列性质与对数运算。核心技巧有两个：一是利用对数加法将求和转化为求乘积的对数；二是利用等比数列"下标之和相等则积相等"的性质，将 $9$ 项之积化为 $a_5^9$。在等比数列中，$a_1 \cdot a_2 \cdots a_{2k-1} = a_{k}^{2k-1}$（奇数项之积等于中间项的幂次），这是一个常用结论。
