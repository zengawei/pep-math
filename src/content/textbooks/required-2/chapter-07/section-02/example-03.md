---
type: example
textbook: required-2
chapter: 7
section: 2
number: 3
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
---

**例题：** 已知 $z = 2 - i$，求 $\frac{5}{z} + \bar{z}$。

---

**解答：**

**第1步：** 求 $\bar{z}$ 和 $\frac{5}{z}$
> 📌 运用知识点：复数的除法与共轭

$\bar{z} = 2 + i$

$$\frac{5}{z} = \frac{5}{2 - i} = \frac{5(2 + i)}{(2 - i)(2 + i)} = \frac{5(2 + i)}{4 + 1} = \frac{5(2 + i)}{5} = 2 + i$$

**第2步：** 求和
> 📌 运用知识点：复数的加法

$$\frac{5}{z} + \bar{z} = (2 + i) + (2 + i) = 4 + 2i$$

**💡 方法总结：** 注意 $\frac{5}{z} = \frac{5\bar{z}}{z\bar{z}} = \frac{5\bar{z}}{|z|^2}$。这里 $|z|^2 = 5$，所以 $\frac{5}{z} = \bar{z}$，结果等于 $2\bar{z} = 4 + 2i$。
