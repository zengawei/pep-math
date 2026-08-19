---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - normal-distribution
  - expected-value-variance
  - discrete-random-variable
source: "人教A版2019"
references: "人教A版选择性必修第三册 P40 练习C 第1题"
---

**题目：** 某射手每次射击的环数 $X$ 近似服从正态分布。已知该射手射击 $100$ 次，环数的平均值 $\overline{x} = 8.5$，方差 $s^2 = 0.25$。

(1) 写出 $X$ 所服从的正态分布。

(2) 利用 $3\sigma$ 原则估计该射手射击环数在 $(8, 9]$ 范围内的概率。

(3) 若该射手再射击 $200$ 次，估计环数在 $(8, 9]$ 范围内的次数。

---

**解答：**

**第1步：** 确定正态分布的参数
> 📌 运用知识点：用样本均值和方差估计总体参数

用样本均值估计 $\mu$，样本方差估计 $\sigma^2$：

$$\hat{\mu} = \overline{x} = 8.5, \quad \hat{\sigma}^2 = s^2 = 0.25, \quad \hat{\sigma} = 0.5$$

因此 $X \sim N(8.5, 0.5^2)$。

**第2步：** 求 $P(8 < X \leqslant 9)$
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - \sigma = 8.5 - 0.5 = 8$$

$$\mu + \sigma = 8.5 + 0.5 = 9$$

因此 $(8, 9] = (\mu - \sigma, \mu + \sigma]$。

$$P(8 < X \leqslant 9) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

**第3步：** 估计射击次数
> 📌 运用知识点：概率的频率估计

$$200 \times 0.6827 \approx 137 \text{（次）}$$

**⚠️ 易错提醒：** 用样本统计量估计总体参数时，$\overline{x}$ 估计 $\mu$，$s^2$ 估计 $\sigma^2$。注意 $N(\mu, \sigma^2)$ 的第二个参数是方差，不是标准差。

**💡 解题思路总结：** 实际问题中，正态分布的参数往往未知，需要用样本数据估计。然后用 $3\sigma$ 原则求概率，最后乘以试验次数得到估计值。这是"统计 → 概率 → 预测"的完整链条。
