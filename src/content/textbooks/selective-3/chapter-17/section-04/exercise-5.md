---
type: exercise
textbook: selective-3
chapter: 17
section: 4
number: 5
difficulty: basic
category: practice
group: A
is_exam_question: false
knowledge_points:
  - hypergeometric-distribution
source: "人教A版2019"
references: "人教A版选择性必修第三册 P23 练习A 第2题"
---

**题目：** 一个袋中有 $6$ 个红球和 $4$ 个白球。从中不放回地随机取出 $3$ 个球，设取到的红球数为 $X$。求 $P(X = 2)$。

---

**解答：**

**第1步：** 确定参数
> 📌 运用知识点：超几何分布

总体 $N = 10$，红球 $M = 6$，抽取 $n = 3$。$X$ 服从超几何分布。

**第2步：** 计算 $P(X = 2)$
> 📌 运用知识点：超几何分布的概率公式

$$P(X = 2) = \frac{\mathrm{C}_6^2 \cdot \mathrm{C}_4^1}{\mathrm{C}_{10}^3}$$

其中 $\mathrm{C}_6^2 = 15$，$\mathrm{C}_4^1 = 4$，$\mathrm{C}_{10}^3 = 120$。

$$P(X = 2) = \frac{15 \times 4}{120} = \frac{60}{120} = \frac{1}{2}$$

**⚠️ 易错提醒：** 计算组合数时要仔细：$\mathrm{C}_6^2 = \frac{6 \times 5}{2} = 15$，不要算成 $12$ 或 $30$。

**💡 解题思路总结：** 直接代入超几何分布公式，分子是"从红球取 $2$ 个"与"从白球取 $1$ 个"的组合数之积，分母是"从全部取 $3$ 个"的组合数。
