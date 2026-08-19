---
type: exercise
textbook: selective-3
chapter: 17
section: 5
number: 9
difficulty: medium
category: practice
group: B
is_exam_question: false
knowledge_points:
  - normal-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P39 练习B 第2题"
---

**题目：** 某工厂生产的螺栓长度（单位：$\text{mm}$）服从正态分布 $X \sim N(30, 0.5^2)$。质检标准规定螺栓长度在 $(29, 31]$ 范围内为合格品。

(1) 求单个螺栓合格的概率。

(2) 若该厂一天生产 $2000$ 个螺栓，估计一天中不合格品约有多少个？

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：正态分布的参数识别

$\mu = 30$，$\sigma = 0.5$。

**第2步：** 求合格概率
> 📌 运用知识点：$3\sigma$ 原则

$$\mu - 2\sigma = 30 - 1 = 29, \quad \mu + 2\sigma = 30 + 1 = 31$$

$$P(29 < X \leqslant 31) = P(\mu - 2\sigma < X \leqslant \mu + 2\sigma) \approx 0.9545$$

**第3步：** 估计不合格品数量
> 📌 运用知识点：概率的实际应用

不合格概率：

$$P(\text{不合格}) = 1 - 0.9545 = 0.0455$$

估计不合格品数量：

$$2000 \times 0.0455 = 91 \text{（个）}$$

**⚠️ 易错提醒：** "不合格"是"合格"的对立事件，用 $1 - P(\text{合格})$ 计算。估计数量时直接乘以总数。

**💡 解题思路总结：** 质量控制问题：先求合格概率（$3\sigma$ 原则），再用 $1 - P(\text{合格})$ 求不合格概率，最后乘以产量估计不合格品数量。
