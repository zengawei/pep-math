---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 8
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P25 练习A 第5题"
---

**题目：** 某班有 $10$ 名同学，其中 $6$ 名男生、$4$ 名女生。现从中随机选出 $3$ 名代表（不放回），设选到的女生人数为 $X$。

(1) 求 $X$ 的分布列。

(2) 求选到的女生不少于 $1$ 名的概率。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：超几何分布

$N = 10$，女生 $M = 4$，$n = 3$。$X$ 的可能取值为 $0, 1, 2, 3$。

$\mathrm{C}_{10}^3 = 120$。

**第2步：** 计算各概率
> 📌 运用知识点：超几何分布的概率公式

$$P(X = 0) = \frac{\mathrm{C}_4^0 \cdot \mathrm{C}_6^3}{120} = \frac{1 \times 20}{120} = \frac{1}{6}$$

$$P(X = 1) = \frac{\mathrm{C}_4^1 \cdot \mathrm{C}_6^2}{120} = \frac{4 \times 15}{120} = \frac{60}{120} = \frac{1}{2}$$

$$P(X = 2) = \frac{\mathrm{C}_4^2 \cdot \mathrm{C}_6^1}{120} = \frac{6 \times 6}{120} = \frac{36}{120} = \frac{3}{10}$$

$$P(X = 3) = \frac{\mathrm{C}_4^3 \cdot \mathrm{C}_6^0}{120} = \frac{4 \times 1}{120} = \frac{1}{30}$$

验证：$\dfrac{1}{6} + \dfrac{1}{2} + \dfrac{3}{10} + \dfrac{1}{30} = \dfrac{5 + 15 + 9 + 1}{30} = \dfrac{30}{30} = 1$ ✓

分布列为：

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{6}$ | $\dfrac{1}{2}$ | $\dfrac{3}{10}$ | $\dfrac{1}{30}$ |

**第3步：** 求女生不少于 $1$ 名的概率
> 📌 运用知识点：对立事件

$$P(X \geqslant 1) = 1 - P(X = 0) = 1 - \frac{1}{6} = \frac{5}{6}$$

**⚠️ 易错提醒：** "不少于 $1$ 名"即"至少 $1$ 名"，用对立事件 $1 - P(X = 0)$ 最简便，不要逐项相加 $P(X=1) + P(X=2) + P(X=3)$。

**💡 解题思路总结：** 选人问题是不放回抽样，用超几何分布。"至少一个"用对立事件法简化计算。
