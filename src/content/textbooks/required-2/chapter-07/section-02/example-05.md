---
type: example
textbook: required-2
chapter: 7
section: 2
number: 5
knowledge_points:
  - complex-number-operations
source: "人教A版2019"
---

**例题：** 已知 $z = a + bi$（$a, b \in \mathbb{R}$），且 $z^2 = 3 + 4i$，求 $z$。

---

**解答：**

**第1步：** 展开 $z^2$
> 📌 运用知识点：复数的乘方

$z^2 = (a + bi)^2 = a^2 + 2abi + b^2 i^2 = (a^2 - b^2) + 2abi$

**第2步：** 利用复数相等列方程
> 📌 运用知识点：复数相等

$(a^2 - b^2) + 2abi = 3 + 4i$

实部：$a^2 - b^2 = 3 \quad \cdots (1)$

虚部：$2ab = 4$，$ab = 2 \quad \cdots (2)$

**第3步：** 求解方程组
> 📌 运用知识点：解方程组

由 (2)：$b = \frac{2}{a}$

代入 (1)：$a^2 - \frac{4}{a^2} = 3$

设 $t = a^2$：$t - \frac{4}{t} = 3$，$t^2 - 3t - 4 = 0$

$(t - 4)(t + 1) = 0$，$t = 4$ 或 $t = -1$

因为 $t = a^2 \geq 0$，所以 $t = 4$，$a^2 = 4$，$a = 2$ 或 $a = -2$。

$a = 2$ 时 $b = 1$；$a = -2$ 时 $b = -1$。

所以 $z = 2 + i$ 或 $z = -2 - i$。

**💡 方法总结：** 设 $z = a + bi$，展开 $z^2$ 后利用复数相等列方程组。注意 $a^2 \geq 0$ 的约束，以及两组解互为相反数。
