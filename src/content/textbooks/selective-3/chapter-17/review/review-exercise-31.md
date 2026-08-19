---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 31
difficulty: hard
category: review
group: C
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
  - expected-value-variance
source: "人教A版2019"
references: "选择性必修第三册 P40 复习参考题 第31题"
---

**题目：** 某商场举行促销活动，顾客可以从一个装有 $10$ 个球的袋子中摸球（$6$ 个红球、$4$ 个白球），不放回地摸 $3$ 次。每摸到 $1$ 个红球奖励 $50$ 元，摸到白球无奖励。

（1）求奖励总额 $X$ 的分布表；

（2）求 $E(X)$ 和 $D(X)$。

---

**解答：**

**第1步：** 确定红球数的分布
> 📌 运用知识点：超几何分布

设摸到红球数为 $Y$，则 $Y$ 服从超几何分布，$Y$ 的可能取值为 $0, 1, 2, 3$。

$$P(Y = k) = \frac{\binom{6}{k}\binom{4}{3-k}}{\binom{10}{3}}$$

其中 $\binom{10}{3} = 120$。

$$P(Y = 0) = \frac{\binom{6}{0}\binom{4}{3}}{120} = \frac{4}{120} = \frac{1}{30}$$

$$P(Y = 1) = \frac{\binom{6}{1}\binom{4}{2}}{120} = \frac{36}{120} = \frac{3}{10}$$

$$P(Y = 2) = \frac{\binom{6}{2}\binom{4}{1}}{120} = \frac{60}{120} = \frac{1}{2}$$

$$P(Y = 3) = \frac{\binom{6}{3}\binom{4}{0}}{120} = \frac{20}{120} = \frac{1}{6}$$

**验证：** $\frac{1}{30} + \frac{3}{10} + \frac{1}{2} + \frac{1}{6} = \frac{1 + 9 + 15 + 5}{30} = \frac{30}{30} = 1$ ✓

**第2步：** 求 $X$ 的分布表
> 📌 运用知识点：离散型随机变量的变换

$X = 50Y$，所以 $X$ 的取值为 $0, 50, 100, 150$。

| $X$ | $0$ | $50$ | $100$ | $150$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\frac{1}{30}$ | $\frac{3}{10}$ | $\frac{1}{2}$ | $\frac{1}{6}$ |

**第3步：** 求 $E(X)$ 和 $D(X)$
> 📌 运用知识点：期望和方差的性质

先求 $E(Y)$ 和 $D(Y)$：

$$E(Y) = \frac{nM}{N} = \frac{3 \times 6}{10} = \frac{9}{5}$$

$$E(Y^2) = 0^2 \times \frac{1}{30} + 1^2 \times \frac{3}{10} + 2^2 \times \frac{1}{2} + 3^2 \times \frac{1}{6} = 0 + \frac{3}{10} + 2 + \frac{3}{2} = \frac{3 + 20 + 15}{10} = \frac{38}{10} = \frac{19}{5}$$

$$D(Y) = \frac{19}{5} - \left(\frac{9}{5}\right)^2 = \frac{19}{5} - \frac{81}{25} = \frac{95 - 81}{25} = \frac{14}{25}$$

利用线性性质：

$$E(X) = 50E(Y) = 50 \times \frac{9}{5} = 90$$

$$D(X) = 50^2 \cdot D(Y) = 2500 \times \frac{14}{25} = 1400$$

**⚠️ 易错提醒：** $X = 50Y$ 是线性变换，$D(X) = 50^2 D(Y)$ 中系数要平方。不要误写为 $D(X) = 50 D(Y)$。

**💡 解题思路总结：** 奖励总额是红球数的线性函数。先求红球数 $Y$ 的超几何分布，再利用 $E(aY) = aE(Y)$ 和 $D(aY) = a^2 D(Y)$ 求奖励的期望和方差，避免对 $X$ 重新计算。
