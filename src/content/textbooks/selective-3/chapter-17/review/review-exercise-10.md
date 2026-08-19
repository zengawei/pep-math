---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 10
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第10题"
---

**题目：** 一批产品共 $20$ 件，其中有 $5$ 件次品。从中随机抽取 $3$ 件，设 $X$ 为抽到的次品数。求 $X$ 的分布表和数学期望 $E(X)$。

---

**解答：**

**第1步：** 确定 $X$ 的取值范围和分布类型
> 📌 运用知识点：超几何分布

不放回地从含 $5$ 件次品的 $20$ 件产品中取 $3$ 件，$X$ 服从超几何分布。$X$ 的可能取值为 $0, 1, 2, 3$。

$$P(X = k) = \frac{\binom{5}{k}\binom{15}{3-k}}{\binom{20}{3}}$$

其中 $\binom{20}{3} = \frac{20 \times 19 \times 18}{3 \times 2 \times 1} = 1140$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布

$$P(X = 0) = \frac{\binom{5}{0}\binom{15}{3}}{\binom{20}{3}} = \frac{1 \times 455}{1140} = \frac{455}{1140} = \frac{91}{228}$$

$$P(X = 1) = \frac{\binom{5}{1}\binom{15}{2}}{\binom{20}{3}} = \frac{5 \times 105}{1140} = \frac{525}{1140} = \frac{105}{228}$$

$$P(X = 2) = \frac{\binom{5}{2}\binom{15}{1}}{\binom{20}{3}} = \frac{10 \times 15}{1140} = \frac{150}{1140} = \frac{30}{228}$$

$$P(X = 3) = \frac{\binom{5}{3}\binom{15}{0}}{\binom{20}{3}} = \frac{10 \times 1}{1140} = \frac{10}{1140} = \frac{2}{228}$$

**验证：** $\frac{91 + 105 + 30 + 2}{228} = \frac{228}{228} = 1$ ✓

**第3步：** 计算数学期望
> 📌 运用知识点：数学期望

$$E(X) = 0 \times \frac{91}{228} + 1 \times \frac{105}{228} + 2 \times \frac{30}{228} + 3 \times \frac{2}{228}$$

$$= \frac{0 + 105 + 60 + 6}{228} = \frac{171}{228} = \frac{3}{4}$$

**也可用超几何分布期望公式验证：** $E(X) = n \cdot \frac{M}{N} = 3 \times \frac{5}{20} = \frac{3}{4}$ ✓

**⚠️ 易错提醒：** 超几何分布是不放回抽样模型，与二项分布（有放回抽样）不同。计算组合数时要分清哪部分是"次品"、哪部分是"正品"。

**💡 解题思路总结：** 超几何分布的概率公式为 $P(X=k) = \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}$，期望公式为 $E(X) = \frac{nM}{N}$。注意超几何分布是不放回抽样，二项分布是有放回抽样。
