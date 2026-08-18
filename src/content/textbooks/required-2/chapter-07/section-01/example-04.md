---
type: example
textbook: required-2
chapter: 7
section: 1
number: 4
knowledge_points:
  - complex-number-concept
source: "人教A版2019"
---

**例题：** 已知 $z_1 = m + (4 - m^2)i$，$z_2 = 2\cos\theta + (\lambda + 3\sin\theta)i$，且 $z_1 = z_2$。求 $\lambda$ 的取值范围。

---

**解答：**

**第1步：** 利用复数相等条件
> 📌 运用知识点：复数的概念——复数相等

$z_1 = z_2$，实部和虚部分别相等：

$\begin{cases} m = 2\cos\theta \quad \cdots (1) \\ 4 - m^2 = \lambda + 3\sin\theta \quad \cdots (2) \end{cases}$

**第2步：** 消元求 $\lambda$
> 📌 运用知识点：三角函数

由 (1)：$m = 2\cos\theta$，$m^2 = 4\cos^2\theta$

代入 (2)：$4 - 4\cos^2\theta = \lambda + 3\sin\theta$

$4\sin^2\theta = \lambda + 3\sin\theta$

$\lambda = 4\sin^2\theta - 3\sin\theta$

设 $t = \sin\theta$，$t \in [-1, 1]$：

$\lambda = 4t^2 - 3t$

**第3步：** 求值域
> 📌 运用知识点：二次函数

$f(t) = 4t^2 - 3t$，$t \in [-1, 1]$

对称轴 $t = \frac{3}{8} \in [-1, 1]$

$f\left(\frac{3}{8}\right) = 4 \times \frac{9}{64} - 3 \times \frac{3}{8} = \frac{9}{16} - \frac{9}{8} = -\frac{9}{16}$

$f(-1) = 4 + 3 = 7$，$f(1) = 4 - 3 = 1$

所以 $\lambda$ 的取值范围是 $\left[-\frac{9}{16}, 7\right]$。

**💡 方法总结：** 复数相等转化为方程组，利用三角恒等式消元，再转化为二次函数求值域问题。
