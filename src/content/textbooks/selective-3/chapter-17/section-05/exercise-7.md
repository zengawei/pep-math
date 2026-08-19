---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 7
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P37 练习A 第5题"
---

**题目：** 某次考试的成绩服从正态分布 $X \sim N(70, 10^2)$（单位：分），全年级共 $500$ 人。估计成绩在 $(60, 80]$ 范围内的学生约有多少人。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 70$，$\sigma = 10$。

**第2步：** 将区间与 $\mu \pm k\sigma$ 对应
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - \sigma = 70 - 10 = 60$$

$$\mu + \sigma = 70 + 10 = 80$$

因此 $(60, 80] = (\mu - \sigma, \mu + \sigma]$。

**第3步：** 求概率并估计人数
> 📌 运用知识点：$3\sigma$ 原则

$$P(60 < X \leqslant 80) = P(\mu - \sigma < X \leqslant \mu + \sigma) \approx 0.6827$$

估计人数：

$$500 \times 0.6827 \approx 341 \text{（人）}$$

**⚠️ 易错提醒：** 估计人数 = 概率 × 总人数，结果应取整数（四舍五入）。

**💡 解题思路总结：** 正态分布在实际中的应用：先确定区间对应 $\mu \pm k\sigma$，用 $3\sigma$ 原则求概率，再乘以总人数得到估计值。
