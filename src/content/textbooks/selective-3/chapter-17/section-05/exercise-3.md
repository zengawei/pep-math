---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 3
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P35 练习A 第1题"
---

**题目：** 设随机变量 $X \sim N(2, 9)$，指出该正态分布的参数 $\mu$ 和 $\sigma$ 的值，并写出其概率密度函数。

---

**解答：**

**第1步：** 识别参数
> 📌 运用知识点：正态分布的参数识别

由 $X \sim N(2, 9)$ 知 $\mu = 2$，$\sigma^2 = 9$，即 $\sigma = 3$。

**第2步：** 写出概率密度函数
> 📌 运用知识点：正态分布的概率密度函数

正态分布 $N(\mu, \sigma^2)$ 的概率密度函数为：

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad x \in \mathbb{R}$$

代入 $\mu = 2$，$\sigma = 3$：

$$f(x) = \frac{1}{3\sqrt{2\pi}} e^{-\frac{(x-2)^2}{18}}, \quad x \in \mathbb{R}$$

**⚠️ 易错提醒：** $N(\mu, \sigma^2)$ 中第二个参数是方差 $\sigma^2$，不是标准差 $\sigma$。$N(2, 9)$ 表示 $\sigma^2 = 9$，$\sigma = 3$，不要误认为 $\sigma = 9$。

**💡 解题思路总结：** 正态分布 $N(\mu, \sigma^2)$ 的两个参数：$\mu$ 是均值（决定对称轴位置），$\sigma^2$ 是方差（决定曲线的"胖瘦"）。写密度函数时注意 $\sigma$ 是标准差。
