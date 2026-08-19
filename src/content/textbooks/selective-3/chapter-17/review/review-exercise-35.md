---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 35
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
  - expected-value-variance
  - binomial-distribution
  - hypergeometric-distribution
source: "人教A版2019"
references: "选择性必修第三册 P40 复习参考题 第35题"
---

**题目：** 某批产品共 $100$ 件，其中有 $10$ 件次品。

（1）从中不放回地抽取 $5$ 件，设次品数为 $X$，求 $E(X)$ 和 $D(X)$；

（2）若该批产品数量非常大（可视为无穷多），次品率仍为 $10\%$。从中抽取 $5$ 件，设次品数为 $Y$，求 $E(Y)$ 和 $D(Y)$；

（3）比较（1）和（2）的结果，说明超几何分布与二项分布的关系。

---

**解答：**

**第1步：** 不放回抽样——超几何分布
> 📌 运用知识点：超几何分布

$X$ 服从超几何分布，$N = 100$，$M = 10$，$n = 5$。

$$E(X) = \frac{nM}{N} = \frac{5 \times 10}{100} = \frac{1}{2}$$

超几何分布的方差公式：

$$D(X) = \frac{nM(N-M)(N-n)}{N^2(N-1)} = \frac{5 \times 10 \times 90 \times 95}{100^2 \times 99} = \frac{427500}{990000} = \frac{4275}{9900} = \frac{171}{396} = \frac{19}{44}$$

**第2步：** 有放回抽样（大量）——二项分布
> 📌 运用知识点：二项分布

$Y \sim B(5, 0.1)$。

$$E(Y) = np = 5 \times 0.1 = 0.5$$

$$D(Y) = np(1-p) = 5 \times 0.1 \times 0.9 = 0.45 = \frac{9}{20}$$

**第3步：** 比较分析
> 📌 运用知识点：两种分布的关系

**期望相同：** $E(X) = E(Y) = 0.5$。

**方差不同：** $D(X) = \frac{19}{44} \approx 0.4318$，$D(Y) = 0.45$。

$$D(X) = D(Y) \times \frac{N - n}{N - 1} = 0.45 \times \frac{95}{99} \approx 0.4318$$

修正因子 $\frac{N-n}{N-1}$ 称为"有限总体修正系数"。

当 $N \to \infty$ 时，$\frac{N-n}{N-1} \to 1$，超几何分布的方差趋于二项分布的方差。

**结论：** 当总体数量 $N$ 远大于样本量 $n$ 时（通常 $\frac{n}{N} < 0.05$），不放回抽样可以近似为有放回抽样，超几何分布近似于二项分布。

**⚠️ 易错提醒：** 超几何分布的方差公式比较复杂，注意与二项分布方差的区别。有限总体修正系数 $\frac{N-n}{N-1} < 1$，说明不放回抽样的方差总是小于对应的二项分布方差（不放回抽样"信息更多"，波动更小）。

**💡 解题思路总结：** 超几何分布与二项分布的关系：当 $N$ 很大、$n$ 相对很小时，不放回抽样近似于有放回抽样，超几何分布近似于二项分布。期望相同，方差相差一个有限总体修正系数。
