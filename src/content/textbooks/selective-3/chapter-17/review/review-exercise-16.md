---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 16
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - binomial-distribution
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P38 复习参考题 第16题"
---

**题目：** 某产品的不合格率为 $0.1$。现从中随机抽取 $100$ 件进行检验，设不合格品数为 $X$。

（1）求 $X$ 的分布类型及参数；

（2）求 $E(X)$ 和 $D(X)$；

（3）求 $P(X \geqslant 1)$（用对立事件表示即可）。

---

**解答：**

**第1步：** 确定分布类型
> 📌 运用知识点：二项分布

每次抽取可看作一次伯努利试验，不合格概率 $p = 0.1$，共 $n = 100$ 次独立试验。

因此 $X \sim B(100, 0.1)$。

**第2步：** 求期望和方差
> 📌 运用知识点：二项分布的期望和方差

$$E(X) = np = 100 \times 0.1 = 10$$

$$D(X) = np(1-p) = 100 \times 0.1 \times 0.9 = 9$$

**第3步：** 求 $P(X \geqslant 1)$
> 📌 运用知识点：对立事件

$$P(X \geqslant 1) = 1 - P(X = 0) = 1 - \binom{100}{0}(0.1)^0(0.9)^{100} = 1 - 0.9^{100}$$

其中 $0.9^{100} \approx 0.0000266$，所以 $P(X \geqslant 1) \approx 1 - 0.0000266 \approx 0.99997$。

**⚠️ 易错提醒：** 当产品总量很大时，不放回抽样可以近似看作有放回抽样（每次不合格率近似不变），因此可以用二项分布近似。

**💡 解题思路总结：** 大量独立伯努利试验中，成功次数服从二项分布。"至少一个"问题用对立事件 $1 - P(X=0)$ 最简便。
