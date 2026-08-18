---
type: definition
textbook: selective-3
chapter: 17
section: 5
name: 正态分布
related_knowledge_points:
  - normal-distribution
---

**定义（精确表述）：** 若连续型随机变量 $X$ 的概率密度函数为

$$\varphi(x) = \frac{1}{\sqrt{2\pi}\,\sigma} \mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad x \in (-\infty, +\infty)$$

其中 $\mu \in \mathbb{R}$，$\sigma > 0$，则称 $X$ 服从**正态分布**，记作 $X \sim N(\mu, \sigma^2)$。

**正态曲线的性质：**

1. 曲线在 $x$ 轴上方，关于直线 $x = \mu$ 对称；
2. 曲线在 $x = \mu$ 处取得最大值 $\dfrac{1}{\sqrt{2\pi}\,\sigma}$；
3. 曲线与 $x$ 轴围成的面积为 $1$；
4. $\mu$ 决定曲线的位置（对称轴），$\sigma$ 决定曲线的形状（"胖瘦"）：$\sigma$ 越小，曲线越"瘦高"；$\sigma$ 越大，曲线越"矮胖"。

**$3\sigma$ 原则：**

$$P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

$$P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

$$P(\mu - 3\sigma < X \leqslant \mu + 3\sigma) \approx 0.9973$$

即 $X$ 几乎必然落在 $(\mu - 3\sigma, \mu + 3\sigma]$ 内，超出此范围的概率仅为 $0.27\%$。

**通俗解释：** 正态分布是自然界最常见的分布——人的身高、测量误差、考试成绩等都近似服从正态分布。它的图像是一条"钟形曲线"：中间高、两边低、左右对称。参数 $\mu$ 是均值，决定钟形曲线在数轴上的位置（中心在哪里）；参数 $\sigma$ 是标准差，决定曲线的胖瘦（数据有多分散）。$\sigma$ 小，数据集中在均值附近，曲线就"瘦高"；$\sigma$ 大，数据分散，曲线就"矮胖"。$3\sigma$ 原则告诉我们，几乎所有数据都落在均值左右 $3$ 个标准差的范围内。
