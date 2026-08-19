---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 11
difficulty: hard
category: practice
group: C
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
  - expected-value-variance
  - distribution-table
source: "人教A版2019"
references: "人教A版选择性必修第三册 P29 练习C 第1题"
---

**题目：** 某学校从 $10$ 名候选人（$6$ 名教师、$4$ 名学生）中不放回地随机选出 $3$ 人组成评审组。设选出的学生人数为 $X$。评审组的评分规则如下：若 $X = 0$，得 $90$ 分；若 $X = 1$，得 $80$ 分；若 $X = 2$，得 $60$ 分；若 $X = 3$，得 $30$ 分。设评审组得分为 $Y$。

(1) 求 $X$ 的分布列。

(2) 求 $E(Y)$。

(3) 若规定得分不低于 $70$ 分为"合理"，求评审组评分合理的概率。

---

**解答：**

**第1步：** 求 $X$ 的分布列
> 📌 运用知识点：超几何分布

$N = 10$，学生 $M = 4$，$n = 3$。$\mathrm{C}_{10}^3 = 120$。

$$P(X = 0) = \frac{\mathrm{C}_4^0 \cdot \mathrm{C}_6^3}{120} = \frac{1 \times 20}{120} = \frac{1}{6}$$

$$P(X = 1) = \frac{\mathrm{C}_4^1 \cdot \mathrm{C}_6^2}{120} = \frac{4 \times 15}{120} = \frac{1}{2}$$

$$P(X = 2) = \frac{\mathrm{C}_4^2 \cdot \mathrm{C}_6^1}{120} = \frac{6 \times 6}{120} = \frac{3}{10}$$

$$P(X = 3) = \frac{\mathrm{C}_4^3 \cdot \mathrm{C}_6^0}{120} = \frac{4}{120} = \frac{1}{30}$$

| $X$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{6}$ | $\dfrac{1}{2}$ | $\dfrac{3}{10}$ | $\dfrac{1}{30}$ |

**第2步：** 建立 $Y$ 的分布列并求 $E(Y)$
> 📌 运用知识点：数学期望

$Y$ 的分布列（由 $X$ 与 $Y$ 的对应关系）：

| $Y$ | $90$ | $80$ | $60$ | $30$ |
|:---:|:---:|:---:|:---:|:---:|
| $P$ | $\dfrac{1}{6}$ | $\dfrac{1}{2}$ | $\dfrac{3}{10}$ | $\dfrac{1}{30}$ |

$$E(Y) = 90 \times \frac{1}{6} + 80 \times \frac{1}{2} + 60 \times \frac{3}{10} + 30 \times \frac{1}{30}$$

$$= 15 + 40 + 18 + 1 = 74$$

**第3步：** 求评审组评分合理的概率
> 📌 运用知识点：概率的加法法则

"合理"即 $Y \geqslant 70$，对应 $Y = 90$ 或 $Y = 80$，即 $X = 0$ 或 $X = 1$。

$$P(Y \geqslant 70) = P(X = 0) + P(X = 1) = \frac{1}{6} + \frac{1}{2} = \frac{2}{3}$$

**⚠️ 易错提醒：** 本题的关键是将 $Y$ 的取值与 $X$ 的取值建立对应关系。$Y$ 不是 $X$ 的线性函数，不能直接用 $E(Y) = aE(X) + b$，必须按 $Y$ 的分布列逐项计算。

**💡 解题思路总结：** 复合随机变量问题：先求基础变量 $X$ 的分布列，再根据映射关系得到 $Y$ 的分布列，最后按定义求 $E(Y)$。注意 $Y$ 与 $X$ 的关系是否为线性。
