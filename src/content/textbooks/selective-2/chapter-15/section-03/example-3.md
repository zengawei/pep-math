---
type: example
textbook: selective-2
chapter: 15
section: 3
number: 3
knowledge_points:
  - derivative-applications
source: "人教A版2019"
references: "人教A版2019 选择性必修第二册 P49 例3"
---

**例题：** 证明：当 $x > 0$ 时，$\ln x \leq x - 1$。

---

**解答：**

**第1步：** 构造辅助函数
> 📌 运用知识点：导数的应用——不等式证明

设 $h(x) = \ln x - (x - 1) = \ln x - x + 1$，$x \in (0, +\infty)$。

要证 $\ln x \leq x - 1$，即证 $h(x) \leq 0$。

**第2步：** 求导分析单调性
> 📌 运用知识点：导数的应用——不等式证明

$h'(x) = \dfrac{1}{x} - 1 = \dfrac{1 - x}{x}$

当 $0 < x < 1$ 时，$h'(x) > 0$，$h(x)$ 单调递增；

当 $x > 1$ 时，$h'(x) < 0$，$h(x)$ 单调递减。

**第3步：** 求最大值并完成证明
> 📌 运用知识点：导数的应用——不等式证明

$h(x)$ 在 $x = 1$ 处取最大值：

$h(1) = \ln 1 - 1 + 1 = 0 - 1 + 1 = 0$

所以 $h(x) \leq h(1) = 0$，即 $\ln x - x + 1 \leq 0$。

因此 $\ln x \leq x - 1$，等号在 $x = 1$ 时成立。$\blacksquare$

**💡 解题思路总结：** 用导数证明不等式的核心方法是构造辅助函数，转化为求最值问题。本题构造 $h(x) = \ln x - x + 1$，证明其最大值 $\leq 0$。关键不等式 $\ln x \leq x - 1$ 在高考中经常作为中间结论使用。
