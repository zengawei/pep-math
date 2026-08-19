---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 17
difficulty: medium
category: review
group: B
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - distribution-table
source: "人教A版2019"
references: "选择性必修第三册 P38 复习参考题 第17题"
---

**题目：** 某班有 $10$ 名同学，其中 $6$ 名男生、$4$ 名女生。从中随机选 $3$ 人参加竞赛，设 $X$ 为选中女生的人数。

（1）求 $X$ 的分布表；

（2）求 $E(X)$。

---

**解答：**

**第1步：** 确定 $X$ 的取值和概率公式
> 📌 运用知识点：超几何分布

$X$ 服从超几何分布，可能取值为 $0, 1, 2, 3$。

$$P(X = k) = \frac{\binom{4}{k}\binom{6}{3-k}}{\binom{10}{3}}$$

其中 $\binom{10}{3} = 120$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布

$$P(X = 0) = \frac{\binom{4}{0}\binom{6}{3}}{120} = \frac{1 \times 20}{120} = \frac{1}{6}$$

$$P(X = 1) = \frac{\binom{4}{1}\binom{6}{2}}{120} = \frac{4 \times 15}{120} = \frac{60}{120} = \frac{1}{2}$$

$$P(X = 2) = \frac{\binom{4}{2}\binom{6}{1}}{120} = \frac{6 \times 6}{120} = \frac{36}{120} = \frac{3}{10}$$

$$P(X = 3) = \frac{\binom{4}{3}\binom{6}{0}}{120} = \frac{4 \times 1}{120} = \frac{1}{30}$$

**验证：** $\frac{1}{6} + \frac{1}{2} + \frac{3}{10} + \frac{1}{30} = \frac{5 + 15 + 9 + 1}{30} = \frac{30}{30} = 1$ ✓

分布表为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\frac{1}{6}$ | $\frac{1}{2}$ | $\frac{3}{10}$ | $\frac{1}{30}$ |

**第3步：** 求 $E(X)$
> 📌 运用知识点：数学期望

$$E(X) = 0 \times \frac{1}{6} + 1 \times \frac{1}{2} + 2 \times \frac{3}{10} + 3 \times \frac{1}{30} = 0 + \frac{1}{2} + \frac{3}{5} + \frac{1}{10} = \frac{5 + 6 + 1}{10} = \frac{12}{10} = \frac{6}{5}$$

**用公式验证：** $E(X) = \frac{nM}{N} = \frac{3 \times 4}{10} = \frac{6}{5}$ ✓

**⚠️ 易错提醒：** 超几何分布中，组合数的分子分母对应关系要搞清楚：$\binom{M}{k}$ 是"目标类"取 $k$ 个，$\binom{N-M}{n-k}$ 是"非目标类"取 $n-k$ 个。

**💡 解题思路总结：** 不放回抽样中"目标类"被抽到的个数服从超几何分布。求分布表逐项计算即可，期望可直接用公式 $E(X) = \frac{nM}{N}$。
