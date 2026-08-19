---
type: exercise
textbook: selective-3
chapter: 17
section: 0
number: 7
difficulty: basic
category: review
group: A
is_exam_question: false
knowledge_points:
  - discrete-random-variable
  - distribution-table
source: "人教A版2019"
references: "选择性必修第三册 P36 复习参考题 第7题"
---

**题目：** 一个袋中装有 $3$ 个红球和 $2$ 个白球，从中随机取出 $2$ 个球，设 $X$ 为取出的红球个数。求 $X$ 的分布表。

---

**解答：**

**第1步：** 确定 $X$ 的可能取值
> 📌 运用知识点：离散型随机变量

从 $5$ 个球中取 $2$ 个，红球最多 $3$ 个、白球最多 $2$ 个，所以 $X$ 的可能取值为 $0, 1, 2$。

**第2步：** 计算各概率
> 📌 运用知识点：分布表

从 $5$ 个球中取 $2$ 个的总取法为 $\binom{5}{2} = 10$。

$$P(X = 0) = \frac{\binom{3}{0}\binom{2}{2}}{\binom{5}{2}} = \frac{1 \times 1}{10} = \frac{1}{10}$$

$$P(X = 1) = \frac{\binom{3}{1}\binom{2}{1}}{\binom{5}{2}} = \frac{3 \times 2}{10} = \frac{6}{10} = \frac{3}{5}$$

$$P(X = 2) = \frac{\binom{3}{2}\binom{2}{0}}{\binom{5}{2}} = \frac{3 \times 1}{10} = \frac{3}{10}$$

**第3步：** 列出分布表
> 📌 运用知识点：分布表

| $X$ | $0$ | $1$ | $2$ |
|:---:|:---:|:---:|:---:|
| $P$ | $\frac{1}{10}$ | $\frac{3}{5}$ | $\frac{3}{10}$ |

**验证：** $\frac{1}{10} + \frac{3}{5} + \frac{3}{10} = \frac{1+6+3}{10} = 1$ ✓

**⚠️ 易错提醒：** 计算组合数时注意分母是 $\binom{5}{2}$ 而非排列数。分布表中所有概率之和必须为 $1$，可用于验算。

**💡 解题思路总结：** 求离散型随机变量的分布表：①确定所有可能取值；②对每个取值计算对应概率（常用组合计数）；③列表并验证概率之和为1。
